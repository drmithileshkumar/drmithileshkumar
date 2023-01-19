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
const component = async () => (await import('./_page.svelte-d7482a58.js')).default;
const file = '_app/immutable/components/pages/notes/maths/conic/_page.svelte-7ab0ea16.js';
const imports = ["_app/immutable/components/pages/notes/maths/conic/_page.svelte-7ab0ea16.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-152f5629.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/stores-4374dc01.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/chunks/index-7d5c0009.js","_app/immutable/modules/pages/notes/maths/conic/_page.js-88a45b86.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-5a163937.js"];
const stylesheets = ["_app/immutable/assets/_page-abb59c5c.css","_app/immutable/assets/Canvas-9ba2df42.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=37-ea433b40.js.map
