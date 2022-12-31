import { c as create_ssr_component, d as subscribe, e as escape, k as add_attribute, j as null_to_empty } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { T as TeX } from "../../../../../chunks/constants.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-v5s8ir{display:flex}article.svelte-v5s8ir{padding:0.5em}aside.svelte-v5s8ir{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-v5s8ir{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-v5s8ir::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-v5s8ir{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-v5s8ir{min-height:100px}",
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
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation;
  let presentationMode = false;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-l581lx_START -->${$$result.title = `<title>Mathematics Question 3</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-l581lx_END -->`, ""}
<label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
</label>
<div class="${"container svelte-v5s8ir"}">${``}
    <article class="${["svelte-v5s8ir", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}><h1>Question 3 [JEE adv, 2021]</h1>
        ${`<p class="${"question " + escape(
    "",
    true
  ) + " svelte-v5s8ir"}">For \\(x${escape(TeX.inR)}\\), thi number of real roots of the equation \\(3x^2-4|x^2 - 1| + x - 1 = 0\\) is ______.
            </p>`}
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Concepts</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Consider the sign of  \\(x^2 - 1\\) to get two quadratic equations.
                </p>`}</section>
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Solution</h2>
                <h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Step 1
                </h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">${escape(`\\[
                        \\begin{eqnarray}
                            x^2 - 1 > 0&\\implies& x\\in (-\\infty, -1)\\cup(1,\\infty)\\\\
                            x^2 - 1 < 0&\\implies& x\\in (-1, 1)
                        \\end{eqnarray}
                    \\]`)}</p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Step 2</h4>
                <h5 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Case 1: \\(x^2 - 1&gt;0\\)</h5>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">This gives the quadratic equation
                    ${escape(`\\[
                        \\begin{eqnarray}
                            3x^2 -4(x^2 - 1) + x - 1 &=& 0\\\\
                            \\implies x^2-x -3 &=& 0\\\\
                            \\implies x &=& \\frac{1\\pm \\sqrt{13}}{2}
                        \\end{eqnarray}
                    \\]`)}
                    Both the roots are in the allowed interval \\(x\\in (-\\infty, -1)\\cup(1,\\infty)\\).
                </p>`}
            ${`<h5 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Case 2: \\(x^2 - 1${escape(TeX.less)}0\\)</h5>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">This gives the quadratic equation
                    ${escape(`\\[
                        \\begin{eqnarray}
                            3x^2 +4(x^2 - 1) + x - 1 &=& 0\\\\
                            \\implies 7x^2+x -5 &=& 0\\\\
                            \\implies x &=& \\frac{-1\\pm \\sqrt{141}}{14}
                        \\end{eqnarray}
                    \\]`)}
                    Both the roots are in the allowed interval \\(x\\in (-1,1)\\).
                </p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Step 3</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">There are two roots each of the two quadratic equations. Hence, the total number of roots is 4.
                </p>`}
            ${``}</section></article>
    ${``}</div>`;
});
export {
  Page as default,
  load
};
