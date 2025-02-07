import * as universal from '../entries/pages/(about)/teaching/_page.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(about)/teaching/_page@teaching.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(about)/teaching/+page.js";
export const imports = ["_app/immutable/nodes/15.ff0vQxwu.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DPwfdX_H.js","_app/immutable/chunks/index.CwTeKo4T.js"];
export const stylesheets = ["_app/immutable/assets/15.CtDl2y-s.css"];
export const fonts = [];
