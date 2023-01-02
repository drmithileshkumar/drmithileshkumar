import { r as redirect } from './index2-fac81b88.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
const component = async () => (await import('./_page.svelte-22828194.js')).default;
const file = '_app/immutable/components/pages/iit/maths/2021/question2/_page.svelte-cdf5d631.js';
const imports = ["_app/immutable/components/pages/iit/maths/2021/question2/_page.svelte-cdf5d631.js","_app/immutable/chunks/index-3b22549b.js","_app/immutable/chunks/stores-2e81153e.js","_app/immutable/chunks/singletons-60001e27.js","_app/immutable/chunks/index-dbcace51.js","_app/immutable/chunks/index-34255218.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/chunks/constants-79d6a0a7.js","_app/immutable/chunks/Canvas-fe6407be.js","_app/immutable/modules/pages/iit/maths/2021/question2/_page.js-920a6d94.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-78364f1c.js"];
const stylesheets = ["_app/immutable/assets/_page-ac20b780.css","_app/immutable/assets/Canvas-994b9e25.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=12-020c49ca.js.map
