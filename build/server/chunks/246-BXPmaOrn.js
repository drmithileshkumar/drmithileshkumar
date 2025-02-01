import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
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
  load: load
});

const index = 246;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C0WUnk5u.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/246.ufCqv1FW.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/Textfield.Cg0mCM86.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.BAXgXz1S.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/NotchedOutline.4lVxqXYp.js","_app/immutable/chunks/Suffix.CwiESjP5.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Input.B681raqh.js","_app/immutable/chunks/Title.Vmgu2zFU.js","_app/immutable/chunks/CommonLabel.B6ezwvbq.js","_app/immutable/chunks/IconButton.CiqJRD3_.js","_app/immutable/chunks/Menu.xrgpAmnj.js","_app/immutable/chunks/MenuSurface.gPadFwNo.js","_app/immutable/chunks/Item.CypjvZpJ.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/SelectionGroupIcon.BWdfwhJI.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/Graphic.C8Nu_edt.js","_app/immutable/chunks/Anchor.CYjcg-An.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/Dialog.B0Jd7E9u.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/Actions.Dq5lDU7E.js","_app/immutable/chunks/Radio.ZxgHLTtH.js","_app/immutable/chunks/FormField.DgTykvnw.js","_app/immutable/chunks/stores.CZO3ygXh.js","_app/immutable/chunks/entry.9fiABkYg.js","_app/immutable/chunks/stores.CiGwCTFt.js","_app/immutable/chunks/heic2any.BnYPf4E8.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/246.DyZqFiY5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=246-BXPmaOrn.js.map
