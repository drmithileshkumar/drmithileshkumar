<script lang='ts'>
    //@ts-nocheck
    export let line;
</script>
<style>

</style>

<line  
    x1={line.x1}
    y1={line.y1}
    x2={line.x2}
    y2={line.y2}
    fill={line.fill}
    stroke={line.stroke}
    stroke-width={line.strokewidth}
    stroke-dasharray={line.strokedasharray}
    vector-effect={line.vectorEffect}
    opacity={line.opacity}
    filter={line.filter}
    transform='matrix({line.tm.a} {line.tm.b} {line.tm.c} {line.tm.d} {line.tm.e} {line.tm.f})'
    
/>
