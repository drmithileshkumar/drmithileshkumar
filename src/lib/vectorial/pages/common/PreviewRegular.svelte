<script lang='ts'>
    //@ts-nocheck
    export let regular;
</script>
<style>

</style>

<polygon  
    points={regular.points}
    fill={regular.fill}
    stroke={regular.stroke}
    stroke-width={regular.strokewidth}
    stroke-dasharray={regular.strokedasharray}
    vector-effect={regular.vectorEffect}
    opacity={regular.opacity}
    filter={regular.filter}
    mask={regular.mask}
    transform='matrix({regular.tm.a} {regular.tm.b} {regular.tm.c} {regular.tm.d} {regular.tm.e} {regular.tm.f})'
/>