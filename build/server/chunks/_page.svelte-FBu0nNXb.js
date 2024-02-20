import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-Y7l55Sr_.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}strong.svelte-n59hwk{color:goldenrod;opacity:1}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $darkMode, $$unsubscribe_darkMode;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  set_store_value(currentPath, $currentPath = "Regression", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-b17b6e_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regression"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-b17b6e_END -->`, ""} <article class="svelte-n59hwk">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} ${validate_component(CourseNavigation, "CourseNavigation").$$render(
    $$result,
    {
      contentNav,
      currentUrl: $page.url.pathname
    },
    {},
    {}
  )} <h2 class="svelte-n59hwk" data-svelte-h="svelte-veukkz">BASICS OF STATISTICS</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-mee3tl">Regression</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-eodfgl">What is regression?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-19uthha">Regression is a statistical technique used in data analysis to model the relationship between one or more independent variables (predictors) and a dependent variable (outcome). The primary goal of regression analysis is to establish a mathematical equation that describes how changes in the independent variables are associated with changes in the dependent variable. The key aspects of regression analysis include:</p> <ul><li class="svelte-n59hwk" data-svelte-h="svelte-1r12sy6"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Objective:</strong> The primary objective of regression analysis is to understand and quantify the relationship between variables. It is used for predicting or explaining the value of the dependent variable based on the values of one or more independent variables.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-14dhig7"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Types of Regression:</strong> There are various types of regression models, including linear regression, multiple regression, logistic regression, polynomial regression, and more. The choice of regression model depends on the nature of the data and the research question.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-rs82ak"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Parameters:</strong> In regression analysis, parameters (coefficients) are estimated to fit the mathematical model to the data. These parameters quantify the strength and direction of the relationship between variables.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-6y1t5o"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Applications:</strong> Regression analysis is widely used in fields such as economics, finance, biology, social sciences, and machine learning. It is applied for tasks such as predicting future values, understanding causality, and making data-driven decisions.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-1tyfflm">Linear Regression Example:</strong> In the case of linear regression, the mathematical equation takes the form ${escape(`\\( y = \\beta_0 + \\beta_1 x + \\varepsilon \\)`)}, where ${escape(`\\( y \\)`)} is the dependent variable, ${escape(`\\( x \\)`)} is the independent variable, ${escape(`\\( \\beta_0 \\)`)} is the intercept, ${escape(`\\( \\beta_1 \\)`)} is the slope coefficient, and ${escape(`\\( \\varepsilon \\)`)} represents the error term.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-31yhbh">Regression analysis aims to provide insights into the relationship between variables, make predictions, and support evidence-based decision-making. It is a fundamental tool in statistics and data analysis.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-FBu0nNXb.js.map
