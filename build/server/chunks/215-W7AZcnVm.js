import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 215;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Yp2VsLvR.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Three dimensional geometry/Distance of a point from a plane/+page.js";
const imports = ["_app/immutable/nodes/215.bx2TfFfK.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/stores.XBsJh_dx.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/stores.MoTJorNg.js","_app/immutable/chunks/entry.EDyy5ZhH.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=215-W7AZcnVm.js.map
