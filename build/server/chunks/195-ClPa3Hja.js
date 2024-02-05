import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 195;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-EJD759HW.js')).default;
const universal_id = "src/routes/(general)/notes/maths/Sets/The empty set/+page.js";
const imports = ["_app/immutable/nodes/195.ekkU6pa4.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/stores.XBsJh_dx.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/Practice.2adMZti_.js","_app/immutable/chunks/stores.RQW1chcd.js","_app/immutable/chunks/ripple.nJSaNfXx.js","_app/immutable/chunks/common.dD7Xbhr8.js","_app/immutable/chunks/quadratic.4A8ca20j.js","_app/immutable/chunks/stores.SymvUkJw.js","_app/immutable/chunks/entry.Wi9Fgxox.js","_app/immutable/chunks/Image.svelte_svelte_type_style_lang.MbPxpTp9.js","_app/immutable/chunks/index.gBHr9ICE.js","_app/immutable/chunks/H3.brlZG4Ko.js"];
const stylesheets = ["_app/immutable/assets/195._vfbtwtB.css","_app/immutable/assets/Message.ctOi1nG9.css","_app/immutable/assets/Practice.5SCwWus9.css","_app/immutable/assets/Image.R1-0-laC.css","_app/immutable/assets/Div.bOrlhsXY.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=195-ClPa3Hja.js.map
