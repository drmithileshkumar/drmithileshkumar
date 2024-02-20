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
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h3.svelte-n59hwk,h4.svelte-n59hwk{margin:0.5em 0}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Bivariate Frequency Distribution", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-gaw8gk_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatefrequency"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-gaw8gk_END -->`, ""} <article class="svelte-n59hwk">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-n59hwk" data-svelte-h="svelte-19r4q2a">Correlation</h4> <h3 class="svelte-n59hwk" data-svelte-h="svelte-nu0to5">Bivariate Frequency Distribution</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-xrvww1">What is bivariate frequency distribution?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-zqxuiq">A bivariate frequency distribution is a statistical tool used to analyze the frequency of occurrences of pairs of variables in a dataset. It provides insight into the relationship and interaction between two different variables. The distribution is typically represented in a tabular format, where one variable is listed along the rows and the other along the columns. The key aspects of a bivariate frequency distribution include:</p> <ul data-svelte-h="svelte-1nu9kil"><li class="svelte-n59hwk"><p class="svelte-n59hwk">Pairing of Two Variables: It involves pairs of data points, each representing two different variables. For example, the variables could be age and income, or temperature and humidity.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Frequency Count: The table contains the frequency count, which is the number of times each pair of variable values occurs together in the dataset.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Tabular Representation: The frequencies are presented in a matrix format, where rows and columns correspond to the different values of the two variables.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Analysis of Relationships: The distribution helps in identifying and understanding the patterns or correlations between the two variables.</p></li></ul> <p class="svelte-n59hwk">Mathematically, if we have two variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)}, with ${escape(`\\( X \\)`)} taking values ${escape(`\\( x_1, x_2, ..., x_m \\)`)} and ${escape(`\\( Y \\)`)} taking values ${escape(`\\( y_1, y_2, ..., y_n \\)`)}, the frequency of occurrence of the pair ${escape(`\\( (x_i, y_j) \\)`)} in the dataset is denoted as ${escape(`\\( f_{ij} \\)`)}. The entire set of frequencies forms the bivariate frequency distribution.</p> <p class="svelte-n59hwk" data-svelte-h="svelte-173auht">This type of distribution is widely used in fields such as market research, education, and meteorology to analyze and interpret complex data relationships.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
