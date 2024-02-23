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
const component = async () => component_cache ??= (await import('./_layout.svelte-Tc_HV_RY.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.ZFRm_LLS.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/focus-trap.9c4j25jO.js","_app/immutable/chunks/classAdderBuilder.Fy7yNOSN.js","_app/immutable/chunks/dispatch.yxiIpicU.js","_app/immutable/chunks/ponyfill.fC1f8UiH.js","_app/immutable/chunks/Ripple.NcGtzyi_.js","_app/immutable/chunks/NavList.hPrOVqhK.js","_app/immutable/chunks/each.JwugYeo-.js","_app/immutable/chunks/Item.TTKRhls7.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/Subheader.iMYKjBBi.js","_app/immutable/chunks/Graphic.r3iV5nlt.js","_app/immutable/chunks/IconButton.u6OB4fIw.js","_app/immutable/chunks/entry.n5KDgTp-.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.hUncZlGF.js","_app/immutable/chunks/index.UbUhCNpK.js","_app/immutable/chunks/Button.yhNGWFxw.js","_app/immutable/chunks/stores.orym-vag.js","_app/immutable/chunks/Card.N1WqjGNp.js","_app/immutable/chunks/ActionIcons.1m99DklS.js","_app/immutable/chunks/TopAppBar.YSNN2Q2r.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Title.OMDdX1dI.js","_app/immutable/chunks/stores.7BCmNEwQ.js"];
const stylesheets = ["_app/immutable/assets/4.fILBxGzD.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Pathlist.DO8-7McO.css","_app/immutable/assets/NavList.buyRB24_.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-LsX7sLIn.js.map
