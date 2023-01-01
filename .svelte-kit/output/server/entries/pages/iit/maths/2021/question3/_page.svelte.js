import { c as create_ssr_component, d as subscribe, e as escape, k as add_attribute, j as null_to_empty } from "../../../../../../chunks/index.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { T as TeX } from "../../../../../../chunks/constants.js";
/* empty css                                                             */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1tsnzck{display:flex;position:relative}article.svelte-1tsnzck{position:relative;padding:0.5em}aside.svelte-1tsnzck{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-1tsnzck{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1tsnzck::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-1tsnzck{color:tomato;border-radius:10px;transition:all 1s}.pad.svelte-1tsnzck{min-height:100px}.overlay.svelte-1tsnzck{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.presentationMode.svelte-1tsnzck{display:flex;gap:1em;height:1em;margin-bottom:0.5em}.thumbnail.svelte-1tsnzck{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1tsnzck{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation, overlay;
  let presentationMode = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-l581lx_START -->${$$result.title = `<title>Mathematics Question 3</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-l581lx_END -->`, ""}
<div class="${"presentationMode svelte-1tsnzck"}"><label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
    </label>
    ${``}</div>
<div class="${"container svelte-1tsnzck"}">${``}
    ${`<span${add_attribute("this", overlay, 0)}></span>`}
    ${``}
    <article class="${["svelte-1tsnzck", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}>${``}   
        ${`<h1>Question 3 [JEE adv, 2021]</h1>`}
        ${`<p class="${"question " + escape(
      "",
      true
    ) + " svelte-1tsnzck"}">For \\(x${escape(TeX.inR)}\\), thi number of real roots of the equation \\(3x^2-4|x^2 - 1| + x - 1 = 0\\) is ______.
            </p>`}
        <section>${`<h2 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">Concepts</h2>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">Consider the sign of  \\(x^2 - 1\\) to get two quadratic equations.
                </p>`}</section>
        <section>${`<h2 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">Solution</h2>
                <h4 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">Step 1
                </h4>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">${escape(`\\[
                        \\begin{eqnarray}
                            x^2 - 1 > 0&\\implies& x\\in (-\\infty, -1)\\cup(1,\\infty)\\\\
                            x^2 - 1 < 0&\\implies& x\\in (-1, 1)
                        \\end{eqnarray}
                    \\]`)}</p>`}
            ${`<h4 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">Step 2</h4>
                <h5 class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">Case 1: \\(x^2 - 1&gt;0\\)</h5>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">This gives the quadratic equation
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
    ) + " svelte-1tsnzck"}">Case 2: \\(x^2 - 1${escape(TeX.less)}0\\)</h5>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">This gives the quadratic equation
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
    ) + " svelte-1tsnzck"}">Step 3</h4>
                <p class="${escape(
      null_to_empty(""),
      true
    ) + " svelte-1tsnzck"}">There are two roots each of the two quadratic equations. Hence, the total number of roots is 4.
                </p>`}
            ${``}</section></article>
    ${``}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
