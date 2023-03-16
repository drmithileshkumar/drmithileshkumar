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

const index = 49;
const component = async () => (await import('./_page.svelte-4c3893ff.js')).default;
const file = '_app/immutable/components/pages/(general)/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number/_page.svelte-c774a5a0.js';
const imports = ["_app/immutable/components/pages/(general)/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number/_page.svelte-c774a5a0.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/stores-cbf9661a.js","_app/immutable/chunks/index-c2cc1873.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/chunks/stores-3ecb71e6.js","_app/immutable/chunks/singletons-2c9f5b5d.js","_app/immutable/modules/pages/(general)/notes/maths/Complex numbers and quadratic equations/The modulus and the conjugate of complex number/_page.js-0ab52947.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-90166970.js"];
const stylesheets = ["_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=49-5ae5c0d9.js.map
