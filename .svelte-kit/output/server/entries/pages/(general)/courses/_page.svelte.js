import { s as subscribe, b as set_store_value } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Card } from "../../../../chunks/Card.js";
import { C as Content } from "../../../../chunks/ActionIcons.js";
import { L as List, I as Item } from "../../../../chunks/Item.js";
import { T as Text } from "../../../../chunks/Subheader.js";
import { G as Graphic } from "../../../../chunks/Graphic.js";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/stores.js";
import { d as darkMode, c as currentPath } from "../../../../chunks/stores2.js";
import { P as Pathlist } from "../../../../chunks/Pathlist.js";
const css = {
  code: "article.svelte-86n1i9{display:flex;flex-direction:column;gap:0.5em}h3.svelte-86n1i9,h5.svelte-86n1i9{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    // @ts-nocheck\\r\\n        import Card, {Content} from '@smui/card';\\r\\n        import List, { Item, Graphic, Separator, Text } from '@smui/list';\\r\\n        import {goto} from \\"$app/navigation\\";\\r\\n        import {page} from '$app/stores';\\r\\n        import {onMount} from 'svelte';\\r\\n        import { currentPath } from \\"$lib/stores\\";\\r\\n        import { darkMode } from \\"$lib/stores\\"\\r\\n        import Pathlist from '$lib/components/Pathlist.svelte';\\r\\n        let clicked;\\r\\n        $currentPath = \\"Courses\\";\\r\\n        $darkMode = false;\\r\\n        // onMount(() => {\\r\\n        //     MathJax.typeset();\\r\\n        // });\\r\\n    <\/script>\\r\\n    <style>\\r\\n        article {\\r\\n            display:flex;\\r\\n            flex-direction: column;\\r\\n            gap: 0.5em;\\r\\n        }\\r\\n        h3,h5 {\\r\\n            margin: 0.5em 0;\\r\\n        }\\r\\n    </style>\\r\\n    <svelte:head>\\r\\n        <title>Courses</title>\\r\\n        <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses\\" />\\r\\n        <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    </svelte:head>\\r\\n    <article>\\r\\n      <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n        <h3>\\r\\n            Courses\\r\\n        </h3>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h5>DSU</h5>\\r\\n                \\r\\n                    <List class=\\"courses\\" dense>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/mathematics1')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Mathematics I</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/mathematics2')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Mathematics II</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/internet')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Internet Technologies</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/internetlab')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Internet Technologies Lab</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/discrete')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Discrete Mathematical Structures</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantum')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Computation and Quantum Information</Text>\\r\\n                      </Item>\\r\\n                    </List>\\r\\n                  \\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h5>Quantum Computation</h5>\\r\\n                \\r\\n                    <List class=\\"courses\\" dense>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/linearalgebra')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Linear Algebra</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantummechanics')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Mechanics</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/circuits')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Circuits</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantumalgorithms')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Algorithms</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantumcomputers')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Computers</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantuminformation1')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Information 1</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/qec')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Error Correction</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantuminformation2')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Information 2</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantumcryptography')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Cryptography</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantumcommunication')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Communication</Text>\\r\\n                      </Item>\\r\\n                      <Item on:SMUI:action={() => goto('/courses/quantumml')}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>Quantum Machine Learning</Text>\\r\\n                      </Item>\\r\\n                    </List>\\r\\n                  \\r\\n            </Content>\\r\\n        </Card>\\r\\n        \\r\\n    </article>"],"names":[],"mappings":"AAkBQ,qBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAE,CAAC,gBAAG,CACF,MAAM,CAAE,KAAK,CAAC,CAClB"}`
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
  return `${$$result.head += `<!-- HEAD_svelte-1g0w0gr_START -->${$$result.title = `<title>Courses</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1g0w0gr_END -->`, ""} <article class="svelte-86n1i9">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} <h3 class="svelte-86n1i9" data-svelte-h="svelte-1lxqlac">Courses</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-86n1i9" data-svelte-h="svelte-lm6kl2">DSU</h5> ${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
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
          return `<h5 class="svelte-86n1i9" data-svelte-h="svelte-1ib2hw4">Quantum Computation</h5> ${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
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
  })}</article>`;
});
export {
  Page as default
};
