import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/notes/maths`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 21;
const component = async () => (await import('./_page.svelte-b1cd37b1.js')).default;
const file = '_app/immutable/components/pages/notes/maths/_page.svelte-c2fd4923.js';
const imports = ["_app/immutable/components/pages/notes/maths/_page.svelte-c2fd4923.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/Link-eb139f70.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/notes/maths/_page.js-df72b702.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-dffe4514.js"];
const stylesheets = ["_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=21-ce444619.js.map
