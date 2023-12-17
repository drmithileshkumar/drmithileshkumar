

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.89fca294.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.28574c78.js","_app/immutable/chunks/singletons.d8451cfe.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.5be67630.js"];
export const stylesheets = [];
export const fonts = [];
