import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 119;
const component = async () => (await import('./_page.svelte-5a66e079.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Sets and their representations/_page.svelte-d00fff00.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Sets and their representations/_page.svelte-d00fff00.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/stores-c5dfff84.js","_app/immutable/chunks/index-274f5047.js","_app/immutable/chunks/Practice-fac4ea5c.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/common-f3b98355.js","_app/immutable/chunks/sets-c5f87a63.js","_app/immutable/chunks/quadratic-69bb4518.js","_app/immutable/chunks/stores-0ec56a92.js","_app/immutable/chunks/singletons-ea1f1619.js","_app/immutable/chunks/Image-409497e9.js","_app/immutable/chunks/index-d10dbe43.js","_app/immutable/chunks/H3-d0f49091.js","_app/immutable/modules/pages/notes/maths/Sets/Sets and their representations/_page.js-14a23707.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-5925c9b7.js"];
const stylesheets = ["_app/immutable/assets/_page-f5b79d55.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Image-3e5ec147.css","_app/immutable/assets/H3-79f4b182.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=119-a911d7c0.js.map
