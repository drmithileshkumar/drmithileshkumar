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

const index = 11;
const component = async () => (await import('./_page.svelte-75250023.js')).default;
const file = '_app/immutable/components/pages/cv/_page.svelte-cb6367c5.js';
const imports = ["_app/immutable/components/pages/cv/_page.svelte-cb6367c5.js","_app/immutable/chunks/index-9b74571d.js","_app/immutable/chunks/Papers-332627ac.js","_app/immutable/modules/pages/cv/_page.js-1da4edb6.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-69d15b28.js"];
const stylesheets = ["_app/immutable/assets/_page-8eab1ee2.css","_app/immutable/assets/Papers-f64e7629.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=11-ba06c79c.js.map
