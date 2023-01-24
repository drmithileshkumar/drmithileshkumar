import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/notes`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 33;
const component = async () => (await import('./_page.svelte-aee9a2d3.js')).default;
const file = '_app/immutable/components/pages/notes/_page.svelte-86c48b23.js';
const imports = ["_app/immutable/components/pages/notes/_page.svelte-86c48b23.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/Link-783af15a.js","_app/immutable/modules/pages/notes/_page.js-865a4f2f.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-7e5a6ef1.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=33-0c163a79.js.map
