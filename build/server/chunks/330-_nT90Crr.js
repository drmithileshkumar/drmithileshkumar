import { r as redirect } from './index-DzcLzHBX.js';

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

const index = 330;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DwgCb5WV.js')).default;
const universal_id = "src/routes/(general)/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/330.CEviSkRv.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/Textfield.CC7q94do.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/ContextFragment.BkOyIpIy.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/NotchedOutline.DR6lqMTd.js","_app/immutable/chunks/Suffix.D515sgXS.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Input.-D2mZesD.js","_app/immutable/chunks/Title.BuQVmftb.js","_app/immutable/chunks/CommonLabel.DjfWW61c.js","_app/immutable/chunks/IconButton.BD-vkp1G.js","_app/immutable/chunks/Autocomplete.D01385Ei.js","_app/immutable/chunks/Menu.DOgbc4A8.js","_app/immutable/chunks/MenuSurface.COPmfEYM.js","_app/immutable/chunks/Item.DHklDi9x.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/SelectionGroupIcon.CeCdawSn.js","_app/immutable/chunks/Subheader.DnAlchfb.js","_app/immutable/chunks/Graphic.QmIoxMRJ.js","_app/immutable/chunks/Anchor.CYjcg-An.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/Dialog.Dq8N6nfU.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/Actions.DV5gsUn3.js","_app/immutable/chunks/Radio.DgOxblTb.js","_app/immutable/chunks/FormField.Dcl_LSn5.js","_app/immutable/chunks/stores.Cxl0mqTB.js","_app/immutable/chunks/entry.DutQk9jt.js","_app/immutable/chunks/stores.Bj90LH9q.js"];
const stylesheets = ["_app/immutable/assets/330.DyZqFiY5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=330-_nT90Crr.js.map
