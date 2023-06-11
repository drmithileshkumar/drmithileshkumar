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

const index = 136;
const component = async () => (await import('./_page.svelte-8b29a08d.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/The empty set/+page.js";
const imports = ["_app/immutable/nodes/136.0f5c79a8.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.aa11adab.js","_app/immutable/chunks/stores.10eacb08.js","_app/immutable/chunks/index.3fa823be.js","_app/immutable/chunks/Practice.43e023f6.js","_app/immutable/chunks/stores.5cb43991.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/common.f3b98355.js","_app/immutable/chunks/quadratic.2a9dca7e.js","_app/immutable/chunks/stores.8ffe4a1d.js","_app/immutable/chunks/singletons.5cbc033f.js","_app/immutable/chunks/paths.bf3a73ee.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.c31b6c6a.js","_app/immutable/chunks/index.ff20fc4d.js","_app/immutable/chunks/H3.3ffdef64.js"];
const stylesheets = ["_app/immutable/assets/136.feabbd46.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Image.da34f997.css","_app/immutable/assets/H3.79f4b182.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=136-b92ee363.js.map
