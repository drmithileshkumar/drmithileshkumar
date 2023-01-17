import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(307, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 120;
const component = async () => (await import('./_page.svelte-0b98046f.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Sets and their representations/_page.svelte-0992f7d5.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Sets and their representations/_page.svelte-0992f7d5.js","_app/immutable/chunks/index-718f7f6d.js","_app/immutable/chunks/stores-4eaf4443.js","_app/immutable/chunks/index-bc7d8f45.js","_app/immutable/chunks/Practice-8f59d580.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/common-f3b98355.js","_app/immutable/chunks/sets-c5f87a63.js","_app/immutable/chunks/quadratic-bd3b55c0.js","_app/immutable/chunks/stores-5bc72a2f.js","_app/immutable/chunks/singletons-4fd20d80.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang-895a9954.js","_app/immutable/chunks/index-2928c547.js","_app/immutable/chunks/H3-8ba52f25.js","_app/immutable/chunks/H2-a0563082.js","_app/immutable/chunks/Image-f03c7256.js","_app/immutable/modules/pages/notes/maths/Sets/Sets and their representations/_page.js-a6b8f8c5.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-eac4104d.js"];
const stylesheets = ["_app/immutable/assets/_page-65b272d6.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Image-da34f997.css","_app/immutable/assets/H3-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=120-68a834a0.js.map
