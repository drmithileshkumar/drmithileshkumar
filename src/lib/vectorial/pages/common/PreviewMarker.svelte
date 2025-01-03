<script lang='ts'>
    //@ts-nocheck
    export let marker;
</script>
<style>

</style>

<marker 
    id={marker.id}
    refX='{marker.refX}'
    refY='{marker.refY}'
    markerWidth='{marker.markerWidth}'
    markerHeight='{marker.markerHeight}'
    markerUnits={marker.markerUnits}
    orient={marker.orient}
    viewBox={marker.viewBox}
    preserveAspectRatio={marker.preserveAspectRatio}
>
    <path 
        d="{marker.path.d}"
        fill={marker.path.fill}
        stroke={marker.path.stroke}
        stroke-width={marker.path.strokewidth}
        stroke-dasharray={marker.path.strokedasharray}
        opacity={marker.path.opacity}
        filter={marker.path.filter}
        transform='matrix({marker.path.tm.a} {marker.path.tm.b} {marker.path.tm.c} {marker.path.tm.d} {marker.path.tm.e} {marker.path.tm.f})'
    />
</marker>

