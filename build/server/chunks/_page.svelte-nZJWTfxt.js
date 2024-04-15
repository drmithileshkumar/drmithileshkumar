import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-Weu5zbbi.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}strong.svelte-98uzi2{color:goldenrod;opacity:1}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Correlation between two variables", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ubwl45_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlation2"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-ubwl45_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-19r4q2a">Correlation</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1h00z47">Correlation between two variables</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-1vxz648">Correlation between two variables is a statistical measure that describes the extent to which two variables change together, and the strength of their relationship. A high correlation means that as one variable changes, either up or down, the other variable tends to change in a specific direction consistently.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-811nbc">Correlation between two variables can be categorized into several types based on the nature and direction of the relationship. The main types of correlation include:</p> <ul><li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2" data-svelte-h="svelte-urkb2n">Positive Correlation:</strong> Occurs when an increase in one variable leads to an increase in the other variable. The correlation coefficient ${escape(`\\( r \\)`)} is greater than 0 and up to +1. A perfect positive correlation, with ${escape(`\\( r = +1 \\)`)}, means that the two variables move in the same direction with a fixed proportional rate.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2" data-svelte-h="svelte-12whsqr">Negative Correlation:</strong> Occurs when an increase in one variable leads to a decrease in the other. The correlation coefficient ${escape(`\\( r \\)`)} is less than 0 and down to -1. A perfect negative correlation, with ${escape(`\\( r = -1 \\)`)}, indicates that the two variables move in opposite directions with a fixed proportional rate.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2" data-svelte-h="svelte-10f7uaf">No Correlation:</strong> When there is no discernible relationship between the changes in two variables, they are said to have no correlation. This is indicated by a correlation coefficient ${escape(`\\( r \\)`)} around 0. It means the changes in one variable do not predict any change in the other.</p></li> <li class="svelte-98uzi2" data-svelte-h="svelte-1s8hiuu"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Linear Correlation:</strong> This type refers to a straight-line relationship between two variables. Both positive and negative correlations can be linear if the change between the variables is consistent and can be graphically represented by a straight line.</p></li> <li class="svelte-98uzi2" data-svelte-h="svelte-1fkva3r"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Non-linear (Curvilinear) Correlation:</strong> In this type, the relationship between the variables is still systematic but does not follow a straight line. The correlation might change in strength or direction at different levels of the variables.</p></li></ul> <p class="svelte-98uzi2" data-svelte-h="svelte-7otjth">It&#39;s important to note that correlation, regardless of its type, does not imply causation. Statistical analysis is required to determine if a causal relationship exists between the variables.</p>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1adc148">Give an example of two variables with positive correlation.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-4kk1sk">Give an example of two variables with negative correlation.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-w0ibkw">Give an example of two variables with no correlation.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1nihka">Give an example of two variables with linear correlation.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1iiiacw">Give an example of two variables with non-linear correlation.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-nZJWTfxt.js.map
