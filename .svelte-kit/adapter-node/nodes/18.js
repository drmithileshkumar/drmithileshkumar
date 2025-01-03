import * as universal from '../entries/pages/(general)/_page.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(general)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(general)/+page.js";
export const imports = ["_app/immutable/nodes/18.DlgW9-z4.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DDynXUZ0.js","_app/immutable/chunks/index.DnYThXIE.js","_app/immutable/chunks/ripple.CM997ajP.js","_app/immutable/chunks/ActionIcons.rKvm5GeB.js","_app/immutable/chunks/classAdderBuilder.C1qMRX2R.js","_app/immutable/chunks/SmuiElement.niKK9SEg.js","_app/immutable/chunks/stores.C4YY6XNo.js","_app/immutable/chunks/index.BNQMCvwE.js"];
export const stylesheets = ["_app/immutable/assets/18.CRZ-FvEo.css"];
export const fonts = [];
