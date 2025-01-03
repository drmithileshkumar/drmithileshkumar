import { a as subscribe, c as null_to_empty, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from './ssr2-q3O0l93f.js';
import { D as Drawer, C as Content, S as Scrim, A as AppContent, a as Separator } from './Separator-CYuTJRvC.js';
import { F as Fab } from './Fab-BRqAjlUV.js';
import { C as CommonIcon, S as Svg } from './Svg-BUOACmlE.js';
import { L as List, I as Item } from './Item-Cixi8uf3.js';
import { T as Text, P as PrimaryText, S as SecondaryText } from './Subheader-BV9F6O0P.js';
import { G as Graphic } from './Graphic-BjEt0ZHi.js';
import { B as Button } from './Button-DRRmGjqZ.js';
import './client-k3u4ChD_.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { s as showRight, r as refreshApp, d as darkMode, T as TopBarHeight, a as showLeft, c as currentPath, i as isAuth, p as profileImage, n as navList } from './stores-Dd7WnHpz.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content$1 } from './ActionIcons-Co7bojT-.js';
import { N as NavList } from './NavList-CiukFc6-.js';
import { T as TopAppBar } from './TopAppBar-DcvI4KJY.js';
import { R as Row, S as Section } from './Title-CgHyKUH-.js';
import { I as IconButton } from './IconButton-3ebkBHL3.js';
import { p as presentationMode } from './stores4-DLB_GG7W.js';
import './SmuiElement-DA9PKsv2.js';
import './dispatch-BOSWPsEc.js';
import './classAdderBuilder-B9W9nXDD.js';
import './Ripple-Zq_D_mxy.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';

/* empty css                                                     */
const css$6 = {
  code: "nav.svelte-1hx4pyo{overflow-y:auto;display:flex;justify-content:start;flex-direction:column;padding-bottom:5em}",
  map: `{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import { Svg } from '@smui/common';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, navList, isAuth } from \\"$lib/stores\\";\\r\\n\\r\\n    $: $isAuth = $page.data.user;\\r\\n<\/script>\\r\\n\\r\\n<nav>\\r\\n    <div class=\\"top\\">\\r\\n        <List>\\r\\n            <Item\\r\\n                on:SMUI:action={() => goto(\`/courses\`)}\\r\\n            >\\r\\n                <Graphic class=\\"material-icons\\">local_library</Graphic>\\r\\n                <Text>Courses</Text>\\r\\n            </Item>\\r\\n            <Item\\r\\n                on:SMUI:action={() => goto(\`/students\`)}\\r\\n            >\\r\\n                <Graphic class=\\"material-icons\\">groups</Graphic>\\r\\n                <Text>Students</Text>\\r\\n            </Item>\\r\\n            <Item\\r\\n                on:SMUI:action={() => goto(\`/talks\`)}\\r\\n            >\\r\\n                <Graphic class=\\"material-symbols-outlined\\">podium</Graphic>\\r\\n                <Text>Talks</Text>\\r\\n            </Item>\\r\\n            <Separator />\\r\\n            <Item\\r\\n                on:SMUI:action={() => goto(\`/about\`)}\\r\\n            >\\r\\n                <Graphic class=\\"material-icons\\">person</Graphic>\\r\\n                <Text>About</Text>\\r\\n            </Item>\\r\\n            <Item\\r\\n                on:SMUI:action={() => goto(\`/publications\`)}\\r\\n            >\\r\\n                <Graphic class=\\"material-icons\\">article</Graphic>\\r\\n                <Text>Publications</Text>\\r\\n            </Item>\\r\\n            <Item\\r\\n                on:SMUI:action={() => goto(\`/cv\`)}\\r\\n            >\\r\\n                <Graphic class=\\"material-icons\\">badge</Graphic>\\r\\n                <Text>CV</Text>\\r\\n            </Item>\\r\\n            <Item\\r\\n                on:SMUI:action={() => window.location = \`https://mathril.com\`}\\r\\n            >\\r\\n                <Graphic>\\r\\n                    <Svg style=\\"width: 100%; height: 100%;\\" viewBox=\\"0 0 400 400\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\">\\r\\n                        <defs>\\r\\n                            <linearGradient id='LinearGradient-VectorialApp19R21-3' x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"0%\\" >\\r\\n                                <stop offset=\\"0%\\" stop-color=\\"rgba(255, 0, 0, 1)\\"/>\\r\\n                                <stop offset=\\"100%\\" stop-color=\\"rgba(0, 175, 255, 1)\\"/>\\r\\n                            </linearGradient>\\r\\n                        </defs>\\r\\n                        <g>\\r\\n                            <g  \\r\\n                                class='draggable'\\r\\n                                id='Layer-VectorialApp19R21-0'\\r\\n                                fill='none'\\r\\n                                stroke='none'\\r\\n                                stroke-width='0'\\r\\n                                stroke-dasharray='none'\\r\\n                                opacity='1'\\r\\n                                mask='none'\\r\\n                                filter='none'\\r\\n                                transform='matrix(1 0 0 1 0 0)'\\r\\n                            >\\r\\n                                            \\r\\n                                <rect  \\r\\n                                    id='Rect-VectorialApp19R21-2'\\r\\n                                    x='200'\\r\\n                                    y='200'\\r\\n                                    width='350'\\r\\n                                    height='25'\\r\\n                                    rx='0'\\r\\n                                    ry='0'\\r\\n                                    fill='url(#LinearGradient-VectorialApp19R21-3)'\\r\\n                                    stroke='rgba(0, 0, 0, 1)'\\r\\n                                    stroke-width='0'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 -176 -175)'\\r\\n                                />\\r\\n                                            \\r\\n                                <rect  \\r\\n                                    id='Rect-VectorialApp19R21-4'\\r\\n                                    x='200'\\r\\n                                    y='200'\\r\\n                                    width='350'\\r\\n                                    height='25'\\r\\n                                    rx='0'\\r\\n                                    ry='0'\\r\\n                                    fill='url(#LinearGradient-VectorialApp19R21-3)'\\r\\n                                    stroke='rgba(0, 0, 0, 1)'\\r\\n                                    stroke-width='0'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 -175 -125)'\\r\\n                                />\\r\\n                                            \\r\\n                                <rect  \\r\\n                                    id='Rect-VectorialApp19R21-5'\\r\\n                                    x='200'\\r\\n                                    y='200'\\r\\n                                    width='275'\\r\\n                                    height='25'\\r\\n                                    rx='0'\\r\\n                                    ry='0'\\r\\n                                    fill='url(#LinearGradient-VectorialApp19R21-3)'\\r\\n                                    stroke='rgba(0, 0, 0, 1)'\\r\\n                                    stroke-width='0'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 -175 -75)'\\r\\n                                />\\r\\n                                            \\r\\n                                <rect  \\r\\n                                    id='Rect-VectorialApp19R21-6'\\r\\n                                    x='200'\\r\\n                                    y='200'\\r\\n                                    width='200'\\r\\n                                    height='25'\\r\\n                                    rx='0'\\r\\n                                    ry='0'\\r\\n                                    fill='url(#LinearGradient-VectorialApp19R21-3)'\\r\\n                                    stroke='rgba(0, 0, 0, 1)'\\r\\n                                    stroke-width='0'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 -175 -25)'\\r\\n                                />\\r\\n                                            \\r\\n                                <circle  \\r\\n                                    id='Circle-VectorialApp19R21-7'\\r\\n                                    cx='200'\\r\\n                                    cy='200'\\r\\n                                    r='40'\\r\\n                                    fill='rgba(255, 255, 255, 0.3)'\\r\\n                                    stroke='rgba(0, 175, 0, 1)'\\r\\n                                    stroke-width='5'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 -100 75)'\\r\\n                                />\\r\\n                                            \\r\\n                                <circle  \\r\\n                                    id='Circle-VectorialApp19R21-8'\\r\\n                                    cx='200'\\r\\n                                    cy='200'\\r\\n                                    r='30'\\r\\n                                    fill='rgba(0, 175, 0, 1)'\\r\\n                                    stroke='rgba(0, 175, 0, 1)'\\r\\n                                    stroke-width='5'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 -100 75)'\\r\\n                                />\\r\\n                                            \\r\\n                                <circle  \\r\\n                                    id='Circle-VectorialApp19R21-9'\\r\\n                                    cx='200'\\r\\n                                    cy='200'\\r\\n                                    r='25'\\r\\n                                    fill='rgba(255, 255, 255, 0)'\\r\\n                                    stroke='rgba(0, 175, 255, 1)'\\r\\n                                    stroke-width='10'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 100.5 75)'\\r\\n                                />\\r\\n                                            \\r\\n                                <circle  \\r\\n                                    id='Circle-VectorialApp19R21-10'\\r\\n                                    cx='200'\\r\\n                                    cy='200'\\r\\n                                    r='25'\\r\\n                                    fill='rgba(255, 255, 255, 0)'\\r\\n                                    stroke='rgba(0, 175, 255, 1)'\\r\\n                                    stroke-width='10'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 100.5 159)'\\r\\n                                />\\r\\n                                            \\r\\n                                <circle  \\r\\n                                    id='Circle-VectorialApp19R21-11'\\r\\n                                    cx='200'\\r\\n                                    cy='200'\\r\\n                                    r='25'\\r\\n                                    fill='rgba(255, 255, 255, 0)'\\r\\n                                    stroke='rgba(0, 175, 255, 1)'\\r\\n                                    stroke-width='10'\\r\\n                                    stroke-dasharray='none'\\r\\n                                    opacity='1'\\r\\n                                    filter='none'\\r\\n                                    mask='none'\\r\\n                                    transform='matrix(1 0 0 1 -100 159)'\\r\\n                                />\\r\\n                            </g>\\r\\n                        </g>\\r\\n                    </Svg>\\r\\n                </Graphic>\\r\\n                <Text>mathril</Text>\\r\\n            </Item>\\r\\n            <Item\\r\\n                on:SMUI:action={() => window.location = \`/vectorial\`}\\r\\n            >\\r\\n                <Graphic>\\r\\n                    <Svg style=\\"width: 100%; height: 100%;\\" viewBox=\\"-336 -140 224.00000095367432 222.00000286102295\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" class=\\"s-96Qa8tULeGx4\\">\\r\\n                        <defs class=\\"s-96Qa8tULeGx4\\">\\r\\n                            <radialGradient id=\\"radGrad604\\" cx=\\"50%\\" cy=\\"50%\\" r=\\"50%\\" fx=\\"50%\\" fy=\\"50%\\" fr=\\"0%\\" class=\\"s-96Qa8tULeGx4\\">\\r\\n                                <stop offset=\\"0%\\" stop-color=\\"rgba(0, 0, 0, 0.1)\\" class=\\"s-96Qa8tULeGx4\\"></stop>\\r\\n                                <stop offset=\\"100%\\" stop-color=\\"rgba(0, 0, 0, 1)\\" class=\\"s-96Qa8tULeGx4\\"></stop>\\r\\n                            </radialGradient>\\r\\n                            <linearGradient id=\\"linGrad990\\" x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"0%\\" class=\\"s-96Qa8tULeGx4\\">\\r\\n                                <stop offset=\\"0%\\" stop-color=\\"rgba(255, 0, 0, 1)\\" class=\\"s-96Qa8tULeGx4\\"></stop>\\r\\n                                <stop offset=\\"100%\\" stop-color=\\"rgba(0, 159, 163, 1)\\" class=\\"s-96Qa8tULeGx4\\"></stop>\\r\\n                            </linearGradient>\\r\\n                            <filter id=\\"shadow183\\" x=\\"0%\\" y=\\"0%\\" width=\\"500%\\" height=\\"500%\\" class=\\"s-2BksElCIcH9B\\">\\r\\n                                <feDropShadow dx=\\"30\\" dy=\\"30\\" stdDeviation=\\"5\\" flood-color=\\"rgba(0, 0, 0, 0.5)\\" flood-opacity=\\"1\\" class=\\"s-2BksElCIcH9B\\"></feDropShadow>\\r\\n                            </filter>\\r\\n                        </defs>\\r\\n                        <g class=\\"s-96Qa8tULeGx4\\">\\r\\n                            <g id=\\"Layer-0\\" fill=\\"none\\" stroke=\\"none\\" stroke-width=\\"0\\" stroke-dasharray=\\"none\\" opacity=\\"1\\" filter=\\"none\\" transform=\\"matrix(1 0 0 1 0 0)\\" class=\\"s-QQIalB0-gg3s\\">  \\r\\n                                <circle cx=\\"0\\" cy=\\"0\\" r=\\"100\\" fill=\\"url(#linGrad990)\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"0\\" stroke-dasharray=\\"none\\" opacity=\\"1\\" filter=\\"none\\" transform=\\"matrix(1 0 0 1 -224 -30)\\" class=\\"s-QOZdKfZP-a_N\\"></circle>\\r\\n                                <g id=\\"Latex-3\\" fill=\\"rgba(255, 255, 255, 1)\\" opacity=\\"1\\" filter=\\"url(#shadow183)\\" transform=\\"matrix(0.22421523772725804 0 0 0.22026430842809952 -283.0785199922724 22.28708863364809)\\" class=\\"s-8WhOemGd3PFV\\">\\r\\n                                    <defs>\\r\\n                                        <path id=\\"MJX-1039-TEX-I-1D463\\" d=\\"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z\\"></path>\\r\\n                                    </defs>\\r\\n                                    <g stroke-width=\\"0\\" transform=\\"scale(1,-1)\\">\\r\\n                                        <g data-mml-node=\\"math\\">\\r\\n                                            <g data-mml-node=\\"mi\\">\\r\\n                                                <use data-c=\\"1D463\\" xlink:href=\\"#MJX-1039-TEX-I-1D463\\"></use>\\r\\n                                            </g>\\r\\n                                        </g>\\r\\n                                    </g>\\r\\n                                </g>\\r\\n                            </g>\\r\\n                        </g>\\r\\n                    </Svg>\\r\\n                </Graphic>\\r\\n                <Text>vectorial</Text>\\r\\n            </Item>\\r\\n            \\r\\n        </List>\\r\\n    </div>\\r\\n    <div class=\\"bottom\\">\\r\\n        <List twoLine avatarList>\\r\\n            {#if $isAuth}\\r\\n                <Item on:click={() => goto(\`/\${$page.data.user.publicID}\`)}>\\r\\n                    <Graphic>\\r\\n                        <img\\r\\n                            class=\\"round\\"\\r\\n                            width=\\"40px\\"\\r\\n                            height=\\"40px\\"\\r\\n                            src={$profileImage}\\r\\n                            alt=\\"Profile\\"\\r\\n                        />\\r\\n                    </Graphic>\\r\\n                    <Text>\\r\\n                        <PrimaryText>{$isAuth.name}</PrimaryText>\\r\\n                        <SecondaryText>{$isAuth.publicID}</SecondaryText>\\r\\n                    </Text>\\r\\n                </Item>\\r\\n            {:else}\\r\\n                <Item>\\r\\n                    <Button on:click={() => goto(\\"/auth\\")}\\r\\n                        >Log in / Sign up</Button\\r\\n                    >\\r\\n                </Item>\\r\\n            {/if}\\r\\n        </List>\\r\\n    </div>\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n    nav {\\r\\n        /* height: calc(100vh - 5em); */\\r\\n        /* height: 500px; */\\r\\n        overflow-y: auto;\\r\\n        display: flex;\\r\\n        justify-content: start;\\r\\n        flex-direction: column;\\r\\n        /* position: sticky;\\r\\n        top: 0.5em; */\\r\\n        padding-bottom: 5em;\\r\\n    }\\r\\n    \\r\\n    /* .post {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqTI,kBAAI,CAGA,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,KAAK,CACtB,cAAc,CAAE,MAAM,CAGtB,cAAc,CAAE,GACpB"}`
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $isAuth, $$unsubscribe_isAuth;
  let $profileImage, $$unsubscribe_profileImage;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isAuth = subscribe(isAuth, (value) => $isAuth = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  $$result.css.add(css$6);
  set_store_value(isAuth, $isAuth = $page.data.user, $isAuth);
  $$unsubscribe_page();
  $$unsubscribe_isAuth();
  $$unsubscribe_profileImage();
  return `<nav class="svelte-1hx4pyo"><div class="top">${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `local_library`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Courses`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `groups`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Students`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-symbols-outlined" }, {}, {
            default: () => {
              return `podium`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Talks`;
            }
          })}`;
        }
      })} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `person`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `About`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `article`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Publications`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `badge`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `CV`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Svg, "Svg").$$render(
                $$result,
                {
                  style: "width: 100%; height: 100%;",
                  viewBox: "0 0 400 400",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink"
                },
                {},
                {
                  default: () => {
                    return `<defs><linearGradient id="LinearGradient-VectorialApp19R21-3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="rgba(255, 0, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 175, 255, 1)"></stop></linearGradient></defs> <g><g class="draggable" id="Layer-VectorialApp19R21-0" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" mask="none" filter="none" transform="matrix(1 0 0 1 0 0)"><rect id="Rect-VectorialApp19R21-2" x="200" y="200" width="350" height="25" rx="0" ry="0" fill="url(#LinearGradient-VectorialApp19R21-3)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -176 -175)"></rect><rect id="Rect-VectorialApp19R21-4" x="200" y="200" width="350" height="25" rx="0" ry="0" fill="url(#LinearGradient-VectorialApp19R21-3)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -175 -125)"></rect><rect id="Rect-VectorialApp19R21-5" x="200" y="200" width="275" height="25" rx="0" ry="0" fill="url(#LinearGradient-VectorialApp19R21-3)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -175 -75)"></rect><rect id="Rect-VectorialApp19R21-6" x="200" y="200" width="200" height="25" rx="0" ry="0" fill="url(#LinearGradient-VectorialApp19R21-3)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -175 -25)"></rect><circle id="Circle-VectorialApp19R21-7" cx="200" cy="200" r="40" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(0, 175, 0, 1)" stroke-width="5" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -100 75)"></circle><circle id="Circle-VectorialApp19R21-8" cx="200" cy="200" r="30" fill="rgba(0, 175, 0, 1)" stroke="rgba(0, 175, 0, 1)" stroke-width="5" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -100 75)"></circle><circle id="Circle-VectorialApp19R21-9" cx="200" cy="200" r="25" fill="rgba(255, 255, 255, 0)" stroke="rgba(0, 175, 255, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 100.5 75)"></circle><circle id="Circle-VectorialApp19R21-10" cx="200" cy="200" r="25" fill="rgba(255, 255, 255, 0)" stroke="rgba(0, 175, 255, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 100.5 159)"></circle><circle id="Circle-VectorialApp19R21-11" cx="200" cy="200" r="25" fill="rgba(255, 255, 255, 0)" stroke="rgba(0, 175, 255, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -100 159)"></circle></g></g>`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `mathril`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Svg, "Svg").$$render(
                $$result,
                {
                  style: "width: 100%; height: 100%;",
                  viewBox: "-336 -140 224.00000095367432 222.00000286102295",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  class: "s-96Qa8tULeGx4"
                },
                {},
                {
                  default: () => {
                    return `<defs class="s-96Qa8tULeGx4"><radialGradient id="radGrad604" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" fr="0%" class="s-96Qa8tULeGx4"><stop offset="0%" stop-color="rgba(0, 0, 0, 0.1)" class="s-96Qa8tULeGx4"></stop><stop offset="100%" stop-color="rgba(0, 0, 0, 1)" class="s-96Qa8tULeGx4"></stop></radialGradient><linearGradient id="linGrad990" x1="0%" y1="0%" x2="100%" y2="0%" class="s-96Qa8tULeGx4"><stop offset="0%" stop-color="rgba(255, 0, 0, 1)" class="s-96Qa8tULeGx4"></stop><stop offset="100%" stop-color="rgba(0, 159, 163, 1)" class="s-96Qa8tULeGx4"></stop></linearGradient><filter id="shadow183" x="0%" y="0%" width="500%" height="500%" class="s-2BksElCIcH9B"><feDropShadow dx="30" dy="30" stdDeviation="5" flood-color="rgba(0, 0, 0, 0.5)" flood-opacity="1" class="s-2BksElCIcH9B"></feDropShadow></filter></defs> <g class="s-96Qa8tULeGx4"><g id="Layer-0" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)" class="s-QQIalB0-gg3s"><circle cx="0" cy="0" r="100" fill="url(#linGrad990)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 -224 -30)" class="s-QOZdKfZP-a_N"></circle><g id="Latex-3" fill="rgba(255, 255, 255, 1)" opacity="1" filter="url(#shadow183)" transform="matrix(0.22421523772725804 0 0 0.22026430842809952 -283.0785199922724 22.28708863364809)" class="s-8WhOemGd3PFV"><defs><path id="MJX-1039-TEX-I-1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D463" xlink:href="#MJX-1039-TEX-I-1D463"></use></g></g></g></g></g></g>`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `vectorial`;
            }
          })}`;
        }
      })}`;
    }
  })}</div> <div class="bottom">${validate_component(List, "List").$$render($$result, { twoLine: true, avatarList: true }, {}, {
    default: () => {
      return `${$isAuth ? `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
            default: () => {
              return `<img class="round" width="40px" height="40px"${add_attribute("src", $profileImage, 0)} alt="Profile">`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape($isAuth.name)}`;
                }
              })} ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape($isAuth.publicID)}`;
                }
              })}`;
            }
          })}`;
        }
      })}` : `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Log in / Sign up`;
            }
          })}`;
        }
      })}`}`;
    }
  })}</div> </nav>`;
});
const css$5 = {
  code: ".title.svelte-y40hrq{font-size:1.2em}p.svelte-y40hrq{display:flex;align-items:center;gap:1em;font-size:0.8em;margin:0.5em 0}",
  map: '{"version":3,"file":"Contact.svelte","sources":["Contact.svelte"],"sourcesContent":["<script><\/script>\\r\\n<style>\\r\\n    .title {\\r\\n        font-size: 1.2em;\\r\\n    }\\r\\n    p {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        gap: 1em;\\r\\n        font-size: 0.8em;\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <p class=\\"title\\">Contact</p>\\r\\n    <p><span class=\\"material-icons\\">email</span> <span><strong>info</strong>@drmithileshkumar.com</span></p>\\r\\n    <p><span class=\\"material-icons\\">phone</span> +91 8797081308, +91 8235463666</p>\\r\\n    <!-- <p><span class=\\"material-icons\\">home_work</span> 2nd Floor, B154-B5 Silver City Themes, Derabassi, Chandigarh 140507, Punjab, India</p> -->\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAEI,oBAAO,CACH,SAAS,CAAE,KACf,CACA,eAAE,CACE,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,KAAK,CAAC,CAClB"}'
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<article data-svelte-h="svelte-1yse8m4"><p class="title svelte-y40hrq">Contact</p> <p class="svelte-y40hrq"><span class="material-icons">email</span> <span><strong>info</strong>@drmithileshkumar.com</span></p> <p class="svelte-y40hrq"><span class="material-icons">phone</span> +91 8797081308, +91 8235463666</p> </article>`;
});
const css$4 = {
  code: "p.svelte-a6gmw5{font-size:0.8em;font-weight:300}",
  map: '{"version":3,"file":"Copyright.svelte","sources":["Copyright.svelte"],"sourcesContent":["<script><\/script>\\r\\n<style>\\r\\n    p {\\r\\n        font-size: 0.8em;\\r\\n        font-weight: 300;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <p>Copyright &copy; 2023 drmithileshkumar.com All Rights Reserved</p>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAEI,eAAE,CACE,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GACjB"}'
};
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<article data-svelte-h="svelte-1l9daw7"><p class="svelte-a6gmw5">Copyright © 2023 drmithileshkumar.com All Rights Reserved</p></article>`;
});
const css$3 = {
  code: "nav.svelte-svkd07{display:flex;flex-direction:row;flex-wrap:wrap;gap:1em;align-items:center}",
  map: '{"version":3,"file":"Social.svelte","sources":["Social.svelte"],"sourcesContent":["<script>\\r\\n    import Link from \\"$lib/ui/Link.svelte\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    nav {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>\\r\\n<nav>\\r\\n    <!-- <a href=\\"https://t.me/+jb3tHiQnJiY5YThl\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/telegram.svg\\" alt=\\"telegram\\" />\\r\\n    </a> -->\\r\\n    <a href=\\"https://www.facebook.com/profile.php?id=100029086776754\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/facebook.svg\\" alt=\\"facebook\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://twitter.com/DrMithileshKr\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/twitter.png\\" alt=\\"twitter\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://www.youtube.com/DrMithileshKr\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/youtube.svg\\" alt=\\"youtube\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://www.instagram.com/drmithileshkumar_com/\\" style=\\"font-size: 0.8em;\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/instagram.svg\\" alt=\\"instagram\\" />\\r\\n    </a>\\r\\n</nav>"],"names":[],"mappings":"AAII,iBAAI,CACA,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MACjB"}'
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-svkd07" data-svelte-h="svelte-1ibtdud"> <a href="https://www.facebook.com/profile.php?id=100029086776754"><img width="23px" height="23px" src="/facebook.svg" alt="facebook"></a> <a href="https://twitter.com/DrMithileshKr"><img width="23px" height="23px" src="/twitter.png" alt="twitter"></a> <a href="https://www.youtube.com/DrMithileshKr"><img width="23px" height="23px" src="/youtube.svg" alt="youtube"></a> <a href="https://www.instagram.com/drmithileshkumar_com/" style="font-size: 0.8em;"><img width="23px" height="23px" src="/instagram.svg" alt="instagram"></a></nav>`;
});
const css$2 = {
  code: "footer.svelte-1juizb1{padding-top:1em;font-family:roboto;padding-bottom:4em}nav.svelte-1juizb1{display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-top:1em}a.svelte-1juizb1{font-size:0.8em}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\r\\n    import Contact from \\"./Contact.svelte\\";\\r\\n    import Copyright from \\"./Copyright.svelte\\";\\r\\n    import Social from \\"./Social.svelte\\";\\r\\n    // import a from '$lib/ui/a.svelte';\\r\\n<\/script>\\r\\n\\r\\n<footer>\\r\\n    <Social />\\r\\n    <Contact />\\r\\n    <nav>\\r\\n        <ul>\\r\\n            <li><a href=\\"/about\\">About</a></li>\\r\\n            <!-- <li>\\r\\n                <a href=\\"/subscription\\">Pricing</a>\\r\\n            </li>\\r\\n            <li>\\r\\n                <a href=\\"/legal/privacy\\"\\r\\n                    >Privacy Policy</a\\r\\n                >\\r\\n            </li>\\r\\n            <li>\\r\\n                <a href=\\"/legal/refund\\"\\r\\n                    >Refund Policy</a\\r\\n                >\\r\\n            </li>\\r\\n            <li>\\r\\n                <a href=\\"/legal/terms\\"\\r\\n                    >Terms and Conditions</a\\r\\n                >\\r\\n            </li>\\r\\n            <li>\\r\\n                <a\\r\\n                    href=\\"https://merchant.razorpay.com/policy/Kh60Awbd6Q33xU/shipping\\"\\r\\n                    >Shipping</a\\r\\n                >\\r\\n            </li> -->\\r\\n        </ul>\\r\\n    </nav>\\r\\n    <Copyright />\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n    footer {\\r\\n        /* border-top: 2px solid rgb(0, 100, 150); */\\r\\n        padding-top: 1em;\\r\\n        /* padding: 1em; */\\r\\n        /* background: radial-gradient(rgb(35 100 120), black); */\\r\\n        font-family: roboto;\\r\\n        padding-bottom: 4em;\\r\\n    }\\r\\n    nav {\\r\\n        display: flex;\\r\\n        gap: 0.5em;\\r\\n        align-items: center;\\r\\n        flex-wrap: wrap;\\r\\n        margin-top: 1em;\\r\\n    }\\r\\n    a {\\r\\n        font-size: 0.8em;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2CI,qBAAO,CAEH,WAAW,CAAE,GAAG,CAGhB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GACpB,CACA,kBAAI,CACA,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAChB,CACA,gBAAE,CACE,SAAS,CAAE,KACf"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-1juizb1">${validate_component(Social, "Social").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} <nav class="svelte-1juizb1" data-svelte-h="svelte-w37za3"><ul><li><a href="/about" class="svelte-1juizb1">About</a></li> </ul></nav> ${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})} </footer>`;
});
const css$1 = {
  code: "aside.svelte-kpoyhe{position:relative;display:flex;flex-direction:column;gap:0.5em;overflow-y:auto}",
  map: '{"version":3,"file":"Sidebar.svelte","sources":["Sidebar.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content } from \\"@smui/card\\";\\r\\n    import Footer from \\"$lib/footer/Footer.svelte\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import Fab, { Icon } from \\"@smui/fab\\";\\r\\n    import { Svg } from \\"@smui/common\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, navList } from \\"$lib/stores\\";\\r\\n    import NavList from \\"./NavList.svelte\\";\\r\\n    export let isAuth = null;\\r\\n<\/script>\\r\\n\\r\\n<aside>\\r\\n    <!-- <div class=\\"fixed\\"> -->\\r\\n    <!-- {#if isAuth} -->\\r\\n        {#if $navList.length > 0}\\r\\n            <Card>\\r\\n                <!-- <Content> -->\\r\\n                <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n                <!-- <List>\\r\\n                    {#each $navList as link}\\r\\n                        <Item\\r\\n                            on:SMUI:action={() =>\\r\\n                                goto(`/${$page.data.user.publicID}${link.url}`)}\\r\\n                        >\\r\\n                            <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                            <Text>{link.name}</Text>\\r\\n                        </Item>\\r\\n                    {/each}\\r\\n                </List> -->\\r\\n\\r\\n                <!-- </Content> -->\\r\\n            </Card>\\r\\n        {/if}\\r\\n    <!-- {/if} -->\\r\\n    <!-- </div> -->\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Footer />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</aside>\\r\\n\\r\\n<style>\\r\\n    aside {\\r\\n        position: relative;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        overflow-y: auto;\\r\\n    }\\r\\n    /* @media only screen and (min-width: 600px) {\\r\\n        .fixed {\\r\\n            position: fixed;\\r\\n            right: 0;\\r\\n            width: 256px;\\r\\n            overflow-y: scroll;\\r\\n            height: 100vh;\\r\\n        }\\r\\n    } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuDI,mBAAM,CACF,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,UAAU,CAAE,IAChB"}'
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  let { isAuth: isAuth2 = null } = $$props;
  if ($$props.isAuth === void 0 && $$bindings.isAuth && isAuth2 !== void 0) $$bindings.isAuth(isAuth2);
  $$result.css.add(css$1);
  $$unsubscribe_navList();
  return `<aside class="svelte-kpoyhe">  ${$navList.length > 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return ` ${validate_component(NavList, "NavList").$$render(
        $$result,
        {
          name: $navList[0].name,
          url: $navList[0].url,
          topics: $navList[0].topics,
          expanded: true
        },
        {},
        {}
      )}  `;
    }
  })}` : ``}   ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </aside>`;
});
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-NLWD2V1K9N", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1r81vvh_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-NLWD2V1K9N" data-svelte-h="svelte-1evtf8t"><\/script><script data-svelte-h="svelte-1sh4zor">window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-NLWD2V1K9N");<\/script><!-- HEAD_svelte-1r81vvh_END -->`, ""}`;
});
const css = {
  code: ".modal.svelte-z3f1g{display:block;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.32);z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.svelte-z3f1g{box-sizing:border-box}.container.svelte-z3f1g{width:100%}header.svelte-z3f1g{min-width:100%;z-index:200}.navback.svelte-z3f1g{min-height:4em}.nav.svelte-z3f1g{max-width:150px}main.svelte-z3f1g{display:flex}.grid.svelte-z3f1g{display:grid;grid-template-columns:calc(100% - 256px) 256px}.center.svelte-z3f1g{display:flex;flex-direction:column;width:100%;padding:0.5em}.side.svelte-z3f1g{min-width:300px;position:fixed;top:4em;right:0;height:100vh;overflow-y:auto;z-index:6;box-shadow:rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px}@media only screen and (max-width: 600px){.navback.svelte-z3f1g{min-height:3.5em}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Drawer, {\\r\\n        AppContent,\\r\\n        Content,\\r\\n        Scrim,\\r\\n        Header,\\r\\n        Title,\\r\\n        Subtitle,\\r\\n    } from \\"@smui/drawer\\";\\r\\n    import Fab from \\"@smui/fab\\";\\r\\n    import { Svg } from \\"@smui/common\\";\\r\\n    import { fly } from \\"svelte/transition\\";\\r\\n    import LayoutGrid, { Cell } from \\"@smui/layout-grid\\";\\r\\n    import Nav from \\"$lib/components/Nav.svelte\\";\\r\\n    import Sidebar from \\"$lib/components/Sidebar.svelte\\";\\r\\n    import TopAppBar, { Row, Section } from \\"@smui/top-app-bar\\";\\r\\n    import IconButton, {Icon} from \\"@smui/icon-button\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import List, { Item, Text } from \\"@smui/list\\";\\r\\n    import { showLeft, darkMode, showRight } from \\"$lib/stores.js\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import Analytics from \\"$lib/components/Analytics.svelte\\";\\r\\n    import { goto } from '$app/navigation';\\r\\n    import {currentPath, refreshApp, TopBarHeight} from '$lib/stores';\\r\\n    import {presentationMode} from '$lib/pages/notes/maths/stores';\\r\\n    import { beforeUpdate, afterUpdate } from 'svelte';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    beforeUpdate(() => $refreshApp = true)\\r\\n    afterUpdate(() => $refreshApp = false)\\r\\n    let W = 500;\\r\\n    let mainClass = '';\\r\\n    $: fixed = W < 600;\\r\\n    // $:console.log($page.data.user)\\r\\n    \\r\\n    $: sideWidth = $showRight ? 300 : 0;\\r\\n    \\r\\n<\/script>\\r\\n<svelte:head>\\r\\n    <link\\r\\n        rel=\\"stylesheet\\"\\r\\n        id=\\"theme\\"\\r\\n        href=\\"/smui{$darkMode ? '-dark' : ''}.css\\"\\r\\n    />\\r\\n</svelte:head>\\r\\n<Analytics />\\r\\n<header style=\\"position: relative;\\" bind:clientHeight={$TopBarHeight}>\\r\\n    <TopAppBar variant=\\"fixed\\" color=\\"secondary\\">\\r\\n        <Row>\\r\\n            <Section style=\\"align-items:center;\\">\\r\\n                <IconButton toggle bind:pressed={$showLeft}>\\r\\n                    <Icon class=\\"material-icons\\" on>close</Icon>\\r\\n                    <Icon class=\\"material-icons\\">menu</Icon>\\r\\n                </IconButton>\\r\\n                <div class=\\"logo\\">\\r\\n                    <Fab on:click={() => goto(\\"/\\")}>\\r\\n                        <Icon>\\r\\n                            <img width=\\"40px\\" height=\\"40px\\" style=\\"background:white; border-radius:50%;\\" src=\\"/favicon.png\\" alt=\\"1\\" />\\r\\n                        </Icon>\\r\\n                    </Fab>\\r\\n                </div>\\r\\n                <span>\\r\\n                    {$currentPath}\\r\\n                </span>\\r\\n            </Section>\\r\\n            <Section align=\\"end\\" toolbar>\\r\\n                <!-- <IconButton class=\\"material-icons\\" aria-label=\\"Search\\" on:click={() => goto('/search')}>search</IconButton> -->\\r\\n                <IconButton class=\\"material-icons\\" aria-label=\\"Refresh\\" on:click={() => $refreshApp = true, location.reload()}>refresh</IconButton>\\r\\n                <!-- <IconButton class=\\"material-icons\\" aria-label=\\"Settings\\"\\r\\n                    >settings</IconButton\\r\\n                >\\r\\n                <IconButton class=\\"material-icons\\" aria-label=\\"Cancel\\"\\r\\n                    >close</IconButton\\r\\n                > -->\\r\\n                <IconButton toggle bind:pressed={$darkMode}>\\r\\n                    <Icon class=\\"material-icons\\" on>dark_mode</Icon>\\r\\n                    <Icon class=\\"material-icons\\">light_mode</Icon>\\r\\n                </IconButton>\\r\\n                <IconButton toggle bind:pressed={$showRight}>\\r\\n                    <Icon class=\\"material-icons\\" on>close</Icon>\\r\\n                    <Icon class=\\"material-icons\\">menu</Icon>\\r\\n                </IconButton>\\r\\n            </Section>\\r\\n        </Row>\\r\\n    </TopAppBar>\\r\\n    <div class=\\"navback\\"></div>\\r\\n</header>\\r\\n\\r\\n<div class=\\"container\\" bind:clientWidth={W}>\\r\\n    \\r\\n    <Drawer style=\\"width:180px;\\" variant='modal' bind:open={$showLeft}>\\r\\n        <Content>\\r\\n            <header class='nav'>\\r\\n                {#key $page.data.user}\\r\\n                <Nav />\\r\\n                {/key}\\r\\n            </header>\\r\\n        </Content>\\r\\n    </Drawer>\\r\\n    <!-- <Scrim /> -->\\r\\n    {#if fixed}\\r\\n        <Scrim on:click={() => $showLeft = false}/>\\r\\n    {/if}\\r\\n    <AppContent style=\\"margin-left: {!fixed && $showLeft ? '180px' : '0px'};margin-right: {$showRight && W > 600 ? '300px' : '0px'};\\">\\r\\n        <main class={mainClass}>\\r\\n            <div class=\\"center\\">\\r\\n                <slot />\\r\\n            </div>\\r\\n            <!-- <div class=\\"side\\">\\r\\n                <Sidebar />\\r\\n            </div> -->\\r\\n        </main>\\r\\n    </AppContent>\\r\\n    {#if !$presentationMode && $showRight}\\r\\n        <div class=\\"side\\" style=\\"width:{sideWidth}px; top: {$TopBarHeight}px;\\" transition:fly|global={{x:300}}>\\r\\n            <Sidebar />\\r\\n        </div>\\r\\n    {/if}\\r\\n    {#if fixed}\\r\\n        <!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n        <!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n        <div class=\\"modal\\" on:click={() => $showRight = false} style=\\"display: {$showRight ? '' : 'none'}\\"></div>\\r\\n    {/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .modal {\\r\\n        display: block;\\r\\n        position: fixed;\\r\\n        left: 0;\\r\\n        top: 0;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        background-color: rgba(0, 0, 0, 0.32);\\r\\n        z-index: 5;\\r\\n        transition-property: opacity;\\r\\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\r\\n    }\\r\\n    /* .container {\\r\\n        display: grid;\\r\\n        grid-template-columns: 0.16fr auto;\\r\\n        width: 100%;\\r\\n        gap: 0.5em;\\r\\n    } */\\r\\n    * {\\r\\n        box-sizing: border-box;\\r\\n    }\\r\\n    .container {\\r\\n        width: 100%;\\r\\n    }\\r\\n    /* .logo {\\r\\n        margin-left: 0.5em;\\r\\n        margin-top: 0.5em;\\r\\n    } */\\r\\n    header {\\r\\n        min-width: 100%;\\r\\n        z-index: 200;\\r\\n    }\\r\\n    .navback {\\r\\n        min-height: 4em;\\r\\n    }\\r\\n    .nav {\\r\\n        max-width: 150px;\\r\\n    }\\r\\n    /* main {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.5em;\\r\\n        width: 100%;\\r\\n        justify-items: center;\\r\\n        \\r\\n    } */\\r\\n    main {\\r\\n        display: flex;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: calc(100% - 256px) 256px;\\r\\n    }\\r\\n    .center {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        width: 100%;\\r\\n        /* flex-grow: 1; */\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n    .side {\\r\\n        min-width: 300px;\\r\\n        position: fixed;\\r\\n        top: 4em;\\r\\n        right:0;\\r\\n        height: 100vh;\\r\\n        overflow-y: auto;\\r\\n        /* padding: 0.5em; */\\r\\n        z-index: 6;\\r\\n        box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;\\r\\n    }\\r\\n    @media only screen and (max-width: 600px) {\\r\\n        /* main {\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            gap: 1em;\\r\\n            width: 100%;\\r\\n            flex: 1;\\r\\n            min-width: 300px;\\r\\n            \\r\\n        } */\\r\\n        /* .side {\\r\\n            \\r\\n            width: 100%;\\r\\n            position: relative;\\r\\n            height: fit-content;\\r\\n        } */\\r\\n        .navback {\\r\\n            min-height: 3.5em;\\r\\n        }\\r\\n    }\\r\\n    \\r\\n</style>\\r\\n"],"names":[],"mappings":"AA8HI,mBAAO,CACH,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACrC,OAAO,CAAE,CAAC,CACV,mBAAmB,CAAE,OAAO,CAC5B,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC3D,CAOA,aAAE,CACE,UAAU,CAAE,UAChB,CACA,uBAAW,CACP,KAAK,CAAE,IACX,CAKA,mBAAO,CACH,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GACb,CACA,qBAAS,CACL,UAAU,CAAE,GAChB,CACA,iBAAK,CACD,SAAS,CAAE,KACf,CASA,iBAAK,CACD,OAAO,CAAE,IACb,CACA,kBAAM,CACF,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,KAC9C,CACA,oBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,IAAI,CAEX,OAAO,CAAE,KACb,CACA,kBAAM,CACF,SAAS,CAAE,KAAK,CAChB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,MAAM,CAAC,CACP,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAEhB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAC9H,CACA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAgBtC,qBAAS,CACL,UAAU,CAAE,KAChB,CACJ"}`
};
let mainClass = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixed;
  let sideWidth;
  let $showRight, $$unsubscribe_showRight;
  let $$unsubscribe_refreshApp;
  let $darkMode, $$unsubscribe_darkMode;
  let $TopBarHeight, $$unsubscribe_TopBarHeight;
  let $showLeft, $$unsubscribe_showLeft;
  let $currentPath, $$unsubscribe_currentPath;
  let $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  $$unsubscribe_showRight = subscribe(showRight, (value) => $showRight = value);
  $$unsubscribe_refreshApp = subscribe(refreshApp, (value) => value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_TopBarHeight = subscribe(TopBarHeight, (value) => $TopBarHeight = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => $showLeft = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  let W = 500;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    fixed = W < 600;
    sideWidth = $showRight ? 300 : 0;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-191nvh5_START --><link rel="stylesheet" id="theme" href="${"/smui" + escape($darkMode ? "-dark" : "", true) + ".css"}" class="svelte-z3f1g"><!-- HEAD_svelte-191nvh5_END -->`, ""} ${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})} <header style="position: relative;" class="svelte-z3f1g">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "fixed", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, { style: "align-items:center;" }, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  { toggle: true, pressed: $showLeft },
                  {
                    pressed: ($$value) => {
                      $showLeft = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                        default: () => {
                          return `close`;
                        }
                      })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `menu`;
                        }
                      })}`;
                    }
                  }
                )} <div class="logo svelte-z3f1g">${validate_component(Fab, "Fab").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(CommonIcon, "Icon").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img width="40px" height="40px" style="background:white; border-radius:50%;" src="/favicon.png" alt="1" class="svelte-z3f1g">`;
                      }
                    })}`;
                  }
                })}</div> <span class="svelte-z3f1g">${escape($currentPath)}</span>`;
              }
            })} ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
              default: () => {
                return ` ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Refresh"
                  },
                  {},
                  {
                    default: () => {
                      return `refresh`;
                    }
                  }
                )}  ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  { toggle: true, pressed: $darkMode },
                  {
                    pressed: ($$value) => {
                      $darkMode = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                        default: () => {
                          return `dark_mode`;
                        }
                      })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `light_mode`;
                        }
                      })}`;
                    }
                  }
                )} ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  { toggle: true, pressed: $showRight },
                  {
                    pressed: ($$value) => {
                      $showRight = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                        default: () => {
                          return `close`;
                        }
                      })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `menu`;
                        }
                      })}`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })} <div class="navback svelte-z3f1g"></div></header> <div class="container svelte-z3f1g">${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        style: "width:180px;",
        variant: "modal",
        open: $showLeft
      },
      {
        open: ($$value) => {
          $showLeft = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<header class="nav svelte-z3f1g">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
            }
          })}`;
        }
      }
    )}  ${fixed ? `${validate_component(Scrim, "Scrim").$$render($$result, {}, {}, {})}` : ``} ${validate_component(AppContent, "AppContent").$$render(
      $$result,
      {
        style: "margin-left: " + (!fixed && $showLeft ? "180px" : "0px") + ";margin-right: 0px;"
      },
      {},
      {
        default: () => {
          return `<main class="${escape(null_to_empty(mainClass), true) + " svelte-z3f1g"}"><div class="center svelte-z3f1g">${slots.default ? slots.default({}) : ``}</div> </main>`;
        }
      }
    )} ${!$presentationMode && $showRight ? `<div class="side svelte-z3f1g" style="${"width:" + escape(sideWidth, true) + "px; top: " + escape($TopBarHeight, true) + "px;"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>` : ``} ${fixed ? `  <div class="modal svelte-z3f1g" style="${"display: " + escape($showRight ? "" : "none", true)}"></div>` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_showRight();
  $$unsubscribe_refreshApp();
  $$unsubscribe_darkMode();
  $$unsubscribe_TopBarHeight();
  $$unsubscribe_showLeft();
  $$unsubscribe_currentPath();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BXgmpm9l.js.map
