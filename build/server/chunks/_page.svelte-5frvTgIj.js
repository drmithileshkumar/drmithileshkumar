import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, i as each } from './ssr2-CDgUAJs6.js';
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
  code: ".container.svelte-1d3uyux{display:flex;gap:0.5em;justify-content:center}.hflex.svelte-1d3uyux{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:1em}.shape.svelte-1d3uyux{display:flex;flex-direction:row;flex-wrap:wrap;gap:0.5em;align-content:center;border:1px solid teal;padding:1em;width:150px;height:150px;position:relative}.round.svelte-1d3uyux{width:15px;height:15px;border-radius:50%;display:flex;align-items:center;justify-content:center}.katex{color:currentcolor}",
  map: `{"version":3,"file":"Subtraction.svelte","sources":["Subtraction.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from \\"@smui/card\\";\\r\\n    import { quintOut } from \\"svelte/easing\\";\\r\\n    import { crossfade } from \\"svelte/transition\\";\\r\\n    import { flip } from 'svelte/animate';\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import { randInt } from \\"$lib/mathril/utils/matlib/common\\";\\r\\n    import Dialog, { Title, Content, Actions } from \\"@smui/dialog\\";\\r\\n    let open = false;\\r\\n\\r\\n    let a = 0;\\r\\n    let b = 0;\\r\\n    let c = 0;\\r\\n    let objects = [];\\r\\n    const setSubtraction = () => {\\r\\n        objects = [];\\r\\n        a = randInt(20, 5);\\r\\n        b = randInt(a, 0);\\r\\n        c = a - b;\\r\\n        for(let i = 0; i < a; i++) {\\r\\n            objects.push({\\r\\n                id: i,\\r\\n                side: 'left',\\r\\n                color: 'tomato'\\r\\n            })\\r\\n        }\\r\\n        for(let i = a; i < a + b; i++) {\\r\\n            objects.push({\\r\\n                id: i,\\r\\n                side: 'right',\\r\\n                color: 'green'\\r\\n            })\\r\\n        }\\r\\n        objects = objects;\\r\\n    }\\r\\n    const moveOne = () => {\\r\\n        let left = objects.filter(t => t.side === 'left');\\r\\n        objects[left.length - 1].side = 'right';\\r\\n        objects = objects\\r\\n    }\\r\\n    const cancelOne = () => {\\r\\n        let l = objects.length;\\r\\n        for(let i = a - b; i < l; i++) {\\r\\n            if(objects[i].color === 'green') {\\r\\n                objects.splice(i - 1, 2);\\r\\n                objects = objects;\\r\\n                return;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    const cancelObjects = () => {\\r\\n        let l = b;\\r\\n        let timer = setInterval(() => {\\r\\n            cancelOne();\\r\\n            l--;\\r\\n            if(l < 0) clearInterval(timer)\\r\\n        }, 1000)\\r\\n    }\\r\\n    const subtract = () => {\\r\\n        \\r\\n        let l = b;\\r\\n        \\r\\n        let timer = setInterval(() => {\\r\\n            moveOne();\\r\\n            setTimeout(() => {\\r\\n                cancelOne(); \\r\\n                l--;\\r\\n                if(l <= 0) {\\r\\n                    clearInterval(timer)\\r\\n                    // cancelObjects();\\r\\n                }\\r\\n            }, 1000);\\r\\n            \\r\\n        }, 2000)\\r\\n    }\\r\\n    const [send, receive] = crossfade({\\r\\n        fallback(node, params) {\\r\\n            const style = getComputedStyle(node);\\r\\n            const transform = style.transform === 'none' ? '' : style.transform;\\r\\n            return {\\r\\n                duration: 600,\\r\\n                easing: quintOut,\\r\\n                css: (t) => \`\\r\\n                    transform: \${transform} scale(\${t});\\r\\n                    opacity: \${t}\\r\\n                \`\\r\\n            };\\r\\n        }\\r\\n    });\\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n        setTimeout(() => {\\r\\n            renderMathInElement(panel, {\\r\\n                delimiters: [\\r\\n                    { left: \\"$$\\", right: \\"$$\\", display: true },\\r\\n                    { left: \\"$\\", right: \\"$\\", display: false },\\r\\n                    { left: \\"\\\\\\\\(\\", right: \\"\\\\\\\\)\\", display: false },\\r\\n                    { left: \\"\\\\\\\\[\\", right: \\"\\\\\\\\]\\", display: true },\\r\\n                ],\\r\\n                // • rendering keys, e.g.:\\r\\n                throwOnError: false,\\r\\n            });\\r\\n        }, 0);\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline5\\" style=\\"text-align:center;margin:0 0 0.5em 0\\">\\r\\n        Subtraction\\r\\n    </h1>\\r\\n    <Button style=\\"display:flex; margin:auto;\\" on:click={setSubtraction}>New</Button>\\r\\n    <h1 class=\\"mdc-typography--headline5\\" style=\\"text-align:center;margin:0 0 0.5em 0\\">\\r\\n        {#key a + b + c} <span style=\\"color:tomato\\">{a}</span> - <span style=\\"color:green\\">{b}</span> = {c} {/key}\\r\\n    </h1>\\r\\n    <div class=\\"container\\">\\r\\n        <div class=\\"hflex\\">\\r\\n            <div class=\\"shape\\">\\r\\n                {#each objects.filter((t) => t.side === 'left') as obj (obj.id)}\\r\\n                    <span  \\r\\n                        class=\\"round\\" \\r\\n                        style=\\"background:{obj.color}\\"\\r\\n                        in:receive|global={{ key: obj.id }}\\r\\n                        out:send|global={{ key: obj.id }}\\r\\n                        animate:flip\\r\\n                    ></span>\\r\\n                {/each}\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\"hflex\\">\\r\\n            <div class=\\"shape\\">\\r\\n                {#each objects.filter((t) => t.side === 'right') as obj (obj.id)}\\r\\n                    <span  \\r\\n                        class=\\"round\\" \\r\\n                        style=\\"background:{obj.color}\\"\\r\\n                        in:receive|global={{ key: obj.id }}\\r\\n                        out:send|global={{ key: obj.id }}\\r\\n                        animate:flip\\r\\n                    ></span>\\r\\n                {/each}\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n    \\r\\n    <Button style=\\"display:flex; margin:auto;\\" on:click={subtract}>Subtract</Button>\\r\\n</article>\\r\\n<Dialog\\r\\n    bind:open\\r\\n    aria-labelledby=\\"simple-title\\"\\r\\n    aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n    <Title id=\\"simple-title\\">How to play</Title>\\r\\n    <Content id=\\"simple-content\\">\\r\\n        <p>Click on New to generate new Subtraction example.</p>\\r\\n        <p>Click on Subtract to complete subtraction.</p>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => (open = false)}>\\r\\n            <Label>Done</Label>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Dialog>\\r\\n\\r\\n<style>\\r\\n    .container {\\r\\n        display: flex;\\r\\n        gap: 0.5em;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    .hflex {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        gap: 1em;\\r\\n    }\\r\\n    .shape {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        gap: 0.5em;\\r\\n        align-content: center;\\r\\n        border: 1px solid teal;\\r\\n        padding: 1em;\\r\\n        width: 150px;\\r\\n        height: 150px;\\r\\n        position: relative;\\r\\n    }\\r\\n    .round {\\r\\n        width: 15px;\\r\\n        height: 15px;\\r\\n        border-radius: 50%;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    \\r\\n    :global(.katex) {\\r\\n        color: currentcolor;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0KI,yBAAW,CACP,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,eAAe,CAAE,MACrB,CACA,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GACT,CACA,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,KAAK,CACV,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CACZ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QACd,CACA,qBAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CAEQ,MAAQ,CACZ,KAAK,CAAE,YACX"}`
};
const Subtraction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let a = 0;
  let b = 0;
  let c = 0;
  let objects = [];
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
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-1x0pz6k">Subtraction</h1> ${validate_component(Button, "Button").$$render($$result, { style: "display:flex; margin:auto;" }, {}, {
      default: () => {
        return `New`;
      }
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0"><span style="color:tomato">${escape(a)}</span> - <span style="color:green">${escape(b)}</span> = ${escape(c)}</h1> <div class="container svelte-1d3uyux"><div class="hflex svelte-1d3uyux"><div class="shape svelte-1d3uyux">${each(objects.filter((t) => t.side === "left"), (obj) => {
      return `<span class="round svelte-1d3uyux" style="${"background:" + escape(obj.color, true)}"></span>`;
    })}</div></div> <div class="hflex svelte-1d3uyux"><div class="shape svelte-1d3uyux">${each(objects.filter((t) => t.side === "right"), (obj) => {
      return `<span class="round svelte-1d3uyux" style="${"background:" + escape(obj.color, true)}"></span>`;
    })}</div></div></div> ${validate_component(Button, "Button").$$render($$result, { style: "display:flex; margin:auto;" }, {}, {
      default: () => {
        return `Subtract`;
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
              return `<p data-svelte-h="svelte-14wtb45">Click on New to generate new Subtraction example.</p> <p data-svelte-h="svelte-1d4ywvn">Click on Subtract to complete subtraction.</p>`;
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import Subtraction from '$lib/mathril/games/Subtraction.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Beat Target\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Subtraction />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Beat Target", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Subtraction, "Subtraction").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5frvTgIj.js.map
