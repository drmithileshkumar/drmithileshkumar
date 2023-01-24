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

const index = 122;
const component = async () => (await import('./_page.svelte-48672471.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Subsets/_page.svelte-1b9a6f05.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Subsets/_page.svelte-1b9a6f05.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-b2882b48.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/Practice-e3993fd1.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/sets-36358179.js","_app/immutable/chunks/common-f3b98355.js","_app/immutable/chunks/stores-4374dc01.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-bf3c61c8.js","_app/immutable/chunks/index-7d5c0009.js","_app/immutable/chunks/H3-1b6f2fe1.js","_app/immutable/chunks/H2-d80ab1c6.js","_app/immutable/chunks/Image-a73374b9.js","_app/immutable/modules/pages/notes/maths/Sets/Subsets/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-9126c7e7.js"];
const stylesheets = ["_app/immutable/assets/_page-844accac.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/H3-79f4b182.css","_app/immutable/assets/Practice-f3316732.css","_app/immutable/assets/Image-da34f997.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=122-8f62b259.js.map
