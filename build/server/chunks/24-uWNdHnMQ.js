import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 24;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@research.svelte-Ga8xIbUg.js')).default;
const universal_id = "src/routes/(about)/research/+page.js";
const imports = ["_app/immutable/nodes/24.tF847NTa.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.OPFU5seO.js","_app/immutable/chunks/index.np_sXRfl.js"];
const stylesheets = ["_app/immutable/assets/23.Uqh0np3I.css","_app/immutable/assets/Research.NGNsLVw9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=24-uWNdHnMQ.js.map
