import { r as redirect } from './index-f2253eb7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 170;
const component = async () => (await import('./_page.svelte-2b035ec3.js')).default;
const universal_id = "src/routes/(general)/practice/class12/+page.js";
const imports = ["_app/immutable/nodes/170.076e0773.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.aa11adab.js","_app/immutable/chunks/Message.85fbddef.js","_app/immutable/chunks/paths.bf3a73ee.js","_app/immutable/chunks/stores.5cb43991.js","_app/immutable/chunks/index.3fa823be.js","_app/immutable/chunks/Practice.43e023f6.js","_app/immutable/chunks/ripple.d6af89fa.js"];
const stylesheets = ["_app/immutable/assets/Link.867ad8ee.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=170-a4b46a53.js.map
