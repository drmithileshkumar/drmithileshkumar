import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com/notes`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 17;
const component = async () => (await import('./_page.svelte-8708ba8e.js')).default;
const file = '_app/immutable/components/pages/notes/_page.svelte-c435c044.js';
const imports = ["_app/immutable/components/pages/notes/_page.svelte-c435c044.js","_app/immutable/chunks/index-5057bb28.js","_app/immutable/chunks/Link-67f29c98.js","_app/immutable/modules/pages/notes/_page.js-9f4c1ee3.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-7ff856d5.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=17-3369494d.js.map
