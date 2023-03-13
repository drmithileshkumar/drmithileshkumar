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

const index = 33;
const component = async () => (await import('./_page.svelte-a09a6b04.js')).default;
const file = '_app/immutable/components/pages/about/_page.svelte-fc097c68.js';
const imports = ["_app/immutable/components/pages/about/_page.svelte-fc097c68.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/Papers-b4cbb53d.js","_app/immutable/modules/pages/about/_page.js-71ce84a7.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-caad7bae.js"];
const stylesheets = ["_app/immutable/assets/_page-fea43bf3.css","_app/immutable/assets/Papers-04a964fd.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=33-b9283340.js.map
