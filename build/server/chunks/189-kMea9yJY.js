import { r as redirect } from './index-oXbhYwP7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 189;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fR5ccJyP.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Relations and functions 11/Cartesian product of sets/+page.js";
const imports = ["_app/immutable/nodes/189.kOuqEJcP.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/stores.GoaI5prC.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/stores.ttVGorVA.js","_app/immutable/chunks/entry.pDmfy2hM.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=189-kMea9yJY.js.map
