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

const index = 9;
const component = async () => (await import('./_page.svelte-c4862e8d.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-be709c87.js';
const imports = ["_app/immutable/components/pages/_page.svelte-be709c87.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-8e03a13a.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/navigation-4cdd312c.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/modules/pages/_page.js-a4eef2c3.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-caad7bae.js"];
const stylesheets = ["_app/immutable/assets/_page-85fc483f.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=9-828e3cd1.js.map
