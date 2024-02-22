import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-Y7l55Sr_.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
import { C as CourseNavigation } from './CourseNavigation-nZg0bqlC.js';
import 'd3';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Mean", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1a8oqdm_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/mean"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1a8oqdm_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-dwe40b">Measures of Central Tendency</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1xrprax">Mean</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1w4wpq1">What is mean (AM, GM, HM)?</div> <div class="solution"><h6 class="svelte-98uzi2" data-svelte-h="svelte-d6g3hn">Mean (Arithmetic Mean)</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-1wvanrw">The mean, also known as the arithmetic mean, of a set of <em>n</em> numerical values <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the sum of all the values divided by the number of values. The formula for the mean is:</p> <p class="svelte-98uzi2">${escape(`\\[ \\text{Mean} (\\bar{x}) = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\]`)}</p> <h6 class="svelte-98uzi2" data-svelte-h="svelte-1smdv11">Geometric Mean (GM)</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-78yyvr">The Geometric Mean of a set of <em>n</em> positive numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the <em>n</em>-th root of the product of all the <em>n</em> numbers. The formula for the geometric mean is:</p> <p class="svelte-98uzi2">${escape(`\\[ \\text{Geometric Mean (GM)} = \\left( \\prod_{i=1}^{n} x_i \\right)^{\\frac{1}{n}} \\]`)}</p> <h6 class="svelte-98uzi2" data-svelte-h="svelte-y481x8">Harmonic Mean (HM)</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-juarun">The Harmonic Mean of a set of <em>n</em> numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em>, where none of the numbers are zero, is defined as <em>n</em> divided by the sum of the reciprocals of the numbers. The formula for the harmonic mean is:</p> <p class="svelte-98uzi2">${escape(`\\[ \\text{Harmonic Mean (HM)} = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}} \\]`)}</p></div>`;
        }
      })}`;
    }
  })}  <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-nwwjfq">What is the mean of \\(n\\) consecutive numbers starting with \\(a\\)?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-eohafb">Show that arithmetic mean is always between the smallest and the largest data point.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1bjojpc">Given data points \\(x_1, x_2,\\dots, x_n\\) with arithmetic mean \\(\\mu\\), what is the percentage change in \\(\\mu\\) if \\(x_1\\) is increased by \\(\\lambda\\)%?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1dcydni">The geometric mean of 2 numbers \\(a,b\\) doubles when \\(a\\) is changed to \\(a&#39;\\). What is the value of \\(a&#39;\\)?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1nasd46">Show that \\(AM\\geq GM\\) in case of two variables.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1gyzsum">Show that \\(HM\\leq GM\\) in case of two variables.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-rjw0ug">If every data point is multiplied by a number \\(k\\), then what is AM, GM and HM of the new data in terms of previous values of AM, GM and HM?</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-oYzchtb-.js.map
