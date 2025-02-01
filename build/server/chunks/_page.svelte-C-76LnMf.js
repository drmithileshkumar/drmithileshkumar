import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, i as each, e as escape } from './ssr2-CDgUAJs6.js';
import './ActionIcons-Bx2zL88O.js';
import './client-k3u4ChD_.js';
import './Actions2-D_E0WmBW.js';
import { L as List, I as Item } from './Item-T2YrjSpA.js';
import { T as Text, P as PrimaryText, S as SecondaryText, M as Meta } from './Subheader-DEm_inUP.js';
import { G as Graphic } from './Graphic-CnHJKmsY.js';
import { c as currentPath } from './stores5-CI5tJYhk.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './exports-kR70XCWV.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-N--aPaMn.js';
import './index2-D2s-XE5r.js';

const css = {
  code: "article.svelte-15e5vtx{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import LinearEquation from \\"$lib/mathril/games/LinearEquation.svelte\\";\\r\\n    import Card, { Content } from \\"@smui/card\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games\\";\\r\\n    let list;\\r\\n\\r\\n    let options = [\\r\\n        {\\r\\n            name: \\"Inside Outside\\",\\r\\n            description: \\"Shapes\\",\\r\\n            link: \\"/mathril/games/inout\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Match Number\\",\\r\\n            description: \\"Numbers\\",\\r\\n            link: \\"/mathril/games/matchnumber\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Counting\\",\\r\\n            description: \\"Numbers\\",\\r\\n            link: \\"/mathril/games/counting\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Clock\\",\\r\\n            description: \\"Time\\",\\r\\n            link: \\"/mathril/games/clock\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Addition via counting\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/addition\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Subtraction via counting\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/subtraction\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Addition steps\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/addition2\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Subtraction steps\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/subtraction2\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Multiplication via counting\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/multiplication\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Division via counting\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/division\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Beat Target\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/beattarget\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Linear Equation\\",\\r\\n            description: \\"Algebra\\",\\r\\n            link: \\"/mathril/games/lineareqn\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Euclid's Division Lemma\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/eucliddivisionlemma\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Euclid's Division Algorithm\\",\\r\\n            description: \\"Arithmetic\\",\\r\\n            link: \\"/mathril/games/eucliddivisionalgorithm\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Differentiation\\",\\r\\n            description: \\"Calculus\\",\\r\\n            link: \\"/mathril/games/appDerivative\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Integration\\",\\r\\n            description: \\"Calculus\\",\\r\\n            link: \\"/mathril/games/integral\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n        {\\r\\n            name: \\"Linear Programming\\",\\r\\n            description: \\"Optimum value\\",\\r\\n            link: \\"/mathril/games/lp\\",\\r\\n            disabled: false,\\r\\n        },\\r\\n    ];\\r\\n    let selectionIndex = -1;\\r\\n<\/script>\\r\\n\\r\\n<article>\\r\\n    <List\\r\\n        class=\\"demo-list\\"\\r\\n        bind:this={list}\\r\\n        twoLine\\r\\n        avatarList\\r\\n        singleSelection\\r\\n        selectedIndex={selectionIndex}\\r\\n    >\\r\\n        {#each options as item, i}\\r\\n            <Item\\r\\n                on:SMUI:action={() => (selectionIndex = i, goto(item.link))}\\r\\n                disabled={item.disabled}\\r\\n                selected={selectionIndex === i}\\r\\n            >\\r\\n                <Graphic class=\\"material-symbols-outlined\\">sports_esports</Graphic>\\r\\n                <Text>\\r\\n                    <PrimaryText>{item.name}</PrimaryText>\\r\\n                    <SecondaryText>{item.description}</SecondaryText>\\r\\n                </Text>\\r\\n                <Meta class=\\"material-icons\\">info</Meta>\\r\\n            </Item>\\r\\n        {/each}\\r\\n    </List>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwJI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games", $currentPath);
  let list;
  let options = [
    {
      name: "Inside Outside",
      description: "Shapes",
      link: "/mathril/games/inout",
      disabled: false
    },
    {
      name: "Match Number",
      description: "Numbers",
      link: "/mathril/games/matchnumber",
      disabled: false
    },
    {
      name: "Counting",
      description: "Numbers",
      link: "/mathril/games/counting",
      disabled: false
    },
    {
      name: "Clock",
      description: "Time",
      link: "/mathril/games/clock",
      disabled: false
    },
    {
      name: "Addition via counting",
      description: "Arithmetic",
      link: "/mathril/games/addition",
      disabled: false
    },
    {
      name: "Subtraction via counting",
      description: "Arithmetic",
      link: "/mathril/games/subtraction",
      disabled: false
    },
    {
      name: "Addition steps",
      description: "Arithmetic",
      link: "/mathril/games/addition2",
      disabled: false
    },
    {
      name: "Subtraction steps",
      description: "Arithmetic",
      link: "/mathril/games/subtraction2",
      disabled: false
    },
    {
      name: "Multiplication via counting",
      description: "Arithmetic",
      link: "/mathril/games/multiplication",
      disabled: false
    },
    {
      name: "Division via counting",
      description: "Arithmetic",
      link: "/mathril/games/division",
      disabled: false
    },
    {
      name: "Beat Target",
      description: "Arithmetic",
      link: "/mathril/games/beattarget",
      disabled: false
    },
    {
      name: "Linear Equation",
      description: "Algebra",
      link: "/mathril/games/lineareqn",
      disabled: false
    },
    {
      name: "Euclid's Division Lemma",
      description: "Arithmetic",
      link: "/mathril/games/eucliddivisionlemma",
      disabled: false
    },
    {
      name: "Euclid's Division Algorithm",
      description: "Arithmetic",
      link: "/mathril/games/eucliddivisionalgorithm",
      disabled: false
    },
    {
      name: "Differentiation",
      description: "Calculus",
      link: "/mathril/games/appDerivative",
      disabled: false
    },
    {
      name: "Integration",
      description: "Calculus",
      link: "/mathril/games/integral",
      disabled: false
    },
    {
      name: "Linear Programming",
      description: "Optimum value",
      link: "/mathril/games/lp",
      disabled: false
    }
  ];
  let selectionIndex = -1;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-15e5vtx">${validate_component(List, "List").$$render(
      $$result,
      {
        class: "demo-list",
        twoLine: true,
        avatarList: true,
        singleSelection: true,
        selectedIndex: selectionIndex,
        this: list
      },
      {
        this: ($$value) => {
          list = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(options, (item, i) => {
            return `${validate_component(Item, "Item").$$render(
              $$result,
              {
                disabled: item.disabled,
                selected: selectionIndex === i
              },
              {},
              {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-symbols-outlined" }, {}, {
                    default: () => {
                      return `sports_esports`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
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
    )} </article>`;
  } while (!$$settled);
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C-76LnMf.js.map
