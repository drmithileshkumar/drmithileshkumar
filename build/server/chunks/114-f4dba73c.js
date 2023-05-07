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

const index = 114;
const component = async () => (await import('./_page.svelte-e8bceb3d.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Relations and functions 11/Relations/+page.js";
const imports = ["_app/immutable/nodes/114.e81b370c.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c2ff479.js","_app/immutable/chunks/stores.175f7ead.js","_app/immutable/chunks/index.924c89a9.js","_app/immutable/chunks/stores.31914e18.js","_app/immutable/chunks/singletons.6c167de9.js","_app/immutable/chunks/paths.553cd4a4.js"];
const stylesheets = ["_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=114-f4dba73c.js.map
