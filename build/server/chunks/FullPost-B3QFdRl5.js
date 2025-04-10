import { a as subscribe } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { I as IconButton } from './IconButton-Bt4YIh4x.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { C as CommonIcon } from './Svg-Dkxrus40.js';
import { T as Text } from './Subheader-DEm_inUP.js';
import { B as Button } from './Button-DTp4JSRw.js';
import './client-CAo-6NMJ.js';
import { p as page } from './stores3-kDd52ji6.js';
import { S as Set_1, C as Chip } from './Set-DpFt5ER7.js';
import { C as Comments } from './ComposeComment.svelte_svelte_type_style_lang-lP_mVojq.js';
import './stores2-f06Es8-t.js';

const css = {
  code: "article.svelte-1r9o218.svelte-1r9o218{display:flex;flex-direction:column;gap:0.5em}.postcontainer.svelte-1r9o218.svelte-1r9o218{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-1r9o218.svelte-1r9o218{width:50px;height:50px;border-radius:50%;overflow:hidden}.image.svelte-1r9o218 img.svelte-1r9o218{width:50px;height:50px}.header.svelte-1r9o218.svelte-1r9o218{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-1r9o218 .primary.svelte-1r9o218{font-weight:bold}.header.svelte-1r9o218 .secondary.svelte-1r9o218{color:gray;font-size:0.9em}.primary.svelte-1r9o218.svelte-1r9o218{cursor:pointer}",
  map: '{"version":3,"file":"FullPost.svelte","sources":["FullPost.svelte"],"sourcesContent":["<!-- src/lib/components/post.svelte -->\\r\\n<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, {\\r\\n        Content,\\r\\n        PrimaryAction,\\r\\n        Media,\\r\\n        MediaContent,\\r\\n        Actions,\\r\\n        ActionButtons,\\r\\n        ActionIcons,\\r\\n    } from \\"@smui/card\\";\\r\\n    import IconButton from \\"@smui/icon-button\\";\\r\\n    import ListItem from \\"@smui/list\\";\\r\\n    import Button, { Label, Icon } from \\"@smui/button\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import {goto} from \'$app/navigation\';\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import Chip, { Set } from \\"@smui/chips\\";\\r\\n    import Comments from \'./Comments.svelte\';\\r\\n    import ComposeComment from \\"./ComposeComment.svelte\\";\\r\\n    export let profile = \'\';\\r\\n    let media;\\r\\n    let isPostLiked = false;\\r\\n    let isTakingComment = false;\\r\\n    export let post = {\\r\\n        name: \\"\\",\\r\\n        publicID: \\"\\", //public\\r\\n        media: \\"\\",\\r\\n        profileImage: \\"\\",\\r\\n        title: \\"\\",\\r\\n        subtitle: \\"\\",\\r\\n        content: \\"\\",\\r\\n        comments: [], //count\\r\\n        shares: [], //count\\r\\n        likes: [], //count\\r\\n        creationTimeStamp: Date.now(),\\r\\n    };\\r\\n    let comments = [];\\r\\n    onMount(async () => {\\r\\n        // console.log(`/vectorial/api/${post.publicID}/media?media=${post.media}`);\\r\\n        if (post.media) {\\r\\n\\r\\n            let res = await fetch(\\r\\n                `/vectorial/api/${post.publicID}/media?media=${post.media}`\\r\\n            );\\r\\n            if(!res.ok) {\\r\\n                alert(\'Failed to load data...\')\\r\\n            }\\r\\n            let reader = new FileReader();\\r\\n            let mediaData;\\r\\n            \\r\\n            if(post.media.split(\'.\')[1] === \'svg\'){\\r\\n                mediaData = await res.text();\\r\\n                media = \'data:image/svg+xml,\' + encodeURIComponent(mediaData);\\r\\n            } else {\\r\\n                mediaData = await res.blob();\\r\\n                reader.readAsDataURL(mediaData);\\r\\n                reader.onload = (e) => {\\r\\n                    media = e.target.result; \\r\\n                };\\r\\n            }\\r\\n        }\\r\\n        if(profile.length === 0) {\\r\\n            let res1 = await fetch(`/vectorial/api/${post.publicID}/profilepic`);\\r\\n            let profilepicData = await res1.blob();\\r\\n            let reader = new FileReader();\\r\\n            reader.readAsDataURL(profilepicData);\\r\\n            reader.onload = e => {\\r\\n                profile = e.target.result;\\r\\n                // console.log(profile)\\r\\n            }\\r\\n        }\\r\\n        //get liked status\\r\\n        let resLiked = await fetch(`/vectorial/api/${$page.data.user.publicID}/likes/${post.postID}`);\\r\\n        if(!resLiked.ok) {\\r\\n            isPostLiked = false;\\r\\n        } else {\\r\\n            let liked = await resLiked.json();\\r\\n            isPostLiked = liked;\\r\\n            console.log(isPostLiked);\\r\\n        }\\r\\n        //get comments\\r\\n        const resComment = await fetch(`/vectorial/api/post/${post.postID}/comments`);\\r\\n        if(!resComment.ok) {\\r\\n            comments = [];\\r\\n        } else {\\r\\n            comments = await resComment.json();\\r\\n        }\\r\\n    });\\r\\n    const like = async () => {\\r\\n        // console.log(\'Action:\', !isPostLiked);\\r\\n        const resLike = await fetch(`/vectorial/api/${$page.data.user.publicID}/likes/${post.postID}`, {\\r\\n            method: \'POST\',\\r\\n            headers: {\\r\\n                \'content-type\': \'application/json\'\\r\\n            },\\r\\n            body: JSON.stringify({postID: post.postID, liked: !isPostLiked})\\r\\n        })\\r\\n        isPostLiked = !isPostLiked;\\r\\n    }\\r\\n    // $:console.log(\'media\', media)\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        {#if media}\\r\\n        <Media style=\'display:flex; align-items:center; justify-content:center; max-height: 300px;background:white;\'>\\r\\n            <img style=\'max-height:300px;\' src=\\"{media}\\" alt=\\"img\\">\\r\\n        </Media>\\r\\n        {/if}\\r\\n        <!-- </PrimaryAction> -->\\r\\n        <Content class=\\"mdc-typography--body2\\">\\r\\n            <h2 class=\\"mdc-typography--headline6\\" style=\\"margin: 0;\\">\\r\\n                {post.title}\\r\\n            </h2>\\r\\n            <h3 class=\\"mdc-typography--subtitle2\\" style=\\"margin: 0; color: #888;\\">\\r\\n                {post.subtitle}\\r\\n            </h3>\\r\\n            <div class=\\"tagsInput\\">\\r\\n                <Set chips={post.tags} let:chip nonInteractive>\\r\\n                    <Chip {chip}>\\r\\n                        <Text>{chip}</Text>\\r\\n                    </Chip>\\r\\n                </Set>\\r\\n            </div>\\r\\n            <div class=\\"postcontainer\\">\\r\\n                <div class=\\"image\\">\\r\\n                    <img src={profile} alt={post.name} />\\r\\n                </div>\\r\\n                <div class=\\"body\\">\\r\\n                    <div class=\\"header\\">\\r\\n                        <span class=\\"primary\\" on:click={() => goto(`/${post.publicID}`)}>{post.name}</span>\\r\\n                        <span class=\\"secondary\\">\\r\\n                            <span>{post.publicID}</span>\\r\\n                            <span\\r\\n                                >{new Date(\\r\\n                                    post.creationTimeStamp\\r\\n                                ).toLocaleString()}</span\\r\\n                            >\\r\\n                        </span>\\r\\n                    </div>\\r\\n                    <div class=\\"postcontent\\">{@html post.content}</div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n        <Actions>\\r\\n            <Button on:click={() => isTakingComment = !isTakingComment}>\\r\\n                <Icon class=\\"material-icons\\">chat_bubble_outline</Icon>\\r\\n                <Label>Comment</Label>\\r\\n            </Button>\\r\\n            <!-- <Button on:click={() => console.log(\\"Share clicked\\")}>\\r\\n                <Icon class=\\"material-icons\\">autorenew</Icon>\\r\\n                <Label>{post.shares}</Label>\\r\\n            </Button> -->\\r\\n            <IconButton on:click={like} toggle pressed={isPostLiked}>\\r\\n                <Icon class=\\"material-icons\\" on>favorite</Icon>\\r\\n                <Icon class=\\"material-symbols-outlined\\">favorite_border</Icon>\\r\\n            </IconButton>\\r\\n            \\r\\n            {#if $page.data.user && ($page.data.user.publicID === post.publicID)}\\r\\n                <Button on:click={() => goto(`/${$page.data.user.publicID}/edit?postID=${post.postID}`)}>\\r\\n                    <!-- <Icon class=\\"material-icons\\">chat_bubble_outline</Icon> -->\\r\\n                    <Label>Edit</Label>\\r\\n                </Button>\\r\\n            {/if}\\r\\n        </Actions>\\r\\n    </Card>\\r\\n    <!------------Comments--------->\\r\\n    <Comments comments={comments} />\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .postcontainer {\\r\\n        display: grid;\\r\\n        grid-template-columns: 50px auto;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .image {\\r\\n        width: 50px;\\r\\n        height: 50px;\\r\\n        border-radius: 50%;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .image img {\\r\\n        width: 50px;\\r\\n        height: 50px;\\r\\n    }\\r\\n    .header {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .header .primary {\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    .header .secondary {\\r\\n        color: gray;\\r\\n        font-size: 0.9em;\\r\\n    }\\r\\n    .primary {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoLI,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,4CAAe,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAChC,GAAG,CAAE,KACT,CACA,oCAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd,CACA,qBAAM,CAAC,kBAAI,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CACA,sBAAO,CAAC,uBAAS,CACb,WAAW,CAAE,IACjB,CACA,sBAAO,CAAC,yBAAW,CACf,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KACf,CACA,sCAAS,CACL,MAAM,CAAE,OACZ"}'
};
const FullPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { profile = "" } = $$props;
  let isPostLiked = false;
  let { post = {
    name: "",
    publicID: "",
    //public
    media: "",
    profileImage: "",
    title: "",
    subtitle: "",
    content: "",
    comments: [],
    //count
    shares: [],
    //count
    likes: [],
    //count
    creationTimeStamp: Date.now()
  } } = $$props;
  let comments = [];
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0) $$bindings.profile(profile);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `  <article class="svelte-1r9o218">${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
          })}</div> <div class="postcontainer svelte-1r9o218"><div class="image svelte-1r9o218"><img${add_attribute("src", profile, 0)}${add_attribute("alt", post.name, 0)} class="svelte-1r9o218"></div> <div class="body"><div class="header svelte-1r9o218"><span class="primary svelte-1r9o218">${escape(post.name)}</span> <span class="secondary svelte-1r9o218"><span>${escape(post.publicID)}</span> <span>${escape(new Date(post.creationTimeStamp).toLocaleString())}</span></span></div> <div class="postcontent"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div></div></div>`;
        }
      })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
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
  })}  ${validate_component(Comments, "Comments").$$render($$result, { comments }, {}, {})} </article>`;
});

export { FullPost as F };
//# sourceMappingURL=FullPost-B3QFdRl5.js.map
