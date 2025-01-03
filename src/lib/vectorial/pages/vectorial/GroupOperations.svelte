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
    import IconButton, { Icon } from '@smui/icon-button';
    import {
        onSVG,
        pathMode,
        lassoElements,
        isLassoGroup,
        showBBoxControls,
        addingNodes,
        Z,
        isLasso,
        svg,
        canvasBackground,
        DRAWING,
        objectCount,
        selectionMode,
        selectedElement,
        selectedElements,
        selectedId,
        selectedVertex,
        selectedControl0,
        selectedControl1,
        currentLayer,
        appHistory,
        currentState,
        activeElement,
        BBOX,
        symbols,
        showControls,
    } from "$lib/vectorial/pages/vectorial/stores";
    import {
        defs,
        elements,
        symbol,
        mirrorVertex,
        mirrorMode,
        circleMode,
        circledVertices,
        circleCenter,
    } from "$lib/vectorial/pages/vectorial/stores";
    import { Point } from "$lib/vectorial/utils/common/point";
    import { Group } from "$lib/vectorial/utils/common/g";
    let targetGroup;
    const getIndex = (a, arr) => {
        if (!arr || arr.length === 0) return -1;
        let index = -1;
        for (let i = 0; i < arr.length; i++) {
            if (a === arr[i]) index = i;
        }
        return index;
    };
    const compareFn = (a, b) => {
        //a={id}

        if ($elements[a].parent === $elements[b].parent) {
            let ia = getIndex(a, $elements[$elements[a].parent].children);
            let ib = getIndex(b, $elements[$elements[b].parent].children);
            return ia - ib;
        } else {
            // let la = $elements[groupIda].treeNode.elements.length;
            // let lb = $elements[groupIdb].treeNode.elements.length;
            // if(la !== lb) return la - lb;
            return compareFn(
                $elements[$elements[a].parent],
                $elements[$elements[b].parent]
            );
        }
    };
    const sortSelection = () => {
        $selectedElements.sort(compareFn);
        $selectedElements = $selectedElements;
    };
    const deleteElementsFromLayer = (elementList) => {
        elementList.forEach((item) => {
            let index = getIndex(item, $elements[$elements[item].parent].children);
            $elements[$elements[item].parent].children.splice(index, 1);
        });

        $elements = $elements;
    };
    const computeInitialSBox = (id) => {
        let children = $elements[id].children;

        let xMin = $elements[children[0]].sbox.tl.x;
        let xMax = $elements[children[0]].sbox.br.x;
        let yMin = $elements[children[0]].sbox.tl.y;
        let yMax = $elements[children[0]].sbox.br.y;

        for (let i = 0; i < children.length; i++) {
            if ($elements[children[i]].sbox.tl.x < xMin)
                xMin = $elements[children[i]].sbox.tl.x;
            if ($elements[children[i]].sbox.bl.x < xMin)
                xMin = $elements[children[i]].sbox.bl.x;
            if ($elements[children[i]].sbox.tr.x < xMin)
                xMin = $elements[children[i]].sbox.tr.x;
            if ($elements[children[i]].sbox.br.x < xMin)
                xMin = $elements[children[i]].sbox.br.x;

            if ($elements[children[i]].sbox.tl.y < yMin)
                yMin = $elements[children[i]].sbox.tl.y;
            if ($elements[children[i]].sbox.bl.y < yMin)
                yMin = $elements[children[i]].sbox.bl.y;
            if ($elements[children[i]].sbox.tr.y < xMin)
                yMin = $elements[children[i]].sbox.tr.y;
            if ($elements[children[i]].sbox.br.y < xMin)
                yMin = $elements[children[i]].sbox.br.y;

            if ($elements[children[i]].sbox.tl.x > xMax)
                xMax = $elements[children[i]].sbox.tl.x;
            if ($elements[children[i]].sbox.bl.x > xMax)
                xMax = $elements[children[i]].sbox.bl.x;
            if ($elements[children[i]].sbox.tr.x > xMax)
                xMax = $elements[children[i]].sbox.tr.x;
            if ($elements[children[i]].sbox.br.x > xMax)
                xMax = $elements[children[i]].sbox.br.x;

            if ($elements[children[i]].sbox.tl.y > yMax)
                yMax = $elements[children[i]].sbox.tl.y;
            if ($elements[children[i]].sbox.bl.y > yMax)
                yMax = $elements[children[i]].sbox.bl.y;
            if ($elements[children[i]].sbox.tr.y > xMax)
                yMax = $elements[children[i]].sbox.tr.y;
            if ($elements[children[i]].sbox.br.y > xMax)
                yMax = $elements[children[i]].sbox.br.y;
        }
        $elements[id].sbox.tl = new Point(xMin, yMin);
        $elements[id].sbox.tr = new Point(xMax, yMin);
        $elements[id].sbox.bl = new Point(xMin, yMax);
        $elements[id].sbox.br = new Point(xMax, yMax);

        $elements[id].axis = new Point((xMin + xMax) / 2, (yMin + yMax) / 2);
        $elements = $elements;
    };
    const createGroup = () => {
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
            }
        }
        let group = new Group({
            id: "Group-" + $DRAWING.drawingID + "-" + $objectCount,
            parent: layer,
            layer: layer,
        });
        $elements[group.id] = group;
        $selectedId = group.id;
        $objectCount = $objectCount + 1;

        sortSelection();

        deleteElementsFromLayer($selectedElements); //remove references from parents
        $elements[group.parent].children.push(group.id);
        //update elements in $selectedElements
        $selectedElements.forEach((id) => {
            $elements[id].layer = group.layer;
            $elements[id].parent = group.id;
            $elements[id].isLocked = true;
            group.children.push(id);
            //tm of the element
            // $elements[elem.id].tm = new DOMMatrix([
            //     $elements[elem.id].CTM.a, $elements[elem.id].CTM.b, $elements[elem.id].CTM.c, $elements[elem.id].CTM.d, $elements[elem.id].CTM.e, $elements[elem.id].CTM.f
            // ]);
        });

        $elements = $elements;
        computeInitialSBox(group.id);
        $selectedElements = [];
    };
    const ungroup = () => {
        //copy children to parent
        //change parent of children
        //multiply tm to children
        //delete the group
        // console.log($elements);
        if($elements[$elements[$selectedId].parent]) {
            if ($elements[$selectedId].children) {
                $elements[$selectedId].children.forEach((element) => {
                    $elements[$elements[$selectedId].parent].children.push(element);
                    $elements[element].parent = $elements[$selectedId].parent;
                    $elements[element].tm = $elements[$selectedId].tm.multiply(
                        $elements[element].tm
                    );
                    $elements[element].isLocked = false;
                });
            }
            let index = getIndex(
                $selectedId,
                $elements[$elements[$selectedId].parent].children
            );
            $elements[$elements[$selectedId].parent].children.splice(index, 1);
            delete $elements[$selectedId];
            $selectedId = null;
            $elements = $elements;
        }
        
    };
    const add2Group = () => {
        if(!($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'g')) return;
        $svg.addEventListener('click', takeElement);
        $svg.addEventListener('touchstart', takeElement);
        targetGroup = $selectedId;
    }
    const takeElement = (evt) => {
        evt.preventDefault();
        if($selectedId && $elements[$selectedId]) {
            //transfer group transforms to its children and set group transform to identity
            $elements[targetGroup].children.forEach((element) => {
                $elements[element].tm = $elements[targetGroup].tm.multiply($elements[element].tm);
            });
            $elements[targetGroup].tm = new DOMMatrix();
            //Apply selected elements parent transform to the element
            $elements[$selectedId].tm = $elements[$elements[$selectedId].parent].tm.multiply($elements[$selectedId].tm)
            $elements[$elements[$selectedId].parent].children = $elements[$elements[$selectedId].parent].children.filter(id => id !== $selectedId);
            $elements[$selectedId].parent = targetGroup;
            $elements[targetGroup].children = [...$elements[targetGroup].children, $selectedId];
            // console.log($elements[$elements[$selectedId].parent].children, $elements[targetGroup].children)
            $elements = $elements;
            $svg.removeEventListener('click', takeElement);
            $svg.removeEventListener('touchstart', takeElement);
        }
    }
</script>
<article>
    {#if $selectedElements && $selectedElements.length > 1}
    <Wrapper rich>
        <IconButton on:click={createGroup}>
            <Icon class="material-icons">group_add</Icon>
        </IconButton>
        <Tooltip>
            <Content>
                Group selected items
            </Content>
        </Tooltip>
    </Wrapper>
    
    {/if}
    {#if $selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'g'}
        <Wrapper>
            <IconButton on:click={ungroup} mini>
                <Icon class="material-icons">group_remove</Icon>
            </IconButton>
            <Tooltip>
                <Content style="color:currentColor">Ungroup selected group item</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper>
            <IconButton on:click={add2Group} mini>
                <Icon class="material-icons">add</Icon>
            </IconButton>
            <Tooltip>
                <Content style="color:currentColor">Add another element to the group</Content>
            </Tooltip>
        </Wrapper>
    {/if}
</article>
<style>
    article {
        display:flex;
        flex-direction:row;
    }
</style>