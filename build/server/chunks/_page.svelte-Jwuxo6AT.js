import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-APL1hDOv.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import { c as contents } from './content2-gvOZTR_G.js';
import './classAdderBuilder-0kAhHSI7.js';
import './index2-NBMbjtFx.js';

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
  set_store_value(currentPath, $currentPath = "Regression Coefficient", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-zgabzz_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressioncoefficient"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-zgabzz_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-12wvqs5">Regression</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-17ku3g4">Regression coefficient</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-16jeksg">What is regression coefficient?</div> <div class="solution"><p class="svelte-n59hwk">A regression coefficient, often denoted as ${escape(`\\( b \\)`)} or ${escape(`\\( \\beta \\)`)}, is a numerical value that represents the strength and direction of the relationship between an independent variable (predictor) and a dependent variable (outcome) in a regression model. Regression coefficients are essential in quantifying how changes in the independent variable are associated with changes in the dependent variable. The key aspects of regression coefficients include:</p> <ul><li class="svelte-n59hwk" data-svelte-h="svelte-1n9i4op"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Definition:</strong> A regression coefficient represents the change in the dependent variable for a one-unit change in the independent variable while holding other variables constant.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-186e2ld"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Interpretation:</strong> The sign of the coefficient (positive or negative) indicates the direction of the relationship. A positive coefficient suggests that as the independent variable increases, the dependent variable also increases. A negative coefficient suggests an inverse relationship.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-hw2ppm"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Strength:</strong> The magnitude (absolute value) of the coefficient indicates the strength of the relationship. A larger coefficient implies a stronger association between the variables.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-jk43k2">Mathematical Formula:</strong> In a linear regression model, the coefficient ${escape(`\\( b \\)`)} represents the slope of the regression line and is calculated using the formula:</p> <p class="svelte-n59hwk">${escape(`\\[ b = \\frac{\\sum{(X_i - \\bar{X})(Y_i - \\bar{Y})}}{\\sum{(X_i - \\bar{X})^2}} \\]`)}</p> <p class="svelte-n59hwk" data-svelte-h="svelte-1px7nsi">Here, in the equation:</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( X_i \\)`)} represents the values of the independent variable.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( Y_i \\)`)} represents the values of the dependent variable.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( \\bar{X} \\)`)} and ${escape(`\\( \\bar{Y} \\)`)} represent the means (averages) of the independent and dependent variables, respectively.</p></li></ul> <p class="svelte-n59hwk">The coefficient ${escape(`\\( b \\)`)} quantifies the change in ${escape(`\\( Y \\)`)} for a one-unit change in ${escape(`\\( X \\)`)}.</p></li></ul> <ul data-svelte-h="svelte-dds3aj"><li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Applications:</strong> Regression coefficients are used to analyze and interpret the relationship between variables in regression models. They provide insights into how changes in one variable affect another and are essential for making predictions and drawing conclusions based on the model.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-1fev1yr">Regression coefficients play a crucial role in various fields, including economics, finance, science, and social sciences, where understanding and quantifying relationships between variables are essential for decision-making and analysis.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Jwuxo6AT.js.map
