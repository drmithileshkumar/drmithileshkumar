import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores3.js";
import { c as contents } from "../../../../../../../../chunks/content2.js";
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
  set_store_value(currentPath, $currentPath = "Median", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-ad22hx_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/median"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-ad22hx_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-ebnzvb">Measures of Central Tendency</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-ol8ydq">Median</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-1olwi3k">What is median?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-wocgu">The median is the middle value in a data set when the values are arranged in ascending or descending order. The definition of the median depends on whether the number of observations in the data set is odd or even:</p> <p class="svelte-n59hwk">For an odd number of observations ${escape(`n`)}, the median ${escape(`M`)} is the value at position ${escape(`\\( \\frac{n+1}{2} \\)`)} in the ordered set. Mathematically, if ${escape(`\\( X = \\{x_1, x_2, ..., x_n\\} \\)`)} is the ordered data set, then:</p> <p class="svelte-n59hwk">${escape(`\\[ M = x_{\\frac{n+1}{2}} \\]`)}</p> <p class="svelte-n59hwk">For an even number of observations ${escape(`n`)}, the median is the average of the values at positions ${escape(`\\( \\frac{n}{2} \\)`)} and ${escape(`\\( \\frac{n}{2} + 1 \\)`)} in the ordered set. In this case:</p> <p class="svelte-n59hwk">${escape(`\\[ M = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2} + 1}}{2} \\]`)}</p> <p class="svelte-n59hwk" data-svelte-h="svelte-pcur78">Thus, the median divides the data set into two equal parts, with half of the data points being less than or equal to the median and the other half being greater than or equal to the median.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
