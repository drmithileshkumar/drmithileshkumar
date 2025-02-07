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

const index = 201;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DR9rqiai.js')).default;
const universal_id = "src/routes/(general)/[publicID]/questions/+page.js";
const imports = ["_app/immutable/nodes/201.BZMXOz2G.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/entry.De3ToWoX.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/stores.BH5vVzJ8.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/Actions.O4TtXVIo.js","_app/immutable/chunks/Checkbox.Dwh5ChE0.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/FormField.DJo729md.js","_app/immutable/chunks/Option.BlFdOIJu.js","_app/immutable/chunks/Anchor.CYjcg-An.js","_app/immutable/chunks/Menu.CgkutC4d.js","_app/immutable/chunks/MenuSurface.C8_JgDNj.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Item.V3BEBD7c.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/SelectionGroupIcon.Bd5H7uxg.js","_app/immutable/chunks/Subheader.-Ek4Sco6.js","_app/immutable/chunks/Graphic.CVNIXG2P.js","_app/immutable/chunks/NotchedOutline.Bdv_o-Ij.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/stores.D_oEcuB4.js"];
const stylesheets = ["_app/immutable/assets/201.BckVhKsH.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=201-DHCWpXtv.js.map
