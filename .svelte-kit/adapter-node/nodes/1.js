

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8290e5dc.js","_app/immutable/chunks/index.1abf499d.js","_app/immutable/chunks/stores.111c2733.js","_app/immutable/chunks/singletons.8b8bdd45.js","_app/immutable/chunks/index.7a5634e6.js","_app/immutable/chunks/paths.bb34ef4e.js"];
export const stylesheets = [];
export const fonts = [];
