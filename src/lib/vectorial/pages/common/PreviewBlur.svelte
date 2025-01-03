<script>
    export let blur;
</script>
<style>

</style>

<filter 
    id={blur.id}
    x='{blur.x}%'
    y='{blur.y}%'
    width='{blur.width}%'
    height='{blur.height}%'
>
    <feGaussianBlur 
        in={blur.input}
        stdDeviation={blur.stdDeviation}
        edgeMode={blur.edgeMode}
    />
</filter>

