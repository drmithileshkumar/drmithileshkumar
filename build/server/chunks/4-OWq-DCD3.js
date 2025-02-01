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
const component = async () => component_cache ??= (await import('./_layout.svelte-FPTjX8I6.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.CjdrNv8v.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/Scrim.D6DVj4F_.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/focus-trap.BKtJZaA4.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/Fab.dKigc-FT.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/Svg.DrXhfwnK.js","_app/immutable/chunks/index.g75pM0BS.js","_app/immutable/chunks/Item.CypjvZpJ.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Subheader.DfAt7dW7.js","_app/immutable/chunks/Graphic.C8Nu_edt.js","_app/immutable/chunks/Separator.BS5ZzdZW.js","_app/immutable/chunks/Button.CvLQu4B8.js","_app/immutable/chunks/entry.aqSikbG0.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.Dn9zVH1s.js","_app/immutable/chunks/stores.D4EbrjdR.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/NavList.tvczC4Qz.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/IconButton.CiqJRD3_.js","_app/immutable/chunks/TopAppBar.DrkjSWcZ.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/Title.Vmgu2zFU.js"];
const stylesheets = ["_app/immutable/assets/4.Dsqo6wQb.css","_app/immutable/assets/Link.DT8GuSJh.css","_app/immutable/assets/NavList.CJbcjQr4.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-OWq-DCD3.js.map
