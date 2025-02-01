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

const index = 195;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CESrSpR7.js')).default;
const universal_id = "src/routes/(general)/[publicID]/assignments/[assignmentID]/+page.js";
const imports = ["_app/immutable/nodes/195.CeDeH4i0.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/stores.D9xphP4Y.js","_app/immutable/chunks/entry.D5-6LlTH.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.B6ezwvbq.js","_app/immutable/chunks/Suffix.CwiESjP5.js","_app/immutable/chunks/Assignment.xbd_Qt4u.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/Actions.Bskv2kE_.js","_app/immutable/chunks/Set.9cxeQvqD.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.BAXgXz1S.js","_app/immutable/chunks/Text.bax8j1Xe.js","_app/immutable/chunks/Textfield.Cg0mCM86.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.4lVxqXYp.js","_app/immutable/chunks/Input.B681raqh.js","_app/immutable/chunks/ShowQuestion.DikH6VZK.js","_app/immutable/chunks/Checkbox.Ch2cJ7RZ.js","_app/immutable/chunks/FormField.DgTykvnw.js","_app/immutable/chunks/SelectionGroupIcon.BWdfwhJI.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/Graphic.C8Nu_edt.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/EditAssignment.Bq72n40K.js"];
const stylesheets = ["_app/immutable/assets/230.DK7l4pZ-.css","_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/ShowQuestion.C0wkmKbS.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=195-DxA-YtmA.js.map
