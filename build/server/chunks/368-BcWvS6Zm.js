import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  const { user } = await parent();
  let subscription = null;
  if (user) {
    let res = await fetch(`/vectorial/api/subscription`);
    subscription = await res.json();
  }
  return {
    subscription
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 368;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DzrD-DN5.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/subscription/+page.js";
const imports = ["_app/immutable/nodes/368.BGcXA9x2.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/entry.DutQk9jt.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/stores.BviFmk_c.js","_app/immutable/chunks/stores.Cxl0mqTB.js"];
const stylesheets = ["_app/immutable/assets/368.Dqs8cmPG.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=368-BcWvS6Zm.js.map
