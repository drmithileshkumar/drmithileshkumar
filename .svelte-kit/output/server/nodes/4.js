import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.72pkYrOV.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.3Wex8s3Q.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.LVYQUx0w.js","_app/immutable/chunks/index.70QPfTMz.js","_app/immutable/chunks/NavList.tXmFNYam.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/entry.JiEGjc9j.js","_app/immutable/chunks/index.dpPe8Tdf.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.CggJ_r3Q.js","_app/immutable/chunks/stores.wRmUPyz9.js","_app/immutable/chunks/Card.lNB2ACDy.js","_app/immutable/chunks/stores.Bs1j_UiF.js"];
export const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
export const fonts = [];
