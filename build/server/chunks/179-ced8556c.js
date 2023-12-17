import { r as redirect } from './index-64aa7a5e.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 179;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3812bfba.js')).default;
const universal_id = "src/routes/(general)/practice/class7/+page.js";
const imports = ["_app/immutable/nodes/179.f28a3189.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/Message.27772a89.js","_app/immutable/chunks/paths.a50c861d.js","_app/immutable/chunks/stores.e5343315.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/Practice.f3c11b58.js","_app/immutable/chunks/ripple.d6af89fa.js"];
const stylesheets = ["_app/immutable/assets/Link.867ad8ee.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=179-ced8556c.js.map
