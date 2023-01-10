import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
const component = async () => (await import('./_page.svelte-3ce2c156.js')).default;
const file = '_app/immutable/components/pages/iit/maths/_page.svelte-43e0294e.js';
const imports = ["_app/immutable/components/pages/iit/maths/_page.svelte-43e0294e.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/Link-eb139f70.js","_app/immutable/modules/pages/iit/maths/_page.js-a8cf67b9.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-37cf18ab.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=12-7b7cebd4.js.map
