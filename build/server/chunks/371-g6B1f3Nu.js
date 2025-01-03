import { r as redirect } from './index-DzcLzHBX.js';
import { p as pageLoadState } from './stores2-B6DyWuAW.js';
import './index2-BZnI6xu7.js';
import './utils-iZWwlC2F.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/vectorial" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3003")) {
    redirect(301, `https://drmithileshkumar.com/vectorial`);
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

const index = 371;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CgB2EdZS.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/[publicID]/drawings/+page.js";
const imports = ["_app/immutable/nodes/371.De0wca2q.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.BviFmk_c.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/Set.Bj5aIPEM.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.BkOyIpIy.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/FormField.Dcl_LSn5.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Media.CcrAu-aU.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/CommonLabel.DjfWW61c.js","_app/immutable/chunks/Dialog.Dq8N6nfU.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/Actions.DV5gsUn3.js","_app/immutable/chunks/IconButton.BD-vkp1G.js","_app/immutable/chunks/grid.QCREPAVB.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/stores.DoEKWeHE.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/PreviewTextMask.2EKib_P-.js","_app/immutable/chunks/PreviewGrid.BHxcbbbT.js","_app/immutable/chunks/Textfield.CC7q94do.js","_app/immutable/chunks/NotchedOutline.DR6lqMTd.js","_app/immutable/chunks/Suffix.D515sgXS.js","_app/immutable/chunks/Input.-D2mZesD.js","_app/immutable/chunks/Listfield.D4C4BGNh.js","_app/immutable/chunks/Text.M3xsVIyJ.js","_app/immutable/chunks/Svg.BDaJh6GC.js","_app/immutable/chunks/Paper.1yflmhmm.js","_app/immutable/chunks/Subtitle.bN0qAi7z.js","_app/immutable/chunks/Fab.C1nNHEWJ.js"];
const stylesheets = ["_app/immutable/assets/371.B6Ss_gAq.css","_app/immutable/assets/SegmentedButton.uIc266ni.css","_app/immutable/assets/Listfield.DGx9FQDH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=371-g6B1f3Nu.js.map
