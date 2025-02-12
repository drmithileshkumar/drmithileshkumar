import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  await parent();
  return {};
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 34;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BAPSnYBK.js')).default;
const universal_id = "src/routes/(general)/courses/discrete/+page.js";
const imports = ["_app/immutable/nodes/34.BfNFqGf5.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/entry.Wrs90tKQ.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/stores.p_6MYS7H.js","_app/immutable/chunks/Textfield.Ue5XCL7r.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.TdgKGuiF.js","_app/immutable/chunks/NotchedOutline.Bdv_o-Ij.js","_app/immutable/chunks/Suffix.D0Vdk9Ki.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Input.UWW7WJKp.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/CommonLabel.DNU2POZi.js","_app/immutable/chunks/Cell.BmkDrgWy.js","_app/immutable/chunks/Head.DH4TBmGl.js","_app/immutable/chunks/NavList.BOfZCBgL.js","_app/immutable/chunks/Item.V3BEBD7c.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.-Ek4Sco6.js","_app/immutable/chunks/Graphic.CVNIXG2P.js","_app/immutable/chunks/Svg.Dv8B55Ag.js","_app/immutable/chunks/IconButton.Dlthkof1.js","_app/immutable/chunks/stores.D_oEcuB4.js","_app/immutable/chunks/Pathlist.BrKFooxO.js","_app/immutable/chunks/CourseNavigation.9QRJ4FO7.js","_app/immutable/chunks/TabBar.DxsssWW9.js"];
const stylesheets = ["_app/immutable/assets/106.k2eNKCH5.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=34-FXdJw-0V.js.map
