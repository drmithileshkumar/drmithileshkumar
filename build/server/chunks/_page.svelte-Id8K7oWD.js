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
  set_store_value(currentPath, $currentPath = "Median", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ad22hx_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/median"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-ad22hx_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-dwe40b">Measures of Central Tendency</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-wi5x7i">Median</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1olwi3k">What is median?</div> <div class="solution"><p class="svelte-98uzi2" data-svelte-h="svelte-wocgu">The median is the middle value in a data set when the values are arranged in ascending or descending order. The definition of the median depends on whether the number of observations in the data set is odd or even:</p> <p class="svelte-98uzi2">For an odd number of observations ${escape(`n`)}, the median ${escape(`M`)} is the value at position ${escape(`\\( \\frac{n+1}{2} \\)`)} in the ordered set. Mathematically, if ${escape(`\\( X = \\{x_1, x_2, ..., x_n\\} \\)`)} is the ordered data set, then:</p> <p class="svelte-98uzi2">${escape(`\\[ M = x_{\\frac{n+1}{2}} \\]`)}</p> <p class="svelte-98uzi2">For an even number of observations ${escape(`n`)}, the median is the average of the values at positions ${escape(`\\( \\frac{n}{2} \\)`)} and ${escape(`\\( \\frac{n}{2} + 1 \\)`)} in the ordered set. In this case:</p> <p class="svelte-98uzi2">${escape(`\\[ M = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2} + 1}}{2} \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-pcur78">Thus, the median divides the data set into two equal parts, with half of the data points being less than or equal to the median and the other half being greater than or equal to the median.</p></div>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-11l72lu">If every data point is multiplied by a number \\(k\\), then what is the median of the new data (assuming \\(m\\) to be median of the origin data)?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1yp6ifo">Let \\(x_1, x_2,\\dots, x_n\\) are numbers in ascending order. Two numbers \\(a, A\\) are added to this set such that \\(a \\lt x_1\\) and \\(A \\gt x_n\\). What will be the new median?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1r9bma0">Give an example of data set where \\(mean \\lt median \\lt mode\\).</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Id8K7oWD.js.map
