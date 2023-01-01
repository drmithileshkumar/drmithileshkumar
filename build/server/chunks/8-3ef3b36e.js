async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com${url.pathname}`
    };
  }
  return {
    props: {}
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
const component = async () => (await import('./_page.svelte-110ac58c.js')).default;
const file = '_app/immutable/components/pages/iit/conic/_page.svelte-156c4293.js';
const imports = ["_app/immutable/components/pages/iit/conic/_page.svelte-156c4293.js","_app/immutable/chunks/index-9fb15683.js","_app/immutable/chunks/stores-ec976e60.js","_app/immutable/chunks/singletons-4d016993.js","_app/immutable/chunks/index-ea2f90c7.js","_app/immutable/chunks/ripple-1a7c2c49.js","_app/immutable/chunks/Canves-8ff7c84d.js","_app/immutable/modules/pages/iit/conic/_page.js-867b53d4.js","_app/immutable/chunks/_page-962e2290.js"];
const stylesheets = ["_app/immutable/assets/_page-31554461.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=8-3ef3b36e.js.map
