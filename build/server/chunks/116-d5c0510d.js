import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 116;
const component = async () => (await import('./_page.svelte-0f2a9d2b.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Introduction/_page.svelte-2ed3e0be.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Introduction/_page.svelte-2ed3e0be.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-b2882b48.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/stores-4374dc01.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-bf3c61c8.js","_app/immutable/chunks/index-7d5c0009.js","_app/immutable/chunks/Image-a73374b9.js","_app/immutable/modules/pages/notes/maths/Sets/Introduction/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-65a72218.js"];
const stylesheets = ["_app/immutable/assets/_page-0830e0f8.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Image-da34f997.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=116-d5c0510d.js.map
