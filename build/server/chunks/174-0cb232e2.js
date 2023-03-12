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

const index = 174;
const component = async () => (await import('./_page.svelte-78de5b8b.js')).default;
const file = '_app/immutable/components/pages/notes/maths/conic/_page.svelte-9c22d01a.js';
const imports = ["_app/immutable/components/pages/notes/maths/conic/_page.svelte-9c22d01a.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-12920cee.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/stores-9ff75ee0.js","_app/immutable/chunks/singletons-38a56914.js","_app/immutable/chunks/index-81c6508f.js","_app/immutable/modules/pages/notes/maths/conic/_page.js-88a45b86.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-9ef2ea02.js"];
const stylesheets = ["_app/immutable/assets/_page-abb59c5c.css","_app/immutable/assets/Canvas-9ba2df42.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=174-0cb232e2.js.map
