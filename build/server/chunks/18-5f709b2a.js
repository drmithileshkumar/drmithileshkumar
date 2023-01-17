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

const index = 18;
const component = async () => (await import('./_page.svelte-810ede67.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question4/_page.svelte-0e8e33bd.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question4/_page.svelte-0e8e33bd.js","_app/immutable/chunks/index-718f7f6d.js","_app/immutable/chunks/stores-4eaf4443.js","_app/immutable/chunks/index-bc7d8f45.js","_app/immutable/chunks/stores-5bc72a2f.js","_app/immutable/chunks/singletons-4fd20d80.js","_app/immutable/chunks/index-2928c547.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/iit/maths/2021/question4/_page.js-3b01134b.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-1327fc24.js"];
const stylesheets = ["_app/immutable/assets/_page-0b8b161e.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=18-5f709b2a.js.map
