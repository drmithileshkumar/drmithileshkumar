import * as universal from '../entries/pages/(general)/_page.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/17.BKOUMbPx.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/stores.DhuAwEDH.js","_app/immutable/chunks/index.ChKAqM74.js"];
export const stylesheets = ["_app/immutable/assets/17.DJTsGBLC.css"];
export const fonts = [];
