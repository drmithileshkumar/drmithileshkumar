import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-duPZN16B.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-1u2otn3{display:flex;flex-direction:column;gap:0.7em}p.svelte-1u2otn3,li.svelte-1u2otn3{opacity:0.8}h4.svelte-1u2otn3{margin:0.7em 0}h6.svelte-1u2otn3{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1u2otn3{color:rgb(159, 116, 7);opacity:1}.question.svelte-1u2otn3{cursor:pointer;padding:0.3em}table.svelte-1u2otn3{border-collapse:collapse;margin:auto;margin-top:1em;margin-bottom:1em}td.svelte-1u2otn3{border:1px solid;text-align:center;padding:0.7em}",
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
  set_store_value(currentPath, $currentPath = "Joint Distributions", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-12fweyz_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-12fweyz_END -->`, ""} <article class="svelte-1u2otn3">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1u2otn3" data-svelte-h="svelte-1b6bi5p">JOINT DISTRIBUTIONS</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-8f4mqg">Joint Distribution</h6> <div><div class="definition"><strong class="svelte-1u2otn3" data-svelte-h="svelte-g1kigu">Joint distribution</strong> of a bivariate data ((X, Y) pairs) with individual sample spaces ${escape(`\\[
                        \\begin{aligned}
                        S_X &= \\{x_1, x_2, ..., x_m\\}\\\\
                        S_Y &= \\{y_1, y_2, ..., y_n\\}
                        \\end{aligned}
                        \\]`)} 
                    is defined as ${escape(`\\[P(X = x, Y = y) = p(x,y)\\]`)} where 
                    <ol data-svelte-h="svelte-uzc1kg"><li class="svelte-1u2otn3">\\(p(x,y) \\geq 0\\)</li> <li class="svelte-1u2otn3">\\(\\sum_x\\sum_y p(x,y) = 1\\)</li></ol> <p class="svelte-1u2otn3" data-svelte-h="svelte-xxv40j">We say that the probability that \\(X = x\\) and \\(Y = y\\) is \\(p(x, y)\\).</p></div> <p class="svelte-1u2otn3" data-svelte-h="svelte-1v746si">Joint distribution is usually shown by a table where \\(S_X\\) is shown along the rows and \\(S_Y\\) is shown along column. Each entry in the table is the value \\(p(x_i, y_j)\\).</p> <table class="svelte-1u2otn3" data-svelte-h="svelte-1f65rr2"><tr><td class="svelte-1u2otn3">\\(p(x, y)\\)</td> <td style="background: rgba(0, 200, 0, 0.2);" class="svelte-1u2otn3">\\(y_1\\)</td> <td style="background: rgba(0, 200, 0, 0.2);" class="svelte-1u2otn3">\\(y_2\\)</td> <td style="background: rgba(0, 200, 0, 0.2);" class="svelte-1u2otn3">\\(\\cdots\\)</td> <td style="background: rgba(0, 200, 0, 0.2);" class="svelte-1u2otn3">\\(y_n\\)</td> <td style="color: rgba(0, 200, 0, 1)" class="svelte-1u2otn3">\\(\\sum_Y \\rightarrow\\)</td></tr> <tr><td style="background: rgba(200, 0, 0, 0.2);" class="svelte-1u2otn3">\\(x_1\\)</td> <td style="background: linear-gradient(45deg, rgba(200, 0, 0, 0.7), rgba(0, 200, 0, 0.7)); color: white;" class="svelte-1u2otn3">\\(p(x_1,y_1)\\)</td> <td style="background: rgba(0, 200, 0, 0.7); color: white;" class="svelte-1u2otn3">\\(p(x_1, y_2)\\)</td> <td style="background: rgba(0, 200, 0, 0.7); color: white;" class="svelte-1u2otn3">\\(\\cdots\\)</td> <td style="background: rgba(0, 200, 0, 0.7); color: white;" class="svelte-1u2otn3">\\(p(x_1, y_n)\\)</td> <td style="background: rgba(0, 200, 0, 1); color: white;" class="svelte-1u2otn3">\\(p_1(x_1)\\)</td></tr> <tr><td style="background: rgba(200, 0, 0, 0.2);" class="svelte-1u2otn3">\\(x_2\\)</td> <td style="background: rgba(200, 0, 0, 0.7); color: white;" class="svelte-1u2otn3">\\(p(x_2,y_1)\\)</td> <td class="svelte-1u2otn3">\\(p(x_2, y_2)\\)</td> <td class="svelte-1u2otn3">\\(\\cdots\\)</td> <td class="svelte-1u2otn3">\\(p(x_2, y_n)\\)</td> <td class="svelte-1u2otn3">\\(p_1(x_2)\\)</td></tr> <tr><td style="background: rgba(200, 0, 0, 0.2);" class="svelte-1u2otn3">\\(\\vdots\\)</td> <td style="background: rgba(200, 0, 0, 0.7); color: white;" class="svelte-1u2otn3">\\(\\vdots\\)</td> <td class="svelte-1u2otn3">\\(\\vdots\\)</td> <td class="svelte-1u2otn3">\\(\\ddots\\)</td> <td class="svelte-1u2otn3">\\(\\vdots\\)</td> <td class="svelte-1u2otn3">\\(\\vdots\\)</td></tr> <tr><td style="background: rgba(200, 0, 0, 0.2);" class="svelte-1u2otn3">\\(x_m\\)</td> <td style="background: rgba(200, 0, 0, 0.7); color: white;" class="svelte-1u2otn3">\\(p(x_m,y_1)\\)</td> <td class="svelte-1u2otn3">\\(p(x_m, y_2)\\)</td> <td class="svelte-1u2otn3">\\(\\cdots\\)</td> <td class="svelte-1u2otn3">\\(p(x_m, y_n)\\)</td> <td class="svelte-1u2otn3">\\(p_1(x_m)\\)</td></tr> <tr><td style="color: rgba(200, 0, 0, 1)" class="svelte-1u2otn3">\\(\\sum_X \\downarrow\\)</td> <td style="background: rgba(200, 0, 0, 1); color: white;" class="svelte-1u2otn3">\\(p_2(y_1)\\)</td> <td class="svelte-1u2otn3">\\(p_2(y_2)\\)</td> <td class="svelte-1u2otn3">\\(\\cdots\\)</td> <td class="svelte-1u2otn3">\\(p_2(y_n)\\)</td> <td class="svelte-1u2otn3">1</td></tr></table> <p class="svelte-1u2otn3">The probability that \\(X = x_1\\) is denoted by \\(p(X = x_1\\)) shown as \\(p_1(x_1)\\) in the last column of the table above and is obtained by adding the numbers in the first row. We define
                    ${escape(`\\[\\begin{aligned}
                    p(X = x_i) &= p_1(x_i) = \\sum_{j = 1}^{n} p(x_i, y_j)\\\\
                    p(Y = y_j) &= p_2(y_j) = \\sum_{i = 1}^{m} p(x_i, y_j)
                    \\end{aligned}\\]`)}</p> <p class="svelte-1u2otn3" data-svelte-h="svelte-1pdzqqm">\\(p_1(x)\\) and \\(p_2(y)\\) are called <strong class="svelte-1u2otn3">marginal probability distribution</strong> of \\(X\\) and \\(Y\\).</p></div> <div class="examples"><ol><li class="svelte-1u2otn3">Suppose two fair coins are tossed once. Then the sample space is ${escape(`\\[S = \\{HH, HT, TH, TT\\}\\]`)} and we have  ${escape(`\\[\\begin{aligned}p(HH) &= \\frac{1}{4}\\\\
                        p(HT) &= \\frac{1}{4}\\\\
                        p(TH) &= \\frac{1}{4}\\\\
                        p(TT) &= \\frac{1}{4} \\end{aligned}\\]`)}
                        We write it in the table as follows:
                        <table class="svelte-1u2otn3"><tr data-svelte-h="svelte-17kx8rw"><td class="svelte-1u2otn3">\\(x\\)</td> <td class="svelte-1u2otn3">HH</td> <td class="svelte-1u2otn3">HT</td> <td class="svelte-1u2otn3">TH</td> <td class="svelte-1u2otn3">TT</td></tr> <tr><td class="svelte-1u2otn3" data-svelte-h="svelte-9d0flq">\\(p(x)\\)</td> <td class="svelte-1u2otn3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1u2otn3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1u2otn3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1u2otn3">${escape(`\\(\\frac{1}{4}\\)`)}</td></tr></table>
                        We can treat this case as a bivariate data where \\(X\\) corresponds to the first coin and \\(Y\\) corresponds to the second coin. The probability distribution now is written as \\(p(X = H, Y = T)\\). It is referred as <strong class="svelte-1u2otn3" data-svelte-h="svelte-w72bha">joint distribution</strong>.
                        <table class="svelte-1u2otn3"><tr data-svelte-h="svelte-1p9yo2c"><td class="svelte-1u2otn3">\\((x, y)\\)</td> <td class="svelte-1u2otn3">H</td> <td class="svelte-1u2otn3">T</td></tr> <tr><td class="svelte-1u2otn3" data-svelte-h="svelte-17mw80m">H</td> <td class="svelte-1u2otn3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1u2otn3">${escape(`\\(\\frac{1}{4}\\)`)}</td></tr> <tr><td class="svelte-1u2otn3" data-svelte-h="svelte-17twvwi">T</td> <td class="svelte-1u2otn3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1u2otn3">${escape(`\\(\\frac{1}{4}\\)`)}</td></tr></table></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-ikt5um">Theorem</h6> <div class="theorem">If \\(X\\) and \\(Y\\) are independent, then ${escape(`\\[P(X = x, Y = y) = P(X = x)\\cdot P(Y = y)\\]`)}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-83mlp0">Conditional distribution</h6> <div class="definition">The conditional probability distribution of Y given X is defined as ${escape(`\\[p(y|x) = \\dfrac{p(x,y)}{p_1(x)}\\]`)} and the conditional probability distribution of X given Y is defined as ${escape(`\\[p(x|y) = \\dfrac{p(x,y)}{p_2(y)}\\]`)}</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-1u2otn3" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1u2otn3" data-svelte-h="svelte-a5czot">The joint probability function of two random variables X and Y is given by \\(p(x, y) = c(2x + y)\\), where \\(x\\) and \\(y\\) can assume all integers such that \\(0\\leq x\\leq 2, 0\\leq y\\leq 3\\), and \\(p(x, y) = 0\\) otherwise.
                <ol><li class="svelte-1u2otn3">Find the value of the constant \\(c\\).</li> <li class="svelte-1u2otn3">Find \\(P(X\\geq 1, Y\\leq 2)\\).</li> <li class="svelte-1u2otn3">Find \\(P(X = 2, Y = 1\\)</li> <li class="svelte-1u2otn3">Find the marginal probability functions (a) of \\(X\\) and (b) of \\(Y\\) for the random variables.</li> <li class="svelte-1u2otn3">Show that the random variables \\(X\\) and \\(Y\\) are dependent.</li> <li class="svelte-1u2otn3">Find (a) \\(y|2\\), (b) \\(P(Y = 1 | X = 2)\\).</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1u2otn3" data-svelte-h="svelte-paarto">Write probability distributions for problems in the practice set.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-_JTq-jLg.js.map
