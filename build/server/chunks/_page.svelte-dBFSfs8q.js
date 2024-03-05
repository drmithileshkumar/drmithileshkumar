import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-IqudL2vj.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import 'd3';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

/* empty css                                                                         */
const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Bivariate Frequency Distribution", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let data = [];
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-gaw8gk_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatefrequency"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-gaw8gk_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-19r4q2a">Correlation</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-wirx9h">Bivariate Frequency Distribution</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-rnj2fp">A bivariate frequency distribution is a table of frequencies of occurrences of pairs of variables in a dataset. The distribution is typically represented in a tabular format, where one variable is listed along the rows and the other along the columns. The table contains the frequency count, which is the number of times each pair of variable values occurs together in the dataset.</p> <p class="svelte-98uzi2">Mathematically, if we have two variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)}, with ${escape(`\\( X \\)`)} taking values ${escape(`\\( x_1, x_2, ..., x_m \\)`)} and ${escape(`\\( Y \\)`)} taking values ${escape(`\\( y_1, y_2, ..., y_n \\)`)}, the frequency of occurrence of the pair ${escape(`\\( (x_i, y_j) \\)`)} in the dataset is denoted as ${escape(`\\( f_{ij} \\)`)}. The entire set of frequencies forms the bivariate frequency distribution.</p>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2">Write the frequency distribution of the set of outcomes of two die rolls ${escape(data.map((d) => "(" + d.x + ", " + d.y + ")"))}</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-dBFSfs8q.js.map
