import { r as redirect } from './index-1dce6fb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com/notes`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 34;
const component = async () => (await import('./_page.svelte-41c88741.js')).default;
const universal_id = "src/routes/(general)/notes/+page.js";
const imports = ["_app/immutable/nodes/34.f4188a9b.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.83aee1b3.js","_app/immutable/chunks/Link.50ab600e.js","_app/immutable/chunks/singletons.2140748f.js","_app/immutable/chunks/index.c0198b8b.js"];
const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=34-ae4590df.js.map
