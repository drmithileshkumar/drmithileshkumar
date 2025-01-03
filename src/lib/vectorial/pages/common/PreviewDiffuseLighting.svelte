<script lang='ts'>
    //@ts-nocheck
    export let diffuseLighting;
    
</script>
<style>

</style>

<filter 
    id={diffuseLighting.id}
    x='{diffuseLighting.x}%'
    y='{diffuseLighting.y}%'
    width='{diffuseLighting.width}%'
    height='{diffuseLighting.height}%'
>
    <feDiffuseLighting
        result={diffuseLighting.result}
        diffuseExponent={diffuseLighting.diffuseExponent}
        diffuseConstant={diffuseLighting.diffuseConstant}
        lighting-color={diffuseLighting.lightingColor}
        surfaceScale={diffuseLighting.surfaceScale}
    >
        <fePointLight x={diffuseLighting.point.x} y={diffuseLighting.point.y} z={diffuseLighting.point.z}/>
    </feDiffuseLighting> 
    <feComposite
      in={diffuseLighting.input}
      in2={diffuseLighting.input2}
      operator={diffuseLighting.operator}
      k1={diffuseLighting.k1}
      k2={diffuseLighting.k2}
      k3={diffuseLighting.k3}
      k4={diffuseLighting.k4} />
</filter>

