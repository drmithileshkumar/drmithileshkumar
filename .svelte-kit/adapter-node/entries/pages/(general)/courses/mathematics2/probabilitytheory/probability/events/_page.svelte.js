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
  code: "article.svelte-1yfxw94{display:flex;flex-direction:column;gap:0.5em}p.svelte-1yfxw94,li.svelte-1yfxw94{opacity:0.8}h4.svelte-1yfxw94{margin:0.5em 0}h6.svelte-1yfxw94{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1yfxw94{color:rgb(159, 116, 7);opacity:1}",
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
  set_store_value(currentPath, $currentPath = "Events", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1fymwsd_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/probability/events"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1fymwsd_END -->`, ""} <article class="svelte-1yfxw94">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-7ot4kt">Events</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1yfxw94" data-svelte-h="svelte-3xthhp">Experiment</h6> <p class="svelte-1yfxw94" data-svelte-h="svelte-148k9n7">An experiment is a process that generates data. Each datapoint is called an outcome of the experiment.</p> <div class="examples" data-svelte-h="svelte-18xypzy"><ol><li class="svelte-1yfxw94">Tossing a coin is an experiment.</li> <li class="svelte-1yfxw94">Rolling a dice is an experiment.</li> <li class="svelte-1yfxw94">Measuring the height of students in the class is an experiment.</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1yfxw94" data-svelte-h="svelte-8gbi2">Sample Space</h6> <p class="svelte-1yfxw94" data-svelte-h="svelte-1kus5n8">Instead of dealing with each outcome of repetition of the experiment, we make an exhaustive list of all possible outcomes.</p> <div class="definition" data-svelte-h="svelte-1v25o6l"><p class="svelte-1yfxw94">The set of all possible outcomes of an experiment is called <strong class="svelte-1yfxw94">sample space</strong>.</p></div> <div class="examples"><ol><li class="svelte-1yfxw94">When a coin is tossed there are only two possible outcomes Head or Tail (assuming that coin is thin enough that it does not stand on its edge.). In this case, the sample space is written as ${escape(`\\[S = \\{Head, Tail\\} = \\{H, T\\}\\]`)}</li> <li class="svelte-1yfxw94">When a dice is rolled, there are only six possible outcomes. In this case, the sample space is written as ${escape(`\\[S = \\{1, 2, 3, 4, 5, 6\\}\\]`)}</li> <li class="svelte-1yfxw94" data-svelte-h="svelte-1ki2awm">When measuring height, the outcomes are decimal numbers that can lie in typical range of 100 cm to 200 cm. In this case, the sample space is continuous and has infinitely many possible values, although we can discretize it by only measuring upto a precision.</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1yfxw94" data-svelte-h="svelte-1622072">Event</h6> <p class="svelte-1yfxw94" data-svelte-h="svelte-z24mt2">Any subset of sample space is an event.</p> <div class="examples"><ol><li class="svelte-1yfxw94" data-svelte-h="svelte-1pr47fb">Outcome H is an event in coin toss experiment.</li> <li class="svelte-1yfxw94">Outcome 6 is an event in die roll. Outcome being an even number that is, belonging to subset ${escape(`\\(\\{2, 4, 6\\}\\)`)} is an event.</li></ol></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
