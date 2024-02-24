import * as universal from '../entries/pages/(general)/practice/_page.js';

export const index = 255;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/practice/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/practice/+page.js";
export const imports = ["_app/immutable/nodes/255.FA8xUYLc.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js","_app/immutable/chunks/entry.-ApMFuv1.js","_app/immutable/chunks/index.dbCRPIkP.js"];
export const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/Practice.5SCwWus9.css"];
export const fonts = [];
