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

const index = 22;
const component = async () => (await import('./_page@about.svelte-6a0c341f.js')).default;
const universal_id = "src/routes/(about)/about/+page.js";
const imports = ["_app/immutable/nodes/22.36f58e0c.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.aa11adab.js","_app/immutable/chunks/Papers.61cb41f2.js"];
const stylesheets = ["_app/immutable/assets/22.56b7dc4f.css","_app/immutable/assets/Papers.04a964fd.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=22-05fc8d6f.js.map
