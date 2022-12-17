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
const component = async () => (await import('./_page.svelte-295f2638.js')).default;
const file = '_app/immutable/components/pages/iit/maths/question1/_page.svelte-e73b0310.js';
const imports = ["_app/immutable/components/pages/iit/maths/question1/_page.svelte-e73b0310.js","_app/immutable/chunks/index-6e1b3778.js","_app/immutable/chunks/stores-85dc60bd.js","_app/immutable/chunks/singletons-d07c0307.js","_app/immutable/chunks/index-8b10ec67.js","_app/immutable/chunks/ripple-2c9cc698.js","_app/immutable/chunks/constants-79d6a0a7.js","_app/immutable/modules/pages/iit/maths/question1/_page.js-a3f2a831.js","_app/immutable/chunks/_page-962e2290.js"];
const stylesheets = ["_app/immutable/assets/_page-27a2285c.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=9-059b0633.js.map
