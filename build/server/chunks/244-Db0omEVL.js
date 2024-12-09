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

const index = 244;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CQ3HCFn7.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Matrices/Invertible matrices/+page.js";
const imports = ["_app/immutable/nodes/244.4_XRdTzi.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/stores.Tx699Zxm.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/constants.VSvEql3V.js","_app/immutable/chunks/stores.CYuebbCm.js","_app/immutable/chunks/entry.wIueeHHH.js"];
const stylesheets = ["_app/immutable/assets/Practice.DlILBa6z.css","_app/immutable/assets/Message.By06LWcb.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=244-Db0omEVL.js.map
