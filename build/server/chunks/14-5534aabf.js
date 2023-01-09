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

const index = 14;
const component = async () => (await import('./_page.svelte-ff7214e8.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question2/_page.svelte-fa99a125.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question2/_page.svelte-fa99a125.js","_app/immutable/chunks/index-d6181b86.js","_app/immutable/chunks/stores-7a0acd5b.js","_app/immutable/chunks/index-2f18dd9f.js","_app/immutable/chunks/stores-ec708fd5.js","_app/immutable/chunks/singletons-7f452f10.js","_app/immutable/chunks/index-dc9a5c6c.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/iit/maths/2021/question2/_page.js-36199001.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-f85b9798.js"];
const stylesheets = ["_app/immutable/assets/_page-eaf5daec.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=14-5534aabf.js.map
