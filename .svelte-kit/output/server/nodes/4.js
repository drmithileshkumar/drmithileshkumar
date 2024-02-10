import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.T9yRb7xG.js","_app/immutable/chunks/scheduler.XN8MnxCc.js","_app/immutable/chunks/index.hIVQ3JUV.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.A7KDZOPi.js","_app/immutable/chunks/dispatch.IYdBAMA_.js","_app/immutable/chunks/Ripple.Viy6eW0I.js","_app/immutable/chunks/NavList.QXT4IoAs.js","_app/immutable/chunks/each.-STYVJ2I.js","_app/immutable/chunks/Graphic.UvFgWobC.js","_app/immutable/chunks/Subheader.bW5bV90s.js","_app/immutable/chunks/entry.3iGz-hzx.js","_app/immutable/chunks/index.D7WnTG5a.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/Card.5SpOS5eG.js","_app/immutable/chunks/index.Rbdi1l1N.js","_app/immutable/chunks/stores.68XnZRqr.js","_app/immutable/chunks/stores.rLer7KL8.js"];
export const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.buyRB24_.css"];
export const fonts = [];
