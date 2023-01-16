import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, j as null_to_empty } from './index-450bbd42.js';
import { c as currentSlide, s as slideCounter, b as presentationMode, p as presentation } from './stores2-c9b26d6a.js';
import { p as page } from './stores-2cecc6a9.js';
import { T as TeX } from './constants-e3dde4f2.js';
import './index3-18f69db9.js';

const css = {
  code: "article.svelte-k7pfkr{position:relative;padding:0.5em}.absolute.svelte-k7pfkr{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-k7pfkr::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-k7pfkr{color:tomato;border-radius:10px;transition:all 1s}.pad.svelte-k7pfkr{min-height:100px}.overlay.svelte-k7pfkr{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.thumbnail.svelte-k7pfkr{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%;flex-direction:column}.statement.svelte-k7pfkr{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}.flex.svelte-k7pfkr{display:flex;flex-direction:column}.grid.svelte-k7pfkr{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}",
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
  return `${$$result.head += `<!-- HEAD_svelte-1vrun5y_START -->${$$result.title = `<title>Mathematics Question 4</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-1vrun5y_END -->`, ""}

    <article class="${["svelte-k7pfkr", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail question statement svelte-k7pfkr"}"><p>For any complex number \\(w = c + id\\), let \\(arg(w)\\in (-\\pi,\\pi]\\), where \\(i=${escape(TeX.sqrt("-1"))}\\). Let \\(\\alpha\\) and \\(\\beta\\) be real numbers such that for all complex numbers \\(z = x + iy\\) satisfying \\(arg\\Big[${escape(TeX.dfrac("z + \\alpha", "z + \\beta"))}\\Big]=${escape(TeX.dfrac("\\pi", "4"))}\\), the ordered pair \\((x, y)\\) lies on the circle \\(x^2 + y^2 + 5x - 3y + 4 = 0\\). Then, which of the following statements is (are) <strong>True</strong>?
                </p>
                <ol class="${"grid svelte-k7pfkr"}" style="${"width: 100%"}"><li>${escape(`\\(\\alpha = -1\\)`)}</li>
                    <li>${escape(`\\(\\alpha\\beta = 4\\)`)}</li>
                    <li>${escape(`\\(\\alpha\\beta = -4\\)`)}</li>
                    <li>${escape(`\\(\\beta = 4\\)`)}</li></ol></div>` : ``}    
        ${!$presentationMode || $currentSlide >= -1 ? `<h1>Question 4 [JEE adv, 2021]</h1>` : ``}
        ${!$presentationMode || $currentSlide >= 0 ? `<p class="${"question " + escape(
    $presentationMode && isActive === 0 ? "currentActive" : "",
    true
  ) + " svelte-k7pfkr"}">For any complex number \\(w = c + id\\), let \\(arg(w)\\in (-\\pi,\\pi]\\), where \\(i=${escape(TeX.sqrt("-1"))}\\). Let \\(\\alpha\\) and \\(\\beta\\) be real numbers such that for all complex numbers \\(z = x + iy\\) satisfying \\(arg\\Big[${escape(TeX.dfrac("z + \\alpha", "z + \\beta"))}\\Big]=${escape(TeX.dfrac("\\pi", "4"))}\\), the ordered pair \\((x, y)\\) lies on the circle \\(x^2 + y^2 + 5x - 3y + 4 = 0\\). Then, which of the following statements is (are) <strong>True</strong>?
        </p>` : ``}
        ${!$presentationMode || $currentSlide >= 1 ? `<ol class="${escape(null_to_empty(optionStyle), true) + " svelte-k7pfkr"}"><li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">${escape(`\\(\\alpha = -1\\)`)}</li>
            <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">${escape(`\\(\\alpha\\beta = 4\\)`)}</li>
            <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">${escape(`\\(\\alpha\\beta = -4\\)`)}</li>
            <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">${escape(`\\(\\beta = 4\\)`)}</li></ol>` : ``}
        <section>${!$presentationMode || $currentSlide >= 2 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">Concepts</h2>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">Simplify the arg part.
                </p>` : ``}</section>
        <section>${!$presentationMode || $currentSlide >= 3 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">Solution</h2>
                <h4 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">Step 1
                </h4>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">${escape(`\\[
                        \\begin{eqnarray}
                            \\frac{z + \\alpha}{z + \\beta} &=& \\frac{(x + \\alpha) + iy}{(x + \\beta) + iy}\\\\
                            &=& \\frac{(x + \\alpha)(x + \\beta) + y^2 + i(\\beta - \\alpha)y}{(x + \\beta)^2 + y^2}\\\\
                        \\end{eqnarray}
                    \\]`)}
                    ${escape(`\\[
                        \\begin{eqnarray}
                            \\implies \\frac{(\\beta - \\alpha)y}{(x + \\alpha)(x + \\beta) + y^2} = \\tan\\frac{\\pi}{4}&=&1\\\\
                            \\implies x^2 + y^2 + (\\alpha + \\beta)y + (\\alpha - \\beta)y + \\alpha\\beta &=& 0
                        \\end{eqnarray}
                    \\]`)}</p>` : ``}
            ${!$presentationMode || $currentSlide >= 4 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">Step 2</h4>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">The above curve is the locus of \\(z = x + iy\\) or the pair \\((x,y)\\). This must be equal to the equation of the given circle. All we need to do now is to equate the coefficients of each term.
                </p>` : ``}
            ${!$presentationMode || $currentSlide >= 5 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">Step 3</h4>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-k7pfkr"}">This gives the following relations 
                    ${escape(`\\[
                            \\begin{eqnarray}
                                \\alpha + \\beta &=& 5\\\\
                                \\alpha - \\beta &=& -3\\\\
                                \\alpha \\beta &=& 4\\\\
                                \\implies \\alpha &=& 1\\\\
                                \\beta &=& 4
                            \\end{eqnarray}
                            \\]`)}
                    Therefore, options 1 and 4 are correct.
                </p>` : ``}
            ${$presentationMode && $currentSlide > 0 ? `<div class="${"pad svelte-k7pfkr"}"></div>` : ``}</section></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ec1a388d.js.map
