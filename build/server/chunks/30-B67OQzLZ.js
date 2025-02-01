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

const index = 30;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BAPSnYBK.js')).default;
const universal_id = "src/routes/(general)/courses/discrete/+page.js";
const imports = ["_app/immutable/nodes/30.Dm3sy2vx.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/entry.D5-6LlTH.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/stores.D9xphP4Y.js","_app/immutable/chunks/Textfield.Cg0mCM86.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.BAXgXz1S.js","_app/immutable/chunks/NotchedOutline.4lVxqXYp.js","_app/immutable/chunks/Suffix.CwiESjP5.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Input.B681raqh.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/Actions.Bskv2kE_.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/CommonLabel.B6ezwvbq.js","_app/immutable/chunks/Cell.B4WKLoLg.js","_app/immutable/chunks/Head.Bm0tE9kg.js","_app/immutable/chunks/NavList.2JKCoz0n.js","_app/immutable/chunks/Item.CypjvZpJ.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/Graphic.C8Nu_edt.js","_app/immutable/chunks/Svg.DrXhfwnK.js","_app/immutable/chunks/IconButton.CiqJRD3_.js","_app/immutable/chunks/stores.D4EbrjdR.js","_app/immutable/chunks/Pathlist.Ch1VAvUd.js","_app/immutable/chunks/CourseNavigation.C_8KrcbB.js","_app/immutable/chunks/TabBar.Cj-ysm2N.js"];
const stylesheets = ["_app/immutable/assets/102.k2eNKCH5.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/CourseNavigation.CI9tLRx6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=30-B67OQzLZ.js.map
