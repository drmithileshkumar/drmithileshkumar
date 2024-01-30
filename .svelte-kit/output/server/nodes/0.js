

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.4dlz8MQF.js","_app/immutable/chunks/scheduler.Wcy8l203.js","_app/immutable/chunks/index.3Wex8s3Q.js"];
export const stylesheets = [];
export const fonts = [];
