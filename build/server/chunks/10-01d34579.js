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
const component = async () => (await import('./_page.svelte-2cd3032d.js')).default;
const file = '_app/immutable/components/pages/about/_page.svelte-9e326410.js';
const imports = ["_app/immutable/components/pages/about/_page.svelte-9e326410.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/Papers-77b88a23.js","_app/immutable/modules/pages/about/_page.js-71ce84a7.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-e0139a24.js"];
const stylesheets = ["_app/immutable/assets/_page-f797e92a.css","_app/immutable/assets/Papers-04a964fd.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=10-01d34579.js.map
