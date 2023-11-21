

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(about)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7351951d.js","_app/immutable/chunks/index.2b82be55.js"];
export const stylesheets = [];
export const fonts = [];
