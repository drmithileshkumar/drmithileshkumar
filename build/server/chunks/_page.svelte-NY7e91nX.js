import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { S as ScatteredPlot } from './ScatteredPlot-q2ea7PiY.js';
import { c as contentNav, a as contents } from './content3-zSzFL2JT.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';
import 'd3';
import './Button-FylIdC7C.js';
import './Ripple-IoYaH5-z.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}",
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
  return `${$$result.head += `<!-- HEAD_svelte-1vgw12h_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressionlines"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1vgw12h_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-1cqbtpt">Regression</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-aitr3p">Lines of regression</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-pvw12j">One of the most common nature of relationship between two variables that are explored is linear, i.e., we check whether the values of the variables lie on a line.</p> <h6 class="svelte-98uzi2" data-svelte-h="svelte-1uamxm4">Regression Line of Y on X</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-oazvua">This line is used to predict the values of the dependent variable (Y) based on the values of the independent variable (X). It is often referred to as the &quot;line of best fit&quot; and is represented mathematically as:</p> <p class="svelte-98uzi2">${escape(`\\[ Y = a + bX \\]`)}</p> <h6 class="svelte-98uzi2" data-svelte-h="svelte-10odd8q">Regression Line of X on Y</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-uj9ou4">This line is used to predict the values of the independent variable (X) based on the values of the dependent variable (Y). It is represented mathematically as:</p> <p class="svelte-98uzi2">${escape(`\\[ X = c + dY \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-4udse9">Here, in the equations:</p> <ul><li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( Y \\)`)} represents the dependent variable (outcome).</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( X \\)`)} represents the independent variable (predictor).</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( a \\)`)} and ${escape(`\\( c \\)`)} are the intercepts of the regression lines on the Y and X axes, respectively.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( b \\)`)} and ${escape(`\\( d \\)`)} are the slope coefficients that quantify the strength and direction of the relationship between the variables.</p></li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render(
        $$result,
        {
          style: "display:flex; flex-direction: column; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `${validate_component(ScatteredPlot, "ScatteredPlot").$$render($$result, { linearX: true, dataSize: 10 }, {}, {})}`;
          }
        }
      )}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-NY7e91nX.js.map
