import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 73;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8isyF9UJ.js')).default;
const universal_id = "src/routes/(general)/courses/qec/+page.js";
const imports = ["_app/immutable/nodes/73.xgy0z6gT.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/entry.hbUxuYYh.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/Card.S1YCyonB.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.GG8dmijt.js","_app/immutable/chunks/NavList.Uay6Ew0I.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.9asjx_8T.js","_app/immutable/chunks/stores.O_U5iIhZ.js"];
const stylesheets = ["_app/immutable/assets/55.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=73-xoYnh4oY.js.map
