import * as universal from '../entries/pages/(general)/notes/_page.js';

export const index = 99;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/notes/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/notes/+page.js";
export const imports = ["_app/immutable/nodes/99.mxtAcTi5.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.XN8MnxCc.js","_app/immutable/chunks/index.hIVQ3JUV.js","_app/immutable/chunks/Link.y2FFlfiu.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/entry.3iGz-hzx.js","_app/immutable/chunks/index.D7WnTG5a.js"];
export const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
export const fonts = [];
