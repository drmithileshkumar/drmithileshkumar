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

const index = 116;
const component = async () => (await import('./_page.svelte-b9222cef.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Introduction/_page.svelte-14234e75.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Introduction/_page.svelte-14234e75.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-152f5629.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/stores-4374dc01.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-5b9e10de.js","_app/immutable/chunks/index-7d5c0009.js","_app/immutable/chunks/Image-bd511ae1.js","_app/immutable/modules/pages/notes/maths/Sets/Introduction/_page.js-283b214b.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-caad7bae.js"];
const stylesheets = ["_app/immutable/assets/_page-060d3b2e.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Image-da34f997.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=116-763729e7.js.map
