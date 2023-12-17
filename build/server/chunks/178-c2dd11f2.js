import { r as redirect } from './index-4dc5572a.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 178;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-7f9c095d.js')).default;
const universal_id = "src/routes/(general)/practice/class6/+page.js";
const imports = ["_app/immutable/nodes/178.6e8e2e9b.js","_app/immutable/chunks/index.c6708bed.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/Message.27772a89.js","_app/immutable/chunks/paths.5be67630.js","_app/immutable/chunks/stores.e5343315.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/Practice.f3c11b58.js","_app/immutable/chunks/ripple.d6af89fa.js"];
const stylesheets = ["_app/immutable/assets/Link.867ad8ee.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=178-c2dd11f2.js.map
