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

const index = 25;
const component = async () => (await import('./_page.svelte-1400b248.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Application of derivatives/Maxima and minima/_page.svelte-ced3a5ab.js';
const imports = ["_app/immutable/components/pages/notes/maths/Application of derivatives/Maxima and minima/_page.svelte-ced3a5ab.js","_app/immutable/chunks/index-a6a7ad2f.js","_app/immutable/chunks/stores-8e03a13a.js","_app/immutable/chunks/index-b1bbdf52.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/chunks/stores-4374dc01.js","_app/immutable/chunks/singletons-2210570e.js","_app/immutable/modules/pages/notes/maths/Application of derivatives/Maxima and minima/_page.js-2e5c62be.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-7cd26a2b.js"];
const stylesheets = ["_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=25-0777613c.js.map
