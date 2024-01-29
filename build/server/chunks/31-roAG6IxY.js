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

const index = 31;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-RbOK3LTn.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/+page.js";
const imports = ["_app/immutable/nodes/31.AmdoxP9r.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/entry.GwJ0dDFU.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/Card.7pw2nmLE.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.uva-frad.js","_app/immutable/chunks/NavList.AH3rQvyu.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/stores.JeTdzoaZ.js","_app/immutable/chunks/content.tycUVTYH.js"];
const stylesheets = ["_app/immutable/assets/31.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=31-roAG6IxY.js.map
