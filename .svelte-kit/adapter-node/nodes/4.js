import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.6b74a0b1.js","_app/immutable/chunks/index.83aee1b3.js","_app/immutable/chunks/ActionIcons.db52e67e.js","_app/immutable/chunks/navigation.e7ff8853.js","_app/immutable/chunks/singletons.2140748f.js","_app/immutable/chunks/index.c0198b8b.js","_app/immutable/chunks/stores.d85bd91a.js"];
export const stylesheets = ["_app/immutable/assets/4.47dda9e1.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
