import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-Co7bojT-.js';
import './Subheader-BV9F6O0P.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-BHHnS_Mj.js';
import { H as Head } from './Head-DnR4PX6i.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath } from './stores-Dd7WnHpz.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './index2-BZnI6xu7.js';
import './prefixFilter-B6cFZsw3.js';
import './exports-kR70XCWV.js';

const css = {
  code: "article.svelte-86n1i9{display:flex;flex-direction:column;gap:0.5em}h5.svelte-86n1i9{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    // @ts-nocheck\\r\\n        import Card, {Content} from '@smui/card';\\r\\n        import List, { Item, Graphic, Separator, Text } from '@smui/list';\\r\\n        import Datatable, {Head, Body, Row, Cell} from '@smui/data-table';\\r\\n        import {goto} from \\"$app/navigation\\";\\r\\n        import Message from '$lib/ui/Message.svelte';\\r\\n        import Link from '$lib/ui/Link.svelte';\\r\\n        import {page} from '$app/stores';\\r\\n        import {onMount} from 'svelte';\\r\\n        import { currentPath } from \\"$lib/stores\\";\\r\\n        import { darkMode } from \\"$lib/stores\\"\\r\\n        let clicked;\\r\\n        $currentPath = \\"Current Status of Quantum Computing\\";\\r\\n        $darkMode = false;\\r\\n        onMount(() => {\\r\\n            MathJax.typeset();\\r\\n        });\\r\\n    <\/script>\\r\\n    <style>\\r\\n        article {\\r\\n            display:flex;\\r\\n            flex-direction: column;\\r\\n            gap: 0.5em;\\r\\n        }\\r\\n        h3,h5 {\\r\\n            margin: 0.5em 0;\\r\\n        }\\r\\n    </style>\\r\\n    <svelte:head>\\r\\n        <title>Current Status of Quantum Computing</title>\\r\\n        <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/talks/quantumstatus\\" />\\r\\n        <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    </svelte:head>\\r\\n    <article>\\r\\n        <h4>\\r\\n            Current status of Quantum Computing\\r\\n        </h4>\\r\\n        <h5>Part 1: Introduction of Quantum Computing</h5>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <Datatable style=\\"width:100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Time</Cell>\\r\\n                            <Cell>Topic</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body></Body>\\r\\n                </Datatable>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <h5>Part 2: Challenges and Research directions</h5>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <Datatable style=\\"width:100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Time</Cell>\\r\\n                            <Cell>Topic</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body></Body>\\r\\n                </Datatable>\\r\\n            </Content>\\r\\n        </Card>\\r\\n    </article>"],"names":[],"mappings":"AAoBQ,qBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACG,gBAAG,CACF,MAAM,CAAE,KAAK,CAAC,CAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Current Status of Quantum Computing", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-165vfb3_START -->${$$result.title = `<title>Current Status of Quantum Computing</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/talks/quantumstatus"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-165vfb3_END -->`, ""} <article class="svelte-86n1i9"><h4 data-svelte-h="svelte-1ku5nb7">Current status of Quantum Computing</h4> <h5 class="svelte-86n1i9" data-svelte-h="svelte-1qf9xnc">Part 1: Introduction of Quantum Computing</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DataTable, "Datatable").$$render($$result, { style: "width:100%;" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Time`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Topic`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} <h5 class="svelte-86n1i9" data-svelte-h="svelte-1evhp5v">Part 2: Challenges and Research directions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DataTable, "Datatable").$$render($$result, { style: "width:100%;" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Time`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Topic`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BrZnLtJ2.js.map
