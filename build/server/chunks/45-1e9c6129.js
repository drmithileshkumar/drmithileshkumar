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

const index = 45;
const component = async () => (await import('./_page.svelte-34f97074.js')).default;
const file = '_app/immutable/components/pages/notes/maths/_page.svelte-7cb39b4e.js';
const imports = ["_app/immutable/components/pages/notes/maths/_page.svelte-7cb39b4e.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/modules/pages/notes/maths/_page.js-b1aab0fa.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-b16bbcb3.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=45-1e9c6129.js.map
