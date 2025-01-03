import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  let publicID = params.publicID;
  let questionID = params.questionID;
  let res = await fetch(`/api/${publicID}/questions/${questionID}`);
  let question = await res.json();
  return {
    question
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 342;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1NIHUVQb.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/[questionID]/+page.js";
const imports = ["_app/immutable/nodes/342.Clpm-r3h.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.DjfWW61c.js","_app/immutable/chunks/Textfield.CC7q94do.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.BkOyIpIy.js","_app/immutable/chunks/NotchedOutline.DR6lqMTd.js","_app/immutable/chunks/Suffix.D515sgXS.js","_app/immutable/chunks/Input.-D2mZesD.js","_app/immutable/chunks/FormField.Dcl_LSn5.js","_app/immutable/chunks/Checkbox.OxEFttSW.js","_app/immutable/chunks/Radio.DgOxblTb.js"];
const stylesheets = ["_app/immutable/assets/342.D2wXoaCP.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=342-ZGvwrsle.js.map
