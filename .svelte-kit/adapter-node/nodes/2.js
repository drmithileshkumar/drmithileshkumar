

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(about)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5f8ef950.js","_app/immutable/chunks/index.1abf499d.js"];
export const stylesheets = [];
export const fonts = [];
