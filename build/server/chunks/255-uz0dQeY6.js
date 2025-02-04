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

const index = 255;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-7IyCY2rE.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/drawings/+page.js";
const imports = ["_app/immutable/nodes/255.CSCm4IY1.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.Mit3ycmu.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/CreateDrawing.kDvtuSPf.js","_app/immutable/chunks/Set.DCD7rqSe.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.Bj9W4id-.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/FormField.D0mJ011p.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/Media.CjtTWVI9.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/CommonLabel.BgBvPo95.js","_app/immutable/chunks/Dialog.qouV29sV.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/Actions.BaRzWHKo.js","_app/immutable/chunks/IconButton.CwFKh1qD.js","_app/immutable/chunks/grid.DdP6-6-Q.js","_app/immutable/chunks/stores.DMIecQx6.js","_app/immutable/chunks/entry.tKeSwN7G.js","_app/immutable/chunks/stores.uXhBzFSR.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/PreviewTextMask.CiWTFJIK.js","_app/immutable/chunks/PreviewGrid.CWwCWFcg.js","_app/immutable/chunks/Textfield.Ccvmx3_X.js","_app/immutable/chunks/NotchedOutline.D0MJCKRQ.js","_app/immutable/chunks/Suffix.CQimAQdo.js","_app/immutable/chunks/Input.DvLWxqRy.js","_app/immutable/chunks/Listfield.C6KN7QTA.js","_app/immutable/chunks/Text.D-vIosCn.js","_app/immutable/chunks/Svg.ClHNM6Dt.js","_app/immutable/chunks/Paper.DhvWePi0.js","_app/immutable/chunks/Subtitle.D5MPSdhZ.js","_app/immutable/chunks/Fab.puHu9S7B.js"];
const stylesheets = ["_app/immutable/assets/232.gTHTxpM-.css","_app/immutable/assets/CreateDrawing.CfrzLLFi.css","_app/immutable/assets/SegmentedButton.uIc266ni.css","_app/immutable/assets/Listfield.DGx9FQDH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=255-uz0dQeY6.js.map
