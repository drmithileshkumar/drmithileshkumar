import { r as redirect } from './index-64aa7a5e.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 34;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6c56e36d.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question4/+page.js";
const imports = ["_app/immutable/nodes/34.56e80409.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/stores.19debc6b.js","_app/immutable/chunks/singletons.39b9f956.js","_app/immutable/chunks/paths.a50c861d.js","_app/immutable/chunks/index.e1ba9106.js","_app/immutable/chunks/constants.5a4b1f74.js"];
const stylesheets = ["_app/immutable/assets/34.0b8b161e.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=34-88d6999e.js.map
