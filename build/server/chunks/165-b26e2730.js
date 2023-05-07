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
const component = async () => (await import('./_page.svelte-d81e33c7.js')).default;
const universal_id = "src/routes/(general)/notes/quantum/+page.js";
const imports = ["_app/immutable/nodes/165.77132620.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c2ff479.js","_app/immutable/chunks/stores.175f7ead.js","_app/immutable/chunks/index.924c89a9.js","_app/immutable/chunks/stores.31914e18.js","_app/immutable/chunks/singletons.6c167de9.js","_app/immutable/chunks/paths.553cd4a4.js","_app/immutable/chunks/constants.5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.b0d1f1ae.js","_app/immutable/chunks/index.fff3fabc.js","_app/immutable/chunks/H3.1c4ea8a3.js","_app/immutable/chunks/H2.4388bfba.js","_app/immutable/chunks/Image.72f8c520.js"];
const stylesheets = ["_app/immutable/assets/165.2da0b3c0.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/H3.79f4b182.css","_app/immutable/assets/Image.da34f997.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=165-b26e2730.js.map
