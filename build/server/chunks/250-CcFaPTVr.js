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

const index = 250;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C0WUnk5u.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/250.CMKWL-yO.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/Textfield.Ccvmx3_X.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.Bj9W4id-.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/NotchedOutline.D0MJCKRQ.js","_app/immutable/chunks/Suffix.CQimAQdo.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Input.DvLWxqRy.js","_app/immutable/chunks/Title.D6hO6yn3.js","_app/immutable/chunks/CommonLabel.BgBvPo95.js","_app/immutable/chunks/IconButton.CwFKh1qD.js","_app/immutable/chunks/Menu.BPSSUKwJ.js","_app/immutable/chunks/MenuSurface.BxjWyDGs.js","_app/immutable/chunks/Item.kgVLicfe.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/SelectionGroupIcon.BvbUSvbW.js","_app/immutable/chunks/Subheader.BjdGPQjV.js","_app/immutable/chunks/Graphic.BMEUV6jW.js","_app/immutable/chunks/Anchor.CYjcg-An.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/Dialog.qouV29sV.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/Actions.BaRzWHKo.js","_app/immutable/chunks/Radio.BPLgUi0n.js","_app/immutable/chunks/FormField.D0mJ011p.js","_app/immutable/chunks/stores.BNeD1Flf.js","_app/immutable/chunks/entry.icglbSIG.js","_app/immutable/chunks/stores.Mit3ycmu.js","_app/immutable/chunks/heic2any.BnYPf4E8.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/250.DyZqFiY5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=250-CcFaPTVr.js.map
