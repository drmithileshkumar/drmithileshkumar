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

const index = 26;
const component = async () => (await import('./_page.svelte-5af1be49.js')).default;
const universal_id = "src/routes/(general)/iit/maths/+page.js";
const imports = ["_app/immutable/nodes/26.757682e9.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.4c5142a2.js","_app/immutable/chunks/Link.465104d7.js","_app/immutable/chunks/singletons.70b72f07.js","_app/immutable/chunks/index.e53142fc.js"];
const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=26-dc0ac340.js.map
