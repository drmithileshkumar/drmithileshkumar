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

const index = 88;
const component = async () => (await import('./_page.svelte-2d578320.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Integrals/Fundamental theorem of calculus/_page.svelte-806747e7.js';
const imports = ["_app/immutable/components/pages/notes/maths/Integrals/Fundamental theorem of calculus/_page.svelte-806747e7.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-12920cee.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/stores-9ff75ee0.js","_app/immutable/chunks/singletons-38a56914.js","_app/immutable/modules/pages/notes/maths/Integrals/Fundamental theorem of calculus/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-379fd008.js"];
const stylesheets = ["_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=88-299d4442.js.map
