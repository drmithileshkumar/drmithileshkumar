import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
const component = async () => (await import('./_page.svelte-326f4f4f.js')).default;
const file = '_app/immutable/components/pages/iit/_page.svelte-9b3c5205.js';
const imports = ["_app/immutable/components/pages/iit/_page.svelte-9b3c5205.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/Link-eb139f70.js","_app/immutable/modules/pages/iit/_page.js-75051b18.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-bbc5979e.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=11-cfecfe6e.js.map
