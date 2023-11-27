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
const component = async () => component_cache ??= (await import('./_layout.svelte-22292094.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.befdd029.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/ActionIcons.80c2870e.js","_app/immutable/chunks/index.e1ba9106.js","_app/immutable/chunks/navigation.3b408e1d.js","_app/immutable/chunks/singletons.7212e542.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.4b8c7447.js","_app/immutable/chunks/stores.9945872c.js","_app/immutable/chunks/stores.2acbf742.js"];
const stylesheets = ["_app/immutable/assets/4.404b658f.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-f5b3f404.js.map
