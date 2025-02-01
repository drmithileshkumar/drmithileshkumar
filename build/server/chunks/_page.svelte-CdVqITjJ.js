import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from './ssr2-CDgUAJs6.js';
import { C as Content, A as ActionButtons } from './ActionIcons-Bx2zL88O.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import './client-k3u4ChD_.js';
import { D as Dialog } from './Dialog-DnxCTH9Z.js';
import { T as Title, C as Content$1, A as Actions } from './Actions2-D_E0WmBW.js';
import { r as randInt } from './common-CIVVH1Lv.js';
import { L as Linear2 } from './linear2-BPefBxlj.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { c as currentPath } from './stores5-CI5tJYhk.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './Ripple-N--aPaMn.js';
import './exports-kR70XCWV.js';
import './index2-D2s-XE5r.js';
import './prefixFilter-B6cFZsw3.js';
import './fraction-DfHHiAXd.js';
import './nt-DokVuTcK.js';
import './sets-jGIduNNd.js';

const css$1 = {
  code: '.hflex.svelte-lwk5kv{display:grid;grid-template-areas:"topleft top topright"\r\n            "left shape right"\r\n            "bottomleft bottom bottomright";align-items:center;justify-content:center}.centerFlex.svelte-lwk5kv{display:flex;align-items:center;justify-content:center;background-color:rgba(255, 255, 255, 0.1);cursor:pointer}.topleft.svelte-lwk5kv{grid-area:topleft}.top.svelte-lwk5kv{grid-area:top}.topright.svelte-lwk5kv{grid-area:topright}.left.svelte-lwk5kv{grid-area:left;height:310px}.right.svelte-lwk5kv{grid-area:right;height:310px}.bottomleft.svelte-lwk5kv{grid-area:bottomleft}.bottom.svelte-lwk5kv{grid-area:bottom}.bottomright.svelte-lwk5kv{grid-area:bottomright}.shape.svelte-lwk5kv{grid-area:shape;display:flex;align-items:center;justify-content:center;border:1px solid teal;padding:1em;flex-direction:column;width:310px;height:310px;position:relative}.values.svelte-lwk5kv{display:flex;align-items:center;justify-content:center;flex-direction:column}.maxValue.svelte-lwk5kv,.currentValue.svelte-lwk5kv{display:flex;;;gap:0.5em;justify-content:space-between;width:300px}.katex{color:currentcolor}article.svelte-lwk5kv,.topleft.svelte-lwk5kv,.top.svelte-lwk5kv,.topright.svelte-lwk5kv,.left.svelte-lwk5kv,.right.svelte-lwk5kv,.bottomleft.svelte-lwk5kv,.bottom.svelte-lwk5kv,.bottomright.svelte-lwk5kv{-webkit-touch-callout:none !important;-webkit-user-select:none !important;user-select:none !important}.actions.svelte-lwk5kv{width:100%;display:flex;margin:auto;align-items:center;justify-content:center}',
  map: `{"version":3,"file":"LP.svelte","sources":["LP.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from \\"@smui/card\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import Ripple from '@smui/ripple';\\r\\n    import Dialog, { Title, Content, Actions } from \\"@smui/dialog\\";\\r\\n    import {randInt} from '$lib/mathril/utils/matlib/common';\\r\\n    \\r\\n    import { Linear2 } from '$lib/mathril/utils/matlib/linear2';\\r\\n    import { typeset } from \\"$lib/mathril/shared/typeset\\";\\r\\n    let region, svg, dot = {\\r\\n        x: 0,\\r\\n        y: 0\\r\\n    };\\r\\n    let maxDot = {\\r\\n        x: 0,\\r\\n        y: 0\\r\\n    }\\r\\n    \\r\\n    let open = false;\\r\\n    \\r\\n    let eqn;\\r\\n    let dotColor = 'currentColor'\\r\\n    let obj = new Linear2();\\r\\n    obj.randL(-10, 10);\\r\\n    let maxValue = -200 * Math.abs(obj.a) - 200 * Math.abs(obj.b) - Math.abs(obj.c);\\r\\n    \\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n        setTimeout(() => {\\r\\n            renderMathInElement(panel, {\\r\\n                delimiters: [\\r\\n                    { left: \\"$$\\", right: \\"$$\\", display: true },\\r\\n                    { left: \\"$\\", right: \\"$\\", display: false },\\r\\n                    { left: \\"\\\\\\\\(\\", right: \\"\\\\\\\\)\\", display: false },\\r\\n                    { left: \\"\\\\\\\\[\\", right: \\"\\\\\\\\]\\", display: true },\\r\\n                ],\\r\\n                // • rendering keys, e.g.:\\r\\n                throwOnError: false,\\r\\n            });\\r\\n        }, 0);\\r\\n    }\\r\\n    const vertices = (r, n) => {\\r\\n        let avg = 360 / n;\\r\\n        let d = avg / 2;\\r\\n        let angles = [];\\r\\n        for(let i = 0; i < n; i++) {\\r\\n            angles.push(i * avg + randInt(Math.floor(d), -Math.floor(d)));\\r\\n        }\\r\\n        \\r\\n        \\r\\n        let v = []\\r\\n        for(let i = 0; i < n ; i++) {\\r\\n            v.push({\\r\\n                x: r * Math.cos(angles[i] * Math.PI / 180),\\r\\n                y: r * Math.sin(angles[i] * Math.PI / 180)\\r\\n            })\\r\\n        }\\r\\n        return v;\\r\\n    }\\r\\n    let points = (v) => {\\r\\n        let pts = \\"\\";\\r\\n        let tmp = v.map(p => p.x + ',' + p.y);\\r\\n        pts = tmp.join(' ');\\r\\n        return pts;\\r\\n    }\\r\\n    let regionPoints = \\"\\";\\r\\n    const generateConvex = () => {\\r\\n        dot = {\\r\\n            x: 0,\\r\\n            y: 0\\r\\n        };\\r\\n        maxDot = {\\r\\n            x: 0,\\r\\n            y: 0\\r\\n        }\\r\\n        let r = 150;\\r\\n        let n = randInt(8, 3)\\r\\n        let vts = vertices(r, n);\\r\\n        let pts = points(vts);\\r\\n        regionPoints = pts;\\r\\n        return pts;\\r\\n    }\\r\\n    regionPoints = generateConvex()\\r\\n    let continuousMove = (node) => {\\r\\n        node.addEventListener(\\"contextmenu\\", (e) => {e.preventDefault()});\\r\\n        node.addEventListener(\\"pointerdown\\", startDrag, false);\\r\\n        node.addEventListener(\\"pointerup\\", endDrag, false);\\r\\n        let isPressed = false;\\r\\n        let moveTimer;\\r\\n        let delta = 0.1;\\r\\n        let speed = 1;\\r\\n        function startDrag(evt) {\\r\\n            isPressed = true;\\r\\n            \\r\\n            if(evt.target.classList.contains('top') || evt.target.parentNode.classList.contains('top')) {\\r\\n                moveTimer = setInterval(() => {if(dot.y > -155) {\\r\\n                    dot.y -= delta;\\r\\n                    dot = dot;\\r\\n                }}, speed);\\r\\n            } else if(evt.target.classList.contains('bottom') || evt.target.parentNode.classList.contains('bottom')) {\\r\\n                moveTimer = setInterval(() => {\\r\\n                    if(dot.y < 155) {\\r\\n                        dot.y += delta;\\r\\n                        dot = dot;\\r\\n                    }\\r\\n                }, speed);\\r\\n            } else if(evt.target.classList.contains('left') || evt.target.parentNode.classList.contains('left')) {\\r\\n                moveTimer = setInterval(() => {\\r\\n                    if(dot.x > -155) {\\r\\n                        dot.x -= delta;\\r\\n                        dot = dot;\\r\\n                    }\\r\\n                }, speed);\\r\\n            } else if(evt.target.classList.contains('right') || evt.target.parentNode.classList.contains('right')) {\\r\\n                moveTimer = setInterval(() => {\\r\\n                    if(dot.x < 155) {\\r\\n                        dot.x += delta;\\r\\n                        dot = dot;\\r\\n                    }\\r\\n                }, speed);\\r\\n            } else if(evt.target.classList.contains('topleft') || evt.target.parentNode.classList.contains('topleft')) {\\r\\n                moveTimer = setInterval(() => {\\r\\n                    if(dot.x > -155 && dot.y > -155) {\\r\\n                        dot.x -= delta;\\r\\n                        dot.y -= delta;\\r\\n                        dot = dot;\\r\\n                    }\\r\\n                }, speed);\\r\\n            } else if(evt.target.classList.contains('topright') || evt.target.parentNode.classList.contains('topright')) {\\r\\n                moveTimer = setInterval(() => {\\r\\n                    if(dot.x < 155 && dot.y > -155) {\\r\\n                        dot.x += delta;\\r\\n                        dot.y -= delta;\\r\\n                        dot = dot;\\r\\n                    }\\r\\n                }, speed);\\r\\n            } else if(evt.target.classList.contains('bottomleft') || evt.target.parentNode.classList.contains('bottomleft')) {\\r\\n                moveTimer = setInterval(() => {\\r\\n                    if(dot.x > -155 && dot.y < 155) {\\r\\n                        dot.x -= delta;\\r\\n                        dot.y += delta;\\r\\n                        dot = dot;\\r\\n                    }\\r\\n                }, speed);\\r\\n            } else if(evt.target.classList.contains('bottomright') || evt.target.parentNode.classList.contains('bottomright')) {\\r\\n                moveTimer = setInterval(() => {\\r\\n                    if(dot.x < 155 && dot.y < 155) {\\r\\n                        dot.x += delta;\\r\\n                        dot.y += delta;\\r\\n                        dot = dot;\\r\\n                    }\\r\\n                }, speed);\\r\\n            } \\r\\n            dot = dot;\\r\\n        }\\r\\n        function endDrag(evt) {\\r\\n            isPressed = false;\\r\\n            clearInterval(moveTimer)\\r\\n        }\\r\\n    }\\r\\n    const isFeasible = (x, y) => {\\r\\n        if(!browser) return true;\\r\\n        try {\\r\\n            let p = new DOMPoint(x, y);\\r\\n            return region.isPointInFill(p) || region.isPointInStroke(p)\\r\\n        } catch (error) {\\r\\n            if(!svg) return true;\\r\\n            let p = svg.createSVGPoint();\\r\\n            p.x = x;\\r\\n            p.y = y;\\r\\n            return region.isPointInFill(p) || region.isPointInStroke(p);\\r\\n        }\\r\\n    }\\r\\n    \\r\\n    const objective = () => {\\r\\n        // regionPoints = generateConvex()\\r\\n        dot = {\\r\\n            x: 0,\\r\\n            y: 0\\r\\n        };\\r\\n        maxDot = {\\r\\n            x: 0,\\r\\n            y: 0\\r\\n        }\\r\\n        obj = new Linear2();\\r\\n        obj.randL(-10, 10);\\r\\n        maxValue = -200 * Math.abs(obj.a) - 200 * Math.abs(obj.b) - Math.abs(obj.c);\\r\\n        setTimeout(() => {\\r\\n            renderMathInElement(eqn, {\\r\\n                delimiters: [\\r\\n                    { left: \\"$$\\", right: \\"$$\\", display: true },\\r\\n                    { left: \\"$\\", right: \\"$\\", display: false },\\r\\n                    { left: \\"\\\\\\\\(\\", right: \\"\\\\\\\\)\\", display: false },\\r\\n                    { left: \\"\\\\\\\\[\\", right: \\"\\\\\\\\]\\", display: true },\\r\\n                ],\\r\\n                // • rendering keys, e.g.:\\r\\n                throwOnError: false,\\r\\n            });\\r\\n        }, 0);\\r\\n    }\\r\\n    \\r\\n    $: dotColor = isFeasible(dot.x, dot.y) ? 'currentColor' : 'red';\\r\\n    $: currentValue = obj.value(dot.x, dot.y);\\r\\n    $: {\\r\\n        if(dotColor !== 'red' && currentValue > maxValue) {\\r\\n            maxValue = currentValue;\\r\\n            maxDot.x = dot.x;\\r\\n            maxDot.y = dot.y;\\r\\n            maxDot = maxDot;\\r\\n        }\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline3\\" style=\\"text-align:center;margin:0 0 0.5em 0\\">\\r\\n        Linear Programming\\r\\n    </h1>\\r\\n    {#key obj}\\r\\n        <h1 class=\\"mdc-typography--headline5\\" style=\\"text-align:center;margin:0 0 0.5em 0\\" bind:this={eqn} use:typeset>\\r\\n            Maximize {\`\\\\\\\\(\${obj.str()}\\\\\\\\)\`}\\r\\n        </h1>\\r\\n    {/key}\\r\\n    <div class=\\"hflex\\">\\r\\n        <!-- <div class=\\"blank\\"></div> -->\\r\\n        <div class=\\"topleft centerFlex\\" use:Ripple={{ surface: true, color: 'primary' }} tabindex=\\"0\\" role=\\"button\\" use:continuousMove>\\r\\n            <span class=\\"material-symbols-outlined\\" style=\\"transform: rotate(-45deg)\\">keyboard_arrow_up</span>\\r\\n        </div>\\r\\n        <div class=\\"top centerFlex\\" use:Ripple={{ surface: true, color: 'primary' }} tabindex=\\"0\\" role=\\"button\\" use:continuousMove>\\r\\n            <span class=\\"material-symbols-outlined\\">keyboard_arrow_up</span>\\r\\n        </div>\\r\\n        <div class=\\"topright centerFlex\\" use:Ripple={{ surface: true, color: 'primary' }} tabindex=\\"0\\" role=\\"button\\" use:continuousMove>\\r\\n            <span class=\\"material-symbols-outlined\\" style=\\"transform: rotate(45deg)\\">keyboard_arrow_up</span>\\r\\n        </div>\\r\\n        <div class=\\"left centerFlex\\" use:Ripple={{ surface: true, color: 'primary' }} tabindex=\\"0\\" role=\\"button\\" use:continuousMove>\\r\\n            <span class=\\"material-symbols-outlined\\">keyboard_arrow_left</span>\\r\\n        </div>\\r\\n        <div class=\\"shape\\">\\r\\n            <svg bind:this={svg} width=\\"310\\" height=\\"310\\" viewBox=\\"-155 -155 310 310\\">\\r\\n                <defs>\\r\\n                    <marker\\r\\n                        id=\\"dot\\"\\r\\n                        viewBox=\\"0 0 10 10\\"\\r\\n                        refX=\\"5\\"\\r\\n                        refY=\\"5\\"\\r\\n                        markerWidth=\\"5\\"\\r\\n                        markerHeight=\\"5\\">\\r\\n                        <circle cx=\\"5\\" cy=\\"5\\" r=\\"5\\" fill=\\"goldenrod\\" />\\r\\n                    </marker>\\r\\n                </defs>\\r\\n                {#key regionPoints}\\r\\n                    <polygon bind:this={region} points={regionPoints} stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"rgba(0, 150, 200, 0.5)\\" marker-start=\\"url(#dot)\\" marker-mid=\\"url(#dot)\\"/>\\r\\n                {/key}\\r\\n                <circle r=\\"5\\" cx={dot.x} cy={dot.y} fill={dotColor} />\\r\\n                <circle r=\\"5\\" cx={maxDot.x} cy={maxDot.y} fill=\\"green\\" />\\r\\n            </svg>\\r\\n        </div>\\r\\n        <div class=\\"right centerFlex\\" use:Ripple={{ surface: true, color: 'primary' }} tabindex=\\"0\\" role=\\"button\\" use:continuousMove>\\r\\n            <span class=\\"material-symbols-outlined\\">keyboard_arrow_right</span>\\r\\n        </div>\\r\\n        <div class=\\"bottomleft centerFlex\\" use:Ripple={{ surface: true, color: 'primary' }} tabindex=\\"0\\" role=\\"button\\" use:continuousMove>\\r\\n            <span class=\\"material-symbols-outlined\\" style=\\"transform: rotate(-135deg)\\">keyboard_arrow_up</span>\\r\\n        </div>\\r\\n        <div class=\\"bottom centerFlex\\" use:Ripple={{ surface: true, color: 'primary' }} tabindex=\\"0\\" role=\\"button\\" use:continuousMove>\\r\\n            <span class=\\"material-symbols-outlined\\">keyboard_arrow_down</span>\\r\\n        </div>\\r\\n        <div class=\\"bottomright centerFlex\\" use:Ripple={{ surface: true, color: 'primary' }} tabindex=\\"0\\" role=\\"button\\" use:continuousMove>\\r\\n            <span class=\\"material-symbols-outlined\\" style=\\"transform: rotate(135deg)\\">keyboard_arrow_up</span>\\r\\n        </div>\\r\\n    </div>\\r\\n    <br>\\r\\n    <div class=\\"values\\">\\r\\n        <div class=\\"maxValue\\"><span>Max Value (so far)</span> <strong style=\\"color:green;\\">{maxValue.toFixed(2)}</strong></div>\\r\\n        <div class=\\"currentValue\\"><span>Current Value</span> <strong>{currentValue.toFixed(2)}</strong> </div>\\r\\n    </div>\\r\\n    <br>\\r\\n    <div class=\\"actions\\">\\r\\n        <Button  on:click={objective}>New Objective</Button>\\r\\n        <Button  on:click={generateConvex}>New Region</Button>\\r\\n    </div>\\r\\n    \\r\\n</article>\\r\\n<Dialog\\r\\n    bind:open\\r\\n    aria-labelledby=\\"simple-title\\"\\r\\n    aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n    <Title id=\\"simple-title\\">How to play</Title>\\r\\n    <Content id=\\"simple-content\\">\\r\\n        <p>This application shows that extremal value of a linear program occurs at the vertices of the feasible region which is convex.</p>\\r\\n        <p>\\r\\n            Click on NEW OBJECTIVE to generate new objective function and on NEW REGION to generate new feasible region.\\r\\n        </p>\\r\\n        <p>\\r\\n            Use arrows to move the dot in the center. At the location of the dot, the value of the objective function is shown below.\\r\\n        </p>\\r\\n        <p>\\r\\n            The current value is the value of the objective function at the given position and Max Value is the maximum value obtained so far.\\r\\n        </p>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => (open = false)}>\\r\\n            <Label>Done</Label>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Dialog>\\r\\n\\r\\n<style>\\r\\n    .hflex {\\r\\n        display: grid;\\r\\n        grid-template-areas: \\r\\n            \\"topleft top topright\\"\\r\\n            \\"left shape right\\"\\r\\n            \\"bottomleft bottom bottomright\\";\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        /* width: fit-content; */\\r\\n    }\\r\\n    .centerFlex {\\r\\n        display:flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        background-color: rgba(255, 255, 255, 0.1);\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .topleft {\\r\\n        grid-area: topleft;\\r\\n    }\\r\\n    .top {\\r\\n        grid-area: top;\\r\\n        \\r\\n    }\\r\\n    .topright {\\r\\n        grid-area: topright;\\r\\n    }\\r\\n    .left {\\r\\n        grid-area: left;\\r\\n        height: 310px;\\r\\n    }\\r\\n    .right {\\r\\n        grid-area: right;\\r\\n        height: 310px;\\r\\n    }\\r\\n    .bottomleft {\\r\\n        grid-area: bottomleft;\\r\\n    }\\r\\n    .bottom {\\r\\n        grid-area: bottom;\\r\\n    }\\r\\n    .bottomright {\\r\\n        grid-area: bottomright;\\r\\n    }\\r\\n    .shape {\\r\\n        grid-area: shape;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        padding: 1em;\\r\\n        flex-direction: column;\\r\\n        width: 310px;\\r\\n        height: 310px;\\r\\n        position: relative;\\r\\n    }\\r\\n    .values {\\r\\n        display:flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .maxValue, .currentValue {\\r\\n        display: flex;;\\r\\n        gap: 0.5em;\\r\\n        justify-content: space-between;\\r\\n        width: 300px;\\r\\n    }\\r\\n    :global(.katex) {\\r\\n        color: currentcolor;\\r\\n    }\\r\\n    article, .topleft, .top, .topright, .left, .right, .bottomleft, .bottom, .bottomright {\\r\\n        -webkit-touch-callout: none !important; \\r\\n        -webkit-user-select: none !important; \\r\\n        user-select: none !important;\\r\\n    }\\r\\n    .actions {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        margin: auto;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0TI,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,mBAAmB,CACf,sBAAsB;AAClC,YAAY,kBAAkB;AAC9B,YAAY,+BAA+B,CACnC,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAErB,CACA,yBAAY,CACR,QAAQ,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,MAAM,CAAE,OACZ,CACA,sBAAS,CACL,SAAS,CAAE,OACf,CACA,kBAAK,CACD,SAAS,CAAE,GAEf,CACA,uBAAU,CACN,SAAS,CAAE,QACf,CACA,mBAAM,CACF,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,KACZ,CACA,oBAAO,CACH,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,KACZ,CACA,yBAAY,CACR,SAAS,CAAE,UACf,CACA,qBAAQ,CACJ,SAAS,CAAE,MACf,CACA,0BAAa,CACT,SAAS,CAAE,WACf,CACA,oBAAO,CACH,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CACZ,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QACd,CACA,qBAAQ,CACJ,QAAQ,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,MACpB,CACA,uBAAS,CAAE,2BAAc,CACrB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,GAAG,CAAE,KAAK,CACV,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,KACX,CACQ,MAAQ,CACZ,KAAK,CAAE,YACX,CACA,qBAAO,CAAE,sBAAQ,CAAE,kBAAI,CAAE,uBAAS,CAAE,mBAAK,CAAE,oBAAM,CAAE,yBAAW,CAAE,qBAAO,CAAE,0BAAa,CAClF,qBAAqB,CAAE,IAAI,CAAC,UAAU,CACtC,mBAAmB,CAAE,IAAI,CAAC,UAAU,CACpC,WAAW,CAAE,IAAI,CAAC,UACtB,CACA,sBAAS,CACL,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}`
};
const LP = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentValue;
  let region, svg, dot = { x: 0, y: 0 };
  let maxDot = { x: 0, y: 0 };
  let open = false;
  let eqn;
  let dotColor = "currentColor";
  let obj = new Linear2();
  obj.randL(-10, 10);
  let maxValue = -200 * Math.abs(obj.a) - 200 * Math.abs(obj.b) - Math.abs(obj.c);
  let panel;
  const vertices = (r, n) => {
    let avg = 360 / n;
    let d = avg / 2;
    let angles = [];
    for (let i = 0; i < n; i++) {
      angles.push(i * avg + randInt(Math.floor(d), -Math.floor(d)));
    }
    let v = [];
    for (let i = 0; i < n; i++) {
      v.push({
        x: r * Math.cos(angles[i] * Math.PI / 180),
        y: r * Math.sin(angles[i] * Math.PI / 180)
      });
    }
    return v;
  };
  let points = (v) => {
    let pts = "";
    let tmp = v.map((p) => p.x + "," + p.y);
    pts = tmp.join(" ");
    return pts;
  };
  let regionPoints = "";
  const generateConvex = () => {
    dot = { x: 0, y: 0 };
    maxDot = { x: 0, y: 0 };
    let r = 150;
    let n = randInt(8, 3);
    let vts = vertices(r, n);
    let pts = points(vts);
    regionPoints = pts;
    return pts;
  };
  regionPoints = generateConvex();
  const isFeasible = (x, y) => {
    return true;
  };
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    dotColor = isFeasible(dot.x, dot.y) ? "currentColor" : "red";
    currentValue = obj.value(dot.x, dot.y);
    {
      {
        if (dotColor !== "red" && currentValue > maxValue) {
          maxValue = currentValue;
          maxDot.x = dot.x;
          maxDot.y = dot.y;
          maxDot = maxDot;
        }
      }
    }
    $$rendered = `<article class="svelte-lwk5kv"${add_attribute("this", panel, 0)}>${validate_component(ActionButtons, "ActionButtons").$$render($$result, { style: "justify-content:space-between;" }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Help`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `More games`;
          }
        })}`;
      }
    })} <h1 class="mdc-typography--headline3" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-u6crta">Linear Programming</h1> <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0"${add_attribute("this", eqn, 0)}>Maximize ${escape(`\\(${obj.str()}\\)`)}</h1> <div class="hflex svelte-lwk5kv"> <div class="topleft centerFlex svelte-lwk5kv" tabindex="0" role="button" data-svelte-h="svelte-nr3pfi"><span class="material-symbols-outlined" style="transform: rotate(-45deg)">keyboard_arrow_up</span></div> <div class="top centerFlex svelte-lwk5kv" tabindex="0" role="button" data-svelte-h="svelte-194lhn"><span class="material-symbols-outlined">keyboard_arrow_up</span></div> <div class="topright centerFlex svelte-lwk5kv" tabindex="0" role="button" data-svelte-h="svelte-15wl6h0"><span class="material-symbols-outlined" style="transform: rotate(45deg)">keyboard_arrow_up</span></div> <div class="left centerFlex svelte-lwk5kv" tabindex="0" role="button" data-svelte-h="svelte-w7wcib"><span class="material-symbols-outlined">keyboard_arrow_left</span></div> <div class="shape svelte-lwk5kv"><svg width="310" height="310" viewBox="-155 -155 310 310"${add_attribute("this", svg, 0)}><defs><marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"><circle cx="5" cy="5" r="5" fill="goldenrod"></circle></marker></defs><polygon${add_attribute("points", regionPoints, 0)} stroke="currentColor" stroke-width="2" fill="rgba(0, 150, 200, 0.5)" marker-start="url(#dot)" marker-mid="url(#dot)"${add_attribute("this", region, 0)}></polygon><circle r="5"${add_attribute("cx", dot.x, 0)}${add_attribute("cy", dot.y, 0)}${add_attribute("fill", dotColor, 0)}></circle><circle r="5"${add_attribute("cx", maxDot.x, 0)}${add_attribute("cy", maxDot.y, 0)} fill="green"></circle></svg></div> <div class="right centerFlex svelte-lwk5kv" tabindex="0" role="button" data-svelte-h="svelte-ubxx8x"><span class="material-symbols-outlined">keyboard_arrow_right</span></div> <div class="bottomleft centerFlex svelte-lwk5kv" tabindex="0" role="button" data-svelte-h="svelte-rsy888"><span class="material-symbols-outlined" style="transform: rotate(-135deg)">keyboard_arrow_up</span></div> <div class="bottom centerFlex svelte-lwk5kv" tabindex="0" role="button" data-svelte-h="svelte-4faq28"><span class="material-symbols-outlined">keyboard_arrow_down</span></div> <div class="bottomright centerFlex svelte-lwk5kv" tabindex="0" role="button" data-svelte-h="svelte-1fqxfi6"><span class="material-symbols-outlined" style="transform: rotate(135deg)">keyboard_arrow_up</span></div></div> <br> <div class="values svelte-lwk5kv"><div class="maxValue svelte-lwk5kv"><span data-svelte-h="svelte-1kzji8h">Max Value (so far)</span> <strong style="color:green;">${escape(maxValue.toFixed(2))}</strong></div> <div class="currentValue svelte-lwk5kv"><span data-svelte-h="svelte-1udezle">Current Value</span> <strong>${escape(currentValue.toFixed(2))}</strong></div></div> <br> <div class="actions svelte-lwk5kv">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `New Objective`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `New Region`;
      }
    })}</div></article> ${validate_component(Dialog, "Dialog").$$render(
      $$result,
      {
        "aria-labelledby": "simple-title",
        "aria-describedby": "simple-content",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, { id: "simple-title" }, {}, {
            default: () => {
              return `How to play`;
            }
          })} ${validate_component(Content$1, "Content").$$render($$result, { id: "simple-content" }, {}, {
            default: () => {
              return `<p data-svelte-h="svelte-hdp9so">This application shows that extremal value of a linear program occurs at the vertices of the feasible region which is convex.</p> <p data-svelte-h="svelte-mnp4n4">Click on NEW OBJECTIVE to generate new objective function and on NEW REGION to generate new feasible region.</p> <p data-svelte-h="svelte-1chg585">Use arrows to move the dot in the center. At the location of the dot, the value of the objective function is shown below.</p> <p data-svelte-h="svelte-ndm587">The current value is the value of the objective function at the given position and Max Value is the maximum value obtained so far.</p>`;
            }
          })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Done`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "article.svelte-1ky3d6z{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import LP from '$lib/mathril/games/LP.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Linear Programming\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <LP />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Linear Programming", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(LP, "LP").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CdVqITjJ.js.map
