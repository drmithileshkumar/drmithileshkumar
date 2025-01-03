<script lang='ts'>
    //@ts-nocheck
    import {defs, elements, colors, selectedId} from './stores';
    import { createEventDispatcher } from "svelte";
    import { onMount } from 'svelte';
    let dispatch = createEventDispatcher();
    export let fillStroke = 'fill';
    let solidColors = ['rgba(255, 0, 0, 0)', 'rgba(255, 0, 0, 1)', 'rgba(0, 200, 0, 1)', 'rgba(0, 0, 255, 1)', 'rgba(170, 170, 0, 1)', 'rgba(170, 0, 170, 1)', 'rgba(0, 170, 170, 1)']
    let background;
    const setColor = (color) => {
        $elements[$selectedId][fillStroke] = color;
        $elements[$selectedId]['filltype'] = 'solid';
        background = color;
        $elements = $elements;
        dispatch("colorChosen", { color: background });
    }
    
</script>
<style>
    .solidColors {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        flex-wrap: wrap;
        justify-content: start;
        padding: 0.5em;
        background: rgba(234, 234, 234, 0.5);
    }
    .color {
        display: inline-flex;
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        cursor: pointer;
        /* box-shadow: 1px 1px 3px gray; */
        align-items: center;
        justify-content: center;
    }
</style>
<div class="solidColors">
    {#each solidColors as color}
        <!-- <span class="color" style="background: {color}" on:click={() => setColor(color)}></span> -->
        <svg class="color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
            <circle 
                cx={12}
                cy={12}
                stroke={'currentColor'}
                stroke-width='1'
                fill={color}
                r='12'
                on:click={() => setColor(color)}
            />
        </svg>
    {/each}
</div>