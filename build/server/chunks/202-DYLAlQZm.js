import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 202;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D0pah2Mz.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Indroduction to 3D geometry/Coordinate axes and coordinate planes in 3D space/+page.js";
const imports = ["_app/immutable/nodes/202.C1OHWVGm.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/stores.Tx699Zxm.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/stores.JLymDwvC.js","_app/immutable/chunks/entry.BmI2Tndx.js"];
const stylesheets = ["_app/immutable/assets/Practice.DlILBa6z.css","_app/immutable/assets/Message.By06LWcb.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=202-DYLAlQZm.js.map
