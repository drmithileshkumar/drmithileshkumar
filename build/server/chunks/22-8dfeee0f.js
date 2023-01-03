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

const index = 22;
const component = async () => (await import('./_page.svelte-ffaf1513.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Relations and functions 11/Cartesian product of sets/_page.svelte-89ffec92.js';
const imports = ["_app/immutable/components/pages/notes/maths/Relations and functions 11/Cartesian product of sets/_page.svelte-89ffec92.js","_app/immutable/chunks/index-d6181b86.js","_app/immutable/modules/pages/notes/maths/Relations and functions 11/Cartesian product of sets/_page.js-4bd45e04.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-8a597883.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=22-8dfeee0f.js.map
