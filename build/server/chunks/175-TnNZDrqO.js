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

const index = 175;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-xOPVtZuv.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Three dimensional geometry/Plane/+page.js";
const imports = ["_app/immutable/nodes/175.EG3rOpNE.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/stores.J_TcoIh4.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/stores.W5S7pomO.js","_app/immutable/chunks/entry.SlTVnghT.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=175-TnNZDrqO.js.map
