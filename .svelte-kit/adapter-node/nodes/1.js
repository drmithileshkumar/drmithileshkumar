

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ed3c99ba.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.2b64632f.js","_app/immutable/chunks/singletons.b8a76623.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.b703f68a.js"];
export const stylesheets = [];
export const fonts = [];
