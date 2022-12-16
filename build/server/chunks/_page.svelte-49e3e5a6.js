import { c as create_ssr_component, v as validate_component, i as compute_rest_props, h as add_attribute, j as spread, k as escape_object } from './index-d64f493b.js';

/* empty css                                                  */const css = {
  code: "a.svelte-h06gar{text-decoration:none;display:flex;justify-content:start;align-items:center;gap:0.3em}.text.svelte-h06gar{display:flex;align-items:center}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "logo"]);
  let { href = "/" } = $$props;
  let { logo = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  $$result.css.add(css);
  return `<a${add_attribute("href", href, 0)} class="${"svelte-h06gar"}">${logo.length === 0 ? `<span${spread([{ class: "material-icons" }, escape_object($$restProps)], { classes: "svelte-h06gar" })}>link</span>` : `<img style="${"height:2em;"}"${add_attribute("src", logo, 0)}${add_attribute("alt", logo, 0)}>`}
    <span${spread([{ class: "text" }, escape_object($$restProps)], { classes: "svelte-h06gar" })}>${slots.default ? slots.default({}) : `
            Home
        `}</span></a>`;
});
async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/questions`
    };
  }
  return { props: {} };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-pek8as_START -->${$$result.title = `<title>Questions</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/questions"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-pek8as_END -->`, ""}
<article><h1>High quality practice problems
    </h1>
    
    <h2>Mathematics</h2>
    ${validate_component(Link, "Link").$$render($$result, { href: `/questions/maths` }, {}, {
    default: () => {
      return `Problems in mathematics`;
    }
  })}</article>`;
});

export { Page as default, load };
//# sourceMappingURL=_page.svelte-49e3e5a6.js.map
