import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 104;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DBUGFfrt.js')).default;
const universal_id = "src/routes/(general)/courses/linearalgebra/bases/+page.js";
const imports = ["_app/immutable/nodes/104.CA6ybk6E.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/CzCYmz-Z.js","_app/immutable/chunks/B2rI9nBn.js","_app/immutable/chunks/C2Tgqvmf.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/BgVZshQ4.js","_app/immutable/chunks/B9xP3RM-.js","_app/immutable/chunks/DjKRIe2J.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/BEzlCtBE.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js"];
const stylesheets = ["_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css","_app/immutable/assets/104.Dxm-jBvk.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=104-C-V1aaR9.js.map
