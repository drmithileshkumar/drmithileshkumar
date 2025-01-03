<script>
    export let specularLighting;
    
</script>
<style>

</style>

<filter 
    id={specularLighting.id}
    x='{specularLighting.x}%'
    y='{specularLighting.y}%'
    width='{specularLighting.width}%'
    height='{specularLighting.height}%'
>
    <feSpecularLighting
        result={specularLighting.result}
        specularExponent={specularLighting.specularExponent}
        specularConstant={specularLighting.specularConstant}
        lighting-color={specularLighting.lightingColor}
        surfaceScale={specularLighting.surfaceScale}
    >
        <fePointLight x={specularLighting.point.x} y={specularLighting.point.y} z={specularLighting.point.z}/>
    </feSpecularLighting> 
    <feComposite
      in={specularLighting.input}
      in2={specularLighting.input2}
      operator={specularLighting.operator}
      k1={specularLighting.k1}
      k2={specularLighting.k2}
      k3={specularLighting.k3}
      k4={specularLighting.k4} />
</filter>

