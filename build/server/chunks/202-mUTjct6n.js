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

const index = 202;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DA5bMVXf.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/[questionID]/+page.js";
const imports = ["_app/immutable/nodes/202.D2wPU0aY.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/stores.CeMdWg7H.js","_app/immutable/chunks/entry.Bx_ad7ke.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.BgBvPo95.js","_app/immutable/chunks/Textfield.Ccvmx3_X.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.Bj9W4id-.js","_app/immutable/chunks/NotchedOutline.D0MJCKRQ.js","_app/immutable/chunks/Suffix.CQimAQdo.js","_app/immutable/chunks/Input.DvLWxqRy.js","_app/immutable/chunks/FormField.D0mJ011p.js","_app/immutable/chunks/Checkbox.DLRJT79h.js","_app/immutable/chunks/Radio.BPLgUi0n.js"];
const stylesheets = ["_app/immutable/assets/202.D2wXoaCP.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=202-mUTjct6n.js.map
