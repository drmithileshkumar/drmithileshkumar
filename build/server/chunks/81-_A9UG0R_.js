import { r as redirect } from './index-8pACjapJ.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    redirect(301, `https://drmithileshkumar.com${url.pathname}`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 81;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-eGb_vcR_.js')).default;
const universal_id = "src/routes/(general)/courses/quantuminformation1/+page.js";
const imports = ["_app/immutable/nodes/81.iN7ysZqy.js","_app/immutable/chunks/index.qPAo0Isn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.WZMESDHC.js","_app/immutable/chunks/index.5RaDercz.js","_app/immutable/chunks/entry.Wi9Fgxox.js","_app/immutable/chunks/index.JZWwPDI5.js","_app/immutable/chunks/Card.6Z7INVJg.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/ActionIcons.oA2Cwr8z.js","_app/immutable/chunks/NavList.2i26_0Fr.js","_app/immutable/chunks/each.NqGTa2mj.js","_app/immutable/chunks/NavList.svelte_svelte_type_style_lang.pJ7SdKy5.js","_app/immutable/chunks/stores.-1bOnq-o.js"];
const stylesheets = ["_app/immutable/assets/58.hj3E2EKt.css","_app/immutable/assets/Link.mTa6ZPjX.css","_app/immutable/assets/NavList.yy5IVOlJ.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=81-_A9UG0R_.js.map
