<script lang='ts'>
    //@ts-nocheck
    export let circle;
</script>
<style>

</style>
<circle  
    cx={circle.cx} 
    cy={circle.cy}
    r={circle.r}
    fill={circle.fill}
    stroke={circle.stroke}
    stroke-width={circle.strokewidth}
    stroke-dasharray={circle.strokedasharray}
    vector-effect={circle.vectorEffect}
    opacity={circle.opacity}
    filter={circle.filter}
    mask={circle.mask}
    transform='matrix({circle.tm.a} {circle.tm.b} {circle.tm.c} {circle.tm.d} {circle.tm.e} {circle.tm.f})'
/>