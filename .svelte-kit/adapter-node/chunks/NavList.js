import { c as create_ssr_component, e as escape, k as add_attribute, p as each, v as validate_component } from "./ssr.js";
import { a as classAdderBuilder } from "./ActionIcons.js";
import "./client.js";
import "./stores3.js";
const Text = classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
const css = {
  code: "button.svelte-meh56p{background:url(/tutorial/icons/folder.svg) 0 0.1em no-repeat;background-size:1em 1em;color:currentColor;font-weight:bold;cursor:pointer;border:none;margin:0 0 0 -0.4em}ul.svelte-meh56p{padding:0.2em 0 0 0.5em;margin:0 0 0 0.5em;list-style:none;border-left:1px solid rgba(128, 128, 128, 0.4)}li.svelte-meh56p{padding:0.2em 0}a.svelte-meh56p{text-decoration:none}",
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
  return `<span style="display:flex;flex-direction:row;gap:0.2em;"><button class="material-symbols-outlined svelte-meh56p">${escape(expanded ? "expand_less" : "expand_more")}</button> <a${add_attribute("href", url, 0)} style="font-weight: bold" class="svelte-meh56p">${escape(name)}</a></span> ${expanded ? `<ul class="svelte-meh56p">${each(topics, (topic) => {
    return `<li class="svelte-meh56p">${topic.topics ? `${validate_component(NavList, "svelte:self").$$render($$result, Object.assign({}, topic), {}, {})}` : `<a${add_attribute("href", topic.url, 0)} class="svelte-meh56p">${escape(topic.name)}</a>`} </li>`;
  })}</ul>` : ``}`;
});
export {
  NavList as N,
  Text as T
};
