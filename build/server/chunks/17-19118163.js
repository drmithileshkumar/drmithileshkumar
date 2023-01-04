import { r as redirect } from './index2-fac81b88.js';

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
const component = async () => (await import('./_page.svelte-aea3a849.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question5/_page.svelte-8ecb61cc.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question5/_page.svelte-8ecb61cc.js","_app/immutable/chunks/index-d6181b86.js","_app/immutable/chunks/stores-40da1a8b.js","_app/immutable/chunks/index-2f18dd9f.js","_app/immutable/chunks/stores-ec708fd5.js","_app/immutable/chunks/singletons-7f452f10.js","_app/immutable/chunks/index-dc9a5c6c.js","_app/immutable/chunks/constants-79d6a0a7.js","_app/immutable/modules/pages/iit/maths/2021/question5/_page.js-36199001.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-9d15be8f.js"];
const stylesheets = ["_app/immutable/assets/_page-3b8ab675.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=17-19118163.js.map
