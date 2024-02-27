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
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}strong.svelte-98uzi2{color:goldenrod;opacity:1}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Median", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ad22hx_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/median"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-ad22hx_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-dwe40b">Measures of Central Tendency</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-wi5x7i">Median</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-srggak">The median is the middle value in a data set when the values are arranged in <strong class="svelte-98uzi2">ascending</strong> or <strong class="svelte-98uzi2">descending</strong> order. The definition of the median depends on whether the number of observations in the data set is odd or even:</p> <p class="svelte-98uzi2">For an odd number of observations ${escape(`n`)}, the median ${escape(`M`)} is the value at position ${escape(`\\( \\frac{n+1}{2} \\)`)} in the ordered set. Mathematically, if ${escape(`\\( X = \\{x_1, x_2, ..., x_n\\} \\)`)} is the ordered data set, then:</p> <p class="svelte-98uzi2">${escape(`\\[ M = x_{\\frac{n+1}{2}} \\]`)}</p> <p class="svelte-98uzi2">For an even number of observations ${escape(`n`)}, the median is the average of the values at positions ${escape(`\\( \\frac{n}{2} \\)`)} and ${escape(`\\( \\frac{n}{2} + 1 \\)`)} in the ordered set. In this case:</p> <p class="svelte-98uzi2">${escape(`\\[ M = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2} + 1}}{2} \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-pcur78">Thus, the median divides the data set into two equal parts, with half of the data points being less than or equal to the median and the other half being greater than or equal to the median.</p> <div class="examples">The median of 1, 3, 2, 9, 3, 5, 6, 3 (after sorting [1, 2, 3, 3, 3, 5, 6, 9]) is ${escape(`\\(\\frac{x_4 + x_5 }{2} = \\frac{3 + 3}{2} = 3\\)`)}</div>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-4jb9af">If every data point is multiplied by a number \\(k\\), then what is the median of the new data (assuming \\(m\\) to be median of the original data)?</div> <div class="solution" data-svelte-h="svelte-1n0ln9j"><p class="svelte-98uzi2">Multiplication, a positive number does not change the order of sorted data. A negative number reverses the order. In any case, the new median gets multiplied by \\(k\\).</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-14m1kz5">Let \\(x_1, x_2,\\dots, x_n\\) be numbers in ascending order. Two numbers \\(a, A\\) are added to this set such that \\(a \\lt x_1\\) and \\(A \\gt x_n\\). What will be the new median?</div> <div class="solution" data-svelte-h="svelte-h6wfn8"><p class="svelte-98uzi2">The new data set is \\(a, x_1, x_2, \\dots, x_n, A\\). In this case, the middle values do not change. Hence, the median remains the same.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1r9bma0">Give an example of data set where \\(mean \\lt median \\lt mode\\).</div> <div class="solution"><p class="svelte-98uzi2">Consider 1, 2, 3, 90, 101, 101, 101. ${escape(`\\[
                        \\begin{aligned}
                        \\text{Mean} &= \\frac{399}{7} = 57\\\\
                        \\text{Median} &= 90\\\\
                        \\text{Mode} &= 101
                        \\end{aligned}
                        \\]`)}
                    This data set satisfies that \\(mean \\lt median \\lt mode\\).</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
