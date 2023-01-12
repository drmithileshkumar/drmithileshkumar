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

const index = 10;
const component = async () => (await import('./_page.svelte-ad6d9d05.js')).default;
const file = '_app/immutable/components/pages/cv/_page.svelte-8cab56a8.js';
const imports = ["_app/immutable/components/pages/cv/_page.svelte-8cab56a8.js","_app/immutable/chunks/index-4bc03959.js","_app/immutable/chunks/Papers-c4638898.js","_app/immutable/modules/pages/cv/_page.js-75051b18.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-3d93f98e.js"];
const stylesheets = ["_app/immutable/assets/_page-8eab1ee2.css","_app/immutable/assets/Papers-f64e7629.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=10-3fea7591.js.map
