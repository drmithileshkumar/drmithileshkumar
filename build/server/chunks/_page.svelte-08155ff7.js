import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, j as null_to_empty } from './index-450bbd42.js';
import { c as currentSlide, s as slideCounter, b as presentationMode, p as presentation } from './stores2-c9b26d6a.js';
import { p as page } from './stores-2cecc6a9.js';
import { T as TeX } from './constants-e3dde4f2.js';
import './index3-18f69db9.js';

const css = {
  code: "article.svelte-akjtnj{position:relative;padding:0.5em}.absolute.svelte-akjtnj{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-akjtnj::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-akjtnj{color:tomato;border-radius:10px;transition:all 1s}.pad.svelte-akjtnj{min-height:100px}.thumbnail.svelte-akjtnj{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-akjtnj{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-l581lx_START -->${$$result.title = `<title>Mathematics Question 3</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-l581lx_END -->`, ""}

    <article class="${["svelte-akjtnj", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-akjtnj"}"><p class="${"question statement svelte-akjtnj"}">For \\(x${escape(TeX.inR)}\\), thi number of real roots of the equation \\(3x^2-4|x^2 - 1| + x - 1 = 0\\) is ______.
                </p></div>` : ``}   
        ${!$presentationMode || $currentSlide >= -1 ? `<h1>Question 3 [JEE adv, 2021]</h1>` : ``}
        ${!$presentationMode || $currentSlide >= 0 ? `<p class="${"question " + escape(
    $presentationMode && isActive === 0 ? "currentActive" : "",
    true
  ) + " svelte-akjtnj"}">For \\(x${escape(TeX.inR)}\\), thi number of real roots of the equation \\(3x^2-4|x^2 - 1| + x - 1 = 0\\) is ______.
            </p>` : ``}
        <section>${!$presentationMode || $currentSlide >= 1 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">Concepts</h2>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">Consider the sign of  \\(x^2 - 1\\) to get two quadratic equations.
                </p>` : ``}</section>
        <section>${!$presentationMode || $currentSlide >= 2 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">Solution</h2>
                <h4 class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">Step 1
                </h4>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">${escape(`\\[
                        \\begin{eqnarray}
                            x^2 - 1 > 0&\\implies& x\\in (-\\infty, -1)\\cup(1,\\infty)\\\\
                            x^2 - 1 < 0&\\implies& x\\in (-1, 1)
                        \\end{eqnarray}
                    \\]`)}</p>` : ``}
            ${!$presentationMode || $currentSlide >= 3 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">Step 2</h4>
                <h5 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">Case 1: \\(x^2 - 1&gt;0\\)</h5>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">This gives the quadratic equation
                    ${escape(`\\[
                        \\begin{eqnarray}
                            3x^2 -4(x^2 - 1) + x - 1 &=& 0\\\\
                            \\implies x^2-x -3 &=& 0\\\\
                            \\implies x &=& \\frac{1\\pm \\sqrt{13}}{2}
                        \\end{eqnarray}
                    \\]`)}
                    Both the roots are in the allowed interval \\(x\\in (-\\infty, -1)\\cup(1,\\infty)\\).
                </p>` : ``}
            ${!$presentationMode || $currentSlide >= 4 ? `<h5 class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">Case 2: \\(x^2 - 1${escape(TeX.less)}0\\)</h5>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">This gives the quadratic equation
                    ${escape(`\\[
                        \\begin{eqnarray}
                            3x^2 +4(x^2 - 1) + x - 1 &=& 0\\\\
                            \\implies 7x^2+x -5 &=& 0\\\\
                            \\implies x &=& \\frac{-1\\pm \\sqrt{141}}{14}
                        \\end{eqnarray}
                    \\]`)}
                    Both the roots are in the allowed interval \\(x\\in (-1,1)\\).
                </p>` : ``}
            ${!$presentationMode || $currentSlide >= 5 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">Step 3</h4>
                <p class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-akjtnj"}">There are two roots each of the two quadratic equations. Hence, the total number of roots is 4.
                </p>` : ``}
            ${$presentationMode && $currentSlide > 0 ? `<div class="${"pad svelte-akjtnj"}"></div>` : ``}</section></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-08155ff7.js.map
