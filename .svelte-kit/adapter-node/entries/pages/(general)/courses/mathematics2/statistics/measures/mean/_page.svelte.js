import { c as create_ssr_component, s as subscribe, p as set_store_value, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { d as darkMode, c as currentPath, n as navList, C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { c as contents } from "../../../../../../../../chunks/content.js";
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}h6.svelte-n59hwk{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Mean", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1a8oqdm_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/mean"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1a8oqdm_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-ebnzvb">Measures of Central Tendency</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1e6v5t9">Mean</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-1w4wpq1">What is mean (AM, GM, HM)?</div> <div class="solution"><h6 class="svelte-n59hwk" data-svelte-h="svelte-d6g3hn">Mean (Arithmetic Mean)</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-1wvanrw">The mean, also known as the arithmetic mean, of a set of <em>n</em> numerical values <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the sum of all the values divided by the number of values. The formula for the mean is:</p> <p class="svelte-n59hwk">${escape(`\\[ \\text{Mean} (\\bar{x}) = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\]`)}</p> <h6 class="svelte-n59hwk" data-svelte-h="svelte-1smdv11">Geometric Mean (GM)</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-78yyvr">The Geometric Mean of a set of <em>n</em> positive numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the <em>n</em>-th root of the product of all the <em>n</em> numbers. The formula for the geometric mean is:</p> <p class="svelte-n59hwk">${escape(`\\[ \\text{Geometric Mean (GM)} = \\left( \\prod_{i=1}^{n} x_i \\right)^{\\frac{1}{n}} \\]`)}</p> <h6 class="svelte-n59hwk" data-svelte-h="svelte-y481x8">Harmonic Mean (HM)</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-juarun">The Harmonic Mean of a set of <em>n</em> numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em>, where none of the numbers are zero, is defined as <em>n</em> divided by the sum of the reciprocals of the numbers. The formula for the harmonic mean is:</p> <p class="svelte-n59hwk">${escape(`\\[ \\text{Harmonic Mean (HM)} = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}} \\]`)}</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
