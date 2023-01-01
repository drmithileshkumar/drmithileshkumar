async function load({ session, fetch, params, url }) {
  console.log("Loading...");
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/iit/maths`
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
const component = async () => (await import('./_page.svelte-76c7c8c6.js')).default;
const file = '_app/immutable/components/pages/iit/maths/_page.svelte-2e003339.js';
const imports = ["_app/immutable/components/pages/iit/maths/_page.svelte-2e003339.js","_app/immutable/chunks/index-9fb15683.js","_app/immutable/chunks/Link-b215c5c5.js","_app/immutable/modules/pages/iit/maths/_page.js-742f1bdf.js","_app/immutable/chunks/_page-e2b5550d.js"];
const stylesheets = ["_app/immutable/assets/Link-e8543c1a.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=8-bf9b6f21.js.map
