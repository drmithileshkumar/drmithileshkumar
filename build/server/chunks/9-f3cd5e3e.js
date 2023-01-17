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

const index = 9;
const component = async () => (await import('./_page.svelte-ffbc9467.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-a5b150e3.js';
const imports = ["_app/immutable/components/pages/_page.svelte-a5b150e3.js","_app/immutable/chunks/index-718f7f6d.js","_app/immutable/chunks/stores-4eaf4443.js","_app/immutable/chunks/index-bc7d8f45.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-895a9954.js","_app/immutable/chunks/index-2928c547.js","_app/immutable/chunks/H3-8ba52f25.js","_app/immutable/modules/pages/_page.js-a4eef2c3.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-caad7bae.js"];
const stylesheets = ["_app/immutable/assets/_page-cc84e717.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Image-da34f997.css","_app/immutable/assets/H3-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=9-f3cd5e3e.js.map
