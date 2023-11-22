import * as universal from '../entries/pages/(general)/notes/_page.js';

export const index = 37;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/notes/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/notes/+page.js";
export const imports = ["_app/immutable/nodes/37.8c3f39dd.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/Link.5af0d6c1.js","_app/immutable/chunks/paths.d7f861c4.js"];
export const stylesheets = ["_app/immutable/assets/Message.1e964222.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
