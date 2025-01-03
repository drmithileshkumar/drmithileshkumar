<script lang="ts">
    //@ts-nocheck
    import { ActionButtons } from "@smui/card";
    import Slider from '@smui/slider';
    import FormField from '@smui/form-field';
    import Radio from '@smui/radio';
    import Button, { Label } from "@smui/button";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Ripple from '@smui/ripple';
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import {randInt} from '$lib/mathril/utils/matlib/common';
    
    import { Linear2 } from '$lib/mathril/utils/matlib/linear2';
    import { typeset } from "$lib/mathril/shared/typeset";
    import { onMount } from "svelte";

    let fx, n = 0;
    let points = [];
    let lowers = [];
    let uppers = [];
    let pathLength = 1;
    let options = ['Lower', 'Upper']
    let limit = 'Upper'
    let upperLimit = 0;
    let lowerLimit = 0;
    onMount(() => {
        pathLength = fx.getTotalLength();
    })
    const intervals = (n) => {
        // console.log('computing..')
        if(!fx || n == 0) return;
        upperLimit = 0;
        lowerLimit = 0;
        points = [];
        lowers = [];
        uppers = [];
        for(let i = 0; i <= n; i++) {
            points.push(fx.getPointAtLength(pathLength * i/n))
        }
        points = points;
        for(let i = 1; i <= n; i++) {
            lowers.push(points[i])
        }
        for(let i = 0; i < n; i++) {
            uppers.push(points[i])
        }
        for(let i = 0; i < n; i++) {
            lowerLimit += (points[i + 1].x - points[i].x) * (120 - points[i].y)
            upperLimit += (points[i + 1].x - points[i].x) * (120 - points[i + 1].y)
        }
    }

    let region, svg, dot = {
        x: 0,
        y: 0
    };
    let maxDot = {
        x: 0,
        y: 0
    }
    
    let open = false;
    
   
    
    let panel;
    $: if (browser && panel && renderMathInElement) {
        setTimeout(() => {
            renderMathInElement(panel, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false },
                    { left: "\\(", right: "\\)", display: false },
                    { left: "\\[", right: "\\]", display: true },
                ],
                // • rendering keys, e.g.:
                throwOnError: false,
            });
        }, 0);
    }
    $: intervals(n);
    
</script>

<article bind:this={panel}>
    <ActionButtons style="justify-content:space-between;">
        <Button on:click={() => open = true}>Help</Button>
        <Button on:click={() => goto('/mathril/games')}>More games</Button>
      </ActionButtons>
    <h1 class="mdc-typography--headline3" style="text-align:center;margin:0 0 0.5em 0">
        Integration
    </h1>
    <div class="options">
        {#each options as option}
          <FormField>
            <Radio
              bind:group={limit}
              value={option}
            />
            <span slot="label">
              {option} Limit
            </span>
          </FormField>
        {/each}
      </div>
    <div class="hflex">
        <!-- <div class="blank"></div> -->
        
        <div class="shape">
            <svg bind:this={svg} width="310" height="310" viewBox="-155 -155 310 310">
                <defs>
                    <marker
                        id="arrow"
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                    </marker>
                    <marker
                        id="dot"
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="5"
                        markerHeight="5">
                        <circle cx="5" cy="5" r="5" fill="goldenrod" />
                    </marker>
                </defs>
                <!-- {#key regionPoints}
                    <polygon bind:this={region} points={regionPoints} stroke="currentColor" stroke-width="2" fill="rgba(0, 150, 200, 0.5)" marker-start="url(#dot)" marker-mid="url(#dot)"/>
                {/key}
                <circle r="5" cx={dot.x} cy={dot.y} fill={dotColor} />
                <circle r="5" cx={maxDot.x} cy={maxDot.y} fill="green" /> -->
                <path d="M -150, 120 L 150,120" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)"/>
                <path d="M -120, 150 L -120,-150" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)"/>
                <path bind:this={fx} d="M -100, 20 C -50,-10 70,30 120,-30" stroke="currentColor" stroke-width="2" fill="none" pathLength="1" />
                {#each points as point, i (point)}
                    <line x1={point.x} y1="120" x2={point.x} y2={point.y} stroke="currentColor" stroke-width="0.5" />
                    {#if limit === 'Lower' && i < n}
                        <rect x={point.x} y={point.y} width={lowers[i].x - point.x} height={120 - point.y} fill="rgba(0, 150, 200, 0.5)" stroke="currentColor" stroke-width="0.5" />
                        <!-- <line x1={point.x} y1={point.y} x2={lowers[i].x} y2={point.y} stroke="currentColor" stroke-width="0.5" /> -->
                    {/if}
                    {#if limit === 'Upper' && i < n}
                        <rect x={point.x} y={lowers[i].y} width={lowers[i].x - point.x} height={120 - lowers[i].y} fill="rgba(0, 150, 200, 0.5)" stroke="currentColor" stroke-width="0.5"/>
                        <!-- <line x1={point.x} y1={lowers[i].y} x2={lowers[i].x} y2={lowers[i].y} stroke="currentColor" stroke-width="1" /> -->
                    {/if}
                {/each}

            </svg>
        </div>
    
    </div>
    <br>
    <div class="controls">
        <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={n}
                min={0}
                max={300}
                step={1}
                discrete
                tickMarks
                input$aria-label="x"
            />
            <span
                slot="label"
                style="padding-right: 5px; width: max-content; display: block;"
            >
                N
            </span>
        </FormField>
    </div>
    <div class="values">
        <div class="maxValue"><span>Lower Limit</span> <strong>{lowerLimit.toFixed(2)}</strong></div>
        <div class="currentValue"><span>Upper Limit</span> <strong>{upperLimit.toFixed(2)}</strong> </div>
    </div>
    <br>
    <!-- <div class="actions">
        <Button  on:click={objective}>New Objective</Button>
        <Button  on:click={generateConvex}>New Region</Button>
    </div> -->
    
</article>
<Dialog
    bind:open
    aria-labelledby="simple-title"
    aria-describedby="simple-content"
>
    <Title id="simple-title">How to play</Title>
    <Content id="simple-content">
        <p>The integration via sums is obtained by sub-dividing the region in small rectangles. This can be done in two ways called Lower limit and upper limit. Change the number of sub-divisions by sliding.</p>
    </Content>
    <Actions>
        <Button on:click={() => (open = false)}>
            <Label>Done</Label>
        </Button>
    </Actions>
</Dialog>

<style>
    .hflex {
        display: grid;
        grid-template-areas: 
            "topleft top topright"
            "left shape right"
            "bottomleft bottom bottomright";
        align-items: center;
        justify-content: center;
        /* width: fit-content; */
    }
    /* .centerFlex {
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }
     */
    .options {
        display: flex;
        margin: auto;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .shape {
        grid-area: shape;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid teal;
        padding: 1em;
        flex-direction: column;
        width: 310px;
        height: 310px;
        position: relative;
    }
    
    :global(.katex) {
        color: currentcolor;
    }
    article {
        -webkit-touch-callout: none !important; 
        -webkit-user-select: none !important; 
        user-select: none !important;
    }
    /* .actions {
        width: 100%;
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
    } */
    .values {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
