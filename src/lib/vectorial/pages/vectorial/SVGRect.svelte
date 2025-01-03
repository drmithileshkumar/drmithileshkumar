<script lang='ts'>
    //@ts-nocheck
    import {elementsNode, isLasso, lassoDom, Z, selectedElement, activeElement, elements, svg, selectedId, showControls, showBBoxControls} from './stores';
    export let id = '';
</script>
<style>

</style>

<rect  
    id={id} 
    bind:this={$elementsNode[id]}
    class='draggable'
    x={$elements[id].x}
    y={$elements[id].y}
    width={$elements[id].width}
    height={$elements[id].height}
    rx={$elements[id].rx}
    ry={$elements[id].ry}
    fill={$elements[id].fill}
    filter={$elements[id].filter}
    mask={$elements[id].mask}
    stroke={$elements[id].stroke}
    stroke-width={$elements[id].strokewidth}
    stroke-dasharray={$elements[id].strokedasharray}
    stroke-linecap={$elements[id].strokelinecap}
    vector-effect={$elements[id].vectorEffect}
    opacity={$elements[id].opacity}
    transform='matrix({$elements[id].tm.a} {$elements[id].tm.b} {$elements[id].tm.c} {$elements[id].tm.d} {$elements[id].tm.e} {$elements[id].tm.f})'
    
/>
