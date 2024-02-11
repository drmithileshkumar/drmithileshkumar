import * as universal from '../entries/pages/(general)/notes/maths/_page.js';

export const index = 101;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/notes/maths/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/notes/maths/+page.js";
export const imports = ["_app/immutable/nodes/101.rLmE2ixC.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.wYmonAyn.js","_app/immutable/chunks/index.AwdIdbL-.js","_app/immutable/chunks/entry.FITudA22.js","_app/immutable/chunks/index.KLghjZkg.js"];
export const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
export const fonts = [];
