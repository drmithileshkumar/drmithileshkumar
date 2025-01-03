import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const { user } = await parent();
  if (!user) redirect(301, "/auth");
  params.publicID;
  return {
    // questions, assignments
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 340;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DFUmHZ4x.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/+page.js";
const imports = ["_app/immutable/nodes/340.BAkA4nZd.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/entry.B4hIrfLx.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/stores.DFCiwoiL.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/Actions.RH1KNkR0.js","_app/immutable/chunks/Checkbox.OxEFttSW.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/FormField.Dcl_LSn5.js","_app/immutable/chunks/Option.C6XAFSv3.js","_app/immutable/chunks/Anchor.CYjcg-An.js","_app/immutable/chunks/Menu.DOgbc4A8.js","_app/immutable/chunks/MenuSurface.COPmfEYM.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Item.DHklDi9x.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/SelectionGroupIcon.CeCdawSn.js","_app/immutable/chunks/Subheader.DnAlchfb.js","_app/immutable/chunks/Graphic.QmIoxMRJ.js","_app/immutable/chunks/NotchedOutline.DR6lqMTd.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/stores.Bj90LH9q.js"];
const stylesheets = ["_app/immutable/assets/340.BckVhKsH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=340-DkesK23e.js.map
