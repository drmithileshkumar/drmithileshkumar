import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 32;
const component = async () => (await import('./_page.svelte-be38c305.js')).default;
const file = '_app/immutable/components/pages/(general)/iit/maths/2021/question5/_page.svelte-57fa52bf.js';
const imports = ["_app/immutable/components/pages/(general)/iit/maths/2021/question5/_page.svelte-57fa52bf.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/stores-cbf9661a.js","_app/immutable/chunks/index-c2cc1873.js","_app/immutable/chunks/stores-3ecb71e6.js","_app/immutable/chunks/singletons-2c9f5b5d.js","_app/immutable/chunks/index-f0f232d7.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/(general)/iit/maths/2021/question5/_page.js-5b908943.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-e1c8469c.js"];
const stylesheets = ["_app/immutable/assets/_page-3b8ab675.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=32-33f3de2b.js.map
