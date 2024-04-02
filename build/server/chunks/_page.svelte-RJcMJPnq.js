import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-uHUqA4vB.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-wk6i9k{display:flex;flex-direction:column;gap:0.7em}p.svelte-wk6i9k,li.svelte-wk6i9k{opacity:0.8}h4.svelte-wk6i9k{margin:0.7em 0}h6.svelte-wk6i9k{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-wk6i9k{color:rgb(159, 116, 7);opacity:1}.image.svelte-wk6i9k{width:300px;margin:auto}",
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
  set_store_value(currentPath, $currentPath = "Normal Distribution", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ezl8sv_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/normal"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-ezl8sv_END -->`, ""} <article class="svelte-wk6i9k">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wk6i9k" data-svelte-h="svelte-12z9fp5">NORMAL DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div><p class="svelte-wk6i9k" data-svelte-h="svelte-1a6rgq4">Normal distribution is also called Gaussian distribution.</p> <div class="definition" style="padding-bottom: 0.1em;">The probability density function for normal distribution is defined as ${escape(`\\[\\begin{aligned}
                    f(x) &= \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x - \\mu)^2/2\\sigma^2}
                    \\end{aligned}\\]`)}
                    where <ol><li class="svelte-wk6i9k" data-svelte-h="svelte-qy3pta">\\(-\\infty \\lt x\\lt \\infty\\)</li> <li class="svelte-wk6i9k" data-svelte-h="svelte-7llnot">\\(f(x)\\geq 0\\)</li> <li class="svelte-wk6i9k">${escape(`\\(\\int_{-\\infty}^\\infty f(x)dx = 1\\)`)}</li></ol>
                    The corresponding distribution function is given by ${escape(`\\[\\begin{aligned}
                    F(x) &= P(X\\leq x)\\\\
                         &= \\frac{1}{\\sigma\\sqrt{2\\pi}}\\int_{-\\infty}^x e^{-(u - \\mu)^2/2\\sigma^2}du
                    \\end{aligned}\\]`)}
                    If \\(X\\) has the distribution function given as above, we say that the random variable \\(X\\) is <em data-svelte-h="svelte-17f6idn">normally distributed</em> with mean \\(\\mu\\) and variance \\(\\sigma^2\\).</div> <div class="definition">We can replace ${escape(`\\[Z = \\frac{X -\\mu}{\\sigma}\\]`)} For this variable mean is zero and variance is 1. We can write the density function as ${escape(`\\[f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}\\]`)} This function is called the <strong class="svelte-wk6i9k" data-svelte-h="svelte-bdnefg">standard normal density function</strong>.</div> <div class="image svelte-wk6i9k" data-svelte-h="svelte-s217sd"><img src="/courses/mathematics2/normal.jpg" alt="normal" width="100%"></div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wk6i9k" data-svelte-h="svelte-1igya3x">Examples</h6> <div class="examples" data-svelte-h="svelte-1jwnijk"><ol><li class="svelte-wk6i9k">Height of adult humans</li> <li class="svelte-wk6i9k">IQ scores</li> <li class="svelte-wk6i9k">Weights of newborn babies</li> <li class="svelte-wk6i9k">Test scores</li> <li class="svelte-wk6i9k">Blood pressure</li></ol></div>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-RJcMJPnq.js.map
