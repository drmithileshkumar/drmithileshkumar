import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.4acf755d.js","_app/immutable/chunks/index.2b82be55.js","_app/immutable/chunks/ActionIcons.80c2870e.js","_app/immutable/chunks/index.e1ba9106.js","_app/immutable/chunks/navigation.2124989f.js","_app/immutable/chunks/singletons.b8a76623.js","_app/immutable/chunks/index.d152e9bf.js","_app/immutable/chunks/paths.b703f68a.js","_app/immutable/chunks/stores.2b64632f.js","_app/immutable/chunks/stores.2acbf742.js"];
export const stylesheets = ["_app/immutable/assets/4.404b658f.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
