import * as server from '../entries/pages/(general)/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(general)/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.g8fI7-E0.js","_app/immutable/chunks/scheduler.6OEexJ1D.js","_app/immutable/chunks/index.uJtgCTqT.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.uF8zJ3U2.js","_app/immutable/chunks/dispatch.0iSMQIYc.js","_app/immutable/chunks/Ripple.AcwZg7sA.js","_app/immutable/chunks/index.urGhFGCw.js","_app/immutable/chunks/Graphic.UPftp0yf.js","_app/immutable/chunks/Subheader.VZ3qTP_a.js","_app/immutable/chunks/entry.rxdufebz.js","_app/immutable/chunks/index.0JK1PMzr.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/stores.Jl2XUKTY.js","_app/immutable/chunks/Card.nQ0ntBrx.js","_app/immutable/chunks/NavList.6X2gQfz1.js","_app/immutable/chunks/each.v_Jd1uez.js","_app/immutable/chunks/stores.az4gHfxZ.js"];
export const stylesheets = ["_app/immutable/assets/4.Dk2f60qW.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.aMeAxv8b.css"];
export const fonts = [];
