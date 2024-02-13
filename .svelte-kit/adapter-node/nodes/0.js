

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.FMV8qvDc.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js"];
export const stylesheets = [];
export const fonts = [];
