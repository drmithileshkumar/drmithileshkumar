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
const imports = ["_app/immutable/nodes/194.m3J1PbkU.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/2HFF0pWM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/DHGI4KOp.js","_app/immutable/chunks/-fT4IALJ.js","_app/immutable/chunks/BgVZshQ4.js"];
const stylesheets = ["_app/immutable/assets/194.D7WLIllc.css","_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=194-BiqcTH1E.js.map
