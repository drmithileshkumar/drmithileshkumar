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

const index = 39;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DHtrLD_N.js')).default;
const universal_id = "src/routes/(general)/courses/discrete/+page.js";
const imports = ["_app/immutable/nodes/39.BcbRrePE.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/entry.DutQk9jt.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/stores.Cxl0mqTB.js","_app/immutable/chunks/Textfield.CC7q94do.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.BkOyIpIy.js","_app/immutable/chunks/NotchedOutline.DR6lqMTd.js","_app/immutable/chunks/Suffix.D515sgXS.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Input.-D2mZesD.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/CommonLabel.DjfWW61c.js","_app/immutable/chunks/Cell.CYWKduC9.js","_app/immutable/chunks/Head.u4wF4H_u.js","_app/immutable/chunks/NavList.C_db27in.js","_app/immutable/chunks/Item.DHklDi9x.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.DnAlchfb.js","_app/immutable/chunks/Graphic.QmIoxMRJ.js","_app/immutable/chunks/Svg.BDaJh6GC.js","_app/immutable/chunks/IconButton.BD-vkp1G.js","_app/immutable/chunks/stores.Bj90LH9q.js","_app/immutable/chunks/Pathlist.BDKm3KvK.js","_app/immutable/chunks/CourseNavigation.D01N3wHn.js","_app/immutable/chunks/TabBar.B8PFant6.js"];
const stylesheets = ["_app/immutable/assets/111.k2eNKCH5.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=39-Bwwf1Lpe.js.map
