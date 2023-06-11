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
const component = async () => (await import('./_layout.svelte-9775b875.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.9e1faf39.js","_app/immutable/chunks/index.aa11adab.js","_app/immutable/chunks/ActionIcons.df132c2a.js","_app/immutable/chunks/navigation.71b6d0a4.js","_app/immutable/chunks/singletons.5cbc033f.js","_app/immutable/chunks/index.3fa823be.js","_app/immutable/chunks/paths.bf3a73ee.js","_app/immutable/chunks/stores.8ffe4a1d.js"];
const stylesheets = ["_app/immutable/assets/4.47dda9e1.css","_app/immutable/assets/Link.867ad8ee.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-7ac96e88.js.map
