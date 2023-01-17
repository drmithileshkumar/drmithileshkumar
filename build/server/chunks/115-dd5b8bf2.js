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

const index = 115;
const component = async () => (await import('./_page.svelte-c212a413.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Finite and infinite sets/_page.svelte-106c7c83.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Finite and infinite sets/_page.svelte-106c7c83.js","_app/immutable/chunks/index-718f7f6d.js","_app/immutable/chunks/stores-4eaf4443.js","_app/immutable/chunks/index-bc7d8f45.js","_app/immutable/chunks/Practice-8f59d580.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/common-f3b98355.js","_app/immutable/chunks/stores-5bc72a2f.js","_app/immutable/chunks/singletons-4fd20d80.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-895a9954.js","_app/immutable/chunks/index-2928c547.js","_app/immutable/chunks/H3-8ba52f25.js","_app/immutable/chunks/H2-a0563082.js","_app/immutable/modules/pages/notes/maths/Sets/Finite and infinite sets/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-bc846d04.js"];
const stylesheets = ["_app/immutable/assets/_page-279f08a6.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Image-da34f997.css","_app/immutable/assets/H3-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=115-dd5b8bf2.js.map
