<script lang='ts'>
    //@ts-nocheck
    import {elementsNode, selectedElement, elements, svg, selectedId, selectedGroupId, activeElement, Z, showBBoxControls, defs} from './stores';
    import SVGGroup from "./SVGGroup.svelte";
    export let id;
</script>
<pattern 
    id={id}
    x='{$defs[id].x}%'
    y='{$defs[id].y}%'
    width='{$defs[id].width}%'
    height='{$defs[id].height}%'
    viewBox='{$defs[id].viewBox}'
    href={$defs[id].href}
    patternContentUnits={$defs[id].patternContentUnits}
    patternUnits={$defs[id].patternUnits}
    vector-effect={$defs[id].vectorEffect}
    opacity={$defs[id].opacity}
    filter={$defs[id].filter}
    mask={$defs[id].mask}
    patternTransform='matrix({$defs[id].patternTransform.a} {$defs[id].patternTransform.b} {$defs[id].patternTransform.c} {$defs[id].patternTransform.d} {$defs[id].patternTransform.e} {$defs[id].patternTransform.f})'
>
    {#if $defs[id].child.length > 0}
    <SVGGroup id={$defs[id].child} />
    {/if}
</pattern>
