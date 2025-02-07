import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { L as List, I as Item } from './Item-T2YrjSpA.js';
import { T as Text } from './Subheader-DEm_inUP.js';
import { G as Graphic } from './Graphic-CnHJKmsY.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath } from './stores-Cecnyqn_.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-N--aPaMn.js';
import './exports-kR70XCWV.js';
import './index2-D2s-XE5r.js';

const css = {
  code: "article.svelte-1qzahjj{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}h3.svelte-1qzahjj,h5.svelte-1qzahjj{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\t// @ts-nocheck\\r\\n\\timport Card, { Content } from '@smui/card';\\r\\n\\timport List, { Item, Graphic, Separator, Text } from '@smui/list';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport Message from '$lib/ui/Message.svelte';\\r\\n\\timport Link from '$lib/ui/Link.svelte';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport { currentPath } from '$lib/stores';\\r\\n\\timport { darkMode } from '$lib/stores';\\r\\n\\tlet clicked;\\r\\n\\t$currentPath = 'Courses';\\r\\n\\t$darkMode = false;\\r\\n\\tonMount(() => {\\r\\n\\t\\tMathJax.typeset();\\r\\n\\t});\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Talks</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/talks\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n\\t<h3>Talks</h3>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<h5>Past</h5>\\r\\n\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t<List class=\\"courses\\" dense>\\r\\n                    <Item on:SMUI:action={() => goto('/talks/sorting')}>\\r\\n\\t\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t\\t<Text>Sorting</Text>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/talks/quantumteleportation')}>\\r\\n\\t\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t\\t<Text>Quantum Teleportation</Text>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</List>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n\\t<h3>Workshops</h3>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<h5>Upcoming</h5>\\r\\n\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t<List class=\\"courses\\" dense>\\r\\n\\t\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/talks/quantumstatus')}>\\r\\n\\t\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t\\t<Text>Current Status of Quantum Computing</Text>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</List>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t\\tmax-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n\\t}\\r\\n\\th3,\\r\\n\\th5 {\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4DC,sBAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CACV,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACf,CACA,iBAAE,CACF,iBAAG,CACF,MAAM,CAAE,KAAK,CAAC,CACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Courses", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-11d1zo4_START -->${$$result.title = `<title>Talks</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/talks"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-11d1zo4_END -->`, ""} <article class="svelte-1qzahjj"><h3 class="svelte-1qzahjj" data-svelte-h="svelte-112ly1v">Talks</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1qzahjj" data-svelte-h="svelte-t7vgac">Past</h5> <div>${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `menu_book`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Sorting`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `menu_book`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Quantum Teleportation`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })} <h3 class="svelte-1qzahjj" data-svelte-h="svelte-1ivgjgo">Workshops</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1qzahjj" data-svelte-h="svelte-4wi05q">Upcoming</h5> <div>${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `menu_book`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Current Status of Quantum Computing`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Djr0dVRx.js.map
