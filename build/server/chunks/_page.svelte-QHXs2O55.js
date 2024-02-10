import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component, e as escape } from './ssr-QYhyCQFk.js';
import { d as darkMode, c as currentPath, n as navList, C as Card } from './Card-sDgXjRKd.js';
import { C as Content } from './ActionIcons-xBhwPEnE.js';
import { c as contents } from './content-gvOZTR_G.js';
import './index2-2iq6SjbL.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Bivariate Data", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1ohcp3o_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatedata"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1ohcp3o_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-5c76qq">Correlation</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1c870p">Bivariate Data</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-12jyvn5">What is bivariate data?</div> <div class="solution"><p class="svelte-n59hwk">Bivariate data involves pairs of related data points, each representing two different variables. These data points are used to explore the relationship between these two variables. For instance, if we consider a dataset with variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)}, each data point in the dataset will be a pair ${escape(`\\( (x_i, y_i) \\)`)}, where ${escape(`\\( x_i \\)`)} is a value of ${escape(`\\( X \\)`)} and ${escape(`\\( y_i \\)`)} is the corresponding value of ${escape(`\\( Y \\)`)}. The main characteristics of bivariate data include:</p> <ul data-svelte-h="svelte-12oudmu"><li class="svelte-n59hwk"><p class="svelte-n59hwk">Two Variables: Bivariate data consists of observations of two variables. For example, in a study of height and weight, each observation will include both a height and a weight value.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Relationship Analysis: The primary purpose of collecting bivariate data is to analyze the relationship between the two variables. This can involve looking for patterns, correlations, or cause-and-effect relationships.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Visualization: Bivariate data is often visualized using scatter plots, line graphs, or other graphical representations to help identify and understand relationships between the variables.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Statistical Analysis: Various statistical methods, such as correlation and regression analysis, are used to quantify the strength and nature of the relationship between the two variables.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Applications: Bivariate data analysis is used in numerous fields such as economics, biology, and social sciences to test hypotheses or make predictions.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-fkh9dq">Overall, bivariate data provides a way to understand how two variables interact with each other within a given dataset.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-QHXs2O55.js.map
