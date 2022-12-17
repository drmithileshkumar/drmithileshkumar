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
const file = '_app/immutable/components/pages/practice/_page.svelte-d053b67e.js';
const imports = ["_app/immutable/components/pages/practice/_page.svelte-d053b67e.js","_app/immutable/chunks/index-6e1b3778.js","_app/immutable/chunks/stores-23f020e3.js","_app/immutable/chunks/index-8b10ec67.js","_app/immutable/modules/pages/practice/_page.js-3e937eca.js","_app/immutable/chunks/_page-1e2ef877.js"];
const stylesheets = ["_app/immutable/assets/_page-7f2b6be5.css","_app/immutable/assets/Link-e8543c1a.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=15-683b1f4c.js.map
