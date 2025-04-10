import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  await parent();
  return {};
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 105;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DPYIlMzI.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics1/+page.js";
const imports = ["_app/immutable/nodes/105.CcfNarnp.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/C2Tgqvmf.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/B2rI9nBn.js","_app/immutable/chunks/7GMyLcaQ.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/CQl02eUe.js","_app/immutable/chunks/B2itOGzR.js","_app/immutable/chunks/XQX0mffV.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/D62dlhBv.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/Db1VqRGF.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/Be3puNKC.js","_app/immutable/chunks/2HFF0pWM.js","_app/immutable/chunks/DHGI4KOp.js","_app/immutable/chunks/DnfIkcIZ.js","_app/immutable/chunks/3AHv6ok1.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/C2xjrss_.js","_app/immutable/chunks/CJUHkpk6.js","_app/immutable/chunks/OvvU6WeG.js","_app/immutable/chunks/BgVZshQ4.js","_app/immutable/chunks/DjKRIe2J.js","_app/immutable/chunks/BEzlCtBE.js","_app/immutable/chunks/D7mMdWq-.js"];
const stylesheets = ["_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css","_app/immutable/assets/106.k2eNKCH5.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=105-CgkzB2xT.js.map
