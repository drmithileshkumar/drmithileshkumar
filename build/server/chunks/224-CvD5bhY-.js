import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/mathril/games`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 224;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-lgGIU3Rc.js')).default;
const universal_id = "src/routes/(mathril)/mathril/games/matchnumber/+page.js";
const imports = ["_app/immutable/nodes/224.C5zbbZO4.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/wCYZQC0n.js","_app/immutable/chunks/CM997ajP.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/BfK1IohI.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/trmIJT0m.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/BrNRrKxc.js"];
const stylesheets = ["_app/immutable/assets/224.U4_Sqezd.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=224-CvD5bhY-.js.map
