<script lang='ts'>
    //@ts-nocheck
    import {elementsNode, selectedElement, elements, svg, selectedId, selectedGroupId, activeElement, Z, showBBoxControls} from './stores';
    import SVGElement from "./SVGElement.svelte";
    export let id;
</script>
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
    {#each $elements[id]?.children as child}
        
            {#if $elements[child] && $elements[child].children && $elements[child].tag !== 'plot'}
                <svelte:self id={child} />
            {:else}
                <SVGElement id={child} />
            {/if}
        
    {/each}
</g>
<!-- {#if $selectedId === id}
    <rect 
        x='{$elements[id].bbox.x}'
        y='{$elements[id].bbox.y}'
        width='{$elements[id].bbox.width}'
        height='{$elements[id].bbox.height}'
        stroke='black'
        stroke-dasharray="5,5"
        stroke-width="0.5"
        fill="none"
    />
    {#if $showBBoxControls}
        <ellipse
            layer={$elements[id].layer}
            order={$elements[id].order}
            class={'axis'}
            cx={$elements[id].axisx}
            cy={$elements[id].axisy}
            rx={7*$Z}
            ry={7*$Z}
            fill={$elements[id].isRotating ? 'green' : 'gray'}
            stroke="gray"
            stroke-width={2*$Z}    
        />

        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode topleft'}
            cx={$elements[id].bbox.x}
            cy={$elements[id].bbox.y}
            rx={5*$Z}
            ry={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode topmid'}
            cx={$elements[id].bbox.x + $elements[id].bbox.width/2}
            cy={$elements[id].bbox.y}
            rx={5*$Z}
            ry={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode topright'}
            cx={$elements[id].bbox.x  + $elements[id].bbox.width}
            cy={$elements[id].bbox.y}
            rx={5*$Z}
            ry={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode leftmid'}
            cx={$elements[id].bbox.x}
            cy={$elements[id].bbox.y  + $elements[id].bbox.height/2}
            rx={5*$Z}
            ry={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode bottomleft'}
            cx={$elements[id].bbox.x}
            cy={$elements[id].bbox.y + $elements[id].bbox.height}
            rx={5*$Z}
            ry={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode bottommid'}
            cx={$elements[id].bbox.x + $elements[id].bbox.width/2}
            cy={$elements[id].bbox.y + $elements[id].bbox.height}
            rx={5*$Z}
            ry={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode bottomright'}
            cx={$elements[id].bbox.x + $elements[id].bbox.width}
            cy={$elements[id].bbox.y + $elements[id].bbox.height}
            rx={5*$Z}
            ry={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}   
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode rightmid'}
            cx={$elements[id].bbox.x + $elements[id].bbox.width}
            cy={$elements[id].bbox.y + $elements[id].bbox.height/2}
            rx={5*$Z}
            ry={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
        />
    {/if}
{/if} -->

<style>
	

</style>