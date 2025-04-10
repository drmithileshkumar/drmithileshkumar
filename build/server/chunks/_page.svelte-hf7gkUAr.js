import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { L as List, I as Item } from './Item-T2YrjSpA.js';
import { T as Text } from './Subheader-DEm_inUP.js';
import { G as Graphic } from './Graphic-CnHJKmsY.js';
import './client-CAo-6NMJ.js';
import { p as page } from './stores3-kDd52ji6.js';
import { d as darkMode, c as currentPath } from './stores-Cecnyqn_.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-N--aPaMn.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';

const css = {
  code: "article.svelte-1qzahjj{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}h3.svelte-1qzahjj,h5.svelte-1qzahjj{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\t// @ts-nocheck\\r\\n\\timport Card, { Content } from '@smui/card';\\r\\n\\timport List, { Item, Graphic, Separator, Text } from '@smui/list';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport { currentPath } from '$lib/stores';\\r\\n\\timport { darkMode } from '$lib/stores';\\r\\n\\timport Pathlist from '$lib/components/Pathlist.svelte';\\r\\n\\tlet clicked;\\r\\n\\t$currentPath = 'Courses';\\r\\n\\t$darkMode = false;\\r\\n\\t// onMount(() => {\\r\\n\\t//     MathJax.typeset();\\r\\n\\t// });\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Courses</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n\\t<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />\\r\\n\\t<h3>Courses</h3>\\r\\n  <Card>\\r\\n    <Content>\\r\\n      <h5>General</h5>\\r\\n\\r\\n      <List class=\\"courses\\" dense>\\r\\n        <Item on:SMUI:action={() => goto('/courses/algorithms')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Algorithms</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n      </List>\\r\\n    </Content>\\r\\n  </Card>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<h5>DSU</h5>\\r\\n\\r\\n\\t\\t\\t<List class=\\"courses\\" dense>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/mathematics1')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Mathematics I</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/mathematics2')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Mathematics II</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/internet')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Internet Technologies</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/internetlab')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Internet Technologies Lab</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/discrete')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Discrete Mathematical Structures</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantum')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Computation and Quantum Information</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</List>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n\\t<Card>\\r\\n\\t\\t<Content>\\r\\n\\t\\t\\t<h5>Quantum Computation</h5>\\r\\n\\r\\n\\t\\t\\t<List class=\\"courses\\" dense>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/linearalgebra')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Linear Algebra</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantummechanics')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Mechanics</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/circuits')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Circuits</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantumalgorithms')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Algorithms</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantumcomputers')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Computers</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantuminformation1')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Information 1</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/qec')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Error Correction</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantuminformation2')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Information 2</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantumcryptography')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Cryptography</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantumcommunication')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Communication</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto('/courses/quantumml')}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>Quantum Machine Learning</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</List>\\r\\n\\t\\t</Content>\\r\\n\\t</Card>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t\\tmax-width: 750px;\\r\\n        width: 90%;\\r\\n        margin: auto;\\r\\n\\t}\\r\\n\\th3,\\r\\n\\th5 {\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6HC,sBAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CACV,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACf,CACA,iBAAE,CACF,iBAAG,CACF,MAAM,CAAE,KAAK,CAAC,CACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(currentPath, $currentPath = "Courses", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-dsqnlo_START -->${$$result.title = `<title>Courses</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-dsqnlo_END -->`, ""} <article class="svelte-1qzahjj">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} <h3 class="svelte-1qzahjj" data-svelte-h="svelte-cn4vas">Courses</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1qzahjj" data-svelte-h="svelte-14qw5hu">General</h5> ${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `menu_book`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Algorithms`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1qzahjj" data-svelte-h="svelte-lm6kl2">DSU</h5> ${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `menu_book`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Mathematics I`;
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
                      return `Mathematics II`;
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
                      return `Internet Technologies`;
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
                      return `Internet Technologies Lab`;
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
                      return `Discrete Mathematical Structures`;
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
                      return `Quantum Computation and Quantum Information`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1qzahjj" data-svelte-h="svelte-1ib2hw4">Quantum Computation</h5> ${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `menu_book`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Linear Algebra`;
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
                      return `Quantum Mechanics`;
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
                      return `Quantum Circuits`;
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
                      return `Quantum Algorithms`;
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
                      return `Quantum Computers`;
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
                      return `Quantum Information 1`;
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
                      return `Quantum Error Correction`;
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
                      return `Quantum Information 2`;
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
                      return `Quantum Cryptography`;
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
                      return `Quantum Communication`;
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
                      return `Quantum Machine Learning`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-hf7gkUAr.js.map
