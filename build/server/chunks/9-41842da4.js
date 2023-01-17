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
const file = '_app/immutable/components/pages/_page.svelte-bb889dd3.js';
const imports = ["_app/immutable/components/pages/_page.svelte-bb889dd3.js","_app/immutable/chunks/index-9b74571d.js","_app/immutable/chunks/stores-6ae268f7.js","_app/immutable/chunks/index-bf2387e6.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-9efab3cd.js","_app/immutable/chunks/index-190d857b.js","_app/immutable/chunks/H3-d2834f65.js","_app/immutable/modules/pages/_page.js-a4eef2c3.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-0ebe3943.js"];
const stylesheets = ["_app/immutable/assets/_page-cc84e717.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Image-da34f997.css","_app/immutable/assets/H3-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=9-41842da4.js.map
