import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, i as each } from './ssr2-q3O0l93f.js';
import { C as Content, A as ActionButtons } from './ActionIcons-BJ7xikju.js';
import { B as Button } from './Button-DRRmGjqZ.js';
import { C as CommonLabel } from './CommonLabel-BuPx8XxF.js';
import './client-k3u4ChD_.js';
import { D as Dialog } from './Dialog-BiqQGBu2.js';
import { T as Title, C as Content$1, A as Actions } from './Actions2-DHH8wTTf.js';
import { S as Set_1, C as Chip } from './Set-sNJQHEw8.js';
import { T as Text } from './Text-B4-H59Yc.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { c as currentPath } from './stores5-DsHYdTD6.js';
import './classAdderBuilder-B9W9nXDD.js';
import './SmuiElement-DA9PKsv2.js';
import './Ripple-Zq_D_mxy.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';
import './prefixFilter-B6cFZsw3.js';
import './ContextFragment-e-oupRQm.js';

const css$1 = {
  code: ".controls.svelte-1383f3o{display:flex;align-items:center;justify-content:center;flex-direction:column}.canvas.svelte-1383f3o{display:flex;justify-content:center}.katex{color:currentcolor}table.svelte-1383f3o{border-collapse:collapse}",
  map: `{"version":3,"file":"Addition2.svelte","sources":["Addition2.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from \\"@smui/card\\";\\r\\n    import Slider from \\"@smui/slider\\";\\r\\n    import FormField from \\"@smui/form-field\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import { randInt } from \\"$lib/mathril/utils/matlib/common\\";\\r\\n    import Dialog, { Title, Content, Actions } from \\"@smui/dialog\\";\\r\\n    import Chip, { Set, LeadingIcon, TrailingIcon, Text } from '@smui/chips';\\r\\n    let open = false;\\r\\n    \\r\\n    let count = 2;\\r\\n    let nstep = 0;\\r\\n    let dmax = 2;\\r\\n    let carry = Array.from('0'.repeat(dmax));\\r\\n    let showCarry = Array.from('0'.repeat(dmax));\\r\\n    let sum = Array.from('0'.repeat(dmax));\\r\\n    let showSum = Array.from('0'.repeat(dmax));\\r\\n    let digits = carry.map((t) => [0, 0]);\\r\\n    const changed = (k) => {\\r\\n        dmax = k;\\r\\n        carry = Array.from('0'.repeat(dmax));\\r\\n        showCarry = Array.from('0'.repeat(dmax));\\r\\n        sum = Array.from('0'.repeat(dmax));\\r\\n        showSum = Array.from('0'.repeat(dmax));\\r\\n        digits = carry.map((t) => [0, 0]);\\r\\n        digits = digits;\\r\\n    }\\r\\n    \\r\\n    \\r\\n    const setNumbers = () => {\\r\\n        nstep = 0;\\r\\n        digits = [];\\r\\n        carry = [];\\r\\n        showCarry = [];\\r\\n        showSum = [];\\r\\n        sum = [];\\r\\n        for(let i = 0; i < dmax; i++) {\\r\\n            let temp = [];\\r\\n            carry.push(0);\\r\\n            showCarry.push('');\\r\\n            showSum.push('');\\r\\n            sum.push(0)\\r\\n            for(let j = 0; j < count; j++) {\\r\\n                temp.push(randInt(9, 1));\\r\\n            }\\r\\n            digits.push(temp);\\r\\n        }\\r\\n        digits = digits;\\r\\n        for(let j = dmax - 1; j >= 0; j--) {\\r\\n            let s = carry[j];\\r\\n            for(let i = 0; i < count; i++) {\\r\\n                s += digits[j][i];\\r\\n            }\\r\\n            if(s > 9) {\\r\\n                if(j !== 0) {\\r\\n                    carry[j - 1] += Math.floor(s/10);\\r\\n                }\\r\\n                sum[j] = s - Math.floor(s/10) * 10;\\r\\n                carry = carry;\\r\\n            } else {\\r\\n                sum[j] = s;\\r\\n            }\\r\\n            if(j == 0) {\\r\\n                sum[0] = s;\\r\\n            }\\r\\n        }\\r\\n        sum = sum;\\r\\n    }\\r\\n    // $: console.log(sum)\\r\\n    const setStep = () => {\\r\\n        if(nstep >= dmax) return;\\r\\n        if(dmax - 2 - nstep >=0 && carry[dmax - 2 - nstep] > 0)\\r\\n        {\\r\\n            showCarry[dmax - 2 - nstep] = carry[dmax - 2 - nstep];\\r\\n        }\\r\\n        showSum[dmax - 1 - nstep] = sum[dmax - 1 - nstep];\\r\\n        showCarry = showCarry;\\r\\n        showSum = showSum;\\r\\n        \\r\\n        nstep++;\\r\\n    }\\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n        setTimeout(() => {\\r\\n            renderMathInElement(panel, {\\r\\n                delimiters: [\\r\\n                    { left: \\"$$\\", right: \\"$$\\", display: true },\\r\\n                    { left: \\"$\\", right: \\"$\\", display: false },\\r\\n                    { left: \\"\\\\\\\\(\\", right: \\"\\\\\\\\)\\", display: false },\\r\\n                    { left: \\"\\\\\\\\[\\", right: \\"\\\\\\\\]\\", display: true },\\r\\n                ],\\r\\n                // • rendering keys, e.g.:\\r\\n                throwOnError: false,\\r\\n            });\\r\\n        }, 0);\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline5\\" style=\\"text-align:center;margin:0 0 0.5em 0\\">\\r\\n        Addition\\r\\n    </h1>\\r\\n    <div class=\\"controls\\">\\r\\n        <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Digits</h4>\\r\\n        <Set chips={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} let:chip>\\r\\n            <Chip\\r\\n              {chip}\\r\\n              shouldRemoveOnTrailingIconClick={false}\\r\\n              on:click={() => changed(chip)}\\r\\n            >\\r\\n              <Text tabindex={0}>{chip}</Text>\\r\\n            </Chip>\\r\\n          </Set>\\r\\n    </div>\\r\\n    <Button style=\\"display:flex; margin:auto;\\" on:click={setNumbers}>New</Button>\\r\\n    <div class=\\"canvas\\">\\r\\n        <table>\\r\\n            <tr>\\r\\n                <td  style=\\"text-align: right;\\">Carry</td>\\r\\n                {#each Array(dmax) as digit, i}\\r\\n                    <td style=\\"color: {nstep === dmax - i ? 'tomato': ''}\\">{showCarry[i]}</td>\\r\\n                {/each}\\r\\n            </tr>\\r\\n            {#each Array(count) as count, j}\\r\\n                <tr>\\r\\n                    <td style=\\"text-align: right;\\">+</td>\\r\\n                    {#each Array(dmax) as digit, i}\\r\\n                        <td style=\\"color: {nstep === dmax - i ? 'tomato': ''}\\">{digits[i][j]}</td>\\r\\n                    {/each}\\r\\n                </tr>\\r\\n            {/each}\\r\\n            <tr>\\r\\n                <td style=\\"border-top: 2px solid currentColor;\\"></td>\\r\\n                {#each showSum as sd, i}\\r\\n                    <td style=\\"border-top: 2px solid currentColor; color: {nstep === dmax - i && nstep < dmax ? 'tomato': ''}\\">{sd}</td>\\r\\n                {/each}\\r\\n            </tr>\\r\\n        </table>\\r\\n    </div>\\r\\n    <Button style=\\"display:flex; margin:auto;\\" on:click={setStep}>Next Step</Button>\\r\\n</article>\\r\\n<Dialog\\r\\n    bind:open\\r\\n    aria-labelledby=\\"simple-title\\"\\r\\n    aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n    <Title id=\\"simple-title\\">How to play</Title>\\r\\n    <Content id=\\"simple-content\\">\\r\\n        <p>Choose the number of digits.</p>\\r\\n        <p>Click on new to get two numbers to add.</p>\\r\\n        <p>Click on Next Step to get step-by-step number addition.</p>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => (open = false)}>\\r\\n            <Label>Done</Label>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Dialog>\\r\\n\\r\\n<style>\\r\\n    .controls {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .canvas {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    :global(.katex) {\\r\\n        color: currentcolor;\\r\\n    }\\r\\n    table {\\r\\n        border-collapse: collapse;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuKI,wBAAU,CACN,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,MACpB,CACA,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACrB,CACQ,MAAQ,CACZ,KAAK,CAAE,YACX,CACA,oBAAM,CACF,eAAe,CAAE,QACrB"}`
};
let count = 2;
const Addition2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let nstep = 0;
  let dmax = 2;
  let carry = Array.from("0".repeat(dmax));
  let showCarry = Array.from("0".repeat(dmax));
  Array.from("0".repeat(dmax));
  let showSum = Array.from("0".repeat(dmax));
  let digits = carry.map((t) => [0, 0]);
  let panel;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
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
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-15kdrz4">Addition</h1> <div class="controls svelte-1383f3o"><h4 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-dc1mq2">Digits</h4> ${validate_component(Set_1, "Set").$$render($$result, { chips: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, {}, {
      default: ({ chip }) => {
        return `${validate_component(Chip, "Chip").$$render(
          $$result,
          {
            chip,
            shouldRemoveOnTrailingIconClick: false
          },
          {},
          {
            default: () => {
              return `${validate_component(Text, "Text").$$render($$result, { tabindex: 0 }, {}, {
                default: () => {
                  return `${escape(chip)}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}</div> ${validate_component(Button, "Button").$$render($$result, { style: "display:flex; margin:auto;" }, {}, {
      default: () => {
        return `New`;
      }
    })} <div class="canvas svelte-1383f3o"><table class="svelte-1383f3o"><tr><td style="text-align: right;" data-svelte-h="svelte-10mwkpd">Carry</td> ${each(Array(dmax), (digit, i) => {
      return `<td style="${"color: " + escape(nstep === dmax - i ? "tomato" : "", true)}">${escape(showCarry[i])}</td>`;
    })}</tr> ${each(Array(count), (count2, j) => {
      return `<tr><td style="text-align: right;" data-svelte-h="svelte-1e3r53x">+</td> ${each(Array(dmax), (digit, i) => {
        return `<td style="${"color: " + escape(nstep === dmax - i ? "tomato" : "", true)}">${escape(digits[i][j])}</td>`;
      })} </tr>`;
    })} <tr><td style="border-top: 2px solid currentColor;"></td> ${each(showSum, (sd, i) => {
      return `<td style="${"border-top: 2px solid currentColor; color: " + escape(nstep === dmax - i && nstep < dmax ? "tomato" : "", true)}">${escape(sd)}</td>`;
    })}</tr></table></div> ${validate_component(Button, "Button").$$render($$result, { style: "display:flex; margin:auto;" }, {}, {
      default: () => {
        return `Next Step`;
      }
    })}</article> ${validate_component(Dialog, "Dialog").$$render(
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
              return `<p data-svelte-h="svelte-1lf7sig">Choose the number of digits.</p> <p data-svelte-h="svelte-1ydsvgk">Click on new to get two numbers to add.</p> <p data-svelte-h="svelte-g4bf31">Click on Next Step to get step-by-step number addition.</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import Addition2 from '$lib/mathril/games/Addition2.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Subtraction\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Addition2 />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Subtraction", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Addition2, "Addition2").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D6PiXvSx.js.map
