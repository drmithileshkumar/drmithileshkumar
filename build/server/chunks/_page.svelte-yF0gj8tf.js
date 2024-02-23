import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-JkdG6u35.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
import { C as CourseNavigation } from './CourseNavigation-nZg0bqlC.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}strong.svelte-98uzi2{color:goldenrod;opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Regression Coefficient", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-zgabzz_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressioncoefficient"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-zgabzz_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-1cqbtpt">Regression</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1f13rh4">Regression coefficient</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">A regression coefficient, often denoted as ${escape(`\\( b \\)`)} or ${escape(`\\( \\beta \\)`)}, is a numerical value that represents the strength and direction of the relationship between an independent variable (predictor) and a dependent variable (outcome) in a regression model. Regression coefficients are essential in quantifying how changes in the independent variable are associated with changes in the dependent variable. The key aspects of regression coefficients include:</p> <ul><li class="svelte-98uzi2" data-svelte-h="svelte-1n9i4op"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Definition:</strong> A regression coefficient represents the change in the dependent variable for a one-unit change in the independent variable while holding other variables constant.</p></li> <li class="svelte-98uzi2" data-svelte-h="svelte-186e2ld"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Interpretation:</strong> The sign of the coefficient (positive or negative) indicates the direction of the relationship. A positive coefficient suggests that as the independent variable increases, the dependent variable also increases. A negative coefficient suggests an inverse relationship.</p></li> <li class="svelte-98uzi2" data-svelte-h="svelte-hw2ppm"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Strength:</strong> The magnitude (absolute value) of the coefficient indicates the strength of the relationship. A larger coefficient implies a stronger association between the variables.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2" data-svelte-h="svelte-jk43k2">Mathematical Formula:</strong> In a linear regression model, the coefficient ${escape(`\\( b \\)`)} represents the slope of the regression line and is calculated using the formula:</p> <p class="svelte-98uzi2">${escape(`\\[ b = \\frac{\\sum{(X_i - \\bar{X})(Y_i - \\bar{Y})}}{\\sum{(X_i - \\bar{X})^2}} \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1px7nsi">Here, in the equation:</p> <ul><li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( X_i \\)`)} represents the values of the independent variable.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( Y_i \\)`)} represents the values of the dependent variable.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( \\bar{X} \\)`)} and ${escape(`\\( \\bar{Y} \\)`)} represent the means (averages) of the independent and dependent variables, respectively.</p></li></ul> <p class="svelte-98uzi2">The coefficient ${escape(`\\( b \\)`)} quantifies the change in ${escape(`\\( Y \\)`)} for a one-unit change in ${escape(`\\( X \\)`)}.</p></li></ul>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-yF0gj8tf.js.map
