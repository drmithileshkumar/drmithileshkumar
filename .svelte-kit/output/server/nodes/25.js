import * as universal from '../entries/pages/(about)/teaching/_page.js';

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(about)/teaching/_page@teaching.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(about)/teaching/+page.js";
export const imports = ["_app/immutable/nodes/25.307eca33.js","_app/immutable/chunks/index.c6708bed.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.2b82be55.js"];
export const stylesheets = ["_app/immutable/assets/25.bcdb0b9d.css"];
export const fonts = [];
