<script lang="ts">
    //@ts-nocheck
    import { ActionButtons } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Ripple from '@smui/ripple';
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import {randInt} from '$lib/mathril/utils/matlib/common';
    
    import { Linear2 } from '$lib/mathril/utils/matlib/linear2';
    import { typeset } from "$lib/mathril/shared/typeset";
    let region, svg, dot = {
        x: 0,
        y: 0
    };
    let maxDot = {
        x: 0,
        y: 0
    }
    
    let open = false;
    
    let eqn;
    let dotColor = 'currentColor'
    let obj = new Linear2();
    obj.randL(-10, 10);
    let maxValue = -200 * Math.abs(obj.a) - 200 * Math.abs(obj.b) - Math.abs(obj.c);
    
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
    const vertices = (r, n) => {
        let avg = 360 / n;
        let d = avg / 2;
        let angles = [];
        for(let i = 0; i < n; i++) {
            angles.push(i * avg + randInt(Math.floor(d), -Math.floor(d)));
        }
        
        
        let v = []
        for(let i = 0; i < n ; i++) {
            v.push({
                x: r * Math.cos(angles[i] * Math.PI / 180),
                y: r * Math.sin(angles[i] * Math.PI / 180)
            })
        }
        return v;
    }
    let points = (v) => {
        let pts = "";
        let tmp = v.map(p => p.x + ',' + p.y);
        pts = tmp.join(' ');
        return pts;
    }
    let regionPoints = "";
    const generateConvex = () => {
        dot = {
            x: 0,
            y: 0
        };
        maxDot = {
            x: 0,
            y: 0
        }
        let r = 150;
        let n = randInt(8, 3)
        let vts = vertices(r, n);
        let pts = points(vts);
        regionPoints = pts;
        return pts;
    }
    regionPoints = generateConvex()
    let continuousMove = (node) => {
        node.addEventListener("contextmenu", (e) => {e.preventDefault()});
        node.addEventListener("pointerdown", startDrag, false);
        node.addEventListener("pointerup", endDrag, false);
        let isPressed = false;
        let moveTimer;
        let delta = 0.1;
        let speed = 1;
        function startDrag(evt) {
            isPressed = true;
            
            if(evt.target.classList.contains('top') || evt.target.parentNode.classList.contains('top')) {
                moveTimer = setInterval(() => {if(dot.y > -155) {
                    dot.y -= delta;
                    dot = dot;
                }}, speed);
            } else if(evt.target.classList.contains('bottom') || evt.target.parentNode.classList.contains('bottom')) {
                moveTimer = setInterval(() => {
                    if(dot.y < 155) {
                        dot.y += delta;
                        dot = dot;
                    }
                }, speed);
            } else if(evt.target.classList.contains('left') || evt.target.parentNode.classList.contains('left')) {
                moveTimer = setInterval(() => {
                    if(dot.x > -155) {
                        dot.x -= delta;
                        dot = dot;
                    }
                }, speed);
            } else if(evt.target.classList.contains('right') || evt.target.parentNode.classList.contains('right')) {
                moveTimer = setInterval(() => {
                    if(dot.x < 155) {
                        dot.x += delta;
                        dot = dot;
                    }
                }, speed);
            } else if(evt.target.classList.contains('topleft') || evt.target.parentNode.classList.contains('topleft')) {
                moveTimer = setInterval(() => {
                    if(dot.x > -155 && dot.y > -155) {
                        dot.x -= delta;
                        dot.y -= delta;
                        dot = dot;
                    }
                }, speed);
            } else if(evt.target.classList.contains('topright') || evt.target.parentNode.classList.contains('topright')) {
                moveTimer = setInterval(() => {
                    if(dot.x < 155 && dot.y > -155) {
                        dot.x += delta;
                        dot.y -= delta;
                        dot = dot;
                    }
                }, speed);
            } else if(evt.target.classList.contains('bottomleft') || evt.target.parentNode.classList.contains('bottomleft')) {
                moveTimer = setInterval(() => {
                    if(dot.x > -155 && dot.y < 155) {
                        dot.x -= delta;
                        dot.y += delta;
                        dot = dot;
                    }
                }, speed);
            } else if(evt.target.classList.contains('bottomright') || evt.target.parentNode.classList.contains('bottomright')) {
                moveTimer = setInterval(() => {
                    if(dot.x < 155 && dot.y < 155) {
                        dot.x += delta;
                        dot.y += delta;
                        dot = dot;
                    }
                }, speed);
            } 
            dot = dot;
        }
        function endDrag(evt) {
            isPressed = false;
            clearInterval(moveTimer)
        }
    }
    const isFeasible = (x, y) => {
        if(!browser) return true;
        try {
            let p = new DOMPoint(x, y);
            return region.isPointInFill(p) || region.isPointInStroke(p)
        } catch (error) {
            if(!svg) return true;
            let p = svg.createSVGPoint();
            p.x = x;
            p.y = y;
            return region.isPointInFill(p) || region.isPointInStroke(p);
        }
    }
    
    const objective = () => {
        // regionPoints = generateConvex()
        dot = {
            x: 0,
            y: 0
        };
        maxDot = {
            x: 0,
            y: 0
        }
        obj = new Linear2();
        obj.randL(-10, 10);
        maxValue = -200 * Math.abs(obj.a) - 200 * Math.abs(obj.b) - Math.abs(obj.c);
        setTimeout(() => {
            renderMathInElement(eqn, {
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
    
    $: dotColor = isFeasible(dot.x, dot.y) ? 'currentColor' : 'red';
    $: currentValue = obj.value(dot.x, dot.y);
    $: {
        if(dotColor !== 'red' && currentValue > maxValue) {
            maxValue = currentValue;
            maxDot.x = dot.x;
            maxDot.y = dot.y;
            maxDot = maxDot;
        }
    }
</script>

<article bind:this={panel}>
    <ActionButtons style="justify-content:space-between;">
        <Button on:click={() => open = true}>Help</Button>
        <Button on:click={() => goto('/mathril/games')}>More games</Button>
      </ActionButtons>
    <h1 class="mdc-typography--headline3" style="text-align:center;margin:0 0 0.5em 0">
        Linear Programming
    </h1>
    {#key obj}
        <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0" bind:this={eqn} use:typeset>
            Maximize {`\\(${obj.str()}\\)`}
        </h1>
    {/key}
    <div class="hflex">
        <!-- <div class="blank"></div> -->
        <div class="topleft centerFlex" use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button" use:continuousMove>
            <span class="material-symbols-outlined" style="transform: rotate(-45deg)">keyboard_arrow_up</span>
        </div>
        <div class="top centerFlex" use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button" use:continuousMove>
            <span class="material-symbols-outlined">keyboard_arrow_up</span>
        </div>
        <div class="topright centerFlex" use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button" use:continuousMove>
            <span class="material-symbols-outlined" style="transform: rotate(45deg)">keyboard_arrow_up</span>
        </div>
        <div class="left centerFlex" use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button" use:continuousMove>
            <span class="material-symbols-outlined">keyboard_arrow_left</span>
        </div>
        <div class="shape">
            <svg bind:this={svg} width="310" height="310" viewBox="-155 -155 310 310">
                <defs>
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
                {#key regionPoints}
                    <polygon bind:this={region} points={regionPoints} stroke="currentColor" stroke-width="2" fill="rgba(0, 150, 200, 0.5)" marker-start="url(#dot)" marker-mid="url(#dot)"/>
                {/key}
                <circle r="5" cx={dot.x} cy={dot.y} fill={dotColor} />
                <circle r="5" cx={maxDot.x} cy={maxDot.y} fill="green" />
            </svg>
        </div>
        <div class="right centerFlex" use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button" use:continuousMove>
            <span class="material-symbols-outlined">keyboard_arrow_right</span>
        </div>
        <div class="bottomleft centerFlex" use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button" use:continuousMove>
            <span class="material-symbols-outlined" style="transform: rotate(-135deg)">keyboard_arrow_up</span>
        </div>
        <div class="bottom centerFlex" use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button" use:continuousMove>
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
        <div class="bottomright centerFlex" use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button" use:continuousMove>
            <span class="material-symbols-outlined" style="transform: rotate(135deg)">keyboard_arrow_up</span>
        </div>
    </div>
    <br>
    <div class="values">
        <div class="maxValue"><span>Max Value (so far)</span> <strong style="color:green;">{maxValue.toFixed(2)}</strong></div>
        <div class="currentValue"><span>Current Value</span> <strong>{currentValue.toFixed(2)}</strong> </div>
    </div>
    <br>
    <div class="actions">
        <Button  on:click={objective}>New Objective</Button>
        <Button  on:click={generateConvex}>New Region</Button>
    </div>
    
</article>
<Dialog
    bind:open
    aria-labelledby="simple-title"
    aria-describedby="simple-content"
>
    <Title id="simple-title">How to play</Title>
    <Content id="simple-content">
        <p>This application shows that extremal value of a linear program occurs at the vertices of the feasible region which is convex.</p>
        <p>
            Click on NEW OBJECTIVE to generate new objective function and on NEW REGION to generate new feasible region.
        </p>
        <p>
            Use arrows to move the dot in the center. At the location of the dot, the value of the objective function is shown below.
        </p>
        <p>
            The current value is the value of the objective function at the given position and Max Value is the maximum value obtained so far.
        </p>
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
    .centerFlex {
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }
    .topleft {
        grid-area: topleft;
    }
    .top {
        grid-area: top;
        
    }
    .topright {
        grid-area: topright;
    }
    .left {
        grid-area: left;
        height: 310px;
    }
    .right {
        grid-area: right;
        height: 310px;
    }
    .bottomleft {
        grid-area: bottomleft;
    }
    .bottom {
        grid-area: bottom;
    }
    .bottomright {
        grid-area: bottomright;
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
    .values {
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .maxValue, .currentValue {
        display: flex;;
        gap: 0.5em;
        justify-content: space-between;
        width: 300px;
    }
    :global(.katex) {
        color: currentcolor;
    }
    article, .topleft, .top, .topright, .left, .right, .bottomleft, .bottom, .bottomright {
        -webkit-touch-callout: none !important; 
        -webkit-user-select: none !important; 
        user-select: none !important;
    }
    .actions {
        width: 100%;
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
    }
</style>
