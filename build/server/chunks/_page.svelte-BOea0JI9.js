import { a as subscribe, d as set_store_value, h as is_promise, n as noop } from './utils-DhkojCd_.js';
import { c as create_ssr_component, e as escape, v as validate_component, i as each, j as createEventDispatcher, a as add_attribute } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { T as TabBar, a as Tab } from './TabBar-Cyja1TX8.js';
import { p as page } from './stores3-DPEAZJnM.js';
import './client-k3u4ChD_.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-Y_QU_UIA.js';
import { H as Head } from './Head-B4BwnM3n.js';
import './Subheader-DEm_inUP.js';
import { c as currentPath, i as isAuth, T as TopBarHeight } from './stores-Cecnyqn_.js';
import 'html5-qrcode';
import 'qrcode-generator';
import { T as Textfield } from './Textfield-B08XD1S3.js';
import './Suffix-CtI6fDI6.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './Ripple-N--aPaMn.js';
import './prefixFilter-B6cFZsw3.js';
import './exports-kR70XCWV.js';
import './index2-D2s-XE5r.js';
import './ContextFragment-CedcH2TL.js';
import './NotchedOutline-Bg9Ljk79.js';
import './Input-CXqTjpeX.js';

const css$2 = {
  code: "#generatedQRCode.svelte-o78zgt img.svelte-o78zgt{width:200px;height:200px}",
  map: `{"version":3,"file":"GenerateQR.svelte","sources":["GenerateQR.svelte"],"sourcesContent":["<script>\\r\\n    // @ts-nocheck\\r\\n    \\r\\n        \\r\\n        import {browser} from '$app/environment'\\r\\n        import { createEventDispatcher, onMount } from 'svelte';\\r\\n        import {scannedQR, loggedInUser} from '$lib/stores';\\r\\n        import {Html5Qrcode} from 'html5-qrcode';\\r\\n        import qrcode from 'qrcode-generator';\\r\\n        \\r\\n        export let data;\\r\\n        export let filename;\\r\\n        export let autoDownload = true;\\r\\n        let dispatch = createEventDispatcher();\\r\\n        let qrCodeHolder;\\r\\n        let qrContainer;\\r\\n        let fileinput;\\r\\n        let html5QrCode;\\r\\n        let hasQRcode = false;\\r\\n        let downloader;\\r\\n        let qrlink;\\r\\n        // $: if(hasQRcode) {\\r\\n        //     setTimeout(() => {\\r\\n        //         qrlink = document.querySelector('#generatedQRCode img').getAttribute('src');\\r\\n        //     }, 0);\\r\\n            \\r\\n        // }\\r\\n        $: if(browser && data) generateQR();\\r\\n        const generateQR = () => {\\r\\n            let qr = qrcode(10, 'H');\\r\\n            qr.addData(data);\\r\\n            qr.make();\\r\\n    \\r\\n            qrlink = qr.createDataURL();\\r\\n            // qrlink = document.querySelector('#generatedQRCode img').getAttribute('src');\\r\\n            hasQRcode = true;\\r\\n            if(autoDownload)\\r\\n                setTimeout(() => downloader.click(), 1000)\\r\\n        }\\r\\n    <\/script>\\r\\n    <style>\\r\\n        #generatedQRCode img {\\r\\n            width: 200px;\\r\\n            height: 200px;\\r\\n        }\\r\\n    </style>\\r\\n    \\r\\n    <span id='generatedQRCode'><img src={qrlink} alt=\\"\\"></span>\\r\\n    {#if hasQRcode}\\r\\n        <a bind:this={downloader} href={qrlink} download={filename} on:click={() => dispatch(\\"saved\\", {text:\\"saved\\"})} >\\r\\n            <span class=\\"label\\">Download QR Code</span>\\r\\n        </a>\\r\\n        <p><strong>SECRET: </strong>Save the QR code. DO NOT SHARE or RENAME the file.</p>\\r\\n    {/if}\\r\\n    "],"names":[],"mappings":"AAyCQ,8BAAgB,CAAC,iBAAI,CACjB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACZ"}`
};
const GenerateQR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { filename } = $$props;
  let { autoDownload = true } = $$props;
  createEventDispatcher();
  let qrlink;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0) $$bindings.filename(filename);
  if ($$props.autoDownload === void 0 && $$bindings.autoDownload && autoDownload !== void 0) $$bindings.autoDownload(autoDownload);
  $$result.css.add(css$2);
  return `<span id="generatedQRCode" class="svelte-o78zgt"><img${add_attribute("src", qrlink, 0)} alt="" class="svelte-o78zgt"></span> ${``}`;
});
const css$1 = {
  code: ".photos.svelte-14hlhok.svelte-14hlhok{position:relative}.banner.svelte-14hlhok.svelte-14hlhok{width:100%;height:170px;background-color:rgba(0, 247, 255, 0.919)}.profile.svelte-14hlhok.svelte-14hlhok{position:absolute;bottom:-50px;left:10px;width:120px;height:120px;border-radius:50%;background-color:white;border-width:2px;overflow:hidden}.banner.svelte-14hlhok img.svelte-14hlhok,.profile.svelte-14hlhok img.svelte-14hlhok{width:100%;height:100%}.action.svelte-14hlhok.svelte-14hlhok{display:flex;align-items:center;justify-content:end}.details.svelte-14hlhok.svelte-14hlhok{margin-left:0em}.name.svelte-14hlhok.svelte-14hlhok{display:flex;gap:0.3em;font-weight:bold;font-size:1.1em;margin-top:1em;align-items:center}.publicID.svelte-14hlhok.svelte-14hlhok{font-size:0.9em}.aboutme.svelte-14hlhok.svelte-14hlhok{margin:1em 0}.aboutme.svelte-14hlhok.svelte-14hlhok,.summary.svelte-14hlhok.svelte-14hlhok{font-size:0.8em}.summary.svelte-14hlhok.svelte-14hlhok{display:flex;flex-direction:row;align-items:center;gap:1em}.prop.svelte-14hlhok.svelte-14hlhok{display:flex;align-items:center;gap:0.3em}.bullet.svelte-14hlhok.svelte-14hlhok{display:flex;width:7px;height:7px;border-radius:50%;background:currentColor}",
  map: `{"version":3,"file":"User.svelte","sources":["User.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Tab, { Label } from '@smui/tab';\\r\\n    import TabBar from '@smui/tab-bar';\\r\\n    import { page } from '$app/stores';\\r\\n    import { goto } from '$app/navigation';\\r\\n    export let banner;\\r\\n    export let profile;\\r\\n    export let currentUser;\\r\\n    export let currentUserDetail;\\r\\n    export let active;\\r\\n    $: if(profile === 'data:') profile = '/avatar.svg';\\r\\n    // $: if(banner === 'data:' || !banner || \\"data:image/png;base64\\") banner = '/landing/banner.svg';\\r\\n    $: tabs = [\\r\\n        \\"Assignments\\", \\"Log Out\\"\\r\\n    ]\\r\\n    // // $: console.log(banner)\\r\\n    const handleClick = (tab) => {\\r\\n        switch(tab) {\\r\\n            case 'Posts': {\\r\\n                break;\\r\\n            }\\r\\n            case 'Comments': {\\r\\n                break;\\r\\n            }\\r\\n            case 'Likes': {\\r\\n                break;\\r\\n            }\\r\\n            case tab.includes('Following'): {\\r\\n                alert('Loading Following...')\\r\\n                break;\\r\\n            }\\r\\n            case tab.includes('Followers'): {\\r\\n                alert('Loading Followers...')\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    const follow = async () => {\\r\\n        let res = await fetch(\`/api/\${currentUser.publicID}/following\`, {\\r\\n            method: 'POST',\\r\\n            headers: {\\r\\n                'content-type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({})\\r\\n        });\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to Follow')\\r\\n            return\\r\\n        }\\r\\n        \\r\\n        await invalidate(\`/api/\${currentUser.publicID}\`)\\r\\n        \\r\\n        // console.log('following...', data.currentUserDetail.isFollowing)\\r\\n        // alert('Added to following!!')\\r\\n    }\\r\\n    const unfollow = async () => {\\r\\n        let res = await fetch(\`/api/\${currentUser.publicID}/following\`, {\\r\\n            method: 'PUT',\\r\\n            headers: {\\r\\n                'content-type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({})\\r\\n        });\\r\\n        if(!res.ok) {\\r\\n            alert('Failed unfollow')\\r\\n            return\\r\\n        }\\r\\n        \\r\\n        await invalidate(\`/api/\${currentUser.publicID}\`)\\r\\n        // console.log('unfollowing...', data.currentUserDetail.isFollowing)\\r\\n        // alert('Removed from following!!')\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<Card>\\r\\n    \\r\\n    <div class=\\"photos\\">\\r\\n        <div class=\\"banner\\">\\r\\n            <img src={banner} alt=\\"banner\\" />\\r\\n        </div>\\r\\n        <div class=\\"profile\\">\\r\\n            <img src={profile} alt=\\"\\" />\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\"action\\">\\r\\n        {#if $page.data.user && $page.data.user.publicID === currentUser.publicID}\\r\\n            <Button on:click={() => goto(\\"/settings/profile\\")}\\r\\n                >Edit Profile</Button\\r\\n            >\\r\\n        <!-- {:else if currentUserDetail.isFollowing}\\r\\n            <Button on:click={unfollow}>Following</Button>\\r\\n        {:else}\\r\\n            <Button on:click={follow}>Follow</Button> -->\\r\\n        {/if}\\r\\n    </div>\\r\\n    <Content class=\\"mdc-typography--body2\\">\\r\\n        <div class=\\"details\\">\\r\\n            <div class=\\"userInfo\\">\\r\\n                <div class=\\"name\\">\\r\\n                    <span class='mdc-typography--headline5'>{currentUser.name}</span>\\r\\n                    <span class=\\"material-icons\\">verified</span>\\r\\n                </div>\\r\\n                <div class=\\"publicID\\">{currentUser.publicID}</div>\\r\\n            </div>\\r\\n            <div class=\\"aboutme\\">\\r\\n                {currentUserDetail.common.bio}\\r\\n            </div>\\r\\n            <div class=\\"summary\\">\\r\\n                <span class=\\"prop\\">\\r\\n                    <span class=\\"icon material-icons\\">stars</span>\\r\\n                    <span class=\\"propName\\"\\r\\n                        >{currentUserDetail.details?.rank?.label}</span\\r\\n                    >\\r\\n                </span>\\r\\n                <span class=\\"bullet\\" />\\r\\n                <span class=\\"prop\\">\\r\\n                    <span class=\\"icon material-icons\\">link</span>\\r\\n                    <span class=\\"propName\\"\\r\\n                        >{currentUserDetail.common.website}</span\\r\\n                    >\\r\\n                </span>\\r\\n            </div>\\r\\n            <!-- <div class=\\"circle\\">\\r\\n                <span class=\\"followers\\">\\r\\n                    <strong>{currentUserDetail.common.following}</strong>\\r\\n                    <span>Following</span>\\r\\n                </span>\\r\\n                <span class=\\"following\\">\\r\\n                    <strong>{currentUserDetail.common.followers}</strong>\\r\\n                    <span>Followers</span>\\r\\n                </span>\\r\\n            </div> -->\\r\\n        </div>\\r\\n    </Content>\\r\\n\\r\\n    <TabBar {tabs} let:tab bind:active>\\r\\n        <Tab {tab}>\\r\\n            <Label>{tab}</Label>\\r\\n        </Tab>\\r\\n    </TabBar>\\r\\n    \\r\\n</Card>\\r\\n<style>\\r\\n    .photos {\\r\\n        position: relative;\\r\\n    }\\r\\n    .banner {\\r\\n        width: 100%;\\r\\n        height: 170px;\\r\\n        background-color: rgba(0, 247, 255, 0.919);\\r\\n    }\\r\\n    .profile {\\r\\n        position: absolute;\\r\\n        bottom: -50px;\\r\\n        left: 10px;\\r\\n        width: 120px;\\r\\n        height: 120px;\\r\\n        border-radius: 50%;\\r\\n        background-color: white;\\r\\n        border-width: 2px;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .banner img, .profile img {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n    }\\r\\n    .action {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: end;\\r\\n    }\\r\\n    .details {\\r\\n        margin-left: 0em;\\r\\n    }\\r\\n    .name {\\r\\n        display: flex;\\r\\n        gap: 0.3em;\\r\\n        font-weight: bold;\\r\\n        font-size: 1.1em;\\r\\n        margin-top: 1em;\\r\\n        align-items: center;\\r\\n    }\\r\\n    .publicID {\\r\\n        font-size: 0.9em;\\r\\n        /* color: rgb(187, 186, 186); */\\r\\n    }\\r\\n    .aboutme {\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n    .aboutme, .summary {\\r\\n        font-size: 0.8em;\\r\\n    }\\r\\n    .summary {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 1em;\\r\\n        /* color: rgb(200, 200, 200); */\\r\\n    }\\r\\n    .prop {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        gap: 0.3em;\\r\\n    }\\r\\n    .bullet {\\r\\n        display: flex;\\r\\n        width: 7px;\\r\\n        height: 7px;\\r\\n        border-radius: 50%;\\r\\n        background: currentColor;\\r\\n        /* background: gray; */\\r\\n    }\\r\\n    /* .circle {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 1em;\\r\\n        margin-top: 1em;\\r\\n        font-size: 0.8em;\\r\\n        margin-bottom: 1em;\\r\\n        color: rgb(200, 200, 200);\\r\\n    } */\\r\\n</style>"],"names":[],"mappings":"AAkJI,qCAAQ,CACJ,QAAQ,CAAE,QACd,CACA,qCAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAC7C,CACA,sCAAS,CACL,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,KAAK,CACvB,YAAY,CAAE,GAAG,CACjB,QAAQ,CAAE,MACd,CACA,sBAAO,CAAC,kBAAG,CAAE,uBAAQ,CAAC,kBAAI,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,GACrB,CACA,sCAAS,CACL,WAAW,CAAE,GACjB,CACA,mCAAM,CACF,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,GAAG,CACf,WAAW,CAAE,MACjB,CACA,uCAAU,CACN,SAAS,CAAE,KAEf,CACA,sCAAS,CACL,MAAM,CAAE,GAAG,CAAC,CAChB,CACA,sCAAQ,CAAE,sCAAS,CACf,SAAS,CAAE,KACf,CACA,sCAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAET,CACA,mCAAM,CACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CACA,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,YAEhB"}`
};
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { banner } = $$props;
  let { profile } = $$props;
  let { currentUser } = $$props;
  let { currentUserDetail } = $$props;
  let { active } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0) $$bindings.banner(banner);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0) $$bindings.profile(profile);
  if ($$props.currentUser === void 0 && $$bindings.currentUser && currentUser !== void 0) $$bindings.currentUser(currentUser);
  if ($$props.currentUserDetail === void 0 && $$bindings.currentUserDetail && currentUserDetail !== void 0) $$bindings.currentUserDetail(currentUserDetail);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (profile === "data:") profile = "/avatar.svg";
    }
    tabs = ["Assignments", "Log Out"];
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="photos svelte-14hlhok"><div class="banner svelte-14hlhok"><img${add_attribute("src", banner, 0)} alt="banner" class="svelte-14hlhok"></div> <div class="profile svelte-14hlhok"><img${add_attribute("src", profile, 0)} alt="" class="svelte-14hlhok"></div></div> <div class="action svelte-14hlhok">${$page.data.user && $page.data.user.publicID === currentUser.publicID ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Edit Profile`;
          }
        })} ` : ``}</div> ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
          default: () => {
            return `<div class="details svelte-14hlhok"><div class="userInfo"><div class="name svelte-14hlhok"><span class="mdc-typography--headline5">${escape(currentUser.name)}</span> <span class="material-icons" data-svelte-h="svelte-1svqpij">verified</span></div> <div class="publicID svelte-14hlhok">${escape(currentUser.publicID)}</div></div> <div class="aboutme svelte-14hlhok">${escape(currentUserDetail.common.bio)}</div> <div class="summary svelte-14hlhok"><span class="prop svelte-14hlhok"><span class="icon material-icons" data-svelte-h="svelte-1q6mwxz">stars</span> <span class="propName">${escape(currentUserDetail.details?.rank?.label)}</span></span> <span class="bullet svelte-14hlhok"></span> <span class="prop svelte-14hlhok"><span class="icon material-icons" data-svelte-h="svelte-ebzaoo">link</span> <span class="propName">${escape(currentUserDetail.common.website)}</span></span></div> </div>`;
          }
        })} ${validate_component(TabBar, "TabBar").$$render(
          $$result,
          { tabs, active },
          {
            active: ($$value) => {
              active = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ tab }) => {
              return `${validate_component(Tab, "Tab").$$render($$result, { tab }, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(tab)}`;
                    }
                  })}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const css = {
  code: "article.svelte-u7i3fp{width:100%;display:flex;flex-direction:column;gap:0.5em}.authQR.svelte-u7i3fp{display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import User from \\"$lib/components/User.svelte\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import Card, {Content, Actions} from '@smui/card';\\r\\n    import Datatable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n    import Button from '@smui/button';\\r\\n    import List, { Separator } from \\"@smui/list\\";\\r\\n    import Tab, { Label } from \\"@smui/tab\\";\\r\\n    import TabBar from \\"@smui/tab-bar\\";\\r\\n    import { goto, invalidate } from \\"$app/navigation\\";\\r\\n    import GenerateQR from \\"$lib/qr/GenerateQR.svelte\\";\\r\\n    // import Posts from \\"$lib/components/Posts.svelte\\";\\r\\n    // import Comments from '$lib/components/Comments.svelte';\\r\\n    // import Likes from '$lib/components/Likes.svelte';\\r\\n    // import Followers from \\"$lib/components/Followers.svelte\\";\\r\\n    // import Followings from '$lib/components/Followings.svelte';\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import { showLeft, currentPath, profileImage, navList, TopBarHeight, isAuth } from \\"$lib/stores\\";\\r\\n    import { browser } from '$app/environment';\\r\\n    import { enhance } from \\"$app/forms\\";\\r\\n\\timport Textfield from \\"@smui/textfield\\";\\r\\n    $: $currentPath = \`\${$page.params.publicID}\`;\\r\\n    export let data;\\r\\n    let profile = \\"\\", banner;\\r\\n    let active;\\r\\n    let targetPublicID, targetOtpID, targetPrivateID, targetQR = false;\\r\\n    let generateQR = false,\\r\\n        downloadQR = false;\\r\\n    let ids, privateID, otpID, publicID;\\r\\n    $: tabs = $page.data.user.isTeacher ? ['Questions', 'Assignments', 'Submissions'] : [];\\r\\n    let targetURL = {\\r\\n        'Questions': \`/\${$page.data.user.publicID}/questions\`,\\r\\n        'Assignments': \`/\${$page.data.user.publicID}/assignments\`,\\r\\n        'Submissions': \`/\${$page.data.user.publicID}/submissions\`\\r\\n    }\\r\\n    // let workouts = [], questions = [], likes = [];\\r\\n    let profilePicReader, bannerReader;\\r\\n    onMount(async () => {\\r\\n        // console.log('onmount...', data.currentUser.publicID)\\r\\n        \\r\\n        profilePicReader = new FileReader();\\r\\n        profilePicReader.readAsDataURL(data.profilepicData);\\r\\n        profilePicReader.onload = (e) => {\\r\\n            profile = e.target.result;\\r\\n        };\\r\\n\\r\\n        if(data.profilepicData.size == 0) profile = '/avatar.svg';\\r\\n\\r\\n        bannerReader = new FileReader();\\r\\n        bannerReader.readAsDataURL(data.bannerpicData);\\r\\n        bannerReader.onload = (e) => {\\r\\n            banner = e.target.result;\\r\\n        };\\r\\n        // if($page.data.user && $page.data.user.publicID === data.currentUser.publicID) {\\r\\n        //     let resQuestions = await fetch(\`/api/\${$page.data.user.publicID}/questions\`);\\r\\n        //     let resWorkouts = await fetch(\`/api/workout\`);\\r\\n        //     if(!resWorkouts.ok) {\\r\\n        //         workouts = []\\r\\n        //     } else {\\r\\n        //         workouts = await resWorkouts.json();\\r\\n        //     }\\r\\n        //     if(!resQuestions.ok) {\\r\\n        //         questions = []\\r\\n        //     } else {\\r\\n        //         questions = await resQuestions.json();\\r\\n        //     }\\r\\n        // }\\r\\n    });\\r\\n    $: if(browser) {\\r\\n        \\r\\n        profilePicReader = new FileReader();\\r\\n        profilePicReader.readAsDataURL(data.profilepicData);\\r\\n        profilePicReader.onload = (e) => {\\r\\n            profile = e.target.result;\\r\\n            // console.log(profile)\\r\\n        };\\r\\n        \\r\\n        \\r\\n        \\r\\n        bannerReader = new FileReader();\\r\\n        bannerReader.readAsDataURL(data.bannerpicData);\\r\\n        bannerReader.onload = (e) => {\\r\\n            banner = e.target.result;\\r\\n        };\\r\\n    }\\r\\n    $: $isAuth = $page.data.user;\\r\\n    const getAssignments = async () => {\\r\\n        const res = await fetch(\`/api/assignments\`);\\r\\n        if(!res.ok) {\\r\\n            return []\\r\\n        } else {\\r\\n            return await res.json();\\r\\n        }\\r\\n    }\\r\\n    const getLikes = async () => {\\r\\n        const resLikes = await fetch(\`/api/\${$page.params.publicID}/likes\`)\\r\\n        if(!resLikes.ok) return [];\\r\\n        else {\\r\\n            return await resLikes.json();\\r\\n        }\\r\\n    }\\r\\n    const getPosts = async () => {\\r\\n        const resPosts = await fetch(\`/api/\${$page.params.publicID}/posts\`)\\r\\n        if(!resPosts.ok) return [];\\r\\n        else {\\r\\n            return await resPosts.json();\\r\\n        }\\r\\n    }\\r\\n    const getComments = async () => {\\r\\n        const resComments = await fetch(\`/api/\${$page.params.publicID}/comments\`)\\r\\n        if(!resComments.ok) return [];\\r\\n        else {\\r\\n            return await resComments.json();\\r\\n        }\\r\\n    }\\r\\n    const follow = async () => {\\r\\n        let res = await fetch(\`/api/\${$page.params.publicID}/following\`, {\\r\\n            method: 'POST',\\r\\n            headers: {\\r\\n                'content-type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({})\\r\\n        });\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to Follow')\\r\\n            return\\r\\n        }\\r\\n        \\r\\n        await invalidate(\`/api/\${data.currentUser.publicID}\`)\\r\\n        data = data;\\r\\n        // console.log('following...', data.currentUserDetail.isFollowing)\\r\\n        // alert('Added to following!!')\\r\\n    }\\r\\n    const unfollow = async () => {\\r\\n        let res = await fetch(\`/api/\${$page.params.publicID}/following\`, {\\r\\n            method: 'PUT',\\r\\n            headers: {\\r\\n                'content-type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({})\\r\\n        });\\r\\n        if(!res.ok) {\\r\\n            alert('Failed unfollow')\\r\\n            return\\r\\n        }\\r\\n        \\r\\n        await invalidate(\`/api/\${data.currentUser.publicID}\`)\\r\\n        data = data;\\r\\n        // console.log('unfollowing...', data.currentUserDetail.isFollowing)\\r\\n        // alert('Removed from following!!')\\r\\n    }\\r\\n    const generateNewQR = () => {\\r\\n        if(targetOtpID && targetPrivateID && targetPublicID) {\\r\\n            targetQR = !targetQR;\\r\\n        }\\r\\n    }\\r\\n    // $: console.log($page.data.user, data.currentUser.publicID)\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title\\r\\n        >Dr Mithilesh Kumar</title\\r\\n    >\\r\\n    <meta\\r\\n        name=\\"description\\"\\r\\n        content=\\"Dr Mithilesh Kuamr\\"\\r\\n    />\\r\\n    <meta\\r\\n        name=\\"keywords\\"\\r\\n        content=\\"drmithileshkumar.com, mathematics\\"\\r\\n    />\\r\\n\\r\\n    <link\\r\\n        rel=\\"canonical\\"\\r\\n        href=\\"https://drmithileshkumar.com/\${data.currentUser.publicID}\\"\\r\\n    />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <div class=\\"sticky\\" style=\\"top: {$TopBarHeight}px;\\">\\r\\n        {#if $page.data.user && $page.data.user.publicID === data.currentUser.publicID}\\r\\n            <Card>\\r\\n                <TabBar {tabs} let:tab bind:active>\\r\\n                    <Tab {tab} on:click={() => goto(targetURL[tab])}>\\r\\n                        <Label>{tab}</Label>\\r\\n                    </Tab>\\r\\n                </TabBar>\\r\\n            </Card>\\r\\n        {/if}\\r\\n    </div>\\r\\n    <User {banner} {profile} currentUser={data.currentUser} currentUserDetail={data.currentUserDetail} bind:active={data.active} />\\r\\n    \\r\\n    {#if data.active === 'Assignments'}\\r\\n        {#await getAssignments() then assignments}\\r\\n            <Datatable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>CourseID</Cell>\\r\\n                        <Cell>Title</Cell>\\r\\n                        <Cell>Status</Cell>\\r\\n                        <Cell>Action</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    {#each assignments as assignment}\\r\\n                        <Row>\\r\\n                            <Cell>{assignment.courseID}</Cell>\\r\\n                            <Cell>{assignment.title}</Cell>\\r\\n                            <Cell>{assignment.status}</Cell>\\r\\n                            <Cell>\\r\\n                                {#if assignment.status === 'Draft'}\\r\\n                                    <Button on:click={() => goto(\`/assignments/\${assignment.assignmentID}\`)}><Label>Go</Label></Button>\\r\\n                                {:else}\\r\\n                                    <Button on:click={() => goto(\`/assignments/\${assignment.assignmentID}/solution\`)}><Label>Solution</Label></Button>\\r\\n                                {/if}\\r\\n                            </Cell>\\r\\n                        </Row>\\r\\n                    {/each}\\r\\n                </Body>\\r\\n            </Datatable>\\r\\n        {/await}\\r\\n    {:else if data.active === 'Log Out'}\\r\\n        <Card>\\r\\n            <Content style=\\"display:flex;align-items:center;justify-content:center;\\">\\r\\n                <div class=\\"authQR\\">\\r\\n                    <GenerateQR\\r\\n                        data={privateID + \\" \\" + otpID}\\r\\n                        filename={publicID}\\r\\n                        autoDownload={false}\\r\\n                    />\\r\\n                </div>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <form use:enhance method=\\"POST\\" action=\\"?/logout\\">\\r\\n                    <!-- <button class=\\"btn btn-outline-danger\\">Or click here to logout.</button> on:click={(e) => (e.preventDefault(), logout())}-->\\r\\n                    <Button style=\\"width:100%;\\" class=\\"logout\\">Log out</Button>\\r\\n                </form>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        {#if $page.data.user.publicID === 'MithileshKumar'}\\r\\n            <Card>\\r\\n                <Content style=\\"display:flex; flex-direction:column; width:100%;gap:1em;\\">\\r\\n                    <Textfield variant=\\"outlined\\" label=\\"PublicID\\" bind:value={targetPublicID} input$emptyValueUndefined />\\r\\n                    <Textfield variant=\\"outlined\\" label=\\"PrivateID\\" bind:value={targetPrivateID} input$emptyValueUndefined />\\r\\n                    <Textfield variant=\\"outlined\\" label=\\"OtpID\\" bind:value={targetOtpID} input$emptyValueUndefined />\\r\\n                </Content>\\r\\n                <Actions>\\r\\n                    <Button on:click={generateNewQR}><Label>Generate QR</Label></Button>\\r\\n                </Actions>\\r\\n            </Card>\\r\\n            {#if targetQR}\\r\\n            <Card>\\r\\n                <Content>\\r\\n                    <div class=\\"authQR\\">\\r\\n                        <GenerateQR\\r\\n                            data={targetPrivateID + \\" \\" + targetOtpID}\\r\\n                            filename={targetPublicID}\\r\\n                            autoDownload={false}\\r\\n                        />\\r\\n                    </div>\\r\\n                </Content>\\r\\n            </Card>\\r\\n            {/if}\\r\\n        {/if}\\r\\n    {/if}\\r\\n\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    /* .sticky {\\r\\n        position: -webkit-sticky;\\r\\n        position: sticky;\\r\\n        top: 4em;\\r\\n        z-index: 5;\\r\\n    } */\\r\\n    .authQR {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6QI,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAOA,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs;
  let $page, $$unsubscribe_page;
  let $isAuth, $$unsubscribe_isAuth;
  let $currentPath, $$unsubscribe_currentPath;
  let $TopBarHeight, $$unsubscribe_TopBarHeight;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isAuth = subscribe(isAuth, (value) => $isAuth = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_TopBarHeight = subscribe(TopBarHeight, (value) => $TopBarHeight = value);
  let { data } = $$props;
  let profile = "", banner;
  let active;
  let targetPublicID, targetOtpID, targetPrivateID;
  let privateID, otpID, publicID;
  ({
    "Questions": `/${$page.data.user.publicID}/questions`,
    "Assignments": `/${$page.data.user.publicID}/assignments`,
    "Submissions": `/${$page.data.user.publicID}/submissions`
  });
  const getAssignments = async () => {
    const res = await fetch(`/api/assignments`);
    if (!res.ok) {
      return [];
    } else {
      return await res.json();
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    set_store_value(currentPath, $currentPath = `${$page.params.publicID}`, $currentPath);
    tabs = $page.data.user.isTeacher ? ["Questions", "Assignments", "Submissions"] : [];
    set_store_value(isAuth, $isAuth = $page.data.user, $isAuth);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1rvdi7m_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<meta name="description" content="Dr Mithilesh Kuamr"><meta name="keywords" content="drmithileshkumar.com, mathematics"><link rel="canonical" href="${"https://drmithileshkumar.com/$" + escape(data.currentUser.publicID, true)}"><!-- HEAD_svelte-1rvdi7m_END -->`, ""} <article class="svelte-u7i3fp"><div class="sticky" style="${"top: " + escape($TopBarHeight, true) + "px;"}">${$page.data.user && $page.data.user.publicID === data.currentUser.publicID ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TabBar, "TabBar").$$render(
          $$result,
          { tabs, active },
          {
            active: ($$value) => {
              active = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ tab }) => {
              return `${validate_component(Tab, "Tab").$$render($$result, { tab }, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(tab)}`;
                    }
                  })}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}` : ``}</div> ${validate_component(User, "User").$$render(
      $$result,
      {
        banner,
        profile,
        currentUser: data.currentUser,
        currentUserDetail: data.currentUserDetail,
        active: data.active
      },
      {
        active: ($$value) => {
          data.active = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${data.active === "Assignments" ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(assignments) {
        return ` ${validate_component(DataTable, "Datatable").$$render($$result, { style: "width:100%" }, {}, {
          default: () => {
            return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `CourseID`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Title`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Status`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Action`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
              default: () => {
                return `${each(assignments, (assignment) => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.courseID)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.title)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.status)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${assignment.status === "Draft" ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Go`;
                                }
                              })}`;
                            }
                          })}` : `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Solution`;
                                }
                              })}`;
                            }
                          })}`} `;
                        }
                      })} `;
                    }
                  })}`;
                })}`;
              }
            })}`;
          }
        })} `;
      }(__value);
    }(getAssignments())}` : `${data.active === "Log Out" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display:flex;align-items:center;justify-content:center;"
          },
          {},
          {
            default: () => {
              return `<div class="authQR svelte-u7i3fp">${validate_component(GenerateQR, "GenerateQR").$$render(
                $$result,
                {
                  data: privateID + " " + otpID,
                  filename: publicID,
                  autoDownload: false
                },
                {},
                {}
              )}</div>`;
            }
          }
        )} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `<form method="POST" action="?/logout"> ${validate_component(Button, "Button").$$render($$result, { style: "width:100%;", class: "logout" }, {}, {
              default: () => {
                return `Log out`;
              }
            })}</form>`;
          }
        })}`;
      }
    })} ${$page.data.user.publicID === "MithileshKumar" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display:flex; flex-direction:column; width:100%;gap:1em;"
          },
          {},
          {
            default: () => {
              return `${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "PublicID",
                  input$emptyValueUndefined: true,
                  value: targetPublicID
                },
                {
                  value: ($$value) => {
                    targetPublicID = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "PrivateID",
                  input$emptyValueUndefined: true,
                  value: targetPrivateID
                },
                {
                  value: ($$value) => {
                    targetPrivateID = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "OtpID",
                  input$emptyValueUndefined: true,
                  value: targetOtpID
                },
                {
                  value: ($$value) => {
                    targetOtpID = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Generate QR`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })} ${``}` : ``}` : ``}`} </article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_isAuth();
  $$unsubscribe_currentPath();
  $$unsubscribe_TopBarHeight();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BOea0JI9.js.map
