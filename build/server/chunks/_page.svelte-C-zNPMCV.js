import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-APL1hDOv.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import { c as contents } from './content2-gvOZTR_G.js';
import './classAdderBuilder-0kAhHSI7.js';
import './index2-NBMbjtFx.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Mode", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-2bqjw8_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/mode"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-2bqjw8_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-ebnzvb">Measures of Central Tendency</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-obyr5v">Mode</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-1720nl7">What is mode?</div> <div class="solution"><p class="svelte-n59hwk">The mode of a data set is the value(s) that occur most frequently. The mode is defined mathematically as the value ${escape(`\\( x_{i} \\)`)} for which the frequency ${escape(`\\( f_{i} \\)`)} is maximum. In other words, if a data set consists of values ${escape(`\\( x_{1}, x_{2}, ..., x_{n} \\)`)} with corresponding frequencies ${escape(`\\( f_{1}, f_{2}, ..., f_{n} \\)`)}, then the mode ${escape(`\\( M \\)`)} is given by:</p> <p class="svelte-n59hwk">${escape(`\\[ M = x_{i} \\quad \\text{where} \\quad f_{i} = \\max(f_{1}, f_{2}, ..., f_{n}) \\]`)}</p> <p class="svelte-n59hwk" data-svelte-h="svelte-17v03og">If two or more values tie for the highest frequency, the data set is multimodal, and each of these values is a mode. If no value repeats, the data set is said to have no mode.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C-zNPMCV.js.map
