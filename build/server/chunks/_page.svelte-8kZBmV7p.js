import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-JkdG6u35.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-nZg0bqlC.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}",
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
  set_store_value(currentPath, $currentPath = "Karl Pearson's coefficient of correlation (r)", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1hdsuh1_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/pearson"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1hdsuh1_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-19r4q2a">Correlation</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-15z7py7">Karl Pearson&#39;s coefficient of correlation (r)</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">Karl Pearson&#39;s coefficient of correlation, commonly denoted as ${escape(`\\( r \\)`)}, is a measure of the strength and direction of a linear relationship between two variables. It is a widely used method in statistics for quantifying the degree of correlation.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-ps9cc4">Pearson&#39;s coefficient is defined as the covariance of the two variables divided by the product of their standard deviations. It quantifies the degree to which two variables are linearly related.</p> <p class="svelte-98uzi2">For a sample size of ${escape(`\\( n \\)`)}, with variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)} having means ${escape(`\\( \\bar{X} \\)`)} and ${escape(`\\( \\bar{Y} \\)`)} respectively, Pearson&#39;s ${escape(`\\( r \\)`)} is calculated as:</p> <p class="svelte-98uzi2">${escape(`\\[ r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{X})(y_i - \\bar{Y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{X})^2 \\sum_{i=1}^{n} (y_i - \\bar{Y})^2}} \\]`)}</p> <p class="svelte-98uzi2">Pearson&#39;s ${escape(`\\( r \\)`)} ranges from -1 to +1. A value of +1 indicates a perfect positive linear correlation, -1 indicates a perfect negative linear correlation, and 0 indicates no linear correlation.</p> <p class="svelte-98uzi2">The magnitude of ${escape(`\\( r \\)`)} indicates the strength of the correlation, while the sign indicates the direction (positive or negative).</p> <p class="svelte-98uzi2" data-svelte-h="svelte-yh444c">Pearson&#39;s correlation coefficient only measures linear relationships and might not accurately represent non-linear relationships. Also, it does not imply causation.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-1g8p96z">Cauchy-Schwarz inequality</h6> <div class="theorem">Given two sets of \\(n\\) real numbers \\(a_1, a_2, \\dots, a_n\\) and \\(b_1, b_2, \\dots, b_n\\), the following inequality holds: 
                ${escape(`\\[\\left (\\sum a_ib_i\\right )^2 \\leq \\sum a_i^2 \\sum b_i^2\\]`)}</div> <div class="proof"><p class="svelte-98uzi2">Let use define ${escape(`
                    \\[
                    \\begin{aligned}
                    A &= \\sum a_i^2\\\\
                    B &= \\sum b_i^2\\\\
                    C &= \\sum a_ib_i
                    \\end{aligned}    
                    \\]
                    `)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-f9rkl9">That is, we need to show \\(C^2-AB\\leq 0\\). In other words, the quadratic equation \\(Ax^2 + 2Cx + B\\) has either one root or no roots, i.e. \\(Ax^2 + 2Cx + B\\geq 0\\)</p> <p class="svelte-98uzi2">After substituting \\(A, B\\) and \\(C\\) and a little rearrangement of terms we can get
                    ${escape(`\\[
                        \\begin{aligned}
                        Ax^2 + 2Cx + B &= \\sum (a_ix + b_i)^2\\\\
                                       &\\geq 0 
                        \\end{aligned}
                        \\]`)}
                    Equality to 0 happens for \\(a_ix = -b_i\\)</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1g05cdi">Cauchy-Schwarz inequality proves that \\(r\\) will lie between -1 and 1. Notice that \\(a_ix = -b_i\\) implies linear relationship between \\(a_i\\) and \\(b_i\\). For this case, \\(r\\) is equal to -1 or 1. That is why, Pearson&#39;s coefficient of correlation is said to show linear correlation between data points.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8kZBmV7p.js.map
