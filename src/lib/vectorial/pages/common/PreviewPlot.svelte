<script id="MathJax-script" lang='ts'>
    //@ts-nocheck
    import PreviewElement from "./PreviewElement.svelte";
    export let plot;
    export let drawing;
    import {browser} from '$app/environment';
    import { create, all } from 'mathjs'

    const config = { }
    const math = create(all, config)
    // export let plot;
    const text2plot = (mathtext) => {
        if(browser) {
            const plotNode = math.parse(mathtext)   // returns the root Node of an expression tree
            const code = plotNode.compile()        // returns {evaluate: function (scope) {...}}
            let points = [];
            for(let i = plot.lower; i < plot.higher; i = i + plot.step) {
                points.push({
                    x: i,
                    y: -code.evaluate({x: i})
                })
            }

            let d = "M" + points[0].x + ',' + points[0].y;
            for(let i = 1; i < points.length; i++) {
                d += " L " + points[i].x + ',' + points[i].y;
            }
            return `<path d="${d}" stroke="rgba(0, 0, 0, 1)" stroke-width="2" fill='none' vector-effect="non-scaling-size" />`
        }
        return '';
    }
    // console.log(plot)
</script>
<style>

</style>

<g
    id={plot.id} 
    fill={plot.fill}
    stroke={plot.stroke}
    stroke-width={plot.strokewidth}
    stroke-dasharray={plot.strokedasharray}
    vector-effect={plot.vectorEffect}
    opacity={plot.opacity}
    filter={plot.filter}
    mask={plot.mask}
    transform='matrix({plot.tm.a} {plot.tm.b} {plot.tm.c} {plot.tm.d} {plot.tm.e} {plot.tm.f})'
>
    {#if plot.showAxis}
        <line 
            x1={-(Math.abs(plot.xmin)) * plot.xscale} y1="0" 
            x2={(plot.xmax + (plot.xmax - plot.xmin)/10) * plot.xscale} y2="0" 
            stroke={plot.stroke}
            stroke-width={plot.strokewidth}
            stroke-dasharray={plot.strokedasharray}
            vector-effect={plot.vectorEffect}
            opacity={plot.opacity}
            marker-start={plot.markerStart}
            marker-mid={plot.markerMid}
            marker-end={plot.markerEnd}
        />
        <line 
            y1={(-plot.ymin * 1.001)} x1="0" 
            y2={(-plot.ymax * 1.001)} x2="0" 
            stroke={plot.stroke}
            stroke-width={plot.strokewidth}
            stroke-dasharray={plot.strokedasharray}
            vector-effect={plot.vectorEffect}
            opacity={plot.opacity}
            marker-start={plot.markerStart}
            marker-mid={plot.markerMid}
            marker-end={plot.markerEnd}
        />
    {/if}

    {#each plot.children as child}
        
            {#if drawing.elements[child].children}
                <svelte:self id={child} drawing={drawing} />
            {:else}
                <PreviewElement id={child} drawing={drawing} />
            {/if}
        
    {/each}
    

</g>