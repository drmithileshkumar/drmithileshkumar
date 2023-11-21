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

const index = 93;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c07a3630.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Linear inequalities/One variable/+page.js";
const imports = ["_app/immutable/nodes/93.b0a934f1.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/stores.2b64632f.js","_app/immutable/chunks/singletons.b8a76623.js","_app/immutable/chunks/paths.b703f68a.js"];
const stylesheets = ["_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=93-35c76b35.js.map
