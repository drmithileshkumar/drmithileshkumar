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
const component = async () => (await import('./_layout.svelte-08762e02.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.2f98719e.js","_app/immutable/chunks/index.6422d2b8.js","_app/immutable/chunks/navigation.b2e4cf9a.js","_app/immutable/chunks/singletons.edf20d34.js","_app/immutable/chunks/index.ece20a09.js","_app/immutable/chunks/stores.22400e87.js"];
const stylesheets = ["_app/immutable/assets/4.47dda9e1.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-eb865369.js.map
