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
  let res1 = await fetch(`/api/assignment?assignmentID=${assignmentID}`);
  let assignment = await res.json();
  let studentAssignment = await res1.json();
  return {
    assignment,
    studentAssignment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 147;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Ddg_LP1-.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/[assignmentID]/solution/+page.js";
const imports = ["_app/immutable/nodes/147.CcOvNlR1.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/stores.BuWEvvX0.js","_app/immutable/chunks/entry.iIuJJAWT.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Suffix.D0Vdk9Ki.js","_app/immutable/chunks/stores.D_oEcuB4.js","_app/immutable/chunks/Assignment.BMUZCCDB.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Set.CHKM2whk.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.TdgKGuiF.js","_app/immutable/chunks/Text.Bgy-oeM6.js","_app/immutable/chunks/Textfield.Ue5XCL7r.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.Bdv_o-Ij.js","_app/immutable/chunks/Input.UWW7WJKp.js","_app/immutable/chunks/ShowQuestion.Cu_2eWZk.js","_app/immutable/chunks/CommonLabel.DNU2POZi.js","_app/immutable/chunks/Checkbox.Dwh5ChE0.js","_app/immutable/chunks/FormField.DJo729md.js","_app/immutable/chunks/SelectionGroupIcon.Bd5H7uxg.js","_app/immutable/chunks/Subheader.-Ek4Sco6.js","_app/immutable/chunks/Graphic.CVNIXG2P.js","_app/immutable/chunks/typeset.CzCYmz-Z.js"];
const stylesheets = ["_app/immutable/assets/20.DN3-Vy8B.css","_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/ShowQuestion.C0wkmKbS.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=147-CL1PRDXG.js.map
