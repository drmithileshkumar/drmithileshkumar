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
const component = async () => component_cache ??= (await import('./_layout.svelte-BXgmpm9l.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.6vjExbFP.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js","_app/immutable/chunks/Scrim.BWidP0Vt.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/SmuiElement.DFYghDnT.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/classAdderBuilder.BdbN_yhi.js","_app/immutable/chunks/Fab.C1nNHEWJ.js","_app/immutable/chunks/Ripple.BXwXYlkv.js","_app/immutable/chunks/Svg.BDaJh6GC.js","_app/immutable/chunks/index.1gl2VIKR.js","_app/immutable/chunks/Item.DHklDi9x.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.DnAlchfb.js","_app/immutable/chunks/Graphic.QmIoxMRJ.js","_app/immutable/chunks/Separator.Bdxw3Zau.js","_app/immutable/chunks/Button.DTp-CPPF.js","_app/immutable/chunks/entry.DutQk9jt.js","_app/immutable/chunks/index.D70FGJSe.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.Cxl0mqTB.js","_app/immutable/chunks/stores.Bj90LH9q.js","_app/immutable/chunks/Card.aqY14fMy.js","_app/immutable/chunks/ActionIcons.C8XP0smU.js","_app/immutable/chunks/NavList.C_db27in.js","_app/immutable/chunks/each.CgqZEEeH.js","_app/immutable/chunks/IconButton.BD-vkp1G.js","_app/immutable/chunks/TopAppBar.DoxCx3pN.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Title.BuQVmftb.js","_app/immutable/chunks/stores.C6SlvLHi.js"];
const stylesheets = ["_app/immutable/assets/4.BuuSqBMR.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/Pathlist.BSb51Isn.css","_app/immutable/assets/NavList.CJbcjQr4.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-CLmtGNK5.js.map
