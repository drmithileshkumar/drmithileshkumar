

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bq3DPZqz.js","_app/immutable/chunks/10.W7iUWzrs.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js"];
export const stylesheets = [];
export const fonts = [];
