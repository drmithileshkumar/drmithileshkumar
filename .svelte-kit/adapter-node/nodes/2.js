

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(about)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BKjVgxUj.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js"];
export const stylesheets = [];
export const fonts = [];
