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
const component = async () => component_cache ??= (await import('./_layout.svelte-FPTjX8I6.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.D3gRk4d8.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/Scrim.BUSYatUf.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/Fab.puHu9S7B.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/Svg.ClHNM6Dt.js","_app/immutable/chunks/index.NQl5aL-H.js","_app/immutable/chunks/Item.kgVLicfe.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.BjdGPQjV.js","_app/immutable/chunks/Graphic.BMEUV6jW.js","_app/immutable/chunks/Separator.Dp-oRuAe.js","_app/immutable/chunks/Button.B7CPgw9o.js","_app/immutable/chunks/entry.tKeSwN7G.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.DMIecQx6.js","_app/immutable/chunks/stores.DhuAwEDH.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/NavList.DwimURdv.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/IconButton.CwFKh1qD.js","_app/immutable/chunks/TopAppBar.CnzyuNd4.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Title.D6hO6yn3.js"];
const stylesheets = ["_app/immutable/assets/4.Dsqo6wQb.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-Dq-qNUJp.js.map
