import { r as redirect } from './index-oXbhYwP7.js';

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

const index = 29;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-LF74RTmd.js')).default;
const universal_id = "src/routes/(general)/assignments/[assignmentID]/+page.js";
const imports = ["_app/immutable/nodes/29.GaDmA0cj.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/each.JwugYeo-.js","_app/immutable/chunks/stores.AyIgMETq.js","_app/immutable/chunks/entry.wfQ90UDB.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/ActionIcons.1m99DklS.js","_app/immutable/chunks/classAdderBuilder.Fy7yNOSN.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Button.yhNGWFxw.js","_app/immutable/chunks/dispatch.yxiIpicU.js","_app/immutable/chunks/Ripple.NcGtzyi_.js","_app/immutable/chunks/ponyfill.fC1f8UiH.js","_app/immutable/chunks/CommonLabel.P_tal_28.js","_app/immutable/chunks/Suffix.r_K4fOy9.js","_app/immutable/chunks/stores.hUncZlGF.js","_app/immutable/chunks/Assignment.-yTxyjx7.js","_app/immutable/chunks/Card.N1WqjGNp.js","_app/immutable/chunks/Actions.RQdinmQK.js","_app/immutable/chunks/Text.9kbR9nK2.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/ContextFragment.kOMcoY2M.js","_app/immutable/chunks/Textfield.WTyLk0Yn.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/NotchedOutline.zHBbhpSu.js","_app/immutable/chunks/TestQuestion.jPWLqnJX.js","_app/immutable/chunks/Checkbox.A6nZoHMA.js","_app/immutable/chunks/FormField.oRe4QiCt.js","_app/immutable/chunks/SelectionGroupIcon.Q5nr-Xgg.js","_app/immutable/chunks/Subheader.iMYKjBBi.js","_app/immutable/chunks/Graphic.r3iV5nlt.js","_app/immutable/chunks/typeset.4oI2U5Tz.js"];
const stylesheets = ["_app/immutable/assets/28.sFztbMp9.css","_app/immutable/assets/Assignment.yl7wM7VN.css","_app/immutable/assets/TestQuestion.LrTP51C3.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=29-uNfcPKVA.js.map
