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
const component = async () => (await import('./_layout.svelte-0eefdf42.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.ad0a5a85.js","_app/immutable/chunks/index.4c5142a2.js","_app/immutable/chunks/navigation.99c1ca58.js","_app/immutable/chunks/singletons.70b72f07.js","_app/immutable/chunks/index.e53142fc.js","_app/immutable/chunks/stores.e112ccdf.js"];
const stylesheets = ["_app/immutable/assets/4.c5cfb43a.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-6472ba3e.js.map
