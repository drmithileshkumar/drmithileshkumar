<script lang='ts'>
    //@ts-nocheck
    import Card, { Content, Actions } from '@smui/card';
    import {
        svg,
        selectedId,
        elements,
        elementsNode,
        selectedVertex,
        selectedControl0,
        selectedControl1,
        activeElement,
        lassoElements,
        selectedElements,
        boundingBox,
        isLasso,
    } from "./stores";
    import Slider from "$lib/vectorial/ui/Slider.svelte";
    import FormField from '@smui/form-field';
    import Button from "@smui/button";
    import { ripple } from "$lib/vectorial/ui/ripple";

    import Checkbox from '@smui/checkbox';
    
    import Textfield from "@smui/textfield";
    import { Point } from "$lib/vectorial/utils/common/point";
    import { onMount } from "svelte";
    
    let x, y, width, height, angle = 0, textId;
    let xPrev, yPrev, widthPrev, heightPrev, fixedPoint, anglePrev;
    let subpath = 0,
        index = 0,
        verticesx = {},
        tinx = {},
        toutx = {},
        verticesy = {},
        tiny = {},
        touty = {},
        nodeType;
    let isGettingGrid = false,
        gridRow = 0,
        gridColumn = 0,
        rowGap = 10,
        columnGap = 10,
        gridx = 0,
        gridy = 0;
    onMount(() => {
    });
    const changen = () => {
        $elements[$selectedId].setPoints();
        $elementsNode[$selectedId].setAttribute(
            "points",
            $elements[$selectedId].points
        );
        $elements[$selectedId].bbox = $elementsNode[$selectedId].getBBox();
        $elements[$selectedId].updateSelectionBox();
        $elements = $elements;
        // saveHistory();
    };
    const updateSbox = (id = $selectedId) => {
        $elementsNode[id] = $elementsNode[id];
        $elements[id].bbox = $elementsNode[id]?.getBBox();
        $elements[id].ctm = $boundingBox
            .getScreenCTM()
            .inverse()
            .multiply($elementsNode[id].getScreenCTM());
        $elements[id].updateSelectionBox();
        $elementsNode = $elementsNode;
        $elements = $elements;
    };
    const changex = () => {
        let dx = x - xPrev;
        $elements[$selectedId].translate(dx, 0);
        $elements = $elements;
        xPrev = x;
    };
    const changey = () => {
        let dy = y - yPrev;
        $elements[$selectedId].translate(0, dy);
        $elements = $elements;
        yPrev = y;
    };

    const changeWidth = () => {
        let scalex = width / widthPrev;
        let scaley = $elements[$selectedId].preserveAspect ? scalex : 1;
        $elements[$selectedId].scale(scalex, scaley, fixedPoint);
        updateSbox($selectedId);
        $elements = $elements;
        widthPrev = width;
    };
    const changeHeight = () => {
        let scaley = height / heightPrev;
        let scalex = $elements[$selectedId].preserveAspect ? scaley : 1;
        $elements[$selectedId].scale(scalex, scaley, fixedPoint);
        updateSbox($selectedId);
        $elements = $elements;
        heightPrev = height;
    };
    const changeRadius = () => {
        updateSbox($selectedId);
        $elements = $elements;
    };
    
    const changeNodex = () => {
        let dragOffset = {};
        let coord;
        if ($selectedVertex) {
            dragOffset = {
                x: verticesx[$selectedVertex],
                y: verticesy[$selectedVertex],
            };
            coord = {
                x: $elements[$selectedId].uiEdges[subpath][index].v.x,
                y: verticesy[$selectedVertex],
            };
            $elements[$selectedId].updateControl(
                $selectedVertex,
                coord,
                dragOffset,
                "v"
            );
            verticesx[$selectedVertex] =
                $elements[$selectedId].uiEdges[subpath][index].v.x;
        }
        if ($selectedControl0) {
            dragOffset = {
                x: toutx[$selectedControl0],
                y: touty[$selectedControl0],
            };
            coord = {
                x: $elements[$selectedId].uiEdges[subpath][index].tout.x,
                y: touty[$selectedControl0],
            };

            $elements[$selectedId].updateControl(
                $selectedControl0,
                coord,
                dragOffset,
                "tout"
            );
            toutx[$selectedControl0] =
                $elements[$selectedId].uiEdges[subpath][index].tout.x;
        }
        if ($selectedControl1) {
            dragOffset = {
                x: tinx[$selectedControl1],
                y: tiny[$selectedControl1],
            };
            coord = {
                x: $elements[$selectedId].uiEdges[subpath][index].tin.x,
                y: tiny[$selectedControl1],
            };

            $elements[$selectedId].updateControl(
                $selectedControl1,
                coord,
                dragOffset,
                "tin"
            );
            tinx[$selectedControl1] =
                $elements[$selectedId].uiEdges[subpath][index].tin.x;
        }
        $elements[$selectedId].bbox = $activeElement.getBBox();
    };
    const changeNodey = () => {
        let dragOffset = {};
        let coord;
        if ($selectedVertex) {
            dragOffset = {
                x: verticesx[$selectedVertex],
                y: verticesy[$selectedVertex],
            };
            coord = {
                x: verticesx[$selectedVertex],
                y: $elements[$selectedId].uiEdges[subpath][index].v.y,
            };
            $elements[$selectedId].updateControl(
                $selectedVertex,
                coord,
                dragOffset,
                "v"
            );
            verticesy[$selectedVertex] =
                $elements[$selectedId].uiEdges[subpath][index].v.y;
        }
        if ($selectedControl0) {
            dragOffset = {
                x: toutx[$selectedControl0],
                y: touty[$selectedControl0],
            };
            coord = {
                x: toutx[$selectedControl0],
                y: $elements[$selectedId].uiEdges[subpath][index].tout.y,
            };
            $elements[$selectedId].updateControl(
                $selectedControl0,
                coord,
                dragOffset,
                "tout"
            );
            touty[$selectedControl0] =
                $elements[$selectedId].uiEdges[subpath][index].tout.y;
        }
        if ($selectedControl1) {
            dragOffset = {
                x: tinx[$selectedControl1],
                y: tiny[$selectedControl1],
            };
            coord = {
                x: tinx[$selectedControl1],
                y: $elements[$selectedId].uiEdges[subpath][index].tin.y,
            };
            $elements[$selectedId].updateControl(
                $selectedControl1,
                coord,
                dragOffset,
                "tin"
            );
            tiny[$selectedControl1] =
                $elements[$selectedId].uiEdges[subpath][index].tin.y;
        }
        $elements[$selectedId].bbox = $activeElement.getBBox();
    };
    const changeAngle = () => {
        let dtheta = (Math.PI * (angle - anglePrev)) / 180;
        $elements[$selectedId].rotate(dtheta, $elements[$selectedId].axis);
        $elements = $elements;
        anglePrev = angle;
    };
    const setPath = (id) => {
        textId = id;
        $svg.addEventListener("click", setTextPath);
    };
    const setTextPath = (evt) => {
        if ($elements[$selectedId].tag === "path") {
            $elements[textId].href = $selectedId;
            $elements[textId].tm = new DOMMatrix();
            $elements[textId].showPath = true;
            // updateSbox(textId)
            $elements = $elements;

            $svg.removeEventListener("click", setTextPath);
        }
    };
    const textPathVisibility = () => {
        if ($elements[$selectedId].showPath) {
            $elements[$elements[$selectedId].href].opacity = 1;
            $elements = $elements;
        } else {
            $elements[$elements[$selectedId].href].opacity = 0;
            $elements = $elements;
        }
    };
    const reflect = (about) => {
        $elements[$selectedId].reflect(about);
        $elements = $elements;
    };
    const unlasso = () => {
        $isLasso = false;
        if(!$elements["lasso"]) return;
        $elements[$elements["lasso"].parent].children.splice(-1, 1);
        $elements["lasso"] = null;
    };
    const distributeOnPath = () => {
        // console.log('Considering path...');
        if($selectedElements?.length > 0) $lassoElements = null;
        if (
            ($lassoElements || ($selectedElements && $selectedElements.length > 0)) &&
            $selectedId &&
            $selectedId !== "lasso" &&
            $elements[$selectedId].tag === "path"
        ) {
            // console.log('distributing on path...')
            let angle = 0;
            let n = $selectedElements?.length || $lassoElements?.length;
            let points = [];
            let selectedPathTransform;

            for (let i = 0; i < n; i++) {
                if ($elements[$selectedId].isClosed[0]) {
                    points.push($elements[$selectedId].pointAtLength(i / n));
                } else {
                    points.push(
                        $elements[$selectedId].pointAtLength(i / (n - 1))
                    );
                }
                if($selectedElements) {
                    $elements[$selectedElements[i]].translate(
                        points[i].P.x - $elements[$selectedElements[i]].axis.x,
                        points[i].P.y - $elements[$selectedElements[i]].axis.y
                    );
                }
                if($lassoElements) {
                    $elements[$lassoElements[i]].translate(
                        points[i].P.x - $elements[$lassoElements[i]].axis.x,
                        points[i].P.y - $elements[$lassoElements[i]].axis.y
                    );
                }
            
                //orientation
                angle = points[i].tan.angle(points[i].P);
                if($selectedElements) {
                    $elements[$selectedElements[i]].rotate(
                        angle,
                        $elements[$selectedElements[i]].axis
                    );
                }
                if($lassoElements) {
                        $elements[$lassoElements[i]].rotate(
                        angle,
                        $elements[$lassoElements[i]].axis
                    );
                }
                
                //if path has matrix transform on it
                selectedPathTransform = new DOMMatrix().multiplySelf(
                    $elements[$selectedId].tm
                );
                if($selectedElements) {
                    $elements[$selectedElements[i]].tm =
                    selectedPathTransform.multiplySelf(
                        $elements[$selectedElements[i]].tm
                    );
                }
                if($lassoElements) {
                    $elements[$lassoElements[i]].tm =
                    selectedPathTransform.multiplySelf(
                        $elements[$lassoElements[i]].tm
                    );
                }
                
            }
            if($lassoElements) unlasso();
            $elements = $elements;
            // $svg.removeEventListener('click', distributeOnPath);
            // console.log('points...', points);
        }
    };
    const distributeOnGrid = () => {
        if($selectedElements?.length > 0) $lassoElements = null;
        if (isGettingGrid) {
            let gridPoint;
            for (let j = 0; j < gridColumn; j++) {
                for (let i = 0; i < gridRow; i++) {
                    gridPoint = new Point(
                        gridx + j * columnGap,
                        gridy + i * rowGap
                    );
                    //place $lassoelement
                    let n = $selectedElements?.length || $lassoElements?.length;
                    if (i + j * gridRow < n) {
                        if($lassoElements) {
                            $elements[$lassoElements[i + j * gridRow]].translate(
                                gridPoint.x -
                                    $elements[$lassoElements[i + j * gridRow]].axis
                                        .x,
                                gridPoint.y -
                                    $elements[$lassoElements[i + j * gridRow]].axis
                                        .y
                            );
                        }
                        if($selectedElements) {
                            $elements[$selectedElements[i + j * gridRow]].translate(
                                gridPoint.x -
                                    $elements[$selectedElements[i + j * gridRow]].axis
                                        .x,
                                gridPoint.y -
                                    $elements[$selectedElements[i + j * gridRow]].axis
                                        .y
                            );
                        }
                        
                    }
                }
            }
            if($lassoElements) unlasso();
            $elements = $elements;
            isGettingGrid = false;
        }
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
    
</script>

{#if $elements && $selectedId && $elements[$selectedId] || $selectedElements.length > 0}
    <article>
        <Card>
            <Content>
                <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Distribute on path</h4>
                <ol style="margin:0">
                    <li>Select Elements or Lasso elements</li> 
                    <li>Select target path.</li> 
                    <li>Click on this button</li>
                </ol>
            </Content>
            <Actions>
                <Button on:click={distributeOnPath}>Distribute on path</Button>
            </Actions>
        </Card>
        <Card>
            <Content>
                <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Distribute on grid</h4>
                <ol style="margin:0">
                    <li>Select Elements or Lasso elements</li> 
                    <li>Click on this button and enter grid details.</li> 
                </ol>
            </Content>
            <Actions>
                <Button on:click={() => (isGettingGrid = true)}>Distribute on grid</Button>
            </Actions>
        </Card>
        
        {#if isGettingGrid}
        <Card>
        <!-- <Title>Enter number of rows and columns</Title> -->
            <Content>
                <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Enter number of rows and columns</h4>
                <Textfield type="number" label={"Start x"} bind:value={gridx} input$emptyValueUndefined/>
                <Textfield type="number" label={"Start y"} bind:value={gridy} input$emptyValueUndefined/>
                <Textfield type="number" label={"Number of rows"} bind:value={gridRow} input$emptyValueUndefined/>
                <Textfield type="number" label={"Number of columns"} bind:value={gridColumn} input$emptyValueUndefined/>
                <Textfield type="number" label={"Row Gap"} bind:value={rowGap} input$emptyValueUndefined/>
                <Textfield type="number" label={"Column Gap"} bind:value={columnGap} input$emptyValueUndefined/>
            </Content>
            <Actions>
                <Button on:click={distributeOnGrid}>Done</Button>
                <Button on:click={() => isGettingGrid = false}>Cancel</Button>
            </Actions>
        </Card>
        {/if}
    </article>
{/if}


<style>
    article {
        width: 100%;
        display: flex;
        flex-direction:column;
        gap:0.5em;
    }
    /* .attributeGroup {
        background: rgb(184, 183, 183);
        border-radius: 10px;
        color: rgb(3, 3, 3);
        padding: 1em;
        margin: 1em 0;
    }
    .action {
        padding: 0.5em;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon input {
        height: 2em;
        border-radius: 5px;
        width: 70px;
        outline: none;
        border: none;
    }
    .box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        align-items: center;
        justify-content: center;
    }
    .iconButton {
        font-size: 1.5em;
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    } */
</style>
