import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores3.js";
import { c as contents } from "../../../../../../../../chunks/content.js";
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}h6.svelte-n59hwk{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-n59hwk{color:goldenrod;opacity:1}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Karl Pearson's coefficient of correlation (r)", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1hdsuh1_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/pearson"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1hdsuh1_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-5c76qq">Correlation</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-13593b7">Karl Pearson&#39;s coefficient of correlation (r)</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-1q5l28t">What is Karl Pearson&#39;s coefficient of correlation (r) ?</div> <div class="solution"><p class="svelte-n59hwk">Karl Pearson&#39;s coefficient of correlation, commonly denoted as ${escape(`\\( r \\)`)}, is a measure of the strength and direction of a linear relationship between two variables. It is a widely used method in statistics for quantifying the degree of correlation. The key aspects of Pearson&#39;s correlation coefficient include:</p> <ul><li class="svelte-n59hwk" data-svelte-h="svelte-a20czh"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Definition:</strong> Pearson&#39;s coefficient is defined as the covariance of the two variables divided by the product of their standard deviations. It quantifies the degree to which two variables are linearly related.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-jk43k2">Mathematical Formula:</strong> For a sample size of ${escape(`\\( n \\)`)}, with variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)} having means ${escape(`\\( \\bar{X} \\)`)} and ${escape(`\\( \\bar{Y} \\)`)} respectively, Pearson&#39;s ${escape(`\\( r \\)`)} is calculated as:</p></li></ul> <p class="svelte-n59hwk">${escape(`\\[ r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{X})(y_i - \\bar{Y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{X})^2 \\sum_{i=1}^{n} (y_i - \\bar{Y})^2}} \\]`)}</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-1uvuiuq">Value Range:</strong> Pearson&#39;s ${escape(`\\( r \\)`)} ranges from -1 to +1. A value of +1 indicates a perfect positive linear correlation, -1 indicates a perfect negative linear correlation, and 0 indicates no linear correlation.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-1s1sqm6">Interpretation:</strong> The magnitude of ${escape(`\\( r \\)`)} indicates the strength of the correlation, while the sign indicates the direction (positive or negative).</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-3km50j"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Limitations:</strong> Pearson&#39;s correlation coefficient only measures linear relationships and might not accurately represent non-linear relationships. Also, it does not imply causation.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-11vcyn1">This coefficient is a foundational tool in statistical analysis, helping to understand and quantify the linear relationship between variables in a dataset.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-1g8p96z">Cauchy-Schwarz inequality</h6> <div class="theorem">Given two sets of \\(n\\) real numbers \\(a_1, a_2, \\dots, a_n\\) and \\(b_1, b_2, \\dots, b_n\\), the following inequality holds: 
                ${escape(`\\[\\left (\\sum a_ib_i\\right )^2 \\leq \\sum a_i^2 \\sum b_i^2\\]`)}</div> <div class="proof"><p class="svelte-n59hwk">Let use define ${escape(`
                    \\[
                    \\begin{aligned}
                    A &= \\sum a_i^2\\\\
                    B &= \\sum b_i^2\\\\
                    C &= \\sum a_ib_i
                    \\end{aligned}    
                    \\]
                    `)}</p> <p class="svelte-n59hwk" data-svelte-h="svelte-f9rkl9">That is, we need to show \\(C^2-AB\\leq 0\\). In other words, the quadratic equation \\(Ax^2 + 2Cx + B\\) has either one root or no roots, i.e. \\(Ax^2 + 2Cx + B\\geq 0\\)</p> <p class="svelte-n59hwk">After substituting \\(A, B\\) and \\(C\\) and a little rearrangement of terms we can get
                    ${escape(`\\[
                        \\begin{aligned}
                        Ax^2 + 2Cx + B &= \\sum (a_ix + b_i)^2\\\\
                                       &\\geq 0 
                        \\end{aligned}
                        \\]`)}
                    Equality to 0 happens for \\(a_ix = -b_i\\)</p> <p class="svelte-n59hwk" data-svelte-h="svelte-1g05cdi">Cauchy-Schwarz inequality proves that \\(r\\) will lie between -1 and 1. Notice that \\(a_ix = -b_i\\) implies linear relationship between \\(a_i\\) and \\(b_i\\). For this case, \\(r\\) is equal to -1 or 1. That is why, Pearson&#39;s coefficient of correlation is said to show linear correlation between data points.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
