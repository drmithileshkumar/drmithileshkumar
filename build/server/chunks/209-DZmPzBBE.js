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

const index = 209;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C-76LnMf.js')).default;
const universal_id = "src/routes/(mathril)/mathril/games/+page.js";
const imports = ["_app/immutable/nodes/209.Cwe1G1T0.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/entry.iIuJJAWT.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/Actions.CP25cpCE.js","_app/immutable/chunks/Item.V3BEBD7c.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/Subheader.-Ek4Sco6.js","_app/immutable/chunks/Graphic.CVNIXG2P.js","_app/immutable/chunks/stores.DTbsgZQO.js"];
const stylesheets = ["_app/immutable/assets/209.3h5eOcqQ.css","_app/immutable/assets/LinearEquation.BdOgX4Fs.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=209-DZmPzBBE.js.map
