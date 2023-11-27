import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
const Teaching_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".research.svelte-1ggrs5p{line-height:1.45;word-spacing:0.1em}",
  map: null
};
const Teaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="research svelte-1ggrs5p">
    <p>In line with my future research goal, I would prefer teaching courses in quantum computing, starting with introduction to quantum physics and linear algebra tailored to the needs of quantum computation. Then, a basic course that introduces various fields in quantum computation like quantum algorithms, quantum information, quantum error correction, followed by advanced research level courses, preparing the student for research and industry.
    </p></article>`;
});
const _page_teaching_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-nmqztf{padding:0 1em}",
  map: null
};
const Page_teaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}
<div class="container svelte-nmqztf"><h1>Future Teaching</h1>
    ${validate_component(Teaching, "Teaching").$$render($$result, {}, {}, {})}
    </div>`;
});
export {
  Page_teaching as default
};
