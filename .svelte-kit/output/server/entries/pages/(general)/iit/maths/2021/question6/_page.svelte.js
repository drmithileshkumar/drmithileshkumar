import { c as create_ssr_component, b as subscribe, e as escape, f as add_attribute, j as null_to_empty } from "../../../../../../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, b as presentationMode, p as presentation } from "../../../../../../../chunks/stores2.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { T as TeX } from "../../../../../../../chunks/constants.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1a1o203{display:flex}article.svelte-1a1o203{padding:0.5em}.absolute.svelte-1a1o203{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1a1o203::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-1a1o203{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-1a1o203{min-height:100px}.flex.svelte-1a1o203{display:flex;flex-direction:column}.grid.svelte-1a1o203{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}",
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
  return `${$$result.head += `<!-- HEAD_svelte-1i7zrqo_START -->${$$result.title = `<title>Mathematics Question 6</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced 2021 Mathematics"}"><!-- HEAD_svelte-1i7zrqo_END -->`, ""}
    <article class="${["svelte-1a1o203", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}><h1>Question 6 [JEE adv, 2021]</h1>
        ${!$presentationMode || $currentSlide >= 0 ? `<p class="${"question " + escape(
    $presentationMode && isActive === 0 ? "currentActive" : "",
    true
  ) + " svelte-1a1o203"}">For any \\(3\\times 3\\) matrix \\(M\\), let \\(|M|\\) denote the determinant of \\(M\\). Let \\(I\\) be the \\(3\\times 3\\) identity matrix. Let \\(E\\) and \\(F\\) be two \\(3\\times 3\\) matrices such that \\(I-EF\\) is invertible. If \\(G = ${escape(TeX.pow("(I - EF)", "-1"))}\\), then which of the following statements is (are) <strong>True</strong>?
        </p>` : ``}
        ${!$presentationMode || $currentSlide >= 1 ? `<ol class="${escape(null_to_empty(optionStyle), true) + " svelte-1a1o203"}"><li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\(|FE| = |I-FE||FGE|\\)`)}</li>
            <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\((I-FE)(I + FGE) = I\\)`)}</li>
            <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">\\(EFG = GEF\\)</li>
            <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">\\((I - FE)(I-FGE) = I\\) </li></ol>` : ``}
        <section>${!$presentationMode || $currentSlide >= 2 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Concepts</h2>
            <p class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Use \\(A${escape(TeX.inv("A"))} = ${escape(TeX.inv("A"))}A = I\\)
            </p>` : ``}</section>
        <section>${!$presentationMode || $currentSlide >= 3 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Solution</h2>
            <h4 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Step 1
            </h4>
            <p class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\[
                    \\begin{eqnarray}
                        (I - EF)G &=& G(I-EF)\\\\
                        \\implies EFG &=& GEF
                    \\end{eqnarray}
                \\]`)}
                Option 3 is correct.
            </p>` : ``}
            ${!$presentationMode || $currentSlide >= 4 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Step 2</h4>
            <p class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">We have that 
                ${escape(`\\[
                    \\begin{aligned}
                        G(I - EF) &= I\\implies GEF = G-I\\\\
                        (I - EF)G & = I\\implies EFG = G -I
                    \\end{aligned}
                \\]`)}
                Now, ${escape(`\\[
                    \\begin{aligned}
                    (I-FE)(I + FGE) &= I - FE + FGE - FEFGE\\\\
                    &= I - FE + FGE - F(G - I)E\\\\
                    &= I - FE + FGE - FGE + FE\\\\
                    &= I
                    \\end{aligned}
                \\]`)}
                Option 2 is correct.
            </p>` : ``}
            ${!$presentationMode || $currentSlide >= 5 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Step 3</h4>
            <p class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\[
                    \\begin{aligned}
                    (I-FE)(I - FGE) &= I - FE - FGE + FEFGE\\\\
                    &= I - FE - FGE + F(G - I)E\\\\
                    &= I - FE + FGE + FGE - FE\\\\
                    &= I - 2FE
                    \\end{aligned}
                \\]`)}
                Option 4 is incorrect.
            </p>` : ``}
            ${!$presentationMode || $currentSlide >= 6 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 6 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Step 4</h4>
            <p class="${escape(
    null_to_empty($presentationMode && isActive === 6 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\[
                    \\begin{aligned}
                    (I-FE)FGE &= FGE - FEFGE\\\\
                    &= FGE - F(G - I)E\\\\
                    &= FGE - FGE + FE\\\\
                    &= FE
                    \\end{aligned}
                \\]`)}
                Option 1 is correct.
            </p>` : ``}
            ${$presentationMode && $currentSlide > 0 ? `<div class="${"pad svelte-1a1o203"}"></div>` : ``}</section></article>`;
});
export {
  Page as default
};
