async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/practice`
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

const index = 15;
const component = async () => (await import('./_page.svelte-ce601b60.js')).default;
const file = '_app/immutable/components/pages/practice/_page.svelte-ba21108c.js';
const imports = ["_app/immutable/components/pages/practice/_page.svelte-ba21108c.js","_app/immutable/chunks/index-7de01425.js","_app/immutable/chunks/stores-a5d0773a.js","_app/immutable/chunks/index-c32cc651.js","_app/immutable/modules/pages/practice/_page.js-3e937eca.js","_app/immutable/chunks/_page-1e2ef877.js"];
const stylesheets = ["_app/immutable/assets/_page-7f2b6be5.css","_app/immutable/assets/Link-e8543c1a.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=15-ea41694f.js.map
