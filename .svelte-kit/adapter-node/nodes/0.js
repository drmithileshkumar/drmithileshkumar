

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.WB_SXqfV.js","_app/immutable/chunks/23.CGjAFIG8.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js"];
export const stylesheets = [];
export const fonts = [];
