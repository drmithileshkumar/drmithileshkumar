import { c as create_ssr_component, e as escape, l as add_attribute, p as each, v as validate_component } from './ssr-QYhyCQFk.js';
import './Subheader-vGMjMlem.js';
import './client-_MkdHwD5.js';
import './Card-sDgXjRKd.js';

/* empty css                                      */
const css = {
  code: "button.svelte-1e110x1{background:url(/tutorial/icons/folder.svg) 0 0.1em no-repeat;background-size:1em 1em;color:currentColor;font-weight:bold;cursor:pointer;border:none;margin:0 0 0 -0.4em}ul.svelte-1e110x1{padding:0.2em 0 0 0.5em;margin:0 0 0 0.5em;list-style:none;border-left:1px solid rgba(128, 128, 128, 0.4)}li.svelte-1e110x1{padding:0em 0}a.svelte-1e110x1{text-decoration:none}a.svelte-1e110x1:hover{background-color:bisque}",
  map: null
};
const NavList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded = true } = $$props;
  let { name } = $$props;
  let { url } = $$props;
  let { topics } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  $$result.css.add(css);
  return `<span style="display:flex;flex-direction:row;gap:0.2em;font-size:0.8em;"><button class="material-symbols-outlined svelte-1e110x1">${escape(expanded ? "expand_less" : "expand_more")}</button> <a${add_attribute("href", url, 0)} style="font-weight: bold" class="svelte-1e110x1">${escape(name)}</a></span> ${expanded ? `<ul class="svelte-1e110x1">${each(topics, (topic) => {
    return `<li class="svelte-1e110x1">${topic.topics ? `${validate_component(NavList, "svelte:self").$$render($$result, Object.assign({}, topic), {}, {})}` : `<a style="font-size:0.8em;"${add_attribute("href", topic.url, 0)} class="svelte-1e110x1">${escape(topic.name)}</a>`} </li>`;
  })}</ul>` : ``}`;
});

export { NavList as N };
//# sourceMappingURL=NavList-5oz3h2MX.js.map
