<script lang='ts'>
    //@ts-nocheck
    import Tooltip, {
        Wrapper,
        Title,
        Content,
        Link,
        RichActions,
    } from '@smui/tooltip';
    import Paper, { Subtitle } from '@smui/paper';
    import { Input } from '@smui/textfield';
    import IconButton, { Icon } from '@smui/icon-button';
    import { Svg } from '@smui/common';
    import {
        elements,
        objectCount,
        selectedId,
    } from "$lib/vectorial/pages/vectorial/stores";
    
    
    // import {Shape, IntPath, Intersection} from '$lib/vectorial/utils/common/2D';

    export let elementAvailable = false;
    let isGettingn = false,
        n = 0;
    
    
    // export let boundingBox;
    const getIndex = (a, arr) => {
        if (!arr || arr.length === 0) return -1;
        let index = -1;
        for (let i = 0; i < arr.length; i++) {
            if (a === arr[i]) index = i;
        }
        return index;
    };
    const duplicateElement = (id, targetParent, targetId) => {
        let newCopy = $elements[id].duplicate();
        newCopy.id = targetId;
        newCopy.parent = targetParent;
        $elements[newCopy.id] = newCopy;
        $elements[targetParent].children.push(targetId);

        //update pointList, relations, pointOnPathList

        $elements = $elements;
        $objectCount = $objectCount + 1;
    };
    const duplicateGroup = (id, targetParent, targetId) => {
        let newCopy = $elements[id].duplicate();
        newCopy.id = targetId;
        newCopy.parent = targetParent;
        $elements[newCopy.id] = newCopy;
        $elements[targetParent].children.push(targetId);
        $elements[targetId].children = [];

        $objectCount = $objectCount + 1;
        $elements = $elements;

        for (let i = 0; i < $elements[id].children.length; i++) {
            let parts = $elements[id].children[i].split("-");
            let firstHalf = parts[0];
            for (let j = 1; j < parts.length - 1; j++) {
                firstHalf += "-" + parts[j];
            }
            let child = $elements[id].children[i];
            let newChild = firstHalf + "-" + $objectCount;
            // $elements[targetId].children.push(newChild);
            if (
                child.split("-")[0].includes("Group") ||
                child.split("-")[0].includes("Layer")
            ) {
                duplicateGroup(child, targetId, newChild);
            } else {
                duplicateElement(child, targetId, newChild);
            }
        }
    };
    const duplicate = () => {
        let parts = $selectedId.split("-");
        let firstHalf = parts[0];
        for (let i = 1; i < parts.length - 1; i++) {
            firstHalf += "-" + parts[i];
        }
        let newChild = firstHalf + "-" + $objectCount;
        if (
            $selectedId.split("-")[0].includes("Group") ||
            $selectedId.split("-")[0].includes("Layer")
        ) {
            duplicateGroup(
                $selectedId,
                $elements[$selectedId].parent,
                newChild
            );
        } else {
            duplicateElement(
                $selectedId,
                $elements[$selectedId].parent,
                newChild
            );
        }
    };
    const duplicateN = () => {
        for (let i = 0; i < n; i++) {
            duplicate();
        }
        isGettingn = false;
    };
    const deleteElement = (id) => {
        elementAvailable = false;
        //update the orders of smaller siblings
        if ($elements[id]) {
            let parent = $elements[id].parent;
            let children = $elements[parent].children;
            let index = -1;
            for (let i = 0; i < children.length; i++) {
                if (children[i] === id) index = i;
            }
            children.splice(index, 1);
            delete $elements[id];
            $elements[parent].children = children;
            $elements = $elements;
            $selectedId = null;
            elementAvailable = true;
        }
    };
    const deleteGroup = (id) => {
        elementAvailable = false;
        //update the orders of smaller siblings
        let parent = $elements[id].parent;
        let children = $elements[parent].children;
        let index = -1;
        for (let i = 0; i < children.length; i++) {
            if (children[i] === id) index = i;
        }
        children.splice(index, 1);
        $elements[parent].children = children;
        while ($elements[id].children.length > 0) {
            deleteItem($elements[id].children[0]);
        }

        delete $elements[id];

        $elements = $elements;
        $selectedId = null;
        elementAvailable = true;
    };
    const deleteItem = (id) => {
        if (id) {
            if (id.split("-")[0] === "Group") {
                deleteGroup(id);
            } else if(id.split("-")[0] === "Layer") {
                //remove reference from Layers
                // console.log('Deleting layer...', id)
                $elements.Layers = $elements.Layers.filter(elemId => elemId !== id);
                $elements = $elements;
            } else {
                deleteElement(id);
            }
        }
    };
    const movePosition = (dir) => {
        if($elements[$selectedId].parent.includes('SVG')) {
            //rearrange the Layers
            let layerIndex = $elements.Layers.indexOf($selectedId);
            switch(dir) {
                case 'up': {
                    if(layerIndex === $elements.Layers.length - 1) return;
                    let temp = $elements.Layers[layerIndex + 1];
                    $elements.Layers[layerIndex + 1] = $elements.Layers[layerIndex];
                    $elements.Layers[layerIndex] = temp;
                    $elements = $elements;
                    break;
                }
                case 'down': {
                    if(layerIndex === 0) return;
                    let temp = $elements.Layers[layerIndex - 1];
                    $elements.Layers[layerIndex - 1] = $elements.Layers[layerIndex];
                    $elements.Layers[layerIndex] = temp;
                    $elements = $elements;
                    break;
                }
            }
            return;
        }
        let parent = $elements[$selectedId].parent;
        let children = $elements[parent].children;
        let index = getIndex($selectedId, children);
        switch (dir) {
            case "up": {
                if (index === children.length - 1) return;
                let temp = children[index + 1];
                children[index + 1] = children[index];
                children[index] = temp;
                $elements[parent].children = children;
                $elements = $elements;
                break;
            }
            case "down": {
                if (index === 0) return;
                let temp = children[index - 1];
                children[index - 1] = children[index];
                children[index] = temp;
                $elements[parent].children = children;
                $elements = $elements;
                break;
            }
        }
    };
    

    // const intersect = () => {
    //     console.log($elementsNode);
    //     let svgElementIds = Object.keys($elementsNode);
    //     let shape1 = new Shape(svgElementIds[0])
    //     let shape2 = new Shape(svgElementIds[1])
    //     let intersection = new Intersection();
    //     let inter = intersection.intersectShapes(shape1, shape2);
    //     console.log(inter.status, inter.points);
    // }
    
    
</script>
<div class="buttons">
    
    <!-- <IconButton on:click={pasteFromClipboard}>
        <Icon class="material-icons">content_paste</Icon>
    </IconButton> -->
    <Wrapper rich>
        <IconButton on:click={duplicate}>
            <Icon class="material-icons">content_copy</Icon>
        </IconButton>
        <Tooltip>
            <Content>Duplicate selected item</Content>
        </Tooltip>
    </Wrapper>
    {#if isGettingn}
        <div class="textInput">
            <Input
                type="number"
                bind:value={n}
                placeholder="Number of copies"
                class="solo-input"
            />
            <IconButton on:click={duplicateN}>
                <Icon class="material-icons">arrow_right_alt</Icon>
            </IconButton>
        </div>
    {/if}
    <Wrapper rich>
        <IconButton on:click={() => (isGettingn = !isGettingn)}>
            <Icon component={Svg} viewBox="1.24 -1.64 24 24">
                <g>
                    <g
                    >
                        <g
                            transform="matrix(1 0 0 1 1.1600000000000001 -0.11999999999999922)"
                        >
                            <rect
                                x="2"
                                y="2"
                                width="12"
                                height="15"
                                rx="1"
                                ry="1"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 5.840000000000002 2.6400000000000006)"
                            />
    
                            <path
                                d="M 4.3199999999999985,15.360312500000003 V 1.3203125000000018 H 16.72"
                                
                                fill-rule="evenodd"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />
    
                            <text
                                x="12"
                                y="12"
                                font-size="12px"
                                font-weight="400"
                                
                                stroke="currentColor"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 -2.3999999999999986 4.520000000000003)"
                                >N
                            </text></g>
                        </g>
                    </g>
            
            </Icon>
        </IconButton>
        <Tooltip>
            <Content>Duplicate selected item N times</Content>
        </Tooltip>
    </Wrapper>
    <Wrapper rich>
        <IconButton on:click={() => movePosition("up")}>
            <Icon class="material-icons">arrow_upward</Icon>
        </IconButton>
        <Tooltip>
            <Content>Move element above in layer</Content>
        </Tooltip>
    </Wrapper>
    <Wrapper rich>
        <IconButton on:click={() => movePosition("down")}>
            <Icon class="material-icons">arrow_downward</Icon>
        </IconButton>
        <Tooltip>
            <Content>Move element below in layer</Content>
        </Tooltip>
    </Wrapper>
    
    <!-- <IconButton on:click={() => deleteItem($selectedId)}>
        <Icon class="material-icons">delete</Icon>
    </IconButton> -->
    
    
</div>
<style>
    .buttons {
        display: flex;
        flex-direction: row;
    }
    .textInput {
        display: flex;
        align-items: center;
    }
    * :global(.solo-input) {
        padding-left: 0.5em;
        width: 70px;
        color: var(--mdc-theme-on-surface);
        border: 0.5px solid;
    }
    * :global(.solo-input::placeholder) {
        color: var(--mdc-theme-on-surface);
        opacity: 0.6;
    }
</style>
