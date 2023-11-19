import * as universal from '../entries/pages/(general)/iit/_page.js';

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/iit/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/iit/+page.js";
export const imports = ["_app/immutable/nodes/25.ad27d3f6.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.1abf499d.js","_app/immutable/chunks/Link.8c18bdf1.js","_app/immutable/chunks/paths.bb34ef4e.js"];
export const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
