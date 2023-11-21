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

const index = 114;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d150613e.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Relations and functions 11/Relations/+page.js";
const imports = ["_app/immutable/nodes/114.a05a37d5.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/stores.2b64632f.js","_app/immutable/chunks/singletons.b8a76623.js","_app/immutable/chunks/paths.b703f68a.js"];
const stylesheets = ["_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=114-7923012b.js.map
