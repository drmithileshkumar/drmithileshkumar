import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.fRYHaD0X.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.oA2Cwr8z.js","_app/immutable/chunks/dispatch.4-F2D4NY.js","_app/immutable/chunks/Ripple.hUntPd1L.js","_app/immutable/chunks/index.gBHr9ICE.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.pJ7SdKy5.js","_app/immutable/chunks/entry.p87wJVPD.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.QWNjzraU.js","_app/immutable/chunks/stores.-1bOnq-o.js","_app/immutable/chunks/Card.6Z7INVJg.js","_app/immutable/chunks/NavList.cp2QOwDX.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/stores.XBsJh_dx.js"];
export const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
export const fonts = [];
