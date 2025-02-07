import { a as subscribe, b as set_store_value } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, f as add_attribute, v as validate_component, i as each, e as escape } from "../../../../../../chunks/ssr2.js";
import { A as ActionButtons, C as Content$1 } from "../../../../../../chunks/ActionIcons.js";
import { S as Slider } from "../../../../../../chunks/Slider.js";
import { F as FormField } from "../../../../../../chunks/FormField.js";
import { R as Radio } from "../../../../../../chunks/Radio.js";
import { B as Button } from "../../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../../chunks/CommonLabel.js";
import "../../../../../../chunks/client.js";
import { D as Dialog } from "../../../../../../chunks/Dialog.js";
import { T as Title, C as Content, A as Actions } from "../../../../../../chunks/Actions2.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { c as currentPath } from "../../../../../../chunks/stores5.js";
const css$1 = {
  code: '.hflex.svelte-wty5nf{display:grid;grid-template-areas:"topleft top topright"\r\n            "left shape right"\r\n            "bottomleft bottom bottomright";align-items:center;justify-content:center}.options.svelte-wty5nf{display:flex;margin:auto;width:100%;align-items:center;justify-content:center}.shape.svelte-wty5nf{grid-area:shape;display:flex;align-items:center;justify-content:center;border:1px solid teal;padding:1em;flex-direction:column;width:310px;height:310px;position:relative}.katex{color:currentcolor}article.svelte-wty5nf{-webkit-touch-callout:none !important;-webkit-user-select:none !important;user-select:none !important}.values.svelte-wty5nf{display:flex;flex-direction:column;align-items:center}',
  map: `{"version":3,"file":"Integral.svelte","sources":["Integral.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from \\"@smui/card\\";\\r\\n    import Slider from '@smui/slider';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Radio from '@smui/radio';\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import Ripple from '@smui/ripple';\\r\\n    import Dialog, { Title, Content, Actions } from \\"@smui/dialog\\";\\r\\n    import {randInt} from '$lib/mathril/utils/matlib/common';\\r\\n    \\r\\n    import { Linear2 } from '$lib/mathril/utils/matlib/linear2';\\r\\n    import { typeset } from \\"$lib/mathril/shared/typeset\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n\\r\\n    let fx, n = 0;\\r\\n    let points = [];\\r\\n    let lowers = [];\\r\\n    let uppers = [];\\r\\n    let pathLength = 1;\\r\\n    let options = ['Lower', 'Upper']\\r\\n    let limit = 'Upper'\\r\\n    let upperLimit = 0;\\r\\n    let lowerLimit = 0;\\r\\n    onMount(() => {\\r\\n        pathLength = fx.getTotalLength();\\r\\n    })\\r\\n    const intervals = (n) => {\\r\\n        // console.log('computing..')\\r\\n        if(!fx || n == 0) return;\\r\\n        upperLimit = 0;\\r\\n        lowerLimit = 0;\\r\\n        points = [];\\r\\n        lowers = [];\\r\\n        uppers = [];\\r\\n        for(let i = 0; i <= n; i++) {\\r\\n            points.push(fx.getPointAtLength(pathLength * i/n))\\r\\n        }\\r\\n        points = points;\\r\\n        for(let i = 1; i <= n; i++) {\\r\\n            lowers.push(points[i])\\r\\n        }\\r\\n        for(let i = 0; i < n; i++) {\\r\\n            uppers.push(points[i])\\r\\n        }\\r\\n        for(let i = 0; i < n; i++) {\\r\\n            lowerLimit += (points[i + 1].x - points[i].x) * (120 - points[i].y)\\r\\n            upperLimit += (points[i + 1].x - points[i].x) * (120 - points[i + 1].y)\\r\\n        }\\r\\n    }\\r\\n\\r\\n    let region, svg, dot = {\\r\\n        x: 0,\\r\\n        y: 0\\r\\n    };\\r\\n    let maxDot = {\\r\\n        x: 0,\\r\\n        y: 0\\r\\n    }\\r\\n    \\r\\n    let open = false;\\r\\n    \\r\\n   \\r\\n    \\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n        setTimeout(() => {\\r\\n            renderMathInElement(panel, {\\r\\n                delimiters: [\\r\\n                    { left: \\"$$\\", right: \\"$$\\", display: true },\\r\\n                    { left: \\"$\\", right: \\"$\\", display: false },\\r\\n                    { left: \\"\\\\\\\\(\\", right: \\"\\\\\\\\)\\", display: false },\\r\\n                    { left: \\"\\\\\\\\[\\", right: \\"\\\\\\\\]\\", display: true },\\r\\n                ],\\r\\n                // • rendering keys, e.g.:\\r\\n                throwOnError: false,\\r\\n            });\\r\\n        }, 0);\\r\\n    }\\r\\n    $: intervals(n);\\r\\n    \\r\\n<\/script>\\r\\n\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline3\\" style=\\"text-align:center;margin:0 0 0.5em 0\\">\\r\\n        Integration\\r\\n    </h1>\\r\\n    <div class=\\"options\\">\\r\\n        {#each options as option}\\r\\n          <FormField>\\r\\n            <Radio\\r\\n              bind:group={limit}\\r\\n              value={option}\\r\\n            />\\r\\n            <span slot=\\"label\\">\\r\\n              {option} Limit\\r\\n            </span>\\r\\n          </FormField>\\r\\n        {/each}\\r\\n      </div>\\r\\n    <div class=\\"hflex\\">\\r\\n        <!-- <div class=\\"blank\\"></div> -->\\r\\n        \\r\\n        <div class=\\"shape\\">\\r\\n            <svg bind:this={svg} width=\\"310\\" height=\\"310\\" viewBox=\\"-155 -155 310 310\\">\\r\\n                <defs>\\r\\n                    <marker\\r\\n                        id=\\"arrow\\"\\r\\n                        viewBox=\\"0 0 10 10\\"\\r\\n                        refX=\\"5\\"\\r\\n                        refY=\\"5\\"\\r\\n                        markerWidth=\\"6\\"\\r\\n                        markerHeight=\\"6\\"\\r\\n                        orient=\\"auto-start-reverse\\">\\r\\n                        <path d=\\"M 0 0 L 10 5 L 0 10 z\\" fill=\\"currentColor\\" />\\r\\n                    </marker>\\r\\n                    <marker\\r\\n                        id=\\"dot\\"\\r\\n                        viewBox=\\"0 0 10 10\\"\\r\\n                        refX=\\"5\\"\\r\\n                        refY=\\"5\\"\\r\\n                        markerWidth=\\"5\\"\\r\\n                        markerHeight=\\"5\\">\\r\\n                        <circle cx=\\"5\\" cy=\\"5\\" r=\\"5\\" fill=\\"goldenrod\\" />\\r\\n                    </marker>\\r\\n                </defs>\\r\\n                <!-- {#key regionPoints}\\r\\n                    <polygon bind:this={region} points={regionPoints} stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"rgba(0, 150, 200, 0.5)\\" marker-start=\\"url(#dot)\\" marker-mid=\\"url(#dot)\\"/>\\r\\n                {/key}\\r\\n                <circle r=\\"5\\" cx={dot.x} cy={dot.y} fill={dotColor} />\\r\\n                <circle r=\\"5\\" cx={maxDot.x} cy={maxDot.y} fill=\\"green\\" /> -->\\r\\n                <path d=\\"M -150, 120 L 150,120\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" marker-end=\\"url(#arrow)\\"/>\\r\\n                <path d=\\"M -120, 150 L -120,-150\\" stroke=\\"currentColor\\" stroke-width=\\"1\\" marker-end=\\"url(#arrow)\\"/>\\r\\n                <path bind:this={fx} d=\\"M -100, 20 C -50,-10 70,30 120,-30\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"none\\" pathLength=\\"1\\" />\\r\\n                {#each points as point, i (point)}\\r\\n                    <line x1={point.x} y1=\\"120\\" x2={point.x} y2={point.y} stroke=\\"currentColor\\" stroke-width=\\"0.5\\" />\\r\\n                    {#if limit === 'Lower' && i < n}\\r\\n                        <rect x={point.x} y={point.y} width={lowers[i].x - point.x} height={120 - point.y} fill=\\"rgba(0, 150, 200, 0.5)\\" stroke=\\"currentColor\\" stroke-width=\\"0.5\\" />\\r\\n                        <!-- <line x1={point.x} y1={point.y} x2={lowers[i].x} y2={point.y} stroke=\\"currentColor\\" stroke-width=\\"0.5\\" /> -->\\r\\n                    {/if}\\r\\n                    {#if limit === 'Upper' && i < n}\\r\\n                        <rect x={point.x} y={lowers[i].y} width={lowers[i].x - point.x} height={120 - lowers[i].y} fill=\\"rgba(0, 150, 200, 0.5)\\" stroke=\\"currentColor\\" stroke-width=\\"0.5\\"/>\\r\\n                        <!-- <line x1={point.x} y1={lowers[i].y} x2={lowers[i].x} y2={lowers[i].y} stroke=\\"currentColor\\" stroke-width=\\"1\\" /> -->\\r\\n                    {/if}\\r\\n                {/each}\\r\\n\\r\\n            </svg>\\r\\n        </div>\\r\\n    \\r\\n    </div>\\r\\n    <br>\\r\\n    <div class=\\"controls\\">\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={n}\\r\\n                min={0}\\r\\n                max={300}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"x\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 5px; width: max-content; display: block;\\"\\r\\n            >\\r\\n                N\\r\\n            </span>\\r\\n        </FormField>\\r\\n    </div>\\r\\n    <div class=\\"values\\">\\r\\n        <div class=\\"maxValue\\"><span>Lower Limit</span> <strong>{lowerLimit.toFixed(2)}</strong></div>\\r\\n        <div class=\\"currentValue\\"><span>Upper Limit</span> <strong>{upperLimit.toFixed(2)}</strong> </div>\\r\\n    </div>\\r\\n    <br>\\r\\n    <!-- <div class=\\"actions\\">\\r\\n        <Button  on:click={objective}>New Objective</Button>\\r\\n        <Button  on:click={generateConvex}>New Region</Button>\\r\\n    </div> -->\\r\\n    \\r\\n</article>\\r\\n<Dialog\\r\\n    bind:open\\r\\n    aria-labelledby=\\"simple-title\\"\\r\\n    aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n    <Title id=\\"simple-title\\">How to play</Title>\\r\\n    <Content id=\\"simple-content\\">\\r\\n        <p>The integration via sums is obtained by sub-dividing the region in small rectangles. This can be done in two ways called Lower limit and upper limit. Change the number of sub-divisions by sliding.</p>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => (open = false)}>\\r\\n            <Label>Done</Label>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Dialog>\\r\\n\\r\\n<style>\\r\\n    .hflex {\\r\\n        display: grid;\\r\\n        grid-template-areas: \\r\\n            \\"topleft top topright\\"\\r\\n            \\"left shape right\\"\\r\\n            \\"bottomleft bottom bottomright\\";\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        /* width: fit-content; */\\r\\n    }\\r\\n    /* .centerFlex {\\r\\n        display:flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        background-color: rgba(255, 255, 255, 0.1);\\r\\n        cursor: pointer;\\r\\n    }\\r\\n     */\\r\\n    .options {\\r\\n        display: flex;\\r\\n        margin: auto;\\r\\n        width: 100%;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    .shape {\\r\\n        grid-area: shape;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        padding: 1em;\\r\\n        flex-direction: column;\\r\\n        width: 310px;\\r\\n        height: 310px;\\r\\n        position: relative;\\r\\n    }\\r\\n    \\r\\n    :global(.katex) {\\r\\n        color: currentcolor;\\r\\n    }\\r\\n    article {\\r\\n        -webkit-touch-callout: none !important; \\r\\n        -webkit-user-select: none !important; \\r\\n        user-select: none !important;\\r\\n    }\\r\\n    /* .actions {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        margin: auto;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    } */\\r\\n    .values {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6MI,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,mBAAmB,CACf,sBAAsB;AAClC,YAAY,kBAAkB;AAC9B,YAAY,+BAA+B,CACnC,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAErB,CASA,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CACA,oBAAO,CACH,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CACZ,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QACd,CAEQ,MAAQ,CACZ,KAAK,CAAE,YACX,CACA,qBAAQ,CACJ,qBAAqB,CAAE,IAAI,CAAC,UAAU,CACtC,mBAAmB,CAAE,IAAI,CAAC,UAAU,CACpC,WAAW,CAAE,IAAI,CAAC,UACtB,CAQA,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACjB"}`
};
const Integral = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fx, n = 0;
  let points = [];
  let lowers = [];
  let options = ["Lower", "Upper"];
  let limit = "Upper";
  let upperLimit = 0;
  let lowerLimit = 0;
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
    $$rendered = `<article class="svelte-wty5nf"${add_attribute("this", panel, 0)}>${validate_component(ActionButtons, "ActionButtons").$$render($$result, { style: "justify-content:space-between;" }, {}, {
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
    })} <h1 class="mdc-typography--headline3" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-r31mlm">Integration</h1> <div class="options svelte-wty5nf">${each(options, (option) => {
      return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
        label: () => {
          return `<span slot="label">${escape(option)} Limit
            </span>`;
        },
        default: () => {
          return `${validate_component(Radio, "Radio").$$render(
            $$result,
            { value: option, group: limit },
            {
              group: ($$value) => {
                limit = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        }
      })}`;
    })}</div> <div class="hflex svelte-wty5nf"> <div class="shape svelte-wty5nf"><svg width="310" height="310" viewBox="-155 -155 310 310"${add_attribute("this", svg, 0)}><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"></path></marker><marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"><circle cx="5" cy="5" r="5" fill="goldenrod"></circle></marker></defs><path d="M -150, 120 L 150,120" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)"></path><path d="M -120, 150 L -120,-150" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)"></path><path d="M -100, 20 C -50,-10 70,30 120,-30" stroke="currentColor" stroke-width="2" fill="none" pathLength="1"${add_attribute("this", fx, 0)}></path>${each(points, (point, i) => {
      return `<line${add_attribute("x1", point.x, 0)} y1="120"${add_attribute("x2", point.x, 0)}${add_attribute("y2", point.y, 0)} stroke="currentColor" stroke-width="0.5"></line> ${limit === "Lower" && i < n ? `<rect${add_attribute("x", point.x, 0)}${add_attribute("y", point.y, 0)}${add_attribute("width", lowers[i].x - point.x, 0)}${add_attribute("height", 120 - point.y, 0)} fill="rgba(0, 150, 200, 0.5)" stroke="currentColor" stroke-width="0.5"></rect> ` : ``} ${limit === "Upper" && i < n ? `<rect${add_attribute("x", point.x, 0)}${add_attribute("y", lowers[i].y, 0)}${add_attribute("width", lowers[i].x - point.x, 0)}${add_attribute("height", 120 - lowers[i].y, 0)} fill="rgba(0, 150, 200, 0.5)" stroke="currentColor" stroke-width="0.5"></rect> ` : ``}`;
    })}</svg></div></div> <br> <div class="controls">${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      label: () => {
        return `<span slot="label" style="padding-right: 5px; width: max-content; display: block;" data-svelte-h="svelte-1o6y9rg">N</span>`;
      },
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 0,
            max: 300,
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
    })}</div> <div class="values svelte-wty5nf"><div class="maxValue"><span data-svelte-h="svelte-3g1s8s">Lower Limit</span> <strong>${escape(lowerLimit.toFixed(2))}</strong></div> <div class="currentValue"><span data-svelte-h="svelte-m1knr3">Upper Limit</span> <strong>${escape(upperLimit.toFixed(2))}</strong></div></div> <br> </article> ${validate_component(Dialog, "Dialog").$$render(
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
          })} ${validate_component(Content, "Content").$$render($$result, { id: "simple-content" }, {}, {
            default: () => {
              return `<p data-svelte-h="svelte-yrkpdo">The integration via sums is obtained by sub-dividing the region in small rectangles. This can be done in two ways called Lower limit and upper limit. Change the number of sub-divisions by sliding.</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import Integral from '$lib/mathril/games/Integral.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Integration\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Integral />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Integration", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Integral, "Integral").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});
export {
  Page as default
};
