

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b21fbed0.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.9945872c.js","_app/immutable/chunks/singletons.7212e542.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.4b8c7447.js"];
export const stylesheets = [];
export const fonts = [];
