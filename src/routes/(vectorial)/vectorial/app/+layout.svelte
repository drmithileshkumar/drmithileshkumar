<script lang='ts'>
    //@ts-nocheck
    import { create, all } from 'mathjs'

    const config = { }
    const math = create(all, config)
    import { Input } from '@smui/textfield';
    import Dialog, {Actions} from '@smui/dialog';
    import Tooltip, {
        Wrapper,
        Title,
        Content,
        Link,
        RichActions,
    } from '@smui/tooltip';
    import Button, { Label } from '@smui/button';
    import ActionBar from '$lib/vectorial/pages/vectorial/ActionBar.svelte';
    import { showLeft, darkMode } from "$lib/vectorial/stores.js";
    
    import {clientWidth, clientHeight, PAN, boundingBox, panX, panY} from '$lib/vectorial/pages/vectorial/stores';
    import IconButton, { Icon } from '@smui/icon-button';
    import MenuSurface from '@smui/menu-surface';
    
    import { Svg } from '@smui/common';
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { createEventDispatcher } from "svelte";
    
    import Textfield from "@smui/textfield";
    
    import Ripple from '@smui/ripple';
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
        selectedVertices,
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
        showGuides
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

    //import stores
    import { onMount, onDestroy } from "svelte";
    import LinearProgress from '@smui/linear-progress';
    import { pageLoadState } from '$lib/vectorial/stores';
    import Appearance from "$lib/vectorial/pages/vectorial/Appearance.svelte";
    import Dimensions from "$lib/vectorial/pages/vectorial/Dimensions.svelte";
    import Help from "$lib/vectorial/pages/vectorial/Help.svelte";
    import UpdateDrawing from "$lib/vectorial/pages/vectorial/UpdateDrawing.svelte";
    import UploadSymbol from "$lib/vectorial/pages/vectorial/UploadSymbol.svelte";
    import SymbolList from "$lib/vectorial/pages/vectorial/SymbolList.svelte";
    import { Point } from "$lib/vectorial/utils/common/point";
    import { Path } from "$lib/vectorial/utils/common/path";
    import { Line } from "$lib/vectorial/utils/common/line";
    import { Circle } from "$lib/vectorial/utils/common/circle";
    import { Ellipse } from "$lib/vectorial/utils/common/ellipse";
    import { Rectangle } from "$lib/vectorial/utils/common/rectangle";
    import { Regular } from "$lib/vectorial/utils/common/regular";
    import { Text } from "$lib/vectorial/utils/common/text";
    import { Latex } from "$lib/vectorial/utils/common/latex";
    import { Plot } from "$lib/vectorial/utils/common/plot";
    import { Group } from "$lib/vectorial/utils/common/g";
    import {Image} from '$lib/vectorial/utils/common/image';
    import { Grid } from '$lib/vectorial/utils/common/grid';

    import FileOperations from "$lib/vectorial/pages/vectorial/FileOperations.svelte";
    
    import AttributeOperations from "$lib/vectorial/pages/vectorial/AttributeOperations.svelte";


    import Layers from "$lib/vectorial/pages/vectorial/Layers.svelte";
    
    import Filters from "$lib/vectorial/pages/vectorial/Filters.svelte";
    import Markers from "$lib/vectorial/pages/vectorial/Markers.svelte";
    import Masks from "$lib/vectorial/pages/vectorial/Masks.svelte";
    
    
    // import { selectedElements } from "./stores";

    export let sourceApp = "Vectorial";
    export let dispatchUrl = `/vectorial/${$page.data.user.publicID}/drawings`;
    let dispatch = createEventDispatcher();
    
    
    if (!$BBOX) {
        $BBOX = {
            x: -$clientWidth / 2,
            y: -$clientHeight / 2,
            height: $clientHeight,
            width: $clientWidth,
        };
    }
    const computeObjectCount = () => {
        let objcount = 0;
        let ids = Object.keys($elements);
        let defIds = Object.keys($defs);
        ids = [...ids, ...defIds];
        // console.log(ids)
        let counters = [];
        for(let i = 0; i < ids.length; i++) {
            let parts = ids[i].split('-');
            
            if(parts.length === 3) {
                counters.push(Number(parts[2]));
            }
        }
        // console.log(counters)
        if(counters.length > 0) {
            objcount = Math.max(...counters) + 1;
        } else {
            objcount = 0;
        }
        return objcount;
    }
    onMount(() => {
        // MathJax.typeset();
        
        if ($elements) {
            $objectCount = computeObjectCount();
            // console.log('Ojbect count... layout', $objectCount)
        }
        $pageLoadState = true;
        // hydrateElements();
        // hydrateElementData();
    });
    let progress = 0;
    let closed = false;
    let timer;
    
    $: if(!$pageLoadState) {
        reset();
    } 
 
    onDestroy(() => {
        clearInterval(timer);
    });
 
    function reset() {
        progress = 0;
        closed = false;
        clearInterval(timer);
        timer = setInterval(() => {
            progress += 0.1;
            if(!$pageLoadState && progress >= 0.7) progress = 0.7;
            if ($pageLoadState || progress >= 1) {
                progress = 1;
                closed = true;
                clearInterval(timer);
            }
        }, 100);
    }
    let selectedTool = '';
    let showFilters = false,
        showMarkers = false,
        showMasks = false,
        showElements = false,
        showAppearance = false,
        showDimensions = false,
        showHelp = false,
        isGettingn = false,
        n = 3,
        inputText = false,
        textContent = "text",
        inputLatex = false,
        inputFunction = false,
        elementAvailable = true,
        takingControls = false,
        inputElementId,
        showSymbols = false,
        uploadSymbol = false,
        updateDrawing = false,
        showLayers = false,
        isDragged = false;

    let filesMenu;
    let showShapesMode = false,
        showTextMode = false,
        showLatexMode = false;

    let isRotating = false,
        stateChanged = false;

    let isTransforming = false,
        rotationMode = false;
    let topbar, filesAnchor, filesAnchorClasses = {};
    let showDocument = false;
    let fileinput, image;
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
    const addImage = async (event) => {
        image = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = event => {
            let src = event.target.result;
            let layer = 'Layer-'+$DRAWING.drawingID + '-' +$currentLayer;
            if($elements.Layers.length > 0) {
                if($elements.Layers[0] === 'Layer-0') {
                    layer = 'Layer-' + $currentLayer;
                }
            }
            let newImage = new Image({id: 'Image-' + $DRAWING.drawingID + '-' + $objectCount, layer:layer, parent: layer});
            $elements[newImage.id] = newImage;
            $elements[newImage.parent].children.push(newImage.id);
            $objectCount = $objectCount + 1;

            newImage.href = src;
            $elements = $elements;
             
        };
    };
    const saveHistory = () => {
        if (isDragged) {
            $appHistory = [
                ...$appHistory,
                {
                    id: $selectedId,
                    change: {
                        translatex: $elements[$selectedId].translatex,
                        translatey: $elements[$selectedId].translatey,
                    },
                },
            ];
            $currentState = $appHistory.length - 1;
        }
    };
    const text2plot = (pg, p, mathtext) => {
        const plotNode = math.parse(mathtext)   // returns the root Node of an expression tree
        const code = plotNode.compile()        // returns {evaluate: function (scope) {...}}
        pg.ymin = 0;  
        pg.ymax = 100;
        let points = [];
        for(let i = pg.xmin; i < pg.xmax; i = i + pg.step) {
            points.push({
                x: i,
                y: -code.evaluate({x: i})
            })
        }

        let d = "M" + points[0].x + ',' + points[0].y;
        for(let i = 1; i < points.length; i++) {
            if(-points[i].y <  pg.ymin) {
                pg.ymin = -points[i].y;
            }
            if(-points[i].y >  pg.ymax) {
                pg.ymax = -points[i].y;
            }
            d += " L " + points[i].x + ',' + points[i].y;
        }
        p.d = d;
        // return `<path d="${d}" stroke="rgba(0, 0, 0, 1)" stroke-width="2" fill='none' vector-effect="non-scaling-size" />`
    }
    const createLine = () => {
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }
        let line = new Line({
            id: "Line-" + $DRAWING.drawingID + "-" + $objectCount,
            layer: layer,
            parent: layer,
        });
        line.x1 = $BBOX.x + 2;
        line.y1 = $BBOX.y + 2;
        line.x2 = $BBOX.width / 2;
        line.y2 = $BBOX.height / 2;
        $elements[line.parent].children.push(line.id);
        $elements[line.id] = line;
        $objectCount = $objectCount + 1;
        $elements = $elements;

        $selectedId = line.id;
        $appHistory = [
            ...$appHistory,
            {
                id: line.parent,
                change: {
                    children: $elements[line.parent].children.map(item => item),
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
    };
    const createCircle = () => {
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }
        let circle = new Circle({
            id: "Circle-" + $DRAWING.drawingID + "-" + $objectCount,
            layer: layer,
            parent: layer,
        });
        circle.cx = $BBOX.x + $BBOX.width / 2;
        circle.cy = $BBOX.y + $BBOX.height / 2;
        circle.r = Math.min($BBOX.width / 4, 50);
        circle.bbox = {
            x: circle.cx - circle.r,
            y: circle.cy - circle.r,
            width: 2 * circle.r,
            height: 2 * circle.r
        }
        
        $elements[circle.parent].children.push(circle.id);
        $elements[circle.id] = circle;
        $objectCount = $objectCount + 1;
        $elements = $elements;
        
        $selectedId = circle.id;
        updateSelectionBox(circle.id)
        $appHistory = [
            ...$appHistory,
            {
                id: circle.parent,
                change: {
                    children: $elements[circle.parent].children.map(item => item),
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
    };
    const createEllipse = () => {
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }
        let ellipse = new Ellipse({
            id: "Ellipse-" + $DRAWING.drawingID + "-" + $objectCount,
            layer: layer,
            parent: layer,
        });
        ellipse.cx = $BBOX.x + $BBOX.width / 2;
        ellipse.cy = $BBOX.y + $BBOX.height / 2;
        ellipse.rx = Math.min($BBOX.width / 4, 100);
        ellipse.ry = Math.min($BBOX.height / 4, 50);
        ellipse.bbox = {
            x: ellipse.cx - ellipse.rx,
            y: ellipse.cy - ellipse.ry,
            width: 2 * ellipse.rx,
            height: 2 * ellipse.ry
        }
        
        $elements[ellipse.parent].children.push(ellipse.id);
        $elements[ellipse.id] = ellipse;
        $objectCount = $objectCount + 1;
        $elements = $elements;
        
        $selectedId = ellipse.id;
        updateSelectionBox(ellipse.id);
        $appHistory = [
            ...$appHistory,
            {
                id: ellipse.parent,
                change: {
                    children: $elements[ellipse.parent].children.map(item => item),
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
    };
    const createRect = () => {
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }
        let rect = new Rectangle({
            id: "Rect-" + $DRAWING.drawingID + "-" + $objectCount,
            layer: layer,
            parent: layer,
        });
        rect.x = $BBOX.x + $BBOX.width / 2;
        rect.y = $BBOX.y + $BBOX.height / 2;
        rect.width = Math.min($BBOX.width / 3, 70);
        rect.height = Math.min($BBOX.width / 4, 50);
        rect.bbox = {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
        }
        $elements[rect.id] = rect;
        $elements[rect.parent].children.push(rect.id);
        $objectCount = $objectCount + 1;

        $elements = $elements;
        $selectedId = rect.id;
        updateSelectionBox($selectedId);
        $appHistory = [
            ...$appHistory,
            {
                id: rect.parent,
                change: {
                    children: $elements[rect.parent].children.map(item => item),
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
    };

    const createRegular = () => {
        isGettingn = false;
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }
        let rect = new Regular({
            n: n,
            id: "Regular-" + $DRAWING.drawingID + "-" + $objectCount,
            layer: layer,
            parent: layer,
            center: new Point(
                $BBOX.x + $BBOX.width / 2,
                $BBOX.y + $BBOX.height / 2
            ),
            r: Math.min($BBOX.width / 4, 50),
        });
        rect.axis = new Point(rect.r, rect.r);
        rect.bbox = {
            x: rect.center.x - rect.r,
            y: rect.center.y - rect.r,
            width: 2 * rect.r,
            height: 2 * rect.r
        }
        
        $elements[rect.id] = rect;
        $elements[rect.parent].children.push(rect.id);
        $objectCount = $objectCount + 1;

        $elements = $elements;

        $selectedId = rect.id;
        updateSelectionBox(rect.id);
        $appHistory = [
            ...$appHistory,
            {
                id: rect.parent,
                change: {
                    children: $elements[rect.parent].children.map(item => item),
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
    };
    const createText = () => {
        inputText = false;
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }

        let text = new Text({
            id: "Text-" + $DRAWING.drawingID + "-" + $objectCount,
            content: textContent,
            layer: layer,
            parent: layer,
        });
        text.x = $BBOX.x + $BBOX.width / 2;
        text.y = $BBOX.y + $BBOX.height / 2;
        text.bbox = {
            x: text.x,
            y: text.y - 20,
            width: 20 * text.content.length,
            height: 25
        }
        
        text.fontSize = $BBOX.width > 300 ? 20 : 5;
        $elements[text.id] = text;
        $elements[text.parent].children.push(text.id);
        $objectCount = $objectCount + 1;

        $elements = $elements;

        $selectedId = text.id;
        updateSelectionBox(text.id);
        $appHistory = [
            ...$appHistory,
            {
                id: text.parent,
                change: {
                    children: $elements[text.parent].children.map(item => item),
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
    };
    const createLatex = () => {
        inputLatex = false;
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }
        let text = new Latex({
            id: "Latex-" + $DRAWING.drawingID + "-" + $objectCount,
            content: textContent,
            layer: layer,
            parent: layer,
        });
        text.bbox = {
            x: 0,
            y: 0,
            width: 20 * text.content.length,
            height: 20
        }
        
        text.tm =
            $BBOX.width > 500
                ? new DOMMatrix([
                      0.05,
                      0,
                      0,
                      0.05,
                      $BBOX.x + $BBOX.width / 2,
                      $BBOX.y + $BBOX.height / 2,
                  ])
                : new DOMMatrix([
                      0.05,
                      0,
                      0,
                      0.05,
                      $BBOX.x + $BBOX.width / 2,
                      $BBOX.y + $BBOX.height / 2,
                  ]);
        $elements[text.id] = text;
        $elements[text.parent].children.push(text.id);
        $objectCount = $objectCount + 1;

        $elements = $elements;
        $selectedId = text.id;
        updateSelectionBox(text.id)
        $appHistory = [
            ...$appHistory,
            {
                id: text.parent,
                change: {
                    children: $elements[text.parent].children.map(item => item),
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
    };
    const createPlot = () => {
        inputFunction = false;
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }
        let plotGroup = new Plot({
            id: "Plot-" + $DRAWING.drawingID + "-" + $objectCount,
            functions: [textContent],
            layer: layer,
            parent: layer,
        });
        plotGroup.tm = new DOMMatrix([
                      1,
                      0,
                      0,
                      1,
                      $BBOX.x + $BBOX.width / 2,
                      $BBOX.y + $BBOX.height / 2,
                  ])
        $objectCount = $objectCount + 1;
        let id = "Path-" + $DRAWING.drawingID + "-" + $objectCount;
        let path = new Path({ id: id, parent: plotGroup.id, layer: layer, isLocked: true });
        text2plot(plotGroup, path, textContent);
        plotGroup.children.push(id);
        $elements[id] = path;
        
        $elements[plotGroup.id] = plotGroup;
        $elements[plotGroup.parent].children.push(plotGroup.id);
        $objectCount = $objectCount + 1;

        $elements = $elements;
        $selectedId = plotGroup.id;
        $appHistory = [
            ...$appHistory,
            {
                id: plotGroup.parent,
                change: {
                    children: $elements[plotGroup.parent].children.map(item => item),
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
    }
    const createGrid = () => {
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        if ($elements.Layers.length > 0) {
            if ($elements.Layers[0] === "Layer-0") {
                layer = "Layer-" + $currentLayer;
            }
        }
        let rect = new Grid({
            id: "Grid-" + $DRAWING.drawingID + "-" + $objectCount,
            layer: layer,
            parent: layer,
        });
        rect.x = $BBOX.x + $BBOX.width / 2;
        rect.y = $BBOX.y + $BBOX.height / 2;
        rect.bbox = {
            x: rect.x,
            y: rect.y,
            width: 100,
            height: 100
        }
        
        $elements[rect.id] = rect;
        $elements[rect.parent].children.push(rect.id);
        $objectCount = $objectCount + 1;

        $elements = $elements;
        $selectedId = rect.id;
        updateSelectionBox(rect.id);
        $appHistory = [
            ...$appHistory,
            {
                id: rect.parent,
                change: {
                    children: $elements[rect.parent].children.map(item => item),
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
    }
    const setLassoTool = () => {
        $isLasso = !$isLasso;
        if($isLasso) {
            selectedTool = 'Lasso';
        }
        if (!$isLasso && $elements["lasso"]) {
            //remove lasso path
            $elements[$elements["lasso"].parent].children.splice(-1, 1);
            $elements["lasso"] = null;//better remove from the list
            delete $elements["lasso"];
            $selectedId = null;
        }
    }
    const takeAction = (evt) => {
        switch(evt.detail.selectedAction) {
            // case 'Line': {
            //     createLine();
            //     break;
            // }
            case 'Circle': {
                createCircle();
                break;
            }
            case 'Ellipse': {
                createEllipse();
                break;
            }
            case 'Rectangle': {
                createRect();
                break;
            }
            case 'Text': {
                textContent = evt.detail.inputValue;
                createText();
                break;
            }
            case 'LaTeX': {
                textContent = evt.detail.inputValue;
                createLatex();
                break;
            }
            case 'Plot': {
                textContent = evt.detail.inputValue;
                createPlot();
                break;
            }
            case 'Regular': {
                n = parseInt(evt.detail.inputValue);
                createRegular();
                break;
            }
            case 'AddNode': {
                createPath(inputElementId, $boundingBox, true)
                break;
            }
            case 'Lasso': {
                break;
            }
            case 'Grid': {
                createGrid();
                break;
            }
        }
    }
    const resetBoundingbox = (evt) => {
        ctm = $boundingBox.getScreenCTM().inverse();
    }
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
    const transformMode = () => {
        // if(!newVertex) {
        //     $showControls = false;
        //     $showVertices = false;
        // }
        isTransforming = !isTransforming;
        $showBBoxControls = !$showBBoxControls;
        $showControls = false;
        //create group if lasso element is selected
        if($selectedElements && $selectedElements.length > 1) {
            createGroup();
        }
        // if ($selectedId === "lasso") {
        //     $elements[$elements["lasso"].parent].children.splice(-1, 1);
        //     $elements["lasso"] = null;
        //     $selectedId = null;
        //     $elements = $elements;

        //     if ($lassoElements.length > 1) {
        //         createGroup();
        //         $isLassoGroup = true;
        //     } else {
        //         $selectedId = $lassoElements[0];
        //     }
        // }
    };
    const getSelection = () => {
        $selectionMode = !$selectionMode;
        if ($selectionMode) {
            $selectedElements = [];
            $selectedVertices = [];
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
            if($showControls && evt.target.classList.contains('vertex')) {
                id = evt.target.getAttribute("id");
                index = $selectedVertices.indexOf(id);
                // console.log(id, index, evt.target)
                if (id && index === -1) {
                    $selectedVertices = [...$selectedVertices, id];
                } else {
                    $selectedVertices = $selectedVertices.filter(
                        (item) => item !== id
                    );
                }
                $selectedVertices = $selectedVertices;
                console.log($selectedVertices)
            } else {
                if(!$selectedElements) return;
                // id = evt.target.getAttribute("id");
                id = $selectedId;
                index = $selectedElements.indexOf(id);
                // console.log(id, index, evt.target)
                if (id && index === -1) {
                    $selectedElements = [...$selectedElements, id];
                } else {
                    $selectedElements = $selectedElements.filter(
                        (item) => item !== id
                    );
                }
                $selectedElements = $selectedElements;
                // console.log($selectedElements)
            }
            
        }
    };
    const updated = (evt) => {
        dispatch("updated", $DRAWING);
        goto(dispatchUrl);
    };
    const cancelUpdate = (evt) => {
        if (sourceApp === "Colorn") {
            goto(dispatchUrl);
        }
        updateDrawing = false;
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
    // $: switch(topbar) {
    //     case 'Document': {
    //         filesMenu.setOpen(true);
    //         break;
    //     }
    // }
    // $:console.log('object entries...', Object.entries($elements).length)
</script>
<style>
    .background {
        position: fixed;
        background: rgba(0, 0, 0, 0.05);
        overflow: hidden;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 3em 1fr 3em;
        grid-template-rows: 3em 1fr;
        grid-template-areas:
            "top top top"
            "left canvasContainer right";
        background-image: url("/vectorial/background.svg");
        background-repeat: no-repeat;
        background-position: center;
    }
    .top {
        grid-area: top;
        display: grid;
        grid-template-columns: 1fr 110px;
        z-index: 10;
        flex-wrap: wrap;
        height: 2.5em;
        /* margin-left: 1em; */
    }
    .left {
        grid-area: left;
        display: flex;
        margin-top: 10%;
        align-items: center;
        z-index: 2;
        position: absolute;
        flex-direction: column;
    }
    .right {
        grid-area: right;
        display: flex;
        align-items: center;
        z-index: 2;
        position: absolute;
        flex-direction: column;
    }
    .canvasContainer {
        grid-area: canvasContainer;

        overflow: hidden;
        width: 85vw;
        height: 85vh;

        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
        background-color: rgb(232, 232, 232);
        background-image: url("/vectorial/background.svg");
        background-repeat: no-repeat;
        background-position: center;
    }
    .leftside,
    .rightside {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }
    
    .rightDropDown {
        position: fixed;
        z-index: 10;
        top: 4.5em;
        right: 4.5em;
        
        display: flex;
        gap: 0.9em;
        justify-content: start;
        font-size: 0.7em;
        
        width: 300px;
        
        overflow-y: auto;
        height: 600px;
    }
   
</style>
<svelte:head>
    <link
        rel="stylesheet"
        id="theme"
        href="/smui{$darkMode ? '-dark' : ''}.css"
    />
</svelte:head>
{#key $pageLoadState}
    <LinearProgress bind:progress {closed} />
{/key}
<article class="background">
    <div class="top">
        <div class="leftside">
            <ActionBar bind:selectedTool on:doAction={takeAction} />
        </div>
        <div class="rightside">
            <IconButton on:click={() => showDocument = !showDocument} style="background:{showDocument ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-icons">article</Icon>
            </IconButton>
            <IconButton on:click={() => showHelp = !showHelp} style="background:{showHelp ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-icons">help</Icon>
            </IconButton>
        </div>
       
    </div>
    <div class="left">
        <Wrapper rich>
            <IconButton on:click={() => selectedTool = 'Shapes'} style="background:{selectedTool === 'Shapes' ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-icons">interests</Icon>
            </IconButton>
            <Tooltip xPos="end">
                <Content>
                    Select shapes to add to the drawing
                </Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => selectedTool = 'Text'} style="background:{selectedTool === 'Text' ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-icons">text_fields</Icon>
            </IconButton>
            <Tooltip>
                <Content>Add text</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => selectedTool = 'LaTeX'} style="background:{selectedTool === 'LaTeX' ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-icons">functions</Icon>
            </IconButton>
            <Tooltip>
                <Content>Add latex</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => selectedTool = 'Plot'} style="background:{selectedTool === 'Plot' ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-icons">show_chart</Icon>
            </IconButton>
            <Tooltip>
                <Content>Plot function</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => fileinput.click()}>
                <input style="display: none;" type="file" accept=".jpg, .jpeg, .png"
                            id="input-file"
                            name="input-file"
                            on:change={addImage}
                            bind:this={fileinput}
                            >
                <Icon class="material-icons">add_a_photo</Icon>
            </IconButton>
            <Tooltip>
                <Content>Add picture (jpg, jpeg, png)</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => selectedTool = 'Path'} style="background:{selectedTool === 'Path' ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-symbols-outlined">stylus</Icon>
            </IconButton>
            <Tooltip>
                <Content>Enter path mode</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={getSelection} style="background:{$selectionMode ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-symbols-outlined">select</Icon>
            </IconButton>
            <Tooltip>
                <Content>Select items into a list by clicking on each item. Click again on a selected item to remove it from the selection list. Click on this button again to exit selection mode.</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={setLassoTool} style="background:{$isLasso ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-symbols-outlined">laps</Icon>
            </IconButton>
            <Tooltip>
                <Content>Select items by creating a closed area around them. First create a lasso path. Click on this button to exit lasso mode.</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={transformMode} style="background:{isTransforming ? 'rgba(255, 255, 255, 0.5)': 'none'}">
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
            </IconButton>
            <Tooltip>
                <Content>Transform mode. Resize by using circles on the boundary. Click on the center circle to activate rotation mode.</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => deleteItem($selectedId)}>
                <Icon class="material-icons">delete</Icon>
            </IconButton>
            <Tooltip>
                <Content>Delete selected item.</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => $showGuides = !$showGuides} style="background:{$showGuides ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Icon class="material-symbols-outlined">grid_guides</Icon>
            </IconButton>
            <Tooltip>
                <Content>Show / Hide guides</Content>
            </Tooltip>
        </Wrapper>
    </div>
    <div class="right">
        <AttributeOperations
            bind:showAppearance
            bind:showDimensions
            bind:showSymbols
            bind:uploadSymbol
            bind:showLayers
            bind:showFilters
            bind:showMasks
            bind:showMarkers
        />
        <!-- <Info /> -->
        <!-- {#if uploadSymbol && $elements}
            <div class="rightDropDown">
                <UploadSymbol
                    on:symbolSaved={updateSymbolList}
                    on:cancel={() => (uploadSymbol = false)}
                />
            </div>
        {/if} -->
        <!-- {#if showSymbols}
            <SymbolList />
        {/if} -->
    </div>
    <div class="canvasContainer" bind:clientHeight={$clientHeight} bind:clientWidth={$clientWidth}>
        <slot></slot>
        {#if showDocument || showHelp || updateDrawing || showAppearance || showDimensions || showFilters || showMarkers || showMasks || showLayers}
            <div class="rightDropDown">
                    {#if showDocument}   
                        <FileOperations
                            bind:updateDrawing
                            bind:uploadSymbol
                            bind:showHelp
                            {dispatchUrl}
                            on:closeMenu={() => showDocument = false}
                        />
                    {/if}
                    {#if showHelp}
                        <Help />
                    {/if}
                    {#if updateDrawing && $elements}
                        <UpdateDrawing
                            {sourceApp}
                            on:updated={updated}
                            on:drawingSaved={() => goto("/")}
                            on:cancel={cancelUpdate}
                        />
                    {/if}
                    {#if elementAvailable && showAppearance && Object.entries($elements).length > 0}
                        <Appearance />
                    {/if}
                    {#if elementAvailable && showDimensions}
                        <Dimensions />
                    {/if}
                    {#if elementAvailable && showFilters && Object.entries($elements).length > 0}
                        <Filters />
                    {/if}
                    {#if elementAvailable && showMarkers && Object.entries($elements).length > 0}
                        <Markers />
                    {/if}
                    {#if elementAvailable && showMasks && Object.entries($elements).length > 0}
                        <Masks />
                    {/if}
                    {#if showLayers && Object.entries($elements).length > 0}
                        <Layers />
                    {/if}
            </div>
        {/if}
    </div>
</article>
<!-- <Dialog bind:open={isGettingn}>
    <Title style="font-size: 1.5em;color:currentColor;margin:0;">Enter number of sides</Title>
    <Content>
        <Textfield type="number" label="n" bind:value={n} style="margin: 0.5em;" variant="filled"/>
    </Content>
    <Actions>
        <Button on:click={createRegular}>Done</Button>
        <Button on:click={() => isGettingn = false}>Cancel</Button>
    </Actions>
</Dialog> -->


