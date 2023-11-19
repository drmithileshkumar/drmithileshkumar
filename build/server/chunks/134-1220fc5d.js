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

const index = 134;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c59da49f.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Subsets/+page.js";
const imports = ["_app/immutable/nodes/134.16a91c0b.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.1abf499d.js","_app/immutable/chunks/stores.ace10a88.js","_app/immutable/chunks/index.7a5634e6.js","_app/immutable/chunks/Practice.b70cf787.js","_app/immutable/chunks/stores.075c01a0.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/sets.1eaeba9a.js","_app/immutable/chunks/common.f3b98355.js","_app/immutable/chunks/stores.111c2733.js","_app/immutable/chunks/singletons.8b8bdd45.js","_app/immutable/chunks/paths.bb34ef4e.js","_app/immutable/chunks/constants.5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.f3a7bffc.js","_app/immutable/chunks/index.f54aaa45.js","_app/immutable/chunks/H3.72f2b34f.js","_app/immutable/chunks/H2.08a79839.js","_app/immutable/chunks/Image.44f2f474.js"];
const stylesheets = ["_app/immutable/assets/134.844accac.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/H3.79f4b182.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Image.da34f997.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=134-1220fc5d.js.map
