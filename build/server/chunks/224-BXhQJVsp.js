import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 224;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BK_cUmmV.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/about/+page.js";
const imports = ["_app/immutable/nodes/224.BHkxlfV0.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/stores.CiGwCTFt.js","_app/immutable/chunks/index.3B1h_P5q.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=224-BXhQJVsp.js.map
