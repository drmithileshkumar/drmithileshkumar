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

const index = 135;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e0c-KsqF.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Conic sections/Sections of a cone/+page.js";
const imports = ["_app/immutable/nodes/135.Dv9EC-M-.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/stores.GoaI5prC.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/constants.1x7ZJ2_l.js","_app/immutable/chunks/stores.jwJ_Xv-2.js","_app/immutable/chunks/entry.RQwruml5.js"];
const stylesheets = ["_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=135-kK9lnYXw.js.map
