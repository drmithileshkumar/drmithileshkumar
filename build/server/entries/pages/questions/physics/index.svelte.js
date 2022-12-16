import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../../chunks/index-5c9f81d1.js";
/* empty css                                                              */var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "a.svelte-1asvsve{text-decoration:none}.options.svelte-1asvsve{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}")();
const css = {
  code: "a.svelte-1asvsve{text-decoration:none}.options.svelte-1asvsve{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}",
  map: null
};
async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/questions/physics`
    };
  }
  return { props: {} };
}
const Physics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Physics Questions</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/questions/physics"}" data-svelte="svelte-1rnkw98"><meta name="${"description"}" content="${"Learn and practice Physics for school, IIT JEE, Olympiad"}" data-svelte="svelte-1rnkw98">`, ""}
<article><h1 style="${"margin-bottom:0;"}">Practice Problems in Physics</h1>
    <h2 style="${"font-size: 1.2em; font-weight: 400;color: #888; margin-top:0;"}">Suitable for Class XI, XII and IIT JEE and other examinations.</h2>
    
    <div class="${"problemlist"}"><h3>Question 1</h3>
        <a${add_attribute("href", "/questions/physics/question1", 0)} class="${"svelte-1asvsve"}"><p>The dimension of stopping potential ${escape(`\\(V_0\\)`)} in photoelectric effect in units of Planck&#39;s constant ${escape(`\\(h\\)`)}, speed of light ${escape(`\\(c\\)`)}, Gravitational constant ${escape(`\\(G\\)`)} and ampere ${escape(`\\(A\\)`)} is:
            </p>
            <ol class="${"options svelte-1asvsve"}"><li>${escape(`\\(h^2Gc^{-5}A^{-1}\\)`)}</li>
                <li>${escape(`\\(h^\\frac{1}{3}G^{\\frac{2}{3}}c^{\\frac{1}{3}}A^{-1}\\)`)}</li>
                <li>${escape(`\\(h^\\frac{2}{3}G^{\\frac{1}{3}}c^{\\frac{5}{3}}A^{-1}\\)`)}</li>
                <li>${escape(`\\(h^\\frac{-2}{3}G^{\\frac{4}{3}}c^{\\frac{-1}{3}}A^{-1}\\)`)}</li></ol></a></div></article>`;
});
export { Physics as default, load };
