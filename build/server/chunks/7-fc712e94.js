async function load({ session, fetch, params, url }) {
  console.log("Loading...");
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/iit`
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

const index = 7;
const component = async () => (await import('./_page.svelte-2135450b.js')).default;
const file = '_app/immutable/components/pages/iit/_page.svelte-8be83755.js';
const imports = ["_app/immutable/components/pages/iit/_page.svelte-8be83755.js","_app/immutable/chunks/index-7de01425.js","_app/immutable/modules/pages/iit/_page.js-7e464937.js","_app/immutable/chunks/_page-d60006af.js"];
const stylesheets = ["_app/immutable/assets/Link-e8543c1a.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=7-fc712e94.js.map
