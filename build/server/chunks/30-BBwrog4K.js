import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
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

const index = 30;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CUcDvuTS.js')).default;
const universal_id = "src/routes/(general)/assignments/[assignmentID]/solution/+page.js";
const imports = ["_app/immutable/nodes/30.DdGh86U_.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/entry.B0RIyAYy.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Suffix.CV9ZjPQ-.js","_app/immutable/chunks/stores.moVKe_bz.js","_app/immutable/chunks/Assignment.EMh11cNs.js","_app/immutable/chunks/Card.BNwIWFu_.js","_app/immutable/chunks/Actions.C-aWTNm3.js","_app/immutable/chunks/Button.bSgfoJ4g.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Text.BzjTFEId.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.DcAkM7wy.js","_app/immutable/chunks/Textfield.1QNKFE03.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.CZi5LcBj.js","_app/immutable/chunks/stores.BTaCj9Tk.js","_app/immutable/chunks/ShowQuestion.BoFl7ofj.js","_app/immutable/chunks/CommonLabel.CMa7DfzO.js","_app/immutable/chunks/Checkbox.C39Boaml.js","_app/immutable/chunks/FormField.lvQV-ka1.js","_app/immutable/chunks/SelectionGroupIcon.B6I5NObN.js","_app/immutable/chunks/Subheader.CFqZDM0F.js","_app/immutable/chunks/Graphic.BZEjdAg2.js","_app/immutable/chunks/typeset.CzCYmz-Z.js"];
const stylesheets = ["_app/immutable/assets/30.Da0oECvV.css","_app/immutable/assets/Assignment.DKXvAztU.css","_app/immutable/assets/ShowQuestion.BUK_M1oK.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=30-BBwrog4K.js.map
