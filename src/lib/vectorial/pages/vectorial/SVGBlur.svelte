<script>
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
    <feGaussianBlur 
        in={$defs[id].input}
        stdDeviation={$defs[id].stdDeviation}
        edgeMode={$defs[id].edgeMode}
    />
</filter>

