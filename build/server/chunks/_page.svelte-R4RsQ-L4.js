import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
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
  code: "article.svelte-1u2otn3{display:flex;flex-direction:column;gap:0.7em}p.svelte-1u2otn3,li.svelte-1u2otn3{opacity:0.8}h4.svelte-1u2otn3{margin:0.7em 0}h6.svelte-1u2otn3{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1u2otn3{color:rgb(159, 116, 7);opacity:1}",
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
  set_store_value(currentPath, $currentPath = "Binomial Distribution", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-wtqoxt_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/binomial"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-wtqoxt_END -->`, ""} <article class="svelte-1u2otn3">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1u2otn3" data-svelte-h="svelte-1cddz63">BINOMIAL DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-17h9xkb">Trials</h6> <div data-svelte-h="svelte-lasqaa"><div class="definition">Each repetition of an experiment is called a <strong class="svelte-1u2otn3">trial</strong>.</div> <div class="definition">When the outcomes in each trial are independent, we say the trial as <strong class="svelte-1u2otn3">Bernoulli trials</strong>.</div></div> <div class="examples" data-svelte-h="svelte-kyt7rp"><ol><li class="svelte-1u2otn3">Suppose a coin is tossed repeatedly. A particular list of outcomes may look like \\[HHTHTTHHHTTHTH...\\]
                        Here getting a \\(H\\) or \\(T\\) at any trial is the same. So these trials are Bernoulli.</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-ikt5um">Theorem</h6> <div class="theorem">Let \\(p\\) be the probability that an event will happen in any single Bernoulli trial ( called the <em data-svelte-h="svelte-4xjje1">probability of success</em>). The probability that the event will happen exactly \\(r\\) times in \\(n\\) trials ( i.e. \\(r\\) successes and \\(n - r\\) failures will occur ) is given by the probability function 
                ${escape(`\\[\\begin{aligned}
                p(r) = {n\\choose r}p^r (1 - p)^{n - r}
                \\end{aligned}\\]`)}</div> <div class="examples"><p class="svelte-1u2otn3">The probability of getting exactly 2 heads in 6 tosses of a fair coin is ${escape(`\\[\\begin{aligned}
                    p(2) &= {6\\choose 2}\\left (\\frac{1}{2}\\right)^2\\left( 1 - \\frac{1}{2}\\right )^{6 - 2}\\\\
                         &= \\frac{6!}{2!4!}\\cdot \\frac{1}{4}\\cdot \\frac{1}{16}\\\\
                         &= \\frac{15}{64}
                    \\end{aligned}\\]`)}</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-ikt5um">Theorem</h6> <div class="theorem">The mean number of successes in \\(n\\) Bernoulli trials is given by \\[\\mu = np\\]
                The standard deviation is given as ${escape(`\\[\\sigma = \\sqrt{np(1 - p)}\\]`)}</div> <div class="examples"><p class="svelte-1u2otn3">In 100 tosses of a fair coin, the expected or mean number of heads is ${escape(`\\(\\mu = 100\\times \\frac{1}{2} = 50\\)`)} while the standard deviation is ${escape(`\\[\\sigma = \\sqrt{100\\times \\frac{1}{2}\\times \\frac{1}{2}} = 5\\]`)}</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-R4RsQ-L4.js.map
