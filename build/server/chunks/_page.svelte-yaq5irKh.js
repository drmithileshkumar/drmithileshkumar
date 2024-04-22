import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-ysJ_4DbC.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-1yfxw94{display:flex;flex-direction:column;gap:0.5em}li.svelte-1yfxw94{opacity:0.8}h4.svelte-1yfxw94,h5.svelte-1yfxw94{margin:0.5em 0}h5.svelte-1yfxw94{font-size:1.1em}strong.svelte-1yfxw94{color:rgb(159, 116, 7);opacity:1}.question.svelte-1yfxw94{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Level of Significance", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1qokpsc_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1qokpsc_END -->`, ""} <article class="svelte-1yfxw94">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-5n7dzu">Level of Significance</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-17gethh"><div class="definition">In testing a given hypothesis, the maximum probability with which we would be willing to risk a Type I error is called the <strong class="svelte-1yfxw94">level of significance</strong> of the test. This probability is often specified before any samples are drawn, so
                    that results obtained will not influence our decision.</div> <div>In practice a level of significance of 0.05 or 0.01 is customary, although other values are used. If for example
                    a 0.05 or 5% level of significance is chosen in designing a test of a hypothesis, then there are about 5 chances in
                    100 that we would reject the hypothesis when it should be accepted, i.e., whenever the null hypotheses is true,
                    we are about 95% confident that we would make the right decision. In such cases we say that the hypothesis has
                    been rejected at a 0.05 level of significance, which means that we could be wrong with probability 0.05.</div></div>`;
        }
      })}`;
    }
  })} <h5 class="svelte-1yfxw94" data-svelte-h="svelte-vluia4">Example</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1yfxw94" data-svelte-h="svelte-34apox">Find the probability of getting between 40 and 60 heads inclusive in 100 tosses of a fair coin.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1yfxw94" data-svelte-h="svelte-12o2u9o">To test the hypothesis that a coin is fair, the following decision rules are adopted: (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 40 and 60 inclusive, (2) reject the hypothesis otherwise.
                <ol><li class="svelte-1yfxw94">Find the probability of rejecting the hypothesis when it is actually correct.</li> <li class="svelte-1yfxw94">Draw graph.</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1yfxw94" data-svelte-h="svelte-1cwhwcj">Design a decision rule to test the hypothesis that a coin is fair if a sample of 64 tosses of the coin is taken and if a level of significance of (a) 0.05, (b) 0.01 is used.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-yaq5irKh.js.map
