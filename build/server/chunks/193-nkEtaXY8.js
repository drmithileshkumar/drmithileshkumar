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

const index = 193;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-era-QRtq.js')).default;
const universal_id = "src/routes/(general)/practice/class2/+page.js";
const imports = ["_app/immutable/nodes/193.oYNyEdwg.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/Message.-Qx4UZVZ.js","_app/immutable/chunks/entry.N2CA-9ar.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/stores.jJVlqksx.js","_app/immutable/chunks/Practice.84QQmoXW.js","_app/immutable/chunks/ripple.nJSaNfXx.js"];
const stylesheets = ["_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=193-nkEtaXY8.js.map
