import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/practice`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 152;
const component = async () => (await import('./_page.svelte-1176ad3d.js')).default;
const file = '_app/immutable/components/pages/practice/_page.svelte-0f42a8d9.js';
const imports = ["_app/immutable/components/pages/practice/_page.svelte-0f42a8d9.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/stores-eaa10a98.js","_app/immutable/chunks/index-274f5047.js","_app/immutable/chunks/Practice-fac4ea5c.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/practice/_page.js-c95d7a53.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-3db2dce1.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Practice-ceaad90d.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=152-66b27552.js.map
