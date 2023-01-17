import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 118;
const component = async () => (await import('./_page.svelte-45cf4223.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Power set/_page.svelte-cf8fcf5f.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Power set/_page.svelte-cf8fcf5f.js","_app/immutable/chunks/index-9b74571d.js","_app/immutable/chunks/stores-6ae268f7.js","_app/immutable/chunks/index-bf2387e6.js","_app/immutable/chunks/stores-406c7d31.js","_app/immutable/chunks/singletons-956b34b2.js","_app/immutable/modules/pages/notes/maths/Sets/Power set/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-3491a774.js"];
const stylesheets = ["_app/immutable/assets/_page-366f0795.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=118-5e844a41.js.map
