<script>
    export let shadow;
</script>
<style>

</style>

<filter 
    id={shadow.id}
    x='{shadow.x}%'
    y='{shadow.y}%'
    width='{shadow.width}%'
    height='{shadow.height}%'
>
    <feDropShadow 
        dx={shadow.dx}
        dy={shadow.dy}
        stdDeviation={shadow.stdDeviation}
        flood-color={shadow.floodcolor}
        flood-opacity={shadow.floodopacity}
    />
</filter>

