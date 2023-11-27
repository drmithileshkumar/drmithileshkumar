import * as universal from '../entries/pages/(general)/_page.js';

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/27.438b9b9a.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2acbf742.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.4b8c7447.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/ActionIcons.80c2870e.js"];
export const stylesheets = ["_app/immutable/assets/27.7045e312.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
export const fonts = [];
