import { c as create_ssr_component, v as validate_component, o as compute_rest_props, k as add_attribute, h as spread, i as escape_object } from './index-2bbd6063.js';

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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1t8zvj9_START -->${$$result.title = `<title>Questions</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/iit"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-1t8zvj9_END -->`, ""}
<article><h1>Previous Year Problems
    </h1>
    
    ${validate_component(Link, "Link").$$render($$result, { href: `/iit/maths` }, {}, {
    default: () => {
      return `Mathematics`;
    }
  })}
    ${validate_component(Link, "Link").$$render($$result, { href: "/iit/conic" }, {}, {
    default: () => {
      return `Conic Section`;
    }
  })}
    <br></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a4541af3.js.map
