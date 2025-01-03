import { c as create_ssr_component, v as validate_component, e as escape, b as get_current_component, d as spread, f as escape_attribute_value, h as escape_object, a as add_attribute } from './ssr2-q3O0l93f.js';
import './ActionIcons-BJ7xikju.js';
import { B as Button } from './Button-DRRmGjqZ.js';
import { e as compute_rest_props } from './utils-iZWwlC2F.js';
import { f as forwardEventsBuilder, c as classMap } from './SmuiElement-DA9PKsv2.js';
import { C as CommonLabel } from './CommonLabel-BuPx8XxF.js';
import { C as CommonIcon } from './Svg-BUOACmlE.js';
import { M as Menu } from './Menu-ClXMl2Su.js';
import './SelectionGroupIcon-UHPuZTt8.js';
import { L as List, I as Item } from './Item-Cixi8uf3.js';
import { T as Text } from './Subheader-BV9F6O0P.js';
import './Suffix-CzM54Q0Q.js';
import { I as Input } from './Input-5dxW-kZS.js';
import { P as Paper } from './Paper-1ZSKCoz-.js';
import './Subtitle-CMfDv7DA.js';
import { F as Fab } from './Fab-BRqAjlUV.js';
import './client-k3u4ChD_.js';
import './classAdderBuilder-B9W9nXDD.js';
import './Ripple-Zq_D_mxy.js';
import './MenuSurface-BCKcg_TP.js';
import './Graphic-BjEt0ZHi.js';
import './dispatch-BOSWPsEc.js';
import './exports-kR70XCWV.js';

const Group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "text" } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-button__group": true,
          "smui-button__group--raised": variant === "raised"
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const css = {
  code: "article.svelte-rhxy8{display:flex;flex-direction:column;gap:0.5em}.solo-demo-container.svelte-rhxy8{padding:36px 18px;border:1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1))}.solo-container.svelte-rhxy8{display:flex;justify-content:center;align-items:center}.svelte-rhxy8 .solo-paper{display:flex;align-items:center;flex-grow:1;max-width:600px;margin:0 12px;padding:0 12px;height:48px}.svelte-rhxy8 .solo-paper > *{display:inline-block;margin:0 12px}.svelte-rhxy8 .solo-input{flex-grow:1;color:currentColor}.svelte-rhxy8 .solo-input::placeholder{opacity:0.6}.svelte-rhxy8 .solo-fab{flex-shrink:0}img.svelte-rhxy8{width:100%;height:100%;border-radius:50%;overflow:hidden}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Card from '@smui/card';\\r\\n    import Button, { Group, GroupItem, Label, Icon } from '@smui/button';\\r\\n    import Menu from '@smui/menu';\\r\\n    import List, { Item,\\r\\n            Graphic,\\r\\n            Meta,\\r\\n            Text,\\r\\n            PrimaryText,\\r\\n            SecondaryText } from '@smui/list';\\r\\n    import { Input } from '@smui/textfield';\\r\\n    import Paper from '@smui/paper';\\r\\n    import Fab from '@smui/fab';\\r\\n    import { goto } from '$app/navigation';\\r\\n    \\r\\n    let menu, showResult = false, list, selectionIndex;\\r\\n    let searchKey = 'name', value, searchProfiles = [], searchResult = [], profilePicReader;\\r\\n    const handleKeyDown = (event) => {\\r\\n        if (event.key === 'Enter') {\\r\\n            doSearch();\\r\\n        }\\r\\n    }\\r\\n    const doSearch = async () => {\\r\\n        const resSearch = await fetch(\`/api/search?searchKey=\${searchKey}&value=\${value}\`);\\r\\n        if(!resSearch.ok) {\\r\\n            searchResult = []\\r\\n        } else {\\r\\n            searchResult = await resSearch.json();\\r\\n            for(let i = 0; i < searchResult.length; i++) {\\r\\n                await getProfile(searchResult[i].publicID)\\r\\n            }\\r\\n            searchProfiles = searchProfiles;\\r\\n        }\\r\\n        showResult = true;\\r\\n    }\\r\\n    const getProfile = async (id) => {\\r\\n        const profileRes = await fetch(\`/api/\${id}/profilepic\`);\\r\\n        if(!profileRes.ok) searchProfiles[id] = '';\\r\\n        let profilepicData = await profileRes.blob();\\r\\n        profilePicReader = new FileReader();\\r\\n        profilePicReader.readAsDataURL(profilepicData);\\r\\n        profilePicReader.onload = (e) => {\\r\\n            searchProfiles[id] = e.target.result;\\r\\n        };\\r\\n    }\\r\\n<\/script>\\r\\n<article>\\r\\n    <div class=\\"solo-demo-container solo-container\\">\\r\\n        <Group variant=\\"raised\\">\\r\\n            <Button variant=\\"raised\\">\\r\\n                <Label>{searchKey.toUpperCase()}</Label>\\r\\n            </Button>\\r\\n            <div use:GroupItem>\\r\\n                <Button\\r\\n                    on:click={() => menu.setOpen(true)}\\r\\n                    variant=\\"raised\\"\\r\\n                    style=\\"padding: 0; min-width: 36px;\\"\\r\\n                    >\\r\\n                    <Icon class=\\"material-icons\\" style=\\"margin: 0;\\">arrow_drop_down</Icon>\\r\\n                </Button>\\r\\n                <Menu bind:this={menu} anchorCorner=\\"TOP_LEFT\\">\\r\\n                    <List>\\r\\n                        <Item on:SMUI:action={() => searchKey = 'name'}>\\r\\n                            <Text>Name</Text>\\r\\n                        </Item>\\r\\n                        <Item on:SMUI:action={() => searchKey = 'publicID'}>\\r\\n                            <Text>Public ID</Text>\\r\\n                        </Item>\\r\\n                        <Item on:SMUI:action={() => searchKey = 'city'}>\\r\\n                            <Text>City</Text>\\r\\n                        </Item>\\r\\n                        <!-- <Separator />\\r\\n                        <Item on:SMUI:action={() => clicked++}>\\r\\n                            <Text>Thing 3</Text>\\r\\n                        </Item> -->\\r\\n                    </List>\\r\\n                </Menu>\\r\\n            </div>\\r\\n        </Group>\\r\\n        <Paper class=\\"solo-paper\\" elevation={6}>\\r\\n            <Icon class=\\"material-icons\\">search</Icon>\\r\\n            <Input\\r\\n                bind:value\\r\\n                on:keydown={handleKeyDown}\\r\\n                placeholder={'Enter ' + searchKey}\\r\\n                class=\\"solo-input\\"\\r\\n            />\\r\\n        </Paper>\\r\\n        <Fab\\r\\n            on:click={doSearch}\\r\\n            disabled={value === ''}\\r\\n            color=\\"primary\\"\\r\\n            mini\\r\\n            class=\\"solo-fab\\">\\r\\n            <Icon class=\\"material-icons\\">arrow_forward</Icon>\\r\\n        </Fab>\\r\\n    </div>\\r\\n    {#if showResult}\\r\\n        <Card>\\r\\n            <List\\r\\n                class=\\"demo-list\\"\\r\\n                bind:this={list}\\r\\n                twoLine\\r\\n                avatarList\\r\\n                singleSelection\\r\\n                selectedIndex={selectionIndex}>\\r\\n                {#each searchResult as searchedUser, i}\\r\\n                    <Item\\r\\n                        on:SMUI:action={() => goto(\`/\${searchedUser.publicID}\`)}\\r\\n                        selected={selectionIndex === i}\\r\\n                    >\\r\\n                        <Graphic>\\r\\n                            <img width=\\"100%\\" height=\\"100%\\" src={searchProfiles[searchedUser.publicID]} alt='profile'>\\r\\n                        </Graphic>\\r\\n                        \\r\\n                        <Text>\\r\\n                        <PrimaryText>{searchedUser.name}</PrimaryText>\\r\\n                        <SecondaryText>{searchedUser?.bio}</SecondaryText>\\r\\n                        </Text>\\r\\n                        <!-- <Meta>\\r\\n                            <span class=\\"following\\">{searchedUser.isFollow ? '' : 'Not'} Following</span>\\r\\n                        </Meta> -->\\r\\n                    </Item>\\r\\n                {/each}\\r\\n            </List>\\r\\n        </Card>\\r\\n    {/if}\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .solo-demo-container {\\r\\n        padding: 36px 18px;\\r\\n        /* background-color: var(--mdc-theme-background, #f8f8f8); */\\r\\n        border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));\\r\\n    }\\r\\n \\r\\n  .solo-container {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n    }\\r\\n    * :global(.solo-paper) {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        flex-grow: 1;\\r\\n        max-width: 600px;\\r\\n        margin: 0 12px;\\r\\n        padding: 0 12px;\\r\\n        height: 48px;\\r\\n    }\\r\\n    * :global(.solo-paper > *) {\\r\\n        display: inline-block;\\r\\n        margin: 0 12px;\\r\\n    }\\r\\n    * :global(.solo-input) {\\r\\n        flex-grow: 1;\\r\\n        color: currentColor;\\r\\n        /* color: var(--mdc-theme-on-surface, #000); */\\r\\n    }\\r\\n    * :global(.solo-input::placeholder) {\\r\\n        /* color: var(--mdc-theme-on-surface, #000); */\\r\\n        opacity: 0.6;\\r\\n    }\\r\\n    * :global(.solo-fab) {\\r\\n        flex-shrink: 0;\\r\\n    }\\r\\n    img {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        border-radius: 50%;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAkII,oBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,iCAAqB,CACjB,OAAO,CAAE,IAAI,CAAC,IAAI,CAElB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,mCAAmC,CAAC,mBAAmB,CACjF,CAEF,4BAAgB,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB,CACA,aAAC,CAAS,WAAa,CACnB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,CAAC,CACZ,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,MAAM,CAAE,IACZ,CACA,aAAC,CAAS,eAAiB,CACvB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,CAAC,CAAC,IACd,CACA,aAAC,CAAS,WAAa,CACnB,SAAS,CAAE,CAAC,CACZ,KAAK,CAAE,YAEX,CACA,aAAC,CAAS,wBAA0B,CAEhC,OAAO,CAAE,GACb,CACA,aAAC,CAAS,SAAW,CACjB,WAAW,CAAE,CACjB,CACA,gBAAI,CACA,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menu;
  let searchKey = "name", value;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-rhxy8"><div class="solo-demo-container solo-container svelte-rhxy8">${validate_component(Group, "Group").$$render($$result, { variant: "raised" }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, { variant: "raised" }, {}, {
          default: () => {
            return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(searchKey.toUpperCase())}`;
              }
            })}`;
          }
        })} <div class="svelte-rhxy8">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "raised",
            style: "padding: 0; min-width: 36px;"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render(
                $$result,
                {
                  class: "material-icons",
                  style: "margin: 0;"
                },
                {},
                {
                  default: () => {
                    return `arrow_drop_down`;
                  }
                }
              )}`;
            }
          }
        )} ${validate_component(Menu, "Menu").$$render(
          $$result,
          { anchorCorner: "TOP_LEFT", this: menu },
          {
            this: ($$value) => {
              menu = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(List, "List").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `Name`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `Public ID`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `City`;
                        }
                      })}`;
                    }
                  })} `;
                }
              })}`;
            }
          }
        )}</div>`;
      }
    })} ${validate_component(Paper, "Paper").$$render($$result, { class: "solo-paper", elevation: 6 }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `search`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            placeholder: "Enter " + searchKey,
            class: "solo-input",
            value
          },
          {
            value: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(Fab, "Fab").$$render(
      $$result,
      {
        disabled: value === "",
        color: "primary",
        mini: true,
        class: "solo-fab"
      },
      {},
      {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `arrow_forward`;
            }
          })}`;
        }
      }
    )}</div> ${``} </article>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Clw2dKL6.js.map
