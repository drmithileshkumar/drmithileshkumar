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
const component = async () => component_cache ??= (await import('./_layout.svelte-7aGEsrGM.js')).default;
const server_id = "src/routes/(general)/+layout.server.js";
const imports = ["_app/immutable/nodes/4.ydR6ZOJq.js","_app/immutable/chunks/scheduler.XN8MnxCc.js","_app/immutable/chunks/index.hIVQ3JUV.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.A7KDZOPi.js","_app/immutable/chunks/dispatch.IYdBAMA_.js","_app/immutable/chunks/Ripple.Viy6eW0I.js","_app/immutable/chunks/NavList.FLF5pW6l.js","_app/immutable/chunks/each.-STYVJ2I.js","_app/immutable/chunks/Graphic.UvFgWobC.js","_app/immutable/chunks/Subheader.bW5bV90s.js","_app/immutable/chunks/entry.mysIIOM0.js","_app/immutable/chunks/index.D7WnTG5a.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/Card.5SpOS5eG.js","_app/immutable/chunks/index.Rbdi1l1N.js","_app/immutable/chunks/stores.5Eg0rLPx.js","_app/immutable/chunks/stores.rLer7KL8.js"];
const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.buyRB24_.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=4-T3Rn2es2.js.map
