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

const index = 38;
const component = async () => (await import('./_page.svelte-3dee08d7.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question1/_page.svelte-f0414545.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question1/_page.svelte-f0414545.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-12920cee.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/stores-9ff75ee0.js","_app/immutable/chunks/singletons-38a56914.js","_app/immutable/chunks/index-81c6508f.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/iit/maths/2021/question1/_page.js-3b01134b.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-9fce0ff5.js"];
const stylesheets = ["_app/immutable/assets/_page-dc187d06.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=38-6d192c88.js.map
