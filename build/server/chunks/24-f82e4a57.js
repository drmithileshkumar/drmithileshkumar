import { r as redirect } from './index-3fb25cb5.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    throw redirect(301, `https://drmithileshkumar.com`);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 24;
const component = async () => (await import('./_page.svelte-5437020a.js')).default;
const file = '_app/immutable/components/pages/(general)/_page.svelte-ed6ddcdc.js';
const imports = ["_app/immutable/components/pages/(general)/_page.svelte-ed6ddcdc.js","_app/immutable/chunks/index-ade51a35.js","_app/immutable/chunks/stores-cbf9661a.js","_app/immutable/chunks/index-c2cc1873.js","_app/immutable/chunks/navigation-f0428968.js","_app/immutable/chunks/singletons-2c9f5b5d.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/(general)/_page.js-71ce84a7.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-caad7bae.js"];
const stylesheets = ["_app/immutable/assets/_page-08b50bae.css","_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=24-f82e4a57.js.map
