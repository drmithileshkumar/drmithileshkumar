import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, i as each } from './ssr2-CDgUAJs6.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import './Suffix-CtI6fDI6.js';
import { S as Slider } from './Slider-Bd4xOsLA.js';
import { F as FormField } from './FormField-CQ11Qxdo.js';
import { B as Button } from './Button-DTp4JSRw.js';
import './client-CAo-6NMJ.js';
import { D as Dialog } from './Dialog-DnxCTH9Z.js';
import { T as Title, C as Content$1, A as Actions } from './Actions2-D_E0WmBW.js';
import { C as Content, A as ActionButtons } from './ActionIcons-Bx2zL88O.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { c as currentPath } from './stores5-CI5tJYhk.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './SmuiElement-CKXCSgE1.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './prefixFilter-B6cFZsw3.js';
import './Ripple-N--aPaMn.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';

const css$1 = {
  code: ".hflex.svelte-1yve7hq{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:1em}.shape.svelte-1yve7hq{display:flex;align-items:center;justify-content:center;border:1px solid teal;padding:1em;width:100%;height:100%;gap:0.5em;flex-wrap:wrap}.round.svelte-1yve7hq{width:70px;height:70px;border-radius:50%;border:2px solid goldenrod;display:flex;align-items:center;justify-content:center}.katex{color:currentcolor}",
  map: `{"version":3,"file":"Counting.svelte","sources":["Counting.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Textfield from \\"@smui/textfield\\";\\r\\n    import Slider from '@smui/slider';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import { randInt } from \\"$lib/mathril/utils/matlib/common\\";\\r\\n    import Dialog, { Title, Content, Actions } from '@smui/dialog';\\r\\n    import { ActionButtons } from \\"@smui/card\\";\\r\\n    let open = false;\\r\\n    let number = 0;\\r\\n    let numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-One', 'Twenty-Two', 'Twenty-Three', 'Twenty-Four', 'Twenty-Five', 'Twenty-Six', 'Twenty-Seven', 'Twenty-Eight', 'Twenty-Nine', 'Thirty',\\r\\n    'Thirty-One', 'Thirty-Two', 'Thirty-Three', 'Thirty-Four', 'Thirty-Five', 'Thirty-Six', 'Thirty-Seven', 'Thirty-Eight', 'Thirty-Nine', 'Forty',\\r\\n    'Forty-One', 'Forty-Two', 'Forty-Three', 'Forty-Four', 'Forty-Five', 'Forty-Six', 'Forty-Seven', 'Forty-Eight', 'Forty-Nine', 'Fifty',\\r\\n    'Fifty-One', 'Fifty-Two', 'Fifty-Three', 'Fifty-Four', 'Fifty-Five', 'Fifty-Six', 'Fifty-Seven', 'Fifty-Eight', 'Fifty-Nine', 'Sixty',\\r\\n    'Sixty-One', 'Sixty-Two', 'Sixty-Three', 'Sixty-Four', 'Sixty-Five', 'Sixty-Six', 'Sixty-Seven', 'Sixty-Eight', 'Sixty-Nine', 'Seventy',\\r\\n    'Seventy-One', 'Seventy-Two', 'Seventy-Three', 'Seventy-Four', 'Seventy-Five', 'Seventy-Six', 'Seventy-Seven', 'Seventy-Eight', 'Seventy-Nine', 'Eighty',\\r\\n    'Eighty-One', 'Eighty-Two', 'Eighty-Three', 'Eighty-Four', 'Eighty-Five', 'Eighty-Six', 'Eighty-Seven', 'Eighty-Eight', 'Eighty-Nine', 'Ninety',\\r\\n    'Ninety-One', 'Ninety-Two', 'Ninety-Three', 'Ninety-Four', 'Ninety-Five', 'Ninety-Six', 'Ninety-Seven', 'Ninety-Eight', 'Ninety-Nine', 'Hundred']\\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\trenderMathInElement(panel, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n\\t\\t}, 0);\\r\\n\\t}\\r\\n\\r\\n<\/script>\\r\\n<article bind:this={panel}>\\r\\n  <ActionButtons style=\\"justify-content:space-between\\">\\r\\n    <Button on:click={() => open = true}>Help</Button>\\r\\n    <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n  </ActionButtons>\\r\\n  <div class=\\"actions\\">\\r\\n    \\r\\n  </div>\\r\\n    \\r\\n    <h1 class=\\"mdc-typography--headline5\\" style='text-align:center;margin:0'>Counting</h1>\\r\\n    <div class=\\"controls\\">\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={number}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"x\\"\\r\\n            />\\r\\n        </FormField>\\r\\n    </div>\\r\\n    <h4 class=\\"mdc-typography--headline5\\" style=\\"margin:0 0 0.5em 0;color:goldenrod;text-align:center\\">{numbers[number]} {number}</h4>\\r\\n    <div class=\\"hflex\\">\\r\\n        <div class=\\"shape\\">\\r\\n            {#each Array(number) as item, i}\\r\\n                <span class=\\"round\\" style=\\"width:{300/8}px; height:{300/8}px\\">{i + 1}</span>\\r\\n            {/each}\\r\\n        </div>\\r\\n    </div>\\r\\n    \\r\\n    \\r\\n</article>\\r\\n<Dialog\\r\\n  bind:open\\r\\n  aria-labelledby=\\"simple-title\\"\\r\\n  aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n  <Title id=\\"simple-title\\">How to play</Title>\\r\\n  <Content id=\\"simple-content\\">\\r\\n    <p>\\r\\n        Use the slider to change numbers\\r\\n    </p>\\r\\n  </Content>\\r\\n  <Actions>\\r\\n    <Button on:click={() => (open = false)}>\\r\\n      <Label>Done</Label>\\r\\n    </Button>\\r\\n  </Actions>\\r\\n</Dialog>\\r\\n<style>\\r\\n    .hflex {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        gap: 1em;\\r\\n    }\\r\\n    .shape {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        padding: 1em;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        gap: 0.5em;\\r\\n        flex-wrap: wrap;\\r\\n    }\\r\\n    .round {\\r\\n        width: 70px;\\r\\n        height: 70px;\\r\\n        border-radius: 50%;\\r\\n        border: 2px solid goldenrod;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    :global(.katex) {\\r\\n\\t\\tcolor: currentcolor;\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AA2FI,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GACT,CACA,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,IACf,CACA,qBAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,CAC3B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CACQ,MAAQ,CAClB,KAAK,CAAE,YACR"}`
};
const Counting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let number = 0;
  let numbers = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
    "Twenty-One",
    "Twenty-Two",
    "Twenty-Three",
    "Twenty-Four",
    "Twenty-Five",
    "Twenty-Six",
    "Twenty-Seven",
    "Twenty-Eight",
    "Twenty-Nine",
    "Thirty",
    "Thirty-One",
    "Thirty-Two",
    "Thirty-Three",
    "Thirty-Four",
    "Thirty-Five",
    "Thirty-Six",
    "Thirty-Seven",
    "Thirty-Eight",
    "Thirty-Nine",
    "Forty",
    "Forty-One",
    "Forty-Two",
    "Forty-Three",
    "Forty-Four",
    "Forty-Five",
    "Forty-Six",
    "Forty-Seven",
    "Forty-Eight",
    "Forty-Nine",
    "Fifty",
    "Fifty-One",
    "Fifty-Two",
    "Fifty-Three",
    "Fifty-Four",
    "Fifty-Five",
    "Fifty-Six",
    "Fifty-Seven",
    "Fifty-Eight",
    "Fifty-Nine",
    "Sixty",
    "Sixty-One",
    "Sixty-Two",
    "Sixty-Three",
    "Sixty-Four",
    "Sixty-Five",
    "Sixty-Six",
    "Sixty-Seven",
    "Sixty-Eight",
    "Sixty-Nine",
    "Seventy",
    "Seventy-One",
    "Seventy-Two",
    "Seventy-Three",
    "Seventy-Four",
    "Seventy-Five",
    "Seventy-Six",
    "Seventy-Seven",
    "Seventy-Eight",
    "Seventy-Nine",
    "Eighty",
    "Eighty-One",
    "Eighty-Two",
    "Eighty-Three",
    "Eighty-Four",
    "Eighty-Five",
    "Eighty-Six",
    "Eighty-Seven",
    "Eighty-Eight",
    "Eighty-Nine",
    "Ninety",
    "Ninety-One",
    "Ninety-Two",
    "Ninety-Three",
    "Ninety-Four",
    "Ninety-Five",
    "Ninety-Six",
    "Ninety-Seven",
    "Ninety-Eight",
    "Ninety-Nine",
    "Hundred"
  ];
  let panel;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article${add_attribute("this", panel, 0)}>${validate_component(ActionButtons, "ActionButtons").$$render($$result, { style: "justify-content:space-between" }, {}, {
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
    })} <div class="actions" data-svelte-h="svelte-114n0pk"></div> <h1 class="mdc-typography--headline5" style="text-align:center;margin:0" data-svelte-h="svelte-r9g7s0">Counting</h1> <div class="controls">${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 0,
            max: 100,
            step: 1,
            discrete: true,
            tickMarks: true,
            "input$aria-label": "x",
            value: number
          },
          {
            value: ($$value) => {
              number = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <h4 class="mdc-typography--headline5" style="margin:0 0 0.5em 0;color:goldenrod;text-align:center">${escape(numbers[number])} ${escape(number)}</h4> <div class="hflex svelte-1yve7hq"><div class="shape svelte-1yve7hq">${each(Array(number), (item, i) => {
      return `<span class="round svelte-1yve7hq" style="${"width:" + escape(300 / 8, true) + "px; height:" + escape(300 / 8, true) + "px"}">${escape(i + 1)}</span>`;
    })}</div></div></article> ${validate_component(Dialog, "Dialog").$$render(
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
              return `<p data-svelte-h="svelte-14buxbg">Use the slider to change numbers</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import Counting from '$lib/mathril/games/Counting.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Counting\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Counting />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Counting", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Counting, "Counting").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dw6dEKp4.js.map
