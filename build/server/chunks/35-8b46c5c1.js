import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 35;
const component = async () => (await import('./_page.svelte-ac4ad538.js')).default;
const file = '_app/immutable/components/pages/(general)/notes/maths/_page.svelte-4e31ab33.js';
const imports = ["_app/immutable/components/pages/(general)/notes/maths/_page.svelte-4e31ab33.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/modules/pages/(general)/notes/maths/_page.js-614206ca.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-b16bbcb3.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=35-8b46c5c1.js.map
