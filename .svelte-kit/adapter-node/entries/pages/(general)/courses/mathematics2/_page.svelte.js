import { c as create_ssr_component, a as subscribe, l as set_store_value, v as validate_component } from "../../../../../chunks/ssr.js";
/* empty css                                                       */
import "../../../../../chunks/client.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { C as Content } from "../../../../../chunks/ActionIcons.js";
import { d as darkMode, c as currentPath } from "../../../../../chunks/stores2.js";
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk,h4.svelte-n59hwk,h5.svelte-n59hwk{margin:0.5em 0}h5.svelte-n59hwk{font-size:1.1em}strong.svelte-n59hwk{color:goldenrod;opacity:1}a.svelte-n59hwk{cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Mathematics II", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-9lnado_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-9lnado_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-3nu6pi">Mathematics II</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h4 class="svelte-n59hwk" data-svelte-h="svelte-1ad3ct">Module 1</h4> <h5 class="svelte-n59hwk" data-svelte-h="svelte-zp3uzb">BASICS OF STATISTICS</h5> <ol data-svelte-h="svelte-e6m8iz"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">Measures of Central Tendency</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Mean (AM, GM, HM)</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Mode</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Median</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Standard deviation</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Variance</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Correlation</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Bivariate data</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Bivariate frequency distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Concept of correlation between two variables</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Types of correlation</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Karl Pearson&#39;s coefficient of correlation (r)</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Spearman&#39;s rank correlation coefficient</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Curve Fitting</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Regression</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Concept of regression</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Lines of regression</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Fitting of lines of regression by the least squares method</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Regression coefficient</a></li></ol></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h4 class="svelte-n59hwk" data-svelte-h="svelte-z20brs">Module 2</h4> <h5 class="svelte-n59hwk" data-svelte-h="svelte-1nnd8ki">DISCRETE PROBABILITY &amp; PROBABILITY DISTRIBUTIONS</h5> <ol data-svelte-h="svelte-6xtvtp"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">Probability</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Events</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Conditional Probability</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Independence</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Distributions</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Univariate Probability Distributionns</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Bivariate Probability Distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Mathematical Expectation</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Bivariate distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Conditional distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Marginal distributions</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Discrete distributions</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Discrete uniform distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Binomial distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Poisson distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Geometric distribution</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Continuous distributions</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Uniform distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Normal distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Exponential distribution</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Gamma distribution</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Queueing theory</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Introduction</a></li></ol></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h4 class="svelte-n59hwk" data-svelte-h="svelte-9pzfjv">Module 3</h4> <h5 class="svelte-n59hwk" data-svelte-h="svelte-9htv42">STATISTICAL INFERENCE</h5> <ol data-svelte-h="svelte-1wd4y4h"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">Significance</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Test of significance</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Elements of Hypothesis Testing</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Null hypothesis</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Aleternative hypothesis</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Simple hypotheses</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Composite hypotheses</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Critical region</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Type I errors</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Type II errors</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Levels of significance and size</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Analysis of Variance (ANOVA)</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Introduction</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Heterogeneity</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Analysis of Variance</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Covariance</a></li></ol></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h4 class="svelte-n59hwk" data-svelte-h="svelte-a2ntum">Module 4</h4> <h5 class="svelte-n59hwk" data-svelte-h="svelte-9htv42">STATISTICAL INFERENCE</h5> <ol data-svelte-h="svelte-1kmnx9u"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">Hypotheses</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Linear Hypothesis</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Orthogonal splitting of total variation</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Selection of Valid Error</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Applications of ANOVA technique</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">One-way classified data</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Two-way classified data</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Time Series Analysis</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Introduction</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Examples of time series from various fields</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Components of a times series</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Additive models</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Multiplicative models</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Trend and seasonal components</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Estimation of trend by linear filtering (single and weighted moving averages)</a></li></ol></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h4 class="svelte-n59hwk" data-svelte-h="svelte-8i11a1">Module 5</h4> <h5 class="svelte-n59hwk" data-svelte-h="svelte-1ucsonb">OPERATIONS RESEARCH</h5> <ol data-svelte-h="svelte-13ros9d"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">Linear programming</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">Meaning and scope of operations research</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Definition of general LPP</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Formulation of LPP</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Solution of LPP by graphical method</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Simplex algorithm</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Transportation</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Assignment problems</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">Sequencing problems</a></li></ol></li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Project management</strong> <ol><li class="svelte-n59hwk"><a class="svelte-n59hwk">CPM</a></li> <li class="svelte-n59hwk"><a class="svelte-n59hwk">PERT</a></li></ol></li></ol>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
