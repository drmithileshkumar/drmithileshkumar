import * as universal from '../entries/pages/(general)/iit/_page.js';

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/iit/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/iit/+page.js";
export const imports = ["_app/immutable/nodes/25.58360dca.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/Link.5af0d6c1.js","_app/immutable/chunks/paths.b703f68a.js"];
export const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
