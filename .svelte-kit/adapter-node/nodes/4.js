import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.2f98719e.js","_app/immutable/chunks/index.6422d2b8.js","_app/immutable/chunks/navigation.b2e4cf9a.js","_app/immutable/chunks/singletons.edf20d34.js","_app/immutable/chunks/index.ece20a09.js","_app/immutable/chunks/stores.22400e87.js"];
export const stylesheets = ["_app/immutable/assets/4.47dda9e1.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
