import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.dcda0503.js","_app/immutable/chunks/index.1abf499d.js","_app/immutable/chunks/ActionIcons.55fb84fc.js","_app/immutable/chunks/navigation.f0e81c68.js","_app/immutable/chunks/singletons.8b8bdd45.js","_app/immutable/chunks/index.7a5634e6.js","_app/immutable/chunks/paths.bb34ef4e.js","_app/immutable/chunks/stores.111c2733.js"];
export const stylesheets = ["_app/immutable/assets/4.47dda9e1.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
