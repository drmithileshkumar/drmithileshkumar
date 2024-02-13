

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(about)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.FMV8qvDc.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js"];
export const stylesheets = [];
export const fonts = [];
