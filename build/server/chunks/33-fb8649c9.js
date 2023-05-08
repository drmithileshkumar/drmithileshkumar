import { r as redirect } from './index-1dce6fb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 33;
const component = async () => (await import('./_page.svelte-0334a76c.js')).default;
const universal_id = "src/routes/(general)/iit/maths/2021/question6/+page.js";
const imports = ["_app/immutable/nodes/33.d01ae4ef.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c5142a2.js","_app/immutable/chunks/stores.805c2c19.js","_app/immutable/chunks/index.e53142fc.js","_app/immutable/chunks/stores.e112ccdf.js","_app/immutable/chunks/singletons.70b72f07.js","_app/immutable/chunks/index.02565152.js","_app/immutable/chunks/constants.5a4b1f74.js"];
const stylesheets = ["_app/immutable/assets/33.db06e63f.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=33-fb8649c9.js.map
