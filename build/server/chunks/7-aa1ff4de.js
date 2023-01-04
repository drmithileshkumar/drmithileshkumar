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

const index = 7;
const component = async () => (await import('./_page.svelte-6de01a98.js')).default;
const file = '_app/immutable/components/pages/cv/_page.svelte-f3547478.js';
const imports = ["_app/immutable/components/pages/cv/_page.svelte-f3547478.js","_app/immutable/chunks/index-d6181b86.js","_app/immutable/chunks/Papers-19e67524.js","_app/immutable/modules/pages/cv/_page.js-75051b18.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-3d93f98e.js"];
const stylesheets = ["_app/immutable/assets/_page-8eab1ee2.css","_app/immutable/assets/Papers-f64e7629.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=7-aa1ff4de.js.map
