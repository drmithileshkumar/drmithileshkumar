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

const index = 172;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BnqH5ptE.js')).default;
const universal_id = "src/routes/(general)/publications/+page.js";
const imports = ["_app/immutable/nodes/172.CBwJRtMG.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/DuRjPreR.js"];
const stylesheets = ["_app/immutable/assets/Paper.Bg_S1Oi_.css","_app/immutable/assets/172.QN_2bfCI.css","_app/immutable/assets/Papers.DWP9sFsm.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=172-CTdLcIWc.js.map
