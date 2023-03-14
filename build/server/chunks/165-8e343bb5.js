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

const index = 165;
const component = async () => (await import('./_page.svelte-d81e33c7.js')).default;
const file = '_app/immutable/components/pages/(general)/notes/quantum/_page.svelte-62d28e06.js';
const imports = ["_app/immutable/components/pages/(general)/notes/quantum/_page.svelte-62d28e06.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/stores-cbf9661a.js","_app/immutable/chunks/index-c2cc1873.js","_app/immutable/chunks/stores-3ecb71e6.js","_app/immutable/chunks/singletons-2c9f5b5d.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-ed50eec8.js","_app/immutable/chunks/index-f0f232d7.js","_app/immutable/chunks/H3-146ef3bc.js","_app/immutable/chunks/H2-a9aa2672.js","_app/immutable/chunks/Image-bb46eaba.js","_app/immutable/modules/pages/(general)/notes/quantum/_page.js-614206ca.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-e0139a24.js"];
const stylesheets = ["_app/immutable/assets/_page-2da0b3c0.css","_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/H3-79f4b182.css","_app/immutable/assets/Image-da34f997.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=165-8e343bb5.js.map
