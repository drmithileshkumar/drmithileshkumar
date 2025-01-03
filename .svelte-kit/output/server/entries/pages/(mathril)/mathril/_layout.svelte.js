import { a as subscribe, b as set_store_value, e as null_to_empty } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, i as each, e as escape } from "../../../../chunks/ssr2.js";
import { S as Separator, D as Drawer, C as Content$1, a as Scrim, A as AppContent } from "../../../../chunks/Separator.js";
import { L as List, I as Item } from "../../../../chunks/Item.js";
import { T as Text } from "../../../../chunks/Subheader.js";
import { G as Graphic } from "../../../../chunks/Graphic.js";
import "../../../../chunks/client.js";
import { g as guestID, s as showRight, n as navList, c as currentPath, r as refreshApp, d as darkMode, T as TopBarHeight, a as showLeft } from "../../../../chunks/stores5.js";
import { C as Card } from "../../../../chunks/Card.js";
import { C as Content } from "../../../../chunks/ActionIcons.js";
import { A as Actions } from "../../../../chunks/Actions.js";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                    */
import { p as page } from "../../../../chunks/stores3.js";
import { T as TopAppBar } from "../../../../chunks/TopAppBar.js";
import { R as Row, S as Section } from "../../../../chunks/Title.js";
import { C as CommonIcon } from "../../../../chunks/Svg.js";
import { I as IconButton } from "../../../../chunks/IconButton.js";
const css$7 = {
  code: "nav.svelte-hv43y2{overflow-y:auto;display:flex;justify-content:start;flex-direction:column;padding-bottom:5em}",
  map: '{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    \\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, navList, showLeft } from \\"$lib/mathril/stores\\";\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<nav class=\\"noScrollbar\\">\\r\\n    <List>\\r\\n        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as cl}\\r\\n            <Item on:SMUI:action={() => goto(`/mathril/class${cl}`)}>\\r\\n                <Graphic class=\\"material-icons\\">view_headline</Graphic>\\r\\n                <Text>Class {cl}</Text>\\r\\n            </Item>\\r\\n        {/each}\\r\\n        <Item on:SMUI:action={() => goto(`/mathril/games`)}> \\r\\n            <Graphic class=\\"material-symbols-outlined\\">sports_esports</Graphic>\\r\\n            <Text>Games</Text>\\r\\n        </Item>\\r\\n    </List>\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n    nav {\\r\\n        /* height: calc(100vh - 5em); */\\r\\n        /* height: 500px; */\\r\\n        overflow-y: auto;\\r\\n        display: flex;\\r\\n        justify-content: start;\\r\\n        flex-direction: column;\\r\\n        /* position: sticky;\\r\\n        top: 0.5em; */\\r\\n        padding-bottom: 5em;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmCI,iBAAI,CAGA,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,KAAK,CACtB,cAAc,CAAE,MAAM,CAGtB,cAAc,CAAE,GACpB"}'
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<nav class="noScrollbar svelte-hv43y2">${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (cl) => {
        return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `view_headline`;
              }
            })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
              default: () => {
                return `Class ${escape(cl)}`;
              }
            })} `;
          }
        })}`;
      })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-symbols-outlined" }, {}, {
            default: () => {
              return `sports_esports`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Games`;
            }
          })}`;
        }
      })}`;
    }
  })} </nav>`;
});
const css$6 = {
  code: ".title.svelte-10df7en{font-size:1.2em}p.svelte-10df7en{display:flex;align-items:center;gap:1em;font-size:0.7em;margin:0.5em 0}",
  map: '{"version":3,"file":"Contact.svelte","sources":["Contact.svelte"],"sourcesContent":["<script><\/script>\\r\\n<style>\\r\\n    .title {\\r\\n        font-size: 1.2em;\\r\\n    }\\r\\n    p {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        gap: 1em;\\r\\n        font-size: 0.7em;\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <p class=\\"title\\">Contact Us</p>\\r\\n    <p><span class=\\"material-icons\\">email</span> <span><strong>info</strong>@drmithileshkumar.com</span></p>\\r\\n    <!-- <p><span class=\\"material-icons\\">phone</span> +91 6280331415</p> -->\\r\\n    <!-- <p><span class=\\"material-icons\\">home_work</span> 2nd Floor, B154-B5 Silver City Themes, Derabassi, Chandigarh 140507, Punjab, India</p> -->\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAEI,qBAAO,CACH,SAAS,CAAE,KACf,CACA,gBAAE,CACE,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,KAAK,CAAC,CAClB"}'
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<article data-svelte-h="svelte-siyib7"><p class="title svelte-10df7en">Contact Us</p> <p class="svelte-10df7en"><span class="material-icons">email</span> <span><strong>info</strong>@drmithileshkumar.com</span></p>  </article>`;
});
const css$5 = {
  code: "p.svelte-a6gmw5{font-size:0.8em;font-weight:300}",
  map: '{"version":3,"file":"Copyright.svelte","sources":["Copyright.svelte"],"sourcesContent":["<script><\/script>\\r\\n<style>\\r\\n    p {\\r\\n        font-size: 0.8em;\\r\\n        font-weight: 300;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <p>Copyright &copy; 2024 drmithileshkumar.com All Rights Reserved</p>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAEI,eAAE,CACE,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GACjB"}'
};
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<article data-svelte-h="svelte-19rqea2"><p class="svelte-a6gmw5">Copyright © 2024 drmithileshkumar.com All Rights Reserved</p></article>`;
});
const css$4 = {
  code: ".flex.svelte-16xtixm{display:flex;align-items:center;flex-direction:column;gap:1em}",
  map: `{"version":3,"file":"Install.svelte","sources":["Install.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n<\/script>\\r\\n<div class=\\"flex\\" style=\\"margin: 1em 0 2em 0;\\">\\r\\n    <span>Install Web-App </span>\\r\\n    <span style=\\"display:flex;\\">\\r\\n        <Button style=\\"display:flex;flex-direction:column; gap:0;\\" on:click={() => goto('/mathril/android')}>\\r\\n            <span class=\\"material-symbols-outlined\\">android</span>\\r\\n            <span style=\\"line-height: 0.5em;\\">Android</span>\\r\\n        </Button> \\r\\n        <Button style=\\"display:flex;flex-direction:column; gap:0px;\\" on:click={() => goto('/mathril/iOS')}>\\r\\n            <span><img width=\\"16px\\" height=\\"16px\\" src=\\"/mathril/icons/Apple_logo.svg\\"></span>\\r\\n            <span style=\\"line-height: 0;\\">ios</span>\\r\\n        </Button>\\r\\n    </span>\\r\\n    \\r\\n</div>\\r\\n<style>\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        flex-direction: column;\\r\\n        gap: 1em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAmBI,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GACT"}`
};
const Install = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="flex svelte-16xtixm" style="margin: 1em 0 2em 0;"><span data-svelte-h="svelte-11ulk33">Install Web-App</span> <span style="display:flex;">${validate_component(Button, "Button").$$render(
    $$result,
    {
      style: "display:flex;flex-direction:column; gap:0;"
    },
    {},
    {
      default: () => {
        return `<span class="material-symbols-outlined" data-svelte-h="svelte-spitfm">android</span> <span style="line-height: 0.5em;" data-svelte-h="svelte-rc2shr">Android</span>`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      style: "display:flex;flex-direction:column; gap:0px;"
    },
    {},
    {
      default: () => {
        return `<span data-svelte-h="svelte-1aeaebb"><img width="16px" height="16px" src="/mathril/icons/Apple_logo.svg"></span> <span style="line-height: 0;" data-svelte-h="svelte-1w5689o">ios</span>`;
      }
    }
  )}</span> </div>`;
});
const css$3 = {
  code: "nav.svelte-1htfwl7{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:1em 0.5em;justify-content:space-around}",
  map: '{"version":3,"file":"Social.svelte","sources":["Social.svelte"],"sourcesContent":["<script>\\r\\n    import Link from \\"$lib/ui/Link.svelte\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    nav {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        align-items: center;\\r\\n        margin: 1em 0.5em;\\r\\n        justify-content: space-around;\\r\\n    }\\r\\n</style>\\r\\n<nav>\\r\\n    <a href=\\"https://t.me/mathril_workout\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/mathril/telegram.svg\\" alt=\\"telegram\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://www.facebook.com/profile.php?id=100089996317409&mibextid=ZbWKwL\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/mathril/facebook.svg\\" alt=\\"facebook\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://twitter.com/mathrilcom\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/mathril/twitter.png\\" alt=\\"twitter\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://www.youtube.com/@mathril_workout\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/mathril/youtube.svg\\" alt=\\"youtube\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://www.instagram.com/mathril_com/\\" style=\\"font-size: 0.8em;\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/mathril/instagram.svg\\" alt=\\"instagram\\" />\\r\\n    </a>\\r\\n    <a href=\\"https://www.whatsapp.com/channel/0029VaAViMm96H4P8bcAzn1w\\" style=\\"font-size: 0.8em;\\">\\r\\n        <img width=\\"23px\\" height=\\"23px\\" src=\\"/mathril/whatsapp.svg\\" alt=\\"instagram\\" />\\r\\n    </a>\\r\\n</nav>"],"names":[],"mappings":"AAII,kBAAI,CACA,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,eAAe,CAAE,YACrB"}'
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-1htfwl7" data-svelte-h="svelte-1afe1pd"><a href="https://t.me/mathril_workout"><img width="23px" height="23px" src="/mathril/telegram.svg" alt="telegram"></a> <a href="https://www.facebook.com/profile.php?id=100089996317409&amp;mibextid=ZbWKwL"><img width="23px" height="23px" src="/mathril/facebook.svg" alt="facebook"></a> <a href="https://twitter.com/mathrilcom"><img width="23px" height="23px" src="/mathril/twitter.png" alt="twitter"></a> <a href="https://www.youtube.com/@mathril_workout"><img width="23px" height="23px" src="/mathril/youtube.svg" alt="youtube"></a> <a href="https://www.instagram.com/mathril_com/" style="font-size: 0.8em;"><img width="23px" height="23px" src="/mathril/instagram.svg" alt="instagram"></a> <a href="https://www.whatsapp.com/channel/0029VaAViMm96H4P8bcAzn1w" style="font-size: 0.8em;"><img width="23px" height="23px" src="/mathril/whatsapp.svg" alt="instagram"></a></nav>`;
});
const css$2 = {
  code: "footer.svelte-1juizb1{padding-top:1em;font-family:roboto;padding-bottom:4em}nav.svelte-1juizb1{display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-top:1em}a.svelte-1juizb1{font-size:0.8em}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\r\\n    import List, {Separator} from \\"@smui/list\\";\\r\\n    import Contact from \\"./Contact.svelte\\";\\r\\n    import Copyright from \\"./Copyright.svelte\\";\\r\\n    import Install from \\"./Install.svelte\\";\\r\\n    import Social from \\"./Social.svelte\\";\\r\\n    \\r\\n    // import a from '$lib/ui/a.svelte';\\r\\n<\/script>\\r\\n\\r\\n<footer>\\r\\n    <Install />\\r\\n    <Separator />\\r\\n    <Social />\\r\\n    <Separator />\\r\\n    <nav>\\r\\n        <ul>\\r\\n            <li><a href=\\"/about\\">About Us</a></li>\\r\\n            <!-- <li>\\r\\n                <a href=\\"/subscription\\">Pricing</a>\\r\\n            </li>\\r\\n            <li>\\r\\n                <a href=\\"/teacher\\">Teacher</a>\\r\\n            </li> -->\\r\\n            <li>\\r\\n                <a href=\\"/legal/privacy\\">Privacy Policy</a>\\r\\n            </li>\\r\\n            <!-- <li>\\r\\n                <a href=\\"/legal/refund\\"\\r\\n                    >Refund Policy</a\\r\\n                >\\r\\n            </li> -->\\r\\n            <li>\\r\\n                <a href=\\"/legal/terms\\"\\r\\n                    >Terms and Conditions</a\\r\\n                >\\r\\n            </li>\\r\\n            <!-- <li>\\r\\n                <a\\r\\n                    href=\\"/shipping\\"\\r\\n                    >Shipping</a\\r\\n                >\\r\\n            </li> -->\\r\\n        </ul>\\r\\n    </nav>\\r\\n    <Separator />\\r\\n    <Contact />\\r\\n    <Separator />\\r\\n    <Copyright />\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n    footer {\\r\\n        /* border-top: 2px solid rgb(0, 100, 150); */\\r\\n        padding-top: 1em;\\r\\n        /* padding: 1em; */\\r\\n        /* background: radial-gradient(rgb(35 100 120), black); */\\r\\n        font-family: roboto;\\r\\n        padding-bottom: 4em;\\r\\n    }\\r\\n    nav {\\r\\n        display: flex;\\r\\n        gap: 0.5em;\\r\\n        align-items: center;\\r\\n        flex-wrap: wrap;\\r\\n        margin-top: 1em;\\r\\n    }\\r\\n    a {\\r\\n        font-size: 0.8em;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoDI,qBAAO,CAEH,WAAW,CAAE,GAAG,CAGhB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GACpB,CACA,kBAAI,CACA,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAChB,CACA,gBAAE,CACE,SAAS,CAAE,KACf"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-1juizb1">${validate_component(Install, "Install").$$render($$result, {}, {}, {})} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} ${validate_component(Social, "Social").$$render($$result, {}, {}, {})} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} <nav class="svelte-1juizb1" data-svelte-h="svelte-6knl6t"><ul><li><a href="/about" class="svelte-1juizb1">About Us</a></li>  <li><a href="/legal/privacy" class="svelte-1juizb1">Privacy Policy</a></li>  <li><a href="/legal/terms" class="svelte-1juizb1">Terms and Conditions</a></li> </ul></nav> ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} ${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})} </footer>`;
});
const css$1 = {
  code: "aside.svelte-kpoyhe{position:relative;display:flex;flex-direction:column;gap:0.5em;overflow-y:auto}",
  map: '{"version":3,"file":"Sidebar.svelte","sources":["Sidebar.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, {Content, Actions} from \'@smui/card\'\\r\\n    import Button, {Label} from \'@smui/button\';\\r\\n    \\r\\n    import Footer from \\"$lib/mathril/footer/Footer.svelte\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    \\r\\n    import Fab, { Icon } from \\"@smui/fab\\";\\r\\n    import { Svg } from \\"@smui/common\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { profileImage, navList, showRight, Guest, guestID } from \\"$lib/mathril/stores\\";\\r\\n\\r\\n    $: isAuth = $page.data.user;\\r\\n    $: user = isAuth ? $page.data.user.publicID : $guestID;\\r\\n<\/script>\\r\\n\\r\\n<aside>\\r\\n    <!-- <div class=\\"fixed\\"> -->\\r\\n    <Card>\\r\\n        <Actions>\\r\\n            <Button style=\\"width:100%;\\" on:click={() => $showRight = !$showRight}>Close Menu</Button>\\r\\n        </Actions>\\r\\n    </Card>\\r\\n    \\r\\n        {#if $navList && $navList.length > 0}\\r\\n            <Card>\\r\\n                <!-- <Content> -->\\r\\n\\r\\n                <List>\\r\\n                    \\r\\n                        {#each $navList as link}\\r\\n                            <Item on:SMUI:action={() => goto(link.isAdmin ? `/mathril/${link.url}`: `/mathril/${user}${link.url}`)}>\\r\\n                                <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                                <Text>{link.name}</Text>\\r\\n                            </Item>\\r\\n                        {/each}\\r\\n                    <!-- {:else}\\r\\n                        {#each $navList as link}\\r\\n                            <Item on:SMUI:action={() => goto(`${link.url}`)}>\\r\\n                                <Graphic class=\\"material-icons\\">menu_book</Graphic>\\r\\n                                <Text>{link.name}</Text>\\r\\n                            </Item>\\r\\n                        {/each}\\r\\n                    {/if} -->\\r\\n                </List>\\r\\n\\r\\n                <!-- </Content> -->\\r\\n            </Card>\\r\\n        {/if}\\r\\n    \\r\\n    <!-- </div> -->\\r\\n    <!-- <Card >\\r\\n        <Content style=\\"background: tomato;\\">\\r\\n            <h1 class=\\"mdc-typography-headline\\" style=\\"font-weight:600; font-size:1.5em; line-height:1.1;margin:0.2em 0;color:rgba(0, 0, 255, 1)\\"> &#8377; 100</h1>\\r\\n            <h3 class=\\"mdc-typography-headline\\" style=\\"font-weight:400; font-size:1.1em; line-height:1.1;margin:0.2em 0;color:rgba(220, 230, 20, 1);\\">7 Day Course</h3>\\r\\n            <h2 class=\\"mdc-typography-headline\\" style=\\"font-size:1.4em; line-height:1.5;margin:0.2em 0;\\"><strong>Relations & Functions</strong></h2>\\r\\n            <h2 class=\\"mdc-typography-headline\\" style=\\"font-size:1em; line-height:1.1;margin:0.2em 0;\\">Class <strong>12</strong></h2>\\r\\n            <h2 class=\\"mdc-typography-headline\\" style=\\"font-size:0.9em; line-height:1.1;margin:0.2em 0 0;\\">Starting <strong>14 Nov, 2023</strong></h2>\\r\\n        </Content>\\r\\n        <Actions style=\\"align-items:center;justify-content:center\\">\\r\\n            <Button on:click={() => goto(\'/courses/relations12\')}>\\r\\n                Details\\r\\n            </Button>\\r\\n        </Actions>\\r\\n    </Card> -->\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <Footer />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</aside>\\r\\n\\r\\n<style>\\r\\n    aside {\\r\\n        position: relative;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n        overflow-y: auto;\\r\\n    }\\r\\n    /* @media only screen and (min-width: 600px) {\\r\\n        .fixed {\\r\\n            position: fixed;\\r\\n            right: 0;\\r\\n            width: 256px;\\r\\n            overflow-y: scroll;\\r\\n            height: 100vh;\\r\\n        }\\r\\n    } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmFI,mBAAM,CACF,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,UAAU,CAAE,IAChB"}'
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isAuth;
  let $guestID, $$unsubscribe_guestID;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_showRight;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_guestID = subscribe(guestID, (value) => $guestID = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showRight = subscribe(showRight, (value) => value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$result.css.add(css$1);
  isAuth = $page.data.user;
  isAuth ? $page.data.user.publicID : $guestID;
  $$unsubscribe_guestID();
  $$unsubscribe_page();
  $$unsubscribe_showRight();
  $$unsubscribe_navList();
  return `<aside class="svelte-kpoyhe"> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, { style: "width:100%;" }, {}, {
            default: () => {
              return `Close Menu`;
            }
          })}`;
        }
      })}`;
    }
  })} ${$navList && $navList.length > 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
          })} `;
        }
      })} `;
    }
  })}` : ``}   ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </aside>`;
});
const css = {
  code: ".svelte-1ti5n9y{box-sizing:border-box}.container.svelte-1ti5n9y{width:100%}main.svelte-1ti5n9y{display:flex}header.svelte-1ti5n9y{min-width:100%;z-index:200}.navback.svelte-1ti5n9y{min-height:4em}.nav.svelte-1ti5n9y{max-width:100%}.grid.svelte-1ti5n9y{display:grid;grid-template-columns:calc(100% - 256px) 256px}.center.svelte-1ti5n9y{display:flex;flex-direction:column;width:100%;padding:0.5em}.side.svelte-1ti5n9y{width:300px;position:fixed;top:4em;height:100vh;overflow-y:auto;right:0;z-index:6;box-shadow:rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px}@media only screen and (max-width: 600px){.navback.svelte-1ti5n9y{min-height:3.5em}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Drawer, {\\r\\n        AppContent,\\r\\n        Content,\\r\\n        Scrim,\\r\\n        Header,\\r\\n        Title,\\r\\n        Subtitle,\\r\\n    } from \\"@smui/drawer\\";\\r\\n    \\r\\n    \\r\\n    \\r\\n    import Nav from \\"$lib/mathril/components/Nav.svelte\\";\\r\\n    import Sidebar from \\"$lib/mathril/components/Sidebar.svelte\\";\\r\\n    import TopAppBar, { Row, Section } from \\"@smui/top-app-bar\\";\\r\\n    import IconButton, {Icon} from \\"@smui/icon-button\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    \\r\\n    import { showLeft, darkMode, showRight } from \\"$lib/mathril/stores.js\\";\\r\\n    \\r\\n\\r\\n    import { goto } from '$app/navigation';\\r\\n    import {currentPath, refreshApp, TopBarHeight} from '$lib/mathril/stores';\\r\\n    \\r\\n    import { beforeUpdate, afterUpdate, onMount } from 'svelte';\\r\\n    import { fly } from \\"svelte/transition\\";\\r\\n    beforeUpdate(() => $refreshApp = true)\\r\\n    afterUpdate(() => $refreshApp = false)\\r\\n   \\r\\n    $currentPath = 'Mathril'\\r\\n\\r\\n    let W = 500;\\r\\n    let mainClass = '';\\r\\n    $: fixed = W < 600;\\r\\n    // $: mainClass = W < 600 ? '' : 'grid';\\r\\n    $: sideWidth = $showRight ? 300 : 0;\\r\\n    // $: console.log($currentPath)\\r\\n\\r\\n<\/script>\\r\\n<svelte:head>\\r\\n    <link\\r\\n        rel=\\"stylesheet\\"\\r\\n        id=\\"theme\\"\\r\\n        href=\\"/smui{$darkMode ? '-dark' : ''}.css\\"\\r\\n    />\\r\\n</svelte:head>\\r\\n<div>\\r\\n    <header style=\\"position: relative;\\" bind:clientHeight={$TopBarHeight}>\\r\\n        <TopAppBar variant=\\"fixed\\" color=\\"secondary\\">\\r\\n            <Row>\\r\\n                <Section style=\\"align-items:center;\\">\\r\\n                    <div class=\\"logo\\">\\r\\n                        <a data-sveltekit-reload href=\\"/\\">\\r\\n                            <Icon>\\r\\n                                <img width=\\"40px\\" height=\\"40px\\" style=\\"background:white; border-radius:50%;\\" src=\\"/favicon.png\\" alt=\\"1\\" />\\r\\n                            </Icon>\\r\\n                        </a>\\r\\n                    </div>\\r\\n                    <IconButton toggle bind:pressed={$showLeft}>\\r\\n                        <Icon class=\\"material-icons\\" on>close</Icon>\\r\\n                        <Icon class=\\"material-icons\\">menu</Icon>\\r\\n                    </IconButton>\\r\\n                    \\r\\n                    <span>\\r\\n                        {$currentPath}\\r\\n                    </span>\\r\\n                </Section>\\r\\n                <Section align=\\"end\\" toolbar>\\r\\n                    <!-- <IconButton class=\\"material-icons\\" aria-label=\\"Search\\" on:click={() => goto('/search')}>search</IconButton> -->\\r\\n                    <IconButton class=\\"material-icons\\" aria-label=\\"Refresh\\" on:click={() => $refreshApp = true, location.reload()}>refresh</IconButton>\\r\\n                    <!-- <IconButton class=\\"material-icons\\" aria-label=\\"Settings\\"\\r\\n                        >settings</IconButton\\r\\n                    >\\r\\n                    <IconButton class=\\"material-icons\\" aria-label=\\"Cancel\\"\\r\\n                        >close</IconButton\\r\\n                    > -->\\r\\n                    <IconButton toggle bind:pressed={$darkMode}>\\r\\n                        <Icon class=\\"material-icons\\" on>dark_mode</Icon>\\r\\n                        <Icon class=\\"material-icons\\">light_mode</Icon>\\r\\n                    </IconButton>\\r\\n                    <IconButton toggle bind:pressed={$showRight}>\\r\\n                        <Icon class=\\"material-icons\\" on>close</Icon>\\r\\n                        <Icon class=\\"material-icons\\">menu</Icon>\\r\\n                    </IconButton>\\r\\n                </Section>\\r\\n            </Row>\\r\\n        </TopAppBar>\\r\\n        <div class=\\"navback\\"></div>\\r\\n    </header>\\r\\n\\r\\n    <div class=\\"container\\" bind:clientWidth={W}>\\r\\n        <Drawer style=\\"width:180px;\\" variant='modal' bind:open={$showLeft}>\\r\\n            <Content>\\r\\n                <header class='nav'>\\r\\n                    <Nav/>\\r\\n                </header>\\r\\n            </Content>\\r\\n        </Drawer>\\r\\n        <!-- <Scrim /> -->\\r\\n        {#if fixed}\\r\\n            <Scrim on:click={() => $showLeft = false}/>\\r\\n        {/if}\\r\\n        <AppContent style=\\"margin-left: {!fixed && $showLeft ? '180px' : '0px'};margin-right: {$showRight && W > 600 ? '300px' : '0px'};\\">\\r\\n            <main class={mainClass}>\\r\\n                <div class=\\"center\\">\\r\\n                    <slot />\\r\\n                </div>\\r\\n            </main>\\r\\n        </AppContent>\\r\\n        {#if $showRight}\\r\\n            <div class=\\"side\\" style=\\"width:{sideWidth}px; top: {$TopBarHeight}px;\\" transition:fly|global={{x:300}}>\\r\\n                <Sidebar />\\r\\n            </div>\\r\\n        {/if}\\r\\n    </div>\\r\\n</div>\\r\\n<style>\\r\\n    /* .container {\\r\\n        display: grid;\\r\\n        grid-template-columns: 0.16fr auto;\\r\\n        width: 100%;\\r\\n        gap: 0.5em;\\r\\n    } */\\r\\n    * {\\r\\n        box-sizing: border-box;\\r\\n    }\\r\\n    .container {\\r\\n        width: 100%;\\r\\n    }\\r\\n    main {\\r\\n        display: flex;\\r\\n        /* flex-direction: column; */\\r\\n        /* min-width: 300px; */\\r\\n        /* overflow: hidden; */\\r\\n    }\\r\\n    /* .logo {\\r\\n        margin-left: 0.5em;\\r\\n        margin-top: 0.5em;\\r\\n    } */\\r\\n    header {\\r\\n        min-width: 100%;\\r\\n        z-index: 200;\\r\\n    }\\r\\n    .navback {\\r\\n        min-height: 4em;\\r\\n    }\\r\\n    .nav {\\r\\n        max-width: 100%;\\r\\n    }\\r\\n    /* main {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.5em;\\r\\n        width: 100%;\\r\\n        justify-items: center;\\r\\n        \\r\\n    } */\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: calc(100% - 256px) 256px;\\r\\n    }\\r\\n    .center {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        /* width: auto;\\r\\n        flex-grow: 1; */\\r\\n        width: 100%;\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n    .side {\\r\\n        width: 300px;\\r\\n        position: fixed;\\r\\n        top: 4em;\\r\\n        height: 100vh;\\r\\n        overflow-y: auto;\\r\\n        right: 0;\\r\\n        /* padding: 0.5em; */\\r\\n        z-index: 6;\\r\\n        box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;\\r\\n    }\\r\\n    @media only screen and (max-width: 600px) {\\r\\n        /* main {\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            gap: 1em;\\r\\n            width: 100%;\\r\\n            flex: 1;\\r\\n            min-width: 300px;\\r\\n        }\\r\\n        .side {\\r\\n            width: 100%;\\r\\n            position: relative;\\r\\n            height: fit-content;\\r\\n        } */\\r\\n        .navback {\\r\\n            min-height: 3.5em;\\r\\n        }\\r\\n    }\\r\\n    \\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4HI,eAAE,CACE,UAAU,CAAE,UAChB,CACA,yBAAW,CACP,KAAK,CAAE,IACX,CACA,mBAAK,CACD,OAAO,CAAE,IAIb,CAKA,qBAAO,CACH,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GACb,CACA,uBAAS,CACL,UAAU,CAAE,GAChB,CACA,mBAAK,CACD,SAAS,CAAE,IACf,CASA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,KAC9C,CACA,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CAGtB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KACb,CACA,oBAAM,CACF,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,CAAC,CAER,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAC9H,CACA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CActC,uBAAS,CACL,UAAU,CAAE,KAChB,CACJ"}`
};
let mainClass = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixed;
  let sideWidth;
  let $showRight, $$unsubscribe_showRight;
  let $currentPath, $$unsubscribe_currentPath;
  let $$unsubscribe_refreshApp;
  let $darkMode, $$unsubscribe_darkMode;
  let $TopBarHeight, $$unsubscribe_TopBarHeight;
  let $showLeft, $$unsubscribe_showLeft;
  $$unsubscribe_showRight = subscribe(showRight, (value) => $showRight = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_refreshApp = subscribe(refreshApp, (value) => value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_TopBarHeight = subscribe(TopBarHeight, (value) => $TopBarHeight = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => $showLeft = value);
  set_store_value(currentPath, $currentPath = "Mathril", $currentPath);
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-191nvh5_START --><link rel="stylesheet" id="theme" href="${"/smui" + escape($darkMode ? "-dark" : "", true) + ".css"}" class="svelte-1ti5n9y"><!-- HEAD_svelte-191nvh5_END -->`, ""} <div class="svelte-1ti5n9y"><header style="position: relative;" class="svelte-1ti5n9y">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "fixed", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, { style: "align-items:center;" }, {}, {
              default: () => {
                return `<div class="logo svelte-1ti5n9y"><a data-sveltekit-reload href="/" class="svelte-1ti5n9y">${validate_component(CommonIcon, "Icon").$$render($$result, {}, {}, {
                  default: () => {
                    return `<img width="40px" height="40px" style="background:white; border-radius:50%;" src="/favicon.png" alt="1" class="svelte-1ti5n9y">`;
                  }
                })}</a></div> ${validate_component(IconButton, "IconButton").$$render(
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
                )} <span class="svelte-1ti5n9y">${escape($currentPath)}</span>`;
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
    })} <div class="navback svelte-1ti5n9y"></div></header> <div class="container svelte-1ti5n9y">${validate_component(Drawer, "Drawer").$$render(
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
          return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<header class="nav svelte-1ti5n9y">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
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
          return `<main class="${escape(null_to_empty(mainClass), true) + " svelte-1ti5n9y"}"><div class="center svelte-1ti5n9y">${slots.default ? slots.default({}) : ``}</div></main>`;
        }
      }
    )} ${$showRight ? `<div class="side svelte-1ti5n9y" style="${"width:" + escape(sideWidth, true) + "px; top: " + escape($TopBarHeight, true) + "px;"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>` : ``}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_showRight();
  $$unsubscribe_currentPath();
  $$unsubscribe_refreshApp();
  $$unsubscribe_darkMode();
  $$unsubscribe_TopBarHeight();
  $$unsubscribe_showLeft();
  return $$rendered;
});
export {
  Layout as default
};
