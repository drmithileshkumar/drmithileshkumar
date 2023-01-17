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

const index = 17;
const component = async () => (await import('./_page.svelte-fc2fde31.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question3/_page.svelte-ca50caa4.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question3/_page.svelte-ca50caa4.js","_app/immutable/chunks/index-9b74571d.js","_app/immutable/chunks/stores-6ae268f7.js","_app/immutable/chunks/index-bf2387e6.js","_app/immutable/chunks/stores-406c7d31.js","_app/immutable/chunks/singletons-956b34b2.js","_app/immutable/chunks/index-190d857b.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/iit/maths/2021/question3/_page.js-3b01134b.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-9fce0ff5.js"];
const stylesheets = ["_app/immutable/assets/_page-166b7437.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=17-ad559bb4.js.map
