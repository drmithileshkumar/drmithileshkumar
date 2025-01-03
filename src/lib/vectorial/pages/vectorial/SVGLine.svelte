<script lang='ts'>
    //@ts-nocheck
    import {elementsNode, isLasso, lassoDom, Z, selectedElement, activeElement, elements, svg, selectedId, showControls, showBBoxControls} from './stores';
    export let id = '';
</script>
<style>

</style>

<line  
    id={id} 
    bind:this={$elementsNode[id]}
    class='draggable'
    x1={$elements[id].x1}
    y1={$elements[id].y1}
    x2={$elements[id].x2}
    y2={$elements[id].y2}
    fill={$elements[id].fill}
    filter={$elements[id].filter}
    stroke={$elements[id].stroke}
    stroke-width={$elements[id].strokewidth}
    stroke-dasharray={$elements[id].strokedasharray}
    stroke-linecap={$elements[id].strokelinecap}
    vector-effect={$elements[id].vectorEffect}
    opacity={$elements[id].opacity}
    transform='matrix({$elements[id].tm.a} {$elements[id].tm.b} {$elements[id].tm.c} {$elements[id].tm.d} {$elements[id].tm.e} {$elements[id].tm.f})'
    
/>
