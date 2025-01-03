import { p as pageLoadState } from './stores2-B6DyWuAW.js';
import { r as redirect } from './index-DzcLzHBX.js';
import './index2-BZnI6xu7.js';
import './utils-iZWwlC2F.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  pageLoadState.update((state) => false);
  return {};
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 198;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DNcJ7qQg.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/+page.js";
const imports = ["_app/immutable/nodes/198.3yHswgkh.js","_app/immutable/chunks/stores.5QGZ_kC1.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/Actions.CPAOKVg7.js","_app/immutable/chunks/Button.BEGHJ0rg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/stores.CyuxF9br.js"];
const stylesheets = ["_app/immutable/assets/198.D7Ie0uSe.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=198-CLEwcExt.js.map
