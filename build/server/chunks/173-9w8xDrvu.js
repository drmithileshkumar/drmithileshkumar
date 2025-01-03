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

const index = 173;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D5_YlKRv.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/[questionID]/+page.js";
const imports = ["_app/immutable/nodes/173.lLipZGC-.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/stores.CyuxF9br.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.Dj7nqIzk.js","_app/immutable/chunks/Textfield.Dnm2l9Fe.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.phj6Xvfp.js","_app/immutable/chunks/NotchedOutline.DFah64gX.js","_app/immutable/chunks/Suffix.DhiO64fn.js","_app/immutable/chunks/Input.Dk7SfQmK.js","_app/immutable/chunks/FormField.Dv_tFHs1.js","_app/immutable/chunks/Checkbox.DDKUti8A.js","_app/immutable/chunks/Radio.CJDJxYbv.js"];
const stylesheets = ["_app/immutable/assets/173.D2wXoaCP.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=173-9w8xDrvu.js.map
