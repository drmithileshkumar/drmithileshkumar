import { r as redirect } from './index-1dce6fb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 164;
const component = async () => (await import('./_page.svelte-ddc6d7f9.js')).default;
const universal_id = "src/routes/(general)/notes/maths/conic/+page.js";
const imports = ["_app/immutable/nodes/164.556aa34e.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c5142a2.js","_app/immutable/chunks/stores.805c2c19.js","_app/immutable/chunks/index.e53142fc.js","_app/immutable/chunks/stores.e112ccdf.js","_app/immutable/chunks/singletons.70b72f07.js","_app/immutable/chunks/index.02565152.js","_app/immutable/chunks/Canvas.svelte_svelte_type_style_lang.d26f1152.js"];
const stylesheets = ["_app/immutable/assets/164.abb59c5c.css","_app/immutable/assets/Canvas.9ba2df42.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=164-e4976d6f.js.map
