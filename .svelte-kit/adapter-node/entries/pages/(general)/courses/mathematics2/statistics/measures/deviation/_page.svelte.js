import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
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
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-kw4cdz">What will be the standard deviation if every data point is multiplied by \\(a\\) and increased by \\(b\\) i.e. \\(x_i \\to ax_i + b\\)?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-exlw66">Calculate the standard deviation of \\(n\\) consecutive numbers start with \\(a\\).</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-byymey">Create any set of random data. Increase the largest data point by 10%, 20%, ..., 100%. Make a table that shows the change in standard deviation.</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
