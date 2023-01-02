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

const index = 19;
const component = async () => (await import('./_page.svelte-c8a119da.js')).default;
const file = '_app/immutable/components/pages/notes/maths/conic/_page.svelte-9f512629.js';
const imports = ["_app/immutable/components/pages/notes/maths/conic/_page.svelte-9f512629.js","_app/immutable/chunks/index-5057bb28.js","_app/immutable/chunks/stores-1445fa5c.js","_app/immutable/chunks/singletons-54bd56f3.js","_app/immutable/chunks/index-b887c82b.js","_app/immutable/chunks/index-e415d009.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/Canvas-59af41e5.js","_app/immutable/modules/pages/notes/maths/conic/_page.js-63de32da.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-04c54810.js"];
const stylesheets = ["_app/immutable/assets/_page-ed228737.css","_app/immutable/assets/Canvas-994b9e25.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=19-d45b7509.js.map
