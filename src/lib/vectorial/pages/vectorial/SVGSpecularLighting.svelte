<script lang='ts'>
    //@ts-nocheck
    import {defs} from './stores';
    export let id = '';
    
</script>
<style>

</style>

<filter 
    id={id}
    x='{$defs[id].x}%'
    y='{$defs[id].y}%'
    width='{$defs[id].width}%'
    height='{$defs[id].height}%'
>
    <feSpecularLighting
        result={$defs[id].result}
        specularExponent={$defs[id].specularExponent}
        specularConstant={$defs[id].specularConstant}
        lighting-color={$defs[id].lightingColor}
        surfaceScale={$defs[id].surfaceScale}
    >
        <fePointLight x={$defs[id].point.x} y={$defs[id].point.y} z={$defs[id].point.z}/>
    </feSpecularLighting> 
    <feComposite
      in={$defs[id].input}
      in2={$defs[id].input2}
      operator={$defs[id].operator}
      k1={$defs[id].k1}
      k2={$defs[id].k2}
      k3={$defs[id].k3}
      k4={$defs[id].k4} />
</filter>

