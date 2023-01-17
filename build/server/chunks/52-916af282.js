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

const index = 52;
const component = async () => (await import('./_page.svelte-33047ce8.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Determinants/Area of a triangle/_page.svelte-a9ef3520.js';
const imports = ["_app/immutable/components/pages/notes/maths/Determinants/Area of a triangle/_page.svelte-a9ef3520.js","_app/immutable/chunks/index-718f7f6d.js","_app/immutable/chunks/stores-4eaf4443.js","_app/immutable/chunks/index-bc7d8f45.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/chunks/stores-5bc72a2f.js","_app/immutable/chunks/singletons-4fd20d80.js","_app/immutable/modules/pages/notes/maths/Determinants/Area of a triangle/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-bf4ef1a7.js"];
const stylesheets = ["_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=52-916af282.js.map
