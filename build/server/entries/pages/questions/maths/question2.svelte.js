import { c as create_ssr_component, j as subscribe, e as escape, f as add_attribute, d as null_to_empty } from "../../../../chunks/index-5c9f81d1.js";
import { p as page } from "../../../../chunks/stores-36cc7986.js";
import { T as TeX } from "../../../../chunks/constants-6101ff3a.js";
var question2_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-1vmd5qc{display:flex}article.svelte-1vmd5qc{padding:0.5em}aside.svelte-1vmd5qc{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-1vmd5qc{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1vmd5qc::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-1vmd5qc{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-1vmd5qc{min-height:150px}")();
const css = {
  code: ".container.svelte-1vmd5qc{display:flex}article.svelte-1vmd5qc{padding:0.5em}aside.svelte-1vmd5qc{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-1vmd5qc{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1vmd5qc::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-1vmd5qc{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-1vmd5qc{min-height:150px}",
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
const Question2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation;
  let presentationMode = false;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Mathematics Question 2</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname)}" data-svelte="svelte-1bghtt4"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}" data-svelte="svelte-1bghtt4">`, ""}
<label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
</label>
<div class="${"container svelte-1vmd5qc"}">${``}
    <article class="${["svelte-1vmd5qc", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}><h1>Question 2 [JEE adv, 2021]</h1>
        ${`<p class="${"question " + escape("") + " svelte-1vmd5qc"}">In a triangle ABC, let \\(AB = ${escape(TeX.sqrt("23"))}\\), and \\(BC = 3\\) and \\(CA = 4\\). Then the value of \\(${escape(TeX.dfrac("\\cot A + \\cot C", "\\cot B"))}\\) is ______.
        </p>`}
        <section>${`<h2 class="${escape(null_to_empty("")) + " svelte-1vmd5qc"}">Concepts</h2>
            <p class="${escape(null_to_empty("")) + " svelte-1vmd5qc"}">Use \\(\\cos A = ${escape(TeX.dfrac("b^2 + c^2 - a^2", "2bc"))}\\) and \\(\\Delta = ${escape(TeX.dfrac("1", "2"))}bc\\sin A\\)
            </p>`}</section>
        <section>${`<h2 class="${escape(null_to_empty("")) + " svelte-1vmd5qc"}">Solution</h2>
                
                <h4 class="${escape(null_to_empty("")) + " svelte-1vmd5qc"}">Step 1
                </h4>
                <p class="${escape(null_to_empty("")) + " svelte-1vmd5qc"}">${escape(`\\[
                        \\begin{eqnarray}
                            \\frac{\\cot A + \\cot C}{\\cot B} &=& \\frac{\\frac{\\cos A}{\\sin A} + \\frac{\\cos C}{\\sin C}}{\\frac{\\cos B}{\\sin B}}\\\\
                            &=&\\frac{\\frac{b^2 + c^2 - a^2}{2bc\\sin A} + \\frac{a^2 + b^2 - c^2}{2ab\\sin C}}{\\frac{a^2 + c^2 - b^2}{2ac\\sin B}}\\\\
                            &=&\\frac{\\frac{b^2 + c^2 - a^2}{4\\Delta} + \\frac{a^2 + b^2 - c^2}{4\\Delta}}{\\frac{a^2 + c^2 - b^2}{4\\Delta}}\\\\
                            &=& \\frac{2b^2}{a^2 + c^2 - b^2}\\\\
                            &=& \\frac{2\\times 4^2}{3^2 + 23 - 4^2} = 2
                        \\end{eqnarray}
                    \\]`)}</p>`}
            ${``}</section></article>
    ${``}</div>`;
});
export { Question2 as default, load };
