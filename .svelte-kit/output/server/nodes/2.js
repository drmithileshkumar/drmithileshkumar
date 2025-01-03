

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(about)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D6h7UAn-.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js"];
export const stylesheets = [];
export const fonts = [];
