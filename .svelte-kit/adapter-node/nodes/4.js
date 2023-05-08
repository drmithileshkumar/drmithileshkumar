import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.ad0a5a85.js","_app/immutable/chunks/index.4c5142a2.js","_app/immutable/chunks/navigation.99c1ca58.js","_app/immutable/chunks/singletons.70b72f07.js","_app/immutable/chunks/index.e53142fc.js","_app/immutable/chunks/stores.e112ccdf.js"];
export const stylesheets = ["_app/immutable/assets/4.c5cfb43a.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
