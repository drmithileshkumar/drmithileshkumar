import { c as create_ssr_component, s as subscribe, l as set_store_value, v as validate_component, e as escape } from "../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../chunks/stores3.js";
import { c as contents } from "../../../../../../chunks/content.js";
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}strong.svelte-n59hwk{color:goldenrod;opacity:1}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $darkMode, $$unsubscribe_darkMode;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  set_store_value(currentPath, $currentPath = "Correlation", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1eq0h1l_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlation"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1eq0h1l_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-veukkz">BASICS OF STATISTICS</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-whcb1e">Correlation</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-27fw72">What is correlation?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-cxlmys">Correlation is a fundamental concept in statistics that measures the degree and direction of the relationship between two or more variables. It allows us to understand how changes in one variable are associated with changes in another, providing valuable insights into patterns and dependencies in data.</p> <p class="svelte-n59hwk">Correlation does not imply causation; it simply quantifies the strength and direction of the association between variables. There are different types of correlation coefficients, with the most common one being the Pearson correlation coefficient, denoted as ${escape(`\\( r \\)`)}.</p> <p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-1fdvnyt">Pearson Correlation Coefficient:</strong> Pearson&#39;s ${escape(`\\( r \\)`)} quantifies the linear relationship between two variables. It ranges from -1 to +1, with the following interpretations:</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk">Positive ${escape(`\\( r \\)`)} (+1): Indicates a perfect positive linear relationship, meaning as one variable increases, the other also increases linearly.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Negative ${escape(`\\( r \\)`)} (-1): Indicates a perfect negative linear relationship, meaning as one variable increases, the other decreases linearly.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Zero ${escape(`\\( r \\)`)} (0): Indicates no linear relationship between the variables.</p></li></ul> <p class="svelte-n59hwk">The formula for calculating Pearson&#39;s ${escape(`\\( r \\)`)} is as follows:</p> <p class="svelte-n59hwk">${escape(`\\[ r = \\frac{\\sum{(x_i - \\bar{x})(y_i - \\bar{y})}}{\\sqrt{\\sum{(x_i - \\bar{x})^2}\\sum{(y_i - \\bar{y})^2}}} \\]`)}</p> <p class="svelte-n59hwk">Here, ${escape(`\\( x_i \\)`)} and ${escape(`\\( y_i \\)`)} are data points, and ${escape(`\\( \\bar{x} \\)`)} and ${escape(`\\( \\bar{y} \\)`)} are the means (averages) of the two variables.</p> <p class="svelte-n59hwk" data-svelte-h="svelte-o5fjk4">Correlation is a powerful tool for understanding relationships between variables, and it is widely used in fields such as economics, finance, psychology, and more. It helps in making predictions, identifying trends, and conducting data-driven analyses.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
