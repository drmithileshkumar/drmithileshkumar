import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 93;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ZWJsDUlT.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question4/+page.js";
const imports = ["_app/immutable/nodes/93.hWwUVsQj.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/stores.XBsJh_dx.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/stores.IVRqhHaw.js","_app/immutable/chunks/entry.QpnJ778C.js","_app/immutable/chunks/index.gBHr9ICE.js","_app/immutable/chunks/constants.1x7ZJ2_l.js"];
const stylesheets = ["_app/immutable/assets/93.X7O_bEA7.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=93-JoOIwVi2.js.map
