import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from './ssr2-q3O0l93f.js';
import { C as Content, A as ActionButtons } from './ActionIcons-BJ7xikju.js';
import { S as Slider } from './Slider-CemaSOV2.js';
import { F as FormField } from './FormField-CZITmeEd.js';
import { B as Button } from './Button-DRRmGjqZ.js';
import { C as CommonLabel } from './CommonLabel-BuPx8XxF.js';
import './client-k3u4ChD_.js';
import { D as Dialog } from './Dialog-BiqQGBu2.js';
import { T as Title, C as Content$1, A as Actions } from './Actions2-DHH8wTTf.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { c as currentPath } from './stores5-DsHYdTD6.js';
import './classAdderBuilder-B9W9nXDD.js';
import './SmuiElement-DA9PKsv2.js';
import './prefixFilter-B6cFZsw3.js';
import './Ripple-Zq_D_mxy.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';

const css$1 = {
  code: '.hflex.svelte-1onar53{display:grid;grid-template-areas:"topleft top topright"\r\n            "left shape right"\r\n            "bottomleft bottom bottomright";align-items:center;justify-content:center}.shape.svelte-1onar53{grid-area:shape;display:flex;align-items:center;justify-content:center;border:1px solid teal;padding:1em;flex-direction:column;width:310px;height:310px;position:relative}.katex{color:currentcolor}article.svelte-1onar53{-webkit-touch-callout:none !important;-webkit-user-select:none !important;user-select:none !important}.values.svelte-1onar53{display:flex;flex-direction:column;align-items:center}',
  map: `{"version":3,"file":"AppDerivative.svelte","sources":["AppDerivative.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from \\"@smui/card\\";\\r\\n    import Slider from '@smui/slider';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Radio from '@smui/radio';\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import Ripple from '@smui/ripple';\\r\\n    import Dialog, { Title, Content, Actions } from \\"@smui/dialog\\";\\r\\n    \\r\\n    import { typeset } from \\"$lib/mathril/shared/typeset\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n\\r\\n    let fx, n = 0;\\r\\n    let N = 360;\\r\\n    let L = 50;\\r\\n    let P = null;\\r\\n    let Q = null;\\r\\n    let currentPoint = {\\r\\n\\r\\n    }\\r\\n    let nextPoint = {}\\r\\n    let previousPoint = {}\\r\\n    let derivative = 0;\\r\\n    let extrema = [];\\r\\n\\r\\n    let pathLength = 1;\\r\\n\\r\\n    \\r\\n    onMount(() => {\\r\\n        pathLength = fx.getTotalLength();\\r\\n        currentPoint = fx.getPointAtLength(0);\\r\\n    })\\r\\n    const slope = (p1, p2) => {\\r\\n        return (p2.y - p1.y) / (p2.x - p1.x)\\r\\n    }\\r\\n    const line = () => {\\r\\n        let theta = Math.atan(derivative);\\r\\n        let x = L * Math.cos(theta);\\r\\n        let y = L * Math.sin(theta);\\r\\n        P = {\\r\\n            x: currentPoint.x - x,\\r\\n            y: currentPoint.y - y\\r\\n        }\\r\\n        Q = {\\r\\n            x: currentPoint.x + x,\\r\\n            y: currentPoint.y + y\\r\\n        }\\r\\n    }\\r\\n    const tangent = (n) => {\\r\\n        // console.log('computing..')\\r\\n        if(!fx || n == 0) return;\\r\\n        currentPoint = fx.getPointAtLength(pathLength * n / N)\\r\\n        previousPoint = null;\\r\\n        nextPoint = null;\\r\\n        \\r\\n        if(n > 0) {\\r\\n            previousPoint = fx.getPointAtLength(pathLength * (n - 1) / N);\\r\\n        }\\r\\n        if(n < N) {\\r\\n            nextPoint = fx.getPointAtLength(pathLength * (n + 1) / N);\\r\\n        }\\r\\n        derivative = previousPoint ? slope(currentPoint, previousPoint) : slope(nextPoint, currentPoint);\\r\\n        if(n > 0 && derivative.toFixed(2) == 0 && extrema.length < 2) {\\r\\n            if(extrema.length === 0 || Math.abs(extrema[0].x - currentPoint.x) > pathLength / N)\\r\\n                extrema.push({x:currentPoint.x, y:currentPoint.y});\\r\\n        }\\r\\n        extrema = extrema;\\r\\n        // console.log(extrema)\\r\\n        line();\\r\\n    }\\r\\n\\r\\n    let svg;\\r\\n    \\r\\n    \\r\\n    let open = false;\\r\\n    \\r\\n   \\r\\n    \\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n        setTimeout(() => {\\r\\n            renderMathInElement(panel, {\\r\\n                delimiters: [\\r\\n                    { left: \\"$$\\", right: \\"$$\\", display: true },\\r\\n                    { left: \\"$\\", right: \\"$\\", display: false },\\r\\n                    { left: \\"\\\\\\\\(\\", right: \\"\\\\\\\\)\\", display: false },\\r\\n                    { left: \\"\\\\\\\\[\\", right: \\"\\\\\\\\]\\", display: true },\\r\\n                ],\\r\\n                // • rendering keys, e.g.:\\r\\n                throwOnError: false,\\r\\n            });\\r\\n        }, 0);\\r\\n    }\\r\\n    $: tangent(n);\\r\\n    \\r\\n<\/script>\\r\\n\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline3\\" style=\\"text-align:center;margin:0 0 0.5em 0\\">\\r\\n        Extremal Points\\r\\n    </h1>\\r\\n    <!-- <div class=\\"options\\">\\r\\n        {#each options as option}\\r\\n          <FormField>\\r\\n            <Radio\\r\\n              bind:group={limit}\\r\\n              value={option}\\r\\n            />\\r\\n            <span slot=\\"label\\">\\r\\n              {option} Limit\\r\\n            </span>\\r\\n          </FormField>\\r\\n        {/each}\\r\\n      </div> -->\\r\\n    <div class=\\"hflex\\">\\r\\n        <!-- <div class=\\"blank\\"></div> -->\\r\\n        \\r\\n        <div class=\\"shape\\">\\r\\n            <svg bind:this={svg} width=\\"310\\" height=\\"310\\" viewBox=\\"-155 -155 310 310\\">\\r\\n                <defs>\\r\\n                    <marker\\r\\n                        id=\\"arrow\\"\\r\\n                        viewBox=\\"0 0 10 10\\"\\r\\n                        refX=\\"5\\"\\r\\n                        refY=\\"5\\"\\r\\n                        markerWidth=\\"6\\"\\r\\n                        markerHeight=\\"6\\"\\r\\n                        orient=\\"auto-start-reverse\\">\\r\\n                        <path d=\\"M 0 0 L 10 5 L 0 10 z\\" fill=\\"currentColor\\" />\\r\\n                    </marker>\\r\\n                    <marker\\r\\n                        id=\\"dot\\"\\r\\n                        viewBox=\\"0 0 10 10\\"\\r\\n                        refX=\\"5\\"\\r\\n                        refY=\\"5\\"\\r\\n                        markerWidth=\\"5\\"\\r\\n                        markerHeight=\\"5\\">\\r\\n                        <circle cx=\\"5\\" cy=\\"5\\" r=\\"5\\" fill=\\"goldenrod\\" />\\r\\n                    </marker>\\r\\n                </defs>\\r\\n                <!-- {#key regionPoints}\\r\\n                    <polygon bind:this={region} points={regionPoints} stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"rgba(0, 150, 200, 0.5)\\" marker-start=\\"url(#dot)\\" marker-mid=\\"url(#dot)\\"/>\\r\\n                {/key}\\r\\n                <circle r=\\"5\\" cx={dot.x} cy={dot.y} fill={dotColor} />\\r\\n                <circle r=\\"5\\" cx={maxDot.x} cy={maxDot.y} fill=\\"green\\" /> -->\\r\\n                <path d=\\"M -150, 120 L 150,120\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" marker-end=\\"url(#arrow)\\"/>\\r\\n                <path d=\\"M -120, 150 L -120,-150\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" marker-end=\\"url(#arrow)\\"/>\\r\\n                <path bind:this={fx} d=\\"M -100, 20 C -50,-100 70,80 120,-30\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"none\\" pathLength=\\"1\\" />\\r\\n                {#if P}\\r\\n                    <line x1={P.x} y1={P.y} x2={Q.x} y2={Q.y} stroke=\\"rgba(0, 150, 200, 1)\\" stroke-width=\\"1\\" />\\r\\n                    {#each extrema as p}\\r\\n                        <circle cx={p.x} cy={p.y} r=\\"7\\" fill=\\"tomato\\" />\\r\\n                    {/each}\\r\\n                {/if}\\r\\n                \\r\\n                <circle cx={currentPoint.x} cy={currentPoint.y} r=\\"7\\" fill=\\"rgba(0, 150, 200, 1)\\" />\\r\\n                <circle cx={currentPoint.x} cy={currentPoint.y} r=\\"10\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" />\\r\\n            </svg>\\r\\n        </div>\\r\\n    \\r\\n    </div>\\r\\n    <br>\\r\\n    <div class=\\"controls\\">\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={n}\\r\\n                min={0}\\r\\n                max={N}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"x\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 5px; width: max-content; display: block;\\"\\r\\n            >\\r\\n                X\\r\\n            </span>\\r\\n        </FormField>\\r\\n    </div>\\r\\n    <div class=\\"values\\">\\r\\n        <div class=\\"maxValue\\"><span>Slope</span> <strong>{-derivative.toFixed(2)}</strong></div>\\r\\n        <!-- <div class=\\"currentValue\\"><span>Upper Limit</span> <strong>{upperLimit.toFixed(2)}</strong> </div> -->\\r\\n    </div>\\r\\n    <br>\\r\\n    <!-- <div class=\\"actions\\">\\r\\n        <Button  on:click={objective}>New Objective</Button>\\r\\n        <Button  on:click={generateConvex}>New Region</Button>\\r\\n    </div> -->\\r\\n    \\r\\n</article>\\r\\n<Dialog\\r\\n    bind:open\\r\\n    aria-labelledby=\\"simple-title\\"\\r\\n    aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n    <Title id=\\"simple-title\\">How to play</Title>\\r\\n    <Content id=\\"simple-content\\">\\r\\n        <p>This application shows that at extremal points, the slope of the tangent becomes zero. Use the slider to move along the function.</p>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => (open = false)}>\\r\\n            <Label>Done</Label>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Dialog>\\r\\n\\r\\n<style>\\r\\n    .hflex {\\r\\n        display: grid;\\r\\n        grid-template-areas: \\r\\n            \\"topleft top topright\\"\\r\\n            \\"left shape right\\"\\r\\n            \\"bottomleft bottom bottomright\\";\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        /* width: fit-content; */\\r\\n    }\\r\\n    /* .centerFlex {\\r\\n        display:flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        background-color: rgba(255, 255, 255, 0.1);\\r\\n        cursor: pointer;\\r\\n    }\\r\\n     */\\r\\n    /* .options {\\r\\n        display: flex;\\r\\n        margin: auto;\\r\\n        width: 100%;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    } */\\r\\n    .shape {\\r\\n        grid-area: shape;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        padding: 1em;\\r\\n        flex-direction: column;\\r\\n        width: 310px;\\r\\n        height: 310px;\\r\\n        position: relative;\\r\\n    }\\r\\n    \\r\\n    :global(.katex) {\\r\\n        color: currentcolor;\\r\\n    }\\r\\n    article {\\r\\n        -webkit-touch-callout: none !important; \\r\\n        -webkit-user-select: none !important; \\r\\n        user-select: none !important;\\r\\n    }\\r\\n    /* .actions {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        margin: auto;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    } */\\r\\n    .values {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyNI,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,mBAAmB,CACf,sBAAsB;AAClC,YAAY,kBAAkB;AAC9B,YAAY,+BAA+B,CACnC,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAErB,CAgBA,qBAAO,CACH,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CACZ,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QACd,CAEQ,MAAQ,CACZ,KAAK,CAAE,YACX,CACA,sBAAQ,CACJ,qBAAqB,CAAE,IAAI,CAAC,UAAU,CACtC,mBAAmB,CAAE,IAAI,CAAC,UAAU,CACpC,WAAW,CAAE,IAAI,CAAC,UACtB,CAQA,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACjB"}`
};
let N = 360;
const AppDerivative = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fx, n = 0;
  let currentPoint = {};
  let derivative = 0;
  let svg;
  let open = false;
  let panel;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1onar53"${add_attribute("this", panel, 0)}>${validate_component(ActionButtons, "ActionButtons").$$render($$result, { style: "justify-content:space-between;" }, {}, {
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
    })} <h1 class="mdc-typography--headline3" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-pibuh">Extremal Points</h1>  <div class="hflex svelte-1onar53"> <div class="shape svelte-1onar53"><svg width="310" height="310" viewBox="-155 -155 310 310"${add_attribute("this", svg, 0)}><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"></path></marker><marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"><circle cx="5" cy="5" r="5" fill="goldenrod"></circle></marker></defs><path d="M -150, 120 L 150,120" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)"></path><path d="M -120, 150 L -120,-150" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)"></path><path d="M -100, 20 C -50,-100 70,80 120,-30" stroke="currentColor" stroke-width="2" fill="none" pathLength="1"${add_attribute("this", fx, 0)}></path>${``}<circle${add_attribute("cx", currentPoint.x, 0)}${add_attribute("cy", currentPoint.y, 0)} r="7" fill="rgba(0, 150, 200, 1)"></circle><circle${add_attribute("cx", currentPoint.x, 0)}${add_attribute("cy", currentPoint.y, 0)} r="10" fill="none" stroke="currentColor" stroke-width="1"></circle></svg></div></div> <br> <div class="controls">${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      label: () => {
        return `<span slot="label" style="padding-right: 5px; width: max-content; display: block;" data-svelte-h="svelte-14xpz6">X</span>`;
      },
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 0,
            max: N,
            step: 1,
            discrete: true,
            tickMarks: true,
            "input$aria-label": "x",
            value: n
          },
          {
            value: ($$value) => {
              n = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <div class="values svelte-1onar53"><div class="maxValue"><span data-svelte-h="svelte-mj23mv">Slope</span> <strong>${escape(-derivative.toFixed(2))}</strong></div> </div> <br> </article> ${validate_component(Dialog, "Dialog").$$render(
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
              return `<p data-svelte-h="svelte-2h1kgz">This application shows that at extremal points, the slope of the tangent becomes zero. Use the slider to move along the function.</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import AppDerivative from '$lib/mathril/games/AppDerivative.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Differentiation\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <AppDerivative />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Differentiation", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(AppDerivative, "AppDerivative").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BvF6_s3h.js.map
