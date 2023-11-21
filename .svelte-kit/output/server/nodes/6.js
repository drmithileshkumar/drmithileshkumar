

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/notes/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.6bc2ea9c.js","_app/immutable/chunks/index.2b82be55.js"];
export const stylesheets = [];
export const fonts = [];
