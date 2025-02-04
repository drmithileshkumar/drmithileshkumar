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

const index = 227;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C9BPpO3J.js')).default;
const universal_id = "src/routes/(vectorial)/vectorial/(nonapp)/+page.js";
const imports = ["_app/immutable/nodes/227.CbyjuoOg.js","_app/immutable/chunks/stores.Mit3ycmu.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Actions.BG0qE4LW.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/entry.tKeSwN7G.js","_app/immutable/chunks/stores.DMIecQx6.js"];
const stylesheets = ["_app/immutable/assets/227.B-lIFtUo.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=227-CAbSkwYL.js.map
