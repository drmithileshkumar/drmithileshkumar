import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { L as List, I as Item } from './Item-20QUQFRc.js';
import { T as Text } from './Subheader-nJdHlnFA.js';
import { G as Graphic } from './Graphic-XmKV_FS_.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath } from './stores3-yqJRp7mD.js';
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
//# sourceMappingURL=_page.svelte-qXoFF8Sd.js.map
