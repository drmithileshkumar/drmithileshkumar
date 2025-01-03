import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, i as each, e as escape } from './ssr2-q3O0l93f.js';
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
  code: "figure.svelte-suk5b7{width:100%;height:100%;margin:0;display:flex;justify-content:center}.katex{color:currentcolor}",
  map: `{"version":3,"file":"Clock.svelte","sources":["Clock.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from '@smui/card';\\r\\n    import Slider from '@smui/slider';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import { randInt } from \\"$lib/mathril/utils/matlib/common\\";\\r\\n    import Dialog, { Title, Content, Actions } from '@smui/dialog';\\r\\n    let open = false;\\r\\n    let sec = 5 * 8;\\r\\n    let min = 5 * 3;\\r\\n    let hr = 5;\\r\\n    $: thetas = sec * Math.PI/30;\\r\\n    $: thetam = (min + thetas/60) * Math.PI/30;\\r\\n    $: thetah = (hr + (min + thetas/60)/60) * Math.PI/6 ;\\r\\n    $: ps = {\\r\\n        x: 35 * Math.cos(thetas - Math.PI/2),\\r\\n        y: 35 * Math.sin(thetas - Math.PI/2)\\r\\n    }\\r\\n    $: pm = {\\r\\n        x: 38 * Math.cos(thetam - Math.PI/2),\\r\\n        y: 38 * Math.sin(thetam - Math.PI/2)\\r\\n    }\\r\\n    $: ph = {\\r\\n        x: 25 * Math.cos(thetah - Math.PI/2),\\r\\n        y: 25 * Math.sin(thetah - Math.PI/2)\\r\\n    }\\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\trenderMathInElement(panel, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n\\t\\t}, 0);\\r\\n\\t}\\r\\n\\r\\n<\/script>\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline5\\" style='text-align:center;margin:0 0 0.5em 0'>Reading Clock</h1>\\r\\n    <figure>\\r\\n        <svg width=\\"100\\" height=\\"100\\" viewBox=\\"-50 -50 100 100\\"> \\r\\n            <circle cx='0' cy='0' r='47' stroke='currentcolor' stroke-width='2' fill='none' />\\r\\n            {#each Array(12) as hr, i} \\r\\n                <text text-anchor=\\"middle\\" x=\\"{38 * Math.cos(Math.PI/6 * (i + 1) - Math.PI/2)}\\" y=\\"{38 * Math.sin(Math.PI/6 * (i + 1) - Math.PI/2)}\\" fill=\\"rgba(0, 175, 255, 1)\\" font-size=\\"14\\" transform=\\"translate(0 5.5)\\">{i + 1}</text>\\r\\n            {/each}\\r\\n            <line x1='0' y1='0' x2='{ps.x}' y2='{ps.y}' stroke=\\"rgba(0, 255, 175, 1)\\" stroke-width=\\"1\\" fill=\\"none\\" />\\r\\n            <line x1='0' y1='0' x2='{pm.x}' y2='{pm.y}' stroke=\\"currentcolor\\" stroke-width=\\"2\\" fill=\\"none\\" />\\r\\n            <line x1='0' y1='0' x2='{ph.x}' y2='{ph.y}' stroke-linecap=\\"round\\" stroke=\\"red\\" stroke-width=\\"4\\" fill=\\"none\\" />\\r\\n        </svg>\\r\\n    </figure>\\r\\n    <div class=\\"controls\\">\\r\\n            <h1 class=\\"mdc-typography--headline6\\" style='text-align:center;margin:0'>\\r\\n                {#key hr}\\r\\n                    <span style=\\"color:red\\">{hr}</span>\\r\\n                {/key}\\r\\n                <span>:</span>\\r\\n                {#key min}\\r\\n                    <span style=\\"color:currentColor\\">{min}</span>\\r\\n                {/key} \\r\\n                <span>:</span> \\r\\n                {#key sec}\\r\\n                    <span style=\\"color:rgba(0, 255, 175, 1)\\">{sec}</span>\\r\\n                {/key}\\r\\n            </h1>\\r\\n       \\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            \\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={hr}\\r\\n                min={1}\\r\\n                max={12}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"hour\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(hour\\\\)\\r\\n            </span>\\r\\n        </FormField>\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={min}\\r\\n                min={0}\\r\\n                max={60}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"minute\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;color:currentColor\\"\\r\\n            >\\r\\n                \\\\(min\\\\)\\r\\n            </span>\\r\\n        </FormField>\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={sec}\\r\\n                min={0}\\r\\n                max={60}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"Second\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(sec\\\\)\\r\\n            </span>\\r\\n        </FormField>\\r\\n        <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={c}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"c\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(c\\\\) = {#key c}<span>{c}</span>{/key}\\r\\n            </span>\\r\\n        </FormField> -->\\r\\n        \\r\\n    </div>\\r\\n</article>\\r\\n<Dialog\\r\\n  bind:open\\r\\n  aria-labelledby=\\"simple-title\\"\\r\\n  aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n  <Title id=\\"simple-title\\">How to play</Title>\\r\\n  <Content id=\\"simple-content\\">\\r\\n    <p>\\r\\n        Slide the hour, min and sec to change the time.\\r\\n    </p>\\r\\n  </Content>\\r\\n  <Actions>\\r\\n    <Button on:click={() => (open = false)}>\\r\\n      <Label>Done</Label>\\r\\n    </Button>\\r\\n  </Actions>\\r\\n</Dialog>\\r\\n<style>\\r\\n    figure {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        margin: 0;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    :global(.katex) {\\r\\n\\t\\tcolor: currentcolor;\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AA4KI,oBAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACrB,CACQ,MAAQ,CAClB,KAAK,CAAE,YACR"}`
};
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let thetas;
  let thetam;
  let thetah;
  let ps;
  let pm;
  let ph;
  let open = false;
  let sec = 5 * 8;
  let min = 5 * 3;
  let hr = 5;
  let panel;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    thetas = sec * Math.PI / 30;
    thetam = (min + thetas / 60) * Math.PI / 30;
    thetah = (hr + (min + thetas / 60) / 60) * Math.PI / 6;
    ps = {
      x: 35 * Math.cos(thetas - Math.PI / 2),
      y: 35 * Math.sin(thetas - Math.PI / 2)
    };
    pm = {
      x: 38 * Math.cos(thetam - Math.PI / 2),
      y: 38 * Math.sin(thetam - Math.PI / 2)
    };
    ph = {
      x: 25 * Math.cos(thetah - Math.PI / 2),
      y: 25 * Math.sin(thetah - Math.PI / 2)
    };
    $$rendered = `<article${add_attribute("this", panel, 0)}>${validate_component(ActionButtons, "ActionButtons").$$render($$result, { style: "justify-content:space-between;" }, {}, {
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
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-m61z2">Reading Clock</h1> <figure class="svelte-suk5b7"><svg width="100" height="100" viewBox="-50 -50 100 100"><circle cx="0" cy="0" r="47" stroke="currentcolor" stroke-width="2" fill="none"></circle>${each(Array(12), (hr2, i) => {
      return `<text text-anchor="middle"${add_attribute("x", 38 * Math.cos(Math.PI / 6 * (i + 1) - Math.PI / 2), 0)}${add_attribute("y", 38 * Math.sin(Math.PI / 6 * (i + 1) - Math.PI / 2), 0)} fill="rgba(0, 175, 255, 1)" font-size="14" transform="translate(0 5.5)">${escape(i + 1)}</text>`;
    })}<line x1="0" y1="0"${add_attribute("x2", ps.x, 0)}${add_attribute("y2", ps.y, 0)} stroke="rgba(0, 255, 175, 1)" stroke-width="1" fill="none"></line><line x1="0" y1="0"${add_attribute("x2", pm.x, 0)}${add_attribute("y2", pm.y, 0)} stroke="currentcolor" stroke-width="2" fill="none"></line><line x1="0" y1="0"${add_attribute("x2", ph.x, 0)}${add_attribute("y2", ph.y, 0)} stroke-linecap="round" stroke="red" stroke-width="4" fill="none"></line></svg></figure> <div class="controls"><h1 class="mdc-typography--headline6" style="text-align:center;margin:0"><span style="color:red">${escape(hr)}</span> <span data-svelte-h="svelte-5vnx5k">:</span> <span style="color:currentColor">${escape(min)}</span> <span data-svelte-h="svelte-5vnx5k">:</span> <span style="color:rgba(0, 255, 175, 1)">${escape(sec)}</span></h1> ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      label: () => {
        return `<span slot="label" style="padding-right: 12px; width: 60px; display: block;" data-svelte-h="svelte-u1m61h">\\(hour\\)</span>`;
      },
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 1,
            max: 12,
            step: 1,
            discrete: true,
            tickMarks: true,
            "input$aria-label": "hour",
            value: hr
          },
          {
            value: ($$value) => {
              hr = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      label: () => {
        return `<span slot="label" style="padding-right: 12px; width: 60px; display: block;color:currentColor" data-svelte-h="svelte-114b52c">\\(min\\)</span>`;
      },
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 0,
            max: 60,
            step: 1,
            discrete: true,
            tickMarks: true,
            "input$aria-label": "minute",
            value: min
          },
          {
            value: ($$value) => {
              min = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      label: () => {
        return `<span slot="label" style="padding-right: 12px; width: 60px; display: block;" data-svelte-h="svelte-15xaz4g">\\(sec\\)</span>`;
      },
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 0,
            max: 60,
            step: 1,
            discrete: true,
            tickMarks: true,
            "input$aria-label": "Second",
            value: sec
          },
          {
            value: ($$value) => {
              sec = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} </div></article> ${validate_component(Dialog, "Dialog").$$render(
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
              return `<p data-svelte-h="svelte-1sl30ln">Slide the hour, min and sec to change the time.</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import Clock from '$lib/mathril/games/Clock.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import Button from '@smui/button';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Clock\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Clock />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Clock", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Clock, "Clock").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-RtLQ415_.js.map
