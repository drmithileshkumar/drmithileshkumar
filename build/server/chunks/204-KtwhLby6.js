import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/mathril/games`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 204;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C-76LnMf.js')).default;
const universal_id = "src/routes/(mathril)/mathril/games/+page.js";
const imports = ["_app/immutable/nodes/204.kb_aMS0I.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/entry.aqSikbG0.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/Actions.Dq5lDU7E.js","_app/immutable/chunks/Item.CypjvZpJ.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/Graphic.C8Nu_edt.js","_app/immutable/chunks/stores.DurElMDI.js"];
const stylesheets = ["_app/immutable/assets/204.3h5eOcqQ.css","_app/immutable/assets/LinearEquation.BdOgX4Fs.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=204-KtwhLby6.js.map
