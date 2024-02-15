import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-MGSbm_Vc.js';
import { c as contents } from './content2-gvOZTR_G.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Bivariate Frequency Distribution", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-gaw8gk_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatefrequency"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-gaw8gk_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-5c76qq">Correlation</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-nu0to5">Bivariate Frequency Distribution</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-xrvww1">What is bivariate frequency distribution?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-zqxuiq">A bivariate frequency distribution is a statistical tool used to analyze the frequency of occurrences of pairs of variables in a dataset. It provides insight into the relationship and interaction between two different variables. The distribution is typically represented in a tabular format, where one variable is listed along the rows and the other along the columns. The key aspects of a bivariate frequency distribution include:</p> <ul data-svelte-h="svelte-1nu9kil"><li class="svelte-n59hwk"><p class="svelte-n59hwk">Pairing of Two Variables: It involves pairs of data points, each representing two different variables. For example, the variables could be age and income, or temperature and humidity.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Frequency Count: The table contains the frequency count, which is the number of times each pair of variable values occurs together in the dataset.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Tabular Representation: The frequencies are presented in a matrix format, where rows and columns correspond to the different values of the two variables.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">Analysis of Relationships: The distribution helps in identifying and understanding the patterns or correlations between the two variables.</p></li></ul> <p class="svelte-n59hwk">Mathematically, if we have two variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)}, with ${escape(`\\( X \\)`)} taking values ${escape(`\\( x_1, x_2, ..., x_m \\)`)} and ${escape(`\\( Y \\)`)} taking values ${escape(`\\( y_1, y_2, ..., y_n \\)`)}, the frequency of occurrence of the pair ${escape(`\\( (x_i, y_j) \\)`)} in the dataset is denoted as ${escape(`\\( f_{ij} \\)`)}. The entire set of frequencies forms the bivariate frequency distribution.</p> <p class="svelte-n59hwk" data-svelte-h="svelte-173auht">This type of distribution is widely used in fields such as market research, education, and meteorology to analyze and interpret complex data relationships.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fB9Rv7UC.js.map
