import { c as create_ssr_component, j as subscribe, e as escape } from "../../../../chunks/index-5c9f81d1.js";
import { p as page } from "../../../../chunks/stores-36cc7986.js";
var question1_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".options.svelte-1cxluvx{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}")();
const css = {
  code: ".options.svelte-1cxluvx{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}",
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
const Question1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Physics Question 1</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname)}" data-svelte="svelte-1wwyr2b"><meta name="${"description"}" content="${"How do we define base or fundamental units? How long really is one meter?"}" data-svelte="svelte-1wwyr2b">`, ""}
<article><h1>Question 1</h1>
    <p>The dimension of stopping potential ${escape(`\\(V_0\\)`)} in photoelectric effect in units of Planck&#39;s constant ${escape(`\\(h\\)`)}, speed of light ${escape(`\\(c\\)`)}, Gravitational constant ${escape(`\\(G\\)`)} and ampere ${escape(`\\(A\\)`)} is:
    </p>
    <ol class="${"options svelte-1cxluvx"}"><li>${escape(`\\(h^2Gc^{-5}A^{-1}\\)`)}</li>
        <li>${escape(`\\(h^\\frac{1}{3}G^{\\frac{2}{3}}c^{\\frac{1}{3}}A^{-1}\\)`)}</li>
        <li>${escape(`\\(h^\\frac{2}{3}G^{\\frac{1}{3}}c^{\\frac{5}{3}}A^{-1}\\)`)}</li>
        <li>${escape(`\\(h^\\frac{-2}{3}G^{\\frac{4}{3}}c^{\\frac{-1}{3}}A^{-1}\\)`)}</li></ol>
    <section><h2>Concepts</h2>
        <p>In the original problem that appeared in IIT Mains, all options were <strong>wrong</strong> and full marks were awarded to each student. This problem has a very basic difficulty. Not only all options were incorrect, this question does not have a unique answer as ${escape(`\\(h, c, G, A\\)`)} do not form an independent set of dimensions like ${escape(`\\(M, L, T, A\\)`)} would form. It is easily verified that dimensionally we have ${escape(`\\[[hG] = [c]^5\\]`)}</p></section>
    <section><h2>Solution</h2>
        <p>The options have been modified such that it contains one correct option. Let us formally see how to solve this problem.</p>
        <h4>Step 1</h4>
        <p>Express the dimensions of ${escape(`\\(V_0\\)`)} in terms of ${escape(`\\(h, c, G, A\\)`)} with unknown powers ${escape(`\\(x_h, x_c, x_G, x_A\\)`)} respectively. ${escape(`\\[[V_0] = [h]^{x_h}[G]^{x_G}[c]^{x_c}[A]^{x_A}\\]`)}</p>
        <h4>Step 2</h4>
        <p>Write the dimensions of all the quantities envolved in terms of ${escape(`\\(M, L, T, A\\)`)}.
            ${escape(`\\[
                \\begin{eqnarray}
                    [V_0] &=& [ML^2T^{-3}A^{-1}] \\\\
                    [h] &=& [ML^2T^{-3}] \\\\
                    [G] &=& [M^{-1}L^3T^{-2}] \\\\
                    [c] &=& [LT^{-1}]
                \\end{eqnarray}                
                \\]`)}</p>
        <h4>Step 3</h4>
        <p>Substitute these expressions into Equation in Step 1, ${escape(`\\[
            \\begin{eqnarray}
                [ML^2T^{-3}A^{-1}] &=& [ML^2T^{-3}]^{x_h} [M^{-1}L^3T^{-2}]^{x_G} [LT^{-1}]^{x_c} [A]^{x_A} \\\\
                &=& [M^{x_h-x_G}L^{2x_h+3x_G+x_c}T^{-3x_h-2x_G-x_c}A^{x_A}]
            \\end{eqnarray}
            \\]`)}</p>
        <h4>Step 4</h4>
        <p>Equate the powers of like terms to get a system of equations ${escape(`\\[
            \\begin{eqnarray}
            x_h-x_G &=& 1\\\\
            2x_h+3x_G+x_c &=& 2\\\\
            -3x_h-2x_G-x_c &=& 3\\\\
            x_A &=& -1
            \\end{eqnarray}
            \\]`)}</p>
        <h5>Step 5</h5>
        <p>Solve the system of equations. This system does not have a unique solution. A generic solution can be expressed as ${escape(`
        \\[
        \\left.\\begin{aligned}
            x_h &= x_G + 1\\\\
            x_c &= -5x_G\\\\
            x_A &= -1
        \\end{aligned}\\right\\rbrace \\rightarrow
        \\left\\{\\begin{aligned}
            x_G &= 1\\\\
            x_h &= 2\\\\
            x_c &= -5\\\\
            x_A &= -1
        \\end{aligned}\\right.
    \\]
        `)}</p>
      <p>That is, ${escape(`\\([V_0] = [h^2Gc^{-5}A^{-1}]\\)`)}. Hence, the correct choice is <strong>Option 1</strong>.
      </p></section></article>`;
});
export { Question1 as default, load };
