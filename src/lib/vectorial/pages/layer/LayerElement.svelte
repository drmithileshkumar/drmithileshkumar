<script lang='ts'>
    //@ts-nocheck
    import {selectedElements, elements, canvasBackground} from '$lib/vectorial/pages/vectorial/stores';
    import PreviewLine from '$lib/vectorial/pages/common/PreviewLine.svelte';
    import PreviewCircle from '$lib/vectorial/pages/common/PreviewCircle.svelte';
    import PreviewEllipse from '$lib/vectorial/pages/common/PreviewEllipse.svelte';
    import PreviewRect from '$lib/vectorial/pages/common/PreviewRect.svelte';
    import PreviewRegular from '$lib/vectorial/pages/common/PreviewRegular.svelte';
    import PreviewPath from '$lib/vectorial/pages/common/PreviewPath.svelte';
    import PreviewText from '$lib/vectorial/pages/common/PreviewText.svelte';
    import PreviewLatex from '$lib/vectorial/pages/common/PreviewLatex.svelte';
    import PreviewImage from '$lib/vectorial/pages/common/PreviewImage.svelte';
    import PreviewGrid from '$lib/vectorial/pages/common/PreviewGrid.svelte';
    export let id;
</script>
<style>

</style>
{#if $elements && id && $elements[id]}
    {#if $elements[id].tag === 'line'}
        <PreviewLine line={$elements[id]} />   
    {/if}
    {#if $elements[id].tag === 'rect'}
        <PreviewRect rect={$elements[id]} />   
    {/if}
    {#if $elements[id].tag === 'circle'}
        <PreviewCircle circle={$elements[id]} />
    {/if}
    {#if $elements[id].tag === 'ellipse'}
        <PreviewEllipse ellipse={$elements[id]} />
    {/if}
    {#if $elements[id].tag === 'regular'}
        <PreviewRegular regular={$elements[id]} />    
    {/if}
    <!-- 
    
    
    
    {#if $elements[id].tag === 'polyline'}
        <PreviewPolyline polyline={$elements[id]} />
    {/if} -->
    {#if $elements[id].tag === 'path'}
        <PreviewPath path={$elements[id]} /> 
    {/if}
    {#if $elements[id].tag === 'text'}
        <PreviewText text={$elements[id]} />    
    {/if}
    {#if $elements[id].tag === 'latex'}
        <PreviewLatex latex={$elements[id]} />
    {/if}
    {#if $elements[id].tag === 'grid'}
        <PreviewGrid grd={$elements[id]} />
    {/if}
    {#if $elements[id].tag === 'image'}
        <PreviewImage image={$elements[id]} />    
    {/if} 
{/if}