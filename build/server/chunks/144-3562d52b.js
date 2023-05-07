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

const index = 144;
const component = async () => (await import('./_page.svelte-e313c63a.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Straight lines/Slope of a line/+page.js";
const imports = ["_app/immutable/nodes/144.0a19af78.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c2ff479.js","_app/immutable/chunks/stores.175f7ead.js","_app/immutable/chunks/index.924c89a9.js","_app/immutable/chunks/constants.5a4b1f74.js","_app/immutable/chunks/stores.31914e18.js","_app/immutable/chunks/singletons.6c167de9.js","_app/immutable/chunks/paths.553cd4a4.js"];
const stylesheets = ["_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=144-3562d52b.js.map
