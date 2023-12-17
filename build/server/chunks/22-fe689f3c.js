import { r as redirect } from './index-4dc5572a.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@about.svelte-eb945411.js')).default;
const universal_id = "src/routes/(about)/about/+page.js";
const imports = ["_app/immutable/nodes/22.4928b0db.js","_app/immutable/chunks/index.c6708bed.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/Papers.2d75ff66.js"];
const stylesheets = ["_app/immutable/assets/22.36ba54eb.css","_app/immutable/assets/Research.1390e027.css","_app/immutable/assets/Papers.90ddc8ba.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=22-fe689f3c.js.map
