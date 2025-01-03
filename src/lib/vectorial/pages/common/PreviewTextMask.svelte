<script lang="ts">
    //@ts-nocheck
    export let textMask;
    export let elements;
    // console.log(textMask, elements);
</script>
<style>

</style>

<mask 
    id={textMask.id}
    x="-10%"
    y="-10%"
    width="120%"
    height="120%"
    transform='matrix({elements[textMask.parent].tm.a} {elements[textMask.parent].tm.b} {elements[textMask.parent].tm.c} {elements[textMask.parent].tm.d} {elements[textMask.parent].tm.e} {elements[textMask.parent].tm.f})'
>
    {#if elements[textMask.shape].tag === 'circle'}
        <circle 
            cx={elements[textMask.shape].cx}
            cy={elements[textMask.shape].cy}
            r={elements[textMask.shape].r}
            fill='white'
            stroke={elements[textMask.shape].stroke}
            stroke-width={elements[textMask.shape].strokewidth}
            stroke-dasharray={elements[textMask.shape].strokedasharray}
            transform='matrix({elements[textMask.shape].tm.a} {elements[textMask.shape].tm.b} {elements[textMask.shape].tm.c} {elements[textMask.shape].tm.d} {elements[textMask.shape].tm.e} {elements[textMask.shape].tm.f})'
        />
    {:else if elements[textMask.shape].tag === 'rect'}
        <rect 
            x={elements[textMask.shape].x}
            y={elements[textMask.shape].y}
            width={elements[textMask.shape].width}
            height={elements[textMask.shape].height}
            rx={elements[textMask.shape].rx}
            ry={elements[textMask.shape].ry}
            fill='white'
            stroke={elements[textMask.shape].stroke}
            stroke-width={elements[textMask.shape].strokewidth}
            stroke-dasharray={elements[textMask.shape].strokedasharray}
            transform='matrix({elements[textMask.shape].tm.a} {elements[textMask.shape].tm.b} {elements[textMask.shape].tm.c} {elements[textMask.shape].tm.d} {elements[textMask.shape].tm.e} {elements[textMask.shape].tm.f})'
        />
    {:else if elements[textMask.shape].tag === 'regular'}
        <polygon  
            points={elements[textMask.shape].points}
            fill='white'
            stroke={elements[textMask.shape].stroke}
            stroke-width={elements[textMask.shape].strokewidth}
            stroke-dasharray={elements[textMask.shape].strokedasharray}
            transform='matrix({elements[textMask.shape].tm.a} {elements[textMask.shape].tm.b} {elements[textMask.shape].tm.c} {elements[textMask.shape].tm.d} {elements[textMask.shape].tm.e} {elements[textMask.shape].tm.f})'
        />
    {:else if elements[textMask.shape].tag === 'path'}
        <path  
            d="{elements[textMask.shape].d}"
            fill='white'
            stroke={elements[textMask.shape].stroke}
            stroke-width={elements[textMask.shape].strokewidth}
            stroke-dasharray={elements[textMask.shape].strokedasharray}
            transform='matrix({elements[textMask.shape].tm.a} {elements[textMask.shape].tm.b} {elements[textMask.shape].tm.c} {elements[textMask.shape].tm.d} {elements[textMask.shape].tm.e} {elements[textMask.shape].tm.f})'
        />
    {:else if elements[textMask.shape].tag === 'image'}
        <image  
            x={elements[textMask.shape].x} 
            y={elements[textMask.shape].y}
            width={elements[textMask.shape].width}
            height={elements[textMask.shape].height}
            rx={elements[textMask.shape].rx}
            ry={elements[textMask.shape].ry}
            href={elements[textMask.shape].href}
            fill='white'
            preserveAspectRatio={elements[textMask.shape].preserveAspectRatio}
            transform='matrix({elements[textMask.shape].tm.a} {elements[textMask.shape].tm.b} {elements[textMask.shape].tm.c} {elements[textMask.shape].tm.d} {elements[textMask.shape].tm.e} {elements[textMask.shape].tm.f})'
            
        />
    {/if}
    {#each textMask.text as text}
        <text  
            x={elements[text].x}
            y={elements[text].y}
            font-size='{elements[text].fontSize}px'
            font-weight={elements[text].fontWeight}
            transform='matrix({elements[text].tm.a} {elements[text].tm.b} {elements[text].tm.c} {elements[text].tm.d} {elements[text].tm.e} {elements[text].tm.f})'
        >{elements[text].content}
        </text>
    {/each}
</mask>


