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
    
    import { typeset } from "$lib/mathril/shared/typeset";
    import { onMount } from "svelte";

    let fx, n = 0;
    let N = 360;
    let L = 50;
    let P = null;
    let Q = null;
    let currentPoint = {

    }
    let nextPoint = {}
    let previousPoint = {}
    let derivative = 0;
    let extrema = [];

    let pathLength = 1;

    
    onMount(() => {
        pathLength = fx.getTotalLength();
        currentPoint = fx.getPointAtLength(0);
    })
    const slope = (p1, p2) => {
        return (p2.y - p1.y) / (p2.x - p1.x)
    }
    const line = () => {
        let theta = Math.atan(derivative);
        let x = L * Math.cos(theta);
        let y = L * Math.sin(theta);
        P = {
            x: currentPoint.x - x,
            y: currentPoint.y - y
        }
        Q = {
            x: currentPoint.x + x,
            y: currentPoint.y + y
        }
    }
    const tangent = (n) => {
        // console.log('computing..')
        if(!fx || n == 0) return;
        currentPoint = fx.getPointAtLength(pathLength * n / N)
        previousPoint = null;
        nextPoint = null;
        
        if(n > 0) {
            previousPoint = fx.getPointAtLength(pathLength * (n - 1) / N);
        }
        if(n < N) {
            nextPoint = fx.getPointAtLength(pathLength * (n + 1) / N);
        }
        derivative = previousPoint ? slope(currentPoint, previousPoint) : slope(nextPoint, currentPoint);
        if(n > 0 && derivative.toFixed(2) == 0 && extrema.length < 2) {
            if(extrema.length === 0 || Math.abs(extrema[0].x - currentPoint.x) > pathLength / N)
                extrema.push({x:currentPoint.x, y:currentPoint.y});
        }
        extrema = extrema;
        // console.log(extrema)
        line();
    }

    let svg;
    
    
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
    $: tangent(n);
    
</script>

<article bind:this={panel}>
    <ActionButtons style="justify-content:space-between;">
        <Button on:click={() => open = true}>Help</Button>
        <Button on:click={() => goto('/mathril/games')}>More games</Button>
      </ActionButtons>
    <h1 class="mdc-typography--headline3" style="text-align:center;margin:0 0 0.5em 0">
        Extremal Points
    </h1>
    <!-- <div class="options">
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
      </div> -->
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
                <path bind:this={fx} d="M -100, 20 C -50,-100 70,80 120,-30" stroke="currentColor" stroke-width="2" fill="none" pathLength="1" />
                {#if P}
                    <line x1={P.x} y1={P.y} x2={Q.x} y2={Q.y} stroke="rgba(0, 150, 200, 1)" stroke-width="1" />
                    {#each extrema as p}
                        <circle cx={p.x} cy={p.y} r="7" fill="tomato" />
                    {/each}
                {/if}
                
                <circle cx={currentPoint.x} cy={currentPoint.y} r="7" fill="rgba(0, 150, 200, 1)" />
                <circle cx={currentPoint.x} cy={currentPoint.y} r="10" fill="none" stroke="currentColor" stroke-width="1" />
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
                max={N}
                step={1}
                discrete
                tickMarks
                input$aria-label="x"
            />
            <span
                slot="label"
                style="padding-right: 5px; width: max-content; display: block;"
            >
                X
            </span>
        </FormField>
    </div>
    <div class="values">
        <div class="maxValue"><span>Slope</span> <strong>{-derivative.toFixed(2)}</strong></div>
        <!-- <div class="currentValue"><span>Upper Limit</span> <strong>{upperLimit.toFixed(2)}</strong> </div> -->
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
        <p>This application shows that at extremal points, the slope of the tangent becomes zero. Use the slider to move along the function.</p>
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
    /* .options {
        display: flex;
        margin: auto;
        width: 100%;
        align-items: center;
        justify-content: center;
    } */
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
