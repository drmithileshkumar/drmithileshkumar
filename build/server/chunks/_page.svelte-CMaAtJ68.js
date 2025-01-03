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
  code: "figure.svelte-hhllzw{width:100%;height:100%;margin:0;display:flex;align-items:center;justify-content:center;gap:0.5em;flex-direction:row;flex-wrap:wrap;border:1px solid gray;padding:0.5em}.group.svelte-hhllzw{display:flex;gap:0.5em;justify-content:center;align-items:center;border:1px solid goldenrod;flex-direction:row;flex-wrap:wrap;padding:0.5em;max-width:150px;background-color:goldenrod}.element.svelte-hhllzw{width:20px;height:20px;border:2px solid teal;border-radius:50%;background-color:teal}.katex{color:currentcolor}",
  map: `{"version":3,"file":"Multiplication.svelte","sources":["Multiplication.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from '@smui/card';\\r\\n    import Slider from '@smui/slider';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import { goto } from '$app/navigation'\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import { randInt } from \\"$lib/mathril/utils/matlib/common\\";\\r\\n    import Dialog, { Title, Content, Actions } from '@smui/dialog';\\r\\n    let open = false;\\r\\n    let a = 1;\\r\\n    let b = 1;\\r\\n    let c = 1;\\r\\n    $: c = a * b;\\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\trenderMathInElement(panel, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n\\t\\t}, 0);\\r\\n\\t}\\r\\n\\r\\n<\/script>\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline5\\" style='text-align:center;margin:0 0 0.5em 0'>Multiplication</h1>\\r\\n    <figure>\\r\\n        {#each Array(a) as first, i}\\r\\n            <div class=\\"group\\">\\r\\n                {#each Array(b) as second, j}\\r\\n                    <div class=\\"element\\"></div>\\r\\n                {/each}\\r\\n            </div>\\r\\n        {/each}\\r\\n    </figure>\\r\\n    <div class=\\"controls\\">\\r\\n            <h1 class=\\"mdc-typography--headline6\\" style='text-align:center;margin:0'>\\r\\n                {#key a}\\r\\n                    <span style=\\"color:goldenrod\\">{a}</span>\\r\\n                {/key}\\r\\n                <span> \\\\(\\\\times\\\\)  </span>\\r\\n                {#key b}\\r\\n                    <span style=\\"color:teal\\">{b}</span>\\r\\n                {/key} \\r\\n                <span>=</span> \\r\\n                {#key c}\\r\\n                    <span style=\\"color:currentColor\\">{c}</span>\\r\\n                {/key}\\r\\n            </h1>\\r\\n        <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            \\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={a}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"a\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(a\\\\) = {#key a}<span>{a}</span>{/key}\\r\\n            </span>\\r\\n        </FormField> -->\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={a}\\r\\n                min={0}\\r\\n                max={10}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"a\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(a\\\\) = {#key a}<span>{a}</span>{/key}\\r\\n            </span>\\r\\n        </FormField>\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={b}\\r\\n                min={0}\\r\\n                max={10}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"b\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(b\\\\) = {#key b}<span>{b}</span>{/key}\\r\\n            </span>\\r\\n        </FormField>\\r\\n        <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={c}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"c\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(c\\\\) = {#key c}<span>{c}</span>{/key}\\r\\n            </span>\\r\\n        </FormField> -->\\r\\n        \\r\\n    </div>\\r\\n</article>\\r\\n<Dialog\\r\\n  bind:open\\r\\n  aria-labelledby=\\"simple-title\\"\\r\\n  aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n  <Title id=\\"simple-title\\">How to play</Title>\\r\\n  <Content id=\\"simple-content\\">\\r\\n    <p>\\r\\n        Slide to change numbers to get new multiplication.\\r\\n    </p>\\r\\n  </Content>\\r\\n  <Actions>\\r\\n    <Button on:click={() => (open = false)}>\\r\\n      <Label>Done</Label>\\r\\n    </Button>\\r\\n  </Actions>\\r\\n</Dialog>\\r\\n<style>\\r\\n    figure {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        margin: 0;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        gap: 0.5em;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        border: 1px solid gray;\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n    .group {\\r\\n        display: flex;\\r\\n        gap: 0.5em;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        border: 1px solid goldenrod;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        padding: 0.5em;\\r\\n        max-width: 150px;\\r\\n        background-color: goldenrod;\\r\\n    }\\r\\n    .element {\\r\\n        width: 20px;\\r\\n        height: 20px;\\r\\n        border: 2px solid teal;\\r\\n        border-radius: 50%;\\r\\n        background-color: teal;\\r\\n    }\\r\\n    :global(.katex) {\\r\\n\\t\\tcolor: currentcolor;\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AA2JI,oBAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,KAAK,CACV,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,KACb,CACA,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,CAC3B,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,KAAK,CAChB,gBAAgB,CAAE,SACtB,CACA,sBAAS,CACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,IACtB,CACQ,MAAQ,CAClB,KAAK,CAAE,YACR"}`
};
const Multiplication = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let a = 1;
  let b = 1;
  let c = 1;
  let panel;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    c = a * b;
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
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-1280fis">Multiplication</h1> <figure class="svelte-hhllzw">${each(Array(a), (first, i) => {
      return `<div class="group svelte-hhllzw">${each(Array(b), (second, j) => {
        return `<div class="element svelte-hhllzw"></div>`;
      })} </div>`;
    })}</figure> <div class="controls"><h1 class="mdc-typography--headline6" style="text-align:center;margin:0"><span style="color:goldenrod">${escape(a)}</span> <span data-svelte-h="svelte-ujqcjp">\\(\\times\\)</span> <span style="color:teal">${escape(b)}</span> <span data-svelte-h="svelte-u057kv">=</span> <span style="color:currentColor">${escape(c)}</span></h1>  ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      label: () => {
        return `<span slot="label" style="padding-right: 12px; width: 60px; display: block;">\\(a\\) = <span>${escape(a)}</span></span>`;
      },
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 0,
            max: 10,
            step: 1,
            discrete: true,
            tickMarks: true,
            "input$aria-label": "a",
            value: a
          },
          {
            value: ($$value) => {
              a = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      label: () => {
        return `<span slot="label" style="padding-right: 12px; width: 60px; display: block;">\\(b\\) = <span>${escape(b)}</span></span>`;
      },
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 0,
            max: 10,
            step: 1,
            discrete: true,
            tickMarks: true,
            "input$aria-label": "b",
            value: b
          },
          {
            value: ($$value) => {
              b = $$value;
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
              return `<p data-svelte-h="svelte-xo8v7">Slide to change numbers to get new multiplication.</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import Multiplication from '$lib/mathril/games/Multiplication.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Multiplication\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Multiplication />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Multiplication", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Multiplication, "Multiplication").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CMaAtJ68.js.map
