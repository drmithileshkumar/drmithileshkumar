import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 29;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@research.svelte-BlNGxRFA.js')).default;
const universal_id = "src/routes/(about)/research/+page.js";
const imports = ["_app/immutable/nodes/29.hzkcIHq9.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js"];
const stylesheets = ["_app/immutable/assets/28.DuG8Te2v.css","_app/immutable/assets/Research.D7JEguvc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=29-DjU_N16Y.js.map
