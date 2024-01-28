import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component, e as escape } from './ssr-GucKmJ_k.js';
import { C as Card } from './Card-eXV_tB0R.js';
import { C as Content } from './ActionIcons-f_fW2kvg.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-_pKjQ3fI.js';
import { c as contents } from './content-QiodKCpI.js';
import './index2-yB1Itf2W.js';

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
  set_store_value(currentPath, $currentPath = "Variance and Standard Deviation", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-vialq0_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/deviation"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-vialq0_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-ebnzvb">Measures of Central Tendency</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1d2mvui">Variance and Standard Deviation</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-jj02d0">What is standard deviation?</div> <div class="solution"><p class="svelte-n59hwk">The standard deviation is a measure of the amount of variation or dispersion in a set of values. It is defined as the square root of the variance. For a data set with values ${escape(`\\( x_1, x_2, ..., x_n \\)`)} and a mean ${escape(`\\( \\bar{x} \\)`)}, the standard deviation ${escape(`\\( \\sigma \\)`)} is calculated as follows:</p> <p class="svelte-n59hwk">First, calculate the variance ${escape(`\\( \\sigma^2 \\)`)}, which is the average of the squared differences from the Mean:</p> <p class="svelte-n59hwk">${escape(`\\[ \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2 \\]`)}</p> <p class="svelte-n59hwk">Then, the standard deviation ${escape(`\\( \\sigma \\)`)} is the square root of the variance:</p> <p class="svelte-n59hwk">${escape(`\\[ \\sigma = \\sqrt{\\sigma^2} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\]`)}</p> <p class="svelte-n59hwk">In this formula, ${escape(`\\( \\bar{x} \\)`)} is the mean of the data set, and ${escape(`\\( n \\)`)} is the number of observations. The standard deviation provides a numerical measure of how spread out the values in a data set are around the mean.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-JCFbGP1z.js.map
