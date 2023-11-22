import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
const Teaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
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
