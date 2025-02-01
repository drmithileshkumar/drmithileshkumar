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

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@about.svelte-D4tzgc9N.js')).default;
const universal_id = "src/routes/(about)/about/+page.js";
const imports = ["_app/immutable/nodes/14.B33GBwey.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js"];
const stylesheets = ["_app/immutable/assets/14.BsdFgWvy.css","_app/immutable/assets/Paper.Bg_S1Oi_.css","_app/immutable/assets/Papers.DWP9sFsm.css","_app/immutable/assets/P.CvI4RsOs.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=14-Bx2RzGSW.js.map
