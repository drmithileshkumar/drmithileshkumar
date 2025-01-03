<script lang='ts'>
    //@ts-nocheck
    import {defs, elements} from './stores';
    export let id = '';
</script>
<style>

</style>

<mask 
    id={id}
    x="-10%"
    y="-10%"
    width="120%"
    height="120%"
    transform='matrix({$elements[$defs[id].parent]?.tm.a} {$elements[$defs[id].parent]?.tm.b} {$elements[$defs[id].parent]?.tm.c} {$elements[$defs[id].parent]?.tm.d} {$elements[$defs[id].parent]?.tm.e} {$elements[$defs[id].parent]?.tm.f})'
>
    {#if $elements[$defs[id].shape].tag === 'circle'}
        <circle 
            cx={$elements[$defs[id].shape].cx}
            cy={$elements[$defs[id].shape].cy}
            r={$elements[$defs[id].shape].r}
            fill='white'
            stroke={$elements[$defs[id].shape].stroke}
            stroke-width={$elements[$defs[id].shape].strokewidth}
            stroke-dasharray={$elements[$defs[id].shape].strokedasharray}
            transform='matrix({$elements[$defs[id].shape].tm.a} {$elements[$defs[id].shape].tm.b} {$elements[$defs[id].shape].tm.c} {$elements[$defs[id].shape].tm.d} {$elements[$defs[id].shape].tm.e} {$elements[$defs[id].shape].tm.f})'
        />
    {:else if $elements[$defs[id].shape].tag === 'rect'}
        <rect 
            x={$elements[$defs[id].shape].x}
            y={$elements[$defs[id].shape].y}
            width={$elements[$defs[id].shape].width}
            height={$elements[$defs[id].shape].height}
            rx={$elements[$defs[id].shape].rx}
            ry={$elements[$defs[id].shape].ry}
            fill='white'
            stroke={$elements[$defs[id].shape].stroke}
            stroke-width={$elements[$defs[id].shape].strokewidth}
            stroke-dasharray={$elements[$defs[id].shape].strokedasharray}
            transform='matrix({$elements[$defs[id].shape].tm.a} {$elements[$defs[id].shape].tm.b} {$elements[$defs[id].shape].tm.c} {$elements[$defs[id].shape].tm.d} {$elements[$defs[id].shape].tm.e} {$elements[$defs[id].shape].tm.f})'
        />
    {:else if $elements[$defs[id].shape].tag === 'regular'}
        <polygon  
            points={$elements[$defs[id].shape].points}
            fill='white'
            stroke={$elements[$defs[id].shape].stroke}
            stroke-width={$elements[$defs[id].shape].strokewidth}
            stroke-dasharray={$elements[$defs[id].shape].strokedasharray}
            transform='matrix({$elements[$defs[id].shape].tm.a} {$elements[$defs[id].shape].tm.b} {$elements[$defs[id].shape].tm.c} {$elements[$defs[id].shape].tm.d} {$elements[$defs[id].shape].tm.e} {$elements[$defs[id].shape].tm.f})'
        />
    {:else if $elements[$defs[id].shape].tag === 'path'}
        <path  
            d="{$elements[$defs[id].shape].d}"
            fill='white'
            stroke={$elements[$defs[id].shape].stroke}
            stroke-width={$elements[$defs[id].shape].strokewidth}
            stroke-dasharray={$elements[$defs[id].shape].strokedasharray}
            transform='matrix({$elements[$defs[id].shape].tm.a} {$elements[$defs[id].shape].tm.b} {$elements[$defs[id].shape].tm.c} {$elements[$defs[id].shape].tm.d} {$elements[$defs[id].shape].tm.e} {$elements[$defs[id].shape].tm.f})'
        />
    {:else if $elements[$defs[id].shape].tag === 'image'}
        <image  
            x={$elements[$defs[id].shape].x} 
            y={$elements[$defs[id].shape].y}
            width={$elements[$defs[id].shape].width}
            height={$elements[$defs[id].shape].height}
            rx={$elements[$defs[id].shape].rx}
            ry={$elements[$defs[id].shape].ry}
            href={$elements[$defs[id].shape].href}
            fill='white'
            preserveAspectRatio={$elements[$defs[id].shape].preserveAspectRatio}
            transform='matrix({$elements[$defs[id].shape].tm.a} {$elements[$defs[id].shape].tm.b} {$elements[$defs[id].shape].tm.c} {$elements[$defs[id].shape].tm.d} {$elements[$defs[id].shape].tm.e} {$elements[$defs[id].shape].tm.f})'
            
        />
    {/if}
    {#each $defs[id].text as text}
        <text  
            x={$elements[text].x}
            y={$elements[text].y}
            font-size='{$elements[text].fontSize}px'
            font-weight={$elements[text].fontWeight}
            transform='matrix({$elements[text].tm.a} {$elements[text].tm.b} {$elements[text].tm.c} {$elements[text].tm.d} {$elements[text].tm.e} {$elements[text].tm.f})'
        >{$elements[text].content}
        </text>
    {/each}
</mask>

