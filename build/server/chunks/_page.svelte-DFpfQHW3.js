import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from './ssr2-CDgUAJs6.js';
import { C as Content, A as ActionButtons } from './ActionIcons-Bx2zL88O.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import './client-CAo-6NMJ.js';
import { D as Dialog } from './Dialog-DnxCTH9Z.js';
import { T as Title, C as Content$1, A as Actions } from './Actions2-D_E0WmBW.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { c as currentPath } from './stores5-CI5tJYhk.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './Ripple-N--aPaMn.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';
import './prefixFilter-B6cFZsw3.js';

const css$1 = {
  code: ".hflex.svelte-4cc1j9{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:1em}.shape.svelte-4cc1j9{display:flex;align-items:center;justify-content:center;border:1px solid teal;padding:1em;flex-direction:column;width:150px;height:150px;position:relative}.round.svelte-4cc1j9{width:70px;height:70px;border-radius:50%;border:1px solid goldenrod;display:flex;align-items:center;justify-content:center}.bullet.svelte-4cc1j9{width:10px;height:10px;border-radius:50%;border:1px solid goldenrod;display:flex;align-items:center;justify-content:center;position:absolute;background:goldenrod;transform:translate(-50%);transition:all 1s}.katex{color:currentcolor}",
  map: `{"version":3,"file":"InOut.svelte","sources":["InOut.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from \\"@smui/card\\";\\r\\n    import Slider from \\"@smui/slider\\";\\r\\n    import FormField from \\"@smui/form-field\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import { randInt } from \\"$lib/mathril/utils/matlib/common\\";\\r\\n    import Dialog, { Title, Content, Actions } from \\"@smui/dialog\\";\\r\\n    let open = false;\\r\\n    \\r\\n    let state = 'Inside';\\r\\n    let left = '50%';\\r\\n    const setState = () => {\\r\\n        state = state === 'Inside' ? 'Outside' : 'Inside';\\r\\n        left = state === 'Inside' ? '50%' : '85%';\\r\\n    }\\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n        setTimeout(() => {\\r\\n            renderMathInElement(panel, {\\r\\n                delimiters: [\\r\\n                    { left: \\"$$\\", right: \\"$$\\", display: true },\\r\\n                    { left: \\"$\\", right: \\"$\\", display: false },\\r\\n                    { left: \\"\\\\\\\\(\\", right: \\"\\\\\\\\)\\", display: false },\\r\\n                    { left: \\"\\\\\\\\[\\", right: \\"\\\\\\\\]\\", display: true },\\r\\n                ],\\r\\n                // • rendering keys, e.g.:\\r\\n                throwOnError: false,\\r\\n            });\\r\\n        }, 0);\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline5\\" style=\\"text-align:center;margin:0 0 0.5em 0\\">\\r\\n        Inside Outside\\r\\n    </h1>\\r\\n    <div class=\\"hflex\\">\\r\\n        <div class=\\"shape\\">\\r\\n            <span class=\\"bullet\\" style=\\"left: {left};\\"></span>\\r\\n            <span class=\\"round\\">\\r\\n            </span>\\r\\n        </div>\\r\\n    </div>\\r\\n    <Button style=\\"display:flex; margin:auto;\\" on:click={setState}>{state}</Button>\\r\\n</article>\\r\\n<Dialog\\r\\n    bind:open\\r\\n    aria-labelledby=\\"simple-title\\"\\r\\n    aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n    <Title id=\\"simple-title\\">How to play</Title>\\r\\n    <Content id=\\"simple-content\\">\\r\\n        <p>Click on Button to change the position.</p>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => (open = false)}>\\r\\n            <Label>Done</Label>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Dialog>\\r\\n\\r\\n<style>\\r\\n    .hflex {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        gap: 1em;\\r\\n    }\\r\\n    .shape {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: 1px solid teal;\\r\\n        padding: 1em;\\r\\n        flex-direction: column;\\r\\n        width: 150px;\\r\\n        height: 150px;\\r\\n        position: relative;\\r\\n    }\\r\\n    .round {\\r\\n        width: 70px;\\r\\n        height: 70px;\\r\\n        border-radius: 50%;\\r\\n        border: 1px solid goldenrod;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    .bullet {\\r\\n        width: 10px;\\r\\n        height: 10px;\\r\\n        border-radius: 50%;\\r\\n        border: 1px solid goldenrod;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        position: absolute;\\r\\n        background: goldenrod;\\r\\n        transform: translate(-50%);\\r\\n        transition: all 1s;\\r\\n    }\\r\\n    :global(.katex) {\\r\\n        color: currentcolor;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqEI,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GACT,CACA,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CACZ,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QACd,CACA,oBAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,CAC3B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CACA,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,CAC3B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,SAAS,CACrB,SAAS,CAAE,UAAU,IAAI,CAAC,CAC1B,UAAU,CAAE,GAAG,CAAC,EACpB,CACQ,MAAQ,CACZ,KAAK,CAAE,YACX"}`
};
const InOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let state = "Inside";
  let left = "50%";
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
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-ge7m1n">Inside Outside</h1> <div class="hflex svelte-4cc1j9"><div class="shape svelte-4cc1j9"><span class="bullet svelte-4cc1j9" style="${"left: " + escape(left, true) + ";"}"></span> <span class="round svelte-4cc1j9" data-svelte-h="svelte-q87ysf"></span></div></div> ${validate_component(Button, "Button").$$render($$result, { style: "display:flex; margin:auto;" }, {}, {
      default: () => {
        return `${escape(state)}`;
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
              return `<p data-svelte-h="svelte-1lluweg">Click on Button to change the position.</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import InOut from '$lib/mathril/games/InOut.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Inside Outside\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <InOut />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Inside Outside", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(InOut, "InOut").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DFpfQHW3.js.map
