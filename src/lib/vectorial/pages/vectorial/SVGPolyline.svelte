<script lang='ts'>
    //@ts-nocheck
    import {selectedElement, elements, svg, selectedId, activeElement, showVertices, Z, showBBoxControls} from './stores';
    export let id = '';
</script>
<style>

</style>

<polyline  
    layer={$elements[id].layer}
    group={$elements[id].group}
    class={$elements[id].Class}
    id={$elements[id].treeNode.id} 
    points={$elements[id].points}
    fill={$elements[id].fill}
    filter={$elements[id].filter}
    stroke={$elements[id].stroke}
    stroke-width={$elements[id].strokewidth}
    stroke-dasharray={$elements[id].strokedasharray}
    stroke-linecap={$elements[id].strokelinecap}
    vector-effect={$elements[id].vectorEffect}
    opacity={$elements[id].opacity}
    transform="translate({$elements[id].translatex} {$elements[id].translatey}) rotate({$elements[id].angle} {$elements[id].axisx} {$elements[id].axisy}) scale({$elements[id].scalex} {$elements[id].scaley}) skewX({$elements[id].skewX}) skewY({$elements[id].skewY})"
/>
{#if $showVertices && $selectedId}
    {#each $elements[$selectedId].controlpoints as control (control.id) }
    
        <circle
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            id={control.id}
            class={'vertex'}
            cx={control.point.x}
            cy={control.point.y}
            r={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}
            
        />
    {/each}
{/if}
{#if $selectedId === id}
    <rect 
        x='{$elements[id].bbox.x}'
        y='{$elements[id].bbox.y}'
        width='{$elements[id].bbox.width}'
        height='{$elements[id].bbox.height}'
        stroke='black'
        stroke-dasharray="5,5"
        stroke-width="0.5"
        fill="none"
        transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
    />
    {#if $showBBoxControls}
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode topleft'}
            cx={$elements[id].bbox.x}
            cy={$elements[id].bbox.y}
            rx={5*$Z/$elements[$selectedId].scalex}
            ry={5*$Z/$elements[$selectedId].scaley}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
            transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode topmid'}
            cx={$elements[id].bbox.x + $elements[id].bbox.width/2}
            cy={$elements[id].bbox.y}
            rx={5*$Z/$elements[$selectedId].scalex}
            ry={5*$Z/$elements[$selectedId].scaley}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
            transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode topright'}
            cx={$elements[id].bbox.x  + $elements[id].bbox.width}
            cy={$elements[id].bbox.y}
            rx={5*$Z/$elements[$selectedId].scalex}
            ry={5*$Z/$elements[$selectedId].scaley}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
            transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode leftmid'}
            cx={$elements[id].bbox.x}
            cy={$elements[id].bbox.y  + $elements[id].bbox.height/2}
            rx={5*$Z/$elements[$selectedId].scalex}
            ry={5*$Z/$elements[$selectedId].scaley}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
            transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode bottomleft'}
            cx={$elements[id].bbox.x}
            cy={$elements[id].bbox.y + $elements[id].bbox.height}
            rx={5*$Z/$elements[$selectedId].scalex}
            ry={5*$Z/$elements[$selectedId].scaley}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
            transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode bottommid'}
            cx={$elements[id].bbox.x + $elements[id].bbox.width/2}
            cy={$elements[id].bbox.y + $elements[id].bbox.height}
            rx={5*$Z/$elements[$selectedId].scalex}
            ry={5*$Z/$elements[$selectedId].scaley}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
            transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode bottomright'}
            cx={$elements[id].bbox.x + $elements[id].bbox.width}
            cy={$elements[id].bbox.y + $elements[id].bbox.height}
            rx={5*$Z/$elements[$selectedId].scalex}
            ry={5*$Z/$elements[$selectedId].scaley}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
            transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
        />
        <ellipse
            layer={$elements[$selectedId].layer}
            order={$elements[$selectedId].order}
            class={'stretchNode rightmid'}
            cx={$elements[id].bbox.x + $elements[id].bbox.width}
            cy={$elements[id].bbox.y + $elements[id].bbox.height/2}
            rx={5*$Z/$elements[$selectedId].scalex}
            ry={5*$Z/$elements[$selectedId].scaley}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}    
            transform="translate({$elements[$selectedId].translatex} {$elements[$selectedId].translatey}) rotate({$elements[$selectedId].angle} {$elements[$selectedId].axisx} {$elements[$selectedId].axisy}) scale({$elements[$selectedId].scalex} {$elements[$selectedId].scaley}) skewX({$elements[$selectedId].skewX}) skewY({$elements[$selectedId].skewY})"
        />
    {/if}
{/if}