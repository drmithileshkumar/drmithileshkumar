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
  code: "article.svelte-1qvzyre.svelte-1qvzyre{display:flex;flex-direction:column;gap:0.7em}li.svelte-1qvzyre.svelte-1qvzyre{opacity:0.8}h4.svelte-1qvzyre.svelte-1qvzyre{margin:0.7em 0}h6.svelte-1qvzyre.svelte-1qvzyre{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1qvzyre.svelte-1qvzyre{color:rgb(159, 116, 7);opacity:1}.questions.svelte-1qvzyre li.svelte-1qvzyre::marker{color:red;font-size:1.2em;font-weight:bold}",
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
  return `${$$result.head += `<!-- HEAD_svelte-1jnnomf_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/poisson"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1jnnomf_END -->`, ""} <article class="svelte-1qvzyre">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1qvzyre" data-svelte-h="svelte-4vtvc3">POISSON DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="definition" style="padding-bottom: 0.1em;">Let \\(X\\) be a discrete random variable that can take on the values 0, 1, 2, ... such that the probability function of \\(X\\) is given by ${escape(`\\[f(x) = P(X = x) = \\frac{\\lambda^xe^{-\\lambda}}{x!}\\]`)} where \\(x = 0, 1, 2, ...\\) and \\(\\lambda\\) is a given positive constant. This distribution is called the <strong class="svelte-1qvzyre" data-svelte-h="svelte-d8u8t7">Poisson distribution</strong>. Here \\(\\lambda\\) represents the average rate of events.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1qvzyre" data-svelte-h="svelte-1igya3x">Examples</h6> <div class="examples" data-svelte-h="svelte-1u44qqe"><ol><li class="svelte-1qvzyre">Suppose you&#39;re interested in modeling the number of cars that pass through an intersection in a given hour. If the average rate of cars passing through is known, you can use a Poisson distribution to calculate the probability of a specific number of cars passing through in that hour.</li> <li class="svelte-1qvzyre">A call center might receive phone calls from customers throughout the day. By modeling the number of calls received per hour using a Poisson distribution, you can estimate the probability of receiving a certain number of calls in a given time frame.</li> <li class="svelte-1qvzyre">When proofreading a book, you might be interested in modeling the number of typographical errors per page. If you know the average rate of errors per page, you can use a Poisson distribution to estimate the probability of encountering a certain number of errors on a page.</li> <li class="svelte-1qvzyre">Traffic engineers might want to predict the number of accidents that occur at a busy intersection each month. Using historical data on accident rates, they can model the number of accidents per month using a Poisson distribution.</li> <li class="svelte-1qvzyre">A store might want to analyze the number of customers who arrive at the checkout counter during peak hours. By modeling the arrival rate using a Poisson distribution, they can estimate the probability of a certain number of customers arriving within a specific time frame.</li></ol></div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-1qvzyre" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="questions svelte-1qvzyre" data-svelte-h="svelte-7z7d0b"><ol><li class="svelte-1qvzyre">A call center receives an average of 30 calls per hour. What is the probability that the call center receives exactly 25 calls in the next hour?</li> <li class="svelte-1qvzyre">On average, 5 buses arrive at a bus stop every 20 minutes. What is the probability that exactly 3 buses arrive at the bus stop in the next 20 minutes?</li> <li class="svelte-1qvzyre">The number of typographical errors in a book follows a Poisson distribution with a mean of 2 errors per page. What is the probability that a randomly selected page has no errors?</li> <li class="svelte-1qvzyre">A factory produces light bulbs with an average defect rate of 0.1 defects per bulb. What is the probability that a randomly selected batch of 100 bulbs contains exactly 10 defective bulbs?</li> <li class="svelte-1qvzyre">A website experiences an average of 2 cyber attacks per day. What is the probability that the website will experience at most 1 cyber attack in the next day?</li> <li class="svelte-1qvzyre">A store sells an average of 100 units of a product per week. What is the probability that the store sells fewer than 90 units of the product in the next week?</li> <li class="svelte-1qvzyre">A laboratory technician conducts tests on blood samples, with an average of 4 positive cases per day. What is the probability that the technician will encounter exactly 2 positive cases in the next day?</li> <li class="svelte-1qvzyre">A restaurant receives an average of 50 food delivery orders per evening. What is the probability that the restaurant receives more than 60 food delivery orders in the next evening?</li> <li class="svelte-1qvzyre">A car rental agency rents an average of 15 cars per day. What is the probability that the agency rents exactly 20 cars in the next day?</li> <li class="svelte-1qvzyre">A university library receives an average of 6 inquiries per hour at the reference desk. What is the probability that there will be no inquiries at the reference desk in the next hour?</li></ol></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
