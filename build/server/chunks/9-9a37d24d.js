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

const index = 9;
const component = async () => (await import('./_page.svelte-9beba77c.js')).default;
const file = '_app/immutable/components/pages/iit/maths/question1/_page.svelte-7b90ad01.js';
const imports = ["_app/immutable/components/pages/iit/maths/question1/_page.svelte-7b90ad01.js","_app/immutable/chunks/index-7de01425.js","_app/immutable/chunks/stores-96e71e18.js","_app/immutable/chunks/singletons-475264f0.js","_app/immutable/chunks/index-c32cc651.js","_app/immutable/chunks/ripple-9e3ee767.js","_app/immutable/chunks/constants-79d6a0a7.js","_app/immutable/modules/pages/iit/maths/question1/_page.js-a3f2a831.js","_app/immutable/chunks/_page-962e2290.js"];
const stylesheets = ["_app/immutable/assets/_page-86047927.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=9-9a37d24d.js.map
