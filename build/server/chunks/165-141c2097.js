import { r as redirect } from './index-f2253eb7.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 165;
const component = async () => (await import('./_page.svelte-d046ec5a.js')).default;
const universal_id = "src/routes/(general)/notes/quantum/+page.js";
const imports = ["_app/immutable/nodes/165.2c02c574.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.aa11adab.js","_app/immutable/chunks/stores.10eacb08.js","_app/immutable/chunks/index.3fa823be.js","_app/immutable/chunks/stores.8ffe4a1d.js","_app/immutable/chunks/singletons.5cbc033f.js","_app/immutable/chunks/paths.bf3a73ee.js","_app/immutable/chunks/constants.5a4b1f74.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.c31b6c6a.js","_app/immutable/chunks/index.ff20fc4d.js","_app/immutable/chunks/H3.3ffdef64.js","_app/immutable/chunks/H2.5ec468fd.js","_app/immutable/chunks/Image.9d8f4f3f.js"];
const stylesheets = ["_app/immutable/assets/165.2da0b3c0.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/H3.79f4b182.css","_app/immutable/assets/Image.da34f997.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=165-141c2097.js.map
