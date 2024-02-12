import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-APL1hDOv.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import { c as contents } from './content2-gvOZTR_G.js';
import './classAdderBuilder-0kAhHSI7.js';
import './index2-NBMbjtFx.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}h6.svelte-n59hwk{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}",
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
  set_store_value(currentPath, $currentPath = "Least Squares Method", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-caa0sc_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/leastsquares"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-caa0sc_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-12wvqs5">Regression</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-sao1vq">Least Squares Method</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-1j613xs">What is the least squares method?</h6> <div><p class="svelte-n59hwk">Given data points \\((x_i, y_i)\\) for variable \\(X\\) and \\(Y\\), suppose there is a model that for each input \\(x_i\\) predicts the value of \\(Y\\) to be \\(f(x_i, \\beta)\\) for some function \\(f\\) and parameters \\(\\beta\\), then the least squares method is used to determine the parameters \\(\\beta\\) by minimizing the sum ${escape(`\\[S = \\sum_{i=1}^n (y_i - f(x_i, \\beta))^2\\]`)} Notice that \\(\\beta\\) can be more than one parameter.</p> <p class="svelte-n59hwk" data-svelte-h="svelte-14jk5r1">The above sum&#39;s minima is obtained by differentiating \\(S\\) with respect to parameters \\(\\beta\\) to get a set of equations that can be solved to fix the parameters. As an example, we&#39;ll use this method in the case of linear regression.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-n7lu52">The least squares method in linear regression</h6> <div><p class="svelte-n59hwk">In the case of fitting a regression line, such as ${escape(`\\( Y = a + bX \\)`)}, the method aims to find the values of ${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} that minimize the sum of squared residuals, denoted as ${escape(`\\( S \\)`)}:
                    ${escape(`\\[ S = \\sum_{i=1}^{n} (y_i - (a + bx_i))^2 \\]`)}
                    Here, in the equation:</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( n \\)`)} represents the number of data points.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( (x_i, y_i) \\)`)} represents each observed data point.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} are the coefficients (intercept and slope) of the regression line being fitted.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk">${escape(`\\( (y_i - (a + bx_i)) \\)`)} represents the residual (the difference between the observed ${escape(`\\( y_i \\)`)} and the predicted ${escape(`\\( a + bx_i \\)`)} value).</p></li></ul> <p class="svelte-n59hwk">Differentiating \\(S\\) with respect to \\(a\\) and \\(b\\), we get 
                    ${escape(`\\[
                        \\begin{aligned}
                        \\frac{\\delta S}{\\delta a} &= -2\\sum (y_i - (a + bx_i)) \\\\
                                                     &= -2n[\\overline{Y} -a - b\\overline{X}]\\\\
                        \\frac{\\delta S}{\\delta b} &= -2\\sum x_i(y_i - (a + bx_i))\\\\
                                                     &= -2[\\sum x_iy_i - na\\overline{X} - b\\sum x_i^2]
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-n59hwk">For minima, the above derivatives are set to zero.
                    ${escape(`\\[
                        \\begin{aligned}
                        \\overline{Y} -a - b\\overline{X} &= 0\\\\
                        \\implies a &= \\overline{Y} - b\\overline{X}\\\\
                        \\sum x_iy_i -na\\overline{X} - b\\sum x_i^2 &= 0\\\\
                        \\sum x_i y_i -n\\overline{XY} + nb\\overline{X}^2 - b\\sum x_i^2 &= 0
                        
                        \\end{aligned}
                        \\]
                    `)}
                    After simplification, we get
                    ${escape(`\\[
                        \\begin{aligned}
                        b &= \\frac{\\sum x_i y_i - n\\overline{XY}}{\\sum x_i^2 - n\\overline{X}^2}\\\\
                        \\implies b &= \\frac{\\sum (x_i - \\overline{X})(y_i - \\overline{Y})}{\\sum (x_i - \\overline{X})^2}
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-n59hwk">The Least Squares Method calculates ${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} values that minimize ${escape(`\\( S \\)`)}, making the fitted regression line the &quot;best fit&quot; to the data.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fgtJ0-mn.js.map
