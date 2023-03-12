import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 34;
const component = async () => (await import('./_page.svelte-6a155f07.js')).default;
const file = '_app/immutable/components/pages/cv/_page.svelte-a430a35b.js';
const imports = ["_app/immutable/components/pages/cv/_page.svelte-a430a35b.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/Papers-b4cbb53d.js","_app/immutable/modules/pages/cv/_page.js-1da4edb6.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-69d15b28.js"];
const stylesheets = ["_app/immutable/assets/_page-b15e5c28.css","_app/immutable/assets/Papers-04a964fd.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=34-a919b3fc.js.map
