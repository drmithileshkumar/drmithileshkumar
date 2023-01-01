import { c as create_ssr_component, d as subscribe, e as escape, k as add_attribute, j as null_to_empty } from './index-2bbd6063.js';
import { p as page } from './stores-7c08ea0c.js';
import { T as TeX } from './constants-b4a0d30f.js';

const css = {
  code: ".container.svelte-fwmae0{display:flex;position:relative}article.svelte-fwmae0{position:relative;padding:0.5em}aside.svelte-fwmae0{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-fwmae0{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-fwmae0::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-fwmae0{color:tomato;border-radius:10px;transition:all 1s}.pad.svelte-fwmae0{min-height:100px}.overlay.svelte-fwmae0{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.presentationMode.svelte-fwmae0{display:flex;gap:1em;height:1em;margin-bottom:0.5em}.thumbnail.svelte-fwmae0{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%;flex-direction:column}.statement.svelte-fwmae0{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}.flex.svelte-fwmae0{display:flex;flex-direction:column}.grid.svelte-fwmae0{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let optionStyle;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation, overlay;
  let presentationMode = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    optionStyle = "grid";
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1vrun5y_START -->${$$result.title = `<title>Mathematics Question 4</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-1vrun5y_END -->`, ""}
<div class="${"presentationMode svelte-fwmae0"}"><label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
    </label>
    ${``}</div>
<div class="${"container svelte-fwmae0"}">${``}
    ${`<span${add_attribute("this", overlay, 0)}></span>`}
    ${``}
    <article class="${["svelte-fwmae0", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}>${``}    
        ${`<h1>Question 4 [JEE adv, 2021]</h1>`}
        ${`<p class="${"question " + escape(
      "",
      true
    ) + " svelte-fwmae0"}">For any complex number \\(w = c + id\\), let \\(arg(w)\\in (-\\pi,\\pi]\\), where \\(i=${escape(TeX.sqrt("-1"))}\\). Let \\(\\alpha\\) and \\(\\beta\\) be real numbers such that for all complex numbers \\(z = x + iy\\) satisfying \\(arg\\Big[${escape(TeX.dfrac("z + \\alpha", "z + \\beta"))}\\Big]=${escape(TeX.dfrac("\\pi", "4"))}\\), the ordered pair \\((x, y)\\) lies on the circle \\(x^2 + y^2 + 5x - 3y + 4 = 0\\). Then, which of the following statements is (are) <strong>True</strong>?
        </p>`}
        ${`<ol class="${escape(null_to_empty(optionStyle), true) + " svelte-fwmae0"}"><li class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">${escape(`\\(\\alpha = -1\\)`)}</li>
            <li class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">${escape(`\\(\\alpha\\beta = 4\\)`)}</li>
            <li class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">${escape(`\\(\\alpha\\beta = -4\\)`)}</li>
            <li class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">${escape(`\\(\\beta = 4\\)`)}</li></ol>`}
        <section>${`<h2 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">Concepts</h2>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">Simplify the arg part.
                </p>`}</section>
        <section>${`<h2 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">Solution</h2>
                <h4 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">Step 1
                </h4>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">${escape(`\\[
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
    ) + " svelte-fwmae0"}">Step 2</h4>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">The above curve is the locus of \\(z = x + iy\\) or the pair \\((x,y)\\). This must be equal to the equation of the given circle. All we need to do now is to equate the coefficients of each term.
                </p>`}
            ${`<h4 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">Step 3</h4>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-fwmae0"}">This gives the following relations 
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
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-38a6f48e.js.map
