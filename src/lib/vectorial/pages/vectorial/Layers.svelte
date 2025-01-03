<script lang="ts">
    //@ts-nocheck
    import MenuSurface from "@smui/menu-surface";
    import Paper, { Subtitle } from '@smui/paper';
    import Chip, { Set, TrailingAction, Text } from "@smui/chips";
    import Button, { Label } from "@smui/button";
    import {
        elements,
        selectedId,
        selectedElements,
        currentLayer,
        objectCount,
        DRAWING,
    } from "./stores";
    import { onMount } from "svelte";
    import LayerGroup from "./LayerGroup.svelte";
    import { Group } from "$lib/vectorial/utils/common/g";
    import { Point } from "$lib/vectorial/utils/common/point";
    import { ripple } from "$lib/vectorial/ui/ripple";
    const getIndex = (a, arr) => {
        if (!arr || arr.length === 0) return -1;
        let index = -1;
        for (let i = 0; i < arr.length; i++) {
            if (a === arr[i]) index = i;
        }
        return index;
    };
    const compareFn = (a, b) => {
        //a={id, name, parent,tag,layer,children?}

        if ($elements[a].parent === $elements[b].parent) {
            let ia = getIndex(a, $elements[$elements[a].parent].children);
            let ib = getIndex(b, $elements[$elements[b].parent].children);
            return ia - ib;
        } else {
            // let la = $elements[groupIda].treeNode.elements.length;
            // let lb = $elements[groupIdb].treeNode.elements.length;
            // if(la !== lb) return la - lb;
            return compareFn($elements[a].parent, $elements[b].parent);
        }
    };
    const sortSelection = () => {
        $selectedElements.sort(compareFn);
        $selectedElements = $selectedElements;
    };
    const deleteElementsFromLayer = (elementList) => {
        elementList.forEach((item) => {
            let index = getIndex(
                item,
                $elements[$elements[item].parent].children
            );
            $elements[$elements[item].parent].children.splice(index, 1);
        });

        $elements = $elements;
    };
    const createGroup = () => {
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        // if($elements.Layers.length > 0) {
        //     if($elements.Layers[0] === 'Layer-'+$DRAWING.drawingID + '-0') {
        //         layer = 'Layer-' + $currentLayer;
        //     }
        // }
        let group = new Group({
            id: "Group-" + $DRAWING.drawingID + "-" + $objectCount,
            parent: layer,
            layer: layer,
        });
        $elements[group.id] = group;

        $objectCount = $objectCount + 1;

        sortSelection();

        deleteElementsFromLayer($selectedElements); //remove references from parents
        $elements[group.parent].children.push(group.id);
        //update elements in $selectedElements
        $selectedElements.forEach((elem) => {
            $elements[elem].layer = group.layer;
            $elements[elem].parent = group.id;
            $elements[elem].isLocked = true;
            group.children.push(elem);
            //tm of the element
            // $elements[elem.id].tm = new DOMMatrix([
            //     $elements[elem.id].CTM.a, $elements[elem.id].CTM.b, $elements[elem.id].CTM.c, $elements[elem.id].CTM.d, $elements[elem.id].CTM.e, $elements[elem.id].CTM.f
            // ]);
        });

        $elements = $elements;
        $selectedElements = [];
    };
    const compareHCorners = (a, b) => {
        return a.tl.x - b.tl.x;
    };
    const compareVCorners = (a, b) => {
        return a.tl.y - b.tl.y;
    };
    const distributeElements = (dir) => {
        let corners = [];
        if (!$selectedElements || $selectedElements.length === 0) return;
        for (let i = 0; i < $selectedElements.length; i++) {
            corners = [
                ...corners,
                {
                    id: $selectedElements[i],
                    tl: $elements[$selectedElements[i]].sbox.tl,
                },
            ];
        }
        switch (dir) {
            case "H": {
                corners.sort(compareHCorners);
                let D = corners[corners.length - 1].tl.x - corners[0].tl.x;
                let Sum = 0;
                for (let i = 0; i < corners.length - 1; i++) {
                    Sum +=
                        $elements[corners[i].id].sbox.tr.x -
                        $elements[corners[i].id].sbox.tl.x;
                }
                let Gap = D - Sum;
                let gap = Gap / (corners.length - 1);
                let positions = [],
                    sum = 0,
                    dx = 0,
                    dy = 0;
                for (let i = 0; i < corners.length; i++) {
                    positions.push(new Point(sum + i * gap, corners[0].tl.y));

                    dx = sum + i * gap + corners[0].tl.x - corners[i].tl.x;
                    dy = 0;

                    sum +=
                        $elements[corners[i].id].sbox.tr.x -
                        $elements[corners[i].id].sbox.tl.x;
                    $elements[corners[i].id].translate(dx, dy);
                    $elements = $elements;
                }
                break;
            }
            case "V": {
                corners.sort(compareVCorners);

                let D = corners[corners.length - 1].tl.y - corners[0].tl.y;
                let Sum = 0;
                for (let i = 0; i < corners.length - 1; i++) {
                    Sum +=
                        $elements[corners[i].id].sbox.tr.y -
                        $elements[corners[i].id].sbox.tl.y;
                }
                let Gap = D - Sum;
                let gap = Gap / (corners.length - 1);
                let positions = [],
                    sum = 0,
                    dx = 0,
                    dy = 0;
                for (let i = 0; i < corners.length; i++) {
                    positions.push(new Point(corners[0].tl.y, sum + i * gap));

                    dy = sum + i * gap + corners[0].tl.y - corners[i].tl.y;
                    dx = 0;

                    sum +=
                        $elements[corners[i].id].sbox.tr.y -
                        $elements[corners[i].id].sbox.tl.y;

                    $elements[corners[i].id].translate(dx, dy);
                    $elements = $elements;
                }
                break;
            }
        }
    };
    const alignElements = (dir, ancor) => {
        if (!$selectedElements || $selectedElements.length === 0) return;
        let dx = 0,
            dy = 0;
        switch (dir) {
            case "H": {
                switch (ancor) {
                    case "L": {
                        for (let i = 0; i < $selectedElements.length; i++) {
                            dx =
                                $elements[$selectedElements[0]].sbox.tl.x -
                                $elements[$selectedElements[i]].sbox.tl.x;
                            dy = 0;

                            $elements[$selectedElements[i]].translate(dx, dy);
                            $elements = $elements;
                        }
                        break;
                    }
                    case "C": {
                        for (let i = 0; i < $selectedElements.length; i++) {
                            dx =
                                $elements[$selectedElements[0]].axis.x -
                                $elements[$selectedElements[i]].axis.x;
                            dy = 0;

                            $elements[$selectedElements[i]].translate(dx, dy);
                            $elements = $elements;
                        }
                        break;
                    }
                    case "R": {
                        for (let i = 0; i < $selectedElements.length; i++) {
                            dx =
                                $elements[$selectedElements[0]].sbox.tr.x -
                                $elements[$selectedElements[i]].sbox.tr.x;
                            dy = 0;

                            $elements[$selectedElements[i]].translate(dx, dy);
                            $elements = $elements;
                        }
                        break;
                    }
                }
                break;
            }
            case "V": {
                switch (ancor) {
                    case "T": {
                        for (let i = 0; i < $selectedElements.length; i++) {
                            dy =
                                $elements[$selectedElements[0]].sbox.tl.y -
                                $elements[$selectedElements[i]].sbox.tl.y;
                            dx = 0;

                            $elements[$selectedElements[i]].translate(dx, dy);
                            $elements = $elements;
                        }
                        break;
                    }
                    case "C": {
                        for (let i = 0; i < $selectedElements.length; i++) {
                            dy =
                                $elements[$selectedElements[0]].axis.y -
                                $elements[$selectedElements[i]].axis.y;
                            dx = 0;

                            $elements[$selectedElements[i]].translate(dx, dy);
                            $elements = $elements;
                        }
                        break;
                    }
                    case "B": {
                        for (let i = 0; i < $selectedElements.length; i++) {
                            dy =
                                $elements[$selectedElements[0]].sbox.br.y -
                                $elements[$selectedElements[i]].sbox.br.y;
                            dx = 0;

                            $elements[$selectedElements[i]].translate(dx, dy);
                            $elements = $elements;
                        }
                        break;
                    }
                }
                break;
            }
        }
    };
    // function addInputChip() {
    //     if (input.length) {
    //         input.push(input[input.length - 1] + 1);
    //         input = input;
    //     } else {
    //         input.push(1);
    //         input = input;
    //     }
    // }
    const selectedIndex = (id) => {
		let index = -1;
		for(let i = 0; i < $selectedElements.length; i++) {
			if($selectedElements[i] === id) {
				index = i;
				return index;
			}
		}
		return index;
	}
    const updateSelection = (id) => {
        let index = selectedIndex(id);

		if(index !== -1) {
			$selectedElements.splice(index, 1);
			$selectedId = null;
		}
        $selectedElements = $selectedElements;
        // console.log($selectedElements)
    }
    
</script>
<article>
<!-- <MenuSurface static style="width: 100%;padding-top: 1em; overflow:auto;max-height:100vh;"> -->
    <Paper>
        {#each $elements?.Layers as layer}
            <LayerGroup id={layer} expanded />
        {/each}
        {#if $selectedElements?.length > 0}
            <h3 class="mdc-typography--headline6">Selected elements</h3>
            <Set bind:chips={$selectedElements} let:chip input>
                <Chip {chip}>
                    <Text>{chip.split('-')[0]+chip.split('-')[2]}</Text>
                    <TrailingAction icon$class="material-icons" 
                        >cancel</TrailingAction
                    >
                </Chip>
            </Set>

            <!-- {#each $selectedElements as elem}
                <span
                    >{elem.split("-")[0] + elem.split("-")[2]}
                    {$elements[elem].name}
                </span>
            {/each} -->
            <br />
            <Button on:click={createGroup}>
                <Label>Make Group</Label>
            </Button>
            <div
                class="attributeGroup"
                style="display:flex; justify-content: space-between;gap:0.5em;"
            >
                <span
                    class="iconButton material-icons"
                    use:ripple
                    on:click={() => distributeElements("H")}
                    title="Distribute horizontally">horizontal_distribute</span
                >
                <span
                    class="iconButton material-icons"
                    use:ripple
                    on:click={() => distributeElements("V")}
                    title="Distribute vertically">vertical_distribute</span
                >
                <span
                    class="iconButton material-icons"
                    use:ripple
                    on:click={() => alignElements("H", "L")}
                    title="Align horizontal left">align_horizontal_left</span
                >
                <span
                    class="iconButton material-icons"
                    use:ripple
                    on:click={() => alignElements("H", "C")}
                    title="Align horizontal center">align_horizontal_center</span
                >
                <span
                    class="iconButton material-icons"
                    use:ripple
                    on:click={() => alignElements("H", "R")}
                    title="Align horizontal right">align_horizontal_right</span
                >
                <span
                    class="iconButton material-icons"
                    use:ripple
                    on:click={() => alignElements("V", "T")}
                    title="Align vertical top">align_vertical_top</span
                >
                <span
                    class="iconButton material-icons"
                    use:ripple
                    on:click={() => alignElements("V", "C")}
                    title="Align vertical center">align_vertical_center</span
                >
                <span
                    class="iconButton material-icons"
                    use:ripple
                    on:click={() => alignElements("V", "B")}
                    title="Align vertical bottom">align_vertical_bottom</span
                >
            </div>
        {/if}
    </Paper>
<!-- </MenuSurface> -->
</article>

<style>
    article {
        width: 300px;
    }
    .attributeGroup {
        background: rgb(184, 183, 183);
        border-radius: 10px;
        color: rgb(3, 3, 3);
        padding: 1em;
        margin: 1em 0;
    }
    .iconButton {
        font-size: 1.5em;
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
</style>
