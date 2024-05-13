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

const index = 180;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BjqXEJQ7.js')).default;
const universal_id = "src/routes/(general)/notes/maths/conic/+page.js";
const imports = ["_app/immutable/nodes/180.BKkXqztl.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/stores.Tx699Zxm.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/stores.D-8YiulG.js","_app/immutable/chunks/entry.CuVnGzSz.js","_app/immutable/chunks/index.tWgQeGQy.js"];
const stylesheets = ["_app/immutable/assets/180.mIDseGdW.css","_app/immutable/assets/Canvas.CaOi_q3i.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=180-Bl767GVw.js.map
