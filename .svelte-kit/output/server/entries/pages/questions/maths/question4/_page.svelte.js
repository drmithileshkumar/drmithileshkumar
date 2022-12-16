import { c as create_ssr_component, d as subscribe, e as escape, h as add_attribute, f as null_to_empty } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { T as TeX } from "../../../../../chunks/constants.js";
const _page_svelte_svelte_type_style_lang = "";
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
  return `${$$result.head += `<!-- HEAD_svelte-1vrun5y_START -->${$$result.title = `<title>Mathematics Question 4</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-1vrun5y_END -->`, ""}
<label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
</label>
<div class="${"container svelte-8lks9x"}">${``}
    <article class="${["svelte-8lks9x", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}><h1>Question 4 [JEE adv, 2021]</h1>
        ${`<p class="${"question " + escape(
    "",
    true
  ) + " svelte-8lks9x"}">For any complex number \\(w = c + id\\), let \\(arg(w)\\in (-\\pi,\\pi]\\), where \\(i=${escape(TeX.sqrt("-1"))}\\). Let \\(\\alpha\\) and \\(\\beta\\) be real numbers such that for all complex numbers \\(z = x + iy\\) satisfying \\(arg\\Big[${escape(TeX.dfrac("z + \\alpha", "z + \\beta"))}\\Big]=${escape(TeX.dfrac("\\pi", "4"))}\\), the ordered pair \\((x, y)\\) lies on the circle \\(x^2 + y^2 + 5x - 3y + 4 = 0\\). Then, which of the following statements is (are) <strong>True</strong>?
        </p>`}
        ${`<ol class="${escape(null_to_empty(optionStyle), true) + " svelte-8lks9x"}"><li class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\(\\alpha = -1\\)`)}</li>
            <li class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\(\\alpha\\beta = 4\\)`)}</li>
            <li class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\(\\alpha\\beta = -4\\)`)}</li>
            <li class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">${escape(`\\(\\beta = 4\\)`)}</li></ol>`}
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Concepts</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Simplify the arg part.
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
                            \\frac{z + \\alpha}{z + \\beta} &=& \\frac{(x + \\alpha) + iy}{(x + \\beta) + iy}\\\\
                            &=& \\frac{(x + \\alpha)(x + \\beta) + y^2 + i(\\beta - \\alpha)y}{(x + \\beta)^2 + y^2}\\\\
                        \\end{eqnarray}
                    \\]`)}
                    ${escape(`\\[
                        \\begin{eqnarray}
                            \\implies \\frac{(\\beta - \\alpha)y}{(x + \\alpha)(x + \\beta) + y^2} = \\tan\\frac{\\pi}{4}&=&1\\\\
                            \\implies x^2 + y^2 + (\\alpha + \\beta)y + (\\alpha - \\beta)y + \\alpha\\beta &=& 0
                        \\end{eqnarray}
                    \\]`)}</p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Step 2</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">The above curve is the locus of \\(z = x + iy\\) or the pair \\((x,y)\\). This must be equal to the equation of the given circle. All we need to do now is to equate the coefficients of each term.
                </p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">Step 3</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-8lks9x"}">This gives the following relations 
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
                </p>`}
            ${``}</section></article>
    ${``}</div>`;
});
export {
  Page as default,
  load
};
