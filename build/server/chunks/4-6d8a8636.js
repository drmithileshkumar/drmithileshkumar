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
const component = async () => (await import('./_layout.svelte-6f0088a7.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.6b74a0b1.js","_app/immutable/chunks/index.83aee1b3.js","_app/immutable/chunks/ActionIcons.db52e67e.js","_app/immutable/chunks/navigation.e7ff8853.js","_app/immutable/chunks/singletons.2140748f.js","_app/immutable/chunks/index.c0198b8b.js","_app/immutable/chunks/stores.d85bd91a.js"];
const stylesheets = ["_app/immutable/assets/4.47dda9e1.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-6d8a8636.js.map
