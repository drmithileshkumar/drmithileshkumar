import { c as create_ssr_component, g as compute_rest_props, f as add_attribute, h as spread, i as escape_object, v as validate_component } from "../../../chunks/index-5c9f81d1.js";
/* empty css                                                           */const css = {
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
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com/questions`
    };
  }
  return { props: {} };
}
const Questions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Questions</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/questions"}" data-svelte="svelte-pek8as"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}" data-svelte="svelte-pek8as">`, ""}
<article><h1>High quality practice problems
    </h1>
    
    <h2>Physics</h2>
    ${validate_component(Link, "Link").$$render($$result, { href: `/questions/physics` }, {}, {
    default: () => {
      return `Problems in physics`;
    }
  })}</article>`;
});
export { Questions as default, load };
