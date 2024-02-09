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
const component = async () => component_cache ??= (await import('./_layout.svelte-v1dxF1fn.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.g8fI7-E0.js","_app/immutable/chunks/scheduler.6OEexJ1D.js","_app/immutable/chunks/index.uJtgCTqT.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.uF8zJ3U2.js","_app/immutable/chunks/dispatch.0iSMQIYc.js","_app/immutable/chunks/Ripple.AcwZg7sA.js","_app/immutable/chunks/index.urGhFGCw.js","_app/immutable/chunks/Graphic.UPftp0yf.js","_app/immutable/chunks/Subheader.VZ3qTP_a.js","_app/immutable/chunks/entry.rxdufebz.js","_app/immutable/chunks/index.0JK1PMzr.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.Jl2XUKTY.js","_app/immutable/chunks/Card.nQ0ntBrx.js","_app/immutable/chunks/NavList.6X2gQfz1.js","_app/immutable/chunks/each.v_Jd1uez.js","_app/immutable/chunks/stores.az4gHfxZ.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.aMeAxv8b.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-0dsuNBI2.js.map
