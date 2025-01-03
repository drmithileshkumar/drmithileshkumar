<script lang='ts'>
    //@ts-nocheck
    import {defs, elements, selectedId} from './stores';
    import { createEventDispatcher } from "svelte";
    import {RadialGradient} from '$lib/vectorial/utils/common/radialGradient';
    import { onMount } from 'svelte';
    let dispatch = createEventDispatcher();
    export let fillStroke = 'fill';
    let radialGradients = [
        {
            id: 'RadialGradient-' + 'VectorialApp' + '-' + 0,
            cx: 50,
            cy: 50,
            fx: 50,
            fy: 50,
            r: 100,
            fr: 0,
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
            id: 'RadialGradient-' + 'VectorialApp' + '-' + 1,
            cx: 50,
            cy: 50,
            fx: 50,
            fy: 50,
            r: 100,
            fr: 0,
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
            id: 'RadialGradient-' + 'VectorialApp' + '-' + 2,
            cx: 50,
            cy: 50,
            fx: 50,
            fy: 50,
            r: 100,
            fr: 0,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(0, 170, 0, 1)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        },
        {
            id: 'RadialGradient-' + 'VectorialApp' + '-' + 3,
            cx: 50,
            cy: 50,
            fx: 50,
            fy: 50,
            r: 100,
            fr: 0,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(0, 0, 255, 1)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        },
        {
            id: 'RadialGradient-' + 'VectorialApp' + '-' + 4,
            cx: 50,
            cy: 50,
            fx: 50,
            fy: 50,
            r: 100,
            fr: 0,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(170, 170, 0, 1)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        },
        {
            id: 'RadialGradient-' + 'VectorialApp' + '-' + 5,
            cx: 50,
            cy: 50,
            fx: 50,
            fy: 50,
            r: 100,
            fr: 0,
            colors: [
                {
                    offset: 0,
                    stopColor: 'rgba(0, 170, 170, 1)'
                },
                {
                    offset: 100,
                    stopColor: 'rgba(0, 0, 0, 1)'
                }
            ]
        }
    ]
    
    const createRadialGradient = (index) => {
        let lg = new RadialGradient({id: radialGradients[index].id})
        lg.center.x = radialGradients[index].cx;
        lg.center.y = radialGradients[index].cy;
        lg.focus.x = radialGradients[index].fx;
        lg.focus.y = radialGradients[index].fy;
        lg.r = radialGradients[index].r;
        lg.fr = radialGradients[index].fr;
        lg.colors = radialGradients[index].colors;

        $defs[lg.id] = lg;
        $elements[$selectedId]['fill'] = `url(#${lg.id})`;
        $elements[$selectedId]['filltype'] = 'radial';
        $elements = $elements;
        dispatch("colorChosen", { color: `url(#${lg.id})` });
    }
    
</script>
<style>
    .radialGradients {
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
<div class="radialGradients">
    <svg width='0' height='0' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
        <defs>
            {#each radialGradients as lg}
                
                <radialGradient id={lg.id} cx="{lg.cx}%" cy="{lg.cy}%" fx="{lg.fx}%" fy="{lg.fy}%" r="{lg.r}%" fr="{lg.fr}%" gradientUnits="objectBoundingBox" 
                spreadMethod="pad">
                    {#each lg.colors as color}
                        <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                    {/each}
                </radialGradient>
                
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
    {#each radialGradients as lg, index}
        <!-- <span class="color" style="background: {color}" on:click={() => setColor(color)}></span> -->
        <svg class="color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
            <circle 
                cx={12}
                cy={12}
                stroke={'white'}
                stroke-width='1'
                fill={`url(#${lg.id})`}
                r='12'
                on:click={() => createRadialGradient(index)}
            />
        </svg>
    {/each}
</div>