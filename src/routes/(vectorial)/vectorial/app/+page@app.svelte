<script id="MathJax-script">
    //@ts-nocheck
    import { page } from '$app/stores';
    import Vectorial from '$lib/vectorial/pages/vectorial/Vectorial.svelte';
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import { Point } from "$lib/vectorial/utils/common/point";
    import { Line } from "$lib/vectorial/utils/common/line";
    import { Circle } from "$lib/vectorial/utils/common/circle";
    import { Ellipse } from "$lib/vectorial/utils/common/ellipse";
    import { Rectangle } from "$lib/vectorial/utils/common/rectangle";
    import { Regular } from "$lib/vectorial/utils/common/regular";
    import { Text } from "$lib/vectorial/utils/common/text";
    import { Latex } from "$lib/vectorial/utils/common/latex";
    import { Plot } from "$lib/vectorial/utils/common/plot";
    import { Polyline } from "$lib/vectorial/utils/common/polyline";
    import { Path } from "$lib/vectorial/utils/common/path";
    import { Group } from "$lib/vectorial/utils/common/g";
    import { Image } from "$lib/vectorial/utils/common/image";
    import { Grid } from "$lib/vectorial/utils/common/grid";
    import {DRAWING, elements, defs, BBOX, appHistory, localDRAWING, drawingID, objectCount} from '$lib/vectorial/pages/vectorial/stores';
    import { currentPath } from "$lib/vectorial/stores";
    $currentPath = "App"
    let saveTimer;
    onMount(async () => {
        if(!$DRAWING) {
            //read from the local storage
            // console.log($localDRAWING);
            $DRAWING = await JSON.parse($localDRAWING);
            // console.log($DRAWING)
            showdetails($DRAWING);
        }
        //save to local storage 
        saveTimer = setInterval(saveLocal, 10000);
    })
    onDestroy(() => clearInterval(saveTimer));
    const showdetails = (drawing) => {
        //hydrate and go to edit mode
        // console.log('Hydrating...')
        $BBOX = drawing.viewBox;
        $drawingID = $DRAWING.drawinID;
        $elements = $DRAWING.elements;
        $defs = $DRAWING.defs;
        $appHistory = $DRAWING.appHistory;
        if ($elements) {
            $objectCount = Object.keys($elements).length + Object.keys($defs).length;
            // console.log($objectCount);
        }
        // console.log($objectCount);
        hydrateElements();
    };
    const hydrateElement = (id) => {
        let elem;
        switch ($elements[id].tag) {
            case "g": {
                elem = new Group($elements[id]);
                break;
            }
            case "path": {
                elem = new Path($elements[id]);
                break;
            }
            case "regular": {
                elem = new Regular($elements[id]);
                break;
            }
            case "polyline": {
                elem = new Polyline($elements[id]);
                break;
            }
            case "line": {
                elem = new Line($elements[id]);
                break;
            }
            case "rect": {
                elem = new Rectangle($elements[id]);
                break;
            }
            case "circle": {
                elem = new Circle($elements[id]);
                break;
            }
            case "ellipse": {
                elem = new Ellipse($elements[id]);
                break;
            }
            case "text": {
                elem = new Text($elements[id]);
                break;
            }
            case "image": {
                elem = new Image($elements[id]);
                break;
            }
            case "latex": {
                elem = new Latex($elements[id]);
                break;
            }
            case "plot": {
                elem = new Plot($elements[id]);
                break;
            }
            case "grid": {
                elem = new Grid($elements[id]);
                break;
            }
        }
        elem.hydrate();
        $elements[id] = elem;

        $elements = $elements;
    };
    const hydrateElements = () => {
        //create transformList
        let elementList = Object.keys($elements).filter(
            (elemId) => elemId !== "Layers"
        );
        elementList.forEach((id) => {
            if ($elements[id]) hydrateElement(id);
        });
        $elements = $elements;
        // console.log($elements);
    };
    const saveDrawing = () => {
        // let bb = boundingBox.getBBox({stroke: true, defs: true, clipped: true})
        $DRAWING.elements = $elements;
        $DRAWING.defs = $defs;
        $DRAWING.viewBox = {
            x: $BBOX.x,
            y: $BBOX.y,
            width: $BBOX.width,
            height: $BBOX.height,
        };
        $DRAWING.appHistory = $appHistory;
        $DRAWING = $DRAWING;
    };
    const saveLocal = () => {
        saveDrawing();
        localDRAWING.set(JSON.stringify($DRAWING));
        console.log('Saved...');
    }
</script>
<svelte:head>
    <title>Vectorial</title>
    <link rel="canonical" href="https://drmithileshkumar.com/vectorial/app" />
    <meta name="description" content="Graphics Drawing Application." />
    
</svelte:head>
{#if $page.data.user && $elements}
    <Vectorial />
{/if}