import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.J_tRrkAS.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.S991rHMd.js","_app/immutable/chunks/index.sBc_q6PL.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.yn8r1B33.js","_app/immutable/chunks/entry.i_tqfJ-d.js","_app/immutable/chunks/index.ymjMDM6_.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.Fwii--6K.js","_app/immutable/chunks/stores.KcX466m2.js","_app/immutable/chunks/Card.n05XP32M.js","_app/immutable/chunks/NavList.xYbcP2TG.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/stores.lN3I2KMI.js"];
export const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
export const fonts = [];
