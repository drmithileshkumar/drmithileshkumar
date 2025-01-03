<script lang='ts'>
    //@ts-nocheck
    export let ellipse;
</script>
<style>

</style>

<ellipse  
    cx={ellipse.cx} 
    cy={ellipse.cy}
    rx={ellipse.rx}
    ry={ellipse.ry}
    fill={ellipse.fill}
    stroke={ellipse.stroke}
    stroke-width={ellipse.strokewidth}
    stroke-dasharray={ellipse.strokedasharray}
    vector-effect={ellipse.vectorEffect}
    opacity={ellipse.opacity}
    filter={ellipse.filter}
    mask={ellipse.mask}
    transform='matrix({ellipse.tm.a} {ellipse.tm.b} {ellipse.tm.c} {ellipse.tm.d} {ellipse.tm.e} {ellipse.tm.f})'
    
/>