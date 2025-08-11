function load({ locals }) {
  return {
    user: locals.user && {
      publicID: locals.user.publicID,
      name: locals.user.name,
      phone: locals.user.phone,
      profile: locals.user.profile,
      likes: locals.user.likes,
      isTeacher: locals.user.isTeacher
    }
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-D771JT1s.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.6TkIdD5V.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js","_app/immutable/chunks/3W-4MJZP.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/BKtJZaA4.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/CkJoemvl.js","_app/immutable/chunks/eknKW2my.js","_app/immutable/chunks/DWggEP7I.js","_app/immutable/chunks/DO-e5X78.js","_app/immutable/chunks/DWWfy2Qa.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/BpvBUywO.js","_app/immutable/chunks/LmmKzvCC.js","_app/immutable/chunks/B8zkQ1gz.js","_app/immutable/chunks/C2EdYICE.js","_app/immutable/chunks/-wh8JMbe.js","_app/immutable/chunks/BzXXzIRA.js","_app/immutable/chunks/CGERInoT.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DpCbmEWb.js","_app/immutable/chunks/DgV-wMNa.js","_app/immutable/chunks/DULwcJ7d.js","_app/immutable/chunks/DnCrujO_.js","_app/immutable/chunks/rAO64akZ.js","_app/immutable/chunks/B_pay6SI.js","_app/immutable/chunks/BaLGAFUg.js","_app/immutable/chunks/DiGXoHgj.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/BkHKzQDw.js"];
const stylesheets = ["_app/immutable/assets/NavList.CJbcjQr4.css","_app/immutable/assets/4.Dsqo6wQb.css","_app/immutable/assets/Link.DT8GuSJh.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-DzrjOEAe.js.map
