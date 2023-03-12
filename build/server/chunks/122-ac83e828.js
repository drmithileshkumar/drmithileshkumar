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

const index = 122;
const component = async () => (await import('./_page.svelte-bbca0033.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Relations and functions 11/Cartesian product of sets/_page.svelte-37fdb964.js';
const imports = ["_app/immutable/components/pages/notes/maths/Relations and functions 11/Cartesian product of sets/_page.svelte-37fdb964.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-12920cee.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/chunks/stores-9ff75ee0.js","_app/immutable/chunks/singletons-38a56914.js","_app/immutable/modules/pages/notes/maths/Relations and functions 11/Cartesian product of sets/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-53fea96e.js"];
const stylesheets = ["_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=122-ac83e828.js.map
