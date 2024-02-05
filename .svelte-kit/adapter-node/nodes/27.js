import * as universal from '../entries/pages/(general)/_page.js';

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/27.DNnUyvdp.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.2m08FdTt.js","_app/immutable/chunks/index.vbnytCL9.js","_app/immutable/chunks/stores.DnhZXbuE.js","_app/immutable/chunks/index.fKG8P8G_.js","_app/immutable/chunks/entry.ZVyOfNZo.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/ActionIcons.GG8dmijt.js","_app/immutable/chunks/spread.rEx3vLA9.js"];
export const stylesheets = ["_app/immutable/assets/27.6QS-aB0a.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
export const fonts = [];
