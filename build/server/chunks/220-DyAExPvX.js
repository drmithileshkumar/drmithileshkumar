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

const index = 220;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D9kFooPF.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/220.DISfNpiO.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/Textfield.Dnm2l9Fe.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.phj6Xvfp.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/NotchedOutline.DFah64gX.js","_app/immutable/chunks/Suffix.DhiO64fn.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Input.Dk7SfQmK.js","_app/immutable/chunks/Title.BGysDndt.js","_app/immutable/chunks/CommonLabel.Dj7nqIzk.js","_app/immutable/chunks/IconButton.3HaSDpJR.js","_app/immutable/chunks/Menu.DhE27KE1.js","_app/immutable/chunks/MenuSurface.CMLhWu4l.js","_app/immutable/chunks/Item.vEGae8Yu.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/SelectionGroupIcon.B7J3MiI2.js","_app/immutable/chunks/Subheader.BOQ4-Uk_.js","_app/immutable/chunks/Graphic.DGQ5sPOW.js","_app/immutable/chunks/Anchor.CYjcg-An.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/Dialog.C_XC1VI2.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/Actions.DvZQiXtg.js","_app/immutable/chunks/Radio.CJDJxYbv.js","_app/immutable/chunks/FormField.Dv_tFHs1.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/heic2any.BnYPf4E8.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/220.DyZqFiY5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=220-DyAExPvX.js.map
