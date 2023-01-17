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

const index = 22;
const component = async () => (await import('./_page.svelte-dacd2c93.js')).default;
const file = '_app/immutable/components/pages/notes/maths/_page.svelte-7041f0e7.js';
const imports = ["_app/immutable/components/pages/notes/maths/_page.svelte-7041f0e7.js","_app/immutable/chunks/index-9b74571d.js","_app/immutable/chunks/Link-ec2dacf8.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/notes/maths/_page.js-b1aab0fa.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-b16bbcb3.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=22-7609fd6b.js.map
