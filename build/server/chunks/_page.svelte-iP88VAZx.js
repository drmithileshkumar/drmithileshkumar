import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-ysJ_4DbC.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-13cxe06.svelte-13cxe06{display:flex;flex-direction:column;gap:0.5em}li.svelte-13cxe06.svelte-13cxe06{opacity:0.8}h4.svelte-13cxe06.svelte-13cxe06{margin:0.5em 0}h6.svelte-13cxe06.svelte-13cxe06{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}ol.svelte-13cxe06 li.svelte-13cxe06::marker{font-size:1.2em;color:red;font-weight:bold}ol.svelte-13cxe06 li.svelte-13cxe06{padding:0.5em 0}",
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
  set_store_value(currentPath, $currentPath = "Assignment 1", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-18oupfd_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/assignment1"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-18oupfd_END -->`, ""} <article class="svelte-13cxe06">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-13cxe06" data-svelte-h="svelte-10q0w3o">Assignment 1</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-13cxe06" data-svelte-h="svelte-1w7kvst">Measures of Central Tendency</h6> <ol class="svelte-13cxe06"><li class="svelte-13cxe06" data-svelte-h="svelte-objwyo">Define arithmetic mean, mode, median and standard deviation.</li> <li class="svelte-13cxe06">Consider the following data. X = 6, 5, 7, 4, 8, 3, 9. Calculate arithmetic mean ${escape(`\\(\\bar{x}\\)`)}, mode, median and standard deviation.</li></ol> <h6 class="svelte-13cxe06" data-svelte-h="svelte-g773r6">Correlation</h6> <ol class="svelte-13cxe06" data-svelte-h="svelte-ugajtn"><li class="svelte-13cxe06">What is bivariate data and bivariate frequency distribution?</li> <li class="svelte-13cxe06">What is correlation between two variables?</li> <li class="svelte-13cxe06">What are different types of correlation?</li> <li class="svelte-13cxe06">What is the formula for Karl Pearson&#39;s coefficient of correlation?</li> <li class="svelte-13cxe06">How is Spearman&#39;s rank correlation coefficient different from Pearson&#39;s coefficient?</li> <li class="svelte-13cxe06">Consider the following data. 
                    <br>
                    X = 1, 2, 3, 4, 5, 6
                    <br>
                    Y = 12, 6, 8, 10, 2, 7
                    <br>
                    Calculate Pearson&#39;s coefficient of correlation and Spearman&#39;s rank correlation coefficient.</li></ol> <h6 class="svelte-13cxe06" data-svelte-h="svelte-dqurv">Regression</h6> <ol class="svelte-13cxe06" data-svelte-h="svelte-m8cp40"><li class="svelte-13cxe06">What is regression?</li> <li class="svelte-13cxe06">What is linear regression and line of regression?</li> <li class="svelte-13cxe06">What is the formula for the coefficient of regression?</li> <li class="svelte-13cxe06">What is least squares method? Use least squares method to derive the coefficient of regression.</li> <li class="svelte-13cxe06">Consider the following data. 
                    <br>
                    X = 1, 2, 3, 4, 5, 6
                    <br>
                    Y = 12, 6, 8, 10, 2, 7
                    <br>
                    Calculate linear regression coefficient for the above data.</li></ol> <h6 class="svelte-13cxe06" data-svelte-h="svelte-1gjci3n">Probability</h6> <ol class="svelte-13cxe06" data-svelte-h="svelte-191kpti"><li class="svelte-13cxe06">What is probability?</li> <li class="svelte-13cxe06">What is sample space?</li> <li class="svelte-13cxe06">What is an event?</li> <li class="svelte-13cxe06">What is the probability of a sure and impossible event?</li> <li class="svelte-13cxe06">Define the conditional probability of an event B given an event A.</li> <li class="svelte-13cxe06">What are independent events?</li> <li class="svelte-13cxe06">A positive non-zero number less than 20 is chosen at random. What is the probability that it is a prime number?</li> <li class="svelte-13cxe06">What is the probability that the above prime number is greater than 10?</li> <li class="svelte-13cxe06">A fair coin is rolled four times. What is the probability of getting at least 2 heads?</li> <li class="svelte-13cxe06">A box contains 8 red balls, 6 green balls, and 4 blue balls. If two balls are drawn without replacement, what is the probability that both are blue?</li> <li class="svelte-13cxe06">In a group of 50 students, 30 are left-handed and 20 are female. What is the probability that a randomly selected student is both left-handed and female?</li></ol> <h6 class="svelte-13cxe06" data-svelte-h="svelte-gqo56w">Distribution</h6> <ol class="svelte-13cxe06" data-svelte-h="svelte-15l66a1"><li class="svelte-13cxe06">What is a probability distribution?</li> <li class="svelte-13cxe06">What is joint probability distribution?</li> <li class="svelte-13cxe06">What is marginal probability of an event A in joint distribution of two events A and B?</li> <li class="svelte-13cxe06">What is conditional distribution of Y given X?</li> <li class="svelte-13cxe06">What is a Bernoulli trial?</li> <li class="svelte-13cxe06">What is Binomial distribution?</li> <li class="svelte-13cxe06">Two fair die are rolled once. Event A is getting a 6 on the first die. Event B is getting a number larger than the first die. Are events A and B independent?</li> <li class="svelte-13cxe06">A fair die is rolled 10 times. What is the probability of getting 4 sixes?</li> <li class="svelte-13cxe06">Joint probability function of two discrete random variables \\(X\\) and \\(Y\\) is given by \\(f(x, y) = cxy\\), where x and y can assume all integers such that \\(1 \\leq x \\leq 3 , 1 \\leq y \\leq 3\\) and \\(f(x,y)=0\\) otherwise.
                    <ol class="svelte-13cxe06"><li class="svelte-13cxe06">Find the value of the constant \\(c\\).</li> <li class="svelte-13cxe06">Find \\(P(X=2, Y =3)\\).</li> <li class="svelte-13cxe06">Find \\(P(1\\leq X\\leq 2, y\\leq 2)\\).</li> <li class="svelte-13cxe06">Find \\(P(X\\geq 2)\\)</li> <li class="svelte-13cxe06">Find \\(P(Y\\lt 2)\\)</li> <li class="svelte-13cxe06">Find \\(P(X=1)\\)</li> <li class="svelte-13cxe06">Find \\(P(Y=3)\\)</li></ol></li> <li class="svelte-13cxe06">Find the probability distribution and distribution function of boys and girls in a family with 3 children, assuming equal probabilities for boys and girls. Also, draw a graph for both.</li></ol>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-iP88VAZx.js.map
