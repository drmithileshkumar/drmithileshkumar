import { a as subscribe, b as set_store_value } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, h as add_attribute, v as validate_component, e as escape } from "../../../../../../chunks/ssr2.js";
import { A as ActionButtons, C as Content$1 } from "../../../../../../chunks/ActionIcons.js";
import { B as Button } from "../../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../../chunks/CommonLabel.js";
import "../../../../../../chunks/client.js";
import { D as Dialog } from "../../../../../../chunks/Dialog.js";
import { T as Title, C as Content, A as Actions } from "../../../../../../chunks/Actions2.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { c as currentPath } from "../../../../../../chunks/stores5.js";
const css$1 = {
  code: 'figure.svelte-aiq1cx{height:100%;display:grid;grid-template-areas:"left right";gap:0.5em;transition:all 2s}.left.svelte-aiq1cx{border:1px solid currentColor;grid-area:left;height:100px;width:100%;display:flex;align-items:center;justify-content:center;gap:5px;padding:5px}.centered.svelte-aiq1cx{display:flex;align-items:center;justify-content:center;transition:all 1s}.part.svelte-aiq1cx{border:1px solid currentColor}.right.svelte-aiq1cx{border:1px solid currentColor;grid-area:right;height:100px;width:100%;display:flex;align-items:center;justify-content:center;gap:5px;padding:5px}.katex{color:currentcolor}',
  map: `{"version":3,"file":"EuclidHCF.svelte","sources":["EuclidHCF.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import { scale, fade, fly } from 'svelte/transition';\\r\\n    import { ActionButtons } from '@smui/card';\\r\\n    import Slider from '@smui/slider';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import { goto } from '$app/navigation'\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import { randInt } from \\"$lib/mathril/utils/matlib/common\\";\\r\\n    import Dialog, { Title, Content, Actions } from '@smui/dialog';\\r\\n    \\r\\n    let open = false;\\r\\n    let a = 1;\\r\\n    let b = 1;\\r\\n    let q = 1;\\r\\n    let r = 0;\\r\\n    let step = -1;\\r\\n    let done = false;\\r\\n    let opacity = 1;\\r\\n    let state = 'divide';\\r\\n    let leftp = 1, rightp = 1;\\r\\n    let left = a, right = b;\\r\\n    const setDivision = () => {\\r\\n        b = randInt(10, 1);\\r\\n        q = randInt(10, 1);\\r\\n        r = randInt(b - 1, 0);\\r\\n        a = b * q + r;\\r\\n        leftp = a / (a + b);\\r\\n        rightp = b / (a + b);\\r\\n        left = a;\\r\\n        right = b;\\r\\n        step = 0;\\r\\n        done = false;\\r\\n        opacity = 1;\\r\\n        state = 'divide';\\r\\n    }\\r\\n    const setStep = () => {\\r\\n        // if(done) opacity = 0;\\r\\n        if(left === 0 || right === 0) return;\\r\\n        if(state === 'divide') {\\r\\n            if(step % 2 === 0) {\\r\\n\\r\\n            } else {\\r\\n\\r\\n            }\\r\\n            state = 'move';\\r\\n        } else {\\r\\n            if(left > 0 && right > 0) {\\r\\n                if(step % 2 === 0) {\\r\\n                    left = left % right;\\r\\n                } else {\\r\\n                    right = right % left;\\r\\n                }\\r\\n                step = step + 1;\\r\\n                leftp = left / (left + right);\\r\\n                rightp = right / (left + right);\\r\\n                state = 'divide';\\r\\n            }\\r\\n        }\\r\\n        \\r\\n        \\r\\n    }\\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\trenderMathInElement(panel, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n\\t\\t}, 0);\\r\\n\\t}\\r\\n\\r\\n<\/script>\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline5\\" style='text-align:center;margin:0 0 0.5em 0'>Euclid's Division Algorithm</h1>\\r\\n    <Button style=\\"display:flex; margin:auto;\\" on:click={setDivision}>new</Button>\\r\\n    <p style=\\"text-align:center\\">\\r\\n        <span>HCF of \\\\(a = \\\\)</span>\\r\\n        {#key a}\\r\\n             {a}\\r\\n        {/key}\\r\\n        <span>and \\\\(b = \\\\) </span>\\r\\n        {#key b}\\r\\n            {b}\\r\\n        {/key}\\r\\n    </p>\\r\\n    <figure style=\\"grid-template-columns: {leftp}fr {rightp}fr;\\">\\r\\n        <div class=\\"left\\">\\r\\n            {#if state === 'move' && step % 2 === 0 && right > 0}\\r\\n                {#each Array(Math.floor(left / right)) as lt, i}\\r\\n                    <div in:scale|global={{duration:1000}} out:scale|global={{duration:1000}} class=\\"centered part\\" style=\\"width: {100*left/right}%\\">{right}</div>\\r\\n                {/each}\\r\\n            {/if}\\r\\n            \\r\\n                <div \\r\\n                    transition:scale|global={{duration:1000}} \\r\\n                    class=\\"centered {step%2===0 && state==='move' ? 'part' : ''}\\" \\r\\n                    style=\\"width: {step%2===0 && state==='move' ? 100*left/right : 100}%\\"\\r\\n                    >\\r\\n                    {step%2===0 && state==='move' && right > 0 ?left % right:left}\\r\\n                </div>\\r\\n            \\r\\n        </div>\\r\\n        <div class=\\"right\\">\\r\\n            {#if state === 'move' && step % 2 === 1 && left > 0}\\r\\n                {#each Array(Math.floor(right / left)) as rt, i}\\r\\n                    <div in:scale|global={{duration:1000}} out:scale|global={{duration:1000}} class=\\"centered part\\" style=\\"width: {100*left/right}%\\">{left}</div>\\r\\n                {/each}\\r\\n                <div in:scale|global={{duration:1000}} out:scale|global={{duration:1000}} class=\\"centered part\\" style=\\"width: {100*left/right}%\\">{right % left}</div>\\r\\n            {:else}\\r\\n                <span in:fade|global={{duration:1000}}>{right}</span>\\r\\n            {/if}\\r\\n        </div>\\r\\n    </figure>\\r\\n    <div class=\\"controls\\">\\r\\n            <h1 class=\\"mdc-typography--headline6\\" style='text-align:center;margin:0'>\\r\\n                <span>HCF({a}, {b}) = HCF({left}, {right})</span>\\r\\n                <br>\\r\\n                {#if step % 2 === 0}\\r\\n                    {#if right !== 0}\\r\\n                        <span> {left} = {Math.floor(left / right)} <span>&#8226;</span> {right} + {left % right}</span>\\r\\n                    {:else}\\r\\n                        <span> HCF = {left}</span>\\r\\n                    {/if}\\r\\n                {:else}\\r\\n                    {#if left !== 0}\\r\\n                        <span> {right} = {Math.floor(right / left)} <span>&#8226;</span> {left} + {right % left}</span>\\r\\n                    {:else}\\r\\n                        <span> HCF = {right}</span>\\r\\n                    {/if}\\r\\n                {/if}\\r\\n            </h1>\\r\\n            <Button style=\\"display:flex; margin:auto;\\" on:click={setStep}>{opacity === 1 ? 'Next Step' : 'Done'}</Button>\\r\\n        <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            \\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={a}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"a\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(a\\\\) = {#key a}<span>{a}</span>{/key}\\r\\n            </span>\\r\\n        </FormField> -->\\r\\n        <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={q}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"q\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(q\\\\) = {#key q}<span>{q}</span>{/key}\\r\\n            </span>\\r\\n        </FormField> -->\\r\\n        \\r\\n    </div>\\r\\n</article>\\r\\n<Dialog\\r\\n  bind:open\\r\\n  aria-labelledby=\\"simple-title\\"\\r\\n  aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n  <Title id=\\"simple-title\\">How to play</Title>\\r\\n  <Content id=\\"simple-content\\">\\r\\n    <p>\\r\\n        Click on new to create new problem.\\r\\n    </p>\\r\\n    <p>\\r\\n        Click on Next Step to go to next step in the calculation.\\r\\n    </p>\\r\\n    <p>\\r\\n        Last step shows the result as the number of groups.\\r\\n    </p>\\r\\n  </Content>\\r\\n  <Actions>\\r\\n    <Button on:click={() => (open = false)}>\\r\\n      <Label>Done</Label>\\r\\n    </Button>\\r\\n  </Actions>\\r\\n</Dialog>\\r\\n<style>\\r\\n    figure {\\r\\n        height: 100%;\\r\\n        display: grid;\\r\\n        grid-template-areas: \\"left right\\";\\r\\n        gap: 0.5em;\\r\\n        transition: all 2s;\\r\\n    }\\r\\n    .left {\\r\\n        border: 1px solid currentColor;\\r\\n        grid-area: left;\\r\\n        height: 100px;\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        gap: 5px;\\r\\n        padding: 5px;\\r\\n    }\\r\\n    .centered {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n    .part {\\r\\n        border: 1px solid currentColor;\\r\\n    }\\r\\n    .right {\\r\\n        border: 1px solid currentColor;\\r\\n        grid-area: right;\\r\\n        height: 100px;\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        gap: 5px;\\r\\n        padding: 5px;\\r\\n    }\\r\\n    :global(.katex) {\\r\\n\\t\\tcolor: currentcolor;\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AAgNI,oBAAO,CACH,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,mBAAmB,CAAE,YAAY,CACjC,GAAG,CAAE,KAAK,CACV,UAAU,CAAE,GAAG,CAAC,EACpB,CACA,mBAAM,CACF,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,YAAY,CAC9B,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GAAG,CACR,OAAO,CAAE,GACb,CACA,uBAAU,CACN,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,GAAG,CAAC,EACpB,CACA,mBAAM,CACF,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,YACtB,CACA,oBAAO,CACH,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,YAAY,CAC9B,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GAAG,CACR,OAAO,CAAE,GACb,CACQ,MAAQ,CAClB,KAAK,CAAE,YACR"}`
};
const EuclidHCF = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let a = 1;
  let b = 1;
  let leftp = 1, rightp = 1;
  let left = a, right = b;
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
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-16my3i4">Euclid&#39;s Division Algorithm</h1> ${validate_component(Button, "Button").$$render($$result, { style: "display:flex; margin:auto;" }, {}, {
      default: () => {
        return `new`;
      }
    })} <p style="text-align:center"><span data-svelte-h="svelte-felcnt">HCF of \\(a = \\)</span> ${escape(a)} <span data-svelte-h="svelte-1oacabh">and \\(b = \\)</span> ${escape(b)}</p> <figure style="${"grid-template-columns: " + escape(leftp, true) + "fr " + escape(rightp, true) + "fr;"}" class="svelte-aiq1cx"><div class="left svelte-aiq1cx">${``} <div class="${"centered " + escape("", true) + " svelte-aiq1cx"}" style="${"width: " + escape(
      100,
      true
    ) + "%"}">${escape(left)}</div></div> <div class="right svelte-aiq1cx">${`<span>${escape(right)}</span>`}</div></figure> <div class="controls"><h1 class="mdc-typography--headline6" style="text-align:center;margin:0"><span>HCF(${escape(a)}, ${escape(b)}) = HCF(${escape(left)}, ${escape(right)})</span> <br> ${`${`<span>${escape(right)} = ${escape(Math.floor(right / left))} <span data-svelte-h="svelte-84uzuc">•</span> ${escape(left)} + ${escape(right % left)}</span>`}`}</h1> ${validate_component(Button, "Button").$$render($$result, { style: "display:flex; margin:auto;" }, {}, {
      default: () => {
        return `${escape("Next Step")}`;
      }
    })}  </div></article> ${validate_component(Dialog, "Dialog").$$render(
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
              return `<p data-svelte-h="svelte-zdzk5n">Click on new to create new problem.</p> <p data-svelte-h="svelte-1soxdcq">Click on Next Step to go to next step in the calculation.</p> <p data-svelte-h="svelte-1hapsbl">Last step shows the result as the number of groups.</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import EuclidHCF from '$lib/mathril/games/EuclidHCF.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Euclid's Division Algorithm\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <EuclidHCF />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Euclid's Division Algorithm", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(EuclidHCF, "EuclidHCF").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});
export {
  Page as default
};
