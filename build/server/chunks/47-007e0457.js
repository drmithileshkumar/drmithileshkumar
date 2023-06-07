import { r as redirect } from './index-1dce6fb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 47;
const component = async () => (await import('./_page.svelte-e7ab8965.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Complex numbers and quadratic equations/Complex numbers/+page.js";
const imports = ["_app/immutable/nodes/47.be7c7f2c.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.83aee1b3.js","_app/immutable/chunks/stores.db15c074.js","_app/immutable/chunks/index.c0198b8b.js","_app/immutable/chunks/stores.835e7125.js","_app/immutable/chunks/Practice.svelte_svelte_type_style_lang.d0fa009c.js","_app/immutable/chunks/stores.d85bd91a.js","_app/immutable/chunks/singletons.2140748f.js"];
const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=47-007e0457.js.map
