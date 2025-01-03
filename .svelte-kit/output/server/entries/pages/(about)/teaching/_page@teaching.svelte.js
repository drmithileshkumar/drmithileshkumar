import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr2.js";
const css$1 = {
  code: ".research.svelte-1ggrs5p{line-height:1.45;word-spacing:0.1em}",
  map: '{"version":3,"file":"Teaching.svelte","sources":["Teaching.svelte"],"sourcesContent":["<style>\\r\\n    .research {\\r\\n        line-height: 1.45;\\r\\n        word-spacing: 0.1em;\\r\\n    }\\r\\n</style>\\r\\n<article class=\\"research\\">\\r\\n    <!-- I was doing active research during my Phd and post doc in Bergen, Norway. During my phd, I was working with Daniel Lokshtanov, my supervisor, in parameterized algorithms. After my phd, I took up post doc position in a research-based company simula-uib.no. There, I worked on quantum-safe cryptography and quantum codes. And then, pandemic happened. -->\\r\\n    <p>\\r\\n        In line with my future research goal, I would prefer teaching courses in quantum computing, starting with introduction to quantum physics and linear algebra tailored to the needs of quantum computation. Then, a basic course that introduces various fields in quantum computation like quantum algorithms, quantum information, quantum error correction, followed by advanced research level courses, preparing the student for research and industry.\\r\\n    </p>\\r\\n</article>"],"names":[],"mappings":"AACI,wBAAU,CACN,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,KAClB"}'
};
const Teaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="research svelte-1ggrs5p" data-svelte-h="svelte-1dqhshe"> <p>In line with my future research goal, I would prefer teaching courses in quantum computing, starting with introduction to quantum physics and linear algebra tailored to the needs of quantum computation. Then, a basic course that introduces various fields in quantum computation like quantum algorithms, quantum information, quantum error correction, followed by advanced research level courses, preparing the student for research and industry.</p></article>`;
});
const css = {
  code: ".container.svelte-nmqztf{padding:0 1em}",
  map: '{"version":3,"file":"+page@teaching.svelte","sources":["+page@teaching.svelte"],"sourcesContent":["<script>\\r\\n    import Teaching from \\"$lib/components/Teaching.svelte\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    .container {\\r\\n        padding: 0 1em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head><title>Dr Mithilesh Kumar</title></svelte:head>\\r\\n<div class=\\"container\\">\\r\\n    <h1>Future Teaching</h1>\\r\\n    <Teaching/>\\r\\n    <!-- <Login /> -->\\r\\n</div>\\r\\n\\r\\n\\r\\n"],"names":[],"mappings":"AAII,wBAAW,CACP,OAAO,CAAE,CAAC,CAAC,GACf"}'
};
const Page_teaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""} <div class="container svelte-nmqztf"><h1 data-svelte-h="svelte-1krid3g">Future Teaching</h1> ${validate_component(Teaching, "Teaching").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page_teaching as default
};
