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

const index = 33;
const component = async () => (await import('./_page.svelte-13496f90.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation/_page.svelte-c4e6e5b8.js';
const imports = ["_app/immutable/components/pages/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation/_page.svelte-c4e6e5b8.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-8e03a13a.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/chunks/stores-4374dc01.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/modules/pages/notes/maths/Complex numbers and quadratic equations/Argand plane and polar representation/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-6461c28c.js"];
const stylesheets = ["_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=33-c7299b18.js.map
