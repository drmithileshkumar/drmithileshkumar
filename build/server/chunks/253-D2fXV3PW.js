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

const index = 253;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CC7Zqsgp.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/subscription/+page.js";
const imports = ["_app/immutable/nodes/253.DVlFIIdv.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/entry.De3ToWoX.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/stores.CQ2ZO8Q_.js","_app/immutable/chunks/stores.BH5vVzJ8.js"];
const stylesheets = ["_app/immutable/assets/253.Dqs8cmPG.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=253-D2fXV3PW.js.map
