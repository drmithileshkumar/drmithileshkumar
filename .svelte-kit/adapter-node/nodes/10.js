import * as server from '../entries/pages/(vectorial)/vectorial/_layout.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(vectorial)/vectorial/+layout.server.js";
export const imports = ["_app/immutable/nodes/10.ApabLo5a.js","_app/immutable/chunks/Ck0RlCoE.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js"];
export const stylesheets = [];
export const fonts = [];
