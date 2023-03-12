import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 175;
const component = async () => (await import('./_page.svelte-9e05ee78.js')).default;
const file = '_app/immutable/components/pages/notes/quantum/_page.svelte-6c5962ef.js';
const imports = ["_app/immutable/components/pages/notes/quantum/_page.svelte-6c5962ef.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-12920cee.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/stores-9ff75ee0.js","_app/immutable/chunks/singletons-38a56914.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-56a5ff50.js","_app/immutable/chunks/index-81c6508f.js","_app/immutable/chunks/H3-f3750ddb.js","_app/immutable/chunks/H2-0680b3ae.js","_app/immutable/chunks/Image-10d2a7b4.js","_app/immutable/modules/pages/notes/quantum/_page.js-b1aab0fa.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-e0139a24.js"];
const stylesheets = ["_app/immutable/assets/_page-2da0b3c0.css","_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/H3-79f4b182.css","_app/immutable/assets/Image-da34f997.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=175-ac08c623.js.map
