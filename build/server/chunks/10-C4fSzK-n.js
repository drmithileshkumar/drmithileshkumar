function load({ locals }) {
  return {
    user: locals.user && {
      publicID: locals.user.publicID,
      name: locals.user.name,
      phone: locals.user.phone,
      profile: locals.user.profile,
      banner: locals.user.banner
    }
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-Clce55s-.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/+layout.server.js";
const imports = ["_app/immutable/nodes/10.Bq3DPZqz.js","_app/immutable/chunks/10.W7iUWzrs.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=10-C4fSzK-n.js.map
