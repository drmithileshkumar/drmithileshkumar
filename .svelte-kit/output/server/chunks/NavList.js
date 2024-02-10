import { c as create_ssr_component, e as escape, h as add_attribute, v as validate_component, i as each } from "./ssr.js";
import { L as List, I as Item, G as Graphic } from "./Graphic.js";
import { T as Text } from "./Subheader.js";
import "./client.js";
import "./Card.js";
/* empty css                                      */
const css = {
  code: "button.svelte-1k0a8f0{background:url(/tutorial/icons/folder.svg) 0 0.1em no-repeat;background-size:1em 1em;color:currentColor;font-weight:bold;cursor:pointer;border:none;margin:0 0 0 -0.4em}a.svelte-1k0a8f0{text-decoration:none}",
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
  return `<span style="display:flex;flex-direction:row;gap:0.2em;padding: 0.2em 0;"><button class="material-symbols-outlined svelte-1k0a8f0">${escape(expanded ? "expand_less" : "expand_more")}</button> <a${add_attribute("href", url, 0)} style="font-weight: bold" class="svelte-1k0a8f0">${escape(name)}</a></span> ${expanded ? `${validate_component(List, "List").$$render(
    $$result,
    {
      style: "background: rgba(0, 100, 200, 0.05);margin:0 0 0 0.5em;box-shadow: -1px 1px 1px gray",
      dense: true
    },
    {},
    {
      default: () => {
        return `${each(topics, (topic) => {
          return `${topic.topics ? `${validate_component(NavList, "svelte:self").$$render($$result, Object.assign({}, topic), {}, {})}` : `${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `topic`;
                }
              })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(topic.name)}`;
                }
              })} `;
            }
          })}`}`;
        })}`;
      }
    }
  )} ` : ``}`;
});
export {
  NavList as N
};
