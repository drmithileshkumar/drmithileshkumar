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
const component = async () => (await import('./_page.svelte-32873293.js')).default;
const universal_id = "src/routes/(general)/practice/class12/+page.js";
const imports = ["_app/immutable/nodes/170.9418f82c.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.83aee1b3.js","_app/immutable/chunks/Message.31d6863a.js","_app/immutable/chunks/singletons.2140748f.js","_app/immutable/chunks/index.c0198b8b.js","_app/immutable/chunks/stores.835e7125.js","_app/immutable/chunks/Practice.6081aa36.js","_app/immutable/chunks/Practice.svelte_svelte_type_style_lang.d0fa009c.js","_app/immutable/chunks/ripple.d6af89fa.js"];
const stylesheets = ["_app/immutable/assets/Link.867ad8ee.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=170-6e8790a2.js.map
