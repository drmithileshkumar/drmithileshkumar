import * as universal from '../entries/pages/(general)/_page.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/17.BgY3K8An.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js","_app/immutable/chunks/stores.D_oEcuB4.js","_app/immutable/chunks/index.BSKKeNIs.js"];
export const stylesheets = ["_app/immutable/assets/17.BtcMq5Wi.css"];
export const fonts = [];
