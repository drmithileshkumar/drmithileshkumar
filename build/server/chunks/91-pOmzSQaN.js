import { r as redirect } from './index-oXbhYwP7.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
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

const index = 91;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Lfx18GhQ.js')).default;
const universal_id = "src/routes/(general)/courses/mathematics2/[assignmentID]/+page.js";
const imports = ["_app/immutable/nodes/91.p0jaiw7E.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/each.czemEVXE.js","_app/immutable/chunks/entry.pDmfy2hM.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Suffix.3QTh0wJa.js","_app/immutable/chunks/Assignment.jH7XzqID.js","_app/immutable/chunks/Card.0VZDzDAB.js","_app/immutable/chunks/Actions.2PCa3XnP.js","_app/immutable/chunks/Button.cWUa-4TA.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple.LbSITeNB.js","_app/immutable/chunks/Text.6GjLx8qv.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/ContextFragment.rEZ75yrM.js","_app/immutable/chunks/stores.ttVGorVA.js","_app/immutable/chunks/ShowQuestion.VSHj9IlY.js","_app/immutable/chunks/CommonLabel._8WXK2jP.js","_app/immutable/chunks/Checkbox.c_uuDmQ-.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/FormField.SP0usG61.js","_app/immutable/chunks/SelectionGroupIcon.Lg4HrTRp.js","_app/immutable/chunks/Subheader.QWkzeqGY.js","_app/immutable/chunks/Graphic.OWjBjBne.js","_app/immutable/chunks/typeset.4oI2U5Tz.js"];
const stylesheets = ["_app/immutable/assets/91.sFztbMp9.css","_app/immutable/assets/Assignment.6WUqND9u.css","_app/immutable/assets/ShowQuestion.gnNZ8UE8.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=91-pOmzSQaN.js.map
