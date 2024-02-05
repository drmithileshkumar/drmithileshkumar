import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 231;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gq-xLPpp.js')).default;
const universal_id = "src/routes/(general)/practice/class5/+page.js";
const imports = ["_app/immutable/nodes/231.u1Hn47v6.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/Message.Zq1jl1nV.js","_app/immutable/chunks/entry.ZVyOfNZo.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/stores.vBF17IHW.js","_app/immutable/chunks/Practice.QF2dxLJu.js","_app/immutable/chunks/ripple.nJSaNfXx.js"];
const stylesheets = ["_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=231-n-QDmcKO.js.map
