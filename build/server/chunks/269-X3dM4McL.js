import { r as redirect } from './index-oXbhYwP7.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
  let publicID = params.publicID;
  let res = await fetch(`/api/${publicID}/questions`);
  let questions = await res.json();
  let res1 = await fetch(`/api/${publicID}/assignments`);
  let assignments = await res1.json();
  return {
    questions,
    assignments
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 269;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2rC4DOvO.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/+page.js";
const imports = ["_app/immutable/nodes/269.XN1GPsL9.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/each.FuR60EDZ.js","_app/immutable/chunks/entry.xZhO_Ors.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/stores.5M-7oC6H.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Button.aem-lKBa.js","_app/immutable/chunks/dispatch.yxiIpicU.js","_app/immutable/chunks/Ripple.qDdlYQXH.js","_app/immutable/chunks/ponyfill.fC1f8UiH.js","_app/immutable/chunks/Card.0VZDzDAB.js","_app/immutable/chunks/Actions.2PCa3XnP.js","_app/immutable/chunks/Checkbox.TgUq4I_k.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/FormField.JhSwTVcu.js","_app/immutable/chunks/Option.OzDpXce5.js","_app/immutable/chunks/Menu.tna_SSVt.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Item.6u--0fE5.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/SelectionGroupIcon.Lg4HrTRp.js","_app/immutable/chunks/Subheader.QWkzeqGY.js","_app/immutable/chunks/Graphic.OWjBjBne.js","_app/immutable/chunks/NotchedOutline.2BtGAYZR.js","_app/immutable/chunks/typeset.4oI2U5Tz.js","_app/immutable/chunks/stores.3l2-g5YS.js"];
const stylesheets = ["_app/immutable/assets/269.kxp9ydn1.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=269-X3dM4McL.js.map
