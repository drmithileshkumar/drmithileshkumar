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
const component = async () => component_cache ??= (await import('./_layout.svelte-RfVBOIK0.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.pdGoucXI.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.GG8dmijt.js","_app/immutable/chunks/dispatch.oo1sjRSk.js","_app/immutable/chunks/index.LaUBdqls.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.9asjx_8T.js","_app/immutable/chunks/entry.ZVyOfNZo.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.ToeP0oEQ.js","_app/immutable/chunks/stores.O_U5iIhZ.js","_app/immutable/chunks/Card.S1YCyonB.js","_app/immutable/chunks/NavList.qFea9d_S.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/stores.DnhZXbuE.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-_eSBBPqo.js.map
