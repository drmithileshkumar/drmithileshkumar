import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/shorts`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 198;
const component = async () => (await import('./_page.svelte-c8d547e6.js')).default;
const file = '_app/immutable/components/pages/shorts/class6/_page.svelte-1c6d9322.js';
const imports = ["_app/immutable/components/pages/shorts/class6/_page.svelte-1c6d9322.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-c256a4d3.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/Practice-c12a8ee6.js","_app/immutable/modules/pages/shorts/class6/_page.js-cc53004a.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-e4726617.js"];
const stylesheets = ["_app/immutable/assets/_page-d4d238ca.css","_app/immutable/assets/Message-1e964222.css","_app/immutable/assets/Link-867ad8ee.css","_app/immutable/assets/Practice-1b4ad840.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=198-23bc049b.js.map
