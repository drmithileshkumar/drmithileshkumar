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
const component = async () => component_cache ??= (await import('./_layout.svelte-p7ZvvD4e.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.vyyLO5DB.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/focus-trap.9c4j25jO.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple.LbSITeNB.js","_app/immutable/chunks/NavList.gCIKkEX7.js","_app/immutable/chunks/each.FuR60EDZ.js","_app/immutable/chunks/Item.XO026pTs.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/Subheader.QWkzeqGY.js","_app/immutable/chunks/Graphic.OWjBjBne.js","_app/immutable/chunks/IconButton.Hpxv6Jdb.js","_app/immutable/chunks/entry.MmTYf7eQ.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.3l2-g5YS.js","_app/immutable/chunks/index.MYUUn9Xp.js","_app/immutable/chunks/Button.cWUa-4TA.js","_app/immutable/chunks/stores.uArVcFD1.js","_app/immutable/chunks/Card.0VZDzDAB.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/TopAppBar.78K7038O.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Title.1GgrbYNC.js","_app/immutable/chunks/stores.GoaI5prC.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Pathlist.ZVYelo9Y.css","_app/immutable/assets/NavList.buyRB24_.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-sp-4xZhj.js.map
