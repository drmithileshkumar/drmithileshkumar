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

const index = 122;
const component = async () => (await import('./_page.svelte-3f9bfd1e.js')).default;
const file = '_app/immutable/components/pages/(general)/notes/maths/Sequences and series/Sequences/_page.svelte-ee85a323.js';
const imports = ["_app/immutable/components/pages/(general)/notes/maths/Sequences and series/Sequences/_page.svelte-ee85a323.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/stores-cbf9661a.js","_app/immutable/chunks/index-c2cc1873.js","_app/immutable/chunks/stores-3ecb71e6.js","_app/immutable/chunks/singletons-2c9f5b5d.js","_app/immutable/modules/pages/(general)/notes/maths/Sequences and series/Sequences/_page.js-0ab52947.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-a979002b.js"];
const stylesheets = ["_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=122-08c4e4d4.js.map
