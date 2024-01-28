import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.ZyPN5qE9.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.uva-frad.js","_app/immutable/chunks/index.JynCmtlF.js","_app/immutable/chunks/NavList.nuz226wt.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/entry.SlTVnghT.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.JeTdzoaZ.js","_app/immutable/chunks/stores.W5S7pomO.js","_app/immutable/chunks/Card.7pw2nmLE.js","_app/immutable/chunks/stores.J_TcoIh4.js"];
export const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
export const fonts = [];
