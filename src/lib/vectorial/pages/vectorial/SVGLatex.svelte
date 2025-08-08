<script id="MathJax-script" lang='ts'>
    //@ts-nocheck
    import {elementsNode, isLasso, lassoDom, Z, selectedElement, activeElement, elements, svg, selectedId, showControls, showBBoxControls} from './stores';
    export let id = '';
    const text2latex = (node, math) => {
        if(!math || math.length == 0) return;
        let mathoutput = MathJax.tex2svg(math);
        let svg = mathoutput.children[0];
        svg.children[1].removeAttribute('stroke')
        svg.children[1].removeAttribute('fill');
        return svg.innerHTML;
    }
</script>
<style>

</style>

<g  
    id={id} 
    bind:this={$elementsNode[id]}
    class='draggable'
    fill={$elements[id].fill}
    font-size='{$elements[id].fontSize}px'
    font-weight={$elements[id].fontWeight}
    filter={$elements[id].filter}
    opacity={$elements[id].opacity}
    vector-effect={$elements[id].vectorEffect}
    transform='matrix({$elements[id].tm.a} {$elements[id].tm.b} {$elements[id].tm.c} {$elements[id].tm.d} {$elements[id].tm.e} {$elements[id].tm.f})'
        
>
    {@html text2latex($elements[id], $elements[id].content)}
</g>
