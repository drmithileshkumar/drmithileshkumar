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

const index = 291;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BNKpthwU.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Straight lines/Slope of a line/+page.js";
const imports = ["_app/immutable/nodes/291.DK-vN8uZ.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/stores.Tx699Zxm.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/constants.VSvEql3V.js","_app/immutable/chunks/stores.BH93n1hl.js","_app/immutable/chunks/entry.BWlL8IRS.js"];
const stylesheets = ["_app/immutable/assets/Practice.DlILBa6z.css","_app/immutable/assets/Message.By06LWcb.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=291-CX7cdrUa.js.map
