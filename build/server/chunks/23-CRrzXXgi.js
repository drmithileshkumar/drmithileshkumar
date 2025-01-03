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

const index = 23;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-DOplE8FY.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/+layout.server.js";
const imports = ["_app/immutable/nodes/23.WB_SXqfV.js","_app/immutable/chunks/23.CGjAFIG8.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=23-CRrzXXgi.js.map
