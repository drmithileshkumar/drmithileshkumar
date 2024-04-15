import * as universal from '../entries/pages/(general)/_page.js';

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/27.TqrmU6x1.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/stores.7BCmNEwQ.js","_app/immutable/chunks/index.dbCRPIkP.js","_app/immutable/chunks/entry.PS4LgjnO.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/ActionIcons.1m99DklS.js","_app/immutable/chunks/classAdderBuilder.Fy7yNOSN.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/stores.hUncZlGF.js"];
export const stylesheets = ["_app/immutable/assets/27.BKEKUBge.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Message.ctOi1nG9.css"];
export const fonts = [];
