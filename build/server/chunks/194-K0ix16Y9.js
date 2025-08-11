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

const index = 194;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DesaSHWz.js')).default;
const universal_id = "src/routes/(general)/talks/quantumstatus/+page.js";
const imports = ["_app/immutable/nodes/194.CBbAVfXK.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/LmmKzvCC.js","_app/immutable/chunks/oA00ZU7M.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/CMAIDTyj.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/DgV-wMNa.js"];
const stylesheets = ["_app/immutable/assets/194.D7WLIllc.css","_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=194-K0ix16Y9.js.map
