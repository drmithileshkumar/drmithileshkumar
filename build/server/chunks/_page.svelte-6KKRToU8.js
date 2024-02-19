import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content2-Y7l55Sr_.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

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
  set_store_value(currentPath, $currentPath = "Basics of Statistics", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1rld7to_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/statistics"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1rld7to_END -->`, ""} <article class="svelte-1yfxw94">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-191m8w3">BASICS OF STATISTICS</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1w38ifd"><p class="svelte-1yfxw94">Statistics is a branch of mathematics that deals with the collection, analysis, interpretation, and presentation of data. It plays a crucial role in various fields, providing the tools and techniques to make sense of the vast amounts of information generated in our data-driven world. Let&#39;s explore why statistics is essential by examining its real-world applications:</p> <h6 class="svelte-1yfxw94">Why Do We Need to Use Statistics?</h6> <ol><li class="svelte-1yfxw94"><p class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Data Summarization:</strong> Statistics allows us to summarize large and complex datasets into meaningful and concise descriptions. For example, in a survey of student exam scores, the mean (average) score provides a quick overview of performance, making it easier to understand the class&#39;s typical achievement.</p></li> <li class="svelte-1yfxw94"><p class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Pattern Identification:</strong> By using statistical techniques, we can identify patterns, trends, and variations within data. In financial markets, statistical analysis of stock price movements helps investors recognize trends and make investment decisions.</p></li> <li class="svelte-1yfxw94"><p class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Decision-Making:</strong> Statistics provides a basis for making informed decisions. In healthcare, clinical trials use statistical analysis to determine the effectiveness of new treatments, ensuring that medical decisions are grounded in scientific evidence.</p></li> <li class="svelte-1yfxw94"><p class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Quantification of Uncertainty:</strong> Statistics allows us to quantify and manage uncertainty. For instance, in weather forecasting, meteorologists use probability distributions to predict the likelihood of rain, helping people plan their outdoor activities accordingly.</p></li> <li class="svelte-1yfxw94"><p class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Predictive Modeling:</strong> In fields like marketing, businesses use predictive models based on customer data to anticipate purchasing behavior. This enables targeted marketing campaigns and product recommendations.</p></li> <li class="svelte-1yfxw94"><p class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Quality Control:</strong> Industries use statistical methods to monitor and improve the quality of products and processes. For example, in manufacturing, statistical process control (SPC) identifies deviations in production that may affect product quality.</p></li> <li class="svelte-1yfxw94"><p class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Scientific Research:</strong> In scientific research, statistics is used to analyze experimental results, test hypotheses, and draw valid conclusions. In a biology experiment, statistical analysis confirms whether a new drug has a significant effect on a disease.</p></li> <li class="svelte-1yfxw94"><p class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Evidence-Based Decision-Making:</strong> In policymaking, statistics supports evidence-based decisions. Government officials rely on data regarding unemployment rates to formulate policies aimed at reducing joblessness and stimulating economic growth.</p></li></ol></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6KKRToU8.js.map
