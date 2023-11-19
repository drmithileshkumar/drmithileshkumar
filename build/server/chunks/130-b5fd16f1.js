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

const index = 130;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-306dceac.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Power set/+page.js";
const imports = ["_app/immutable/nodes/130.c2613d78.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.1abf499d.js","_app/immutable/chunks/stores.ace10a88.js","_app/immutable/chunks/index.7a5634e6.js","_app/immutable/chunks/stores.111c2733.js","_app/immutable/chunks/singletons.8b8bdd45.js","_app/immutable/chunks/paths.bb34ef4e.js"];
const stylesheets = ["_app/immutable/assets/130.366f0795.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=130-b5fd16f1.js.map
