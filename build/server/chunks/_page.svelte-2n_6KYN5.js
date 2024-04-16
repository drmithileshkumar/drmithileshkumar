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
  code: "article.svelte-1yfxw94{display:flex;flex-direction:column;gap:0.5em}li.svelte-1yfxw94{opacity:0.8}h4.svelte-1yfxw94,h5.svelte-1yfxw94{margin:0.5em 0}h5.svelte-1yfxw94{font-size:1.1em}strong.svelte-1yfxw94{color:rgb(159, 116, 7);opacity:1}",
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
  set_store_value(currentPath, $currentPath = "Hypotheses", $currentPath);
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
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-1t3dolc">Hypotheses</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-1kdx4kq">Statistical Decisions</h5> <div data-svelte-h="svelte-1hg2kp3"><div class="definition"><strong class="svelte-1yfxw94">Statistical decision</strong> is decision made about a population based on a sample drawn from the population. For example, deciding whether a coin is fair based on tossing it a few times. Ideally it would require infinitely many tosses.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-rmovvn">Statistical Hypotheses</h5> <div data-svelte-h="svelte-1ooud6v"><div class="definition"><strong class="svelte-1yfxw94">Statistical hypothesses</strong> are hypotheses ( statements ) about the population that can be tested using tools from statistics and probability theory. For example, checking whether a given coin is biased or not, we can make a hypothesis that the coin is fair, i.e. the probability of getting a head is 0.5.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-1fwbpbd">Null Hypotheses</h5> <div data-svelte-h="svelte-kczt9k"><div class="definition"><strong class="svelte-1yfxw94">Null hypothesis</strong> is a statement that there is no significant difference, effect, or relationship between variables in a population. It is often formulated as a statement of &quot;no effect&quot; or &quot;no difference&quot; and serves as the default assumption to be tested in hypothesis testing.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-ro7dbr">Alternative Hypotheses</h5> <div data-svelte-h="svelte-y99r95"><div class="definition">Any hypothesis that differs from a given null hypothesis is called an <strong class="svelte-1yfxw94">alternative hypothesis</strong>.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-1n2163b">Examples</h5> <div data-svelte-h="svelte-1dppuwy"><div class="examples"><ol><li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> Coin is fair.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Coin is not fair.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> The new drug has no effect on reducing cholesterol levels.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> The new drug reduces cholesterol levels.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in test scores between students who use a traditional teaching method and those who use a new teaching method.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Students who use the new teaching method perform better on tests than those who use the traditional method.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in anxiety levels between two therapy groups.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> One therapy group shows lower anxiety levels than the other.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in average income between two demographic groups.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> One demographic group has a higher average income than the other.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no correlation between air pollution levels and asthma rates.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Higher air pollution levels are associated with higher asthma rates.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in political affiliation between two age groups.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Political affiliation differs between the two age groups.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> The mean velocity of a particle is equal to a certain constant.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> The mean velocity of the particle is different from the constant.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in brand preference between two advertising campaigns.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> One advertising campaign leads to higher brand preference than the other.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in performance between athletes who use a certain training regimen and those who do not.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Athletes who use the training regimen perform better than those who do not.</li></ul></li></ol></div></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2n_6KYN5.js.map
