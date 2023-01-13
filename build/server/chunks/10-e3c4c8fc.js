import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
const component = async () => (await import('./_page.svelte-bd8fa2f5.js')).default;
const file = '_app/immutable/components/pages/about/_page.svelte-18d05ef0.js';
const imports = ["_app/immutable/components/pages/about/_page.svelte-18d05ef0.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/Papers-c4638898.js","_app/immutable/modules/pages/about/_page.js-5b640c43.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-7af39617.js"];
const stylesheets = ["_app/immutable/assets/_page-a811fd03.css","_app/immutable/assets/Papers-f64e7629.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=10-e3c4c8fc.js.map
