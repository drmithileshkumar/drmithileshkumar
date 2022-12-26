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
const component = async () => (await import('./_page.svelte-e3c87c8d.js')).default;
const file = '_app/immutable/components/pages/iit/conic/_page.svelte-a14c68a3.js';
const imports = ["_app/immutable/components/pages/iit/conic/_page.svelte-a14c68a3.js","_app/immutable/chunks/index-7de01425.js","_app/immutable/chunks/stores-96e71e18.js","_app/immutable/chunks/singletons-475264f0.js","_app/immutable/chunks/index-c32cc651.js","_app/immutable/chunks/ripple-9e3ee767.js","_app/immutable/chunks/Canves-3ae18ed9.js","_app/immutable/modules/pages/iit/conic/_page.js-867b53d4.js","_app/immutable/chunks/_page-67494e69.js"];
const stylesheets = ["_app/immutable/assets/_page-31554461.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=8-503095d5.js.map
