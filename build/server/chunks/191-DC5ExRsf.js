import { r as redirect } from './index-DzcLzHBX.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 191;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CzUCvF27.js')).default;
const universal_id = "src/routes/(general)/talks/+page.js";
const imports = ["_app/immutable/nodes/191.CnjdQ9A8.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Item.kgVLicfe.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/Subheader.BjdGPQjV.js","_app/immutable/chunks/Graphic.BMEUV6jW.js","_app/immutable/chunks/entry.Bx_ad7ke.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/stores.DhuAwEDH.js"];
const stylesheets = ["_app/immutable/assets/22.MKzJQBCB.css","_app/immutable/assets/Message.D2xEdDAW.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=191-DC5ExRsf.js.map
