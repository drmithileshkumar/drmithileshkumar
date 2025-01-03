import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  let publicID = params.publicID;
  let assignmentID = params.assignmentID;
  let res = await fetch(`/api/${publicID}/assignments/${assignmentID}`);
  let assignment = await res.json();
  return {
    assignment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 151;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bc0tRCL0.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/[assignmentID]/+page.js";
const imports = ["_app/immutable/nodes/151.D1dS8TIp.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Suffix.D515sgXS.js","_app/immutable/chunks/stores.Bj90LH9q.js","_app/immutable/chunks/Assignment.Dc2dyOHn.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/Set.Bj5aIPEM.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.BkOyIpIy.js","_app/immutable/chunks/Text.M3xsVIyJ.js","_app/immutable/chunks/Textfield.CC7q94do.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.DR6lqMTd.js","_app/immutable/chunks/Input.-D2mZesD.js","_app/immutable/chunks/TestQuestion.DYH9IS7X.js","_app/immutable/chunks/Checkbox.OxEFttSW.js","_app/immutable/chunks/FormField.Dcl_LSn5.js","_app/immutable/chunks/SelectionGroupIcon.CeCdawSn.js","_app/immutable/chunks/Subheader.DnAlchfb.js","_app/immutable/chunks/Graphic.QmIoxMRJ.js","_app/immutable/chunks/typeset.CzCYmz-Z.js"];
const stylesheets = ["_app/immutable/assets/350.DK7l4pZ-.css","_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/TestQuestion.Bw2qMWpI.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=151-C5Bb8-9w.js.map
