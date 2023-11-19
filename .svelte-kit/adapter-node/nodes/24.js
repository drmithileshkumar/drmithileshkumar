import * as universal from '../entries/pages/(general)/_page.js';

export const index = 24;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/24.944bd744.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.1abf499d.js","_app/immutable/chunks/stores.ace10a88.js","_app/immutable/chunks/index.7a5634e6.js","_app/immutable/chunks/paths.bb34ef4e.js","_app/immutable/chunks/ripple.d6af89fa.js","_app/immutable/chunks/ActionIcons.55fb84fc.js"];
export const stylesheets = ["_app/immutable/assets/24.f4cbe78b.css","_app/immutable/assets/Practice.5698baa0.css","_app/immutable/assets/Message.1e964222.css"];
export const fonts = [];
