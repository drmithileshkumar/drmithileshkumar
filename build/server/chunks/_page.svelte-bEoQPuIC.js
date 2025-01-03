import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-BJ7xikju.js';
import { L as List, I as Item } from './Item-Cixi8uf3.js';
import { T as Text } from './Subheader-BV9F6O0P.js';
import { G as Graphic } from './Graphic-BjEt0ZHi.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath } from './stores-Bb_1fHB9.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-Zq_D_mxy.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';

const css = {
  code: "article.svelte-86n1i9{display:flex;flex-direction:column;gap:0.5em}h3.svelte-86n1i9,h5.svelte-86n1i9{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    // @ts-nocheck\\r\\n        import Card, {Content} from '@smui/card';\\r\\n        import List, { Item, Graphic, Separator, Text } from '@smui/list';\\r\\n        import {goto} from \\"$app/navigation\\";\\r\\n        import Message from '$lib/ui/Message.svelte';\\r\\n        import Link from '$lib/ui/Link.svelte';\\r\\n        import {page} from '$app/stores';\\r\\n        import {onMount} from 'svelte';\\r\\n        import { currentPath } from \\"$lib/stores\\";\\r\\n        import { darkMode } from \\"$lib/stores\\"\\r\\n        let clicked;\\r\\n        $currentPath = \\"Courses\\";\\r\\n        $darkMode = false;\\r\\n        onMount(() => {\\r\\n            MathJax.typeset();\\r\\n        });\\r\\n    <\/script>\\r\\n    <style>\\r\\n        article {\\r\\n            display:flex;\\r\\n            flex-direction: column;\\r\\n            gap: 0.5em;\\r\\n        }\\r\\n        h3,h5 {\\r\\n            margin: 0.5em 0;\\r\\n        }\\r\\n    </style>\\r\\n    <svelte:head>\\r\\n        <title>Courses</title>\\r\\n        <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/talks\\" />\\r\\n        <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    </svelte:head>\\r\\n    <article>\\r\\n        <h3>Talks</h3>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h5>Past</h5>\\r\\n                <div>\\r\\n                    <List class=\\"courses\\" dense>\\r\\n                      <Item on:SMUI:action={() => goto('/talks/quantumteleportation')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Teleportation</Text>\\r\\n                      </Item>\\r\\n                    </List>\\r\\n                  </div>\\r\\n            </Content>\\r\\n        </Card> \\r\\n        <h3>\\r\\n            Workshops\\r\\n        </h3>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h5>Upcoming</h5>\\r\\n                <div>\\r\\n                    <List class=\\"courses\\" dense>\\r\\n                      <Item on:SMUI:action={() => goto('/talks/quantumstatus')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Current Status of Quantum Computing</Text>\\r\\n                      </Item>\\r\\n                    </List>\\r\\n                  </div>\\r\\n            </Content>\\r\\n        </Card> \\r\\n    </article>"],"names":[],"mappings":"AAmBQ,qBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAE,CAAC,gBAAG,CACF,MAAM,CAAE,KAAK,CAAC,CAClB"}`
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
  return `${$$result.head += `<!-- HEAD_svelte-2iic1c_START -->${$$result.title = `<title>Courses</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/talks"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-2iic1c_END -->`, ""} <article class="svelte-86n1i9"><h3 class="svelte-86n1i9" data-svelte-h="svelte-112ly1v">Talks</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-86n1i9" data-svelte-h="svelte-t7vgac">Past</h5> <div>${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
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
  })} <h3 class="svelte-86n1i9" data-svelte-h="svelte-15xgbww">Workshops</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-86n1i9" data-svelte-h="svelte-4wi05q">Upcoming</h5> <div>${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
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
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bEoQPuIC.js.map
