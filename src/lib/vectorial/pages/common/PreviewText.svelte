<script lang='ts'>
    //@ts-nocheck
    export let text;
</script>
<style>

</style>

{#if text.isTextOnPath}
    <text  
        id={text.id} 
        fill={text.fill}
        font-size='{text.fontSize}px'
        font-weight={text.fontWeight}
        font-family={text.fontFamily || 'Roboto, sans-serif'}
        filter={text.filter}
        opacity={text.opacity}
        vector-effect={text.vectorEffect}
        transform='matrix({text.tm.a} {text.tm.b} {text.tm.c} {text.tm.d} {text.tm.e} {text.tm.f})'
        
    >
        <textPath
            href='#{text.href}'
            startOffset='{text.startOffset}%'
        >
            {text.content}
        </textPath>
    </text>
{:else}
    <text  
        id={text.id} 
        x={text.x}
        y={text.y}
        fill={text.fill}
        font-size='{text.fontSize}px'
        font-weight={text.fontWeight}
        font-family={text.fontFamily || 'Roboto, sans-serif'}
        filter={text.filter}
        opacity={text.opacity}
        transform='matrix({text.tm.a} {text.tm.b} {text.tm.c} {text.tm.d} {text.tm.e} {text.tm.f})'
    >{text.content}
    </text>
{/if}