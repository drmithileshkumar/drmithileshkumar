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

const index = 292;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BkwkeFhd.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Statistics/Range/+page.js";
const imports = ["_app/immutable/nodes/292.ZDKm4QXT.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/stores.C6SlvLHi.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/entry.B4hIrfLx.js"];
const stylesheets = ["_app/immutable/assets/Practice.C-1dvwW-.css","_app/immutable/assets/Message.D2xEdDAW.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=292-BmKN6JVa.js.map
