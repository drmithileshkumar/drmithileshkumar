

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(about)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1jkDJyBF.js","_app/immutable/chunks/scheduler.f-IiUdrl.js","_app/immutable/chunks/index.7r8AOLel.js"];
export const stylesheets = [];
export const fonts = [];
