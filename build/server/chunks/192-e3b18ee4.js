import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/shorts/class11`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 192;
const component = async () => (await import('./_page.svelte-16d59f46.js')).default;
const file = '_app/immutable/components/pages/shorts/class11/_page.svelte-e4746f28.js';
const imports = ["_app/immutable/components/pages/shorts/class11/_page.svelte-e4746f28.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-b5bb507d.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/Practice-bb707cbb.js","_app/immutable/modules/pages/shorts/class11/_page.js-1d1434c0.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-f5715037.js"];
const stylesheets = ["_app/immutable/assets/_page-d4d238ca.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Practice-1b4ad840.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=192-e3b18ee4.js.map
