import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { L as List, I as Item } from './Item-20QUQFRc.js';
import { T as Text } from './Subheader-nJdHlnFA.js';
import { G as Graphic } from './Graphic-XmKV_FS_.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';
import { d as darkMode, c as currentPath } from './stores3-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Ripple-IoYaH5-z.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-86n1i9{display:flex;flex-direction:column;gap:0.5em}h3.svelte-86n1i9,h5.svelte-86n1i9{margin:0.5em 0}",
  map: null
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
          return `<h5 class="svelte-86n1i9" data-svelte-h="svelte-lm6kl2">DSU</h5> <div>${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
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
              })}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-86n1i9" data-svelte-h="svelte-1ib2hw4">Quantum Computation</h5> <div>${validate_component(List, "List").$$render($$result, { class: "courses", dense: true }, {}, {
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
          })}</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-490JBfLF.js.map
