import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-wk6i9k{display:flex;flex-direction:column;gap:0.7em}li.svelte-wk6i9k{opacity:0.8}h4.svelte-wk6i9k{margin:0.7em 0}h6.svelte-wk6i9k{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-wk6i9k{color:rgb(159, 116, 7);opacity:1}",
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
  set_store_value(currentPath, $currentPath = "Poisson Distribution", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1jnnomf_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/poisson"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1jnnomf_END -->`, ""} <article class="svelte-wk6i9k">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wk6i9k" data-svelte-h="svelte-4vtvc3">POISSON DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="definition" style="padding-bottom: 0.1em;">Let \\(X\\) be a discrete random variable that can take on the values 0, 1, 2, ... such that the probability function of \\(X\\) is given by ${escape(`\\[f(x) = P(X = x) = \\frac{\\lambda^xe^{-\\lambda}}{x!}\\]`)} where \\(x = 0, 1, 2, ...\\) and \\(\\lambda\\) is a given positive constant. This distribution is called the <strong class="svelte-wk6i9k" data-svelte-h="svelte-d8u8t7">Poisson distribution</strong>.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wk6i9k" data-svelte-h="svelte-1igya3x">Examples</h6> <div class="examples" data-svelte-h="svelte-1u44qqe"><ol><li class="svelte-wk6i9k">Suppose you&#39;re interested in modeling the number of cars that pass through an intersection in a given hour. If the average rate of cars passing through is known, you can use a Poisson distribution to calculate the probability of a specific number of cars passing through in that hour.</li> <li class="svelte-wk6i9k">A call center might receive phone calls from customers throughout the day. By modeling the number of calls received per hour using a Poisson distribution, you can estimate the probability of receiving a certain number of calls in a given time frame.</li> <li class="svelte-wk6i9k">When proofreading a book, you might be interested in modeling the number of typographical errors per page. If you know the average rate of errors per page, you can use a Poisson distribution to estimate the probability of encountering a certain number of errors on a page.</li> <li class="svelte-wk6i9k">Traffic engineers might want to predict the number of accidents that occur at a busy intersection each month. Using historical data on accident rates, they can model the number of accidents per month using a Poisson distribution.</li> <li class="svelte-wk6i9k">A store might want to analyze the number of customers who arrive at the checkout counter during peak hours. By modeling the arrival rate using a Poisson distribution, they can estimate the probability of a certain number of customers arriving within a specific time frame.</li></ol></div>`;
        }
      })}`;
    }
  })} </article>`;
});
export {
  Page as default
};
