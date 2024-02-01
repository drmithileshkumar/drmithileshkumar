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
const component = async () => component_cache ??= (await import('./_layout.svelte-P9BdguzO.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.xt89Kejl.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.S991rHMd.js","_app/immutable/chunks/index.sBc_q6PL.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.yn8r1B33.js","_app/immutable/chunks/entry.G797SBtN.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.oCUnmlEh.js","_app/immutable/chunks/stores.KcX466m2.js","_app/immutable/chunks/Card.n05XP32M.js","_app/immutable/chunks/NavList.xlHSC9Pw.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/stores.lN3I2KMI.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-ivg5M-dy.js.map
