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

const index = 135;
const component = async () => (await import('./_page.svelte-7f73e38d.js')).default;
const file = '_app/immutable/components/pages/(general)/notes/maths/Sets/The empty set/_page.svelte-35ba24f7.js';
const imports = ["_app/immutable/components/pages/(general)/notes/maths/Sets/The empty set/_page.svelte-35ba24f7.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/stores-cbf9661a.js","_app/immutable/chunks/index-c2cc1873.js","_app/immutable/chunks/Practice-5a49aa4a.js","_app/immutable/chunks/stores-5a9af228.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/common-f3b98355.js","_app/immutable/chunks/quadratic-bd3b55c0.js","_app/immutable/chunks/stores-3ecb71e6.js","_app/immutable/chunks/singletons-2c9f5b5d.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-ed50eec8.js","_app/immutable/chunks/index-f0f232d7.js","_app/immutable/chunks/H3-146ef3bc.js","_app/immutable/modules/pages/(general)/notes/maths/Sets/The empty set/_page.js-0ab52947.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-5490af44.js"];
const stylesheets = ["_app/immutable/assets/_page-feabbd46.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Image-da34f997.css","_app/immutable/assets/H3-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=135-7304b049.js.map
