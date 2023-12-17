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

const index = 97;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e9388b80.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Linear inequalities/Solution of system in two variables/+page.js";
const imports = ["_app/immutable/nodes/97.9f4e7715.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/stores.19debc6b.js","_app/immutable/chunks/singletons.39b9f956.js","_app/immutable/chunks/paths.a50c861d.js"];
const stylesheets = ["_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=97-02e93604.js.map
