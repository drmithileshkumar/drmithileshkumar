import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component, e as escape } from './ssr-GucKmJ_k.js';
import { C as Card } from './Card-eXV_tB0R.js';
import { C as Content } from './ActionIcons-f_fW2kvg.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-_pKjQ3fI.js';
import { c as contents } from './content-QiodKCpI.js';
import './index2-yB1Itf2W.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}strong.svelte-n59hwk{color:goldenrod;opacity:1}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Least Squares Method", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-caa0sc_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/leastsquares"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-caa0sc_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-12wvqs5">Regression</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-sao1vq">Least Squares Method</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-1vxquxh">What is the least squares method? How is it used to fit lines of regression?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-1xmticg">The Least Squares Method is a mathematical technique used in regression analysis to determine the parameters of a regression model that best fits the observed data. It is commonly employed to find the coefficients of the regression lines, such as the line of regression of Y on X or X on Y. The key aspects of the Least Squares Method in the context of fitting lines of regression include:</p> <ul><li class="svelte-n59hwk" data-svelte-h="svelte-11kbqtw"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Objective:</strong> The primary goal of the Least Squares Method is to minimize the sum of the squared differences (residuals) between the observed data points and the predicted values from the regression line.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-jk43k2">Mathematical Formula:</strong> In the case of fitting a regression line, such as ${escape(`\\( Y = a + bX \\)`)}, the method aims to find the values of ${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} that minimize the sum of squared residuals, denoted as ${escape(`\\( S \\)`)}:</p> <p class="svelte-n59hwk">${escape(`\\[ S = \\sum_{i=1}^{n} (Y_i - (a + bX_i))^2 \\]`)}</p> <p class="svelte-n59hwk" data-svelte-h="svelte-1px7nsi">Here, in the equation:</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( n \\)`)} represents the number of data points.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( (X_i, Y_i) \\)`)} represents each observed data point.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} are the coefficients (intercept and slope) of the regression line being fitted.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( (Y_i - (a + bX_i)) \\)`)} represents the residual (the difference between the observed ${escape(`\\( Y_i \\)`)} and the predicted ${escape(`\\( a + bX_i \\)`)} value).</p></li></ul></li></ul> <p class="svelte-n59hwk">The Least Squares Method calculates ${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} values that minimize ${escape(`\\( S \\)`)}, making the fitted regression line the &quot;best fit&quot; to the data.</p> <ul data-svelte-h="svelte-1ct33r5"><li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Applications:</strong> The Least Squares Method is widely used in regression analysis, including linear regression, to estimate the coefficients that describe the relationship between variables. It is also applicable to other regression models beyond simple linear regression.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Goodness of Fit:</strong> The method provides a measure of goodness of fit, indicating how well the regression line approximates the observed data points. A smaller sum of squared residuals indicates a better fit.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-iyfm86">In summary, the Least Squares Method is a fundamental technique in regression analysis that aims to find the coefficients of a regression line that minimizes the sum of squared differences between observed and predicted values, providing an optimal fit to the data.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-pHgLL98o.js.map
