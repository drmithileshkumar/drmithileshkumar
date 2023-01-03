import { r as redirect } from './index2-fac81b88.js';

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
const component = async () => (await import('./_page.svelte-10fb05fa.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Sets/Complement of a set/_page.svelte-89ffec92.js';
const imports = ["_app/immutable/components/pages/notes/maths/Sets/Complement of a set/_page.svelte-89ffec92.js","_app/immutable/chunks/index-d6181b86.js","_app/immutable/modules/pages/notes/maths/Sets/Complement of a set/_page.js-4bd45e04.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-42816555.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=25-e186a6c9.js.map
