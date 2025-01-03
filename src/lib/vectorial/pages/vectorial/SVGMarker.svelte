<script lang='ts'>
    //@ts-nocheck
    import {defs} from './stores';
    export let id = '';
</script>
<style>

</style>

<marker 
    id={id}
    refX='{$defs[id].refX}'
    refY='{$defs[id].refY}'
    markerWidth='{$defs[id].markerWidth}'
    markerHeight='{$defs[id].markerHeight}'
    markerUnits={$defs[id].markerUnits}
    orient={$defs[id].orient}
    viewBox={$defs[id].viewBox}
    preserveAspectRatio={$defs[id].preserveAspectRatio}
>
    <path 
        d="{$defs[id].path.d}"
        fill={$defs[id].path.fill}
        stroke={$defs[id].path.stroke}
        stroke-width={$defs[id].path.strokewidth}
        stroke-dasharray={$defs[id].path.strokedasharray}
        opacity={$defs[id].path.opacity}
        filter={$defs[id].path.filter}
        transform='matrix({$defs[id].path.tm.a} {$defs[id].path.tm.b} {$defs[id].path.tm.c} {$defs[id].path.tm.d} {$defs[id].path.tm.e} {$defs[id].path.tm.f})'
    />
</marker>

