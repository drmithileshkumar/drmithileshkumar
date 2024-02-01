import * as universal from '../entries/pages/(general)/notes/_page.js';

export const index = 90;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/notes/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/notes/+page.js";
export const imports = ["_app/immutable/nodes/90.INYbgafs.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler._OuDP6UF.js","_app/immutable/chunks/index.69cNLXHD.js","_app/immutable/chunks/Link.bLa9TCx6.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/entry.wTYUc-WC.js","_app/immutable/chunks/index.ymjMDM6_.js"];
export const stylesheets = ["_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
export const fonts = [];
