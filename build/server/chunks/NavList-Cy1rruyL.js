import { c as create_ssr_component, a as get_current_component, g as getContext, v as validate_component, m as missing_component, h as add_attribute, e as escape, i as each, b as spread, f as escape_object } from './ssr-Cv_bEuJL.js';
import { L as List, I as Item } from './Item-X5iuBhs5.js';
import { T as Text } from './Subheader-BwOM49vC.js';
import { G as Graphic } from './Graphic-CTyan_iC.js';
import { d as compute_rest_props } from './utils-DH7689cv.js';
import { f as forwardEventsBuilder, a as classMap, S as SmuiElement } from './classAdderBuilder-B5RJlVtK.js';
import { I as IconButton } from './IconButton-CpGaokyO.js';
import './client-CjdeEz1m.js';
import './stores2-DCuXQBIu.js';

/* empty css                                      */
const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "i" : void 0 } = $$props;
  const svg = component === Svg;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__icon": context === "button",
            "mdc-fab__icon": context === "fab",
            "mdc-icon-button__icon": context === "icon-button",
            "mdc-icon-button__icon--on": context === "icon-button" && on,
            "mdc-tab__icon": context === "tab",
            "mdc-banner__icon": context === "banner",
            "mdc-segmented-button__icon": context === "segmented-button"
          })
        },
        { "aria-hidden": "true" },
        svg ? { focusable: "false", tabindex: "-1" } : {},
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  if (console && console.warn) {
    console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  }
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const css = {
  code: "a.svelte-1k0a8f0{text-decoration:none}",
  map: `{"version":3,"file":"NavList.svelte","sources":["NavList.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n\\timport Fab from '@smui/fab';\\r\\n\\timport IconButton, { Icon } from '@smui/icon-button';\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { Svg } from '@smui/common';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, navList } from \\"$lib/stores\\";\\r\\n\\timport Ripple from \\"@smui/ripple\\";\\r\\n\\r\\n    export let expanded = false;\\r\\n    export let name;\\r\\n    export let url;\\r\\n    export let topics;\\r\\n    function toggle() {\\r\\n\\t\\texpanded = !expanded;\\r\\n\\t}\\r\\n<\/script>\\r\\n<style>\\r\\n\\tbutton {\\r\\n\\t\\t/* padding: 0 0 0 1em; */\\r\\n\\t\\tbackground: url(/tutorial/icons/folder.svg) 0 0.1em no-repeat;\\r\\n\\t\\tbackground-size: 1em 1em;\\r\\n\\t\\tcolor: currentColor;\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tmargin: 0 0 0 -0.4em;\\r\\n\\t}\\r\\n\\r\\n\\t/* .expanded {\\r\\n\\t\\tbackground-image: \\"url(/tutorial/icons/folder-open.svg)\\";\\r\\n\\t} */\\r\\n\\r\\n\\tul {\\r\\n\\t\\tpadding: 0.2em 0 0 0.5em;\\r\\n\\t\\tmargin: 0 0 0 0.5em;\\r\\n\\t\\tlist-style: none;\\r\\n\\t\\tborder-left: 1px solid rgba(128, 128, 128, 0.4);\\r\\n\\t}\\r\\n\\r\\n\\tli {\\r\\n\\t\\tpadding: 0em 0;\\r\\n\\t}\\r\\n\\t\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<span style=\\"display:flex;flex-direction:row;align-items:center;\\">\\r\\n\\t<IconButton  toggle bind:pressed={expanded}>\\r\\n\\t\\t<Icon class=\\"material-icons\\" on>remove</Icon>\\r\\n\\t\\t<Icon class=\\"material-icons\\">add</Icon>\\r\\n\\t  </IconButton>\\r\\n    <a use:Ripple={{surface: true}} href={url} style='color:currentColor;padding: 0.5em 0;margin:0;width:100%;font-weight: bold'>{name}</a>\\r\\n</span>\\r\\n\\r\\n{#if expanded}\\r\\n\\t<List style=\\"margin:0 0 0 0.5em;box-shadow: -1px 1px 1px rgba(0,0,0,0.1)\\" dense>\\r\\n\\t\\t{#each topics as topic}\\r\\n\\t\\t\\t{#if topic.topics}\\r\\n\\t\\t\\t\\t<svelte:self {...topic} />\\r\\n\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto(topic.url)}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">topic</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>{topic.name}</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\r\\n\\t\\t{/each}\\r\\n\\t</List>\\r\\n\\t<!-- <ul>\\r\\n\\t\\t{#each topics as topic}\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t{#if topic.topics}\\r\\n\\t\\t\\t\\t\\t<svelte:self {...topic} />\\r\\n\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t<a style=\\"font-size:0.8em;\\" href=\\"{topic.url}\\">{topic.name}</a>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t{/each}\\r\\n\\t</ul> -->\\r\\n{/if}"],"names":[],"mappings":"AAuDI,gBAAE,CACE,eAAe,CAAE,IACrB"}`
};
const NavList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded = false } = $$props;
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
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<span style="display:flex;flex-direction:row;align-items:center;">${validate_component(IconButton, "IconButton").$$render(
      $$result,
      { toggle: true, pressed: expanded },
      {
        pressed: ($$value) => {
          expanded = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
            default: () => {
              return `remove`;
            }
          })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `add`;
            }
          })}`;
        }
      }
    )} <a${add_attribute("href", url, 0)} style="color:currentColor;padding: 0.5em 0;margin:0;width:100%;font-weight: bold" class="svelte-1k0a8f0">${escape(name)}</a></span> ${expanded ? `${validate_component(List, "List").$$render(
      $$result,
      {
        style: "margin:0 0 0 0.5em;box-shadow: -1px 1px 1px rgba(0,0,0,0.1)",
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
  } while (!$$settled);
  return $$rendered;
});

export { CommonIcon as C, NavList as N, Svg as S };
//# sourceMappingURL=NavList-Cy1rruyL.js.map
