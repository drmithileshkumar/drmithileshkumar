import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@about.svelte-D4tzgc9N.js')).default;
const universal_id = "src/routes/(about)/about/+page.js";
const imports = ["_app/immutable/nodes/14.CMLppF6y.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js"];
const stylesheets = ["_app/immutable/assets/14.BsdFgWvy.css","_app/immutable/assets/Paper.Bg_S1Oi_.css","_app/immutable/assets/Papers.DWP9sFsm.css","_app/immutable/assets/P.CvI4RsOs.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=14-Bdpcp-AI.js.map
