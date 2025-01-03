<script lang='ts'>
    //@ts-nocheck
    import SVGLine from './SVGLine.svelte';
    import SVGCircle from './SVGCircle.svelte';
    import SVGEllipse from './SVGEllipse.svelte';
    import SVGRect from './SVGRect.svelte';
    import SVGRegular from './SVGRegular.svelte';
    import SVGPolyline from './SVGPolyline.svelte';
    import SVGPath from './SVGPath.svelte';
    import SVGText from './SVGText.svelte';
    import SVGLatex from './SVGLatex.svelte';
    import SVGPlot from './SVGPlot.svelte';
    import SVGImage from './SVGImage.svelte';
    import SVGGrid from './SVGGrid.svelte';
    import {elements, selectedId, showControls, showVertices} from './stores';

    export let id;
    
</script>
<style>

</style>
{#if $elements && id}
    {#if $elements[id].tag === 'line'}
        <SVGLine {id} />
    {/if}
    {#if $elements[id].tag === 'circle'}
        <SVGCircle {id} />
    {/if}
    {#if $elements[id].tag === 'ellipse'}
        <SVGEllipse {id} />
    {/if}
    {#if $elements[id].tag === 'rect'}
        <SVGRect {id} />   
    {/if}
    {#if $elements[id].tag === 'regular'}
        <SVGRegular {id} />    
    {/if}
    {#if $elements[id].tag === 'polyline'}
        <SVGPolyline {id} />
    {/if}
    {#if $elements[id].tag === 'path'}
        <SVGPath {id} />
           
    {/if}
    {#if $elements[id].tag === 'text'}
        <SVGText {id} />    
    {/if}
    {#if $elements[id].tag === 'latex'}
        <SVGLatex {id} />
    {/if}
    {#if $elements[id].tag === 'plot'}
        <SVGPlot {id} />
    {/if}
    {#if $elements[id].tag === 'image'}
        <SVGImage {id} />    
    {/if}
    {#if $elements[id].tag === 'grid'}
        <SVGGrid {id} />    
    {/if}
{/if}