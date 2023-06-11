import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.9e1faf39.js","_app/immutable/chunks/index.aa11adab.js","_app/immutable/chunks/ActionIcons.df132c2a.js","_app/immutable/chunks/navigation.71b6d0a4.js","_app/immutable/chunks/singletons.5cbc033f.js","_app/immutable/chunks/index.3fa823be.js","_app/immutable/chunks/paths.bf3a73ee.js","_app/immutable/chunks/stores.8ffe4a1d.js"];
export const stylesheets = ["_app/immutable/assets/4.47dda9e1.css","_app/immutable/assets/Link.867ad8ee.css"];
export const fonts = [];
