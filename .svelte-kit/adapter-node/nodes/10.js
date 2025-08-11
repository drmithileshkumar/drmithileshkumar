import * as server from '../entries/pages/(vectorial)/vectorial/_layout.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(vectorial)/vectorial/+layout.server.js";
export const imports = ["_app/immutable/nodes/10.D0IVq6QR.js","_app/immutable/chunks/dNH9fn2G.js","_app/immutable/chunks/BxVy82MC.js","_app/immutable/chunks/DonhawEw.js"];
export const stylesheets = [];
export const fonts = [];
