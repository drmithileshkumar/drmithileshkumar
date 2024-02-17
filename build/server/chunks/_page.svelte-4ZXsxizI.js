import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content2-Y7l55Sr_.js';
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
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Lines of Regression", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1vgw12h_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressionlines"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1vgw12h_END -->`, ""} <article class="svelte-n59hwk">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h2 class="svelte-n59hwk" data-svelte-h="svelte-12wvqs5">Regression</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1j5fr8d">Lines of regression</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-4g8vyr">What are lines of regression?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-1y12l98">Lines of regression, also known as regression lines, are mathematical lines used in regression analysis to model the relationship between two variables, typically an independent variable (predictor) and a dependent variable (outcome). Lines of regression are used to quantify and predict how changes in the independent variable are associated with changes in the dependent variable. There are two types of lines of regression:</p> <ul data-svelte-h="svelte-xygys5"><li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Regression Line of Y on X:</strong> This line is used to predict the values of the dependent variable (Y) based on the values of the independent variable (X). It is often referred to as the &quot;line of best fit&quot; and is represented mathematically as:</p></li></ul> <p class="svelte-n59hwk">${escape(`\\[ Y = a + bX \\]`)}</p> <ul data-svelte-h="svelte-1xfkha5"><li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Regression Line of X on Y:</strong> This line is used to predict the values of the independent variable (X) based on the values of the dependent variable (Y). It is represented mathematically as:</p></li></ul> <p class="svelte-n59hwk">${escape(`\\[ X = c + dY \\]`)}</p> <p class="svelte-n59hwk" data-svelte-h="svelte-4udse9">Here, in the equations:</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( Y \\)`)} represents the dependent variable (outcome).</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( X \\)`)} represents the independent variable (predictor).</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( a \\)`)} and ${escape(`\\( c \\)`)} are the intercepts of the regression lines on the Y and X axes, respectively.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( b \\)`)} and ${escape(`\\( d \\)`)} are the slope coefficients that quantify the strength and direction of the relationship between the variables.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-7er3bh">The lines of regression are used to make predictions, understand the relationship between variables, and provide insights into how changes in one variable affect the other. They are fundamental tools in regression analysis.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4ZXsxizI.js.map
