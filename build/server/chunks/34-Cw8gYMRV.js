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
const imports = ["_app/immutable/nodes/34.BxI28pjX.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/entry.tKeSwN7G.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/stores.DMIecQx6.js","_app/immutable/chunks/Textfield.Ccvmx3_X.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.Bj9W4id-.js","_app/immutable/chunks/NotchedOutline.D0MJCKRQ.js","_app/immutable/chunks/Suffix.CQimAQdo.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Input.DvLWxqRy.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/CommonLabel.BgBvPo95.js","_app/immutable/chunks/Cell.DfeTKG7Q.js","_app/immutable/chunks/Head.DBGvY3dz.js","_app/immutable/chunks/NavList.DwimURdv.js","_app/immutable/chunks/Item.kgVLicfe.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.BjdGPQjV.js","_app/immutable/chunks/Graphic.BMEUV6jW.js","_app/immutable/chunks/Svg.ClHNM6Dt.js","_app/immutable/chunks/IconButton.CwFKh1qD.js","_app/immutable/chunks/stores.DhuAwEDH.js","_app/immutable/chunks/Pathlist.AfircbiT.js","_app/immutable/chunks/CourseNavigation.Bu8hq7F2.js","_app/immutable/chunks/TabBar.BPq7d3Jx.js"];
const stylesheets = ["_app/immutable/assets/106.k2eNKCH5.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=34-Cw8gYMRV.js.map
