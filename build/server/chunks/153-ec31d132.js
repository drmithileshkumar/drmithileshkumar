import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/practice`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 153;
const component = async () => (await import('./_page.svelte-3c4eba5e.js')).default;
const file = '_app/immutable/components/pages/practice/_page.svelte-e6d3415c.js';
const imports = ["_app/immutable/components/pages/practice/_page.svelte-e6d3415c.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-0209e424.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/Practice-d582da46.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/practice/_page.js-63bfec5a.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-c8c2f8eb.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Practice-ceaad90d.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=153-ec31d132.js.map
