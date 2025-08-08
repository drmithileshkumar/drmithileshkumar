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

const index = 165;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-COd_B1vx.js')).default;
const universal_id = "src/routes/(general)/courses/quantumcomputers/+page.js";
const imports = ["_app/immutable/nodes/165.DKTHJjkZ.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/trmIJT0m.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/JpEB52v9.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/3AHv6ok1.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/CNsEPPit.js","_app/immutable/chunks/C2xjrss_.js","_app/immutable/chunks/CJUHkpk6.js","_app/immutable/chunks/OvvU6WeG.js","_app/immutable/chunks/BgVZshQ4.js"];
const stylesheets = ["_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/93.B1BksNzl.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=165-CJHVkH9q.js.map
