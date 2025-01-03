<script lang='ts'>
    //@ts-nocheck
    import {defs, elements, colors, selectedId} from './stores';
    import { createEventDispatcher } from "svelte";
    import { onMount } from 'svelte';
    let dispatch = createEventDispatcher();
    export let fillStroke = 'fill';
    export let background = "rgba(0, 0, 0, 1)";
    let colorsInUse = new Set();
    onMount(() => {
        Object.keys($elements).forEach(element => {
            if(element !== 'Layers') {
                if($elements[element] && $elements[element]['fill'] && $elements[element]['fill'] !== 'none') {
                    colorsInUse.add($elements[element]['fill']);
                }
                if($elements[element] && $elements[element]['stroke'] && $elements[element]['stroke'] !== 'none') {
                    colorsInUse.add($elements[element]['stroke']);
                }
            }
        })
        $colors = Array.from(colorsInUse);
    })
    const setColor = (color) => {
        $elements[$selectedId][fillStroke] = color;
        if(color.includes('url')) {
            if(color.includes('LinearGradient')) {
                $elements[$selectedId]['filltype'] = 'linear';
            } else {
                $elements[$selectedId]['filltype'] = 'radial';
            }
        } else {
            $elements[$selectedId]['filltype'] = 'solid';
        }
        background = color;
        $elements = $elements;
        dispatch("colorChosen", { color: background });
    }
    
</script>
<style>
    .colorsInUse {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        flex-wrap: wrap;
        justify-content: start;
        padding: 0.5em;
        /* background: rgb(234, 234, 234); */
    }
    .color {
        display: inline-flex;
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 1px 1px 3px gray;
        align-items: center;
        justify-content: center;
    }
</style>
<div class="colorsInUse">
    <svg width='0' height='0' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
        <defs>
            {#each Object.keys($defs) as def}
                {#if $defs[def].tag === 'linearGradient'}
                    <linearGradient id={def} x1="{$defs[def].start.x}%" y1="{$defs[def].start.y}%" x2="{$defs[def].end.x}%" y2="{$defs[def].end.y}%" >
                        {#each $defs[def].colors as color}
                            <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                        {/each}
                    </linearGradient>
                {/if}
                {#if $defs[def].tag === 'radialGradient'}
                    <radialGradient id={def} cx="{$defs[def].center.x}%" cy="{$defs[def].center.y}%" r="{$defs[def].r}%" fx="{$defs[def].focus.x}%" fy="{$defs[def].focus.y}%" fr="{$defs[def].fr}%" >
                        {#each $defs[def].colors as color}
                            <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                        {/each}
                    </radialGradient>
                {/if}
            {/each}
        </defs>
    </svg>
    {#each $colors as color}
        <!-- <span class="color" style="background: {color}" on:click={() => setColor(color)}></span> -->
        <svg class="color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
            <circle 
                cx={10}
                cy={10}
                stroke={'white'}
                stroke-width='1'
                fill={color}
                r='2em'
                on:click={() => setColor(color)}
            />
        </svg>
    {/each}
</div>