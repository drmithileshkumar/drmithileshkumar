<script lang='ts'>
    //@ts-nocheck
    import PreviewLine from './PreviewLine.svelte';
    import PreviewCircle from './PreviewCircle.svelte';
    import PreviewEllipse from './PreviewEllipse.svelte';
    import PreviewRect from './PreviewRect.svelte';
    import PreviewRegular from './PreviewRegular.svelte';
    import PreviewPath from './PreviewPath.svelte';
    import PreviewText from './PreviewText.svelte';
    import PreviewLatex from './PreviewLatex.svelte';
    import PreviewPlot from './PreviewPlot.svelte';
    import PreviewImage from './PreviewImage.svelte';
    import PreviewGrid from './PreviewGrid.svelte';
    export let id;
    export let drawing;
</script>
<style>

</style>
{#if drawing.elements && id && drawing.elements[id]}
    {#if drawing.elements[id].tag === 'line'}
        <PreviewLine line={drawing.elements[id]} />   
    {/if}
    {#if drawing.elements[id].tag === 'rect'}
        <PreviewRect rect={drawing.elements[id]} />   
    {/if}
    {#if drawing.elements[id].tag === 'circle'}
        <PreviewCircle circle={drawing.elements[id]} />
    {/if}
    {#if drawing.elements[id].tag === 'ellipse'}
        <PreviewEllipse ellipse={drawing.elements[id]} />
    {/if}
    {#if drawing.elements[id].tag === 'regular'}
        <PreviewRegular regular={drawing.elements[id]} />    
    {/if}
    <!-- 
    
    
    
    {#if drawing.elements[id].tag === 'polyline'}
        <PreviewPolyline polyline={drawing.elements[id]} />
    {/if} -->
    {#if drawing.elements[id].tag === 'path'}
        <PreviewPath path={drawing.elements[id]} /> 
    {/if}
    {#if drawing.elements[id].tag === 'text'}
        <PreviewText text={drawing.elements[id]} />    
    {/if}
    {#if drawing.elements[id].tag === 'latex'}
        <PreviewLatex latex={drawing.elements[id]} />
    {/if}
    {#if drawing.elements[id].tag === 'plot'}
        <PreviewPlot plot={drawing.elements[id]} {drawing}/>
    {/if}
    {#if drawing.elements[id].tag === 'grid'}
        <PreviewGrid grd={drawing.elements[id]} />
    {/if}
    {#if drawing.elements[id].tag === 'image'}
        <PreviewImage image={drawing.elements[id]} />    
    {/if} 
{/if}