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

const index = 37;
const component = async () => (await import('./_page.svelte-6d8c5340.js')).default;
const file = '_app/immutable/components/pages/notes/maths/conic/_page.svelte-ecb19210.js';
const imports = ["_app/immutable/components/pages/notes/maths/conic/_page.svelte-ecb19210.js","_app/immutable/chunks/index-718f7f6d.js","_app/immutable/chunks/stores-4eaf4443.js","_app/immutable/chunks/index-bc7d8f45.js","_app/immutable/chunks/stores-5bc72a2f.js","_app/immutable/chunks/singletons-4fd20d80.js","_app/immutable/chunks/index-2928c547.js","_app/immutable/modules/pages/notes/maths/conic/_page.js-88a45b86.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-a7a7d64e.js"];
const stylesheets = ["_app/immutable/assets/_page-abb59c5c.css","_app/immutable/assets/Canvas-9ba2df42.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=37-fcda1083.js.map
