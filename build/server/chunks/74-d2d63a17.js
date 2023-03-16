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

const index = 74;
const component = async () => (await import('./_page.svelte-98979dec.js')).default;
const file = '_app/immutable/components/pages/(general)/notes/maths/Indroduction to 3D geometry/Distance between two points/_page.svelte-936e0bcc.js';
const imports = ["_app/immutable/components/pages/(general)/notes/maths/Indroduction to 3D geometry/Distance between two points/_page.svelte-936e0bcc.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/stores-cbf9661a.js","_app/immutable/chunks/index-c2cc1873.js","_app/immutable/chunks/stores-3ecb71e6.js","_app/immutable/chunks/singletons-2c9f5b5d.js","_app/immutable/modules/pages/(general)/notes/maths/Indroduction to 3D geometry/Distance between two points/_page.js-0ab52947.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-dada83a7.js"];
const stylesheets = ["_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=74-d2d63a17.js.map
