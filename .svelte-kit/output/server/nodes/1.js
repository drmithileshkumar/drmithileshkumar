

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.165ddb5e.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/stores.19debc6b.js","_app/immutable/chunks/singletons.39b9f956.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.a50c861d.js"];
export const stylesheets = [];
export const fonts = [];
