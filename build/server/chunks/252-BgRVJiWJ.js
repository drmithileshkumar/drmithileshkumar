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

const index = 252;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CC7Zqsgp.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/subscription/+page.js";
const imports = ["_app/immutable/nodes/252.C9Isa1Pa.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/entry.Bx_ad7ke.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/stores.Mit3ycmu.js","_app/immutable/chunks/stores.CeMdWg7H.js"];
const stylesheets = ["_app/immutable/assets/252.Dqs8cmPG.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=252-BgRVJiWJ.js.map
