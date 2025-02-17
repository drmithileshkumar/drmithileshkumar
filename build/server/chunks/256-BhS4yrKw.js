import { r as redirect } from './index-DzcLzHBX.js';
import { p as pageLoadState } from './stores2-f06Es8-t.js';
import './index2-D2s-XE5r.js';
import './utils-DhkojCd_.js';

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

const index = 256;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-7IyCY2rE.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/drawings/+page.js";
const imports = ["_app/immutable/nodes/256.DQzPGeTm.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.CQ2ZO8Q_.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/CreateDrawing.BfTyKfHX.js","_app/immutable/chunks/Set.CHKM2whk.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.TdgKGuiF.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/FormField.DJo729md.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/Media.DEO9JwFF.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/CommonLabel.DNU2POZi.js","_app/immutable/chunks/Dialog.fgG029Cm.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/Actions.CP25cpCE.js","_app/immutable/chunks/IconButton.Dlthkof1.js","_app/immutable/chunks/grid.DdP6-6-Q.js","_app/immutable/chunks/stores.BuWEvvX0.js","_app/immutable/chunks/entry.iIuJJAWT.js","_app/immutable/chunks/stores.BRGxlrP6.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/PreviewTextMask.5xx-ls52.js","_app/immutable/chunks/PreviewGrid.BjoHW-QJ.js","_app/immutable/chunks/Textfield.Ue5XCL7r.js","_app/immutable/chunks/NotchedOutline.Bdv_o-Ij.js","_app/immutable/chunks/Suffix.D0Vdk9Ki.js","_app/immutable/chunks/Input.UWW7WJKp.js","_app/immutable/chunks/Listfield.BeBYD0Pz.js","_app/immutable/chunks/Text.Bgy-oeM6.js","_app/immutable/chunks/Svg.Dv8B55Ag.js","_app/immutable/chunks/Paper.gO1aVgCL.js","_app/immutable/chunks/Subtitle.NtGfYQ_p.js","_app/immutable/chunks/Fab.DFZEzm9R.js"];
const stylesheets = ["_app/immutable/assets/233.gTHTxpM-.css","_app/immutable/assets/CreateDrawing.CfrzLLFi.css","_app/immutable/assets/SegmentedButton.uIc266ni.css","_app/immutable/assets/Listfield.DGx9FQDH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=256-BhS4yrKw.js.map
