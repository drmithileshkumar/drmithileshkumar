<script id="MathJax-script" lang='ts'>
    //@ts-nocheck
    // import math from 'mathjs';
    import SVGElement from "./SVGElement.svelte";
    import { create, all } from 'mathjs'

    const config = { }
    const math = create(all, config)
    import {elementsNode, isLasso, lassoDom, Z, selectedElement, activeElement, elements, svg, selectedId, showControls, showBBoxControls} from './stores';
    import SVGPath from './SVGPath.svelte';
    import { onMount } from 'svelte';
    
    export let id = '';
    onMount(() => {
        // for(let i = 0; i < $elements[id].children.length; i++) {
        //     text2plot($elements[id].children[i], $elements[id].functions[i]);
        //     $elements = $elements;
        // }
        
    })
    const text2plot = (p, mathtext) => {
        const plotNode = math.parse(mathtext)   // returns the root Node of an expression tree
        const code = plotNode.compile()        // returns {evaluate: function (scope) {...}}
        let points = [];
        for(let i = $elements[id].xmin; i < $elements[id].xmax; i = i + $elements[id].step) {
            points.push({
                x: i,
                y: -code.evaluate({x: i})
            })
        }

        let d = "M" + points[0].x + ',' + points[0].y;
        for(let i = 1; i < points.length; i++) {
            d += " L " + points[i].x + ',' + points[i].y;
        }
        p.d = d;
        // return `<path d="${d}" stroke="rgba(0, 0, 0, 1)" stroke-width="2" fill='none' vector-effect="non-scaling-size" />`
    }
    
</script>
<style>

</style>

<g 
    id={id}
    bind:this={$elementsNode[id]}
    class='draggable'
    fill={$elements[id].fill}
    stroke={$elements[id].stroke}
    stroke-width={$elements[id].strokewidth}
    stroke-dasharray={$elements[id].strokedasharray}
    vector-effect={$elements[id].vectorEffect}
    opacity={$elements[id].opacity}
    filter={$elements[id].filter}
    mask={$elements[id].mask}
    transform='matrix({$elements[id].tm.a} {$elements[id].tm.b} {$elements[id].tm.c} {$elements[id].tm.d} {$elements[id].tm.e} {$elements[id].tm.f})'
>
    {#if $elements[id].showAxis}
        <line 
            x1={-(Math.abs($elements[id].xmin)) * $elements[id].xscale} y1="0" 
            x2={($elements[id].xmax + ($elements[id].xmax - $elements[id].xmin)/10) * $elements[id].xscale} y2="0" 
            stroke={$elements[id].stroke}
            stroke-width={$elements[id].strokewidth}
            stroke-dasharray={$elements[id].strokedasharray}
            vector-effect={$elements[id].vectorEffect}
            opacity={$elements[id].opacity}
            marker-start={$elements[id].markerStart}
            marker-mid={$elements[id].markerMid}
            marker-end={$elements[id].markerEnd}
        />
        <line 
            y1={(-$elements[id].ymin * 1.001)} x1="0" 
            y2={(-$elements[id].ymax * 1.001)} x2="0" 
            stroke={$elements[id].stroke}
            stroke-width={$elements[id].strokewidth}
            stroke-dasharray={$elements[id].strokedasharray}
            vector-effect={$elements[id].vectorEffect}
            opacity={$elements[id].opacity}
            marker-start={$elements[id].markerStart}
            marker-mid={$elements[id].markerMid}
            marker-end={$elements[id].markerEnd}
        />
    {/if}
    {#each $elements[id]?.children as child}
        
            {#if $elements[child].children}
                <svelte:self id={child} />
            {:else}
                <SVGElement id={child} />
            {/if}
        
    {/each}
</g>