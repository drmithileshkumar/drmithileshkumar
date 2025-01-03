<script lang='ts'>
    //@ts-nocheck
    import {elementsNode, isLasso, lassoDom, Z, selectedElement, activeElement, elements, svg, selectedId, showControls, showBBoxControls} from './stores';
    export let id = '';
</script>
<style>

</style>

    <path  
        id={id} 
        bind:this={$elementsNode[id]}
        class='draggable'
        d="{$elements[id].d}"
        fill={$elements[id].fill}
        fill-rule={$elements[id].fillrule}
        stroke={$elements[id].stroke}
        stroke-width={$elements[id].strokewidth}
        stroke-dasharray={$elements[id].strokedasharray}
        stroke-linecap={$elements[id].strokelinecap}
        stroke-linejoin={$elements[id].strokelinejoin}
        stroke-miterlimit={$elements[id].strokemiterlimit}
        vector-effect={$elements[id].vectorEffect}
        opacity={$elements[id].opacity}
        filter={$elements[id].filter}
        mask={$elements[id].mask}
        marker-start={$elements[id].markerStart}
        marker-mid={$elements[id].markerMid}
        marker-end={$elements[id].markerEnd}
        transform='matrix({$elements[id].tm.a} {$elements[id].tm.b} {$elements[id].tm.c} {$elements[id].tm.d} {$elements[id].tm.e} {$elements[id].tm.f})'
    />

<!-- {#if $showControls && $selectedId}
    {#each $elements[id].controls as control (control.id) }
        <circle
            layer={$elements[id].layer}
            order={$elements[id].order}
            id={control.id}
            class={'control c0'}
            cx={control.c0.x}
            cy={control.c0.y}
            r={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}
            
        />
        <line
            x1={control.c0.x}
            y1={control.c0.y}
            x2={control.point.x}
            y2={control.point.y}
            stroke="black"
            stroke-width="0.5"
            fill="none"
            
        />
        <circle
            layer={$elements[id].layer}
            order={$elements[id].order}
            id={control.id}
            class={'control point'}
            cx={control.point.x}
            cy={control.point.y}
            r={5*$Z}
            fill="white"
            stroke="blue"
            stroke-width={2*$Z}
            
        />
        <line
            x1={control.point.x}
            y1={control.point.y}
            x2={control.c1.x}
            y2={control.c1.y}
            stroke="black"
            stroke-width="0.5"
            fill="none"
            
        />
        <circle
            layer={$elements[id].layer}
            order={$elements[id].order}
            id={control.id}
            class={'control c1'}
            cx={control.c1.x}
            cy={control.c1.y}
            r={5*$Z}
            fill="black"
            stroke="black"
            stroke-width={2*$Z}
            
        />
    
    {/each}
{/if} -->
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
            layer={$elements[id].layer}
            order={$elements[id].order}
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
            layer={$elements[id].layer}
            order={$elements[id].order}
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
            layer={$elements[id].layer}
            order={$elements[id].order}
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
            layer={$elements[id].layer}
            order={$elements[id].order}
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
            layer={$elements[id].layer}
            order={$elements[id].order}
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
            layer={$elements[id].layer}
            order={$elements[id].order}
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
            layer={$elements[id].layer}
            order={$elements[id].order}
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
            layer={$elements[id].layer}
            order={$elements[id].order}
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