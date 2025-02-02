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

const index = 145;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BfF78vyQ.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/[assignmentID]/+page.js";
const imports = ["_app/immutable/nodes/145.BuBv77ko.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/stores.CWHjPd6e.js","_app/immutable/chunks/entry.CzLo5Z5Q.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Suffix.CQimAQdo.js","_app/immutable/chunks/stores.DhuAwEDH.js","_app/immutable/chunks/Assignment.C-bNWM-t.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/Set.DCD7rqSe.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/ContextFragment.Bj9W4id-.js","_app/immutable/chunks/Text.D-vIosCn.js","_app/immutable/chunks/Textfield.Ccvmx3_X.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/NotchedOutline.D0MJCKRQ.js","_app/immutable/chunks/Input.DvLWxqRy.js","_app/immutable/chunks/TestQuestion.BagocCGI.js","_app/immutable/chunks/Checkbox.DLRJT79h.js","_app/immutable/chunks/FormField.D0mJ011p.js","_app/immutable/chunks/SelectionGroupIcon.BvbUSvbW.js","_app/immutable/chunks/Subheader.BjdGPQjV.js","_app/immutable/chunks/Graphic.BMEUV6jW.js","_app/immutable/chunks/typeset.CzCYmz-Z.js"];
const stylesheets = ["_app/immutable/assets/233.DK7l4pZ-.css","_app/immutable/assets/Assignment.CJayq7CJ.css","_app/immutable/assets/TestQuestion.Bw2qMWpI.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=145-BUbNtLYa.js.map
