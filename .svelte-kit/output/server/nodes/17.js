import * as universal from '../entries/pages/(general)/_page.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/17.ClX4b0_L.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/stores.DhuAwEDH.js","_app/immutable/chunks/index.ChKAqM74.js"];
export const stylesheets = ["_app/immutable/assets/17.BtcMq5Wi.css"];
export const fonts = [];
