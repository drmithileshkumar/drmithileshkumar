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

const index = 110;
const component = async () => (await import('./_page.svelte-ce160334.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Probability/Event/+page.js";
const imports = ["_app/immutable/nodes/110.fb5aac6d.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c5142a2.js","_app/immutable/chunks/stores.805c2c19.js","_app/immutable/chunks/index.e53142fc.js","_app/immutable/chunks/stores.fe1ccf01.js","_app/immutable/chunks/Practice.svelte_svelte_type_style_lang.9759362f.js","_app/immutable/chunks/stores.e112ccdf.js","_app/immutable/chunks/singletons.70b72f07.js"];
const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=110-c7ea4789.js.map
