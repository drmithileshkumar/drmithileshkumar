import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { N as NavList } from './NavList-u8rw40H8.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-yqJRp7mD.js';
import { c as contents } from './content-Jx0B1dG3.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Item-20QUQFRc.js';
import './Ripple-IoYaH5-z.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';
import './IconButton-EupF56OB.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Calculator", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1lpibrl_START -->${$$result.title = `<title>Internet Technologies Lab</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internetlab/calculator"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1lpibrl_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-sz0q4m">Calculator</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(NavList, "NavList").$$render(
            $$result,
            {
              name: $navList[0].name,
              url: $navList[0].url,
              topics: $navList[0].topics,
              expanded: true
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2UAHSvq0.js.map
