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

const index = 195;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-kiXnmImR.js')).default;
const universal_id = "src/routes/(general)/talks/quantumteleportation/+page.js";
const imports = ["_app/immutable/nodes/195.CLaM4I9G.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/B7Rf94Ek.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/B2rI9nBn.js","_app/immutable/chunks/C2Tgqvmf.js","_app/immutable/chunks/CKTPjc_7.js","_app/immutable/chunks/B1IfrOim.js","_app/immutable/chunks/CzCYmz-Z.js"];
const stylesheets = ["_app/immutable/assets/Image.CKNRP0SZ.css","_app/immutable/assets/P.CvI4RsOs.css","_app/immutable/assets/195.BMmD33IE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=195-BDU_WYeN.js.map
