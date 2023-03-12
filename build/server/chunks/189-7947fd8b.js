import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/shorts`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 189;
const component = async () => (await import('./_page.svelte-c5325e04.js')).default;
const file = '_app/immutable/components/pages/shorts/_page.svelte-b830f0d4.js';
const imports = ["_app/immutable/components/pages/shorts/_page.svelte-b830f0d4.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/modules/pages/shorts/_page.js-82ef45de.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-b597f5e1.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Practice-5698baa0.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=189-7947fd8b.js.map
