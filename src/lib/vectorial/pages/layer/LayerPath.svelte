<script lang='ts'>
    //@ts-nocheck
    export let path;
</script>
<style>

</style>

<path  
    id={path.id} 
    d="{path.d}"
    fill={path.fill}
    fill-rule={path.fillrule}
    stroke={path.stroke}
    stroke-width={path.strokewidth}
    stroke-dasharray={path.strokedasharray}
    stroke-linecap={path.strokelinecap}
    stroke-linejoin={path.strokelinejoin}
    stroke-miterlimit={path.strokemiterlimit}
    vector-effect={path.vectorEffect}
    opacity={path.opacity}
    filter={path.filter}
    mask={path.mask}
    marker-start={path.markerStart}
    marker-mid={path.markerMid}
    marker-end={path.markerEnd}
    transform='matrix({path.tm.a} {path.tm.b} {path.tm.c} {path.tm.d} {path.tm.e} {path.tm.f})'
/>