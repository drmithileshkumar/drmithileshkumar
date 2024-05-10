import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 300;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CujCqZBB.js')).default;
const universal_id = "src/routes/(general)/practice/class2/+page.js";
const imports = ["_app/immutable/nodes/300.B9U6hJ0B.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/Message.CIrIHE_d.js","_app/immutable/chunks/entry.CPAwXhdV.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/stores.DzbTKMN6.js","_app/immutable/chunks/Practice.Dbywvd1W.js","_app/immutable/chunks/ripple.CM997ajP.js"];
const stylesheets = ["_app/immutable/assets/Link.CZNrpk-N.css","_app/immutable/assets/Message.By06LWcb.css","_app/immutable/assets/Practice.DlILBa6z.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=300-ow6XYYMR.js.map
