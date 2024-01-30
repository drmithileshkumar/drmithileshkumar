import * as universal from '../entries/pages/(general)/_page.js';

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/27.gTviWfeT.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.3Wex8s3Q.js","_app/immutable/chunks/stores.Bs1j_UiF.js","_app/immutable/chunks/index.dpPe8Tdf.js","_app/immutable/chunks/entry.JiEGjc9j.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/ActionIcons.LVYQUx0w.js","_app/immutable/chunks/spread.rEx3vLA9.js"];
export const stylesheets = ["_app/immutable/assets/27.6QS-aB0a.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
export const fonts = [];
