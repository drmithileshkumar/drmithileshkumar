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
const component = async () => component_cache ??= (await import('./_page.svelte-sj7PNLZz.js')).default;
const universal_id = "src/routes/(general)/courses/discrete/+page.js";
const imports = ["_app/immutable/nodes/34.BDrOKEPI.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/entry.BWlL8IRS.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/stores.BH93n1hl.js","_app/immutable/chunks/Textfield.1QNKFE03.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.DcAkM7wy.js","_app/immutable/chunks/NotchedOutline.CZi5LcBj.js","_app/immutable/chunks/Suffix.CV9ZjPQ-.js","_app/immutable/chunks/Card.BNwIWFu_.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/Actions.C-aWTNm3.js","_app/immutable/chunks/Button.bSgfoJ4g.js","_app/immutable/chunks/CommonLabel.CMa7DfzO.js","_app/immutable/chunks/Cell.CY_KqJHB.js","_app/immutable/chunks/NavList.BRrSDxP0.js","_app/immutable/chunks/Item.Cdi5M2Wf.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.CFqZDM0F.js","_app/immutable/chunks/Graphic.BZEjdAg2.js","_app/immutable/chunks/IconButton.tzNTp528.js","_app/immutable/chunks/stores.moVKe_bz.js","_app/immutable/chunks/Pathlist.C2MBNysE.js","_app/immutable/chunks/CourseNavigation.DTsSBvdr.js","_app/immutable/chunks/TabBar.CKlmdBhG.js"];
const stylesheets = ["_app/immutable/assets/106.CpMIQ1WE.css","_app/immutable/assets/Link.CZNrpk-N.css","_app/immutable/assets/NavList.Bu7JEHbj.css","_app/immutable/assets/Pathlist.M7z7sxw7.css","_app/immutable/assets/CourseNavigation.C1kS5sHH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=34-B7eIgiqf.js.map
