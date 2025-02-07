import { c as create_ssr_component, v as validate_component, f as add_attribute, e as escape, i as each } from "./ssr2.js";
import { a as subscribe } from "./utils.js";
import { C as Card } from "./Card.js";
import { C as Content } from "./ActionIcons.js";
import { A as Actions } from "./Actions.js";
import { C as CommonLabel } from "./CommonLabel.js";
import "./Subheader.js";
import { B as Button } from "./Button.js";
import "./client.js";
import { p as page } from "./stores3.js";
const css$1 = {
  code: ".commentcontainer.svelte-1cs108n.svelte-1cs108n{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-1cs108n.svelte-1cs108n{width:50px;height:50px;border-radius:50%;overflow:hidden}.image.svelte-1cs108n img.svelte-1cs108n{width:50px;height:50px}.header.svelte-1cs108n.svelte-1cs108n{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-1cs108n .primary.svelte-1cs108n{font-weight:bold}.header.svelte-1cs108n .secondary.svelte-1cs108n{color:gray;font-size:0.9em}.primary.svelte-1cs108n.svelte-1cs108n{cursor:pointer}.commentcontent.svelte-1cs108n.svelte-1cs108n{text-overflow:ellipsis;overflow:hidden}",
  map: '{"version":3,"file":"Comment.svelte","sources":["Comment.svelte"],"sourcesContent":["<!-- src/lib/components/comment.svelte -->\\r\\n<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, {\\r\\n        Content,\\r\\n        PrimaryAction,\\r\\n        Media,\\r\\n        MediaContent,\\r\\n        Actions,\\r\\n        ActionButtons,\\r\\n        ActionIcons,\\r\\n    } from \\"@smui/card\\";\\r\\n    import IconButton from \\"@smui/icon-button\\";\\r\\n    import ListItem from \\"@smui/list\\";\\r\\n    import Button, { Label, Icon } from \\"@smui/button\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    import {goto} from \'$app/navigation\';\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import Chip, { Set } from \\"@smui/chips\\";\\r\\n    import {page} from \'$app/stores\';\\r\\n    let profile = \'\';\\r\\n    export let comment = {\\r\\n        parentID: \'\',\\r\\n        name: \\"\\",\\r\\n        publicID: \\"\\", //public\\r\\n        profileImage: \\"\\",\\r\\n        content: \\"\\",\\r\\n        comments: [], \\r\\n        creationTimeStamp: Date.now(),\\r\\n    };\\r\\n    onMount(async () => {\\r\\n        // console.log(`/vectorial/api/${comment.publicID}/media?media=${comment.media}`);\\r\\n        if(profile.length === 0) {\\r\\n            let res1 = await fetch(`/vectorial/api/${comment.publicID}/profilepic`);\\r\\n            let profilepicData = await res1.blob();\\r\\n            let reader = new FileReader();\\r\\n            reader.readAsDataURL(profilepicData);\\r\\n            reader.onload = e => {\\r\\n                profile = e.target.result;\\r\\n                // console.log(profile)\\r\\n            }\\r\\n        }\\r\\n    });\\r\\n<\/script>\\r\\n\\r\\n<Card>\\r\\n    <!-- </PrimaryAction> -->\\r\\n    <Content class=\\"mdc-typography--body2\\">\\r\\n        <div class=\\"commentcontainer\\">\\r\\n            <div class=\\"image\\">\\r\\n                <img src={profile} alt={comment.name} />\\r\\n            </div>\\r\\n            <div class=\\"body\\">\\r\\n                <div class=\\"header\\">\\r\\n                    <span class=\\"primary\\" on:click={() => goto(`/${comment.publicID}`)}>{comment.name}</span>\\r\\n                    <span class=\\"secondary\\">\\r\\n                        <span>{comment.publicID}</span>\\r\\n                        <span\\r\\n                            >{new Date(\\r\\n                                comment.creationTimeStamp\\r\\n                            ).toLocaleString()}</span\\r\\n                        >\\r\\n                    </span>\\r\\n                </div>\\r\\n                <div class=\\"commentcontent\\">{@html comment.content}</div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => goto(comment.parentID.includes(\'Comment\') ? `/` : `/post/${comment.parentID}`)}>Parent</Button>\\r\\n        <!-- <Button on:click={() => console.log(\\"Comment clicked\\")}>\\r\\n            <Icon class=\\"material-icons\\">chat_bubble_outline</Icon>\\r\\n            <Label>Comment</Label>\\r\\n        </Button> -->\\r\\n        <!-- <Button on:click={() => console.log(\\"Share clicked\\")}>\\r\\n            <Icon class=\\"material-icons\\">autorenew</Icon>\\r\\n            <Label>{comment.shares}</Label>\\r\\n        </Button> -->    \\r\\n        {#if $page.data.user && ($page.data.user.publicID === comment.publicID)}\\r\\n            <Button on:click={() => goto(`/${$page.data.user.publicID}/edit/comment?commentID=${comment.commentID}`)}>\\r\\n                <!-- <Icon class=\\"material-icons\\">chat_bubble_outline</Icon> -->\\r\\n                <Label>Edit</Label>\\r\\n        </Button>\\r\\n        {/if}\\r\\n    </Actions>\\r\\n</Card>\\r\\n\\r\\n<style>\\r\\n    .commentcontainer {\\r\\n        display: grid;\\r\\n        grid-template-columns: 50px auto;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .image {\\r\\n        width: 50px;\\r\\n        height: 50px;\\r\\n        border-radius: 50%;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .image img {\\r\\n        width: 50px;\\r\\n        height: 50px;\\r\\n    }\\r\\n    .header {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .header .primary {\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    .header .secondary {\\r\\n        color: gray;\\r\\n        font-size: 0.9em;\\r\\n    }\\r\\n    .primary {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .commentcontent {\\r\\n        /* height: 100px; */\\r\\n        text-overflow: ellipsis;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+FI,+CAAkB,CACd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAChC,GAAG,CAAE,KACT,CACA,oCAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd,CACA,qBAAM,CAAC,kBAAI,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CACA,sBAAO,CAAC,uBAAS,CACb,WAAW,CAAE,IACjB,CACA,sBAAO,CAAC,yBAAW,CACf,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KACf,CACA,sCAAS,CACL,MAAM,CAAE,OACZ,CACA,6CAAgB,CAEZ,aAAa,CAAE,QAAQ,CACvB,QAAQ,CAAE,MACd"}'
};
const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let profile = "";
  let { comment = {
    parentID: "",
    name: "",
    publicID: "",
    //public
    profileImage: "",
    content: "",
    comments: [],
    creationTimeStamp: Date.now()
  } } = $$props;
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0) $$bindings.comment(comment);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return ` ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
        default: () => {
          return `<div class="commentcontainer svelte-1cs108n"><div class="image svelte-1cs108n"><img${add_attribute("src", profile, 0)}${add_attribute("alt", comment.name, 0)} class="svelte-1cs108n"></div> <div class="body"><div class="header svelte-1cs108n"><span class="primary svelte-1cs108n">${escape(comment.name)}</span> <span class="secondary svelte-1cs108n"><span>${escape(comment.publicID)}</span> <span>${escape(new Date(comment.creationTimeStamp).toLocaleString())}</span></span></div> <div class="commentcontent svelte-1cs108n"><!-- HTML_TAG_START -->${comment.content}<!-- HTML_TAG_END --></div></div></div>`;
        }
      })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Parent`;
            }
          })}   ${$page.data.user && $page.data.user.publicID === comment.publicID ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
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
  })}`;
});
const css = {
  code: ".comments.svelte-zbkuql{display:flex;flex-direction:column;gap:1em}",
  map: `{"version":3,"file":"Comments.svelte","sources":["Comments.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Comment from \\"./Comment.svelte\\";\\r\\n    export let comments = []\\r\\n    export let profile = '';\\r\\n    // $:console.log(comments)\\r\\n<\/script>\\r\\n<div class=\\"comments\\">\\r\\n    {#each comments as comment}\\r\\n        <Comment {comment} {profile} />\\r\\n    {:else}\\r\\n        <p>Your comments here.</p>\\r\\n    {/each}\\r\\n</div>\\r\\n<style>\\r\\n    .comments {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAeI,uBAAU,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GACT"}`
};
const Comments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comments = [] } = $$props;
  let { profile = "" } = $$props;
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0) $$bindings.comments(comments);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0) $$bindings.profile(profile);
  $$result.css.add(css);
  return `<div class="comments svelte-zbkuql">${comments.length ? each(comments, (comment) => {
    return `${validate_component(Comment, "Comment").$$render($$result, { comment, profile }, {}, {})}`;
  }) : `<p data-svelte-h="svelte-ykhxd3">Your comments here.</p>`} </div>`;
});
export {
  Comments as C
};
