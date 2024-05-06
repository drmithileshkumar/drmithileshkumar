import { c as create_ssr_component, v as validate_component } from './ssr-Cv_bEuJL.js';
import { P as Papers } from './Papers-CJ1PCiQe.js';
import './utils-DH7689cv.js';

const css = {
  code: ".container.svelte-nmqztf{padding:0 1em}",
  map: '{"version":3,"file":"+page@publications.svelte","sources":["+page@publications.svelte"],"sourcesContent":["<script>\\r\\n    import Papers from \\"$lib/components/Papers.svelte\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    .container {\\r\\n        padding: 0 1em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head><title>Dr Mithilesh Kumar</title></svelte:head>\\r\\n<div class=\\"container\\">\\r\\n    <h1>Research Papers</h1>\\r\\n    <Papers pdfReady/>\\r\\n    <!-- <Login /> -->\\r\\n</div>\\r\\n\\r\\n\\r\\n"],"names":[],"mappings":"AAII,wBAAW,CACP,OAAO,CAAE,CAAC,CAAC,GACf"}'
};
const Page_publications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""} <div class="container svelte-nmqztf"><h1 data-svelte-h="svelte-1jtii1e">Research Papers</h1> ${validate_component(Papers, "Papers").$$render($$result, { pdfReady: true }, {}, {})} </div>`;
});

export { Page_publications as default };
//# sourceMappingURL=_page@publications.svelte-CuOfquny.js.map
