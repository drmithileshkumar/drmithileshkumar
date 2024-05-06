import { s as subscribe, b as set_store_value } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, j as each, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/Suffix.js";
import { T as TopAppBar } from "../../../../chunks/TopAppBar.js";
import { R as Row, S as Section } from "../../../../chunks/Title.js";
import { I as IconButton } from "../../../../chunks/IconButton.js";
import { L as List, I as Item } from "../../../../chunks/Item.js";
import { T as Text, P as PrimaryText, S as SecondaryText, M as Meta } from "../../../../chunks/Subheader.js";
import { G as Graphic } from "../../../../chunks/Graphic.js";
import { c as currentPath, s as showLeft } from "../../../../chunks/stores2.js";
const css = {
  code: "article.svelte-18id17l{width:100%}header.svelte-18id17l{margin-bottom:1.5em}.messages.svelte-18id17l{display:flex;flex-direction:column;gap:1.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Textfield from \\"@smui/textfield\\";\\r\\n    import HelperText from \\"@smui/textfield/helper-text\\";\\r\\n    import TopAppBar, { Row, Section, Title } from \\"@smui/top-app-bar\\";\\r\\n    import IconButton from \\"@smui/icon-button\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import {showLeft} from '$lib/stores';\\r\\n    import { currentPath } from \\"$lib/stores.js\\";\\r\\n    $currentPath = 'Settings';\\r\\n    let options = [\\r\\n        {\\r\\n            name: \\"Bruce Willis\\",\\r\\n            description: \\"Actor\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Austin Powers\\",\\r\\n            description: \\"Fictional Character\\",\\r\\n            disabled: true,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Thomas Edison\\",\\r\\n            description: \\"Inventor\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Stephen Hawking\\",\\r\\n            description: \\"Scientist\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n    ];\\r\\n    let selection = \\"Stephen Hawking\\";\\r\\n    // This value is updated when the component is initialized, based on the\\r\\n    // selected Item's \`selected\` prop.\\r\\n    let selectionIndex = undefined;\\r\\n    \\r\\n<\/script>\\r\\n<svelte:head>\\r\\n    <title>Settings</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://mathril.com/settings\\" />\\r\\n    <meta name=\\"description\\" content=\\"Settings\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <header>\\r\\n        <TopAppBar variant=\\"static\\" color=\\"secondary\\">\\r\\n            <Row>\\r\\n                <Section>\\r\\n                    <IconButton class=\\"material-icons\\" on:click={() => $showLeft = !$showLeft}>menu</IconButton>\\r\\n                </Section>\\r\\n                <Section align=\\"end\\" toolbar>\\r\\n                    <IconButton class=\\"material-icons\\" aria-label=\\"Settings\\"\\r\\n                        >settings</IconButton\\r\\n                    >\\r\\n                    <IconButton class=\\"material-icons\\" aria-label=\\"Cancel\\"\\r\\n                        >close</IconButton\\r\\n                    >\\r\\n                </Section>\\r\\n            </Row>\\r\\n        </TopAppBar>\\r\\n    </header>\\r\\n    <div class=\\"photos\\">\\r\\n        <div class=\\"banner\\" />\\r\\n        <div class=\\"profile\\" />\\r\\n    </div>\\r\\n    <div class=\\"messages\\">\\r\\n        <List\\r\\n            class=\\"demo-list\\"\\r\\n            twoLine\\r\\n            avatarList\\r\\n            singleSelection\\r\\n            bind:selectedIndex={selectionIndex}\\r\\n        >\\r\\n            {#each options as item}\\r\\n                <Item\\r\\n                    on:SMUI:action={() => (selection = item.name)}\\r\\n                    disabled={item.disabled}\\r\\n                    selected={selection === item.name}\\r\\n                >\\r\\n                    <Graphic\\r\\n                        style=\\"background-image: url(https://place-hold.it/40x40?text={item.name\\r\\n                            .split(' ')\\r\\n                            .map((val) => val.substring(0, 1))\\r\\n                            .join('')}&fontsize=16);\\"\\r\\n                    />\\r\\n                    <Text>\\r\\n                        <PrimaryText>{item.name}</PrimaryText>\\r\\n                        <SecondaryText>{item.description}</SecondaryText>\\r\\n                    </Text>\\r\\n                    <Meta class=\\"material-icons\\">info</Meta>\\r\\n                </Item>\\r\\n            {/each}\\r\\n        </List>\\r\\n    </div>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 100%;\\r\\n    }\\r\\n    header {\\r\\n        margin-bottom: 1.5em;\\r\\n    }\\r\\n    .messages {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1.5em;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwGI,sBAAQ,CACJ,KAAK,CAAE,IACX,CACA,qBAAO,CACH,aAAa,CAAE,KACnB,CACA,wBAAU,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $$unsubscribe_showLeft;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => value);
  set_store_value(currentPath, $currentPath = "Settings", $currentPath);
  let options = [
    {
      name: "Bruce Willis",
      description: "Actor",
      disabled: false
    },
    {
      name: "Austin Powers",
      description: "Fictional Character",
      disabled: true
    },
    {
      name: "Thomas Edison",
      description: "Inventor",
      disabled: false
    },
    {
      name: "Stephen Hawking",
      description: "Scientist",
      disabled: false
    }
  ];
  let selection = "Stephen Hawking";
  let selectionIndex = void 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-2fimnv_START -->${$$result.title = `<title>Settings</title>`, ""}<link rel="canonical" href="https://mathril.com/settings"><meta name="description" content="Settings"><!-- HEAD_svelte-2fimnv_END -->`, ""} <article class="svelte-18id17l"><header class="svelte-18id17l">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "static", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu`;
                  }
                })}`;
              }
            })} ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Settings"
                  },
                  {},
                  {
                    default: () => {
                      return `settings`;
                    }
                  }
                )} ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Cancel"
                  },
                  {},
                  {
                    default: () => {
                      return `close`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}</header> <div class="photos" data-svelte-h="svelte-fkg3rp"><div class="banner"></div> <div class="profile"></div></div> <div class="messages svelte-18id17l">${validate_component(List, "List").$$render(
      $$result,
      {
        class: "demo-list",
        twoLine: true,
        avatarList: true,
        singleSelection: true,
        selectedIndex: selectionIndex
      },
      {
        selectedIndex: ($$value) => {
          selectionIndex = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(options, (item) => {
            return `${validate_component(Item, "Item").$$render(
              $$result,
              {
                disabled: item.disabled,
                selected: selection === item.name
              },
              {},
              {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render(
                    $$result,
                    {
                      style: "background-image: url(https://place-hold.it/40x40?text=" + item.name.split(" ").map((val) => val.substring(0, 1)).join("") + "&fontsize=16);"
                    },
                    {},
                    {}
                  )} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item.name)}`;
                        }
                      })} ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item.description)}`;
                        }
                      })} `;
                    }
                  })} ${validate_component(Meta, "Meta").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `info`;
                    }
                  })} `;
                }
              }
            )}`;
          })}`;
        }
      }
    )}</div> </article>`;
  } while (!$$settled);
  $$unsubscribe_currentPath();
  $$unsubscribe_showLeft();
  return $$rendered;
});
export {
  Page as default
};
