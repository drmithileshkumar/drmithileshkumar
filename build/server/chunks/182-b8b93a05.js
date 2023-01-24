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

const index = 182;
const component = async () => (await import('./_page.svelte-ecb32bb0.js')).default;
const file = '_app/immutable/components/pages/practice/class3/_page.svelte-c384f077.js';
const imports = ["_app/immutable/components/pages/practice/class3/_page.svelte-c384f077.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/Message-edc0177c.js","_app/immutable/chunks/stores-c256a4d3.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/Practice-ba67b8be.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/practice/class3/_page.js-8154044c.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-4d48a289.js"];
const stylesheets = ["_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-5698baa0.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=182-b8b93a05.js.map
