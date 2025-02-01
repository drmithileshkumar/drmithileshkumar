import * as server from '../entries/pages/(vectorial)/vectorial/_layout.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(vectorial)/vectorial/+layout.server.js";
export const imports = ["_app/immutable/nodes/10.T8OBJYrS.js","_app/immutable/chunks/10.B8MSI7f3.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js"];
export const stylesheets = [];
export const fonts = [];
