

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f775b0de.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.f36b4a77.js","_app/immutable/chunks/singletons.81a3083c.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.d7f861c4.js"];
export const stylesheets = [];
export const fonts = [];
