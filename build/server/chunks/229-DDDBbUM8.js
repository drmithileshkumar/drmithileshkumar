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

const index = 229;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BK_cUmmV.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/about/+page.js";
const imports = ["_app/immutable/nodes/229.CUXFBxZg.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/stores.CQ2ZO8Q_.js","_app/immutable/chunks/index.BSKKeNIs.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=229-DDDBbUM8.js.map
