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
const component = async () => component_cache ??= (await import('./_layout.svelte-d8d0ddd5.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.dcda0503.js","_app/immutable/chunks/index.1abf499d.js","_app/immutable/chunks/ActionIcons.55fb84fc.js","_app/immutable/chunks/navigation.f0e81c68.js","_app/immutable/chunks/singletons.8b8bdd45.js","_app/immutable/chunks/index.7a5634e6.js","_app/immutable/chunks/paths.bb34ef4e.js","_app/immutable/chunks/stores.111c2733.js"];
const stylesheets = ["_app/immutable/assets/4.47dda9e1.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-51c2d003.js.map
