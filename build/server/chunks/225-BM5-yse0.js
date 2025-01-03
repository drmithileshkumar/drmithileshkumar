import { r as redirect } from './index-DzcLzHBX.js';
import { p as pageLoadState } from './stores2-B6DyWuAW.js';
import './index2-BZnI6xu7.js';
import './utils-iZWwlC2F.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  pageLoadState.update((state) => false);
  let skip = 0;
  let res = await fetch(`/vectorial/api/${params.publicID}/drawings?skip=${skip}`);
  if (!res.ok) {
    redirect(301, `/`);
  }
  let drawings = await res.json();
  return {
    drawings
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 225;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BboWUZeZ.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/drawings/+page.js";
const imports = ["_app/immutable/nodes/225.UVrjpcEN.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/Set.DVORgxOl.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.phj6Xvfp.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/FormField.Dv_tFHs1.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Media.DwHZ3g_J.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/CommonLabel.Dj7nqIzk.js","_app/immutable/chunks/Dialog.C_XC1VI2.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/Actions.DvZQiXtg.js","_app/immutable/chunks/IconButton.3HaSDpJR.js","_app/immutable/chunks/grid.QCREPAVB.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/stores.BWNyDgee.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/PreviewTextMask.BUYPJeMT.js","_app/immutable/chunks/PreviewGrid.BeulVot1.js","_app/immutable/chunks/Textfield.Dnm2l9Fe.js","_app/immutable/chunks/NotchedOutline.DFah64gX.js","_app/immutable/chunks/Suffix.DhiO64fn.js","_app/immutable/chunks/Input.Dk7SfQmK.js","_app/immutable/chunks/Listfield.BHDdRbqj.js","_app/immutable/chunks/Text.BsyenGki.js","_app/immutable/chunks/Svg.DkGkg7Z9.js","_app/immutable/chunks/Paper.BBuvGrpr.js","_app/immutable/chunks/Subtitle.PBxIfEWl.js","_app/immutable/chunks/Fab.CQaZZHQz.js"];
const stylesheets = ["_app/immutable/assets/225.B6Ss_gAq.css","_app/immutable/assets/SegmentedButton.uIc266ni.css","_app/immutable/assets/Listfield.DGx9FQDH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=225-BM5-yse0.js.map
