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

const index = 124;
const component = async () => (await import('./_page.svelte-4e8ec96b.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Relations and functions 11/Relations/_page.svelte-52da5845.js';
const imports = ["_app/immutable/components/pages/notes/maths/Relations and functions 11/Relations/_page.svelte-52da5845.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-b2882b48.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/stores-4374dc01.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/modules/pages/notes/maths/Relations and functions 11/Relations/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-32a4fdea.js"];
const stylesheets = ["_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=124-8c040ab6.js.map
