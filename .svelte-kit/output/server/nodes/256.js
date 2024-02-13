import * as universal from '../entries/pages/(general)/students/_page.js';

export const index = 256;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/students/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/students/+page.js";
export const imports = ["_app/immutable/nodes/256.kK6mo1dl.js","_app/immutable/chunks/scheduler.cQRDEcOs.js","_app/immutable/chunks/index.3X1eH1mp.js","_app/immutable/chunks/Card.0VZDzDAB.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/classAdderBuilder.ijDhO6Jw.js","_app/immutable/chunks/ActionIcons.Nzs3Qx8M.js","_app/immutable/chunks/entry.XppJd6zm.js","_app/immutable/chunks/index.yZBYQTEr.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.JTYDHTYU.js"];
export const stylesheets = ["_app/immutable/assets/256.BKWf8z-r.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Link.mTa6ZPjX.css"];
export const fonts = [];
