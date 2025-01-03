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

const index = 155;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-cGax6Of4.js')).default;
const universal_id = "src/routes/(general)/courses/quantumcommunication/+page.js";
const imports = ["_app/immutable/nodes/155.DC6xpnCf.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/entry.BIhX438V.js","_app/immutable/chunks/index.BNQMCvwE.js","_app/immutable/chunks/Card.DRC2xUqP.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/NavList.CW-HKAdD.js","_app/immutable/chunks/each.D0FuIOMI.js","_app/immutable/chunks/Item.vEGae8Yu.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Ripple.C-DtqsEB.js","_app/immutable/chunks/Subheader.BOQ4-Uk_.js","_app/immutable/chunks/Graphic.DGQ5sPOW.js","_app/immutable/chunks/Svg.DkGkg7Z9.js","_app/immutable/chunks/IconButton.3HaSDpJR.js","_app/immutable/chunks/stores.C4YY6XNo.js"];
const stylesheets = ["_app/immutable/assets/84.B1BksNzl.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=155-ieyc7-lU.js.map
