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
const component = async () => component_cache ??= (await import('./_layout.svelte-GVQXh_5q.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.UPF8deoW.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/focus-trap.9c4j25jO.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/dispatch.yxiIpicU.js","_app/immutable/chunks/ponyfill.fC1f8UiH.js","_app/immutable/chunks/Ripple.qDdlYQXH.js","_app/immutable/chunks/NavList.892u2mX2.js","_app/immutable/chunks/each.FuR60EDZ.js","_app/immutable/chunks/Item.6u--0fE5.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/Subheader.QWkzeqGY.js","_app/immutable/chunks/Graphic.OWjBjBne.js","_app/immutable/chunks/IconButton.DZof78gP.js","_app/immutable/chunks/entry.xZhO_Ors.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.3l2-g5YS.js","_app/immutable/chunks/index.MYUUn9Xp.js","_app/immutable/chunks/Button.aem-lKBa.js","_app/immutable/chunks/stores.5M-7oC6H.js","_app/immutable/chunks/Card.0VZDzDAB.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/TopAppBar.jivO_xjW.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Title.1GgrbYNC.js","_app/immutable/chunks/stores.GoaI5prC.js"];
const stylesheets = ["_app/immutable/assets/4.fILBxGzD.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Pathlist.ZVYelo9Y.css","_app/immutable/assets/NavList.buyRB24_.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-mC6HA14U.js.map
