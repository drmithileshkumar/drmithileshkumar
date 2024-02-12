import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-APL1hDOv.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import { c as contents } from './content2-gvOZTR_G.js';
import './classAdderBuilder-0kAhHSI7.js';
import './index2-NBMbjtFx.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}h6.svelte-n59hwk{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Spearman's rank correlation coefficient", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-3wcfkg_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/spearman"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-3wcfkg_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-5c76qq">Correlation</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-vaf13u">Spearman&#39;s rank correlation coefficient</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-wfmcz7">Ranks</h6> <div data-svelte-h="svelte-1dejemw"><p class="svelte-n59hwk">Given a variable \\(X\\) with values \\(x_1, x_2, \\dots, x_n\\), the rank of a value \\(x_i\\) is assigned based on its size, with the smallest value getting rank 1, next smallest rank 2, and so on. Ties are given an average rank.</p> <p class="example svelte-n59hwk">Let \\(X\\) has values 13, 3, 14, 19, 5, 6, 9. The ranks of the data are 5, 1, 6, 7, 2, 3, 4.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-7ya2je">What is Spearman&#39;s rank correlation coefficient?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-gdzt5c">Spearman&#39;s rank correlation is the same as Pearson&#39;s correlation, but instead of using the data values \\(x_i\\) and \\(y_i\\), we use their ranks \\(r_i = rank(x_i)\\) and \\(s_i = rank(y_i)\\). Let us denote the rank data for variable \\(X\\) as \\(R_x\\) and for \\(Y\\) as \\(R_y\\).</p> <p class="svelte-n59hwk">Spearman&#39;s rank correlation coefficient is defined as ${escape(`
                    \\[
                        r_s = \\dfrac{cov(R_x, R_y)}{\\sigma_{R_x}\\sigma_{R_y}}  
                    \\]
                    `)}
                    where the covariance ${escape(`\\[cov(R_x, R_y) = \\dfrac{1}{n}\\sum(r_i-\\bar{r})(s_i - \\bar{s})\\]`)}, ${escape(`\\(\\bar{r}\\)`)} and ${escape(`\\(\\bar{s}\\)`)} are means of ranks of \\(X\\) and \\(Y\\). ${escape(`\\(\\sigma_{R_x}\\)`)} and ${escape(`\\(\\sigma_{R_y}\\)`)} are standard deviations of the ranks.</p> <p class="svelte-n59hwk" data-svelte-h="svelte-1rcnx3h">Easier formula for Spearman correlation coefficient can be obtained assuming that the ranks \\(x_i\\) and \\(y_i\\) take values from 1 to n, i.e. no two elements get the same rank, i.e. all elements are distinct.</p> <p class="svelte-n59hwk">The means ${escape(`\\(\\bar{r}\\)`)} and ${escape(`\\(\\bar{s}\\)`)} are equal under above assumption as shown below.
                    ${escape(`\\[
                        \\begin{aligned}
                        \\bar{r} &= \\bar{s}\\\\
                                 &= \\frac{1 + 2 + \\cdots + n}{n}\\\\
                                 &= \\frac{n + 1}{2}
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-n59hwk">Even the standard deviations ${escape(`\\(\\sigma_{R_x}\\)`)} and ${escape(`\\(\\sigma_{R_y}\\)`)} are equal.
                    ${escape(`\\[
                        \\begin{aligned}
                        \\sigma_{R_x}^2 &= \\sigma_{R_y}^2\\\\
                                      &= \\frac{1}{n}\\sum (r_i - \\bar{r})^2\\\\
                                      &= \\frac{1}{n}\\sum (r_i^2 + \\bar{r}^2 - 2r_i \\bar{r})\\\\
                                      &= \\frac{1}{n}\\sum r_i^2 - \\bar{r}^2\\\\
                                      &= \\frac{1}{n}\\frac{n(n+1)(2n+1)}{6} - \\left(\\frac{n + 1}{2}\\right)^2\\\\
                                      &= \\frac{n^2 - 1}{12}
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-n59hwk" data-svelte-h="svelte-ipkp9a">For each pair of values \\((x_i, y_i)\\) define \\[d_i = r_i - s_i\\]</p> <p class="svelte-n59hwk">${escape(`\\[
                        \\begin{aligned}
                        \\sum d_i^2 &= \\sum (r_i - s_i)^2\\\\
                                    &= \\sum (r_i - \\bar{r} - s_i + \\bar{r})^2\\\\
                                    &= \\sum (r_i - \\bar{r} - s_i + \\bar{s})^2\\\\
                                    &= \\sum (r_i - \\bar{r})^2 + \\sum (s_i - \\bar{s})^2\\\\ 
                                    &- 2\\sum (r_i - \\bar{r})(s_i - \\bar{s})\\\\
                                    &= n\\sigma_{R_x}^2 + n\\sigma_{R_y}^2 - 2cov(R_x, R_y)\\\\
                                    &= 2n(\\sigma_{R_x}^2 - cov(R_x, R_y))\\\\
                                    &= 2n(\\sigma_{R_x}^2 - r_s\\sigma_{R_x}^2)\\\\
                            1-r_s   &= \\frac{\\sum d_i^2}{2n\\sigma_{R_x}^2}\\\\
                              r_s   &= 1 - \\frac{12\\sum d_i^2}{2n(n^2 - 1)}\\\\
                                    &= 1 - \\frac{6\\sum d_i^2}{n(n^2 - 1)}
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-n59hwk" data-svelte-h="svelte-ermykk">When the data points \\(x_i\\) and \\(y_i\\) are monotonic (even if non-linear), the ranks \\(x_i\\) and \\(y_i\\) will be equal and hence \\(d_i = 0\\). This implies \\(r_s = 1\\).</p> <p class="question svelte-n59hwk" data-svelte-h="svelte-bdryu8">Show that \\(r_s = -1\\) when \\(x_i\\) and \\(y_i\\) are anti-monotonic, i.e. if ranks of \\(x_i\\) are \\(1, 2, \\dots, n\\), then the ranks of \\(y_i\\) are \\(n, n-1, \\dots, 1\\).</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-xeXPtRaK.js.map
