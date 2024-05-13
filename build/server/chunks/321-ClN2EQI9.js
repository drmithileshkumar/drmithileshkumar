import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user)
    redirect(301, "/auth");
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

const index = 321;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Df4HNOFw.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/[questionID]/+page.js";
const imports = ["_app/immutable/nodes/321.B0DRJjq7.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/stores.C1aFyBTh.js","_app/immutable/chunks/entry.14jWzsZ9.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/Card.BNwIWFu_.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/Actions.C-aWTNm3.js","_app/immutable/chunks/Button.bSgfoJ4g.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/CommonLabel.CMa7DfzO.js","_app/immutable/chunks/Textfield.1QNKFE03.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.DcAkM7wy.js","_app/immutable/chunks/NotchedOutline.CZi5LcBj.js","_app/immutable/chunks/Suffix.CV9ZjPQ-.js","_app/immutable/chunks/FormField.lvQV-ka1.js","_app/immutable/chunks/Checkbox.C39Boaml.js","_app/immutable/chunks/Radio.BYJDKWQf.js"];
const stylesheets = ["_app/immutable/assets/321.DKrxGU2L.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=321-ClN2EQI9.js.map
