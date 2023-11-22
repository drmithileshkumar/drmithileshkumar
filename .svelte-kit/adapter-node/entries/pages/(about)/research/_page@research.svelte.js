import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                                                         */const css$1 = {
  code: ".research.svelte-1ggrs5p{line-height:1.45;word-spacing:0.1em}",
  map: null
};
const Research = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="research svelte-1ggrs5p"></div>`;
});
const _page_research_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-nmqztf{padding:0 1em}",
  map: null
};
const Page_research = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}
<div class="container svelte-nmqztf"><h1>Future Research</h1>
    ${validate_component(Research, "Research").$$render($$result, {}, {}, {})}
    </div>`;
});
export {
  Page_research as default
};
