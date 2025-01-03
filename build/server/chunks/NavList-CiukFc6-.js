import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, i as each } from './ssr2-q3O0l93f.js';
import { L as List, I as Item } from './Item-Cixi8uf3.js';
import { T as Text } from './Subheader-BV9F6O0P.js';
import { G as Graphic } from './Graphic-BjEt0ZHi.js';
import { C as CommonIcon } from './Svg-BUOACmlE.js';
import { I as IconButton } from './IconButton-3ebkBHL3.js';
import './client-k3u4ChD_.js';
import './stores-Dd7WnHpz.js';

/* empty css                                      */
const css = {
  code: "a.svelte-1k0a8f0{text-decoration:none}",
  map: `{"version":3,"file":"NavList.svelte","sources":["NavList.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n\\timport Fab from '@smui/fab';\\r\\n\\timport IconButton, { Icon } from '@smui/icon-button';\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { Svg } from '@smui/common';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, navList } from \\"$lib/stores\\";\\r\\n\\timport Ripple from \\"@smui/ripple\\";\\r\\n\\r\\n    export let expanded = false;\\r\\n    export let name;\\r\\n    export let url;\\r\\n    export let topics;\\r\\n    function toggle() {\\r\\n\\t\\texpanded = !expanded;\\r\\n\\t}\\r\\n<\/script>\\r\\n<style>\\r\\n\\tbutton {\\r\\n\\t\\t/* padding: 0 0 0 1em; */\\r\\n\\t\\tbackground: url(/tutorial/icons/folder.svg) 0 0.1em no-repeat;\\r\\n\\t\\tbackground-size: 1em 1em;\\r\\n\\t\\tcolor: currentColor;\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tmargin: 0 0 0 -0.4em;\\r\\n\\t}\\r\\n\\r\\n\\t/* .expanded {\\r\\n\\t\\tbackground-image: \\"url(/tutorial/icons/folder-open.svg)\\";\\r\\n\\t} */\\r\\n\\r\\n\\tul {\\r\\n\\t\\tpadding: 0.2em 0 0 0.5em;\\r\\n\\t\\tmargin: 0 0 0 0.5em;\\r\\n\\t\\tlist-style: none;\\r\\n\\t\\tborder-left: 1px solid rgba(128, 128, 128, 0.4);\\r\\n\\t}\\r\\n\\r\\n\\tli {\\r\\n\\t\\tpadding: 0em 0;\\r\\n\\t}\\r\\n\\t\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<span style=\\"display:flex;flex-direction:row;align-items:center;\\">\\r\\n\\t<IconButton  toggle bind:pressed={expanded}>\\r\\n\\t\\t<Icon class=\\"material-icons\\" on>remove</Icon>\\r\\n\\t\\t<Icon class=\\"material-icons\\">add</Icon>\\r\\n\\t  </IconButton>\\r\\n    <a use:Ripple={{surface: true}} href={url} style='color:currentColor;padding: 0.5em 0;margin:0;width:100%;font-weight: bold'>{name}</a>\\r\\n</span>\\r\\n\\r\\n{#if expanded}\\r\\n\\t<List style=\\"margin:0 0 0 0.5em;box-shadow: -1px 1px 1px rgba(0,0,0,0.1)\\" dense>\\r\\n\\t\\t{#each topics as topic}\\r\\n\\t\\t\\t{#if topic.topics}\\r\\n\\t\\t\\t\\t<svelte:self {...topic} />\\r\\n\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t<Item on:SMUI:action={() => goto(topic.url)}>\\r\\n\\t\\t\\t\\t\\t<Graphic class=\\"material-icons\\">topic</Graphic>\\r\\n\\t\\t\\t\\t\\t<Text>{topic.name}</Text>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\r\\n\\t\\t{/each}\\r\\n\\t</List>\\r\\n\\t<!-- <ul>\\r\\n\\t\\t{#each topics as topic}\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t{#if topic.topics}\\r\\n\\t\\t\\t\\t\\t<svelte:self {...topic} />\\r\\n\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t<a style=\\"font-size:0.8em;\\" href=\\"{topic.url}\\">{topic.name}</a>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t{/each}\\r\\n\\t</ul> -->\\r\\n{/if}"],"names":[],"mappings":"AAuDI,gBAAE,CACE,eAAe,CAAE,IACrB"}`
};
const NavList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded = false } = $$props;
  let { name } = $$props;
  let { url } = $$props;
  let { topics } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0) $$bindings.expanded(expanded);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0) $$bindings.topics(topics);
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

export { NavList as N };
//# sourceMappingURL=NavList-CiukFc6-.js.map
