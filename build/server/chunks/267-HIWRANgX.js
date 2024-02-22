import { r as redirect } from './index-oXbhYwP7.js';

const ssr = false;
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) {
    redirect(301, `/`);
  }
  let res = await fetch(`/api/userDetail`);
  let userDetail = await res.json();
  return {
    userDetail
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 267;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-mrQnENb9.js')).default;
const universal_id = "src/routes/(general)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/267.MIuNBolf.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/each.JwugYeo-.js","_app/immutable/chunks/Textfield.WTyLk0Yn.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Ripple.NcGtzyi_.js","_app/immutable/chunks/ponyfill.fC1f8UiH.js","_app/immutable/chunks/classAdderBuilder.Fy7yNOSN.js","_app/immutable/chunks/dispatch.yxiIpicU.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/ContextFragment.kOMcoY2M.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/NotchedOutline.zHBbhpSu.js","_app/immutable/chunks/Suffix.r_K4fOy9.js","_app/immutable/chunks/Title.OMDdX1dI.js","_app/immutable/chunks/CommonLabel.P_tal_28.js","_app/immutable/chunks/IconButton.u6OB4fIw.js","_app/immutable/chunks/Menu.xHSuXOh_.js","_app/immutable/chunks/Item.TTKRhls7.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/SelectionGroupIcon.Q5nr-Xgg.js","_app/immutable/chunks/Subheader.iMYKjBBi.js","_app/immutable/chunks/Graphic.r3iV5nlt.js","_app/immutable/chunks/Button.yhNGWFxw.js","_app/immutable/chunks/focus-trap.9c4j25jO.js","_app/immutable/chunks/Radio.wJX7i47-.js","_app/immutable/chunks/FormField.oRe4QiCt.js","_app/immutable/chunks/stores.HamTK82D.js","_app/immutable/chunks/entry.puCaY5ki.js","_app/immutable/chunks/stores.hUncZlGF.js"];
const stylesheets = ["_app/immutable/assets/267.0LFmQKk9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=267-HIWRANgX.js.map
