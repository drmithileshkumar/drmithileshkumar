import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-fuCiKeC1.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath } from './stores3-MGSbm_Vc.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';
import './prefixFilter-IAYI75FL.js';
import './exports-mq_1S73-.js';

const css = {
  code: "article.svelte-86n1i9{display:flex;flex-direction:column;gap:0.5em}h5.svelte-86n1i9{margin:0.5em 0}",
  map: null
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
//# sourceMappingURL=_page.svelte-Z5D3tTIL.js.map
