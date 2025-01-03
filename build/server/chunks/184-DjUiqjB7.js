import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 184;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D8-EBw1O.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question6/+page.js";
const imports = ["_app/immutable/nodes/184.DLnHTexb.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/stores.C6SlvLHi.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/stores.Cxl0mqTB.js","_app/immutable/chunks/entry.DutQk9jt.js","_app/immutable/chunks/index.1gl2VIKR.js","_app/immutable/chunks/constants.VSvEql3V.js"];
const stylesheets = ["_app/immutable/assets/184.BoFqf8lT.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=184-DjUiqjB7.js.map
