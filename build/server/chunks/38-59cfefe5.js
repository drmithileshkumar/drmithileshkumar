import { r as redirect } from './index-64aa7a5e.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 38;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-398ff1b1.js')).default;
const universal_id = "src/routes/(general)/notes/maths/+page.js";
const imports = ["_app/immutable/nodes/38.7eb89837.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/paths.4b8c7447.js"];
const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=38-59cfefe5.js.map
