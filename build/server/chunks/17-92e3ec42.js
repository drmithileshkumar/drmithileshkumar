import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/notes`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 17;
const component = async () => (await import('./_page.svelte-25795845.js')).default;
const file = '_app/immutable/components/pages/notes/_page.svelte-3b71beb9.js';
const imports = ["_app/immutable/components/pages/notes/_page.svelte-3b71beb9.js","_app/immutable/chunks/index-d6181b86.js","_app/immutable/chunks/Link-3490972f.js","_app/immutable/modules/pages/notes/_page.js-944d88e4.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-554e1f1a.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=17-92e3ec42.js.map
