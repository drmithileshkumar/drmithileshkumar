import * as server from '../entries/pages/(vectorial)/vectorial/_layout.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(vectorial)/vectorial/+layout.server.js";
export const imports = ["_app/immutable/nodes/9.D_dm71Cj.js","_app/immutable/chunks/9.3960FGsk.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js"];
export const stylesheets = [];
export const fonts = [];
