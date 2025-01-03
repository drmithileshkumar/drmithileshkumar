//@ts-nocheck
import { Point } from "$lib/vectorial/utils/common/point";
import { Path } from "$lib/vectorial/utils/common/path";
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
export let boundingBox;
function getMousePosition(evt) {
    if(boundingBox) {
        var ctm = boundingBox.getScreenCTM().inverse();
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
const getIndex = (a, arr) => {
    if (!arr || arr.length === 0) return -1;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i]) index = i;
    }
    return index;
};
export const createPath = (inputId, boundBox, takingControl = false) => {
    inputElementId = inputId;
    boundingBox = boundBox;
    takingControls = takingControl;
    
    takingControls = !takingControls;
    if (takingControls) {
        $pathMode = true;
        if ($selectedId && $elements[$selectedId].tag === "path") {
            inputElementId = $selectedId;
            $selectedVertex = null;
        } else {
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
}
const activateControlInputMode = () => {
    // console.log($svg);
    $svg.addEventListener("click", takeControls);
    $svg.addEventListener("touchstart", takeControls);
    $svg.addEventListener("contextmenu", finishTakingControls);
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
}
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
    $elements[$selectedId].ctm = boundingBox
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
}
const finishTakingControls = () => {
    takingControls = false;
    $svg.removeEventListener("click", takeControls);
    $svg.removeEventListener("touchstart", takeControls);
    $svg.removeEventListener("contextmenu", finishTakingControls);
    inputElementId = null;
}