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

const index = 180;
const component = async () => (await import('./_page.svelte-97cf6193.js')).default;
const file = '_app/immutable/components/pages/practice/class12/_page.svelte-4edb0f0b.js';
const imports = ["_app/immutable/components/pages/practice/class12/_page.svelte-4edb0f0b.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/Message-7e3cac6f.js","_app/immutable/chunks/stores-b5bb507d.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/Practice-d4b5eafe.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/practice/class12/_page.js-8154044c.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-dcd00a7c.js"];
const stylesheets = ["_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Practice-5698baa0.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=180-7cab1b75.js.map
