import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  console.log(url.host + url.pathname);
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 115;
const component = async () => (await import('./_page.svelte-300d99b0.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Finite and infinite sets/_page.svelte-a39b8f6d.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Finite and infinite sets/_page.svelte-a39b8f6d.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-152f5629.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/Practice-d582da46.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/common-f3b98355.js","_app/immutable/chunks/stores-4374dc01.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-5b9e10de.js","_app/immutable/chunks/index-7d5c0009.js","_app/immutable/chunks/H3-29717c32.js","_app/immutable/chunks/H2-a6763a27.js","_app/immutable/modules/pages/notes/maths/Sets/Finite and infinite sets/_page.js-70e93f94.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-ef5518c3.js"];
const stylesheets = ["_app/immutable/assets/_page-016a7832.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Image-da34f997.css","_app/immutable/assets/Div-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=115-dceeb738.js.map
