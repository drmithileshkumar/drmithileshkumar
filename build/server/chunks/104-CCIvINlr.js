import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 104;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DYcxjoRW.js')).default;
const universal_id = "src/routes/(general)/courses/linearalgebra/bases/+page.js";
const imports = ["_app/immutable/nodes/104.ks7sfH7_.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/stores.CWAXXa1-.js","_app/immutable/chunks/entry.B2bTvzMB.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/Card.BNwIWFu_.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/Subheader.CFqZDM0F.js","_app/immutable/chunks/stores.moVKe_bz.js","_app/immutable/chunks/content.B9xP3RM-.js","_app/immutable/chunks/Pathlist.C2MBNysE.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/CourseNavigation.DTsSBvdr.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js"];
const stylesheets = ["_app/immutable/assets/104.Toz4KXsU.css","_app/immutable/assets/Link.CZNrpk-N.css","_app/immutable/assets/NavList.Bu7JEHbj.css","_app/immutable/assets/Pathlist.M7z7sxw7.css","_app/immutable/assets/CourseNavigation.C1kS5sHH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=104-CCIvINlr.js.map
