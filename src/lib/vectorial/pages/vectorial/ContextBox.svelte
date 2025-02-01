<script lang='ts'>
    //@ts-nocheck
    import Tooltip, {
        Wrapper,
        Title,
        Link,
        RichActions,
    } from '@smui/tooltip'; 
    import Card, { Content, Actions } from '@smui/card';
    import {
        DRAWING,
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
        defs,
        objectCount
    } from "./stores";
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import { Label } from '@smui/common';
    import Color from '$lib/vectorial/components/Color.svelte';
    import ColorsInUse from './ColorsInUse.svelte';
    import SolidColors from './SolidColors.svelte';
    import LinearGradients from './LinearGradients.svelte';
    import RadialGradients from './RadialGradients.svelte';
    import Slider from "$lib/vectorial/ui/Slider.svelte";
    import FormField from '@smui/form-field';
    import Button from "@smui/button";
    import IconButton from '@smui/icon-button';
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import {Marker} from '$lib/vectorial/utils/common/marker';
    import { ripple } from "$lib/vectorial/ui/ripple";

    import Checkbox from '@smui/checkbox';
    
    import Textfield from "@smui/textfield";
    import { Point } from "$lib/vectorial/utils/common/point";
    import { onMount } from "svelte";
    import { create, all } from 'mathjs'

    const config = { }
    const math = create(all, config)
    const fillparts = ['fill', 'stroke'];
    const filltypes = ['solid', 'linear', 'radial'];
    const opacities = ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1'];
    const strokewidths = ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];

    const gridparts = ['hPath', 'vPath', 'HPath', 'VPath'];
    let selectedGridPart = 'hPath';
    let showSubdivisions = true;

    let filltype = $selectedId && $elements[$selectedId] ? $elements[$selectedId]["filltype"]: '';
    let isNewLG = false, isNewRG = false;
    let selected = 'fill';
    let position = 'start';
    let currentLGId, currentRGId;

    let x, y, width, height, angle = 0, textId;
    let xPrev, yPrev, widthPrev, heightPrev, fixedPoint, anglePrev;
    let preserveAspect = true, showAxis = true;
    let subpath = 0,
        index = 0,
        verticesx = {},
        tinx = {},
        toutx = {},
        verticesy = {},
        tiny = {},
        touty = {},
        nodeType;
    onMount(() => {
        if (
            $selectedId &&
            $elements[$selectedId] &&
            $elements[$selectedId].bbox
        ) {
            x = $elements[$selectedId].sbox.tl.x;
            y = $elements[$selectedId].sbox.tl.y;
            width = $elements[$selectedId].sbox.tl.length(
                $elements[$selectedId].sbox.tr
            );
            height = $elements[$selectedId].sbox.tl.length(
                $elements[$selectedId].sbox.bl
            );
            xPrev = x;
            yPrev = y;
            widthPrev = width;
            heightPrev = height;
            fixedPoint = new Point(
                $elements[$selectedId].bbox.x,
                $elements[$selectedId].bbox.y
            );
            angle = $elements[$selectedId].angle();
            anglePrev = angle;
            if ($elements[$selectedId].tag === "path") {
                if ($selectedVertex) {
                    let nodeIndex =
                        $elements[$selectedId].edgeIndex($selectedVertex);
                    subpath = nodeIndex.subpath;
                    nodeType = "v";
                    index = nodeIndex.index;
                    verticesx[$selectedVertex] =
                        $elements[$selectedId].uiEdges[subpath][index].v.x;
                    verticesy[$selectedVertex] =
                        $elements[$selectedId].uiEdges[subpath][index].v.y;
                }
                if ($selectedControl0) {
                    let nodeIndex =
                        $elements[$selectedId].edgeIndex($selectedControl0);
                    subpath = nodeIndex.subpath;
                    nodeType = "tout";
                    index = nodeIndex.index;
                    toutx[$selectedControl0] =
                        $elements[$selectedId].uiEdges[subpath][index].tout.x;
                    touty[$selectedControl0] =
                        $elements[$selectedId].uiEdges[subpath][index].tout.y;
                }
                if ($selectedControl1) {
                    let nodeIndex =
                        $elements[$selectedId].edgeIndex($selectedControl1);
                    subpath = nodeIndex.subpath;
                    index = nodeIndex.index;
                    nodeType = "tin";
                    tinx[$selectedControl1] =
                        $elements[$selectedId].uiEdges[subpath][index].tin.x;
                    tiny[$selectedControl1] =
                        $elements[$selectedId].uiEdges[subpath][index].tin.y;
                }
            }
            if($elements[$selectedId].tag === 'grid') {
                showSubdivisions = $elements[$selectedId].showSubdivisions;
            }
            if($elements[$selectedId].tag === 'plot') {
                showAxis = $elements[$selectedId].showAxis;
            }
        }
    });
    // $: x = $elements[$selectedId].sbox.tl.x;
    // $: y = $elements[$selectedId].sbox.tl.y;
    // $: width = $elements[$selectedId].sbox.tl.length(
    //             $elements[$selectedId].sbox.tr
    //         );
    // $: height = $elements[$selectedId].sbox.tl.length(
    //     $elements[$selectedId].sbox.bl
    // );
    const setColor = (evt) => {
        if(selected === 'stroke') {
            setStroke(evt);
        }
    }
    const setStroke = (evt) => {
        $elements[$selectedId]['stroke'] = evt.detail.color;
        if($elements[$selectedId].tag === 'path') {
            if($elements[$selectedId].markerStart || $elements[$selectedId].markerMid || $elements[$selectedId].markerEnd) {
                setMarkerColor(evt.detail.color)
            }
        }
        $elements = $elements;
    }
    const setFill = (evt) => {
        // console.log('set color: ', evt.detail.color)
        $elements[$selectedId]['fill'] = evt.detail.color;
        $elements = $elements;
    }
    const setMarkerColor = (color) => {
        let markerEndId = $elements[$selectedId]['markerEnd'];
        if(markerEndId && markerEndId !== 'none') {
            $defs[markerEndId.split('#')[1].split(')')[0]].path.fill = color;
            $defs[markerEndId.split('#')[1].split(')')[0]].path.stroke = color;
        }
        let markerMidId = $elements[$selectedId]['markerMid'];
        if(markerMidId && markerMidId !== 'none') {
            $defs[markerMidId.split('#')[1].split(')')[0]].path.fill = color;
            $defs[markerMidId.split('#')[1].split(')')[0]].path.stroke = color;
        }
        let markerStartId = $elements[$selectedId]['markerStart'];
        if(markerStartId && markerStartId !== 'none') {
            $defs[markerStartId.split('#')[1].split(')')[0]].path.fill = color;
            $defs[markerStartId.split('#')[1].split(')')[0]].path.stroke = color;
        }
        $defs = $defs
    }
    const markerColor = (evt) => {
        setMarkerColor(evt.detail.fill)
    }
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
        // height = height * scaley;
        updateSbox($selectedId);
        $elements = $elements;
        widthPrev = width;
    };
    const changeHeight = () => {
        let scaley = height / heightPrev;
        let scalex = $elements[$selectedId].preserveAspect ? scaley : 1;
        $elements[$selectedId].scale(scalex, scaley, fixedPoint);
        width = width * scalex;
        updateSbox($selectedId);
        $elements = $elements;
        heightPrev = height;
    };
    const changeRadius = () => {
        updateSbox($selectedId);
        $elements = $elements;
    };
    $: if (
        $selectedId &&
        $selectedVertex &&
        $elements[$selectedId].tag === "path"
        ) {
        let nodeIndex = $elements[$selectedId].edgeIndex($selectedVertex);
        nodeType = "v";
        subpath = nodeIndex.subpath;
        index = nodeIndex.index;
        if (!verticesx[$selectedVertex] && subpath >= 0 && index >= 0) {
            verticesx[$selectedVertex] =
                $elements[$selectedId].uiEdges[subpath][index].v.x;
            verticesy[$selectedVertex] =
                $elements[$selectedId].uiEdges[subpath][index].v.y;
        }
    }
    $: if (
        $selectedId &&
        $selectedControl0 &&
        $elements[$selectedId].tag === "path"
        ) {
        let nodeIndex = $elements[$selectedId].edgeIndex($selectedControl0);
        nodeType = "tout";
        subpath = nodeIndex.subpath;
        index = nodeIndex.index;
        if (!toutx[$selectedControl0] && subpath >= 0 && index >= 0) {
            toutx[$selectedControl0] =
                $elements[$selectedId].uiEdges[subpath][index].tout.x;
            touty[$selectedControl0] =
                $elements[$selectedId].uiEdges[subpath][index].tout.y;
        }
    }
    $: if (
        $selectedId &&
        $selectedControl1 &&
        $elements[$selectedId].tag === "path"
        ) {
        let nodeIndex = $elements[$selectedId].edgeIndex($selectedControl1);
        nodeType = "tin";
        subpath = nodeIndex.subpath;
        index = nodeIndex.index;
        if (!tinx[$selectedControl1] && subpath >= 0 && index >= 0) {
            tinx[$selectedControl1] =
                $elements[$selectedId].uiEdges[subpath][index].tin.x;
            tiny[$selectedControl1] =
                $elements[$selectedId].uiEdges[subpath][index].tin.y;
        }
    }
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
    const setStrokewidth = (strokewidth) => {
        $elements[$selectedId].strokewidth = strokewidth;
        if($elements[$selectedId].strokedasharray !== 'none') {
            if($elements[$selectedId].strokelinecap === 'round') {
                setDotted();
            } else {
                setDashed();
            }
        }
    }
    const setSolid = () => {
        $elements[$selectedId].strokedasharray = 'none';
        $elements[$selectedId].strokelinecap = 'butt';
    }
    const setDashed = () => {
        $elements[$selectedId].strokedasharray = `${Number($elements[$selectedId].strokewidth) * 3} ${Number($elements[$selectedId].strokewidth) * 2}`;
        $elements[$selectedId].strokelinecap = 'butt';
    }
    const setDotted = () => {
        $elements[$selectedId].strokedasharray = `0 ${Number($elements[$selectedId].strokewidth)*2}`; 
        $elements[$selectedId].strokelinecap = 'round';
        $elements = $elements;
    }
    const createArrow = () => {
        let mrk = new Marker({id: 'Arrow-' +$DRAWING.drawingID + '-' + $objectCount});
        $defs[mrk.id] = mrk;
        $objectCount++;
        $defs = $defs;
    }
    const createBar = () => {
        let mrk = new Marker({id: 'Bar-' + $DRAWING.drawingID + '-' + $objectCount});
        mrk.path.d = "M 0 0 L 0 10";
        mrk.path.strokewidth = 2;
        $defs[mrk.id] = mrk;
        $objectCount++;
        $defs = $defs;
    }
    const removeMarker = (lgrad) => {
        delete $defs[lgrad]
        // console.log($elements[$selectedId])
        if($elements[$selectedId]['marker']) {
            let markers = $elements[$selectedId]['marker'].split(' ');
            markers = markers.filter((ft => ft !== `url(#${lgrad})`));
            $elements[$selectedId]['marker'] = markers.join(' ');
        }
        
        $defs = $defs;
        $elements = $elements;
    }
    const setMarker = (mrk, position) => {
        switch(position) {
            case 'start': {
                $elements[$selectedId]['markerStart'] = $elements[$selectedId]['markerStart'].includes(mrk) ? 'none' : `url(#${mrk})`;
                break;
            }
            case 'mid': {
                $elements[$selectedId]['markerMid'] = $elements[$selectedId]['markerMid'].includes(mrk) ? 'none' : `url(#${mrk})`;
                break;
            }
            case 'end': {
                $elements[$selectedId]['markerEnd'] = $elements[$selectedId]['markerEnd'].includes(mrk) ? 'none' : `url(#${mrk})`;
                break;
            }
        }
        $elements = $elements;
    }
    const changenSubdivision = () => {
        $elements = $elements;
    }
    const changedX = () => { $elements = $elements }
    const changedY = () => { $elements = $elements }
    const gridPathLabel = (p) => {
        let lbl = '';
        switch(p) {
            case 'hPath': {
                lbl = 'h-sub';
                break;
            }
            case 'vPath': {
                lbl = 'v-sub';
                break;
            }
            case 'HPath': {
                lbl = 'h-main'
                break;
            }
            case 'VPath': {
                lbl = 'v-main'
                break;
            }
        }
        return lbl;
    }
    const setGridStroke = (evt) => {
        $elements[$selectedId][selectedGridPart]['stroke'] = evt.detail.color;
        $elements = $elements;
    }
    const setGridSolid = () => {
        $elements[$selectedId][selectedGridPart].strokedasharray = 'none';
        $elements[$selectedId][selectedGridPart].strokelinecap = 'butt';
    }
    const setGridDashed = () => {
        $elements[$selectedId][selectedGridPart].strokedasharray = `${Number($elements[$selectedId][selectedGridPart].strokewidth) * 3} ${Number($elements[$selectedId][selectedGridPart].strokewidth) * 2}`;
        $elements[$selectedId][selectedGridPart].strokelinecap = 'butt';
    }
    const setGridDotted = () => {
        $elements[$selectedId][selectedGridPart].strokedasharray = `0 ${Number($elements[$selectedId][selectedGridPart].strokewidth)*2}`; 
        $elements[$selectedId][selectedGridPart].strokelinecap = 'round';
        $elements = $elements;
    }
    const setGridStrokewidth = (strokewidth) => {
        $elements[$selectedId][selectedGridPart].strokewidth = strokewidth;
        if($elements[$selectedId][selectedGridPart].strokedasharray !== 'none') {
            if($elements[$selectedId][selectedGridPart].strokelinecap === 'round') {
                setGridDotted();
            } else {
                setGridDashed();
            }
        }
    }

    
    let isTextOnPath = false, showPath = true;
    $: if($selectedId && $elements[$selectedId]) {
        $elements[$selectedId].preserveAspect = preserveAspect;
        $elements[$selectedId].showAxis = showAxis;
        if($elements[$selectedId].tag === 'text')
            $elements[$selectedId].isTextOnPath = isTextOnPath;
            $elements[$selectedId].showPath = showPath;
        $elements = $elements;
    }
    const setShowSubdivisions = () => {
        $elements[$selectedId].showSubdivisions = showSubdivisions; 
    }
    const text2plot = (p, mathtext) => {
        const plotNode = math.parse(mathtext)   // returns the root Node of an expression tree
        const code = plotNode.compile()   
        $elements[$selectedId].ymin = 0;  
        $elements[$selectedId].ymax = 100;   // returns {evaluate: function (scope) {...}}
        let points = [];
        for(let i = $elements[$selectedId].xmin; i <= $elements[$selectedId].xmax; i = i + $elements[$selectedId].step/$elements[$selectedId].xscale) {
            points.push({
                x: i * $elements[$selectedId].xscale,
                y: -code.evaluate({x: i}) * $elements[$selectedId].yscale
            })
        }

        let d = "M" + points[0].x + ',' + points[0].y;
        for(let i = 1; i < points.length; i++) {
            if(-points[i].y <  $elements[$selectedId].ymin) {
                $elements[$selectedId].ymin = -points[i].y;
            }
            if(-points[i].y >  $elements[$selectedId].ymax) {
                $elements[$selectedId].ymax = -points[i].y;
            }
            d += " L " + points[i].x + ',' + points[i].y;
        }
        $elements[p].d = d;
        $elements[$selectedId] = $elements[$selectedId];
        $elements = $elements;
        // return `<path d="${d}" stroke="rgba(0, 0, 0, 1)" stroke-width="2" fill='none' vector-effect="non-scaling-size" />`
    }
    const plotFunction = (i, ftext) => {
        text2plot($elements[$selectedId].children[i], ftext);
        $elements[$selectedId] = $elements[$selectedId];
        $elements = $elements;
    }
    const plotFunctions = () => {
        for(let i = 0; i < $elements[$selectedId].children.length; i++) {
            plotFunction(i, $elements[$selectedId].functions[i]);
        }
    }
    // $: console.log($elements[$selectedId].showAxis)
</script>

{#if $elements && $selectedId && $elements[$selectedId]}
    <article>
        <!---------Position--------->
        <Card>
            <Content>
                <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">{$elements[$selectedId].name}</h4>
                {#if $elements[$selectedId].tag === "rect" || $elements[$selectedId].tag === "image" || $elements[$selectedId].tag === 'grid'}
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            x
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].x}
                            min={-2000}
                            max={2000}
                            step={0.001}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            y
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].y}
                            min={-2000}
                            max={2000}
                            step={0.001}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            Width
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].width}
                            min={0}
                            max={2000}
                            step={0.001}
                            input$aria-label="Alpha"
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            Height
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].height}
                            min={0}
                            max={2000}
                            step={0.001}
                            input$aria-label="Alpha"
                        />
                    </FormField>
                    {#if $elements[$selectedId].tag === "rect" || $elements[$selectedId].tag === "image"}
                        <FormField align="end" style="display: flex;">
                            <span
                                slot="label"
                                style="padding-right: 10px; width:50px; display: block; line-height:1;"
                            >
                                rx
                            </span>
                            <Slider
                                withInput
                                bind:value={$elements[$selectedId].rx}
                                min={0}
                                max={2000}
                                step={0.001}
                                input$aria-label="Alpha"
                            />
                        </FormField>
                        <FormField align="end" style="display: flex;">
                            <span
                                slot="label"
                                style="padding-right: 10px; width:50px; display: block; line-height:1;"
                            >
                                ry
                            </span>
                            <Slider
                                withInput
                                bind:value={$elements[$selectedId].ry}
                                min={0}
                                max={2000}
                                step={0.001}
                                input$aria-label="Alpha"
                            />
                        </FormField>
                    {/if}
                {/if}
                {#if $elements[$selectedId].tag === "circle"}
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            cx
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].cx}
                            min={-2000}
                            max={2000}
                            step={0.001}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            cy
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].cy}
                            min={-2000}
                            max={2000}
                            step={0.001}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            Radius
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].r}
                            min={0}
                            max={2000}
                            step={0.001}
                            input$aria-label="Alpha"
                            on:input={changeRadius}
                        />
                    </FormField>
                {/if}
                {#if $elements[$selectedId].tag === "ellipse"}
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            cx
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].cx}
                            min={-2000}
                            max={2000}
                            step={0.001}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            cy
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].cy}
                            min={-2000}
                            max={2000}
                            step={0.001}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            Radius X
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].rx}
                            min={0}
                            max={2000}
                            step={0.001}
                            input$aria-label="Alpha"
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            Radius Y
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].ry}
                            min={0}
                            max={2000}
                            step={0.001}
                            input$aria-label="Alpha"
                        />
                    </FormField>
                {/if}
                {#if $elements[$selectedId].tag === "regular"}
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            n
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].n}
                            min={3}
                            max={50}
                            step={1}
                            on:change={changen}
                            on:input={changen}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            Side length
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].r}
                            min={0}
                            max={2000}
                            step={0.001}
                            on:input={changen}
                        />
                    </FormField>
                {/if}
                {#if $elements[$selectedId].tag === "text"}
                    <div style="display:flex;flex-direction:column;gap:0.5em;">
                        <Textfield
                            variant="filled"
                            type="number"
                            style="width: 100%"
                            label="Base x"
                            bind:value={$elements[$selectedId].x}
                            input$emptyValueUndefined
                        />
                        <Textfield
                            variant="filled"
                            type="number"
                            style="width: 100%"
                            label="Base y"
                            bind:value={$elements[$selectedId].y}
                            input$emptyValueUndefined
                        />
                        <Textfield
                            variant="filled"
                            type="number"
                            style="width: 100%"
                            label="Font size"
                            bind:value={$elements[$selectedId].fontSize}
                            input$emptyValueUndefined
                        />
                        <Textfield
                            variant="filled"
                            type="number"
                            style="width: 100%"
                            label="Font Weight"
                            bind:value={$elements[$selectedId].fontWeight}
                            input$emptyValueUndefined
                        />
                        <Textfield
                            variant="filled"
                            style="width: 100%"
                            label="Font Family"
                            bind:value={$elements[$selectedId].fontFamily}
                            input$emptyValueUndefined
                        /> 
                    </div>
                {/if}
            </Content>
        </Card>
        {#if $elements[$selectedId] && $elements[$selectedId].tag === 'grid'}
            <Card>
                <Content>
                    <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Grid properties</h4>
                    <FormField style="width:100%">
                        <Checkbox bind:checked={showSubdivisions} on:change={setShowSubdivisions} />
                        <span slot="label">Show subdivisions</span>
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            Sub division
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].nSubdivisions}
                            min={1}
                            max={50}
                            step={1}
                            on:change={changenSubdivision}
                            on:input={changenSubdivision}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            dX
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].dX}
                            on:change={changedX}
                            on:input={changedX}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            dY
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].dY}
                            on:change={changedY}
                            on:input={changedY}
                        />
                    </FormField>
                    <br>
                    <SegmentedButton singleSelect segments={gridparts} let:segment bind:selected={selectedGridPart}>
                        <Segment {segment}>
                            <Label>{gridPathLabel(segment)}</Label>
                        </Segment>
                    </SegmentedButton>
                    <SolidColors fillStroke={'stroke'} on:colorChosen={setGridStroke} />
                    <ColorsInUse fillStroke={'stroke'} on:colorChosen={setGridStroke}/>
                    <h3 class="mdc-typography--headline6" style="margin:0;">Opacity</h3>
                    <div class="opacities">
                        {#each opacities as opacity}
                            <span class="opacity {$elements[$selectedId][selectedGridPart].opacity === opacity ? 'active':''}" style="opacity: {opacity};" on:click={() => $elements[$selectedId][selectedGridPart].opacity = opacity}></span>
                        {/each}
                    </div>
                    <h3 class="mdc-typography--headline6" style="margin:0;">Stroke width</h3>
                    <div class="strokewidths">
                        {#each strokewidths as strokewidth}
                            <span class="strokewidth {$elements[$selectedId][selectedGridPart].strokewidth === strokewidth ? 'active':''}" on:click={() => setGridStrokewidth(strokewidth)}>
                            <svg width="100%" height="100%" viewBox="0 0 24 24"><line x1="0" x2="24" y1="12" y2="12" stroke="black" stroke-width={strokewidth} /></svg>
                            </span>
                        {/each}
                    </div>
                    <h3 class="mdc-typography--headline6" style="margin:0;">Solid</h3>
                    <span class="strokedash" on:click={setGridSolid}>
                        <svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black" stroke-width={$elements[$selectedId][selectedGridPart].strokewidth}/></svg>
                    </span>
                    <h3 class="mdc-typography--headline6" style="margin:0;">Dashed</h3>
                    <span class="strokedash" on:click={setGridDashed}>
                        <svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black" stroke-width={$elements[$selectedId][selectedGridPart].strokewidth} stroke-dasharray="{$elements[$selectedId][selectedGridPart].strokewidth} {Number($elements[$selectedId][selectedGridPart].strokewidth) * 2}"/></svg>
                    </span>
                    <h3 class="mdc-typography--headline6" style="margin:0;">Dotted</h3>
                    <span class="strokedash" on:click={setGridDotted}>
                        <svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black" stroke-width={$elements[$selectedId][selectedGridPart].strokewidth} stroke-dasharray="{0} {Number($elements[$selectedId][selectedGridPart].strokewidth)*5}" stroke-linecap='round'/></svg>
                    </span>
                </Content>
            </Card>
        {/if}
        {#if $elements[$selectedId].hasOwnProperty(["content"])}
            <Card>
                <Content>
                
                    {#if $elements[$selectedId].tag === "text"}
                        <Textfield
                            variant="filled"
                            label="Text"
                            bind:value={$elements[$selectedId].content}
                            on:input={updateSbox}
                            style="width: 100%"
                            input$emptyValueUndefined
                        />
                    {/if}
                    {#if $elements[$selectedId].tag === "latex"}
                        <Textfield
                            variant="filled"
                            label="Latex"
                            bind:value={$elements[$selectedId].content}
                            on:input={updateSbox}
                            style="width: 100%"
                            input$emptyValueUndefined
                        />
                    {/if}
                </Content>
            </Card>
        {/if}
        {#if $elements[$selectedId].tag === "plot"}
            <Card>
                <Content>
                    {#each $elements[$selectedId].functions as ftext, i}
                        <Textfield
                            variant="filled"
                            label="Function"
                            bind:value={ftext}
                            on:input={updateSbox}
                            style="width: 100%"
                            input$emptyValueUndefined
                        />
                        <Button on:click={() => plotFunction(i, ftext)}>Done</Button>
                    <br>
                    {/each}
                    <Textfield
                        variant="filled"
                        label="Lower limit"
                        type="number"
                        bind:value={$elements[$selectedId].xmin}
                        on:input={plotFunctions}
                        style="width: 100%"
                        input$emptyValueUndefined
                    />
                    <br>
                    <Textfield
                        variant="filled"
                        label="Upper limit"
                        type="number"
                        bind:value={$elements[$selectedId].xmax}
                        on:input={plotFunctions}
                        style="width: 100%"
                        input$emptyValueUndefined
                    />
                    <br>
                    <Textfield
                        variant="filled"
                        label="x scale"
                        type="number"
                        bind:value={$elements[$selectedId].xscale}
                        on:input={plotFunctions}
                        style="width: 100%"
                        input$emptyValueUndefined
                    />
                    <br>
                    <Textfield
                        variant="filled"
                        label="y scale"
                        type="number"
                        bind:value={$elements[$selectedId].yscale}
                        on:input={plotFunctions}
                        style="width: 100%"
                        input$emptyValueUndefined
                    />
                    <br>
                    <Textfield
                        variant="filled"
                        label="Step"
                        type="number"
                        bind:value={$elements[$selectedId].step}
                        on:input={plotFunctions}
                        style="width: 100%"
                        input$emptyValueUndefined
                    />
                    <br>
                    <FormField style="width:100%">
                        <Checkbox bind:checked={showAxis} />
                        <span slot="label">Show Axes</span>
                    </FormField>
                </Content>
            </Card>
        {/if}
        {#if $elements[$selectedId].tag === "text"}
            <Card>
                <Content>
                    <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Text on path</h4>
                    <FormField style="width:100%">
                        <Checkbox bind:checked={isTextOnPath} />
                        <span slot="label">Text on path</span>
                    </FormField>
                    {#if $elements[$selectedId].isTextOnPath}
                    <Wrapper>
                        <Button on:click={() => setPath($selectedId)}
                            >Choose path</Button
                        >
                        <Tooltip xPos="center" yPos="below">
                            <Content>
                                Click on this button and then click on a path to use the path for the text.
                            </Content>
                        </Tooltip>
                    </Wrapper>
                        <div class="action" style="padding:0">
                            <span class="text">Start offset</span>
                            <span class="icon">
                                <label>
                                    <input
                                        type="number"
                                        bind:value={$elements[$selectedId].startOffset}
                                        step={1}
                                    />
                                </label>
                            </span>
                        </div>
                        <FormField style="width:100%">
                            <Checkbox bind:checked={showPath} on:change={textPathVisibility} />
                            <span slot="label">Show path</span>
                        </FormField>
                    {/if}
                </Content>
            </Card>
        {/if}
        <!-- sbox -->
        
        <Card>
            <Content>
                <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Bounding Box</h4>
                <div class="box">
                    <div class="attributeGroup">
                        <div class="action" style="padding:0">
                            <span class="text">W</span>
                            <span class="icon">
                                <label>
                                    <input
                                        type="number"
                                        bind:value={width}
                                        step={1}
                                        on:input={changeWidth}
                                    />
                                </label>
                            </span>
                        </div>
                        <br />
                        <div class="action" style="padding:0">
                            <span class="text">H</span>
                            <span class="icon">
                                <label>
                                    <input
                                        type="number"
                                        bind:value={height}
                                        step={1}
                                        on:input={changeHeight}
                                    />
                                </label>
                            </span>
                        </div>
                    </div>
                    <div class="attributeGroup">
                        <div class="action" style="padding:0">
                            <span class="text">X</span>
                            <span class="icon">
                                <label>
                                    <!-- {#key $elements[$selectedId].sbox.tl.x} -->
                                    <input
                                        type="number"
                                        bind:value={x}
                                        step={1}
                                        on:input={changex}
                                    />
                                    <!-- {/key} -->
                                </label>
                            </span>
                        </div>
                        <br />
                        <div class="action" style="padding:0">
                            <span class="text">Y</span>
                            <span class="icon">
                                <label>
                                    <input
                                        type="number"
                                        bind:value={y}
                                        step={1}
                                        on:input={changey}
                                    />
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
                <FormField style="width:100%">
                    <Checkbox bind:checked={preserveAspect} />
                    <span slot="label">Preserve Aspect</span>
                </FormField>
            </Content>
        </Card>
        <!---------Point------>
        {#if $selectedVertex || $selectedControl0 || $selectedControl1}
            <Card>
                <Content>
                <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Point</h4>
                {#if $selectedVertex && $elements[$selectedId].tag === "path"}
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            x
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].uiEdges[subpath][index].v.x}
                            min={-2000}
                            max={2000}
                            step={0.001}
                            on:input={changeNodex}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            y
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].uiEdges[subpath][
                                index
                            ].v.y}
                            min={-2000}
                            max={2000}
                            step={0.001}
                            on:input={changeNodey}
                        />
                    </FormField>
                {/if}
                {#if $selectedControl0 && $elements[$selectedId].tag === "path"}
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            x
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].uiEdges[subpath][
                                index
                            ].tout.x}
                            min={-2000}
                            max={2000}
                            step={0.001}
                            on:input={changeNodex}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            y
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].uiEdges[subpath][
                                index
                            ].tout.y}
                            min={-2000}
                            max={2000}
                            step={0.001}
                            on:input={changeNodey}
                        />
                    </FormField>
                {/if}
                {#if $selectedControl1 && $elements[$selectedId].tag === "path"}
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            x
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].uiEdges[subpath][
                                index
                            ].tin.x}
                            min={-2000}
                            max={2000}
                            step={0.001}
                            on:input={changeNodex}
                        />
                    </FormField>
                    <FormField align="end" style="display: flex;">
                        <span
                            slot="label"
                            style="padding-right: 10px; width:50px; display: block; line-height:1;"
                        >
                            y
                        </span>
                        <Slider
                            withInput
                            bind:value={$elements[$selectedId].uiEdges[subpath][
                                index
                            ].tin.y}
                            min={-2000}
                            max={2000}
                            step={0.001}
                            on:input={changeNodey}
                        />
                    </FormField>
                {/if}
                </Content>
            </Card>
        {/if}
        <!-----------Transforms------>
        <Card>
            <Content>
                <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Transforms</h4>
                <!-- <FormField align="end" style="display: flex;">
                <span
                    slot="label"
                    style="padding-right: 10px; width:50px; display: block; line-height:1;"
                >
                    Angle
                </span>
                <Slider withInput bind:value={angle} min={-360} max={360} step={0.001} on:input={changeAngle}/>
            </FormField> -->
                <Textfield
                    variant="filled"
                    type="number"
                    style="width: 100%"
                    label="Rotate"
                    suffix="deg"
                    min={-360}
                    max={360}
                    step={1}
                    bind:value={angle}
                    on:input={changeAngle}
                    input$emptyValueUndefined
                />
            </Content>
            <Actions>
                <Button on:click={() => reflect("V")}>
                    <span class="material-symbols-outlined">swap_horiz</span>
                </Button>
                <Button on:click={() => reflect("H")}>
                    <span class="material-symbols-outlined">swap_vert</span>
                </Button>
            </Actions>
        </Card>
        {#if $selectedElements && $selectedElements.length > 0}
            <Card>
                <Content>
                    <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Alignment</h4>
                    <div
                        class="attributeGroup"
                        style="display:flex; justify-content: space-between;"
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
                </Content>
            </Card>
        {/if}
        <!-------Colors------->
        {#if $elements[$selectedId].tag !== 'grid'}
        <Card>
            <Content>
                <h1 class="mdc-typography--headline5" style="margin:0 0 0.5em 0;">Color</h1>
                <SegmentedButton singleSelect segments={fillparts} let:segment bind:selected>
                    <Segment {segment}>
                        <Label>{segment}</Label>
                    </Segment>
                </SegmentedButton>
                <SegmentedButton singleSelect segments={filltypes} let:segment bind:selected={$elements[$selectedId]["filltype"]}>
                    <Segment {segment}>
                        <Label>{segment}</Label>
                    </Segment>
                </SegmentedButton>
                <SolidColors fillStroke={selected} on:colorChosen={setColor} />
                {#if selected==='fill'}
                    <LinearGradients on:colorChosen={() => {$elements[$selectedId]["filltype"] = 'linear'}, selected='fill'} />
                    <RadialGradients on:colorChosen={() => {$elements[$selectedId]["filltype"] = 'radial'}, selected='fill'} />
                {/if}
                {#if selected === 'fill'}
                    <ColorsInUse fillStroke={selected} on:colorChosen={setFill}/>
                {:else if $elements[$selectedId]["filltype"] === 'solid' && selected === 'stroke'}
                    <ColorsInUse fillStroke={selected} on:colorChosen={setStroke}/>
                {/if}
            </Content>
        </Card>
        <!------------Stroke------>
        <Card>
            <Content>
                <h3 class="mdc-typography--headline6" style="margin:0;">Opacity</h3>
                <div class="opacities">
                    {#each opacities as opacity}
                        <span class="opacity {$elements[$selectedId].opacity === opacity ? 'active':''}" style="opacity: {opacity};" on:click={() => $elements[$selectedId].opacity = opacity}></span>
                    {/each}
                </div>
                <h3 class="mdc-typography--headline6" style="margin:0;">Stroke width</h3>
                <div class="strokewidths">
                    {#each strokewidths as strokewidth}
                        <span class="strokewidth {$elements[$selectedId].strokewidth === strokewidth ? 'active':''}" on:click={() => setStrokewidth(strokewidth)}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24"><line x1="0" x2="24" y1="12" y2="12" stroke="black" stroke-width={strokewidth} /></svg>
                        </span>
                    {/each}
                </div>
                <h3 class="mdc-typography--headline6" style="margin:0;">Solid</h3>
                <span class="strokedash" on:click={setSolid}>
                    <svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black" stroke-width={$elements[$selectedId].strokewidth}/></svg>
                </span>
                <h3 class="mdc-typography--headline6" style="margin:0;">Dashed</h3>
                <span class="strokedash" on:click={setDashed}>
                    <svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black" stroke-width={$elements[$selectedId].strokewidth} stroke-dasharray="{$elements[$selectedId].strokewidth} {Number($elements[$selectedId].strokewidth) * 2}"/></svg>
                </span>
                <h3 class="mdc-typography--headline6" style="margin:0;">Dotted</h3>
                <span class="strokedash" on:click={setDotted}>
                    <svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black" stroke-width={$elements[$selectedId].strokewidth} stroke-dasharray="{0} {Number($elements[$selectedId].strokewidth)*5}" stroke-linecap='round'/></svg>
                </span>
            </Content>
        </Card>
        {/if}
        <!---------Markers-------->
        {#if $selectedId && $elements[$selectedId] && ($elements[$selectedId].tag === 'path' || $elements[$selectedId].tag === 'plot')}
            <Card>
                <Content>
                    <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Markers</h4>
                    <DataTable table$aria-label="Markers" style="width: 100%;">
                        <Body>
                            {#each Object.keys($defs) as mrk}
                            {#if $defs[mrk].tag === 'marker'}
                            <Row>
                                <Cell style="padding: 0 0 0 16px;"><span class="rect" style="background: {$elements[$selectedId]['markerStart']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};">
                                    <svg viewBox="-7 0 35 20" width="100%" height="100%" on:click={() => setMarker(mrk, 'start')}>
                                        
                                        <!-- svelte-ignore component-name-lowercase -->
                                        <defs>
                                            <marker 
                                                id={mrk}
                                                refX='{$defs[mrk].refX}'
                                                refY='{$defs[mrk].refY}'
                                                markerWidth='{$defs[mrk].markerWidth}'
                                                markerHeight='{$defs[mrk].markerHeight}'
                                                markerUnits={$defs[mrk].markerUnits}
                                                orient={$defs[mrk].orient}
                                                viewBox={$defs[mrk].viewBox}
                                                preserveAspectRatio={$defs[mrk].preserveAspectRatio}
                                            >
                                                <path 
                                                    d="{$defs[mrk].path.d}"
                                                    fill={$defs[mrk].path.fill}
                                                    stroke={$defs[mrk].path.stroke}
                                                    stroke-width={$defs[mrk].path.strokewidth}
                                                    stroke-dasharray={$defs[mrk].path.strokedasharray}
                                                    opacity={$defs[mrk].path.opacity}
                                                    filter={$defs[mrk].path.filter}
                                                />
                                            </marker>
        
                                        </defs>
                                        <path d="M 5,10 H 25" marker-start={`url(#${mrk})`} stroke={$defs[mrk].path.stroke} stroke-width="2" />
                                    </svg>
                                </span></Cell>
                                <Cell style="padding: 0 0 0 16px;">
                                    <span class="rect" style="background: {$elements[$selectedId]['markerMid']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};">
                                        <svg viewBox="0 0 30 20" width="100%" height="100%" on:click={() => setMarker(mrk, 'mid')}>
                                            <defs>
                                                <marker 
                                                    id={mrk}
                                                    refX='{$defs[mrk].refX}'
                                                    refY='{$defs[mrk].refY}'
                                                    markerWidth='{$defs[mrk].markerWidth}'
                                                    markerHeight='{$defs[mrk].markerHeight}'
                                                    markerUnits={$defs[mrk].markerUnits}
                                                    orient={$defs[mrk].orient}
                                                    viewBox={$defs[mrk].viewBox}
                                                    preserveAspectRatio={$defs[mrk].preserveAspectRatio}
                                                >
                                                    <path 
                                                        d="{$defs[mrk].path.d}"
                                                        fill={$defs[mrk].path.fill}
                                                        stroke={$defs[mrk].path.stroke}
                                                        stroke-width={$defs[mrk].path.strokewidth}
                                                        stroke-dasharray={$defs[mrk].path.strokedasharray}
                                                        opacity={$defs[mrk].path.opacity}
                                                        filter={$defs[mrk].path.filter}
                                                    />
                                                </marker>
        
                                            </defs>
                                            <path d="M 3,10 H 15 H 25" marker-mid={`url(#${mrk})`} stroke={$defs[mrk].path.stroke} stroke-width="1" />
                                        </svg>
                                    </span>
                                </Cell>
                                <Cell style="padding: 0 0 0 16px;">
                                    <span class="rect" style="background: {$elements[$selectedId]['markerEnd']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};">
                                        <svg viewBox="0 0 37 20" width="100%" height="100%" on:click={() => setMarker(mrk, 'end')}>
                                            <defs>
                                                <marker 
                                                    id={mrk}
                                                    refX='{$defs[mrk].refX}'
                                                    refY='{$defs[mrk].refY}'
                                                    markerWidth='{$defs[mrk].markerWidth}'
                                                    markerHeight='{$defs[mrk].markerHeight}'
                                                    markerUnits={$defs[mrk].markerUnits}
                                                    orient={$defs[mrk].orient}
                                                    viewBox={$defs[mrk].viewBox}
                                                    preserveAspectRatio={$defs[mrk].preserveAspectRatio}
                                                >
                                                    <path 
                                                        d="{$defs[mrk].path.d}"
                                                        fill={$defs[mrk].path.fill}
                                                        stroke={$defs[mrk].path.stroke}
                                                        stroke-width={$defs[mrk].path.strokewidth}
                                                        stroke-dasharray={$defs[mrk].path.strokedasharray}
                                                        opacity={$defs[mrk].path.opacity}
                                                    />
                                                </marker>
        
                                            </defs>
                                            <path d="M 3,10 H 25" marker-end={`url(#${mrk})`} stroke={$defs[mrk].path.stroke} stroke-width="2" />
                                        </svg>
                                    </span>
                                </Cell>
                                <Cell style="padding: 0;">
                                    <!-- <IconButton class="material-icons" on:click={() => editMarker(mrk)}>edit</IconButton> -->
                                    <IconButton class="material-icons" on:click={() => removeMarker(mrk)}>delete</IconButton>
                                </Cell>
                            </Row>
                            {/if}
                            {/each}
                        </Body>
                    </DataTable>
                </Content>
                <Actions>
                    <Button on:click={createArrow}>Arrow +</Button>
                    <Button on:click={createBar}>Bar +</Button>
                    <!-- <Button on:click={createMarker}>Marker +</Button> -->
                </Actions>
            </Card>
        {/if}
    </article>
{/if}


<style>
    article {
        width: 300px;
        display: flex;
        flex-direction:column;
        gap:0.5em;
    }
    .attributeGroup {
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
    }
    .opacities, .strokewidths {
        display:flex;
        align-items: center;
        margin: 0 0 0.5em 0;
        border: 1px solid rgb(6, 183, 242);
    }
    .opacity, .strokewidth {
        display:inline-block;
        width: 30px;
        height: 30px;
        background: white;
        cursor: pointer;
    }
    .strokewidth {
        width: 24.4px;
        height: 24.4px;
    }
    .active {
        border: 1px solid red;
    }
    .strokedash {
        display: flex;
        width: 100%;
        height: 30px;
        background: white;
    }
    .rect {
        display: flex;
        width: 30px;
        height: 2em;
        border: 0.5px solid;
    }
</style>
