<script lang='ts'>
    //@ts-nocheck
    import PreviewGroup from "./PreviewGroup.svelte";
    export let ptrn;
    export let drawing;
</script>
<pattern 
    id={ptrn.id}
    x='{ptrn.x}%'
    y='{ptrn.y}%'
    width='{ptrn.width}%'
    height='{ptrn.height}%'
    viewBox={ptrn.viewBox}
    href={ptrn.href}
    patternContentUnits={ptrn.patternContentUnits}
    patternUnits={ptrn.patternUnits}
    vector-effect={ptrn.vectorEffect}
    opacity={ptrn.opacity}
    filter={ptrn.filter}
    mask={ptrn.mask}
    patternTransform='matrix({ptrn.patternTransform.a} {ptrn.patternTransform.b} {ptrn.patternTransform.c} {ptrn.patternTransform.d} {ptrn.patternTransform.e} {ptrn.patternTransform.f})'
>
    <PreviewGroup id={ptrn.child} {drawing} />
</pattern>
