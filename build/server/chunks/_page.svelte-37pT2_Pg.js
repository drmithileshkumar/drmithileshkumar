import { a as subscribe, c as null_to_empty } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, e as escape, h as add_attribute } from './ssr-HSn4Y_Gl.js';
import { c as currentSlide, s as slideCounter, p as presentationMode, a as presentation } from './stores3-uhob_-DC.js';
import { p as page } from './stores-J1hWMOsb.js';
import { T as TeX } from './constants-TOZ-JGRv.js';
import './index2-z1g76_ny.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';

const css = {
  code: ".options.svelte-qqtpro{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}article.svelte-qqtpro{padding:0.5em}.absolute.svelte-qqtpro{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-qqtpro::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-qqtpro{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-qqtpro{min-height:100px}.flex.svelte-qqtpro{display:flex;flex-direction:column}.grid.svelte-qqtpro{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let optionStyle;
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  let isActive = -1;
  $$result.css.add(css);
  optionStyle = W < 450 ? "flex" : "grid";
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-1hick8_START -->${$$result.title = `<title>Mathematics Question 5</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="How do we define base or fundamental units? How long really is one meter?"><!-- HEAD_svelte-1hick8_END -->`, ""} <article class="${["svelte-qqtpro", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}><h1 data-svelte-h="svelte-pwhcrf">Question 5 [JEE adv, 2021]</h1> ${!$presentationMode || $currentSlide >= 0 ? `<p class="${"question " + escape(
    $presentationMode && isActive === 0 ? "currentActive" : "",
    true
  ) + " svelte-qqtpro"}">For any positive integer \\(n\\), let \\(S_n : (0,\\infty)\\to ${escape(TeX.bbR)}\\) be defined by \\[S_n(x) = ${escape(TeX.sum("k=1", "n"))}${escape(TeX.acot)}\\Big(${escape(TeX.frac("1 + k(k + 1)x^2", "x"))}\\Big)\\] where for any \\(x${escape(TeX.inR)}, ${escape(TeX.acot)}(x)\\in (0, \\pi)\\) and \\(${escape(TeX.atan)}(x)\\in \\Big(-${escape(TeX.piby2)}, ${escape(TeX.piby2)}\\Big)\\). Then which of the following statements is (are) <strong data-svelte-h="svelte-1lk9po0">True</strong>?</p>` : ``} ${!$presentationMode || $currentSlide >= 1 ? `<ol class="${escape(null_to_empty(optionStyle), true) + " svelte-qqtpro"}"><li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\(S_{10}(x) = \\dfrac{\\pi}{2}-\\tan^{-1}\\Big(\\dfrac{1 + 11x^2}{10x}\\Big)\\)`)}, for all \\(x&gt;0\\)</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\(\\lim_{n\\to \\infty}\\cot(S_n(x)) = x\\)`)}, for all \\(x&gt;0\\)</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">The equation ${escape(`\\(S_3(x)=\\dfrac{\\pi}{4}\\)`)} has a root in \\((0,\\infty)\\)</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\(\\tan(S_n(x))\\leq \\dfrac{1}{2}\\)`)}, for all \\(n\\geq 1\\) and \\(x &gt; 0\\)</li></ol>` : ``} <section>${!$presentationMode || $currentSlide >= 2 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Concepts</h2> <p class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Seems like an ugly sum. Try to see any pattern that gives difference of terms. Then, in-between terms cancel out.</p>` : ``}</section> <section>${!$presentationMode || $currentSlide >= 3 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Solution</h2> <h4 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 1</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Simplify the sum.
                ${escape(`\\[
                    \\begin{eqnarray}
                        \\cot^{-1}\\Big(\\frac{1 + k(k + 1)x^2}{x}\\Big) &=& \\tan^{-1}\\Big(\\frac{x}{1 + k(k + 1)x^2}\\Big)\\\\
                        &=& \\tan^{-1}\\Big(\\frac{(k+1)x - kx}{1 + kx\\cdot (k + 1)x}\\Big)\\\\
                        &=& \\tan^{-1}(k + 1)x - \\tan^{-1}kx
                    \\end{eqnarray}
                \\]`)}
                Nice! This is promising.
                ${escape(`\\[
                    \\begin{aligned}
                    S_n(x) &= \\sum_{k = 1}^n\\cot^{-1}\\Big(\\frac{1 + k(k + 1)x^2}{x}\\Big)\\\\
                    &= \\sum_{k = 1}^n\\Big(\\tan^{-1}(k + 1)x - \\tan^{-1}kx\\Big)\\\\
                    &= \\tan^{-1}(n+1)x - \\tan^{-1}x\\\\
                    &= \\tan^{-1}\\Big(\\frac{nx}{1 + (n+1)x^2}\\Big)
                    \\end{aligned}
                    \\]`)}</p>` : ``} ${!$presentationMode || $currentSlide >= 4 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 3: 1.</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\[
                    \\begin{aligned}
                    S_{10}(x) &= \\tan^{-1}\\Big(\\frac{10x}{1 + 11x^2}\\Big)\\\\
                    &= \\frac{\\pi}{2} - \\cot^{-1}\\Big(\\frac{10x}{1 + 11x^2}\\Big)\\\\
                    &= \\frac{\\pi}{2} - \\tan^{-1}\\Big(\\frac{1 + 11x^2}{10x}\\Big)
                    \\end{aligned}
                \\]`)}</p>` : ``} ${!$presentationMode || $currentSlide >= 5 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 3: 2.</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\[
                    \\begin{aligned}
                    \\lim_{n\\to \\infty}\\cot(S_n(x)) &= \\lim_{n\\to \\infty}\\cot\\Big(\\tan^{-1}\\Big(\\frac{nx}{1 + (n+1)x^2}\\Big)\\Big)\\\\
                    &= \\lim_{n\\to \\infty} \\frac{1 + (n + 1)x^2}{nx}\\\\
                    &= x
                    \\end{aligned}
                \\]`)}</p>` : ``} ${!$presentationMode || $currentSlide >= 6 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 6 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 3: 3.</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 6 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\[
                    \\begin{aligned}
                    S_3(x) &= \\frac{\\pi}{4}\\\\
                    \\tan^{-1}\\Big(\\frac{3x}{1 + 4x^2}\\Big) &= \\frac{\\pi}{4}\\\\
                    \\frac{3x}{1 + 4x^2} &= 1\\\\
                    4x^2 - 3x + 1 &= 0
                    \\end{aligned}
                \\]`)}
                has no real roots.</p>` : ``} ${!$presentationMode || $currentSlide >= 7 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 7 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 3: 4</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 7 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\[
                    \\begin{aligned}
                    \\tan(S_n(x)) &= \\frac{nx}{1 + (n + 1)x^2}\\\\
                    \\tan(S_n(1)) &= \\frac{n}{n + 2}\\\\
                    &= \\frac{1}{1 + 2/n}\\\\
                    &\\geq\\frac{1}{2}, \\text{ for } n\\geq 2
                    \\end{aligned}
                \\]`)}</p> <p data-svelte-h="svelte-1eisgdd">Only options 1 and 2 are correct.</p>` : ``}</section></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-37pT2_Pg.js.map
