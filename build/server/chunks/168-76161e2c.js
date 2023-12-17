import { r as redirect } from './index-64aa7a5e.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 168;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-29eba6d1.js')).default;
const universal_id = "src/routes/(general)/notes/quantum/+page.js";
const imports = ["_app/immutable/nodes/168.255db476.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/stores.19debc6b.js","_app/immutable/chunks/singletons.39b9f956.js","_app/immutable/chunks/paths.a50c861d.js","_app/immutable/chunks/constants.5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.43d3358f.js","_app/immutable/chunks/index.e1ba9106.js","_app/immutable/chunks/H3.1143862e.js","_app/immutable/chunks/H2.8d2bef0d.js","_app/immutable/chunks/Image.68a85e48.js"];
const stylesheets = ["_app/immutable/assets/168.2da0b3c0.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/H3.79f4b182.css","_app/immutable/assets/Image.da34f997.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=168-76161e2c.js.map
