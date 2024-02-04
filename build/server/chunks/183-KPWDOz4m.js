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

const index = 183;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-RC_jdH2q.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Equal sets/+page.js";
const imports = ["_app/immutable/nodes/183.348zLG9A.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/stores.DnhZXbuE.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/Practice.QF2dxLJu.js","_app/immutable/chunks/stores.vBF17IHW.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/sets.kT1anTlw.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/stores.TyLqefgc.js","_app/immutable/chunks/entry.hbUxuYYh.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.qRfcqjzK.js","_app/immutable/chunks/index.LaUBdqls.js","_app/immutable/chunks/H3.CehZ2j_k.js"];
const stylesheets = ["_app/immutable/assets/183.6FbyGp-_.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css","_app/immutable/assets/Div.bOrlhsXY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=183-KPWDOz4m.js.map
