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
const component = async () => component_cache ??= (await import('./_layout.svelte-qkNU7guR.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.U-OjxC77.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.uva-frad.js","_app/immutable/chunks/index.JynCmtlF.js","_app/immutable/chunks/entry.1lhQPCFb.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.utWUtsGu.js","_app/immutable/chunks/stores.JeTdzoaZ.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/Card.7pw2nmLE.js","_app/immutable/chunks/stores.J_TcoIh4.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-hifnP-ab.js.map
