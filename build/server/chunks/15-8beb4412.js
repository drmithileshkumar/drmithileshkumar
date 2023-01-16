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

const index = 15;
const component = async () => (await import('./_page.svelte-3b061689.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question1/_page.svelte-aac57ae2.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question1/_page.svelte-aac57ae2.js","_app/immutable/chunks/index-5d423218.js","_app/immutable/chunks/stores-02431252.js","_app/immutable/chunks/index-c8fba8de.js","_app/immutable/chunks/stores-4fe0658c.js","_app/immutable/chunks/singletons-232cbca0.js","_app/immutable/chunks/index-1db1f02e.js","_app/immutable/chunks/constants-5a4b1f74.js","_app/immutable/modules/pages/iit/maths/2021/question1/_page.js-36199001.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-f85b9798.js"];
const stylesheets = ["_app/immutable/assets/_page-dc187d06.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=15-8beb4412.js.map
