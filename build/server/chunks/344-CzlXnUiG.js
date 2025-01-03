import { p as pageLoadState } from './stores2-B6DyWuAW.js';
import { r as redirect } from './index-DzcLzHBX.js';
import './index2-BZnI6xu7.js';
import './utils-iZWwlC2F.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  pageLoadState.update((state) => false);
  return {};
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 344;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D-01tEnt.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/+page.js";
const imports = ["_app/immutable/nodes/344.CS0GHkfU.js","_app/immutable/chunks/stores.BviFmk_c.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/entry.DutQk9jt.js","_app/immutable/chunks/stores.Cxl0mqTB.js"];
const stylesheets = ["_app/immutable/assets/344.D7Ie0uSe.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=344-CzlXnUiG.js.map
