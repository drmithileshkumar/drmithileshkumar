import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import 'd3';
import { B as Button } from './Button-FylIdC7C.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-JkdG6u35.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-nZg0bqlC.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Ripple-IoYaH5-z.js';
import './index2-z1g76_ny.js';

const css$1 = {
  code: "#scatter-plot.svelte-tcv392{display:flex;justify-content:center}",
  map: null
};
const ScatteredPlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rangeX = [0, 100] } = $$props;
  let { rangeY = [0, 100] } = $$props;
  let { dataSize = 50 } = $$props;
  if ($$props.rangeX === void 0 && $$bindings.rangeX && rangeX !== void 0)
    $$bindings.rangeX(rangeX);
  if ($$props.rangeY === void 0 && $$bindings.rangeY && rangeY !== void 0)
    $$bindings.rangeY(rangeY);
  if ($$props.dataSize === void 0 && $$bindings.dataSize && dataSize !== void 0)
    $$bindings.dataSize(dataSize);
  $$result.css.add(css$1);
  return `<div id="scatter-plot" class="svelte-tcv392"></div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Generate Random Data`;
    }
  })} `;
});
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
  set_store_value(currentPath, $currentPath = "Bivariate Data", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1ohcp3o_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatedata"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1ohcp3o_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-19r4q2a">Correlation</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-yijae5">Bivariate Data</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">Bivariate data involves pairs of related data points, each representing two different variables. These data points are used to explore the relationship between these two variables. For instance, if we consider a dataset with variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)}, each data point in the dataset will be a pair ${escape(`\\( (x_i, y_i) \\)`)}, where ${escape(`\\( x_i \\)`)} is a value of ${escape(`\\( X \\)`)} and ${escape(`\\( y_i \\)`)} is the corresponding value of ${escape(`\\( Y \\)`)}.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-tny9ke">The main characteristics of bivariate data include:</p> <ul data-svelte-h="svelte-1kli0em"><li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Two Variables</strong>: Bivariate data consists of observations of two variables. For example, in a study of height and weight, each observation will include both a height and a weight value.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Visualization</strong>: Bivariate data is often visualized using scatter plots, line graphs, or other graphical representations to help identify and understand relationships between the variables.</p></li></ul>`;
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
            return `${validate_component(ScatteredPlot, "ScatteredPlot").$$render($$result, {}, {}, {})}`;
          }
        }
      )}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte--_uYHUDy.js.map
