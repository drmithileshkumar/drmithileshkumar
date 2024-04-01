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
  code: "article.svelte-1u2otn3{display:flex;flex-direction:column;gap:0.7em}li.svelte-1u2otn3{opacity:0.8}h4.svelte-1u2otn3{margin:0.7em 0}h6.svelte-1u2otn3{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1u2otn3{color:rgb(159, 116, 7);opacity:1}.question.svelte-1u2otn3{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Continuous Distribution", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1avdwff_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/continuous"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1avdwff_END -->`, ""} <article class="svelte-1u2otn3">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1u2otn3" data-svelte-h="svelte-1hcy2uh">CONTINUOUS DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-1s9kze1">Continuous sample space</h6> <div><div class="definition" style="padding-bottom: 0.1em;">When the outcome of an experiment can take any value from an interval, we say that the sample space is continuous. Ideally, it is defined in terms of random variables, but we avoid random variables for this course. The probability of any one outcome is zero. In such cases, we define probabilities for an interval of values. A non-discrete random variable \\(X\\) is said to be <em data-svelte-h="svelte-1ie8ail">absolutely continuous</em> if its distribution function my be represented as ${escape(`\\[\\begin{aligned}
                    F(x) &= P(X \\leq x)\\\\
                         &= \\int_{-\\infty}^x f(u)du
                    \\end{aligned}\\]`)}
                    where <ol><li class="svelte-1u2otn3" data-svelte-h="svelte-qy3pta">\\(-\\infty \\lt x\\lt \\infty\\)</li> <li class="svelte-1u2otn3" data-svelte-h="svelte-7llnot">\\(f(x)\\geq 0\\)</li> <li class="svelte-1u2otn3">${escape(`\\(\\int_{-\\infty}^\\infty f(x)dx = 1\\)`)}</li></ol>
                    \\(f(x)\\) is called <strong class="svelte-1u2otn3" data-svelte-h="svelte-essz21">probability density function</strong>.</div> <div class="definition">The <strong class="svelte-1u2otn3" data-svelte-h="svelte-15jenkm">interval probability</strong> that \\(X\\) lies between two different values, say \\(a\\) and \\(b\\), is given by ${escape(`\\[P(a\\lt x\\lt b) = \\int_a^b f(x)dx\\]`)}</div></div> <div class="examples" data-svelte-h="svelte-1pqil1j"><ol><li class="svelte-1u2otn3">The height of a randomly chosen person can take any value between 100cm to 200cm.</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1u2otn3">Find the constant \\(c\\) such that the function 
                ${escape(`\\[f(x) = \\begin{cases}
                cx^2 & 0\\lt x\\lt 3\\\\
                0 & otherwise
                \\end{cases}\\]`)}
                is a density function, and calculate \\(P(1\\lt X\\lt 2)\\).</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-rjRPAqpt.js.map
