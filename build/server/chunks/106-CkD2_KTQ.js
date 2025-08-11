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

const index = 106;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dz76qKUQ.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/+page.js";
const imports = ["_app/immutable/nodes/106.DFyKW5Eg.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/B8cuI8-5.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/DjO997wJ.js","_app/immutable/chunks/DFnl3igp.js","_app/immutable/chunks/F17igeRL.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/BPjx_-DE.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/bVNFjs_J.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/Dsb-COfq.js","_app/immutable/chunks/oA00ZU7M.js","_app/immutable/chunks/CMAIDTyj.js","_app/immutable/chunks/rAO64akZ.js","_app/immutable/chunks/DWWfy2Qa.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/LmmKzvCC.js","_app/immutable/chunks/B8zkQ1gz.js","_app/immutable/chunks/DWggEP7I.js","_app/immutable/chunks/BaLGAFUg.js","_app/immutable/chunks/DgV-wMNa.js","_app/immutable/chunks/hgbENy1C.js","_app/immutable/chunks/C86wnVFA.js","_app/immutable/chunks/BbekOUgL.js","_app/immutable/chunks/BfF_svVy.js"];
const stylesheets = ["_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css","_app/immutable/assets/106.k2eNKCH5.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=106-CkD2_KTQ.js.map
