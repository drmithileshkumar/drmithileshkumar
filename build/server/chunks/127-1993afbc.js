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

const index = 127;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-61288400.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/Finite and infinite sets/+page.js";
const imports = ["_app/immutable/nodes/127.d2f151f5.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/Practice.f3c11b58.js","_app/immutable/chunks/stores.e5343315.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/common.f3b98355.js","_app/immutable/chunks/stores.2b64632f.js","_app/immutable/chunks/singletons.b8a76623.js","_app/immutable/chunks/paths.b703f68a.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.43d3358f.js","_app/immutable/chunks/index.e1ba9106.js","_app/immutable/chunks/H3.1143862e.js","_app/immutable/chunks/H2.8d2bef0d.js"];
const stylesheets = ["_app/immutable/assets/127.7b7d19c4.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Image.da34f997.css","_app/immutable/assets/H3.79f4b182.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=127-1993afbc.js.map
