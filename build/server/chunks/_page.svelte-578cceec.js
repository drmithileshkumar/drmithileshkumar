import { c as create_ssr_component, d as subscribe, e as escape, h as add_attribute, f as null_to_empty } from './index-d64f493b.js';
import { p as page } from './stores-ebd32062.js';
import { T as TeX } from './constants-b4a0d30f.js';

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
  {
    console.log(presentationMode);
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1iux0bb_START -->${$$result.title = `<title>Mathematics Question 1</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-1iux0bb_END -->`, ""}
<label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
</label>
<div class="${"container svelte-v5s8ir"}">${``}
    <article class="${["svelte-v5s8ir", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}><h1>Question 1 [JEE adv, 2021]</h1>
        ${`<p class="${"question " + escape(
    "",
    true
  ) + " svelte-v5s8ir"}">Let \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\) be vectors in three-dimensional space, where \\(${escape(TeX.vec("u"))}\\) and \\(${escape(TeX.vec("v"))}\\) are unit vectors which are not perpendicular to each other and \\[${escape(TeX.vec("u"))}\\cdot ${escape(TeX.vec("w"))} = 1,\\quad ${escape(TeX.vec("v"))}\\cdot ${escape(TeX.vec("w"))} = 1\\quad ${escape(TeX.vec("w"))}\\cdot ${escape(TeX.vec("w"))} = 4\\]
                If the volume of the parallelopiped, whose adjacent sides are represented by the vectors \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\), is \\(${escape(TeX.sqrt("2"))}\\), then the value of \\(|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}|\\) is ______.
            </p>`}
        
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Concepts</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">The volume of the parallelopiped is given by the scalar triple product of the side vectors.
                </p>`}</section>
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Solution</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">\\(${escape(TeX.vec("u"))}\\) and \\(${escape(TeX.vec("v"))}\\) are unit vectors, to solve the problem we need the value of \\(${escape(TeX.vec("u"))}\\cdot${escape(TeX.vec("v"))}\\).</p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Step 1</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Use triple product of the vectors which is equal to the given volume. ${escape(`\\[\\vec{u}\\cdot(\\vec{v}\\times\\vec{w}) = \\sqrt{2}\\]`)}</p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Step 2</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Squaring the above equation gives
                    ${escape(`\\[
                        (\\vec{u}\\cdot(\\vec{v}\\times\\vec{w}))^2 = \\left |\\begin{matrix}
                        \\vec{u}\\cdot\\vec{u} & \\vec{u}\\cdot\\vec{v} & \\vec{u}\\cdot\\vec{w}\\\\
                        \\vec{v}\\cdot\\vec{u} & \\vec{v}\\cdot\\vec{v} & \\vec{v}\\cdot\\vec{w}\\\\
                        \\vec{w}\\cdot\\vec{u} & \\vec{w}\\cdot\\vec{v} & \\vec{w}\\cdot\\vec{w}
                        \\end{matrix}\\right | = 2
                        \\]`)}</p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">This implies
                    ${escape(`\\[
                        \\left |\\begin{matrix}
                        1 & \\vec{u}\\cdot\\vec{v} & 1\\\\
                        \\vec{v}\\cdot\\vec{u} & 1 & 1\\\\
                        1 & 1 & 4
                        \\end{matrix}\\right | = 2
                        \\]`)}</p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Hence,
                        ${escape(`\\[
                            \\begin{eqnarray}
                            4(\\vec{u}\\cdot\\vec{v})^2 - 2(\\vec{u}\\cdot\\vec{v}) = 0\\\\
                            \\vec{u}\\cdot\\vec{v} = 0 \\text{~or~} \\vec{u}\\cdot\\vec{v} = \\frac{1}{2}
                            \\end{eqnarray}
                            \\]`)}
                    As \\(${escape(TeX.vec("u"))}\\cdot${escape(TeX.vec("v"))}\\neq 0\\), the only solution is \\(${escape(TeX.vec("u"))}\\cdot${escape(TeX.vec("v"))} = ${escape(TeX.dfrac("1", "2"))}\\)
                </p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">Step 3</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-v5s8ir"}">\\((|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}|)^2 = 9 + 25 + 30\\times${escape(TeX.dfrac("1", "2"))} = 49\\)
                    This implies \\(|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}| = 7\\)
                </p>`}
            ${``}</section></article>
    ${``}</div>`;
});

export { Page as default, load };
//# sourceMappingURL=_page.svelte-578cceec.js.map
