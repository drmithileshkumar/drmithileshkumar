import * as universal from '../entries/pages/(general)/_page.js';

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/27.poUwjJ57.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.OPFU5seO.js","_app/immutable/chunks/index.np_sXRfl.js","_app/immutable/chunks/stores.9F6itTw0.js","_app/immutable/chunks/index.x-ybsOk2.js","_app/immutable/chunks/entry.zt9YIbQc.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/ActionIcons.Kd4xFtPj.js","_app/immutable/chunks/spread.rEx3vLA9.js"];
export const stylesheets = ["_app/immutable/assets/27.6QS-aB0a.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
export const fonts = [];
