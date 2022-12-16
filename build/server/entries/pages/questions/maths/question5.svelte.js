import { c as create_ssr_component, j as subscribe, e as escape, f as add_attribute, d as null_to_empty } from "../../../../chunks/index-5c9f81d1.js";
import { p as page } from "../../../../chunks/stores-36cc7986.js";
import { T as TeX } from "../../../../chunks/constants-6101ff3a.js";
var question5_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".options.svelte-1j4grdp{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}.container.svelte-1j4grdp{display:flex}article.svelte-1j4grdp{padding:0.5em}aside.svelte-1j4grdp{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-1j4grdp{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1j4grdp::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-1j4grdp{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-1j4grdp{min-height:100px}.flex.svelte-1j4grdp{display:flex;flex-direction:column}.grid.svelte-1j4grdp{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}")();
const css = {
  code: ".options.svelte-1j4grdp{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}.container.svelte-1j4grdp{display:flex}article.svelte-1j4grdp{padding:0.5em}aside.svelte-1j4grdp{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-1j4grdp{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1j4grdp::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-1j4grdp{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-1j4grdp{min-height:100px}.flex.svelte-1j4grdp{display:flex;flex-direction:column}.grid.svelte-1j4grdp{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}",
  map: null
};
async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com${url.pathname}`
    };
  }
  return { props: {} };
}
const Question5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let optionStyle;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation;
  let presentationMode = false;
  $$result.css.add(css);
  optionStyle = "grid";
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Mathematics Question 5</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname)}" data-svelte="svelte-1hick8"><meta name="${"description"}" content="${"How do we define base or fundamental units? How long really is one meter?"}" data-svelte="svelte-1hick8">`, ""}
<label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
</label>
<div class="${"container svelte-1j4grdp"}">${``}
    <article class="${["svelte-1j4grdp", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}><h1>Question 5 [JEE adv, 2021]</h1>
        ${`<p class="${"question " + escape("") + " svelte-1j4grdp"}">For any positive integer \\(n\\), let \\(S_n : (0,\\infty)\\to ${escape(TeX.bbR)}\\) be defined by \\[S_n(x) = ${escape(TeX.sum("k=1", "n"))}${escape(TeX.acot)}\\Big(${escape(TeX.frac("1 + k(k + 1)x^2", "x"))}\\Big)\\] where for any \\(x${escape(TeX.inR)}, ${escape(TeX.acot)}(x)\\in (0, \\pi)\\) and \\(${escape(TeX.atan)}(x)\\in \\Big(-${escape(TeX.piby2)}, ${escape(TeX.piby2)}\\Big)\\). Then which of the following statements is (are) <strong>True</strong>?
        </p>`}
        ${`<ol class="${escape(null_to_empty(optionStyle)) + " svelte-1j4grdp"}"><li class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">${escape(`\\(S_{10}(x) = \\dfrac{\\pi}{2}-\\tan^{-1}\\Big(\\dfrac{1 + 11x^2}{10x}\\Big)\\)`)}, for all \\(x&gt;0\\) </li>
                <li class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">${escape(`\\(\\lim_{n\\to \\infty}\\cot(S_n(x)) = x\\)`)}, for all \\(x&gt;0\\) </li>
                <li class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">The equation ${escape(`\\(S_3(x)=\\dfrac{\\pi}{4}\\)`)} has a root in \\((0,\\infty)\\)</li>
                <li class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">${escape(`\\(\\tan(S_n(x))\\leq \\dfrac{1}{2}\\)`)}, for all \\(n\\geq 1\\) and \\(x &gt; 0\\) </li></ol>`}
        <section>${`<h2 class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Concepts</h2>
                <p class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Seems like an ugly sum. Try to see any pattern that gives difference of terms. Then, in-between terms cancel out.
                </p>`}</section>
        <section>${`<h2 class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Solution</h2>
            <h4 class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Step 1
            </h4>
            <p class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Simplify the sum.
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
                    \\]`)}</p>`}
            ${`<h4 class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Step 3: 1.</h4>
            <p class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">${escape(`\\[
                    \\begin{aligned}
                    S_{10}(x) &= \\tan^{-1}\\Big(\\frac{10x}{1 + 11x^2}\\Big)\\\\
                    &= \\frac{\\pi}{2} - \\cot^{-1}\\Big(\\frac{10x}{1 + 11x^2}\\Big)\\\\
                    &= \\frac{\\pi}{2} - \\tan^{-1}\\Big(\\frac{1 + 11x^2}{10x}\\Big)
                    \\end{aligned}
                \\]`)}</p>`}
            ${`<h4 class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Step 3: 2.</h4>
            <p class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">${escape(`\\[
                    \\begin{aligned}
                    \\lim_{n\\to \\infty}\\cot(S_n(x)) &= \\lim_{n\\to \\infty}\\cot\\Big(\\tan^{-1}\\Big(\\frac{nx}{1 + (n+1)x^2}\\Big)\\Big)\\\\
                    &= \\lim_{n\\to \\infty} \\frac{1 + (n + 1)x^2}{nx}\\\\
                    &= x
                    \\end{aligned}
                \\]`)}</p>`}
            ${`<h4 class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Step 3: 3.</h4>
            <p class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">${escape(`\\[
                    \\begin{aligned}
                    S_3(x) &= \\frac{\\pi}{4}\\\\
                    \\tan^{-1}\\Big(\\frac{3x}{1 + 4x^2}\\Big) &= \\frac{\\pi}{4}\\\\
                    \\frac{3x}{1 + 4x^2} &= 1\\\\
                    4x^2 - 3x + 1 &= 0
                    \\end{aligned}
                \\]`)}
                has no real roots.
            </p>`}
            ${`<h4 class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">Step 3: 4</h4>
            <p class="${escape(null_to_empty("")) + " svelte-1j4grdp"}">${escape(`\\[
                    \\begin{aligned}
                    \\tan(S_n(x)) &= \\frac{nx}{1 + (n + 1)x^2}\\\\
                    \\tan(S_n(1)) &= \\frac{n}{n + 2}\\\\
                    &= \\frac{1}{1 + 2/n}\\\\
                    &\\geq\\frac{1}{2}, \\text{ for } n\\geq 2
                    \\end{aligned}
                \\]`)}</p>
            <p>Only options 1 and 2 are correct.
            </p>`}</section></article>
    ${``}</div>`;
});
export { Question5 as default, load };
