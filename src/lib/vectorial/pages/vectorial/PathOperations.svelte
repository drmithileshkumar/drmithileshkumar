<script lang='ts'>
    //@ts-nocheck
    import Tooltip, {
        Wrapper,
        Title,
        Content,
        Link,
        RichActions,
    } from '@smui/tooltip';
    import Button, { Label } from '@smui/button';
    import Snackbar, { Actions } from '@smui/snackbar';
    import MenuSurface from '@smui/menu-surface';
    import IconButton, { Icon } from '@smui/icon-button';
    import { Svg } from '@smui/common';
    import { Point } from "$lib/vectorial/utils/common/point";
    import { Path } from "$lib/vectorial/utils/common/path";
    import { Group } from "$lib/vectorial/utils/common/g";
    import { boundingBox} from './stores';
    import { setD } from "$lib/vectorial/utils/common/pathdraw";
    import { ripple } from "$lib/vectorial/ui/ripple";
    import {
        DRAWING,
        BBOX,
        pathMode,
        currentState,
        appHistory,
        elementsNode,
        isLassoGroup,
        lassoDom,
        lassoElements,
        svg,
        elements,
        showBBoxControls,
        addingNodes,
        objectCount,
        selectedId,
        selectedVertex,
        selectedControl0,
        selectedControl1,
        selectedVertices,
        currentLayer,
        activeElement,
        showControls,
        isLasso,
        mirrorMode,
        mirrorVertex,
        selectionMode,
        selectedElements,
        circleMode,
        circledVertices,
        circleCenter,
    } from "$lib/vectorial/pages/vectorial/stores";
    export let inputElementId;
    export let takingControls = false;
    let controlModeActive = false;
    let isTransforming = false;
    let newSubpath = false;
    let isRelative = false;
    let isCutting = false;
    let showMoreActions = false;
    let splitNode;
    let newNodeParent;
    let currentPathId;
    let parentOfConnectPathId;
    let showSelectionMode = false,
        showLassoInfo = false,
        showTransformInfo = false,
        showCreatePathMode = false,
        showControlsMode = false,
        showAddNodeMode = false,
        showDeleteNodeMode = false,
        showCutPathMode = false,
        showClosePathMode = false,
        showOpenPathMode = false,
        showReversePathMode = false,
        showConvertPathMode = false,
        showCombinePathMode = false,
        showJoinPathMode = false,
        showReflectHorizontalMode = false,
        showReflectVerticalMode = false,
        showMirrorMode = false,
        showCircleMode = false,
        showTakeCircledVerticesMode = false,
        showTakeVerticesMode = false;
    let takeParentNodeBar, takeCutNodeBar, combinePathsBar, connectPathsBar;
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

        deleteElementsFromLayer($lassoElements); //remove references from parents
        $elements[group.parent].children.push(group.id);
        //update elements in $lassoElements
        $lassoElements.forEach((id) => {
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
        $lassoElements = [];
    };
    const transformMode = () => {
        // if(!newVertex) {
        //     $showControls = false;
        //     $showVertices = false;
        // }
        isTransforming = !isTransforming;
        $showBBoxControls = !$showBBoxControls;
        $showControls = false;
        //create group if lasso element is selected
        if ($selectedId === "lasso") {
            // $isLasso = false;

            $elements[$elements["lasso"].parent].children.splice(-1, 1);
            $elements["lasso"] = null;
            $selectedId = null;
            $elements = $elements;

            if ($lassoElements.length > 1) {
                createGroup();
                $isLassoGroup = true;
            } else {
                $selectedId = $lassoElements[0];
            }
        }
    };
    const createPath = () => {
        takingControls = !takingControls;
        if (takingControls) {
            $pathMode = true;
            if ($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === "path") {
                inputElementId = $selectedId;
                // $selectedVertex = null;
            } else {
                // console.log($objectCount)
                let id = $isLasso
                    ? "lasso"
                    : "Path-" + $DRAWING.drawingID + "-" + $objectCount;
                let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
                if ($elements.Layers.length > 0) {
                    if ($elements.Layers[0] === "Layer-0") {
                        layer = "Layer-" + $currentLayer;
                    }
                }
                let path = new Path({ id: id, parent: layer, layer: layer });
                if (id === "lasso") {
                    path.strokewidth = $BBOX.width > 500 ? 1 : 0.1;
                    path.strokedasharray = $BBOX.width > 500 ? "4" : "0.5";
                    path.fill = "rgba(0, 0, 0, 0.1)";
                    path.isClosed[0] = true;
                }
                $elements[path.id] = path;
                // $selectedId = path.id;
                $elements[path.parent].children.push(path.id);
                $elements[path.parent] = $elements[path.parent];
                $objectCount = $objectCount + 1;
                $elements[path.id].isLocked = true;
                $elements = $elements;
                $selectedId = path.id;
                $appHistory = [
                    ...$appHistory,
                    {
                        id: path.parent,
                        change: {
                            children: $elements[path.parent].children.map(item => item),
                        },
                    },
                    {
                        id: $selectedId,
                        change: {
                            tm: $elements[$selectedId].tm,
                            ctm: $elements[$selectedId].ctm,
                            bbox: $elements[$selectedId].bbox,
                            sbox: $elements[$selectedId].sbox,
                            axis: $elements[$selectedId].axis,
                        },
                    }
                ];
                $currentState = $appHistory.length - 1;

                inputElementId = path.id;
            }
            controlModeActive = true;
            activateControlInputMode();
        }
        if (!takingControls) {
            $pathMode = false;
            newSubpath = false;
            if (inputElementId && $elements[inputElementId])
                $elements[inputElementId].isLocked = false;
            $svg.removeEventListener("click", takeControls);
            $svg.removeEventListener("touchstart", takeControls);
            $svg.removeEventListener("contextmenu", finishTakingControls);
            if ($isLasso) {
                getLassoElements();
            }
            inputElementId = null;
            $selectedVertex = null;
        }
    };
    const activateControlInputMode = () => {
        // console.log($svg);
        $svg.addEventListener("click", takeControls);
        $svg.addEventListener("touchstart", takeControls);
        $svg.addEventListener("contextmenu", finishTakingControls);
    };
    // function getMousePosition(evt) {

    //     var CTM = boundingBox.getScreenCTM().inverse();
    //     return {
    //         x: CTM.a*evt.clientX + CTM.c*evt.clientY + CTM.e,
    //         y: CTM.b*evt.clientX + CTM.d*evt.clientY + CTM.f
    //     };
    // }
    function getMousePosition(evt) {
        if($boundingBox) {
            var ctm = $boundingBox.getScreenCTM().inverse();
            let clientx, clienty;
            switch (evt.type) {
                case "click": {
                    clientx = evt.clientX;
                    clienty = evt.clientY;
                    evt.preventDefault();
                    break;
                }
                case "touchstart":
                case "touchmove":
                case "touchend":
                case "touchcancel": {
                    clientx = evt.touches[0].clientX;
                    clienty = evt.touches[0].clientY;
                    evt.preventDefault();
                    break;
                }
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseleave": {
                    clientx = evt.clientX;
                    clienty = evt.clientY;
                    evt.preventDefault();
                    break;
                }
            }
            return {
                x: ctm.a * clientx + ctm.c * clienty + ctm.e,
                y: ctm.b * clientx + ctm.d * clienty + ctm.f,
            };
        }
    }
    const updateSelectionBox = (id) => {
        $elements[id].sbox.tl.x =
            $elements[id].bbox.x * $elements[id].ctm.a +
            $elements[id].bbox.y * $elements[id].ctm.c +
            $elements[id].ctm.e;
        $elements[id].sbox.tl.y =
            $elements[id].bbox.x * $elements[id].ctm.b +
            $elements[id].bbox.y * $elements[id].ctm.d +
            $elements[id].ctm.f;

        $elements[id].sbox.tr.x =
            ($elements[id].bbox.x + $elements[id].bbox.width) *
                $elements[id].ctm.a +
            $elements[id].bbox.y * $elements[id].ctm.c +
            $elements[id].ctm.e;
        $elements[id].sbox.tr.y =
            ($elements[id].bbox.x + $elements[id].bbox.width) *
                $elements[id].ctm.b +
            $elements[id].bbox.y * $elements[id].ctm.d +
            $elements[id].ctm.f;

        $elements[id].sbox.bl.x =
            $elements[id].bbox.x * $elements[id].ctm.a +
            ($elements[id].bbox.y + $elements[id].bbox.height) *
                $elements[id].ctm.c +
            $elements[id].ctm.e;
        $elements[id].sbox.bl.y =
            $elements[id].bbox.x * $elements[id].ctm.b +
            ($elements[id].bbox.y + $elements[id].bbox.height) *
                $elements[id].ctm.d +
            $elements[id].ctm.f;

        $elements[id].sbox.br.x =
            ($elements[id].bbox.x + $elements[id].bbox.width) *
                $elements[id].ctm.a +
            ($elements[id].bbox.y + $elements[id].bbox.height) *
                $elements[id].ctm.c +
            $elements[id].ctm.e;
        $elements[id].sbox.br.y =
            ($elements[id].bbox.x + $elements[id].bbox.width) *
                $elements[id].ctm.b +
            ($elements[id].bbox.y + $elements[id].bbox.height) *
                $elements[id].ctm.d +
            $elements[id].ctm.f;

        $elements = $elements;
    };
    const takeControls = (evt) => {
        evt.preventDefault();
        let vertex = getMousePosition(evt);

        $elements[inputElementId].addVertex(
            $selectedVertex,
            vertex,
            true,
            $mirrorMode,
            $mirrorVertex
        );
        $selectedVertex = $elements[inputElementId].nv - 1;
        if ($mirrorMode && !($mirrorVertex === null)) {
            $selectedVertex--;
        }
        if ($mirrorMode && $mirrorVertex === null) {
            $mirrorVertex =
                $elements[inputElementId].edges[
                    $elements[inputElementId].edges.length - 1
                ][0].id;
        }
        // console.log($elements[inputElementId].edges)
        $selectedId = inputElementId;
        $elements = $elements;
        $activeElement = $elementsNode[$selectedId];
        $elements[$selectedId].ctm = $boundingBox
            .getScreenCTM()
            .inverse()
            .multiply($activeElement.getScreenCTM());
        $elements[$selectedId].bbox = $activeElement.getBBox();
        $elements[$selectedId].transformUIControls();
        updateSelectionBox($selectedId);
        $elements[$selectedId].axis.x =
            ($elements[$selectedId].sbox.tl.x +
                $elements[$selectedId].sbox.br.x) /
            2;
        $elements[$selectedId].axis.y =
            ($elements[$selectedId].sbox.tl.y +
                $elements[$selectedId].sbox.br.y) /
            2;

        $elements = $elements;
        $showControls = true;
    };
    const finishTakingControls = () => {
        takingControls = false;
        $svg.removeEventListener("click", takeControls);
        $svg.removeEventListener("touchstart", takeControls);
        $svg.removeEventListener("contextmenu", finishTakingControls);
        inputElementId = null;
    };
    const controlMode = () => {
        //compute control positions
        if (!$activeElement) return;
        if ($selectedId && $elements[$selectedId].tag === "path") {
            $showControls = !$showControls;
            $showBBoxControls = false;
            $elements[$selectedId].ctm = $boundingBox
                .getScreenCTM()
                .inverse()
                .multiply($activeElement.getScreenCTM());
            $elements[$selectedId].transformUIControls();
            $selectedVertex = null;
            $selectedControl0 = null;
            $selectedControl1 = null;
            if(!$showControls) {
                $selectedVertices = null;
            }
        }

        //update ui control points
    };
    const newNodeMode = () => {
        $addingNodes = !$addingNodes;
        
        if ($addingNodes) {
            // takeParentNodeBar.open()
            $showControls = true;
            $elements[$selectedId].isLocked = true;
            $svg.addEventListener("click", selectParentNode);
            $svg.addEventListener("touchstart", selectParentNode);
            $pathMode = true;
        }

        if (!$addingNodes) {
            $selectedVertex = null;
            $svg.removeEventListener("click", insertNewNode);
            $svg.removeEventListener("touchstart", insertNewNode);
            $elements[$selectedId].isLocked = false;
            $pathMode = false;
        }
    };
    const selectParentNode = (evt) => {
        evt.preventDefault();
        newNodeParent = evt.target;
        if(newNodeParent.classList.contains("vertex")) {
            $selectedVertex = newNodeParent.getAttribute("id")
            $svg.removeEventListener("click", selectParentNode);
            $svg.removeEventListener("touchstart", selectParentNode);
            $svg.addEventListener("click", insertNewNode);
            $svg.addEventListener("touchstart", insertNewNode);
        }
        
    };
    const insertNewNode = (evt) => {
        evt.preventDefault();
        let vertex = getMousePosition(evt);
        $elements[$selectedId].addVertex(
            newNodeParent.getAttribute("id"),
            vertex
        );
        $elements = $elements;
    };
    const deleteNode = () => {
        $elements[$selectedId].deleteVertex($selectedVertex);
        $elementsNode[$selectedId].setAttribute(
            "d",
            $elements[$selectedId]["d"]
        );
        $elements[$selectedId].bbox = $elementsNode[$selectedId].getBBox();
        $elements[$selectedId].updateSelectionBox();
        if ($elements[$selectedId].edges.length === 0) {
            let index = -1;
            for (
                let i = 0;
                i < $elements[$elements[$selectedId].parent].children.length;
                i++
            ) {
                if (
                    $elements[$elements[$selectedId].parent].children[i] ===
                    $selectedId
                ) {
                    index = i;
                }
            }
            if (index !== -1) {
                $elements[$elements[$selectedId].parent].children.splice(
                    index,
                    1
                );
            }
            delete $elements[$selectedId];
            $selectedId = null;
            $showControls = false;
            $showBBoxControls = false;
        }
        $elements = $elements;
        $selectedVertex = null;
        // let nodeId = activeVertex.getAttribute('id');
        // let id = $activeElement.getAttribute('id');
        // let newControls = [];
        // for(let i = 0; i < $elements[id].controls.length; i++) {

        //     if($elements[id].controls[i].id !== nodeId) {
        //         newControls.push($elements[id].controls[i]);
        //     }
        // }
        // $elements[id].controls = newControls;
        // $elements[id].setD();
        // $elements = $elements;
        // activeVertex = null;
    };

    const clopenPath = (actionType) => {
        if ($selectedId && $elements[$selectedId].tag === "path") {
            $elements[$selectedId].close($selectedVertex);
            $selectedVertex = null;
            $elements = $elements;
        }
    };
    const reversePath = () => {
        if ($selectedId && $elements[$selectedId].tag === "path") {
            $elements[$selectedId].reversePath();
            $elements = $elements;
        }
    };
    const makeH = () => {
        let c = isRelative ? "h" : "H";
        $elements[$selectedId].convertEdge($selectedVertex, c, "sharp");
        $elements = $elements;
    };
    const makeV = () => {
        let c = isRelative ? "v" : "V";
        $elements[$selectedId].convertEdge($selectedVertex, c, "sharp");
        $elements = $elements;
    };
    const makeL = () => {
        let c = isRelative ? "l" : "L";
        $elements[$selectedId].convertEdge($selectedVertex, c, "sharp");
        $elements = $elements;
    };
    const makeQ = () => {
        let c = isRelative ? "q" : "Q";
        $elements[$selectedId].convertEdge($selectedVertex, c, "sharp");
        $elements = $elements;
    };
    const makeT = () => {
        let c = isRelative ? "t" : "T";
        $elements[$selectedId].convertEdge($selectedVertex, c, "sharp");
        $elements = $elements;
    };
    const makeS = () => {
        let c = isRelative ? "s" : "S";
        $elements[$selectedId].convertEdge($selectedVertex, c, "sharp");
        $elements = $elements;
    };
    const makeSharp = () => {
        let c = isRelative ? "c" : "C";
        $elements[$selectedId].convertEdge($selectedVertex, c, "sharp");
        $elements = $elements;
    };
    const makeSmooth = () => {
        let c = isRelative ? "c" : "C";
        $elements[$selectedId].convertEdge($selectedVertex, c, "smooth");
        $elements = $elements;
    };
    const makeSmoothAll = () => {
        let c = isRelative ? "c" : "C";
        // console.log($selectedVertex, $elements[$selectedId].uiEdges)
        for(let i = 0; i < $elements[$selectedId].uiEdges.length; i++) {
            for(let j = 1; j < $elements[$selectedId].uiEdges[i].length; j++) {
                $elements[$selectedId].convertEdge($elements[$selectedId].uiEdges[i][j].id, c, "sharp");
            }
        }
        for(let i = 0; i < $elements[$selectedId].uiEdges.length; i++) {
            for(let j = 1; j < $elements[$selectedId].uiEdges[i].length; j++) {
                $elements[$selectedId].convertEdge($elements[$selectedId].uiEdges[i][j].id, c, "smooth");
            }
        }
        // $elements[$selectedId].convertEdge($selectedVertex, c, "smooth");
        $elements = $elements;
    };
    const makeArc = () => {
        let c = isRelative ? "a" : "A";
        $elements[$selectedId].convertEdge($selectedVertex, c, "sharp");
        $elements = $elements;
    };
    const cutPath = () => {
        if($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'path' && $selectedVertex) {
            let {firstPath, secondPath} = $elements[$selectedId].cutPath($selectedVertex, $objectCount);
            if (firstPath && secondPath) {
                firstPath.bbox = null;
                secondPath.bbox = null;
                $elements[firstPath.id] = firstPath;
                $elements[secondPath.id] = secondPath;
                $elements[$elements[$selectedId].parent].children.push(
                    firstPath.id
                );
                $elements[$elements[$selectedId].parent].children.push(
                    secondPath.id
                );
                let index = getIndex(
                    $selectedId,
                    $elements[$elements[$selectedId].parent].children
                );
                $elements[$elements[$selectedId].parent].children.splice(
                    index,
                    1
                );
                $elements = $elements;
                $selectedId = secondPath.id;
                $objectCount = $objectCount + 2;
            }
        }
        
    }
    // const cutPath = () => {
    //     if ($selectedId && $elements[$selectedId].tag === "path") {
    //         isCutting = !isCutting;
    //         if (isCutting) {
    //             takeCutNodeBar.open();
    //             $svg.addEventListener("click", takeCutNode);
    //             $svg.addEventListener("touchstart", takeCutNode);
    //         } else {
    //             $svg.removeEventListener("click", takeCutNode);
    //             $svg.removeEventListener("touchstart", takeCutNode);
    //         }
    //     }
    // };
    const takeCutNode = (evt) => {
        evt.preventDefault();
        let point = getMousePosition(evt);
        splitNode = new Point(point.x, point.y);
        let svgPoint = $svg.createSVGPoint();
        svgPoint.x = point.x;
        svgPoint.y = point.y;
        if ($elementsNode[$selectedId] && $elementsNode[$selectedId].isPointInStroke(svgPoint)) {
            // console.log('Point is stroke...')
            let { firstPath, secondPath } =
                $elements[$selectedId].splitPath(splitNode);
            if (firstPath && secondPath) {
                firstPath.bbox = null;
                secondPath.bbox = null;
                $elements[firstPath.id] = firstPath;
                $elements[secondPath.id] = secondPath;
                $elements[$elements[$selectedId].parent].children.push(
                    firstPath.id
                );
                $elements[$elements[$selectedId].parent].children.push(
                    secondPath.id
                );
                let index = getIndex(
                    $selectedId,
                    $elements[$elements[$selectedId].parent].children
                );
                $elements[$elements[$selectedId].parent].children.splice(
                    index,
                    1
                );
                $elements = $elements;
                $selectedId = secondPath.id;
                isCutting = false;
                $svg.removeEventListener("click", takeCutNode);
                $svg.removeEventListener("touchstart", takeCutNode);
            }
        }
    };
    const getLassoElements = () => {
        let elementIds = Object.keys($elements);
        let dompoint;
        $selectedElements = [];
        $lassoElements = [];
        for (let i = 0; i < elementIds.length; i++) {
            if ($elements[elementIds[i]].parent && elementIds[i] !== "lasso") {
                if (
                    $elements[elementIds[i]].parent ===
                    $elements["lasso"].parent
                ) {
                    // dompoint = new DOMPoint($elements[elementIds[i]].axis.x, $elements[elementIds[i]].axis.y);
                    dompoint = $svg.createSVGPoint();
                    dompoint.x = $elements[elementIds[i]].axis.x;
                    dompoint.y = $elements[elementIds[i]].axis.y;
                    if ($elementsNode["lasso"].isPointInFill(dompoint)) {
                        $lassoElements = [...$lassoElements, elementIds[i]];
                        $selectedElements = [...$selectedElements, elementIds[i]];
                    }
                }
            }
        }
        // console.log($selectedElements)
    };
    const lasso = () => {
        $isLasso = !$isLasso;
        if ($isLasso) {
            $selectedId = null;
            createPath();
        }
        // if ($isLassoGroup) {
        //     ungroup();
        //     $isLassoGroup = false;
        // }
        if (!$isLasso && $elements["lasso"]) {
            //remove lasso path
            $elements[$elements["lasso"].parent].children.splice(-1, 1);
            $elements["lasso"] = null;//better remove from the list
            delete $elements["lasso"];
            $selectedId = null;
        }
    };
    const ungroup = () => {
        //copy children to parent
        //change parent of children
        //multiply tm to children
        //delete the group
        if ($selectedId && $elements[$selectedId].tag === "g") {
            if ($elements[$selectedId].children) {
                $elements[$selectedId].children.forEach((element) => {
                    $elements[$elements[$selectedId].parent].children.push(
                        element
                    );
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
    const getSelection = () => {
        $selectionMode = !$selectionMode;
        if ($selectionMode) {
            $selectedElements = [];
            $svg.addEventListener("click", getSelectionList);
            $svg.addEventListener("touchstart", getSelectionList);
        } else {
            $svg.removeEventListener("click", getSelectionList);
            $svg.removeEventListener("touchstart", getSelectionList);
        }
    };
    const getSelectionList = (evt) => {
        evt.preventDefault();
        let id, index;
        if (evt.target && !evt.target.classList.contains("SVG")) {
            id = evt.target.getAttribute("id");
            index = $selectedElements?.indexOf(id);
            if (index === -1) {
                $selectedElements = [...$selectedElements, id];
            } else {
                $selectedElements = $selectedElements?.filter(
                    (item) => item !== id
                );
            }
            $selectedElements = $selectedElements;
            // console.log($selectedElements)
        }
    };

    const convert2Path = () => {
        if ($selectedId) {
            if ($elements[$selectedId].tag === "circle") {
                let newPath = $elements[$selectedId].toPath();
                $elements[$selectedId] = newPath;
            }
            if ($elements[$selectedId].tag === "ellipse") {
                let newPath = $elements[$selectedId].toPath();
                $elements[$selectedId] = newPath;
            }
            if ($elements[$selectedId].tag === "rect") {
                let newPath = $elements[$selectedId].toPath();
                $elements[$selectedId] = newPath;
            }
            if ($elements[$selectedId].tag === "line") {
                let newPath = $elements[$selectedId].toPath();
                $elements[$selectedId] = newPath;
            }
            if ($elements[$selectedId].tag === "regular") {
                let newPath = $elements[$selectedId].toPath();
                $elements[$selectedId] = newPath;
            }
            $elements = $elements;
        }
    };
    const combinePath = () => {
        if ($selectedId && $elements[$selectedId].tag === "path") {
            currentPathId = $selectedId;
            $svg.addEventListener("click", parentPath);
            $svg.addEventListener("touchstart", parentPath);
        }
        // combinePathsBar.open();
    };
    const parentPath = (evt) => {
        evt.preventDefault();
        if (currentPathId && $selectedId) {
            if ($elements[$selectedId].tag === "path") {
                let parentPathId = $selectedId;
                for (let subpath = 0; subpath < $elements[currentPathId].uiEdges.length; subpath++) {
                    // update ids
                    for (let i = 0; i < $elements[currentPathId].uiEdges[subpath].length; i++) {
                        $elements[currentPathId].uiEdges[subpath][i].id =
                            $elements[currentPathId].uiEdges[subpath][i].id +
                            $elements[parentPathId].nv;
                        $elements[currentPathId].edges[subpath][i].id =
                            $elements[currentPathId].edges[subpath][i].id +
                            $elements[parentPathId].nv;
                    }
                    $elements[parentPathId].uiEdges.push(
                        $elements[currentPathId].uiEdges[subpath]
                    );
                    let newEdges = [];
                    for (let i = 0; i < $elements[currentPathId].uiEdges[subpath].length; i++) {
                        newEdges.push($elements[parentPathId].invertEdge($elements[currentPathId].uiEdges[subpath][i]));
                    }
                    $elements[parentPathId].edges.push(newEdges);
                    $elements[parentPathId].isClosed.push(
                        $elements[currentPathId].isClosed[subpath]
                    );
                }
                $elements[parentPathId].nv += $elements[currentPathId].nv;
                $elements[parentPathId].setD();
                console.log("Path set...deleting from layer")
                deleteElementsFromLayer([currentPathId]);
                $elements = $elements;
                $svg.removeEventListener("click", parentPath);
                $svg.removeEventListener("touchstart", parentPath);
                currentPathId = null;
            }
        }
    };
    const connectPath = () => {
        if ($selectedId && $elements[$selectedId].tag === "path") {
            parentOfConnectPathId = $selectedId;
            $svg.addEventListener("click", connect2Path);
            $svg.addEventListener("touchstart", connect2Path);
        }
        // connectPathsBar.open();
    };
    const connect2Path = (evt) => {
        evt.preventDefault();
        if ($selectedId) {
            if ($elements[$selectedId].tag === "path") {
                let childPathId = $selectedId;
                let pSubpath =
                    $elements[parentOfConnectPathId].edges.length - 1;
                let cSubpath = $elements[childPathId].edges.length - 1;
                let pIndex =
                    $elements[parentOfConnectPathId].edges[pSubpath].length - 1;
                let cIndex = $elements[childPathId].edges[cSubpath].length - 1;
                let EE = $elements[parentOfConnectPathId].uiEdges[pSubpath][
                    pIndex
                ].v.length($elements[childPathId].uiEdges[cSubpath][cIndex].v);
                let ES = $elements[parentOfConnectPathId].uiEdges[pSubpath][
                    pIndex
                ].v.length($elements[childPathId].uiEdges[0][0].v);
                let SE = $elements[
                    parentOfConnectPathId
                ].uiEdges[0][0].v.length(
                    $elements[childPathId].uiEdges[cSubpath][cIndex].v
                );
                let SS = $elements[
                    parentOfConnectPathId
                ].uiEdges[0][0].v.length(
                    $elements[childPathId].uiEdges[0][0].v
                );
                let minD = Math.min(EE, ES, SE, SS);
                switch (minD) {
                    case EE: {
                        $elements[childPathId].reversePath();
                        break;
                    }
                    case SE: {
                        let temp = parentOfConnectPathId;
                        parentOfConnectPathId = childPathId;
                        childPathId = temp;
                        break;
                    }
                    case SS: {
                        $elements[parentOfConnectPathId].reversePath();
                        break;
                    }
                }

                // update ids
                for (
                    let subpath = 0;
                    subpath < $elements[childPathId].uiEdges.length;
                    subpath++
                ) {
                    for (
                        let i = 0;
                        i < $elements[childPathId].uiEdges[subpath].length;
                        i++
                    ) {
                        $elements[childPathId].edges[subpath][i].id =
                            $elements[childPathId].edges[subpath][i].id +
                            $elements[parentOfConnectPathId].nv;
                        $elements[childPathId].uiEdges[subpath][i].id =
                            $elements[childPathId].edges[subpath][i].id;
                    }
                }
                //join last vertex of parent to the first vertex of child
                //change M to L
                $elements[childPathId].edges[0][0].c = "L";
                $elements[childPathId].uiEdges[0][0].c = "L";
                //merge path segments
                for (
                    let i = 0;
                    i < $elements[childPathId].uiEdges[0].length;
                    i++
                ) {
                    $elements[parentOfConnectPathId].edges[pSubpath].push(
                        $elements[parentOfConnectPathId].invertEdge(
                            $elements[childPathId].uiEdges[0][i]
                        )
                    );
                    $elements[parentOfConnectPathId].uiEdges[pSubpath].push(
                        $elements[childPathId].uiEdges[0][i]
                    );
                }
                //push other segments
                for (
                    let subpath = 1;
                    subpath < $elements[childPathId].uiEdges.length;
                    subpath++
                ) {
                    $elements[parentOfConnectPathId].uiEdges.push(
                        $elements[childPathId].uiEdges[subpath]
                    );
                    let newEdges = [];
                    for (
                        let i = 0;
                        i < $elements[childPathId].uiEdges[subpath].length;
                        i++
                    ) {
                        newEdges.push(
                            $elements[parentOfConnectPathId].invertEdge(
                                $elements[childPathId].uiEdges[subpath][i]
                            )
                        );
                    }
                    $elements[parentOfConnectPathId].edges.push(newEdges);
                    $elements[parentOfConnectPathId].isClosed.push(
                        $elements[childPathId].isClosed[subpath]
                    );
                }

                $elements[parentOfConnectPathId].nv +=
                    $elements[childPathId].nv;
                $elements[parentOfConnectPathId].setD();
                deleteElementsFromLayer([childPathId]);
                $elements = $elements;
                $svg.removeEventListener("click", connect2Path);
                $svg.removeEventListener("touchstart", connect2Path);
                parentOfConnectPathId = null;
            }
        }
    };
    const reflect = (about) => {
        $elements[$selectedId].reflect(about);
        $elements = $elements;
    };
    const setMirrorMode = () => {
        $mirrorMode = !$mirrorMode;
        if (!$pathMode) {
            //set $mirrorVertex
            $svg.addEventListener("click", setMirrorVertex);
            $svg.addEventListener("touchstart", setMirrorVertex);
        }
    };
    const setMirrorVertex = (evt) => {
        evt.preventDefault();
        let target = evt.target;
        if (target.classList.contains("vertex")) {
            let targetId = target.getAttribute("id");
            $selectedVertex = targetId;
            $mirrorVertex = targetId;
            $svg.removeEventListener("click", setMirrorVertex);
            $svg.removeEventListener("touchstart", setMirrorVertex);
        }
    };
    const distributeOnCircle = () => {
        $circleMode = !$circleMode;
        if ($circleMode && $elements[$selectedId].tag === "path") {
            $circledVertices = [];
            if (!$circleCenter) {
                $circleCenter = new Point(
                    $elements[$selectedId].axis.x,
                    $elements[$selectedId].axis.y
                );
            }

            showTakeCircledVerticesMode = true;
            $svg.addEventListener("click", takeVertices);
            $svg.addEventListener("touchstart", takeVertices);
        } else {
            $svg.removeEventListener("click", takeVertices);
            $svg.removeEventListener("touchstart", takeVertices);
        }
    };
    const takeVertices = (evt) => {
        evt.preventDefault();
        if (evt.target.classList.contains("vertex")) {
            $circledVertices = [
                ...$circledVertices,
                evt.target.getAttribute("id"),
            ];
        }
    };
    const finishTakingVertices = () => {
        showTakeCircledVerticesMode = false;
        $svg.removeEventListener("click", takeVertices);
        $svg.removeEventListener("touchstart", takeVertices);
    };
</script>
<div class="buttons noScrollBar">
    <Wrapper rich>
        <IconButton on:click={createPath} style="font-size:16px;width: 32px; height:32px;padding:6px;background:{takingControls ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon component={Svg} viewBox="-3 -3 28 28">
                <g>
                    <g
                        class="draggable"
                        id="Layer-0"
                        fill="none"
                        stroke="none"
                        stroke-width="0"
                        stroke-dasharray="none"
                        opacity="1"
                        mask="none"
                        filter="none"
                        transform="matrix(1 0 0 1 0 0)"
                    >
                        <path
                            id="WebdutTeam11Path-3"
                            d="M 3.1338541666666693,5.93385416666667 C 1.973854166666671,0.9205208333333323 9.620076814156045,0.23057705676274987 10.400520833333328,2.9338541666666664 C 11.32052083333333,6.120520833333336 5.844016685781757,8.578143017167394 3.9338541666666735,12.267187500000006 A 7.64264540285394 7.64264540285394 0 0 0 18.000520833333336,18.200520833333336 L 22.400520833333335,23.000520833333326"
                            fill="rgba(0, 0, 0, 0)"
                            fill-rule="evenodd"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-dasharray="none"
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            stroke-miterlimit="4"
                            opacity="1"
                            filter="none"
                            mask="none"
                            transform="matrix(1 0 0 1 0 0)"
                        />
    
                        <rect
                            id="WebdutTeam11Rect-4"
                            x="2"
                            y="2"
                            width="3"
                            height="3"
                            rx="0"
                            ry="0"
                            fill="rgba(255, 0, 0, 1)"
                            stroke="rgba(255, 255, 255, 1)"
                            stroke-width="0.8"
                            stroke-dasharray="none"
                            opacity="1"
                            filter="none"
                            mask="none"
                            transform="matrix(1 0 0 1 2.8000000000000043 17.33333333333333)"
                        />
    
                        <path
                            id="WebdutTeam11Path-2"
                            d="M 15.267187499999995,4.067187499999999 L 5.800520833333334,14.93385416666667 L 5.133854166666662,19.80052083333333 L 10.867187500000004,18.533854166666664 L 20.000520833333336,7.933854166666666 L 15.267187499999995,4.067187499999999 Z"
                            fill="rgba(0, 0, 0, 0)"
                            fill-rule="evenodd"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            stroke-miterlimit="4"
                            opacity="1"
                            filter="none"
                            mask="none"
                            transform="matrix(1 0 0 1 2.1999999999999957 -0.7333333333333343)"
                        />
                    </g></g
                >
            </Icon>
        </IconButton>
        <Tooltip>
            <Content>
                Click on the canvas to add vertices to a new or existing path. Click again to finishing adding vertices.
            </Content>
        </Tooltip>
    </Wrapper>
    
    <!-- <IconButton on:click={getSelection} style="font-size:16px;width: 32px; height:32px;padding:6px;background:{$selectionMode ? 'rgba(255, 255, 255, 0.5)': 'none'}">
        <Icon class="material-symbols-outlined">select</Icon>
    </IconButton> -->
    <!-- <IconButton on:click={lasso} style="font-size:16px;width: 32px; height:32px;padding:6px;background:{$isLasso ? 'rgba(255, 255, 255, 0.5)': 'none'}">
        <Icon class="material-symbols-outlined">laps</Icon>
    </IconButton>
    <IconButton on:click={transformMode} style="font-size:16px;width: 32px; height:32px;padding:6px;background:{isTransforming ? 'rgba(255, 255, 255, 0.5)': 'none'}">
        <Icon component={Svg} viewBox="-480 -290 420 420">
            <rect
            x="0"
            y="0"
            width="280"
            height="280"
            fill='none'
            stroke="currentColor"
            stroke-width="10"
            stroke-dasharray="30"
            opacity="1"
            transform="translate(-400 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="rgba(0, 200, 0, 1)"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-260 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-400 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-260 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-120 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-120 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-120 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-260 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-400 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
            <circle
                cx="0"
                cy="0"
                r="30"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                stroke-dasharray="none"
                opacity="1"
                transform="translate(-400 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
            />
        </Icon>
    </IconButton> -->
    <Wrapper rich>
        <IconButton on:click={controlMode} style="font-size:16px;width: 32px; height:32px;padding:6px;background:{$showControls ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon component={Svg} viewBox="0.26 0.12 24 24">
                <g>
                            <g
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="none"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <path
                                    id="WebdutTeam10R6Path-2"
                                    d="M 19.459860642751064,19.918799893061315 L 12.059860642751058,4.318799893061318 L 5.059860642751058,19.918799893061315 L 12.193193976084391,14.78546655972799 L 19.459860642751064,19.918799893061315 Z"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.7071067811865475 -0.7071067811865475 0.7071067811865475 0.7071067811865475 -6.178455766675752 10.951878228288258)"
                                />
                            </g>
                        </g>
            </Icon>
        </IconButton>
        <Tooltip>
            <Content>Edit path</Content>
        </Tooltip>
    </Wrapper>
    
    
    {#if $showControls && $selectedVertex}
        <!-- <IconButton on:click={newNodeMode} style="font-size:16px;width: 32px; height:32px;padding:6px;background:{$addingNodes ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon component={Svg} viewBox="-3 -3 28 28">
                <g>
                    <g
                        class="draggable"
                        id="Layer-0"
                        fill="none"
                        stroke="none"
                        stroke-width="0"
                        stroke-dasharray="none"
                        opacity="1"
                        mask="none"
                        filter="none"
                        transform="matrix(1 0 0 1 0 0)"
                    >
                        <g
                            class="draggable"
                            id="WebdutTeam11R72Group-6"
                            fill="rgba(0, 0, 0, 0)"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            mask="none"
                            filter="none"
                            transform="matrix(0.7472173892180144 -0.6645796966882265 0.6645796966882265 0.7472173892180144 -8.363097037473725 8.385031670314431)"
                        >
                            <path
                                id="WebdutTeam11R72Path-2"
                                d="M 12.93385416666666,17.633854166666662 L 3.400520833333342,20.033854166666675 L 12.73385416666667,2.967187499999998 L 22.0671875,20.033854166666675 L 12.93385416666666,17.633854166666662 Z"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 -0.7333333333333343 0.93333333333333)"
                            />

                            <path
                                id="WebdutTeam11R72Path-3"
                                d="M 11.867187500000004,10.1671875 V 16.433854166666666"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 0.13333333333333286 0.06666666666666998)"
                            />

                            <path
                                id="WebdutTeam11R72Path-4"
                                d="M 8.73385416666667,13.367187499999996 H 15.267187500000002"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />
                        </g>
                    </g>
                </g>
            </Icon>
        </IconButton> -->
        <Wrapper rich>
            <IconButton on:click={deleteNode} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-3 -3 28 28">
                    <g>
                        <g
                            class="draggable"
                            id="Layer-0"
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            mask="none"
                            filter="none"
                            transform="matrix(1 0 0 1 0 0)"
                        >
                            <g
                                class="draggable"
                                id="WebdutTeam11R72Group-6"
                                fill="rgba(0, 0, 0, 0)"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="none"
                                filter="none"
                                transform="matrix(0.7472173892180144 -0.6645796966882265 0.6645796966882265 0.7472173892180144 -8.363097037473725 8.385031670314431)"
                            >
                                <path
                                    id="WebdutTeam11R72Path-2"
                                    d="M 12.93385416666666,17.633854166666662 L 3.400520833333342,20.033854166666675 L 12.73385416666667,2.967187499999998 L 22.0671875,20.033854166666675 L 12.93385416666666,17.633854166666662 Z"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 -0.7333333333333343 0.93333333333333)"
                                />
    
                                <path
                                    id="WebdutTeam11R72Path-4"
                                    d="M 8.73385416666667,13.367187499999996 H 15.267187500000002"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
                            </g>
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Delete selected vertex</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => clopenPath(true)} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-3 -3 28 28">
                    <g>
                        <g
                            class="draggable"
                            id="Layer-0"
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                            >
                            <path
                                id="WebdutTeam6Path-2"
                                d="M 3.119999999999999,9.8003125 L 7.4,4.600312500000001 L 15.44,3.9203124999999996 L 20.68,9.240312500000002 L 19.92,17.8003125 L 11.360000000000001,20.480312500000004"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />
    
                            <path
                                id="WebdutTeam6Path-3"
                                d="M 11.040000000000004,21.2803125 L 1.8399999999999999,9.0003125"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="rgba(255, 0, 0, 1)"
                                stroke-width="2"
                                stroke-dasharray="2"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 -0.0799999999999983 -0.11999999999999744)"
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Close or open a selected path</Content>
            </Tooltip>
        </Wrapper>
       
                <!-- <span class:active={isRelative} on:click={() => isRelative = !isRelative} title="Relative">Rel</span> -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- <Wrapper rich>
            <IconButton on:click={makeH} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-396 -296 175 161.75">
                    <g
                        fill="none"
                        stroke="none"
                        stroke-width="0"
                        stroke-dasharray="none"
                        opacity="1"
                        transform="matrix(1 0 0 1 0 0)"
                        class="s-W27IpQalRwsJ"
                        >
                        <path
                            d="M -396.1801838239012,-200 H -221.10055713404586"
                            fill="rgba(0, 0, 0, 0)"
                            stroke="currentColor"
                            stroke-width="15"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                            class="s-iR66gMRv89L2"
                        />
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Convert the path segment to chosen vertex to horizontal path segment</Content>
            </Tooltip>
        </Wrapper> -->
        <!-- <Wrapper rich>
            <IconButton on:click={makeV} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-396 -296 175 161.75">
                    <g
                        fill="none"
                        stroke="none"
                        stroke-width="0"
                        stroke-dasharray="none"
                        opacity="1"
                        transform="matrix(1 0 0 1 0 0)"
                        class="s-W27IpQalRwsJ"
                        >
                        <path
                            d="M -300.1801838239012,-100 V -300"
                            fill="rgba(0, 0, 0, 0)"
                            stroke="currentColor"
                            stroke-width="15"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                            class="s-iR66gMRv89L2"
                        />
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Convert the path segment to chosen vertex to vertical path segment</Content>
            </Tooltip>
        </Wrapper> -->
        <Wrapper rich>
            <IconButton on:click={makeL} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-396 -296 175 161.75">
                    <g
                        fill="none"
                        stroke="none"
                        stroke-width="0"
                        stroke-dasharray="none"
                        opacity="1"
                        transform="matrix(1 0 0 1 0 0)"
                        class="s-W27IpQalRwsJ"
                        >
                        <path
                            d="M -396.18017578125,-296.1346740722656 L 175.07962036132812,161.7493438720703"
                            fill="rgba(0, 0, 0, 0)"
                            stroke="currentColor"
                            stroke-width="15"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                            class="s-iR66gMRv89L2"
                        />
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Convert the path segment to chosen vertex to line path segment</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={makeSharp} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-396 -296 175 161.75">
                    <g
                        fill="none"
                        stroke="none"
                        stroke-width="0"
                        stroke-dasharray="none"
                        opacity="1"
                        transform="matrix(1 0 0 1 0 0)"
                        class="s-W27IpQalRwsJ"
                        >
                            <path
                                d="M -396.1801838239012,-134.38533756660837 C -379.3725396616751,-160.7973498215351 -328.94960717499674,-240.03338658631534 -312.14196301277065,-266.4453988412421 C -294.53395484281947,-241.03384159597164 -238.70856530399703,-159.79689481187876 -221.10055713404586,-134.3853375666083"
                                fill="rgba(0, 0, 0, 0)"
                                stroke="currentColor"
                                stroke-width="15"
                                stroke-dasharray="none"
                                opacity="1"
                                transform="matrix(1 0 0 1 0 0)"
                                class="s-iR66gMRv89L2"
                            />
                            
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Make corner sharp</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={makeSmooth} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-416.18 -288.12 215 143.73">
                    <g
                        fill="none"
                        stroke="none"
                        stroke-width="0"
                        stroke-dasharray="none"
                        opacity="1"
                        transform="matrix(1 0 0 1 0 0)"
                        class="s-W27IpQalRwsJ"
                        >
                        <path
                            d="M -413.1879189880585,-144.38988766317152 C -392.7786367910697,-170.20162691230448 -351.55989039322947,-273.0484019049738 -309.1405979838017,-273.4485839088363 C -266.7213055743739,-273.84876591269887 -223.1014671533585,-169.20117190264818 -201.09145694091956,-146.39079768248416"
                            fill="rgba(0, 0, 0, 0)"
                            stroke="currentColor"
                            stroke-width="15"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                            class="s-iR66gMRv89L2"
                        />
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Make corner smooth</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={makeSmoothAll} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="0 0 24 24">
                    <g>
                        <g  
                            class='draggable'
                            id='Layer-MithileshKumar8R31-0'
                            fill='none'
                            stroke='none'
                            stroke-width='0'
                            stroke-dasharray='none'
                            opacity='1'
                            mask='none'
                            filter='none'
                            transform='matrix(1 0 0 1 0 0)'
                        >   
                            <path  
                                id='Path-MithileshKumar8R31-2'
                                d='M 2,24 C 2,18 1.9698683556305863,13.766058852812911 6,12 C 10.273695186119522,10.127208269185147 13.32684048871581,14.058588745966103 18,12 C 22.094048703024875,10.19651724595891 22,7 22,1'
                                fill='rgba(0, 0, 0, 0)'
                                fill-rule='evenodd'
                                stroke='currentColor'
                                stroke-width='3'
                                stroke-dasharray='none'
                                stroke-linecap='butt'
                                stroke-linejoin='miter'
                                stroke-miterlimit='4'
                                opacity='1'
                                filter='none'
                                mask='none'
                                marker-start='none'
                                marker-mid='none'
                                marker-end='none'
                                transform='matrix(1 0 0 1 0 0)'
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Make all corners smooth</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={makeArc} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="0 0 200 200">
                    <g
                        fill="none"
                        stroke="none"
                        stroke-width="0"
                        stroke-dasharray="none"
                        opacity="1"
                        transform="matrix(1 0 0 1 0 0)"
                        class="s-W27IpQalRwsJ"
                        >
                        <path
                            d="M 0,100 H 20 A 80 80 0 0 1 180,100 L 200,100"
                            fill="rgba(0, 0, 0, 0)"
                            stroke="currentColor"
                            stroke-width="25"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                            class="s-iR66gMRv89L2"
                        />
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Convert the path segment to use circlur arc</Content>
            </Tooltip>
        </Wrapper>
        <!-- <IconButton on:click={makeQ}>
            <Icon component={Svg} viewBox="0 0 200 200">
                <g
                    fill="none"
                    stroke="none"
                    stroke-width="0"
                    stroke-dasharray="none"
                    opacity="1"
                    transform="matrix(1 0 0 1 0 0)"
                    class="s-W27IpQalRwsJ"
                    >
                    <path
                        d="M 0,100 H 40 Q 100 -80 160,100 L 200,100"
                        fill="rgba(0, 0, 0, 0)"
                        stroke="currentColor"
                        stroke-width="15"
                        stroke-dasharray="none"
                        opacity="1"
                        transform="matrix(1 0 0 1 0 0)"
                        class="s-iR66gMRv89L2"
                    />
                </g>
            </Icon>
        </IconButton>
        <IconButton on:click={makeT}>
            <Icon component={Svg} viewBox="0 0 200 200">
                <g
                    fill="none"
                    stroke="none"
                    stroke-width="0"
                    stroke-dasharray="none"
                    opacity="1"
                    transform="matrix(1 0 0 1 0 0)"
                    class="s-W27IpQalRwsJ"
                    >
                    <path
                        d="M 0,100 H 40 Q 100 -80 160,100 L 200,100"
                        fill="rgba(0, 0, 0, 0)"
                        stroke="currentColor"
                        stroke-width="15"
                        stroke-dasharray="none"
                        opacity="1"
                        transform="matrix(1 0 0 1 0 0)"
                        class="s-iR66gMRv89L2"
                    />
                </g>
            </Icon>
        </IconButton>
        <IconButton on:click={makeS}>
            <Icon component={Svg} viewBox="-416.18 -288.12 215 143.73">
                <g
                    fill="none"
                    stroke="none"
                    stroke-width="0"
                    stroke-dasharray="none"
                    opacity="1"
                    transform="matrix(1 0 0 1 0 0)"
                    class="s-W27IpQalRwsJ"
                    >
                    <path
                            d="M -413.1879189880585,-144.38988766317152 C -392.7786367910697,-170.20162691230448 -351.55989039322947,-273.0484019049738 -309.1405979838017,-273.4485839088363 C -266.7213055743739,-273.84876591269887 -223.1014671533585,-169.20117190264818 -201.09145694091956,-146.39079768248416"
                            fill="rgba(0, 0, 0, 0)"
                            stroke="currentColor"
                            stroke-width="15"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                            class="s-iR66gMRv89L2"
                        />
                        <path
                            d="M -310.1865539590896,-275.44949392814897 C -370.5685355766995,-275.44949392814897 -251.71448042952915,-275.44949392814897 -212.09646204713903,-275.44949392814897"
                            fill="rgba(0, 0, 0, 0)"
                            stroke="currentColor"
                            stroke-width="10"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 3.001365028968962)"
                            class="s-iR66gMRv89L2"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="15"
                            fill="rgba(255, 0, 0, 1)"
                            stroke="currentColor"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 -310.14105299345795 -273.12421763617425)"
                            class="s-8JCzdwtpVri7"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="12"
                            fill="rgba(255, 0, 0, 1)"
                            stroke="currentColor"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 -218.09919210507695 -273.12421763617425)"
                            class="s-8JCzdwtpVri7"
                        />
                </g>
            </Icon>
        </IconButton> -->
            
    {/if}
    
    <IconButton on:click={() => showMoreActions = !showMoreActions} style="font-size:16px;width: 32px; height:32px;padding:6px;background:{showMoreActions ? 'rgba(255, 255, 255, 0.5)': 'none'}">
        <Icon class="material-symbols-outlined">more_vert</Icon>
    </IconButton>
    {#if showMoreActions}
        <Wrapper rich>
            <IconButton on:click={cutPath} style="font-size:16px;width: 32px; height:32px;padding:6px;background:{isCutting ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon component={Svg} viewBox="-0.33 -0.18 24 24">
                    <g>
                        <g
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            mask="none"
                            filter="none"
                            transform="matrix(1 0 0 1 0 0)"
                        >
                            <path
                                id="WebdutTeam12R97Path-2"
                                d="M 15.880520833333346,22.113854166666663 C 18.200753231856158,22.782509081120217 18.884440653306775,19.765990451846793 18.200520833333353,18.10052083333333 C 17.509998787146433,16.613788193538664 15.213854166666682,15.647187500000001 13.187187500000018,16.67385416666667 C 12.09385416666668,15.220520833333335 13.573854166666678,14.020520833333327 12.560520833333342,11.887187499999992 C 12.867187500000007,9.953854166666662 13.857575861545074,8.011164525678346 14.29385416666667,5.900520833333337 C 14.787187500000003,3.513854166666672 14.880520833333344,1.9671874999999992 14.467187500000009,1.4338541666666664 L 11.627187500000005,10.700520833333327 L 8.707187500000003,1.4338541666666664 C 8.293854166666668,1.9671874999999992 8.467187500000007,3.513854166666672 8.96052083333334,5.900520833333337 C 9.396799138454936,8.011164525678346 10.387187500000003,9.953854166666662 10.693854166666668,11.887187499999992 C 9.680520833333333,14.020520833333327 11.16052083333333,15.220520833333335 10.067187499999992,16.67385416666667 C 8.040520833333328,15.647187500000001 5.744376212853578,16.613788193538664 5.133854166666662,18.10052083333333 C 4.449934346693238,19.765990451846793 5.133621768143858,22.782509081120217 7.45385416666667,22.113854166666663 C 9.387095553446656,21.556724046891407 8.587187499999997,18.687187499999997 11.680520833333333,16.540520833333336 C 14.587187500000015,18.687187499999997 13.94727944655336,21.556724046891407 15.880520833333346,22.113854166666663 ZM 8.720312499999999,17.420312499999998 C 8.21853278240216,17.217989265081606 6.512312499999999,17.6683125 6.120312500000001,18.7803125 C 5.8562488994771815,19.529390876993308 6.216312499999999,21.132312499999998 6.760312499999998,21.260312499999998 C 7.255283404924026,21.376776242335065 7.777065168233633,20.309377017742236 8.240312500000005,19.6203125 C 8.69703091573706,18.940959520925386 9.682713855149428,17.808363568297136 8.720312499999999,17.420312499999998 ZM 14.560312499999998,17.5003125 C 15.040312499999999,17.2843125 16.8323125,17.828312500000003 17.2803125,18.5803125 C 17.7283125,19.3323125 17.3203125,21.0443125 16.8403125,21.2603125 C 16.3603125,21.476312500000002 15.6083125,20.332312499999997 15.1603125,19.580312499999998 C 14.7123125,18.8283125 14.080312499999998,17.7163125 14.560312499999998,17.5003125 Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="0.1"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(0.7071067811865475 -0.7071067811865475 0.7071067811865475 0.7071067811865475 -4.941773979306938 11.712364556921019)"
                            />

                            <path
                                id="WebdutTeam12R97Path-3"
                                d="M 4.0003125,21.8603125 C 6.440312499999997,18.604312500000002 3.9071722033058283,15.899931588895987 3.8003125000000004,12.420312500000001 C 3.6723124999999994,8.252312500000004 8.656312500000002,3.844312499999999 13.2803125,3.8203125 C 16.463606236693334,3.803790214169412 17.328312499999996,6.9723125 20.360312499999996,4.9003125"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="2 1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Split path at the chosen vertex</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={reversePath} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-0.44 -0.16 24 24">
                    <g>
                        <g
                            class="draggable"
                            id="Layer-0"
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                        >
                            <path
                                id="WebdutTeam10Path-2"
                                d="M 20.799999999999997,11.840000000000002 H 7.24"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />

                            <polygon
                                id="WebdutTeam10Regular-3"
                                points="16.00,12.00 10.00,15.46 10.00,8.54 "
                                fill="rgba(255, 0, 0, 1)"
                                stroke="rgba(255, 0, 0, 1)"
                                stroke-width="1"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                transform="matrix(-1 0 0 1 18.319999809265138 -0.16000000000000014)"
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Reverse the direction of the path without changing the path</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={combinePath} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-3 -3 28 28">
                    <g>
                        <g
                            class="draggable"
                            id="Layer-0"
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            mask="none"
                            filter="none"
                            transform="matrix(1 0 0 1 0 0)"
                        >
                            <path
                                id="WebdutTeam13R10Circle-2"
                                d="M 10,0 A 10 10 0 0 1 0,10 A 10 10 0 0 1 -10,0 A 10 10 0 0 1 0,-10 A 10 10 0 0 1 10,0 ZM 1.066666603088379,-2.2666664123535156 A 4 4 0 0 1 -2.933333396911621,1.7333335876464844 A 4 4 0 0 1 -6.933333396911621,-2.2666664123535156 A 4 4 0 0 1 -2.933333396911621,-6.266666412353516 A 4 4 0 0 1 1.066666603088379,-2.2666664123535156 ZM 4.933333396911621,4.266667366027832 A 2 2 0 0 1 2.933333396911621,6.266667366027832 A 2 2 0 0 1 0.9333333969116211,4.266667366027832 A 2 2 0 0 1 2.933333396911621,2.266667366027832 A 2 2 0 0 1 4.933333396911621,4.266667366027832 Z"
                                fill="rgba(0, 0, 0, 0.3)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 11.73333333333333 12.06666666666667)"
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Combine path into a multi-path</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={connectPath} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-3 -3 28 28">
                    <g>
                        <g
                            class="draggable"
                            id="Layer-0"
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="matrix(1 0 0 1 0 0)"
                        >
                            <path
                                id="WebdutTeam10Path-2"
                                d="M 3.3599999999999977,8.12 L 10.359999999999998,3.08 L 19.959999999999994,10.360000000000001"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />

                            <path
                                id="WebdutTeam10Path-3"
                                d="M 11.640000000000002,12.44 V 19.4 H 19.399999999999995"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />

                            <path
                                id="WebdutTeam10Path-4"
                                d="M 10.760000000000003,12.960000000000003 L 20.839999999999996,10.28"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-dasharray="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Connect two paths</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={setMirrorMode} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-3 -0.3 28 28">
                    <g>
                        <g
                            class="draggable"
                            id="Layer-0"
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            mask="none"
                            filter="none"
                            transform="matrix(1 0 0 1 0 0)"
                        >
                            <path
                                id="WebdutTeam11Path-2"
                                d="M 20.733854166666678,22.2671875 C 19.813854166666673,21.653854166666665 15.702791141396766,19.656722613704506 15.80052083333334,16.8671875 C 15.886156486204012,14.422857062298602 19.7569414296675,12.56687286954565 19.533854166666675,9.800520833333334 C 19.265294836756325,6.470300904378643 12.840520833333336,4.200520833333332 11.867187500000004,3.2671874999999986 C 10.89385416666667,4.200520833333332 4.469080163243681,6.470300904378643 4.200520833333332,9.800520833333334 C 3.977433570332506,12.56687286954565 7.848218513795994,14.422857062298602 7.933854166666666,16.8671875 C 8.031583858603241,19.656722613704506 3.920520833333333,21.653854166666665 3.0005208333333293,22.2671875"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />

                            <path
                                id="WebdutTeam11Path-3"
                                d="M 11.73385416666667,0.6671875000000007 V 22.733854166666667"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="2"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>
                    <div class="infoPanel">
                        <h3 style="font-size:16px;width: 32px; height:32px;padding:6px;padding-top:0">Mirror mode</h3>
                        <p>Create and edit path in mirror mode.</p>
                        <h4>Method: Create Path</h4>
                        <ol>
                            <li>Click on this button to set mirror mode.</li>
                            <li>Start creating path using pen tool above.</li>
                            <li>
                                The first vertex is taken as a reference point. The
                                mirror passes through this point vertically.
                            </li>
                            <li>For each new node, its mirror is added to the path.</li>
                        </ol>
                        <h4>Method: Edit path in mirror mode</h4>
                        <ol>
                            <li>Select the path and set node mode on.</li>
                            <li>Click on this button set mirror mode on.</li>
                            <li>Click on a vertex to set it as the reference point.</li>
                            <li>
                                Mirror of a vertex is a vertex at the same node count
                                distance from the reference vertex.
                            </li>
                            <li>
                                Move any vertex or its control point. The mirror vertex
                                or control point will respond accordingly.
                            </li>
                        </ol>
                    </div>
                </Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={convert2Path} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-345 -368.5 700 700">
                    <g>
                        <g
                            class="draggable"
                            id="Layer-0"
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            mask="none"
                            filter="none"
                            transform="matrix(1 0 0 1 0 0)"
                        >
                            <path
                                id="WebdutTeam13R65Circle-2"
                                d="M 271.5,0 A 271.5 271.5 0 0 1 0,271.5 A 271.5 271.5 0 0 1 -271.5,0 A 271.5 271.5 0 0 1 0,-271.5 A 271.5 271.5 0 0 1 271.5,0 Z"
                                fill="rgba(0, 0, 0, 0.3)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="20"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 5 -19)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-3"
                                x="-541"
                                y="-451.5"
                                width="50"
                                height="50"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(6.123233995736766e-17 1 -1 6.123233995736766e-17 -149.99999999999994 497)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-4"
                                x="-541"
                                y="-451.5"
                                width="50"
                                height="50"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(-1 1.2246467991473532e-16 -1.2246467991473532e-16 -1 -510.0000000000001 -173.9999999999999)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-5"
                                x="-541"
                                y="-451.5"
                                width="50"
                                height="50"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(-1.8369701987210297e-16 -1 1 -1.8369701987210297e-16 159.9999999999999 -536.0000000000001)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-6"
                                x="-541"
                                y="-451.5"
                                width="50"
                                height="50"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 -2.4492935982947064e-16 2.4492935982947064e-16 1 521.0000000000001 136.9999999999999)"
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Convert shape to path</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={distributeOnCircle} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                <Icon component={Svg} viewBox="-299 -315.5 400 400">
                    <g>
                        <g
                            class="draggable"
                            id="Layer-0"
                            fill="none"
                            stroke="none"
                            stroke-width="0"
                            stroke-dasharray="none"
                            opacity="1"
                            mask="none"
                            filter="none"
                            transform="matrix(1 0 0 1 0 0)"
                        >
                            <circle
                                id="WebdutTeam13R65Circle-18"
                                cx="0"
                                cy="0"
                                r="271.5"
                                fill="rgba(0, 0, 0, 0)"
                                stroke="rgba(0, 0, 0, 0.3)"
                                stroke-width="10"
                                stroke-dasharray="10"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(0.5819521178637204 0 0 0.5819521178637204 -98.49999999999991 -111.49999999999991)"
                            />

                            <path
                                id="WebdutTeam13R65Path-2"
                                d="M -101,-207.5 L -100,-268.5 L -66,-159.5 L -8.40202641655759,-140.9501767125175 L 49.92143807182174,-158.84915685309412 L -43.237144395601796,-92.83038291218963 L -43.08032203044261,-32.31924417177636 L -8.03443863497671,17.618577737387938 L -99.6096089436045,-50.579576071537254 L -157.11066097518238,-31.731458919483842 L -193.77457835939822,17.030792485095475 L -157.21256366826685,-91.13675847971784 L -192.9069905778174,-139.9991201962223 L -250.6124210774468,-159.80021336938927 L -136.4406829925269,-158.45328253655518 L -101,-207.5 Z"
                                fill="rgba(0, 0, 0, 0)"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-width="5"
                                stroke-dasharray="none"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="4"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 0 0)"
                            />

                            <circle
                                id="WebdutTeam13R65Circle-19"
                                cx="0"
                                cy="0"
                                r="271.5"
                                fill="rgba(0, 0, 0, 0)"
                                stroke="rgba(0, 0, 0, 0.3)"
                                stroke-width="10"
                                stroke-dasharray="10"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(0.36648250460405174 0 0 0.36648250460405174 -100.99999999999996 -108.99999999999996)"
                            />

                            <circle
                                id="WebdutTeam13R65Circle-20"
                                cx="0"
                                cy="0"
                                r="271.5"
                                fill="rgba(0, 0, 0, 0)"
                                stroke="rgba(0, 0, 0, 0.3)"
                                stroke-width="10"
                                stroke-dasharray="10"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(0.220994475138122 0 0 0.220994475138122 -102.49999999999987 -109.49999999999987)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-3"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 433 174)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-4"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 430 392)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-5"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 374 350)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-6"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 337 299)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-7"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 395 282)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-8"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 488 349)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-9"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 466 282)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-10"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 374 412)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-11"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 490 410)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-12"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 521 298)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-13"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 430 234)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-14"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 281 282)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-15"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 339 457)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-16"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 526 458)"
                            />

                            <rect
                                id="WebdutTeam13R65Rect-17"
                                x="-541"
                                y="-451.5"
                                width="20"
                                height="20"
                                rx="0"
                                ry="0"
                                fill="rgba(255, 0, 0, 1)"
                                stroke="currentColor"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                filter="none"
                                mask="none"
                                transform="matrix(1 0 0 1 583 283)"
                            />
                        </g>
                    </g>
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>
                    <div class="infoPanel">
                        <h3 style="font-size:16px;width: 32px; height:32px;padding:6px;padding-top:0">Spread vertices on a circle</h3>
                        <p>Spread vertices of a path on a circle.</p>
                        <h4>Method</h4>
                        <ol>
                            <li>Select a path and activate node mode.</li>
                            <li>Click on this button to select vertices</li>
                            <li>Order of selection of vertices is important.</li>
                            <li>To exit, click on this button again.</li>
                        </ol>
                    </div>
                </Content>
            </Tooltip>
        </Wrapper>
        {#if showTakeCircledVerticesMode}
            <Wrapper rich>
                <IconButton on:click={finishTakingVertices} style="font-size:16px;width: 32px; height:32px;padding:6px;display:flex;flex-direction:column;">
                    <Icon component={Svg} viewBox="-299 -315.5 400 400">
                        <g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="none"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <path
                                    id="WebdutTeam13R65Path-2"
                                    d="M -101,-207.5 L -100,-268.5 L -66,-159.5 L -8.40202641655759,-140.9501767125175 L 49.92143807182174,-158.84915685309412 L -43.237144395601796,-92.83038291218963 L -43.08032203044261,-32.31924417177636 L -8.03443863497671,17.618577737387938 L -99.6096089436045,-50.579576071537254 L -157.11066097518238,-31.731458919483842 L -193.77457835939822,17.030792485095475 L -157.21256366826685,-91.13675847971784 L -192.9069905778174,-139.9991201962223 L -250.6124210774468,-159.80021336938927 L -136.4406829925269,-158.45328253655518 L -101,-207.5 Z"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="5"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-3"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 433 174)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-14"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 281 282)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-15"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 339 457)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-16"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 526 458)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-17"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 583 283)"
                                />
                            </g>
                        </g>
                    </Icon>
                </IconButton>
                <Tooltip>
                    <Content>
                        <div class="infoPanel">
                            <h3 style="font-size:16px;width: 32px; height:32px;padding:6px;padding-top:0">Select Vertices on a circle</h3>
                            <p>Select vertices on a circle.</p>
                            <h4>Method</h4>
                            <ol>
                                <li>Click on vertices to include in the list.</li>
                                <li>To exit, click on this button again.</li>
                            </ol>
                        </div>
                    </Content>
                </Tooltip>
            </Wrapper>
        {/if}
    {/if}
</div>

<Snackbar bind:this={takeParentNodeBar}>
    <Label>Select parent node on the path. Then every click will add a node next to the parent node.</Label>
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
</Snackbar>
<Snackbar bind:this={takeCutNodeBar}>
    <Label>Select a point on the path as the cut point.</Label>
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
</Snackbar>
<Snackbar bind:this={combinePathsBar}>
    <Label>Select the parent path.</Label>
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
</Snackbar>
<Snackbar bind:this={connectPathsBar}>
    <Label>Select the another path to connect.</Label>
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
</Snackbar>
<style>
    .buttons {
        display:flex;
        flex-direction:row;
        align-items:center;
    }
</style>
