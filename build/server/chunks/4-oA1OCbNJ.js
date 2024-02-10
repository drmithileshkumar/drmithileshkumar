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
const component = async () => component_cache ??= (await import('./_layout.svelte--kzEMaCQ.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.OsOKoKi9.js","_app/immutable/chunks/scheduler.OPFU5seO.js","_app/immutable/chunks/index.np_sXRfl.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.Kd4xFtPj.js","_app/immutable/chunks/dispatch.0iSMQIYc.js","_app/immutable/chunks/Ripple.9Ku1vDWQ.js","_app/immutable/chunks/index.JtIRwKoW.js","_app/immutable/chunks/Graphic.FSbsHuu5.js","_app/immutable/chunks/Subheader.530X0r1x.js","_app/immutable/chunks/entry.zt9YIbQc.js","_app/immutable/chunks/index.x-ybsOk2.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.04EEAGg6.js","_app/immutable/chunks/Card.TZDyXqtE.js","_app/immutable/chunks/NavList.gM5WaFFR.js","_app/immutable/chunks/each.KdwwmxXr.js","_app/immutable/chunks/stores.9F6itTw0.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.HFZ0se20.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-oA1OCbNJ.js.map
