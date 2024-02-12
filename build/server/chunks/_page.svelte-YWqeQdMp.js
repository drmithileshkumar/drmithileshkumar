import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-APL1hDOv.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import { c as contents } from './content2-gvOZTR_G.js';
import './classAdderBuilder-0kAhHSI7.js';
import './index2-NBMbjtFx.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}strong.svelte-n59hwk{color:goldenrod;opacity:1}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Types of Correlation", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1jfssvq_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlationtypes"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1jfssvq_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-5c76qq">Correlation</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-vttou6">Types of Correlation</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-185yfoo">What types of correlation are there?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-811nbc">Correlation between two variables can be categorized into several types based on the nature and direction of the relationship. The main types of correlation include:</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-urkb2n">Positive Correlation:</strong> Occurs when an increase in one variable leads to an increase in the other variable. The correlation coefficient ${escape(`\\( r \\)`)} is greater than 0 and up to +1. A perfect positive correlation, with ${escape(`\\( r = +1 \\)`)}, means that the two variables move in the same direction with a fixed proportional rate.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-12whsqr">Negative Correlation:</strong> Occurs when an increase in one variable leads to a decrease in the other. The correlation coefficient ${escape(`\\( r \\)`)} is less than 0 and down to -1. A perfect negative correlation, with ${escape(`\\( r = -1 \\)`)}, indicates that the two variables move in opposite directions with a fixed proportional rate.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-10f7uaf">No Correlation:</strong> When there is no discernible relationship between the changes in two variables, they are said to have no correlation. This is indicated by a correlation coefficient ${escape(`\\( r \\)`)} around 0. It means the changes in one variable do not predict any change in the other.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-1s8hiuu"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Linear Correlation:</strong> This type refers to a straight-line relationship between two variables. Both positive and negative correlations can be linear if the change between the variables is consistent and can be graphically represented by a straight line.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-1fkva3r"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Non-linear (Curvilinear) Correlation:</strong> In this type, the relationship between the variables is still systematic but does not follow a straight line. The correlation might change in strength or direction at different levels of the variables.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-7otjth">It&#39;s important to note that correlation, regardless of its type, does not imply causation. Statistical analysis is required to determine if a causal relationship exists between the variables.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-YWqeQdMp.js.map
