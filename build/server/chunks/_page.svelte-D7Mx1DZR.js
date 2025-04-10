import { a as subscribe, d as set_store_value, h as is_promise, n as noop } from './utils-DhkojCd_.js';
import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute, i as each } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { T as TabBar, a as Tab } from './TabBar-Cyja1TX8.js';
import { p as page } from './stores3-kDd52ji6.js';
import './client-CAo-6NMJ.js';
import { T as Text, P as PrimaryText, S as SecondaryText, M as Meta } from './Subheader-DEm_inUP.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { I as IconButton } from './IconButton-Bt4YIh4x.js';
import { C as CommonIcon } from './Svg-Dkxrus40.js';
import { c as currentPath } from './stores2-f06Es8-t.js';
import { S as Set_1, C as Chip } from './Set-DpFt5ER7.js';
import { C as Comments } from './ComposeComment.svelte_svelte_type_style_lang-lP_mVojq.js';
import { L as List, I as Item } from './Item-T2YrjSpA.js';
import { G as Graphic } from './Graphic-CnHJKmsY.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './Ripple-N--aPaMn.js';
import './prefixFilter-B6cFZsw3.js';
import './exports-DKuYoYKl.js';
import './dispatch-BOSWPsEc.js';
import './index2-D2s-XE5r.js';
import './ContextFragment-CedcH2TL.js';

const css$6 = {
  code: ".photos.svelte-c62z4e.svelte-c62z4e{position:relative}.banner.svelte-c62z4e.svelte-c62z4e{width:100%;height:170px;background-color:rgba(0, 247, 255, 0.919)}.profile.svelte-c62z4e.svelte-c62z4e{position:absolute;bottom:-50px;left:10px;width:120px;height:120px;border-radius:50%;background-color:white;border-width:2px;overflow:hidden}.banner.svelte-c62z4e img.svelte-c62z4e,.profile.svelte-c62z4e img.svelte-c62z4e{width:100%;height:100%}.action.svelte-c62z4e.svelte-c62z4e{display:flex;align-items:center;justify-content:end}.details.svelte-c62z4e.svelte-c62z4e{margin-left:1em}.name.svelte-c62z4e.svelte-c62z4e{display:flex;gap:0.3em;font-weight:bold;font-size:1.1em;margin-top:1em;align-items:center}.publicID.svelte-c62z4e.svelte-c62z4e{font-size:0.9em}.aboutme.svelte-c62z4e p.svelte-c62z4e{margin-bottom:0}.aboutme.svelte-c62z4e.svelte-c62z4e,.summary.svelte-c62z4e.svelte-c62z4e{font-size:0.8em}.summary.svelte-c62z4e.svelte-c62z4e{display:flex;flex-direction:row;align-items:center;gap:1em}.prop.svelte-c62z4e.svelte-c62z4e{display:flex;align-items:center;gap:0.3em}.bullet.svelte-c62z4e.svelte-c62z4e{display:flex;width:7px;height:7px;border-radius:50%;background:currentColor}",
  map: `{"version":3,"file":"User.svelte","sources":["User.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Tab, { Label } from '@smui/tab';\\r\\n    import TabBar from '@smui/tab-bar';\\r\\n    import { page } from '$app/stores';\\r\\n    import { goto } from '$app/navigation';\\r\\n    export let banner;\\r\\n    export let profile;\\r\\n    export let currentUser;\\r\\n    export let currentUserDetail;\\r\\n    export let active;\\r\\n    $: tabs = [\\r\\n        \`\${currentUserDetail.common.following} Following\`,\\r\\n        \`\${currentUserDetail.common.followers} Followers\`,\\r\\n        'Posts',\\r\\n        'Comments',\\r\\n        'Likes'\\r\\n    ]\\r\\n    const handleClick = (tab) => {\\r\\n        switch(tab) {\\r\\n            case 'Posts': {\\r\\n                break;\\r\\n            }\\r\\n            case 'Comments': {\\r\\n                break;\\r\\n            }\\r\\n            case 'Likes': {\\r\\n                break;\\r\\n            }\\r\\n            case tab.includes('Following'): {\\r\\n                alert('Loading Following...')\\r\\n                break;\\r\\n            }\\r\\n            case tab.includes('Followers'): {\\r\\n                alert('Loading Followers...')\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    const follow = async () => {\\r\\n        let res = await fetch(\`/vectorial/api/\${currentUser.publicID}/following\`, {\\r\\n            method: 'POST',\\r\\n            headers: {\\r\\n                'content-type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({})\\r\\n        });\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to Follow')\\r\\n            return\\r\\n        }\\r\\n        \\r\\n        await invalidate(\`/vectorial/api/\${currentUser.publicID}\`)\\r\\n        \\r\\n        // console.log('following...', data.currentUserDetail.isFollowing)\\r\\n        // alert('Added to following!!')\\r\\n    }\\r\\n    const unfollow = async () => {\\r\\n        let res = await fetch(\`/vectorial/api/\${currentUser.publicID}/following\`, {\\r\\n            method: 'PUT',\\r\\n            headers: {\\r\\n                'content-type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({})\\r\\n        });\\r\\n        if(!res.ok) {\\r\\n            alert('Failed unfollow')\\r\\n            return\\r\\n        }\\r\\n        \\r\\n        await invalidate(\`/vectorial/api/\${currentUser.publicID}\`)\\r\\n        // console.log('unfollowing...', data.currentUserDetail.isFollowing)\\r\\n        // alert('Removed from following!!')\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<Card>\\r\\n    \\r\\n    <div class=\\"photos\\">\\r\\n        <div class=\\"banner\\">\\r\\n            <img src={banner} alt=\\"banner\\" />\\r\\n        </div>\\r\\n        <div class=\\"profile\\">\\r\\n            <img src={profile} alt=\\"profile\\" />\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\"action\\">\\r\\n        {#if $page.data.user && $page.data.user.publicID === currentUser.publicID}\\r\\n            <Button on:click={() => goto(\\"/settings/profile\\")}\\r\\n                >Edit Profile</Button\\r\\n            >\\r\\n        {:else if currentUserDetail.isFollowing}\\r\\n            <Button on:click={unfollow}>Following</Button>\\r\\n        {:else}\\r\\n            <Button on:click={follow}>Follow</Button>\\r\\n        {/if}\\r\\n    </div>\\r\\n    <Content class=\\"mdc-typography--body2\\">\\r\\n        <div class=\\"details\\">\\r\\n            <div class=\\"userInfo\\">\\r\\n                <div class=\\"name\\">\\r\\n                    <span class='mdc-typography--headline5'>{currentUser.name}</span>\\r\\n                    <span class=\\"material-icons\\">verified</span>\\r\\n                </div>\\r\\n                <div class=\\"publicID\\">{currentUser.publicID}</div>\\r\\n            </div>\\r\\n            <div class=\\"aboutme\\">\\r\\n                <p>{currentUserDetail.common.bio}</p>\\r\\n            </div>\\r\\n            <div class=\\"summary\\">\\r\\n                <span class=\\"prop\\">\\r\\n                    <span class=\\"icon material-icons\\">stars</span>\\r\\n                    <span class=\\"propName\\"\\r\\n                        >{currentUserDetail.details.rank.label}</span\\r\\n                    >\\r\\n                </span>\\r\\n                <span class=\\"bullet\\" />\\r\\n                <span class=\\"prop\\">\\r\\n                    <span class=\\"icon material-icons\\">link</span>\\r\\n                    <span class=\\"propName\\"\\r\\n                        >{currentUserDetail.common.website}</span\\r\\n                    >\\r\\n                </span>\\r\\n            </div>\\r\\n            <!-- <div class=\\"circle\\">\\r\\n                <span class=\\"followers\\">\\r\\n                    <strong>{currentUserDetail.common.following}</strong>\\r\\n                    <span>Following</span>\\r\\n                </span>\\r\\n                <span class=\\"following\\">\\r\\n                    <strong>{currentUserDetail.common.followers}</strong>\\r\\n                    <span>Followers</span>\\r\\n                </span>\\r\\n            </div> -->\\r\\n        </div>\\r\\n    </Content>\\r\\n\\r\\n    <TabBar {tabs} let:tab bind:active>\\r\\n        <Tab {tab}>\\r\\n            <Label>{tab}</Label>\\r\\n        </Tab>\\r\\n    </TabBar>\\r\\n    \\r\\n</Card>\\r\\n<style>\\r\\n    .photos {\\r\\n        position: relative;\\r\\n    }\\r\\n    .banner {\\r\\n        width: 100%;\\r\\n        height: 170px;\\r\\n        background-color: rgba(0, 247, 255, 0.919);\\r\\n    }\\r\\n    .profile {\\r\\n        position: absolute;\\r\\n        bottom: -50px;\\r\\n        left: 10px;\\r\\n        width: 120px;\\r\\n        height: 120px;\\r\\n        border-radius: 50%;\\r\\n        background-color: white;\\r\\n        border-width: 2px;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .banner img, .profile img {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n    }\\r\\n    .action {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: end;\\r\\n    }\\r\\n    .details {\\r\\n        margin-left: 1em;\\r\\n    }\\r\\n    .name {\\r\\n        display: flex;\\r\\n        gap: 0.3em;\\r\\n        font-weight: bold;\\r\\n        font-size: 1.1em;\\r\\n        margin-top: 1em;\\r\\n        align-items: center;\\r\\n    }\\r\\n    .publicID {\\r\\n        font-size: 0.9em;\\r\\n        /* color: rgb(187, 186, 186); */\\r\\n    }\\r\\n    .aboutme p {\\r\\n        margin-bottom: 0;\\r\\n    }\\r\\n    .aboutme, .summary {\\r\\n        font-size: 0.8em;\\r\\n    }\\r\\n    .summary {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 1em;\\r\\n        /* color: rgb(200, 200, 200); */\\r\\n    }\\r\\n    .prop {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        gap: 0.3em;\\r\\n    }\\r\\n    .bullet {\\r\\n        display: flex;\\r\\n        width: 7px;\\r\\n        height: 7px;\\r\\n        border-radius: 50%;\\r\\n        background: currentColor;\\r\\n        /* background: gray; */\\r\\n    }\\r\\n    /* .circle {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 1em;\\r\\n        margin-top: 1em;\\r\\n        font-size: 0.8em;\\r\\n        margin-bottom: 1em;\\r\\n        color: rgb(200, 200, 200);\\r\\n    } */\\r\\n</style>"],"names":[],"mappings":"AAmJI,mCAAQ,CACJ,QAAQ,CAAE,QACd,CACA,mCAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAC7C,CACA,oCAAS,CACL,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,KAAK,CACvB,YAAY,CAAE,GAAG,CACjB,QAAQ,CAAE,MACd,CACA,qBAAO,CAAC,iBAAG,CAAE,sBAAQ,CAAC,iBAAI,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,mCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,GACrB,CACA,oCAAS,CACL,WAAW,CAAE,GACjB,CACA,iCAAM,CACF,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,GAAG,CACf,WAAW,CAAE,MACjB,CACA,qCAAU,CACN,SAAS,CAAE,KAEf,CACA,sBAAQ,CAAC,eAAE,CACP,aAAa,CAAE,CACnB,CACA,oCAAQ,CAAE,oCAAS,CACf,SAAS,CAAE,KACf,CACA,oCAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAET,CACA,iCAAM,CACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CACA,mCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,YAEhB"}`
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
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    tabs = [
      `${currentUserDetail.common.following} Following`,
      `${currentUserDetail.common.followers} Followers`,
      "Posts",
      "Comments",
      "Likes"
    ];
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="photos svelte-c62z4e"><div class="banner svelte-c62z4e"><img${add_attribute("src", banner, 0)} alt="banner" class="svelte-c62z4e"></div> <div class="profile svelte-c62z4e"><img${add_attribute("src", profile, 0)} alt="profile" class="svelte-c62z4e"></div></div> <div class="action svelte-c62z4e">${$page.data.user && $page.data.user.publicID === currentUser.publicID ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Edit Profile`;
          }
        })}` : `${currentUserDetail.isFollowing ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Following`;
          }
        })}` : `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Follow`;
          }
        })}`}`}</div> ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
          default: () => {
            return `<div class="details svelte-c62z4e"><div class="userInfo"><div class="name svelte-c62z4e"><span class="mdc-typography--headline5">${escape(currentUser.name)}</span> <span class="material-icons" data-svelte-h="svelte-1svqpij">verified</span></div> <div class="publicID svelte-c62z4e">${escape(currentUser.publicID)}</div></div> <div class="aboutme svelte-c62z4e"><p class="svelte-c62z4e">${escape(currentUserDetail.common.bio)}</p></div> <div class="summary svelte-c62z4e"><span class="prop svelte-c62z4e"><span class="icon material-icons" data-svelte-h="svelte-1q6mwxz">stars</span> <span class="propName">${escape(currentUserDetail.details.rank.label)}</span></span> <span class="bullet svelte-c62z4e"></span> <span class="prop svelte-c62z4e"><span class="icon material-icons" data-svelte-h="svelte-ebzaoo">link</span> <span class="propName">${escape(currentUserDetail.common.website)}</span></span></div> </div>`;
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
const css$5 = {
  code: ".postcontainer.svelte-u73mm1.svelte-u73mm1{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-u73mm1.svelte-u73mm1{width:50px;height:50px;border-radius:50%;overflow:hidden}.image.svelte-u73mm1 img.svelte-u73mm1{width:50px;height:50px}.header.svelte-u73mm1.svelte-u73mm1{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-u73mm1 .primary.svelte-u73mm1{font-weight:bold}.header.svelte-u73mm1 .secondary.svelte-u73mm1{color:gray;font-size:0.9em}.primary.svelte-u73mm1.svelte-u73mm1{cursor:pointer}.postcontent.svelte-u73mm1.svelte-u73mm1{text-overflow:ellipsis;overflow:hidden}",
  map: '{"version":3,"file":"Post.svelte","sources":["Post.svelte"],"sourcesContent":["<!-- src/lib/components/post.svelte -->\\r\\n<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, {\\r\\n        Content,\\r\\n        PrimaryAction,\\r\\n        Media,\\r\\n        MediaContent,\\r\\n        Actions,\\r\\n        ActionButtons,\\r\\n        ActionIcons,\\r\\n    } from \\"@smui/card\\";\\r\\n    import IconButton from \\"@smui/icon-button\\";\\r\\n    import ListItem from \\"@smui/list\\";\\r\\n    import Button, { Label, Icon } from \\"@smui/button\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import ComposeComment from \\"./ComposeComment.svelte\\";\\r\\n    import {goto} from \'$app/navigation\';\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import Chip, { Set } from \\"@smui/chips\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    let selected = [];\\r\\n    let profile = \'\';\\r\\n    let media;\\r\\n    let isPostLiked = false;\\r\\n    let isTakingComment = false;\\r\\n    export let post = {\\r\\n        name: \\"\\",\\r\\n        publicID: \\"\\", //public\\r\\n        media: \\"\\",\\r\\n        profileImage: \\"\\",\\r\\n        title: \\"\\",\\r\\n        subtitle: \\"\\",\\r\\n        summary: \'\',\\r\\n        content: \\"\\",\\r\\n        comments: [], \\r\\n        shares: [], \\r\\n        likes: [], \\r\\n        creationTimeStamp: Date.now(),\\r\\n    };\\r\\n    onMount(async () => {\\r\\n        // console.log(`/api/${post.publicID}/media?media=${post.media}`);\\r\\n        if (post.media) {\\r\\n            // console.log(`/api/${post.publicID}/media?media=${post.media}`)\\r\\n            let res = await fetch(\\r\\n                `/api/${post.publicID}/media?media=${post.media}`\\r\\n            );\\r\\n            if(!res.ok) {\\r\\n                alert(\'Failed to load data...\')\\r\\n            }\\r\\n            let reader = new FileReader();\\r\\n            let mediaData;\\r\\n            \\r\\n            if(post.media.split(\'.\')[1] === \'svg\'){\\r\\n                mediaData = await res.text();\\r\\n                media = \'data:image/svg+xml,\' + encodeURIComponent(mediaData);\\r\\n            } else {\\r\\n                mediaData = await res.blob();\\r\\n                reader.readAsDataURL(mediaData);\\r\\n                reader.onload = (e) => {\\r\\n                    media = e.target.result; \\r\\n                };\\r\\n            }\\r\\n            \\r\\n        }\\r\\n        if(profile.length === 0) {\\r\\n            let res1 = await fetch(`/api/${post.publicID}/profilepic`);\\r\\n            let profilepicData = await res1.blob();\\r\\n            let reader = new FileReader();\\r\\n            reader.readAsDataURL(profilepicData);\\r\\n            reader.onload = e => {\\r\\n                profile = e.target.result;\\r\\n                // console.log(profile)\\r\\n            }\\r\\n        }\\r\\n        //get liked status\\r\\n        let resLiked = await fetch(`/api/${$page.data.user.publicID}/likes/${post.postID}`);\\r\\n        if(!resLiked.ok) {\\r\\n            isPostLiked = false;\\r\\n        } else {\\r\\n            let liked = await resLiked.json();\\r\\n            isPostLiked = liked;\\r\\n            console.log(isPostLiked);\\r\\n        }\\r\\n        \\r\\n    });\\r\\n    const like = async () => {\\r\\n        // console.log(\'Action:\', !isPostLiked);\\r\\n        const resLike = await fetch(`/api/${$page.data.user.publicID}/likes/${post.postID}`, {\\r\\n            method: \'POST\',\\r\\n            headers: {\\r\\n                \'content-type\': \'application/json\'\\r\\n            },\\r\\n            body: JSON.stringify({postID: post.postID, liked: !isPostLiked})\\r\\n        })\\r\\n        isPostLiked = !isPostLiked;\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<Card>\\r\\n    {#if media}\\r\\n    <Media style=\'display:flex; align-items:center; justify-content:center; max-height: 300px;background:white;\'>\\r\\n        <img style=\'max-height:300px;\' src=\\"{media}\\" alt=\\"img\\">\\r\\n        <!-- <MediaContent>\\r\\n            <div\\r\\n                style=\\"color: #fff; position: absolute; bottom: 16px; left: 16px;\\"\\r\\n            >\\r\\n                \\r\\n            </div>\\r\\n        </MediaContent> -->\\r\\n    </Media>\\r\\n    {/if}\\r\\n    <!-- </PrimaryAction> -->\\r\\n    <Content class=\\"mdc-typography--body2\\">\\r\\n        <h2 class=\\"mdc-typography--headline6\\" style=\\"margin: 0;\\">\\r\\n            {post.title}\\r\\n        </h2>\\r\\n        <h3 class=\\"mdc-typography--subtitle2\\" style=\\"margin: 0; color: #888;\\">\\r\\n            {post.subtitle}\\r\\n        </h3>\\r\\n        <div class=\\"tagsInput\\">\\r\\n            <Set chips={post.tags} let:chip nonInteractive>\\r\\n                <Chip {chip}>\\r\\n                    <Text>{chip}</Text>\\r\\n                </Chip>\\r\\n            </Set>\\r\\n        </div>\\r\\n        <div class=\\"postcontainer\\">\\r\\n            <div class=\\"image\\">\\r\\n                <img src={profile} alt={post.name} />\\r\\n            </div>\\r\\n            <div class=\\"body\\">\\r\\n                <div class=\\"header\\">\\r\\n                    <span class=\\"primary\\" on:click={() => goto(`/${post.publicID}`)}>{post.name}</span>\\r\\n                    <span class=\\"secondary\\">\\r\\n                        <span>{post.publicID}</span>\\r\\n                        <span\\r\\n                            >{new Date(\\r\\n                                post.creationTimeStamp\\r\\n                            ).toLocaleString()}</span\\r\\n                        >\\r\\n                    </span>\\r\\n                </div>\\r\\n                <div class=\\"postcontent\\">{@html post.summary || post.content}</div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => goto(`/post/${post.postID}`)}>\\r\\n            <!-- <Icon class=\\"material-icons\\">chat_bubble_outline</Icon> -->\\r\\n            <Label>Show more</Label>\\r\\n        </Button>\\r\\n        <Button on:click={() => isTakingComment = !isTakingComment}>\\r\\n            <Icon class=\\"material-icons\\">chat_bubble_outline</Icon>\\r\\n            <Label>Comment</Label>\\r\\n        </Button>\\r\\n        <!-- <Button on:click={() => console.log(\\"Share clicked\\")}>\\r\\n            <Icon class=\\"material-icons\\">autorenew</Icon>\\r\\n            <Label>{post.shares}</Label>\\r\\n        </Button> -->\\r\\n        <IconButton on:click={like} toggle pressed={isPostLiked}>\\r\\n            <Icon class=\\"material-icons\\" on>favorite</Icon>\\r\\n            <Icon class=\\"material-symbols-outlined\\">favorite_border</Icon>\\r\\n        </IconButton>\\r\\n        \\r\\n        {#if $page.data.user && ($page.data.user.publicID === post.publicID)}\\r\\n            <Button on:click={() => goto(`/${$page.data.user.publicID}/edit?postID=${post.postID}`)}>\\r\\n                <!-- <Icon class=\\"material-icons\\">chat_bubble_outline</Icon> -->\\r\\n                <Label>Edit</Label>\\r\\n        </Button>\\r\\n        {/if}\\r\\n    </Actions>\\r\\n</Card>\\r\\n{#if isTakingComment}\\r\\n    <ComposeComment parentID={post.postID} />\\r\\n{/if}\\r\\n<style>\\r\\n    .postcontainer {\\r\\n        display: grid;\\r\\n        grid-template-columns: 50px auto;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .image {\\r\\n        width: 50px;\\r\\n        height: 50px;\\r\\n        border-radius: 50%;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .image img {\\r\\n        width: 50px;\\r\\n        height: 50px;\\r\\n    }\\r\\n    .header {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .header .primary {\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    .header .secondary {\\r\\n        color: gray;\\r\\n        font-size: 0.9em;\\r\\n    }\\r\\n    .primary {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .postcontent {\\r\\n        /* height: 100px; */\\r\\n        text-overflow: ellipsis;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwLI,0CAAe,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAChC,GAAG,CAAE,KACT,CACA,kCAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd,CACA,oBAAM,CAAC,iBAAI,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,mCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CACA,qBAAO,CAAC,sBAAS,CACb,WAAW,CAAE,IACjB,CACA,qBAAO,CAAC,wBAAW,CACf,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KACf,CACA,oCAAS,CACL,MAAM,CAAE,OACZ,CACA,wCAAa,CAET,aAAa,CAAE,QAAQ,CACvB,QAAQ,CAAE,MACd"}'
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let profile = "";
  let isPostLiked = false;
  let { post = {
    name: "",
    publicID: "",
    //public
    media: "",
    profileImage: "",
    title: "",
    subtitle: "",
    summary: "",
    content: "",
    comments: [],
    shares: [],
    likes: [],
    creationTimeStamp: Date.now()
  } } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
  $$result.css.add(css$5);
  $$unsubscribe_page();
  return `  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${``}  ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
        default: () => {
          return `<h2 class="mdc-typography--headline6" style="margin: 0;">${escape(post.title)}</h2> <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">${escape(post.subtitle)}</h3> <div class="tagsInput">${validate_component(Set_1, "Set").$$render($$result, { chips: post.tags, nonInteractive: true }, {}, {
            default: ({ chip }) => {
              return `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
                default: () => {
                  return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(chip)}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div> <div class="postcontainer svelte-u73mm1"><div class="image svelte-u73mm1"><img${add_attribute("src", profile, 0)}${add_attribute("alt", post.name, 0)} class="svelte-u73mm1"></div> <div class="body"><div class="header svelte-u73mm1"><span class="primary svelte-u73mm1">${escape(post.name)}</span> <span class="secondary svelte-u73mm1"><span>${escape(post.publicID)}</span> <span>${escape(new Date(post.creationTimeStamp).toLocaleString())}</span></span></div> <div class="postcontent svelte-u73mm1"><!-- HTML_TAG_START -->${post.summary || post.content}<!-- HTML_TAG_END --></div></div></div>`;
        }
      })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return ` ${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Show more`;
                }
              })}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `chat_bubble_outline`;
                }
              })} ${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Comment`;
                }
              })}`;
            }
          })}  ${validate_component(IconButton, "IconButton").$$render($$result, { toggle: true, pressed: isPostLiked }, {}, {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                default: () => {
                  return `favorite`;
                }
              })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-symbols-outlined" }, {}, {
                default: () => {
                  return `favorite_border`;
                }
              })}`;
            }
          })} ${$page.data.user && $page.data.user.publicID === post.publicID ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return ` ${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Edit`;
                }
              })}`;
            }
          })}` : ``}`;
        }
      })}`;
    }
  })} ${``}`;
});
const css$4 = {
  code: ".posts.svelte-19oat9w{display:flex;flex-direction:column;gap:1em}",
  map: `{"version":3,"file":"Posts.svelte","sources":["Posts.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Post from \\"./Post.svelte\\";\\r\\n\\r\\n\\r\\n    export let posts = []\\r\\n    export let profile = '';\\r\\n    // $:console.log(posts)\\r\\n<\/script>\\r\\n<div class=\\"posts\\">\\r\\n    {#each posts as post}\\r\\n        <Post {post} {profile} />\\r\\n    {:else}\\r\\n        <p>Your posts here.</p>\\r\\n    {/each}\\r\\n</div>\\r\\n<style>\\r\\n    .posts {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAiBI,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GACT"}`
};
const Posts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  let { profile = "" } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0) $$bindings.profile(profile);
  $$result.css.add(css$4);
  return `<div class="posts svelte-19oat9w">${posts.length ? each(posts, (post) => {
    return `${validate_component(Post, "Post").$$render($$result, { post, profile }, {}, {})}`;
  }) : `<p data-svelte-h="svelte-xtm778">Your posts here.</p>`} </div>`;
});
const css$3 = {
  code: ".likes.svelte-9j6vnp{display:flex;flex-direction:column;gap:1em}",
  map: `{"version":3,"file":"Likes.svelte","sources":["Likes.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import { page } from '$app/stores';\\r\\n    import { onMount } from 'svelte';\\r\\n    import Post from './Post.svelte';\\r\\n    let likes = [];\\r\\n    let likesProfiles = {}, profilePicReader;\\r\\n    onMount(async () => {\\r\\n        const likesRes = await fetch(\`/vectorial/api/\${$page.params.publicID}/likes\`);\\r\\n        if(!likesRes.ok) {\\r\\n            likes = []\\r\\n        }\\r\\n        likes = await likesRes.json();\\r\\n        // for(let i = 0; i < likes.length; i++) {\\r\\n        //     await getProfile(likes[i].publicID)\\r\\n        // }\\r\\n        // likesProfiles = likesProfiles;\\r\\n    })\\r\\n    const getProfile = async (id) => {\\r\\n        const profileRes = await fetch(\`/vectorial/api/\${id}/profilepic\`);\\r\\n        if(!profileRes.ok) likesProfiles[id] = '';\\r\\n        let profilepicData = await profileRes.blob();\\r\\n        profilePicReader = new FileReader();\\r\\n        profilePicReader.readAsDataURL(profilepicData);\\r\\n        profilePicReader.onload = (e) => {\\r\\n            likesProfiles[id] = e.target.result;\\r\\n        };\\r\\n    }\\r\\n<\/script>\\r\\n<div class=\\"likes\\">\\r\\n    {#each likes as like}\\r\\n        <Post post={like} />\\r\\n    {:else}\\r\\n        <p>Your liked posts here.</p>\\r\\n    {/each}\\r\\n</div>\\r\\n<style>\\r\\n    .likes {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAqCI,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GACT"}`
};
const Likes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let likes = [];
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<div class="likes svelte-9j6vnp">${likes.length ? each(likes, (like) => {
    return `${validate_component(Post, "Post").$$render($$result, { post: like }, {}, {})}`;
  }) : `<p data-svelte-h="svelte-q88yb7">Your liked posts here.</p>`} </div>`;
});
const css$2 = {
  code: "img.svelte-1le426r{width:100%;height:100%;overflow:hidden;border-radius:50%}.following.svelte-1le426r{white-space:nowrap;color:red}",
  map: `{"version":3,"file":"Followers.svelte","sources":["Followers.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from '@smui/list';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Card from '@smui/card';\\r\\n    import { page } from '$app/stores';\\r\\n    import { onMount } from 'svelte';\\r\\n    import { goto } from '$app/navigation';\\r\\n    let followers = [];\\r\\n    let list, selectionIndex, profilePicReader, followerProfiles = {};\\r\\n    onMount(async () => {\\r\\n        const followersRes = await fetch(\`/vectorial/api/\${$page.params.publicID}/followers\`);\\r\\n        if(!followersRes.ok) {\\r\\n            followers = []\\r\\n        }\\r\\n        followers = await followersRes.json();\\r\\n        for(let i = 0; i < followers.length; i++) {\\r\\n            await getProfile(followers[i].publicID)\\r\\n        }\\r\\n        followerProfiles = followerProfiles;\\r\\n    })\\r\\n    const getProfile = async (id) => {\\r\\n        const profileRes = await fetch(\`/vectorial/api/\${id}/profilepic\`);\\r\\n        if(!profileRes.ok) followerProfiles[id] = '';\\r\\n        let profilepicData = await profileRes.blob();\\r\\n        profilePicReader = new FileReader();\\r\\n        profilePicReader.readAsDataURL(profilepicData);\\r\\n        profilePicReader.onload = (e) => {\\r\\n            followerProfiles[id] = e.target.result;\\r\\n        };\\r\\n    }\\r\\n<\/script>\\r\\n<Card>\\r\\n    <List\\r\\n    class=\\"demo-list\\"\\r\\n    bind:this={list}\\r\\n    twoLine\\r\\n    avatarList\\r\\n    singleSelection\\r\\n    selectedIndex={selectionIndex}>\\r\\n    {#each followers as follower, i}\\r\\n      <Item\\r\\n        on:SMUI:action={() => goto(\`/\${follower.publicID}\`)}\\r\\n        selected={selectionIndex === i}\\r\\n      >\\r\\n        <Graphic>\\r\\n            <img width=\\"100%\\" height=\\"100%\\" src={followerProfiles[follower.publicID]} alt='profile'>\\r\\n        </Graphic>\\r\\n          \\r\\n        <Text>\\r\\n          <PrimaryText>{follower.name}</PrimaryText>\\r\\n          <SecondaryText>{follower?.bio}</SecondaryText>\\r\\n        </Text>\\r\\n        <Meta>\\r\\n            <span class=\\"following\\">{follower.isFollow ? '' : 'Not'} Following</span>\\r\\n        </Meta>\\r\\n      </Item>\\r\\n    {/each}\\r\\n</List>\\r\\n</Card>\\r\\n\\r\\n  <style>\\r\\n    img {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        overflow: hidden;\\r\\n        border-radius: 50%;\\r\\n    }\\r\\n    .following {\\r\\n        white-space: nowrap;\\r\\n        color: red;\\r\\n        /* font-size: 0.5em; */\\r\\n    }\\r\\n  </style>"],"names":[],"mappings":"AAqEI,kBAAI,CACA,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,GACnB,CACA,yBAAW,CACP,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAEX"}`
};
const Followers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let followers = [];
  let list, selectionIndex, followerProfiles = {};
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(List, "List").$$render(
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
              return `${each(followers, (follower, i) => {
                return `${validate_component(Item, "Item").$$render($$result, { selected: selectionIndex === i }, {}, {
                  default: () => {
                    return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img width="100%" height="100%"${add_attribute("src", followerProfiles[follower.publicID], 0)} alt="profile" class="svelte-1le426r"> `;
                      }
                    })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(follower.name)}`;
                          }
                        })} ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(follower?.bio)}`;
                          }
                        })} `;
                      }
                    })} ${validate_component(Meta, "Meta").$$render($$result, {}, {}, {
                      default: () => {
                        return `<span class="following svelte-1le426r">${escape(follower.isFollow ? "" : "Not")} Following</span> `;
                      }
                    })} `;
                  }
                })}`;
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
const css$1 = {
  code: "img.svelte-1le426r{width:100%;height:100%;overflow:hidden;border-radius:50%}.following.svelte-1le426r{white-space:nowrap;color:red}",
  map: `{"version":3,"file":"Followings.svelte","sources":["Followings.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from '@smui/list';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Card from '@smui/card';\\r\\n    import { page } from '$app/stores';\\r\\n    import { onMount } from 'svelte';\\r\\n    import { goto } from '$app/navigation';\\r\\n    let followings = [];\\r\\n    let list, selectionIndex, profilePicReader, followingProfiles = {};\\r\\n    onMount(async () => {\\r\\n        const followingsRes = await fetch(\`/vectorial/api/\${$page.params.publicID}/followings\`);\\r\\n        if(!followingsRes.ok) {\\r\\n            followings = []\\r\\n        }\\r\\n        followings = await followingsRes.json();\\r\\n        for(let i = 0; i < followings.length; i++) {\\r\\n            await getProfile(followings[i].publicID)\\r\\n        }\\r\\n        followingProfiles = followingProfiles;\\r\\n    })\\r\\n    const getProfile = async (id) => {\\r\\n        const profileRes = await fetch(\`/vectorial/api/\${id}/profilepic\`);\\r\\n        if(!profileRes.ok) followingProfiles[id] = '';\\r\\n        let profilepicData = await profileRes.blob();\\r\\n        profilePicReader = new FileReader();\\r\\n        profilePicReader.readAsDataURL(profilepicData);\\r\\n        profilePicReader.onload = (e) => {\\r\\n            followingProfiles[id] = e.target.result;\\r\\n        };\\r\\n    }\\r\\n<\/script>\\r\\n<Card>\\r\\n    <List\\r\\n        class=\\"demo-list\\"\\r\\n        bind:this={list}\\r\\n        twoLine\\r\\n        avatarList\\r\\n        singleSelection\\r\\n        selectedIndex={selectionIndex}>\\r\\n    {#each followings as following, i}\\r\\n      <Item\\r\\n        on:SMUI:action={() => goto(\`/\${following.publicID}\`)}\\r\\n        selected={selectionIndex === i}\\r\\n      >\\r\\n        <Graphic>\\r\\n            <img width=\\"100%\\" height=\\"100%\\" src={followingProfiles[following.publicID]} alt='profile'>\\r\\n        </Graphic>\\r\\n          \\r\\n        <Text>\\r\\n          <PrimaryText>{following.name}</PrimaryText>\\r\\n          <SecondaryText>{following?.bio}</SecondaryText>\\r\\n        </Text>\\r\\n        <Meta>\\r\\n            <span class=\\"following\\">{following.isFollow ? '' : 'Not'} Following</span>\\r\\n        </Meta>\\r\\n      </Item>\\r\\n    {/each}\\r\\n</List>\\r\\n</Card>\\r\\n\\r\\n  <style>\\r\\n    img {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        overflow: hidden;\\r\\n        border-radius: 50%;\\r\\n    }\\r\\n    .following {\\r\\n        white-space: nowrap;\\r\\n        color: red;\\r\\n        /* font-size: 0.5em; */\\r\\n    }\\r\\n  </style>"],"names":[],"mappings":"AAqEI,kBAAI,CACA,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,GACnB,CACA,yBAAW,CACP,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAEX"}`
};
const Followings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let followings = [];
  let list, selectionIndex, followingProfiles = {};
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(List, "List").$$render(
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
              return `${each(followings, (following, i) => {
                return `${validate_component(Item, "Item").$$render($$result, { selected: selectionIndex === i }, {}, {
                  default: () => {
                    return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img width="100%" height="100%"${add_attribute("src", followingProfiles[following.publicID], 0)} alt="profile" class="svelte-1le426r"> `;
                      }
                    })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(following.name)}`;
                          }
                        })} ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(following?.bio)}`;
                          }
                        })} `;
                      }
                    })} ${validate_component(Meta, "Meta").$$render($$result, {}, {}, {
                      default: () => {
                        return `<span class="following svelte-1le426r">${escape(following.isFollow ? "" : "Not")} Following</span> `;
                      }
                    })} `;
                  }
                })}`;
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
  code: "article.svelte-c1kt0g{width:100%;display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import User from \\"$lib/vectorial/components/User.svelte\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import List, { Separator } from \\"@smui/list\\";\\r\\n    import Tab, { Label } from \\"@smui/tab\\";\\r\\n    import TabBar from \\"@smui/tab-bar\\";\\r\\n    import { goto, invalidate } from \\"$app/navigation\\";\\r\\n\\r\\n    import Posts from \\"$lib/vectorial/components/Posts.svelte\\";\\r\\n    import Comments from '$lib/vectorial/components/Comments.svelte';\\r\\n    import Likes from '$lib/vectorial/components/Likes.svelte';\\r\\n    import Followers from \\"$lib/vectorial/components/Followers.svelte\\";\\r\\n    import Followings from '$lib/vectorial/components/Followings.svelte';\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import { showLeft, currentPath } from \\"$lib/vectorial/stores\\";\\r\\n    import { browser } from '$app/environment';\\r\\n    import { get } from \\"svelte/store\\";\\r\\n    $: $currentPath = \`\${$page.params.publicID}\`;\\r\\n    export let data;\\r\\n    let profile = \\"\\", banner;\\r\\n    let active;\\r\\n    let tabs = [\\"Posts\\", \\"Replies\\", \\"Likes\\"];\\r\\n    // let workouts = [], questions = [], likes = [];\\r\\n    let profilePicReader, bannerReader;\\r\\n    onMount(async () => {\\r\\n        // console.log('onmount...', data.currentUser.publicID)\\r\\n        \\r\\n        profilePicReader = new FileReader();\\r\\n        profilePicReader.readAsDataURL(data.profilepicData);\\r\\n        profilePicReader.onload = (e) => {\\r\\n            profile = e.target.result;\\r\\n            \\r\\n            // console.log(profile)\\r\\n        };\\r\\n        bannerReader = new FileReader();\\r\\n        bannerReader.readAsDataURL(data.bannerpicData);\\r\\n        bannerReader.onload = (e) => {\\r\\n            banner = e.target.result;\\r\\n        };\\r\\n        // if($page.data.user && $page.data.user.publicID === data.currentUser.publicID) {\\r\\n        //     let resQuestions = await fetch(\`/vectorial/api/\${$page.data.user.publicID}/questions\`);\\r\\n        //     let resWorkouts = await fetch(\`/vectorial/api/workout\`);\\r\\n        //     if(!resWorkouts.ok) {\\r\\n        //         workouts = []\\r\\n        //     } else {\\r\\n        //         workouts = await resWorkouts.json();\\r\\n        //     }\\r\\n        //     if(!resQuestions.ok) {\\r\\n        //         questions = []\\r\\n        //     } else {\\r\\n        //         questions = await resQuestions.json();\\r\\n        //     }\\r\\n        // }\\r\\n    });\\r\\n    $: if(browser) {\\r\\n        profilePicReader = new FileReader();\\r\\n        profilePicReader.readAsDataURL(data.profilepicData);\\r\\n        profilePicReader.onload = (e) => {\\r\\n            profile = e.target.result;\\r\\n            // console.log(profile)\\r\\n        };\\r\\n        bannerReader = new FileReader();\\r\\n        bannerReader.readAsDataURL(data.bannerpicData);\\r\\n        bannerReader.onload = (e) => {\\r\\n            banner = e.target.result;\\r\\n        };\\r\\n    }\\r\\n    const getLikes = async () => {\\r\\n        const resLikes = await fetch(\`/vectorial/api/\${$page.params.publicID}/likes\`)\\r\\n        if(!resLikes.ok) return [];\\r\\n        else {\\r\\n            return await resLikes.json();\\r\\n        }\\r\\n    }\\r\\n    const getPosts = async () => {\\r\\n        const resPosts = await fetch(\`/vectorial/api/\${$page.params.publicID}/posts\`)\\r\\n        if(!resPosts.ok) return [];\\r\\n        else {\\r\\n            return await resPosts.json();\\r\\n        }\\r\\n    }\\r\\n    const getComments = async () => {\\r\\n        const resComments = await fetch(\`/vectorial/api/\${$page.params.publicID}/comments\`)\\r\\n        if(!resComments.ok) return [];\\r\\n        else {\\r\\n            return await resComments.json();\\r\\n        }\\r\\n    }\\r\\n    const follow = async () => {\\r\\n        let res = await fetch(\`/vectorial/api/\${$page.params.publicID}/following\`, {\\r\\n            method: 'POST',\\r\\n            headers: {\\r\\n                'content-type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({})\\r\\n        });\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to Follow')\\r\\n            return\\r\\n        }\\r\\n        \\r\\n        invalidate(\`/vectorial/api/\${data.currentUser.publicID}\`)\\r\\n        data = data;\\r\\n        // console.log('following...', data.currentUserDetail.isFollowing)\\r\\n        // alert('Added to following!!')\\r\\n    }\\r\\n    const unfollow = async () => {\\r\\n        let res = await fetch(\`/vectorial/api/\${$page.params.publicID}/following\`, {\\r\\n            method: 'PUT',\\r\\n            headers: {\\r\\n                'content-type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({})\\r\\n        });\\r\\n        if(!res.ok) {\\r\\n            alert('Failed unfollow')\\r\\n            return\\r\\n        }\\r\\n        \\r\\n        invalidate(\`/vectorial/api/\${data.currentUser.publicID}\`)\\r\\n        data = data;\\r\\n        // console.log('unfollowing...', data.currentUserDetail.isFollowing)\\r\\n        // alert('Removed from following!!')\\r\\n    }\\r\\n    // $: console.log($page.data.user, data.currentUser.publicID)\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title\\r\\n        >Drawings | Vectorial.app – Create and Manage SVG Drawings Online</title\\r\\n    >\\r\\n    <meta\\r\\n        name=\\"description\\"\\r\\n        content=\\"Create, edit, and manage your SVG drawings online at Vectorial.app. Experience our user-friendly interface with latex support tailored for researchers.\\"\\r\\n    />\\r\\n    <meta\\r\\n        name=\\"keywords\\"\\r\\n        content=\\"Vectorial.app Drawings, Online SVG Editor, Create SVG Drawings, Edit SVG Drawings, Latex Support in SVG, Web-based SVG Editor, Research Paper Graphics Tool, Academic Illustration Software\\"\\r\\n    />\\r\\n\\r\\n    <link\\r\\n        rel=\\"canonical\\"\\r\\n        href=\\"https://drmithileshkumar.com/vectorial/\${data.user.publicID}\\"\\r\\n    />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <User {banner} {profile} currentUser={data.currentUser} currentUserDetail={data.currentUserDetail} bind:active={data.active} />\\r\\n    \\r\\n    {#if $page.data.user && $page.data.user.publicID === data.currentUser.publicID}\\r\\n        <!-- <Card>\\r\\n            <Content>\\r\\n                <h2 class=\\"mdc-typography--headline6\\" style=\\"margin: 0;\\">\\r\\n                    Your certificates and transcripts\\r\\n                </h2>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Button on:click={() => goto(\`/\${$page.data.user.publicID}/certificates\`)}>Certificates</Button>\\r\\n                <Button on:click={() => goto(\`/\${$page.data.user.publicID}/transcripts\`)}>Transcripts</Button>\\r\\n                <Button on:click={() => goto(\`/\${$page.data.user.publicID}/invoices\`)}>Invoices</Button>\\r\\n            </Actions>\\r\\n        </Card> -->\\r\\n    {/if}\\r\\n    \\r\\n    {#if data.active === 'Posts'}\\r\\n        {#await getPosts() then posts}\\r\\n            <Posts posts={posts} {profile}/>\\r\\n        {/await}\\r\\n    {:else if data.active === 'Comments'}\\r\\n        {#await getComments() then comments}\\r\\n            <Comments comments={comments} {profile}/>\\r\\n        {/await}\\r\\n    {:else if data.active === 'Likes'}\\r\\n        <Likes {profile}/>\\r\\n    {:else if data.active?.includes('Following')}\\r\\n        <Followings {profile}/>\\r\\n    {:else if data.active?.includes('Followers')}\\r\\n        <Followers {profile}/>\\r\\n    {/if}\\r\\n\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuLI,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  let { data } = $$props;
  let profile = "", banner;
  const getPosts = async () => {
    const resPosts = await fetch(`/vectorial/api/${$page.params.publicID}/posts`);
    if (!resPosts.ok) return [];
    else {
      return await resPosts.json();
    }
  };
  const getComments = async () => {
    const resComments = await fetch(`/vectorial/api/${$page.params.publicID}/comments`);
    if (!resComments.ok) return [];
    else {
      return await resComments.json();
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-cyj2dw_START -->${$$result.title = `<title>Drawings | Vectorial.app – Create and Manage SVG Drawings Online</title>`, ""}<meta name="description" content="Create, edit, and manage your SVG drawings online at Vectorial.app. Experience our user-friendly interface with latex support tailored for researchers."><meta name="keywords" content="Vectorial.app Drawings, Online SVG Editor, Create SVG Drawings, Edit SVG Drawings, Latex Support in SVG, Web-based SVG Editor, Research Paper Graphics Tool, Academic Illustration Software"><link rel="canonical" href="${"https://drmithileshkumar.com/vectorial/$" + escape(data.user.publicID, true)}"><!-- HEAD_svelte-cyj2dw_END -->`, ""} <article class="svelte-c1kt0g">${validate_component(User, "User").$$render(
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
    )} ${$page.data.user && $page.data.user.publicID === data.currentUser.publicID ? `` : ``} ${data.active === "Posts" ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(posts) {
        return ` ${validate_component(Posts, "Posts").$$render($$result, { posts, profile }, {}, {})} `;
      }(__value);
    }(getPosts())}` : `${data.active === "Comments" ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(comments) {
        return ` ${validate_component(Comments, "Comments").$$render($$result, { comments, profile }, {}, {})} `;
      }(__value);
    }(getComments())}` : `${data.active === "Likes" ? `${validate_component(Likes, "Likes").$$render($$result, { profile }, {}, {})}` : `${data.active?.includes("Following") ? `${validate_component(Followings, "Followings").$$render($$result, { profile }, {}, {})}` : `${data.active?.includes("Followers") ? `${validate_component(Followers, "Followers").$$render($$result, { profile }, {}, {})}` : ``}`}`}`}`} </article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D7Mx1DZR.js.map
