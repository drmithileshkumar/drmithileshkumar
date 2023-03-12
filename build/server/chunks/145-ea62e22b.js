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

const index = 145;
const component = async () => (await import('./_page.svelte-b6d1569a.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/The empty set/_page.svelte-9341a59c.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/The empty set/_page.svelte-9341a59c.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-12920cee.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/Practice-d4b5eafe.js","_app/immutable/chunks/stores-b5bb507d.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/common-f3b98355.js","_app/immutable/chunks/quadratic-bd3b55c0.js","_app/immutable/chunks/stores-9ff75ee0.js","_app/immutable/chunks/singletons-38a56914.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-56a5ff50.js","_app/immutable/chunks/index-81c6508f.js","_app/immutable/chunks/H3-f3750ddb.js","_app/immutable/modules/pages/notes/maths/Sets/The empty set/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-77fd0499.js"];
const stylesheets = ["_app/immutable/assets/_page-feabbd46.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Image-da34f997.css","_app/immutable/assets/H3-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=145-ea62e22b.js.map
