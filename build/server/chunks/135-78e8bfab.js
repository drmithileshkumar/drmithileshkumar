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

const index = 135;
const component = async () => (await import('./_page.svelte-7f73e38d.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/The empty set/+page.js";
const imports = ["_app/immutable/nodes/135.51f09132.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c2ff479.js","_app/immutable/chunks/stores.175f7ead.js","_app/immutable/chunks/index.924c89a9.js","_app/immutable/chunks/Practice.485fd062.js","_app/immutable/chunks/stores.8b6db9cd.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/common.f3b98355.js","_app/immutable/chunks/quadratic.2a9dca7e.js","_app/immutable/chunks/stores.31914e18.js","_app/immutable/chunks/singletons.6c167de9.js","_app/immutable/chunks/paths.553cd4a4.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.b0d1f1ae.js","_app/immutable/chunks/index.fff3fabc.js","_app/immutable/chunks/H3.1c4ea8a3.js"];
const stylesheets = ["_app/immutable/assets/135.feabbd46.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Image.da34f997.css","_app/immutable/assets/H3.79f4b182.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=135-78e8bfab.js.map
