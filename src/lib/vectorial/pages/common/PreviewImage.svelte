<script lang='ts'>
    //@ts-nocheck
    export let image;
</script>
<style>

</style>

<image  
    x={image.x} 
    y={image.y}
    width={image.width}
    height={image.height}
    rx={image.rx}
    ry={image.ry}
    href={image.href}
    fill={image.fill}
    stroke={image.stroke}
    stroke-width={image.strokewidth}
    stroke-dasharray={image.strokedasharray}
    vector-effect={image.vectorEffect}
    opacity={image.opacity}
    preserveAspectRatio={image.preserveAspectRatio}
    filter={image.filter}
    mask={image.mask}
    transform='matrix({image.tm.a} {image.tm.b} {image.tm.c} {image.tm.d} {image.tm.e} {image.tm.f})'
    
/>
