import { a as subscribe } from './utils-DhkojCd_.js';
import { c as create_ssr_component, o as onDestroy, e as escape, v as validate_component, i as each } from './ssr2-CDgUAJs6.js';
import { D as Drawer, C as Content, S as Scrim, A as AppContent, a as Separator } from './Separator-DfOjHcae.js';
import { C as CommonIcon } from './Svg-Dkxrus40.js';
import { L as List, I as Item } from './Item-T2YrjSpA.js';
import { T as Text } from './Subheader-DEm_inUP.js';
import { G as Graphic } from './Graphic-CnHJKmsY.js';
import './client-CAo-6NMJ.js';
import { p as pageLoadState, d as darkMode, s as showLeft, c as currentPath, n as navList } from './stores2-BRo56-4P.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content$1 } from './ActionIcons-Bx2zL88O.js';
import { p as page } from './stores3-kDd52ji6.js';
import { T as TopAppBar } from './TopAppBar-Cp4VU7Jx.js';
import { R as Row, S as Section } from './Title-HH4z9KSc.js';
import { I as IconButton } from './IconButton-Bt4YIh4x.js';
import { L as LinearProgress } from './LinearProgress-C70B_DWC.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './dispatch-BOSWPsEc.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './Ripple-N--aPaMn.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';

const css$6 = {
  code: "nav.svelte-mp2sys{overflow-y:auto;display:flex;justify-content:start;flex-direction:column;padding-bottom:5em}",
  map: '{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    \\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, navList } from \\"$lib/vectorial/stores\\";\\r\\n\\r\\n    // $: isAuth = $page.data.user;\\r\\n<\/script>\\r\\n\\r\\n<nav>\\r\\n    <div class=\\"top\\">\\r\\n        <!-- {#if isAuth}\\r\\n        <List twoLine avatarList>\\r\\n            \\r\\n                <Item on:click={() => goto(\\"/vectorial/auth\\")}>\\r\\n                     <Graphic style=\\"background-image: url(https://place-hold.it/40x40?text={\\"Mithilesh Kumar\\"\\r\\n                    .split(\' \')\\r\\n                    .map((val) => val.substring(0, 1))\\r\\n                    .join(\'\')}&fontsize=16);\\" /> \\r\\n                    <Graphic>\\r\\n                        <img\\r\\n                            class=\\"round\\"\\r\\n                            width=\\"40px\\"\\r\\n                            height=\\"40px\\"\\r\\n                            src={$profileImage}\\r\\n                            alt=\\"Profile\\"\\r\\n                        />\\r\\n                    </Graphic>\\r\\n                    <Text>\\r\\n                        <PrimaryText>{isAuth.name}</PrimaryText>\\r\\n                        <SecondaryText>{isAuth.publicID}</SecondaryText>\\r\\n                    </Text>\\r\\n                     <Meta class=\'material-icons\'>info</Meta>\\r\\n                </Item>\\r\\n            \\r\\n        </List>\\r\\n        {:else}\\r\\n            <br>\\r\\n            <Button on:click={() => goto(\\"/vectorial/auth\\")}>Log in / Sign up</Button>\\r\\n            \\r\\n        {/if}\\r\\n        <List>\\r\\n            {#if isAuth}\\r\\n                <Item\\r\\n                    on:SMUI:action={() => goto(`/vectorial/${$page.data.user.publicID}`)}\\r\\n                >\\r\\n                    <Graphic class=\\"material-icons\\">person</Graphic>\\r\\n                    <Text>Profile</Text>\\r\\n                </Item>\\r\\n                \\r\\n                <Item on:SMUI:action={() => goto(`/vectorial/${$page.data.user.publicID}/drawings`)}>\\r\\n                    <Graphic class=\\"material-symbols-outlined\\">gallery_thumbnail</Graphic>\\r\\n                    <Text>Drawings</Text>\\r\\n                </Item>\\r\\n                <Separator />\\r\\n            {/if}\\r\\n            <Item\\r\\n                    on:SMUI:action={() => goto(`/subscription`)}\\r\\n                >\\r\\n                    <Graphic class=\\"material-icons\\">card_membership</Graphic>\\r\\n                    <Text>Subscription</Text>\\r\\n                </Item>\\r\\n        </List> -->\\r\\n        <List>\\r\\n            <Item on:SMUI:action={() => goto(`/vectorial/drawings`)}>\\r\\n                <Graphic class=\\"material-symbols-outlined\\">gallery_thumbnail</Graphic>\\r\\n                <Text>Drawings</Text>\\r\\n            </Item>\\r\\n            <Item on:SMUI:action={() => goto(`/vectorial/learn`)}>\\r\\n                <Graphic class=\\"material-icons\\">school</Graphic>\\r\\n                <Text>Learn</Text>\\r\\n            </Item>\\r\\n            <Item wrapper>\\r\\n                <List style=\\"padding-left: 10px;\\">\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/shapes\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Shapes</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/text\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Text</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/latex\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>LaTeX</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/paths\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Paths</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/styles\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Styles</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/transform\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Transform</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/markers\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Markers</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/filters\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Filters</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/masks\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Masks</Text>\\r\\n                    </Item>\\r\\n                    <Item on:SMUI:action={() => goto(\\"/vectorial/learn/advanced\\")}>\\r\\n                        <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                        <Text>Advanced</Text>\\r\\n                    </Item>\\r\\n                </List>\\r\\n            </Item>\\r\\n            \\r\\n            <!-- <Item on:SMUI:action={() => goto(\\"/home\\")}>\\r\\n                <Graphic class=\\"material-icons\\">home</Graphic>\\r\\n                <Text>Home</Text>\\r\\n            </Item> -->\\r\\n            \\r\\n           <!-- {#if $navList.length > 0}\\r\\n                <Separator />\\r\\n                {#each $navList as link}\\r\\n                    <Item on:SMUI:action={() => goto(`/${$page.data.user.publicID}${link.url}`)}>\\r\\n                        <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                        <Text>{link.name}</Text>\\r\\n                    </Item>\\r\\n                {/each}\\r\\n            {/if}\\r\\n            <Item on:SMUI:action={() => goto(\'/settings\')}>\\r\\n                <Graphic class=\\"material-icons\\">settings</Graphic>\\r\\n                <Text>Settings</Text>\\r\\n            </Item> -->\\r\\n        </List>\\r\\n        <Separator />\\r\\n        <!-- {#if isAuth}\\r\\n            <div class=\\"post\\">\\r\\n                <Button on:click={() => goto(\\"/compose\\")}>\\r\\n                    <Label>Create Post</Label>\\r\\n                </Button>\\r\\n            </div>\\r\\n        {/if}  -->\\r\\n    </div>\\r\\n    <div class=\\"bottom\\" />\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n    nav {\\r\\n        /* height: calc(100vh - 5em); */\\r\\n        /* height: 500px; */\\r\\n        overflow-y: auto;\\r\\n        display: flex;\\r\\n        justify-content: start;\\r\\n        flex-direction: column;\\r\\n        /* position: sticky;\\r\\n        top: 0.5em; */\\r\\n        padding-bottom: 5em;\\r\\n    }\\r\\n    \\r\\n    \\r\\n    /* .post {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgKI,iBAAI,CAGA,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,KAAK,CACtB,cAAc,CAAE,MAAM,CAGtB,cAAc,CAAE,GACpB"}'
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<nav class="svelte-mp2sys"><div class="top"> ${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-symbols-outlined" }, {}, {
            default: () => {
              return `gallery_thumbnail`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Drawings`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `school`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Learn`;
            }
          })}`;
        }
      })} ${validate_component(Item, "Item").$$render($$result, { wrapper: true }, {}, {
        default: () => {
          return `${validate_component(List, "List").$$render($$result, { style: "padding-left: 10px;" }, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Shapes`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Text`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `LaTeX`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Paths`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Styles`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Transform`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Markers`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Filters`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Masks`;
                    }
                  })}`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `view_headline`;
                    }
                  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Advanced`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}  `;
    }
  })} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} </div> <div class="bottom"></div> </nav>`;
});
const css$5 = {
  code: ".title.svelte-y40hrq{font-size:1.2em}p.svelte-y40hrq{display:flex;align-items:center;gap:1em;font-size:0.8em;margin:0.5em 0}",
  map: '{"version":3,"file":"Contact.svelte","sources":["Contact.svelte"],"sourcesContent":["<script><\/script>\\r\\n<style>\\r\\n    .title {\\r\\n        font-size: 1.2em;\\r\\n    }\\r\\n    p {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        gap: 1em;\\r\\n        font-size: 0.8em;\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <p class=\\"title\\">Contact Us</p>\\r\\n    <p><span class=\\"material-icons\\">email</span> <span><strong>mithilesh.qit</strong>@gmail.com</span></p>\\r\\n    <!-- <p><span class=\\"material-icons\\">phone</span> +91 8235463666</p> -->\\r\\n    <p><span class=\\"material-icons\\">home_work</span> 2nd Floor, B154-B5 Silver City Themes, Derabassi, Chandigarh 140507, Punjab, India</p>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAEI,oBAAO,CACH,SAAS,CAAE,KACf,CACA,eAAE,CACE,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,KAAK,CAAC,CAClB"}'
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<article data-svelte-h="svelte-xj8dgs"><p class="title svelte-y40hrq">Contact Us</p> <p class="svelte-y40hrq"><span class="material-icons">email</span> <span><strong>mithilesh.qit</strong>@gmail.com</span></p>  <p class="svelte-y40hrq"><span class="material-icons">home_work</span> 2nd Floor, B154-B5 Silver City Themes, Derabassi, Chandigarh 140507, Punjab, India</p></article>`;
});
const css$4 = {
  code: "p.svelte-a6gmw5{font-size:0.8em;font-weight:300}",
  map: '{"version":3,"file":"Copyright.svelte","sources":["Copyright.svelte"],"sourcesContent":["<script><\/script>\\r\\n<style>\\r\\n    p {\\r\\n        font-size: 0.8em;\\r\\n        font-weight: 300;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <p>Copyright &copy; 2022 vectorial.app All Rights Reserved</p>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAEI,eAAE,CACE,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GACjB"}'
};
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<article data-svelte-h="svelte-8alat2"><p class="svelte-a6gmw5">Copyright © 2022 vectorial.app All Rights Reserved</p></article>`;
});
const css$3 = {
  code: "nav.svelte-svkd07{display:flex;flex-direction:row;flex-wrap:wrap;gap:1em;align-items:center}",
  map: '{"version":3,"file":"Social.svelte","sources":["Social.svelte"],"sourcesContent":["<script>\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    nav {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>\\r\\n<nav>\\r\\n    <a href=\\"https://www.facebook.com/profile.php?id=100088658187893&mibextid=ZbWKwL\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/facebook.svg\\" alt=\\"facebook\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://twitter.com/vectorialapp\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/twitter.png\\" alt=\\"twitter\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://www.youtube.com/@vectorialapp\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/youtube.svg\\" alt=\\"youtube\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://www.instagram.com/vectorial.app/\\" style=\\"font-size: 0.8em;\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/instagram.svg\\" alt=\\"instagram\\" />\\r\\n    </a>\\r\\n</nav>"],"names":[],"mappings":"AAII,iBAAI,CACA,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MACjB"}'
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-svkd07" data-svelte-h="svelte-1esrqcn"><a href="https://www.facebook.com/profile.php?id=100088658187893&amp;mibextid=ZbWKwL"><img width="23px" height="23px" src="/facebook.svg" alt="facebook"></a> <a href="https://twitter.com/vectorialapp"><img width="23px" height="23px" src="/twitter.png" alt="twitter"></a> <a href="https://www.youtube.com/@vectorialapp"><img width="23px" height="23px" src="/youtube.svg" alt="youtube"></a> <a href="https://www.instagram.com/vectorial.app/" style="font-size: 0.8em;"><img width="23px" height="23px" src="/instagram.svg" alt="instagram"></a></nav>`;
});
const css$2 = {
  code: "footer.svelte-1juizb1{padding-top:1em;font-family:roboto;padding-bottom:4em}nav.svelte-1juizb1{display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-top:1em}a.svelte-1juizb1{font-size:0.8em}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\r\\n    import Contact from \\"./Contact.svelte\\";\\r\\n    import Copyright from \\"./Copyright.svelte\\";\\r\\n    import Social from \\"./Social.svelte\\";\\r\\n    // import a from '$lib/vectorial/ui/a.svelte';\\r\\n<\/script>\\r\\n\\r\\n<footer>\\r\\n    <Social />\\r\\n    <Contact />\\r\\n    <nav>\\r\\n        <ul>\\r\\n            <li><a href=\\"/vectorial/about\\">About Us</a></li>\\r\\n            <!-- <li>\\r\\n                <a href=\\"/subscription\\">Pricing</a>\\r\\n            </li> -->\\r\\n            <li>\\r\\n                <a href=\\"/vectorial/legal/privacy\\"\\r\\n                    >Privacy Policy</a\\r\\n                >\\r\\n            </li>\\r\\n            <!-- <li>\\r\\n                <a href=\\"/vectorial/legal/refund\\"\\r\\n                    >Refund Policy</a\\r\\n                >\\r\\n            </li> -->\\r\\n            <li>\\r\\n                <a href=\\"/vectorial/legal/terms\\"\\r\\n                    >Terms and Conditions</a\\r\\n                >\\r\\n            </li>\\r\\n            <!-- <li>\\r\\n                <a\\r\\n                    href=\\"/shipping\\"\\r\\n                    >Shipping</a\\r\\n                >\\r\\n            </li> -->\\r\\n        </ul>\\r\\n    </nav>\\r\\n    <Copyright />\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n    footer {\\r\\n        /* border-top: 2px solid rgb(0, 100, 150); */\\r\\n        padding-top: 1em;\\r\\n        /* padding: 1em; */\\r\\n        /* background: radial-gradient(rgb(35 100 120), black); */\\r\\n        font-family: roboto;\\r\\n        padding-bottom: 4em;\\r\\n    }\\r\\n    nav {\\r\\n        display: flex;\\r\\n        gap: 0.5em;\\r\\n        align-items: center;\\r\\n        flex-wrap: wrap;\\r\\n        margin-top: 1em;\\r\\n    }\\r\\n    a {\\r\\n        font-size: 0.8em;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2CI,qBAAO,CAEH,WAAW,CAAE,GAAG,CAGhB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GACpB,CACA,kBAAI,CACA,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAChB,CACA,gBAAE,CACE,SAAS,CAAE,KACf"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-1juizb1">${validate_component(Social, "Social").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} <nav class="svelte-1juizb1" data-svelte-h="svelte-1enf9v6"><ul><li><a href="/vectorial/about" class="svelte-1juizb1">About Us</a></li>  <li><a href="/vectorial/legal/privacy" class="svelte-1juizb1">Privacy Policy</a></li>  <li><a href="/vectorial/legal/terms" class="svelte-1juizb1">Terms and Conditions</a></li> </ul></nav> ${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})} </footer>`;
});
const css$1 = {
  code: "aside.svelte-1wcyoza{position:relative;display:flex;flex-direction:column;gap:0.5em}",
  map: '{"version":3,"file":"Sidebar.svelte","sources":["Sidebar.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content } from \\"@smui/card\\";\\r\\n    import Footer from \\"$lib/vectorial/footer/Footer.svelte\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import Fab, { Icon } from \\"@smui/fab\\";\\r\\n    import { Svg } from \\"@smui/common\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, navList } from \\"$lib/vectorial/stores\\";\\r\\n\\r\\n    $: isAuth = $page.data.user;\\r\\n<\/script>\\r\\n\\r\\n<aside>\\r\\n    <!-- <div class=\\"fixed\\"> -->\\r\\n    {#if isAuth}\\r\\n        {#if $navList.length > 0}\\r\\n            <Card>\\r\\n                <!-- <Content> -->\\r\\n\\r\\n                <List>\\r\\n                    {#each $navList as link}\\r\\n                        <Item\\r\\n                            on:SMUI:action={() =>\\r\\n                                goto(`/vectorial/${$page.data.user.publicID}${link.url}`)}\\r\\n                        >\\r\\n                            <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                            <Text>{link.name}</Text>\\r\\n                        </Item>\\r\\n                    {/each}\\r\\n                </List>\\r\\n\\r\\n                <!-- </Content> -->\\r\\n            </Card>\\r\\n        {/if}\\r\\n    {/if}\\r\\n    <!-- </div> -->\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Footer />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</aside>\\r\\n\\r\\n<style>\\r\\n    aside {\\r\\n        position: relative;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    /* @media only screen and (min-width: 600px) {\\r\\n        .fixed {\\r\\n            position: fixed;\\r\\n            right: 0;\\r\\n            width: 256px;\\r\\n            overflow-y: scroll;\\r\\n            height: 100vh;\\r\\n        }\\r\\n    } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuDI,oBAAM,CACF,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}'
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isAuth;
  let $page, $$unsubscribe_page;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$result.css.add(css$1);
  isAuth = $page.data.user;
  $$unsubscribe_page();
  $$unsubscribe_navList();
  return `<aside class="svelte-1wcyoza"> ${isAuth ? `${$navList.length > 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return ` ${validate_component(List, "List").$$render($$result, {}, {}, {
        default: () => {
          return `${each($navList, (link) => {
            return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu_book`;
                  }
                })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(link.name)}`;
                  }
                })} `;
              }
            })}`;
          })}`;
        }
      })} `;
    }
  })}` : ``}` : ``}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
        gtag("config", "G-KP8TEF4KK1", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1kdix3f_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-KP8TEF4KK1" data-svelte-h="svelte-1hubz80"><\/script><script data-svelte-h="svelte-1hbmg1k">window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-KP8TEF4KK1");<\/script><!-- HEAD_svelte-1kdix3f_END -->`, ""}`;
});
const css = {
  code: ".svelte-kiwt7b{box-sizing:border-box}.container.svelte-kiwt7b{width:100%}header.svelte-kiwt7b{min-width:100%;z-index:200}.navback.svelte-kiwt7b{min-height:4em}.nav.svelte-kiwt7b{max-width:150px}main.svelte-kiwt7b{display:grid;grid-template-columns:calc(100% - 256px) 256px}.center.svelte-kiwt7b{width:100%;flex-grow:1;padding:0.5em}.side.svelte-kiwt7b{min-width:250px;position:sticky;top:4em;height:100vh;overflow-y:auto}@media only screen and (max-width: 600px){main.svelte-kiwt7b{display:flex;flex-direction:column;gap:1em;width:100%;flex:1;min-width:300px}.side.svelte-kiwt7b{width:100%;position:relative;height:fit-content}.navback.svelte-kiwt7b{min-height:3.5em}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Drawer, {\\r\\n        AppContent,\\r\\n        Content,\\r\\n        Scrim,\\r\\n        Header,\\r\\n        Title,\\r\\n        Subtitle,\\r\\n    } from \\"@smui/drawer\\";\\r\\n    import Fab from \\"@smui/fab\\";\\r\\n    import { Svg } from \\"@smui/common\\";\\r\\n    import LayoutGrid, { Cell } from \\"@smui/layout-grid\\";\\r\\n    import Nav from \\"$lib/vectorial/components/Nav.svelte\\";\\r\\n    import Sidebar from \\"$lib/vectorial/components/Sidebar.svelte\\";\\r\\n    import TopAppBar, { Row, Section } from \\"@smui/top-app-bar\\";\\r\\n    import IconButton, {Icon} from \\"@smui/icon-button\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import List, { Item, Text } from \\"@smui/list\\";\\r\\n    import { showLeft, darkMode, pageLoadState } from \\"$lib/vectorial/stores.js\\";\\r\\n    import {page} from '$app/stores';\\r\\n    import Analytics from \\"$lib/vectorial/components/Analytics.svelte\\";\\r\\n    import { goto } from '$app/navigation';\\r\\n    import {currentPath} from '$lib/vectorial/stores';\\r\\n    import { onMount, onDestroy } from 'svelte';\\r\\n    import LinearProgress from '@smui/linear-progress';\\r\\n    let W;\\r\\n    $: fixed = W < 600;\\r\\n    let progress = 0;\\r\\n    let closed = false;\\r\\n    let timer;\\r\\n    \\r\\n    $: if(!$pageLoadState) {\\r\\n        reset();\\r\\n    } \\r\\n \\r\\n    onDestroy(() => {\\r\\n        clearInterval(timer);\\r\\n    });\\r\\n \\r\\n    function reset() {\\r\\n        progress = 0;\\r\\n        closed = false;\\r\\n        clearInterval(timer);\\r\\n        timer = setInterval(() => {\\r\\n            progress += 0.1;\\r\\n            if(!$pageLoadState && progress >= 0.7) progress = 0.7;\\r\\n            if ($pageLoadState || progress >= 1) {\\r\\n                progress = 1;\\r\\n                closed = true;\\r\\n                clearInterval(timer);\\r\\n            }\\r\\n        }, 100);\\r\\n    }\\r\\n<\/script>\\r\\n<svelte:head>\\r\\n    <link\\r\\n        rel=\\"stylesheet\\"\\r\\n        id=\\"theme\\"\\r\\n        href=\\"/smui{$darkMode ? '-dark' : ''}.css\\"\\r\\n    />\\r\\n</svelte:head>\\r\\n<Analytics />\\r\\n<header style=\\"position: relative;\\">\\r\\n    <TopAppBar variant=\\"fixed\\" color=\\"secondary\\">\\r\\n        <Row>\\r\\n            <Section style=\\"align-items:center;\\">\\r\\n                <!-- <div class=\\"logo\\">\\r\\n                    <Fab on:click={() => goto(\\"/\\")}>\\r\\n                        <Icon>\\r\\n                            <img width=\\"40px\\" height=\\"40px\\" style=\\"background:white; border-radius:50%;\\" src=\\"/favicon.png\\" alt=\\"1\\" />\\r\\n                        </Icon>\\r\\n                    </Fab>\\r\\n                </div> -->\\r\\n                <IconButton class=\\"material-icons\\" on:click={() => $showLeft = !$showLeft}>menu</IconButton>\\r\\n                <IconButton class=\\"material-icons\\" aria-label=\\"Home\\" on:click={() => goto(\\"/\\")}>home</IconButton>\\r\\n                <span>\\r\\n                    {$currentPath}\\r\\n                    <!-- {#if $page.route.id === '/'}\\r\\n                        AI Guru Dev\\r\\n                    {:else if $page.route.id === '/home'}\\r\\n                        Home\\r\\n                    {:else if $page.route.id === '/settings/profile'}\\r\\n                        Edit Profile\\r\\n                    {:else if $page.route.id === '/auth'}\\r\\n                        Authentication\\r\\n                    {:else if $page.route.id === '/[publicID]'}\\r\\n                        {$page.params.publicID}\\r\\n                    {:else if $page.route.id === '/post/[postID]'}\\r\\n                        Post\\r\\n                    {:else if $page.route.id === '/[publicID]/courses'}\\r\\n                        My Courses\\r\\n                    {:else if $page.route.id === '/fundamentals' || $page.route.id === '/[publicID]/fundamentals'}\\r\\n                        Fundamentals\\r\\n                    {:else if $page.route.id === '/calculus' || $page.route.id === '/[publicID]/calculus'}\\r\\n                        Calculus\\r\\n                    {:else if $page.route.id === '/linearAlgebra' || $page.route.id === '/[publicID]/linearAlgebra'}\\r\\n                        Linear Algebra\\r\\n                    {:else if $page.route.id === '/probability' || $page.route.id === '/[publicID]/probability'}\\r\\n                        Probability\\r\\n                    {:else if $page.route.id === '/statistics' || $page.route.id === '/[publicID]/statistics'}\\r\\n                        Statistics\\r\\n                    {:else if $page.route.id === '/optimization' || $page.route.id === '/[publicID]/optimization'}\\r\\n                        Optimization\\r\\n                    {:else if $page.route.id === '/graph' || $page.route.id === '/[publicID]/graph'}\\r\\n                        Graph theory\\r\\n                    {/if} -->\\r\\n                </span>\\r\\n            </Section>\\r\\n            <Section align=\\"end\\" toolbar>\\r\\n                <IconButton class=\\"material-icons\\" aria-label=\\"Search\\" on:click={() => goto('/search')}>search</IconButton>\\r\\n                <!-- <IconButton class=\\"material-icons\\" aria-label=\\"Settings\\"\\r\\n                    >settings</IconButton\\r\\n                >\\r\\n                <IconButton class=\\"material-icons\\" aria-label=\\"Cancel\\"\\r\\n                    >close</IconButton\\r\\n                > -->\\r\\n                <IconButton toggle bind:pressed={$darkMode}>\\r\\n                    <Icon class=\\"material-icons\\" on>dark_mode</Icon>\\r\\n                    <Icon class=\\"material-icons\\">light_mode</Icon>\\r\\n                </IconButton>\\r\\n            </Section>\\r\\n        </Row>\\r\\n        {#key $pageLoadState}\\r\\n        <LinearProgress bind:progress {closed} />\\r\\n        {/key}\\r\\n    </TopAppBar>\\r\\n    <div class=\\"navback\\"></div>\\r\\n</header>\\r\\n\\r\\n<div class=\\"container\\" bind:clientWidth={W}>\\r\\n    \\r\\n    <Drawer variant='modal' bind:open={$showLeft}>\\r\\n        <Content>\\r\\n            <header class='nav'>\\r\\n                <Nav />\\r\\n            </header>\\r\\n        </Content>\\r\\n    </Drawer>\\r\\n    <!-- <Scrim /> -->\\r\\n    {#if fixed}\\r\\n        <Scrim on:click={() => $showLeft = false}/>\\r\\n    {/if}\\r\\n    <AppContent>\\r\\n        <main>\\r\\n            <div class=\\"center\\">\\r\\n                <slot />\\r\\n            </div>\\r\\n            <div class=\\"side\\">\\r\\n                \\r\\n                <Sidebar />\\r\\n                \\r\\n            </div>\\r\\n        </main>\\r\\n    </AppContent>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    /* .container {\\r\\n        display: grid;\\r\\n        grid-template-columns: 0.16fr auto;\\r\\n        width: 100%;\\r\\n        gap: 0.5em;\\r\\n    } */\\r\\n    * {\\r\\n        box-sizing: border-box;\\r\\n    }\\r\\n    .container {\\r\\n        width: 100%;\\r\\n    }\\r\\n    /* .logo {\\r\\n        margin-left: 0.5em;\\r\\n        margin-top: 0.5em;\\r\\n    } */\\r\\n    header {\\r\\n        min-width: 100%;\\r\\n        z-index: 200;\\r\\n    }\\r\\n    .navback {\\r\\n        min-height: 4em;\\r\\n    }\\r\\n    .nav {\\r\\n        max-width: 150px;\\r\\n    }\\r\\n    /* main {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.5em;\\r\\n        width: 100%;\\r\\n        justify-items: center;\\r\\n        \\r\\n    } */\\r\\n    main {\\r\\n        display: grid;\\r\\n        grid-template-columns: calc(100% - 256px) 256px;\\r\\n    }\\r\\n    .center {\\r\\n        width: 100%;\\r\\n        flex-grow: 1;\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n    .side {\\r\\n        min-width: 250px;\\r\\n        position: sticky;\\r\\n        top: 4em;\\r\\n        height: 100vh;\\r\\n        overflow-y: auto;\\r\\n        /* padding: 0.5em; */\\r\\n    }\\r\\n    @media only screen and (max-width: 600px) {\\r\\n        main {\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            gap: 1em;\\r\\n            width: 100%;\\r\\n            flex: 1;\\r\\n            min-width: 300px;\\r\\n            /* overflow: hidden; */\\r\\n        }\\r\\n        .side {\\r\\n            /* padding: 0 1em; */\\r\\n            width: 100%;\\r\\n            position: relative;\\r\\n            height: fit-content;\\r\\n        }\\r\\n        .navback {\\r\\n            min-height: 3.5em;\\r\\n        }\\r\\n    }\\r\\n    \\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoKI,cAAE,CACE,UAAU,CAAE,UAChB,CACA,wBAAW,CACP,KAAK,CAAE,IACX,CAKA,oBAAO,CACH,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GACb,CACA,sBAAS,CACL,UAAU,CAAE,GAChB,CACA,kBAAK,CACD,SAAS,CAAE,KACf,CASA,kBAAK,CACD,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,KAC9C,CACA,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,CAAC,CACZ,OAAO,CAAE,KACb,CACA,mBAAM,CACF,SAAS,CAAE,KAAK,CAChB,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CACR,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAEhB,CACA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACtC,kBAAK,CACD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,KAEf,CACA,mBAAM,CAEF,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,WACZ,CACA,sBAAS,CACL,UAAU,CAAE,KAChB,CACJ"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixed;
  let $pageLoadState, $$unsubscribe_pageLoadState;
  let $darkMode, $$unsubscribe_darkMode;
  let $showLeft, $$unsubscribe_showLeft;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_pageLoadState = subscribe(pageLoadState, (value) => $pageLoadState = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => $showLeft = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  let W;
  let progress = 0;
  let closed = false;
  let timer;
  onDestroy(() => {
    clearInterval(timer);
  });
  function reset() {
    progress = 0;
    closed = false;
    clearInterval(timer);
    timer = setInterval(
      () => {
        progress += 0.1;
        if (!$pageLoadState && progress >= 0.7) progress = 0.7;
        if ($pageLoadState || progress >= 1) {
          progress = 1;
          closed = true;
          clearInterval(timer);
        }
      },
      100
    );
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    fixed = W < 600;
    {
      if (!$pageLoadState) {
        reset();
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-191nvh5_START --><link rel="stylesheet" id="theme" href="${"/smui" + escape($darkMode ? "-dark" : "", true) + ".css"}" class="svelte-kiwt7b"><!-- HEAD_svelte-191nvh5_END -->`, ""} ${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})} <header style="position: relative;" class="svelte-kiwt7b">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "fixed", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, { style: "align-items:center;" }, {}, {
              default: () => {
                return ` ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu`;
                  }
                })} ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Home"
                  },
                  {},
                  {
                    default: () => {
                      return `home`;
                    }
                  }
                )} <span class="svelte-kiwt7b">${escape($currentPath)} </span>`;
              }
            })} ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Search"
                  },
                  {},
                  {
                    default: () => {
                      return `search`;
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
                )}`;
              }
            })}`;
          }
        })} ${validate_component(LinearProgress, "LinearProgress").$$render(
          $$result,
          { closed, progress },
          {
            progress: ($$value) => {
              progress = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} <div class="navback svelte-kiwt7b"></div></header> <div class="container svelte-kiwt7b">${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { variant: "modal", open: $showLeft },
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
              return `<header class="nav svelte-kiwt7b">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
            }
          })}`;
        }
      }
    )}  ${fixed ? `${validate_component(Scrim, "Scrim").$$render($$result, {}, {}, {})}` : ``} ${validate_component(AppContent, "AppContent").$$render($$result, {}, {}, {
      default: () => {
        return `<main class="svelte-kiwt7b"><div class="center svelte-kiwt7b">${slots.default ? slots.default({}) : ``}</div> <div class="side svelte-kiwt7b">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div></main>`;
      }
    })} </div>`;
  } while (!$$settled);
  $$unsubscribe_pageLoadState();
  $$unsubscribe_darkMode();
  $$unsubscribe_showLeft();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Bqe1-o6L.js.map
