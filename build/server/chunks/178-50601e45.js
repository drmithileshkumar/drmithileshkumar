import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 178;
const component = async () => (await import('./_page.svelte-cf65cd3b.js')).default;
const file = '_app/immutable/components/pages/(general)/practice/class9/_page.svelte-3e996426.js';
const imports = ["_app/immutable/components/pages/(general)/practice/class9/_page.svelte-3e996426.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/Message-750adab6.js","_app/immutable/chunks/stores-5a9af228.js","_app/immutable/chunks/index-c2cc1873.js","_app/immutable/chunks/Practice-5a49aa4a.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/(general)/practice/class9/_page.js-fd5db701.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-29cacd55.js"];
const stylesheets = ["_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-5698baa0.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=178-50601e45.js.map
