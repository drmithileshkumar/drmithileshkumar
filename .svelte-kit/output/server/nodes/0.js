

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D0IVq6QR.js","_app/immutable/chunks/dNH9fn2G.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js"];
export const stylesheets = [];
export const fonts = [];
