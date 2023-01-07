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

const index = 131;
const component = async () => (await import('./_page.svelte-ae228e2e.js')).default;
const file = '_app/immutable/components/pages/notes/maths/Three dimensional geometry/Angle between two lines/_page.svelte-a0b7be67.js';
const imports = ["_app/immutable/components/pages/notes/maths/Three dimensional geometry/Angle between two lines/_page.svelte-a0b7be67.js","_app/immutable/chunks/index-d6181b86.js","_app/immutable/chunks/stores-7a0acd5b.js","_app/immutable/chunks/index-2f18dd9f.js","_app/immutable/chunks/stores-ec708fd5.js","_app/immutable/chunks/singletons-7f452f10.js","_app/immutable/modules/pages/notes/maths/Three dimensional geometry/Angle between two lines/_page.js-4bd45e04.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-39014705.js"];
const stylesheets = ["_app/immutable/assets/Practice-ceaad90d.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=131-30d82d16.js.map
