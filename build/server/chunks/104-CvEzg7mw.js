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
const component = async () => component_cache ??= (await import('./_page.svelte-edg6W6mo.js')).default;
const universal_id = "src/routes/(general)/courses/linearalgebra/bases/+page.js";
const imports = ["_app/immutable/nodes/104.BZ2YZ6Qs.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/stores.p_6MYS7H.js","_app/immutable/chunks/entry.Wrs90tKQ.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Subheader.-Ek4Sco6.js","_app/immutable/chunks/stores.D_oEcuB4.js","_app/immutable/chunks/content.B9xP3RM-.js","_app/immutable/chunks/Pathlist.BrKFooxO.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/CourseNavigation.9QRJ4FO7.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js"];
const stylesheets = ["_app/immutable/assets/104.Dxm-jBvk.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=104-CvEzg7mw.js.map
