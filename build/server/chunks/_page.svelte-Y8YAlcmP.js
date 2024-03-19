import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-dKUXnD6C.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Variance and Standard Deviation", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-vialq0_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/deviation"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-vialq0_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-dwe40b">Measures of Central Tendency</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1c2dd5a">Variance and Standard Deviation</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">The standard deviation is a measure of the amount of variation or dispersion in a set of values. It is defined as the square root of the variance. For a data set with values ${escape(`\\( x_1, x_2, ..., x_n \\)`)} and a mean ${escape(`\\( \\bar{x} \\)`)}, the standard deviation ${escape(`\\( \\sigma \\)`)} is calculated as follows:</p> <p class="svelte-98uzi2">First, calculate the variance ${escape(`\\( \\sigma^2 \\)`)}, which is the average of the squared differences from the Mean:</p> <p class="svelte-98uzi2">${escape(`\\[ \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2 \\]`)}</p> <p class="svelte-98uzi2">Then, the standard deviation ${escape(`\\( \\sigma \\)`)} is the square root of the variance:</p> <p class="svelte-98uzi2">${escape(`\\[ \\sigma = \\sqrt{\\sigma^2} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\]`)}</p> <p class="svelte-98uzi2">In this formula, ${escape(`\\( \\bar{x} \\)`)} is the mean of the data set, and ${escape(`\\( n \\)`)} is the number of observations. The standard deviation provides a numerical measure of how spread out the values in a data set are around the mean.</p> <div class="examples">Given data 1, 2, 3 with mean 2, the standard deviation is ${escape(`\\[\\begin{aligned}
                \\sigma &= \\sqrt{\\frac{1}{3}[(1-2)^2 + (2-2)^2 + (3-2)^2]}\\\\
                        &= \\sqrt{\\frac{1}{3}(1 + 0 + 1)}\\\\
                        &= \\sqrt{\\frac{2}{3}}
                \\end{aligned}\\]`)}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">An observation is usually not very far away from a few standard deviations. For example, 50% of data is within ${escape("\\(\\sqrt{2}\\sigma\\)")} from the mean and 97% of data is within \\(6\\sigma\\) of the mean.</p>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-kw4cdz">What will be the standard deviation if every data point is multiplied by \\(a\\) and increased by \\(b\\) i.e. \\(x_i \\to ax_i + b\\)?</div> <div class="solution"><p class="svelte-98uzi2">The new mean is 
                    ${escape(`\\[
                        \\begin{aligned}
                        \\bar{x}_{new} &= \\frac{(ax_1 + b) + \\cdots + (ax_n + b)}{n}\\\\
                                       &= a\\frac{x_1 + \\cdots + x_n}{n} + \\frac{b + \\cdots b}{n}\\\\
                                       &= a\\bar{x}_{old} + b
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-98uzi2">The new standard deviation is
                    ${escape(`\\[
                        \\begin{aligned}
                        \\sigma_{new} &= \\sqrt{\\frac{1}{n}\\sum_{i = 1}^n (ax_i + b - \\bar{x}_{new})}\\\\
                                      &= \\sqrt{\\frac{1}{n}\\sum_{i = 1}^n (ax_i + b - (a\\bar{x}_{old} + b)}\\\\
                                      &= \\sqrt{\\frac{1}{n}a\\sum_{i = 1}^n(x_i - \\bar{x}_{old})}\\\\
                                      &= \\sqrt{a}\\sqrt{\\frac{1}{n}\\sum_{i = 1}^n(x_i - \\bar{x}_{old})}\\\\
                                      &= \\sqrt{a}\\sigma_{old}
                        \\end{aligned}
                        \\]`)}</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-exlw66">Calculate the standard deviation of \\(n\\) consecutive numbers start with \\(a\\).</div> <div class="solution"><p class="svelte-98uzi2">The numbers are \\(a, a + 1, \\dots, a + (n - 1)\\). We have calculated its mean as ${escape(`\\[
                    \\bar{x} = \\frac{2a + n - 1}{2} = a + \\frac{n- 1}{2}
                    \\]`)}</p> <p class="svelte-98uzi2">The differences will be ${escape(`\\[\\begin{aligned}
                    x_i - \\bar{x} &= a + i- 1 - a - \\frac{n- 1}{2}\\\\
                                   &= i - \\frac{n + 1}{2}
                    \\end{aligned}\\]`)}</p> <p class="svelte-98uzi2">Considering their square gives
                    ${escape(`\\[\\begin{aligned}
                    (x_i - \\bar{x})^2 &= [i - \\frac{n + 1}{2}]^2\\\\
                                       &= i^2 - (n + 1)i + \\frac{(n + 1)^2}{4}
                    \\end{aligned}\\]`)}</p> <p class="svelte-98uzi2">Now we calculate their sum as 
                    ${escape(`\\[\\begin{aligned}
                    \\sum_{i = 1}^{n}(x_i - \\bar{x})^2 &= \\sum i^2 - (n + 1)\\sum i\\\\ &+ \\sum \\frac{(n + 1)^2}{4} \\\\
                        &= \\frac{n(n + 1)(2n + 1)}{6} - \\frac{n(n + 1)^2}{2}\\\\ &+ \\frac{n(n + 1)^2}{4}\\\\
                        &= \\frac{n(n + 1)(2n + 1)}{6} - \\frac{n(n + 1)^2}{4}\\\\
                        &= n(n + 1)\\frac{4n + 2 - 3n - 3 }{12}\\\\
                        &=\\frac{n(n^2 - 1)}{12}
                    \\end{aligned}\\]`)}</p> <p class="svelte-98uzi2">Now we can plug this value into the definition of standard deviation.
                    ${escape(`\\[\\sigma = \\sqrt{\\frac{n(n^2 - 1)}{12n}}=\\sqrt{\\frac{n^2 - 1}{12}}\\]`)}
                    Notice that the standard deviation does not depend on \\(a\\).</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-byymey">Create any set of random data. Increase the largest data point by 10%, 20%, ..., 100%. Make a table that shows the change in standard deviation.</div> <div class="solution"><p class="svelte-98uzi2">Let us assume that \\(x_n\\) is the largest data point and it is changed to \\(\\lambda x_n\\). The new mean will be ${escape(`\\[\\begin{aligned}
                    \\bar{x}_{new} &= \\frac{x_1 + x_2 + \\cdots + \\lambda x_n}{n}\\\\
                                   &= \\frac{x_1 + x_2 + \\cdots + x_n}{n} + \\frac{(\\lambda - 1)x_n}{n}\\\\
                                   &= \\bar{x}_{old} + \\frac{(\\lambda - 1)x_n}{n}
                    \\end{aligned}\\]`)} ${escape(`\\[\\begin{aligned}
                    \\sigma_{new} &= \\sqrt{\\frac{1}{n}\\sum_{i = 1}^{n-1}(x_i - \\bar{x}_{new})^2 + \\frac{(\\lambda x_n - \\bar{x}_{new})^2}{n}}
                    \\end{aligned}\\]`)}</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Y8YAlcmP.js.map
