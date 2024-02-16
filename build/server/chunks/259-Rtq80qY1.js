import { r as redirect } from './index-oXbhYwP7.js';

const ssr = false;
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) {
    redirect(301, `/`);
  }
  let res = await fetch(`/api/userDetail`);
  let userDetail = await res.json();
  return {
    userDetail
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 259;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-zRQ5C513.js')).default;
const universal_id = "src/routes/(general)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/259.6mbchpJM.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/each.FuR60EDZ.js","_app/immutable/chunks/Textfield.hOLwEFhj.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Ripple.qDdlYQXH.js","_app/immutable/chunks/ponyfill.fC1f8UiH.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/dispatch.yxiIpicU.js","_app/immutable/chunks/prefixFilter.eMlqEcSK.js","_app/immutable/chunks/ContextFragment.rEZ75yrM.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/NotchedOutline.2BtGAYZR.js","_app/immutable/chunks/Suffix.3QTh0wJa.js","_app/immutable/chunks/Title.1GgrbYNC.js","_app/immutable/chunks/CommonLabel._8WXK2jP.js","_app/immutable/chunks/IconButton.DZof78gP.js","_app/immutable/chunks/Menu.tna_SSVt.js","_app/immutable/chunks/Item.6u--0fE5.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/SelectionGroupIcon.Lg4HrTRp.js","_app/immutable/chunks/Subheader.QWkzeqGY.js","_app/immutable/chunks/Graphic.OWjBjBne.js","_app/immutable/chunks/Button.aem-lKBa.js","_app/immutable/chunks/focus-trap.9c4j25jO.js","_app/immutable/chunks/Radio.THSRx8-M.js","_app/immutable/chunks/FormField.JhSwTVcu.js","_app/immutable/chunks/stores.5M-7oC6H.js","_app/immutable/chunks/entry.xZhO_Ors.js","_app/immutable/chunks/stores.3l2-g5YS.js"];
const stylesheets = ["_app/immutable/assets/259.0LFmQKk9.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=259-Rtq80qY1.js.map
