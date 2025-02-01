import * as universal from '../entries/pages/(general)/_page.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/17.DdPZ7dBx.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/stores.D4EbrjdR.js","_app/immutable/chunks/index.3B1h_P5q.js"];
export const stylesheets = ["_app/immutable/assets/17.DJTsGBLC.css"];
export const fonts = [];
