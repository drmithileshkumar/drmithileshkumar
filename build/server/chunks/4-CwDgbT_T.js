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
const component = async () => component_cache ??= (await import('./_layout.svelte-hickABmb.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.DCpIMnQc.js","_app/immutable/chunks/scheduler.B1atsjBc.js","_app/immutable/chunks/index.DlO191gB.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/classAdderBuilder.Dr_z-rwh.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/Ripple.Cr2a8Emw.js","_app/immutable/chunks/NavList.BKo1hnqO.js","_app/immutable/chunks/each.DRc7mzDe.js","_app/immutable/chunks/Item.Cdi5M2Wf.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.CFqZDM0F.js","_app/immutable/chunks/Graphic.BZEjdAg2.js","_app/immutable/chunks/IconButton.tzNTp528.js","_app/immutable/chunks/entry.D7-rDCYg.js","_app/immutable/chunks/index.DEfXOQ1n.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.moVKe_bz.js","_app/immutable/chunks/index.tWgQeGQy.js","_app/immutable/chunks/Button.bSgfoJ4g.js","_app/immutable/chunks/stores.CLmGsJFn.js","_app/immutable/chunks/Card.BNwIWFu_.js","_app/immutable/chunks/ActionIcons.BB_MIeF4.js","_app/immutable/chunks/TopAppBar.CHDVKDML.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Title.CDoJkRwB.js","_app/immutable/chunks/stores.Tx699Zxm.js"];
const stylesheets = ["_app/immutable/assets/4.B8gsHEbM.css","_app/immutable/assets/Link.CZNrpk-N.css","_app/immutable/assets/Pathlist.M7z7sxw7.css","_app/immutable/assets/NavList.Bu7JEHbj.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-CwDgbT_T.js.map
