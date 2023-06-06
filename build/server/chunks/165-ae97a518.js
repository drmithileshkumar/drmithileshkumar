import { r as redirect } from './index-1dce6fb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 165;
const component = async () => (await import('./_page.svelte-f1c8d2a1.js')).default;
const universal_id = "src/routes/(general)/notes/quantum/+page.js";
const imports = ["_app/immutable/nodes/165.cc739715.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.6422d2b8.js","_app/immutable/chunks/stores.fdedd971.js","_app/immutable/chunks/index.ece20a09.js","_app/immutable/chunks/stores.153b6257.js","_app/immutable/chunks/Practice.svelte_svelte_type_style_lang.4b324f0b.js","_app/immutable/chunks/stores.22400e87.js","_app/immutable/chunks/singletons.edf20d34.js","_app/immutable/chunks/constants.5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.9d6b3e0f.js","_app/immutable/chunks/index.9e92b955.js","_app/immutable/chunks/H3.e750a64a.js","_app/immutable/chunks/H2.572c7bc7.js","_app/immutable/chunks/Image.df11e000.js"];
const stylesheets = ["_app/immutable/assets/165.2da0b3c0.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/H3.79f4b182.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Image.da34f997.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=165-ae97a518.js.map
