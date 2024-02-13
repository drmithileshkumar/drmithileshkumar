import { r as redirect } from './index-oXbhYwP7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@teaching.svelte-Q9ApfXa-.js')).default;
const universal_id = "src/routes/(about)/teaching/+page.js";
const imports = ["_app/immutable/nodes/25.p9WTvL30.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js"];
const stylesheets = ["_app/immutable/assets/25.sneH_ivm.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=25-JxdcjpED.js.map
