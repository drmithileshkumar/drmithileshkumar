<script lang='ts'>
    //@ts-nocheck
    import {elementsNode, isLasso, lassoDom, Z, selectedElement, activeElement, elements, svg, selectedId, showControls, showBBoxControls} from './stores';
    export let id = '';
</script>
<style>

</style>


{#if $elements[id]?.isTextOnPath && $elements[id]?.href !== 'none'}
{#key $elements[$elements[id].href].ctm || $elements[$elements[id].href].d}
<text  
    id={id} 
    bind:this={$elementsNode[id]}
    class='draggable'
    fill={$elements[id].fill}
    font-size='{$elements[id].fontSize}px'
    font-weight={$elements[id].fontWeight}
    font-family={$elements[id].fontFamily || 'Roboto, sans-serif'}
    filter={$elements[id].filter}
    opacity={$elements[id].opacity}
    vector-effect={$elements[id].vectorEffect}
    transform='matrix({$elements[id].tm.a} {$elements[id].tm.b} {$elements[id].tm.c} {$elements[id].tm.d} {$elements[id].tm.e} {$elements[id].tm.f})'
    
>
    <textPath
        href='#{$elements[id].href}'
        startOffset='{$elements[id].startOffset}%'
    >
        {$elements[id].content}
    </textPath>
    
</text>
{/key}
{:else}
<text  
    id={id} 
    bind:this={$elementsNode[id]}
    class='draggable'
    x={$elements[id].x}
    y={$elements[id].y}
    fill={$elements[id].fill}
    font-size='{$elements[id].fontSize}px'
    font-weight={$elements[id].fontWeight}
    font-family={$elements[id].fontFamily || 'Roboto, sans-serif'}
    filter={$elements[id].filter}
    opacity={$elements[id].opacity}
    transform='matrix({$elements[id].tm.a} {$elements[id].tm.b} {$elements[id].tm.c} {$elements[id].tm.d} {$elements[id].tm.e} {$elements[id].tm.f})'
    
>{$elements[id].content}
</text>
{/if}
