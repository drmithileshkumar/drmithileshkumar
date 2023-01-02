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

const index = 25;
const component = async () => (await import('./_page.svelte-4e62ba8f.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/The empty set/_page.svelte-cc2b28d1.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/The empty set/_page.svelte-cc2b28d1.js","_app/immutable/chunks/index-5057bb28.js","_app/immutable/chunks/stores-14e3e5de.js","_app/immutable/chunks/index-b887c82b.js","_app/immutable/chunks/stores-1445fa5c.js","_app/immutable/chunks/singletons-54bd56f3.js","_app/immutable/modules/pages/notes/maths/Sets/The empty set/_page.js-d375623e.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-a441abae.js"];
const stylesheets = ["_app/immutable/assets/_page-366f0795.css","_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=25-d454d04c.js.map
