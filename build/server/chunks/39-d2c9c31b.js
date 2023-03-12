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

const index = 39;
const component = async () => (await import('./_page.svelte-4c5edff8.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question2/_page.svelte-9104cf09.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question2/_page.svelte-9104cf09.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-12920cee.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/stores-9ff75ee0.js","_app/immutable/chunks/singletons-38a56914.js","_app/immutable/chunks/index-81c6508f.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/iit/maths/2021/question2/_page.js-3b01134b.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-e1c8469c.js"];
const stylesheets = ["_app/immutable/assets/_page-eaf5daec.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=39-d2c9c31b.js.map
