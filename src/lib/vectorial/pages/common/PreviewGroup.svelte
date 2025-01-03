<script lang='ts'>
    //@ts-nocheck
    import PreviewElement from "./PreviewElement.svelte";
    export let id;
    export let drawing;
    
</script>
<g
    id={id} 
    fill={drawing.elements[id].fill}
    stroke={drawing.elements[id].stroke}
    stroke-width={drawing.elements[id].strokewidth}
    stroke-dasharray={drawing.elements[id].strokedasharray}
    vector-effect={drawing.elements[id].vectorEffect}
    opacity={drawing.elements[id].opacity}
    filter={drawing.elements[id].filter}
    mask={drawing.elements[id].mask}
    transform='matrix({drawing.elements[id].tm.a} {drawing.elements[id].tm.b} {drawing.elements[id].tm.c} {drawing.elements[id].tm.d} {drawing.elements[id].tm.e} {drawing.elements[id].tm.f})'
>


    {#each drawing.elements[id].children as child}
        
            {#if drawing.elements[child].children && drawing.elements[child].tag !== 'plot'}
                <svelte:self id={child} drawing={drawing} />
            {:else}
                <PreviewElement id={child} drawing={drawing} />
            {/if}
        
    {/each}
    

</g>
<style>
	

</style>