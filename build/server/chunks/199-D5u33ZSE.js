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

const index = 199;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CMjTvP_c.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/about/+page.js";
const imports = ["_app/immutable/nodes/199.CqAfhjga.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/index.BNQMCvwE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=199-D5u33ZSE.js.map
