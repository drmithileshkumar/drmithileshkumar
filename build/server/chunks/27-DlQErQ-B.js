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

const index = 27;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@about.svelte-DxblH6UP.js')).default;
const universal_id = "src/routes/(about)/about/+page.js";
const imports = ["_app/immutable/nodes/27.C_9dCtkP.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/Papers.CT2dqfXr.js"];
const stylesheets = ["_app/immutable/assets/27.CuMpkue0.css","_app/immutable/assets/Research.D7JEguvc.css","_app/immutable/assets/Papers.BaItfzG-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=27-DlQErQ-B.js.map
