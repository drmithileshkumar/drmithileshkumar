import { c as create_ssr_component, j as each, f as add_attribute, e as escape } from "./ssr.js";
/* empty css                                       */
const css = {
  code: ".paths.svelte-16te6qo.svelte-16te6qo{display:flex;align-items:center;flex-wrap:wrap}.paths.svelte-16te6qo a.svelte-16te6qo{text-decoration:none}",
  map: null
};
const Pathlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathComponents;
  let pathUrls;
  let { pathname } = $$props;
  let { origin } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  if ($$props.origin === void 0 && $$bindings.origin && origin !== void 0)
    $$bindings.origin(origin);
  $$result.css.add(css);
  pathComponents = pathname.split("/").map((c, i) => {
    return { id: Math.random(), component: c };
  });
  pathUrls = pathComponents.map((u, index) => {
    let path = origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i].component + "/";
    }
    return path;
  });
  return `<div class="paths svelte-16te6qo">${each(pathComponents, (pathComponent, i) => {
    return `<a${add_attribute("href", pathUrls[i], 0)} class="svelte-16te6qo">${escape(pathComponent.component)}</a> <span class="material-symbols-outlined">${escape(i > 0 && i < pathComponents.length - 1 ? "chevron_right" : "")} </span>`;
  })}</div>`;
});
export {
  Pathlist as P
};
