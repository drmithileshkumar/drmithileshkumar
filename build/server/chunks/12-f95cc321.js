import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
const component = async () => (await import('./_page.svelte-aae11722.js')).default;
const file = '_app/immutable/components/pages/iit/_page.svelte-0c400ca6.js';
const imports = ["_app/immutable/components/pages/iit/_page.svelte-0c400ca6.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/Link-783af15a.js","_app/immutable/modules/pages/iit/_page.js-1da4edb6.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-69d15b28.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=12-f95cc321.js.map
