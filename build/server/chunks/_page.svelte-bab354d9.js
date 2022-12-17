import { c as create_ssr_component, d as subscribe, e as escape, i as add_attribute, h as null_to_empty } from './index-13a715ed.js';
import { p as page } from './stores-8ce7b459.js';
import { T as TeX } from './constants-b4a0d30f.js';

const css = {
  code: ".container.svelte-8lks9x{display:flex}article.svelte-8lks9x{padding:0.5em}aside.svelte-8lks9x{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-8lks9x{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-8lks9x::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-8lks9x{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-8lks9x{min-height:100px}.flex.svelte-8lks9x{display:flex;flex-direction:column}.grid.svelte-8lks9x{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}",
  map: null
};
async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com${url.pathname}`
    };
  }
  return { props: {} };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let optionStyle;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation;
  let presentationMode = false;
  $$result.css.add(css);
  optionStyle = "grid";
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1i7zrqo_START -->${$$result.title = `<title>Mathematics Question 6</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced 2021 Mathematics"}"><!-- HEAD_svelte-1i7zrqo_END -->`, ""}
<label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
</label>
<div class="${"container svelte-8lks9x"}">${``}
    <article class="${["svelte-8lks9x", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}><h1>Question 6 [JEE adv, 2021]</h1>
        ${`<p class="${"question " + escape(
    "",
    true
  ) + " svelte-8lks9x"}">For any \\(3\\times 3\\) matrix \\(M\\), let \\(|M|\\) denote the determinant of \\(M\\). Let \\(I\\) be the \\(3\\times 3\\) identity matrix. Let \\(E\\) and \\(F\\) be two \\(3\\times 3\\) matrices such that \\(I-EF\\) is invertible. If \\(G = ${escape(TeX.pow("(I - EF)", "-1"))}\\), then which of the following statements is (are) <strong>True</strong>?
        </p>`}
        ${`<ol class="${escape(null_to_empty(optionStyle), true) + " svelte-8lks9x"}"><li class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\(|FE| = |I-FE||FGE|\\)`)}</li>
            <li class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\((I-FE)(I + FGE) = I\\)`)}</li>
            <li class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">\\(EFG = GEF\\)</li>
            <li class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">\\((I - FE)(I-FGE) = I\\) </li></ol>`}
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Concepts</h2>
            <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Use \\(A${escape(TeX.inv("A"))} = ${escape(TeX.inv("A"))}A = I\\)
            </p>`}</section>
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Solution</h2>
            <h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Step 1
            </h4>
            <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\[
                    \\begin{eqnarray}
                        (I - EF)G &=& G(I-EF)\\\\
                        \\implies EFG &=& GEF
                    \\end{eqnarray}
                \\]`)}
                Option 3 is correct.
            </p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Step 2</h4>
            <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">We have that 
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
            </p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Step 3</h4>
            <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\[
                    \\begin{aligned}
                    (I-FE)(I - FGE) &= I - FE - FGE + FEFGE\\\\
                    &= I - FE - FGE + F(G - I)E\\\\
                    &= I - FE + FGE + FGE - FE\\\\
                    &= I - 2FE
                    \\end{aligned}
                \\]`)}
                Option 4 is incorrect.
            </p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Step 4</h4>
            <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\[
                    \\begin{aligned}
                    (I-FE)FGE &= FGE - FEFGE\\\\
                    &= FGE - F(G - I)E\\\\
                    &= FGE - FGE + FE\\\\
                    &= FE
                    \\end{aligned}
                \\]`)}
                Option 1 is correct.
            </p>`}
            ${``}</section></article>
    ${``}</div>`;
});

export { Page as default, load };
//# sourceMappingURL=_page.svelte-bab354d9.js.map
