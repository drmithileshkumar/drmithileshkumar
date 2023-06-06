import { r as redirect } from './index-1dce6fb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 170;
const component = async () => (await import('./_page.svelte-ab4c920b.js')).default;
const universal_id = "src/routes/(general)/practice/class12/+page.js";
const imports = ["_app/immutable/nodes/170.ef7769f4.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.6422d2b8.js","_app/immutable/chunks/Message.979b202a.js","_app/immutable/chunks/singletons.edf20d34.js","_app/immutable/chunks/index.ece20a09.js","_app/immutable/chunks/stores.153b6257.js","_app/immutable/chunks/Practice.a0e99482.js","_app/immutable/chunks/Practice.svelte_svelte_type_style_lang.4b324f0b.js","_app/immutable/chunks/ripple.d6af89fa.js"];
const stylesheets = ["_app/immutable/assets/Link.867ad8ee.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=170-ac5f2d6f.js.map
