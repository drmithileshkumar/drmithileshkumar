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
const component = async () => component_cache ??= (await import('./_layout.svelte-_pfY7EWP.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.pcCvCSax.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.oA2Cwr8z.js","_app/immutable/chunks/dispatch.4-F2D4NY.js","_app/immutable/chunks/Ripple.GxFfr3MR.js","_app/immutable/chunks/index.gBHr9ICE.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.pJ7SdKy5.js","_app/immutable/chunks/entry.EDyy5ZhH.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.MoTJorNg.js","_app/immutable/chunks/stores.-1bOnq-o.js","_app/immutable/chunks/Card.6Z7INVJg.js","_app/immutable/chunks/NavList.tDSU1yB6.js","_app/immutable/chunks/each.NqGTa2mj.js","_app/immutable/chunks/stores.XBsJh_dx.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-RMzPO9CZ.js.map
