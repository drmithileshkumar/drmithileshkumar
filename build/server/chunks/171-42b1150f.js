import { r as redirect } from './index-1dce6fb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/practice/class1`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 171;
const component = async () => (await import('./_page.svelte-b42768ad.js')).default;
const universal_id = "src/routes/(general)/practice/class2/+page.js";
const imports = ["_app/immutable/nodes/171.b12605fc.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c2ff479.js","_app/immutable/chunks/Message.442ca50f.js","_app/immutable/chunks/paths.553cd4a4.js","_app/immutable/chunks/stores.8b6db9cd.js","_app/immutable/chunks/index.924c89a9.js","_app/immutable/chunks/Practice.485fd062.js","_app/immutable/chunks/ripple.d6af89fa.js"];
const stylesheets = ["_app/immutable/assets/Link.867ad8ee.css","_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Practice.5698baa0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=171-42b1150f.js.map
