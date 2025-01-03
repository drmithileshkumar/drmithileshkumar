import * as server from '../entries/pages/(vectorial)/vectorial/_layout.server.js';

export const index = 23;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(vectorial)/vectorial/+layout.server.js";
export const imports = ["_app/immutable/nodes/23.WB_SXqfV.js","_app/immutable/chunks/23.CGjAFIG8.js","_app/immutable/chunks/scheduler.DhWV7ypx.js","_app/immutable/chunks/index.V8m0JAxO.js"];
export const stylesheets = [];
export const fonts = [];
