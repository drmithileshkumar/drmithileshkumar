import { c as create_ssr_component, v as validate_component } from './index3-8ac84804.js';
import { P as Papers } from './Papers-91a906eb.js';

const css = {
  code: ".container.svelte-nmqztf{padding:0 1em}",
  map: null
};
const Page_publications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}
<div class="container svelte-nmqztf"><h1>Research Papers</h1>
    ${validate_component(Papers, "Papers").$$render($$result, { pdfReady: true }, {}, {})}
    </div>`;
});

export { Page_publications as default };
//# sourceMappingURL=_page@publications.svelte-fa25a147.js.map
