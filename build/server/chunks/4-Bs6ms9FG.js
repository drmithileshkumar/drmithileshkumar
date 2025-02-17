function load({ locals }) {
  return {
    user: locals.user && {
      publicID: locals.user.publicID,
      name: locals.user.name,
      phone: locals.user.phone,
      profile: locals.user.profile,
      likes: locals.user.likes,
      isTeacher: locals.user.isTeacher
    }
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-CX11BSn-.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.CC446j2i.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/Scrim.Bl1gx1uO.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/classAdderBuilder.7IPfzeGa.js","_app/immutable/chunks/SmuiElement.amOlfGzn.js","_app/immutable/chunks/Svg.Dv8B55Ag.js","_app/immutable/chunks/index.1IbdGFEG.js","_app/immutable/chunks/Item.V3BEBD7c.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Ripple.Cu_Zdxz6.js","_app/immutable/chunks/Subheader.-Ek4Sco6.js","_app/immutable/chunks/Graphic.CVNIXG2P.js","_app/immutable/chunks/Separator.CQ3fuT0N.js","_app/immutable/chunks/Button.CDNCVR8K.js","_app/immutable/chunks/entry.iIuJJAWT.js","_app/immutable/chunks/index.BSKKeNIs.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.BuWEvvX0.js","_app/immutable/chunks/stores.D_oEcuB4.js","_app/immutable/chunks/Card.DJrmTOx1.js","_app/immutable/chunks/ActionIcons.CrNiNf7s.js","_app/immutable/chunks/NavList.xubFjaPk.js","_app/immutable/chunks/each.4xuuRGm3.js","_app/immutable/chunks/IconButton.Dlthkof1.js","_app/immutable/chunks/TopAppBar.BWAOBMcR.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Title.CfUafkxk.js"];
const stylesheets = ["_app/immutable/assets/4.Dsqo6wQb.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-Bs6ms9FG.js.map
