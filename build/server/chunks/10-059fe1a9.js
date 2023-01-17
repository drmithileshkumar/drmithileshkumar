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

const index = 10;
const component = async () => (await import('./_page.svelte-7dac00ae.js')).default;
const file = '_app/immutable/components/pages/about/_page.svelte-8403ea7d.js';
const imports = ["_app/immutable/components/pages/about/_page.svelte-8403ea7d.js","_app/immutable/chunks/index-9b74571d.js","_app/immutable/chunks/Papers-332627ac.js","_app/immutable/modules/pages/about/_page.js-71ce84a7.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-b16bbcb3.js"];
const stylesheets = ["_app/immutable/assets/_page-a811fd03.css","_app/immutable/assets/Papers-f64e7629.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=10-059fe1a9.js.map
