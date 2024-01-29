import * as universal from '../entries/pages/(general)/_page.js';

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/27.s8upjCSD.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.YWuCqLZx.js","_app/immutable/chunks/index._dLxV_ys.js","_app/immutable/chunks/stores.J_TcoIh4.js","_app/immutable/chunks/index.20hFJ42h.js","_app/immutable/chunks/entry.GwJ0dDFU.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/ActionIcons.uva-frad.js","_app/immutable/chunks/spread.rEx3vLA9.js"];
export const stylesheets = ["_app/immutable/assets/27.6QS-aB0a.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
export const fonts = [];
