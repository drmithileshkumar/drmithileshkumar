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

const index = 32;
const component = async () => (await import('./_page.svelte-16b6db45.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-8f5b00b3.js';
const imports = ["_app/immutable/components/pages/_page.svelte-8f5b00b3.js","_app/immutable/chunks/index-d6f2153b.js","_app/immutable/chunks/stores-12920cee.js","_app/immutable/chunks/index-00232363.js","_app/immutable/chunks/navigation-c7a35626.js","_app/immutable/chunks/singletons-38a56914.js","_app/immutable/chunks/ripple-d6af89fa.js","_app/immutable/modules/pages/_page.js-a4eef2c3.js","_app/immutable/chunks/index-323790f7.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/_page-83e153e3.js"];
const stylesheets = ["_app/immutable/assets/_page-bfb833bd.css","_app/immutable/assets/Practice-5698baa0.css","_app/immutable/assets/Message-1e964222.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=32-87516327.js.map
