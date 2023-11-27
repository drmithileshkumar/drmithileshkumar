import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.befdd029.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/ActionIcons.80c2870e.js","_app/immutable/chunks/index.e1ba9106.js","_app/immutable/chunks/navigation.3b408e1d.js","_app/immutable/chunks/singletons.7212e542.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.4b8c7447.js","_app/immutable/chunks/stores.9945872c.js","_app/immutable/chunks/stores.2acbf742.js"];
export const stylesheets = ["_app/immutable/assets/4.404b658f.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
