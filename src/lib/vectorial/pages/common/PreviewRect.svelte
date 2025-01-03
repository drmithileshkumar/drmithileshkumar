<script lang='ts'>
    //@ts-nocheck
    export let rect;
</script>
<style>

</style>

<rect  
    x={rect.x}
    y={rect.y}
    width={rect.width}
    height={rect.height}
    rx={rect.rx}
    ry={rect.ry}
    fill={rect.fill}
    stroke={rect.stroke}
    stroke-width={rect.strokewidth}
    stroke-dasharray={rect.strokedasharray}
    vector-effect={rect.vectorEffect}
    opacity={rect.opacity}
    filter={rect.filter}
    mask={rect.mask}
    transform='matrix({rect.tm.a} {rect.tm.b} {rect.tm.c} {rect.tm.d} {rect.tm.e} {rect.tm.f})'
    
/>
