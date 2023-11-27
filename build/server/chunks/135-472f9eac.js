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

const index = 135;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5cabcfbc.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Real numbers/+page.js";
const imports = ["_app/immutable/nodes/135.f3797bc2.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/Practice.f3c11b58.js","_app/immutable/chunks/stores.e5343315.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/sets.1eaeba9a.js","_app/immutable/chunks/common.f3b98355.js","_app/immutable/chunks/fraction.e7c1ba6e.js","_app/immutable/chunks/stores.9945872c.js","_app/immutable/chunks/singletons.7212e542.js","_app/immutable/chunks/paths.4b8c7447.js","_app/immutable/chunks/constants.5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.43d3358f.js","_app/immutable/chunks/index.e1ba9106.js","_app/immutable/chunks/H3.1143862e.js","_app/immutable/chunks/H2.8d2bef0d.js","_app/immutable/chunks/Image.68a85e48.js"];
const stylesheets = ["_app/immutable/assets/135.32f04bf6.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/H3.79f4b182.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Image.da34f997.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=135-472f9eac.js.map
