import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/shorts/class12`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 193;
const component = async () => (await import('./_page.svelte-3503101f.js')).default;
const file = '_app/immutable/components/pages/shorts/class12/_page.svelte-4cdd9fca.js';
const imports = ["_app/immutable/components/pages/shorts/class12/_page.svelte-4cdd9fca.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/Teacher-665c1cfa.js","_app/immutable/chunks/stores-c256a4d3.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/Practice-c12a8ee6.js","_app/immutable/modules/pages/shorts/class12/_page.js-1b9ed759.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-faf2860b.js"];
const stylesheets = ["_app/immutable/assets/_page-d4d238ca.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Teacher-2dffea9f.css","_app/immutable/assets/Practice-1b4ad840.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=193-fc32446a.js.map
