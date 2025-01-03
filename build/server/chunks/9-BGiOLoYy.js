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

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-DOplE8FY.js')).default;
const server_id = "src/routes/(vectorial)/vectorial/+layout.server.js";
const imports = ["_app/immutable/nodes/9.D_dm71Cj.js","_app/immutable/chunks/9.3960FGsk.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=9-BGiOLoYy.js.map
