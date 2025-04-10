import { p as pageLoadState } from './stores2-f06Es8-t.js';
import { r as redirect } from './index-DzcLzHBX.js';
import './index2-D2s-XE5r.js';
import './utils-DhkojCd_.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  pageLoadState.update((state) => false);
  return {};
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 229;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B-yYrwnd.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/+page.js";
const imports = ["_app/immutable/nodes/229.D51GKpmg.js","_app/immutable/chunks/DLclD3It.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/C2Tgqvmf.js","_app/immutable/chunks/B2rI9nBn.js"];
const stylesheets = ["_app/immutable/assets/229.B-lIFtUo.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=229-l9JrVzhC.js.map
