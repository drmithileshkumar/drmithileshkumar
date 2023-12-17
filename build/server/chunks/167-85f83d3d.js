import { r as redirect } from './index-64aa7a5e.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 167;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-62eafa03.js')).default;
const universal_id = "src/routes/(general)/notes/maths/conic/+page.js";
const imports = ["_app/immutable/nodes/167.5a21591a.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/stores.19debc6b.js","_app/immutable/chunks/singletons.39b9f956.js","_app/immutable/chunks/paths.a50c861d.js","_app/immutable/chunks/index.e1ba9106.js"];
const stylesheets = ["_app/immutable/assets/167.abb59c5c.css","_app/immutable/assets/Canvas.9ba2df42.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=167-85f83d3d.js.map
