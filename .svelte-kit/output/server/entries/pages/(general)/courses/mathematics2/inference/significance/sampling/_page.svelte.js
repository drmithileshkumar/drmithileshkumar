import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-1yfxw94{display:flex;flex-direction:column;gap:0.5em}li.svelte-1yfxw94{opacity:0.8}h4.svelte-1yfxw94{margin:0.5em 0}h6.svelte-1yfxw94{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1yfxw94{color:rgb(159, 116, 7);opacity:1}",
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
  set_store_value(currentPath, $currentPath = "Sampling", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1qokpsc_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1qokpsc_END -->`, ""} <article class="svelte-1yfxw94">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-xce4a9">Sampling</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1k0w2j"><div class="definition"><strong class="svelte-1yfxw94">Population</strong> is the entire group of individuals or objects. It is similar to sample space in the probability theory, but is not the same.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-hy8aem"><div class="definition"><strong class="svelte-1yfxw94">Sample</strong> is a small subset of the population.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1e8ckty"><div class="definition">The process of obtaining a sample from a population is called <strong class="svelte-1yfxw94">sampling</strong>.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-vfls56"><div class="definition"><strong class="svelte-1yfxw94">Statistical inference</strong> is the process of making predictions, estimates or decisions about a population based on the information obtained from a sample. It allows you to generalize findings from a sample to the population it represents.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1yfxw94" data-svelte-h="svelte-1igya3x">Examples</h6> <div data-svelte-h="svelte-1i9va9f"><div class="examples"><ol><li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All registered voters in a country.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A random selection of 1000 registered voters from the country.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> Based on the sample, you can estimate the proportion of voters supporting a particular candidate in the upcoming election.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All cars produced by a certain manufacturer in a year.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A sample of 200 cars randomly selected from the production line.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> Using the sample, you can estimate the average fuel efficiency of the cars produced by the manufacturer.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All customers who visited a grocery store in a month.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A sample of 300 customers who were surveyed about their shopping experience.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> From the sample, you can make predictions about the average amount spent by customers during their grocery shopping.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All students enrolled in a university.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A random sample of 500 students selected from different departments.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> Using the sample, you can estimate the proportion of students who are satisfied with the quality of education provided by the university.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All smartphones manufactured by a company in a year.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A sample of 100 smartphones randomly selected from different production batches.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> Based on the sample, you can estimate the failure rate of the smartphones within the first year of use.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All households in a city.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A sample of 400 households selected through random sampling techniques.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> Using the sample, you can estimate the average monthly electricity consumption per household in the city.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All patients diagnosed with a particular medical condition in a hospital.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong>  A sample of 150 patients who were prescribed a specific medication.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> Based on the sample, you can assess the effectiveness of the medication in treating the medical condition.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All employees working in a company.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A random sample of 50 employees from different departments.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> Using the sample, you can estimate the average job satisfaction level among the employees.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All websites on the internet.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A sample of 1000 websites randomly selected from different categories.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> From the sample, you can estimate the proportion of websites that comply with certain web accessibility standards.</li></ul></li> <br> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Population:</strong> All households in a region affected by a natural disaster.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Sample:</strong> A sample of 300 households chosen for a disaster relief survey.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Statistical inference:</strong> Using the sample, you can estimate the proportion of households requiring immediate assistance with shelter, food, or medical supplies.</li></ul></li></ol></div></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
