import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-Weu5zbbi.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-1wjl3b9{display:flex;flex-direction:column;gap:0.5em}p.svelte-1wjl3b9{opacity:0.8}h4.svelte-1wjl3b9{margin:0.5em 0}h6.svelte-1wjl3b9{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1wjl3b9{color:rgb(159, 116, 7);opacity:1}.question.svelte-1wjl3b9{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Independence", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-3do1wq_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/probability/conditional"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-3do1wq_END -->`, ""} <article class="svelte-1wjl3b9">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1wjl3b9" data-svelte-h="svelte-1o0mgzr">Independent Events</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="definition" data-svelte-h="svelte-1nq0ot9">If \\(P(B\\vert A) = P(B)\\), i.e. the probability of \\(B\\) occurring is not affected by the occurrence or non-occurrence of \\(A\\), then we say that \\(A\\) and \\(B\\) are <strong class="svelte-1wjl3b9">independent events</strong>. 
                \\[P(A\\cap B) = P(A)P(B)\\]</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1wjl3b9" data-svelte-h="svelte-1dqnse3">Definition</h6> <div class="definition">We say that three events \\(A_1, A_2, A_3\\) are <strong class="svelte-1wjl3b9" data-svelte-h="svelte-1oeeis">independent</strong> if they are pairwise independent: 
                ${escape(`\\[P(A_j\\cap A_k) = P(A_j)P(A_k)\\quad j\\neq k\\]`)} where \\(j, k = 1, 2, 3\\) and \\[P(A_1\\cap A_2\\cap A_3) = P(A_1)P(A_2)P(A_3)\\]</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-1wjl3b9" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1wjl3b9" data-svelte-h="svelte-1ng37hx"><p class="svelte-1wjl3b9">Give five examples when two events are independent and when they are not independent.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bF8OTj3h.js.map
