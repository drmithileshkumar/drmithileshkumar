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
    <feDropShadow 
        dx={$defs[id].dx}
        dy={$defs[id].dy}
        stdDeviation={$defs[id].stdDeviation}
        flood-color={$defs[id].floodcolor}
        flood-opacity={$defs[id].floodopacity}
    />
</filter>

