function load({ locals }) {
  return {
    user: locals.user && {
      publicID: locals.user.publicID,
      name: locals.user.name,
      phone: locals.user.phone,
      profile: locals.user.profile,
      likes: locals.user.likes
    }
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-9xSxI6MB.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.caUBSVbS.js","_app/immutable/chunks/scheduler.wYmonAyn.js","_app/immutable/chunks/index.AwdIdbL-.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/focus-trap.9c4j25jO.js","_app/immutable/chunks/classAdderBuilder.yqNPMMYB.js","_app/immutable/chunks/dispatch.YktQzwJT.js","_app/immutable/chunks/Ripple._faPHWDK.js","_app/immutable/chunks/NavList.akzxHJNp.js","_app/immutable/chunks/each.x_SzhXRZ.js","_app/immutable/chunks/Graphic.0BeyKEfu.js","_app/immutable/chunks/keyboard.3eMe4_La.js","_app/immutable/chunks/Subheader.KlliebKe.js","_app/immutable/chunks/IconButton.yMy0l-Ax.js","_app/immutable/chunks/entry.i2HVWFHM.js","_app/immutable/chunks/index.KLghjZkg.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.7oE78v3q.js","_app/immutable/chunks/index.lcHJh1q4.js","_app/immutable/chunks/stores.YV8cvqO3.js","_app/immutable/chunks/Card.Sl11uEgJ.js","_app/immutable/chunks/ActionIcons.IGfvHpx2.js","_app/immutable/chunks/TopAppBar.-FgOmheL.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/Title.5iabZfer.js","_app/immutable/chunks/stores.r0S_1cbc.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.buyRB24_.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-ZAjtXZKc.js.map
