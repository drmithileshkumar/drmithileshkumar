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
const component = async () => component_cache ??= (await import('./_page.svelte-6Y1Nh20L.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Relations and functions 12/Types of functions/+page.js";
const imports = ["_app/immutable/nodes/183.4Ns9_ykB.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.OPFU5seO.js","_app/immutable/chunks/index.np_sXRfl.js","_app/immutable/chunks/stores.9F6itTw0.js","_app/immutable/chunks/index.x-ybsOk2.js","_app/immutable/chunks/stores.04EEAGg6.js","_app/immutable/chunks/entry.zt9YIbQc.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=183-byx7QMxY.js.map
