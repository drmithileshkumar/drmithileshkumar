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
const component = async () => component_cache ??= (await import('./_page.svelte-xtw2UMaa.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/+page.js";
const imports = ["_app/immutable/nodes/269.FEzv3NIm.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/each.czemEVXE.js","_app/immutable/chunks/entry.kcrxoV0y.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/stores.w54F1dRu.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Button.cWUa-4TA.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple.LbSITeNB.js","_app/immutable/chunks/Card.0VZDzDAB.js","_app/immutable/chunks/Actions.2PCa3XnP.js","_app/immutable/chunks/Checkbox.c_uuDmQ-.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/FormField.SP0usG61.js","_app/immutable/chunks/Option.bV_cIq81.js","_app/immutable/chunks/Menu.ULGw6v_V.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Item.XO026pTs.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/SelectionGroupIcon.Lg4HrTRp.js","_app/immutable/chunks/Subheader.QWkzeqGY.js","_app/immutable/chunks/Graphic.OWjBjBne.js","_app/immutable/chunks/NotchedOutline.OKsDoYoq.js","_app/immutable/chunks/typeset.4oI2U5Tz.js"];
const stylesheets = ["_app/immutable/assets/269.kxp9ydn1.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=269-yceBbJkO.js.map
