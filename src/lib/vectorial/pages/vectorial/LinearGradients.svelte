<script lang='ts'>
    //@ts-nocheck
    import {defs, elements, selectedId} from './stores';
    import { createEventDispatcher } from "svelte";
    import {LinearGradient} from '$lib/vectorial/utils/common/linearGradient';
    import { onMount } from 'svelte';
    let dispatch = createEventDispatcher();
    export let fillStroke = 'fill';
    let linearGradients = [
        {
            id: 'LinearGradient-' + 'VectorialApp' + '-' + 0,
            x1: 0,
            y1: 0,
            x2: 100,
            y2: 0,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(0, 0, 0, 0)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        },
        {
            id: 'LinearGradient-' + 'VectorialApp' + '-' + 1,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 100,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(0, 0, 0, 0)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        },
        {
            id: 'LinearGradient-' + 'VectorialApp' + '-' + 2,
            x1: 0,
            y1: 0,
            x2: 100,
            y2: 100,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(0, 0, 0, 0)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        },
        {
            id: 'LinearGradient-' + 'VectorialApp' + '-' + 3,
            x1: 0,
            y1: 0,
            x2: 100,
            y2: 0,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(255, 0, 0, 1)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        },
        {
            id: 'LinearGradient-' + 'VectorialApp' + '-' + 4,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 100,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(255, 0, 0, 1)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        },
        {
            id: 'LinearGradient-' + 'VectorialApp' + '-' + 5,
            x1: 0,
            y1: 0,
            x2: 100,
            y2: 100,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(255, 0, 0, 1)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        }
    ]
    
    const createLinearGradient = (index) => {
        let lg = new LinearGradient({id: linearGradients[index].id})
        lg.start.x = linearGradients[index].x1;
        lg.start.y = linearGradients[index].y1;
        lg.end.x = linearGradients[index].x2;
        lg.end.y = linearGradients[index].y2;
        lg.colors = linearGradients[index].colors;

        $defs[lg.id] = lg;
        $elements[$selectedId]['fill'] = `url(#${lg.id})`;
        $elements[$selectedId]['filltype'] = 'linear';
        $elements = $elements;
        dispatch("colorChosen", { color: `url(#${lg.id})` });
    }
    
</script>
<style>
    .linearGradients {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        flex-wrap: wrap;
        justify-content: start;
        padding: 0.5em;
        background: rgb(234, 234, 234);
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
<div class="linearGradients">
    <svg width='0' height='0' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
        <defs>
            {#each linearGradients as lg}
                
                <linearGradient id={lg.id} x1="{lg.x1}%" y1="{lg.y1}%" x2="{lg.x2}%" y2="{lg.y2}%" gradientUnits="objectBoundingBox" 
                spreadMethod="pad">
                    {#each lg.colors as color}
                        <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                    {/each}
                </linearGradient>
                
                <!-- {#if $defs[def].tag === 'radialGradient'}
                    <radialGradient id={def} cx="{$defs[def].center.x}%" cy="{$defs[def].center.y}%" r="{$defs[def].r}%" fx="{$defs[def].focus.x}%" fy="{$defs[def].focus.y}%" fr="{$defs[def].fr}%" >
                        {#each $defs[def].colors as color}
                            <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                        {/each}
                    </radialGradient>
                {/if} -->
            {/each}
        </defs>
    </svg>
    {#each linearGradients as lg, index}
        <!-- <span class="color" style="background: {color}" on:click={() => setColor(color)}></span> -->
        <svg class="color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
            <circle 
                cx={12}
                cy={12}
                stroke={'white'}
                stroke-width='1'
                fill={`url(#${lg.id})`}
                r='12'
                on:click={() => createLinearGradient(index)}
            />
        </svg>
    {/each}
</div>