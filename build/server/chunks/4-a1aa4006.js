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
const component = async () => component_cache ??= (await import('./_layout.svelte-bc33894f.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.4acf755d.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/ActionIcons.80c2870e.js","_app/immutable/chunks/index.e1ba9106.js","_app/immutable/chunks/navigation.2124989f.js","_app/immutable/chunks/singletons.b8a76623.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.b703f68a.js","_app/immutable/chunks/stores.2b64632f.js","_app/immutable/chunks/stores.2acbf742.js"];
const stylesheets = ["_app/immutable/assets/4.404b658f.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-a1aa4006.js.map
