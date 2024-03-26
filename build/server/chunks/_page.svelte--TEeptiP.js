import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-duPZN16B.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}",
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
  return `${$$result.head += `<!-- HEAD_svelte-b17b6e_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regression"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-b17b6e_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-191m8w3">BASICS OF STATISTICS</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-kg6i9h">Regression</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-1o7mjrb">Regression is a statistical technique used in data analysis to model the relationship between one or more independent variables (predictors) and a dependent variable (outcome). The primary goal of regression analysis is to establish a mathematical equation that describes how changes in the independent variables are associated with changes in the dependent variable.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1pnk0hi">There are various types of regression models, including linear regression, multiple regression, logistic regression, polynomial regression, and more. The choice of regression model depends on the nature of the data and the research question.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1iiishm">In regression analysis, parameters (coefficients) are estimated to fit the mathematical model to the data. These parameters quantify the strength and direction of the relationship between variables.</p> <p class="svelte-98uzi2">In the case of linear regression, the mathematical equation takes the form ${escape(`\\( y = \\beta_0 + \\beta_1 x + \\varepsilon \\)`)}, where ${escape(`\\( y \\)`)} is the dependent variable, ${escape(`\\( x \\)`)} is the independent variable, ${escape(`\\( \\beta_0 \\)`)} is the intercept, ${escape(`\\( \\beta_1 \\)`)} is the slope coefficient, and ${escape(`\\( \\varepsilon \\)`)} represents the error term.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte--TEeptiP.js.map
