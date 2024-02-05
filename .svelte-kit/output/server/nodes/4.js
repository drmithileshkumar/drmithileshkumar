import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.pdGoucXI.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.GG8dmijt.js","_app/immutable/chunks/dispatch.oo1sjRSk.js","_app/immutable/chunks/index.LaUBdqls.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.9asjx_8T.js","_app/immutable/chunks/entry.ZVyOfNZo.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.ToeP0oEQ.js","_app/immutable/chunks/stores.O_U5iIhZ.js","_app/immutable/chunks/Card.S1YCyonB.js","_app/immutable/chunks/NavList.qFea9d_S.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/stores.DnhZXbuE.js"];
export const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
export const fonts = [];
