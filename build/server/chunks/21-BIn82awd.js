import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  user.publicID;
  let assignmentID = params.assignmentID;
  let res = await fetch(`/api/assignments/${assignmentID}`);
  let { assignment, studentAssignment } = await res.json();
  return {
    assignment,
    studentAssignment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BsEQ0-2F.js')).default;
const universal_id = "src/routes/(general)/assignments/[assignmentID]/solution/+page.js";
const imports = ["_app/immutable/nodes/21.DEu-XUya.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/Suffix.DhiO64fn.js","_app/immutable/chunks/stores.C4YY6XNo.js","_app/immutable/chunks/Assignment.W5LVYX_j.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Set.DVORgxOl.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.phj6Xvfp.js","_app/immutable/chunks/Text.BsyenGki.js","_app/immutable/chunks/Textfield.Dnm2l9Fe.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.DFah64gX.js","_app/immutable/chunks/Input.Dk7SfQmK.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/ShowQuestion.CNvFTshA.js","_app/immutable/chunks/CommonLabel.Dj7nqIzk.js","_app/immutable/chunks/Checkbox.DDKUti8A.js","_app/immutable/chunks/FormField.Dv_tFHs1.js","_app/immutable/chunks/SelectionGroupIcon.B7J3MiI2.js","_app/immutable/chunks/Subheader.BOQ4-Uk_.js","_app/immutable/chunks/Graphic.DGQ5sPOW.js","_app/immutable/chunks/typeset.CzCYmz-Z.js"];
const stylesheets = ["_app/immutable/assets/21.DN3-Vy8B.css","_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/ShowQuestion.C0wkmKbS.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=21-BIn82awd.js.map
