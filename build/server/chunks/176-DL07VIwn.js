import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 176;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BR0T3A4o.js')).default;
const universal_id = "src/routes/(mathril)/mathril/about/+page.js";
const imports = ["_app/immutable/nodes/176.CbOcy1YD.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/stores.DFzdtsi-.js","_app/immutable/chunks/index.BNQMCvwE.js"];
const stylesheets = ["_app/immutable/assets/176.D_PRmgLc.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=176-DL07VIwn.js.map
