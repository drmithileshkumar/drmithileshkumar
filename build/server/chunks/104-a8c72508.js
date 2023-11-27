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

const index = 104;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9587ede5.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Matrices/Transformation of a matrix/+page.js";
const imports = ["_app/immutable/nodes/104.ffc3cb40.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/stores.9945872c.js","_app/immutable/chunks/singletons.7212e542.js","_app/immutable/chunks/paths.4b8c7447.js"];
const stylesheets = ["_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=104-a8c72508.js.map
