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

const index = 100;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-edg6W6mo.js')).default;
const universal_id = "src/routes/(general)/courses/linearalgebra/bases/+page.js";
const imports = ["_app/immutable/nodes/100.BHKFUtt0.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/stores.Dn9zVH1s.js","_app/immutable/chunks/entry.aqSikbG0.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/stores.D4EbrjdR.js","_app/immutable/chunks/content.B9xP3RM-.js","_app/immutable/chunks/Pathlist.Ch1VAvUd.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/CourseNavigation.C_8KrcbB.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js"];
const stylesheets = ["_app/immutable/assets/100.Dxm-jBvk.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=100-ui1_6Zc-.js.map
