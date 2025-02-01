import { p as pageLoadState } from './stores2-f06Es8-t.js';
import { r as redirect } from './index-DzcLzHBX.js';
import './index2-D2s-XE5r.js';
import './utils-DhkojCd_.js';

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

const index = 223;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C9BPpO3J.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/+page.js";
const imports = ["_app/immutable/nodes/223.DokciqQA.js","_app/immutable/chunks/stores.CiGwCTFt.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Actions.Bskv2kE_.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/entry.9fiABkYg.js","_app/immutable/chunks/stores.CZO3ygXh.js"];
const stylesheets = ["_app/immutable/assets/223.B-lIFtUo.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=223-C6VAf6t0.js.map
