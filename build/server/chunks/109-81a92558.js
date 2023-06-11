import { r as redirect } from './index-f2253eb7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 109;
const component = async () => (await import('./_page.svelte-97a5c28f.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Principle of mathematical induction/The principle of mathematical induction/+page.js";
const imports = ["_app/immutable/nodes/109.df3a2318.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.aa11adab.js","_app/immutable/chunks/stores.10eacb08.js","_app/immutable/chunks/index.3fa823be.js","_app/immutable/chunks/stores.8ffe4a1d.js","_app/immutable/chunks/singletons.5cbc033f.js","_app/immutable/chunks/paths.bf3a73ee.js"];
const stylesheets = ["_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=109-81a92558.js.map
