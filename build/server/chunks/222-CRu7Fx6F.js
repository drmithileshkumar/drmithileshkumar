import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com/" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com/`);
  }
  const { user } = await parent();
  let subscription = null;
  if (user) {
    let res = await fetch(`/vectorial/api/subscription`);
    subscription = await res.json();
  }
  return {
    subscription
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 222;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D-Wqv4C5.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/subscription/+page.js";
const imports = ["_app/immutable/nodes/222.DVFgy3gb.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/stores.CyuxF9br.js"];
const stylesheets = ["_app/immutable/assets/222.Dqs8cmPG.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=222-CRu7Fx6F.js.map
