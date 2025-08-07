import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from './ssr2-CDgUAJs6.js';
import { a as subscribe } from './utils-DhkojCd_.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { b as profileImage } from './stores2-BRo56-4P.js';
import { p as page } from './stores3-kDd52ji6.js';
import './client-CAo-6NMJ.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './Ripple-N--aPaMn.js';
import './index2-D2s-XE5r.js';
import './exports-DKuYoYKl.js';

const css = {
  code: ".commentcontainer.svelte-oaen12.svelte-oaen12{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-oaen12.svelte-oaen12{border-radius:50%;overflow:hidden;width:50px;height:50px}.image.svelte-oaen12 img.svelte-oaen12{width:100%;height:100%}.header.svelte-oaen12.svelte-oaen12{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-oaen12 .primary.svelte-oaen12{font-weight:bold}.header.svelte-oaen12 .secondary.svelte-oaen12{color:gray;font-size:0.9em}.commentcontent.svelte-oaen12.svelte-oaen12{border:none;outline:none}[contenteditable].svelte-oaen12.svelte-oaen12:empty:before{content:attr(placeholder);display:block;color:gray}",
  map: '{"version":3,"file":"EditComment.svelte","sources":["EditComment.svelte"],"sourcesContent":["<!-- src/lib/components/comment.svelte -->\\r\\n<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import Card, {\\r\\n        Content,\\r\\n        PrimaryAction,\\r\\n        Media,\\r\\n        MediaContent,\\r\\n        Actions,\\r\\n        ActionButtons,\\r\\n        ActionIcons,\\r\\n    } from \\"@smui/card\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import IconButton, { Icon } from \\"@smui/icon-button\\";\\r\\n    import ImageUploader from \\"./ImageUploader.svelte\\";\\r\\n    import { profileImage } from \\"$lib/vectorial/stores\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { goto, invalidate } from \\"$app/navigation\\";\\r\\n    import Chip, { Set, Text } from \\"@smui/chips\\";\\r\\n    export let parentID;\\r\\n    let choices = [\\r\\n        \'Mathematics\',\\r\\n        \\"Physics\\",\\r\\n        \\"Politics\\",\\r\\n        \\"Technology\\",\\r\\n        \\"Sports\\",\\r\\n        \\"Health\\",\\r\\n        \\"Science\\",\\r\\n        \\"Economics\\",\\r\\n        \\"Arts\\",\\r\\n    ];\\r\\n    let selected = [];\\r\\n    export let comment = {\\r\\n        parentID: parentID,\\r\\n        name: $page.data.user.name,\\r\\n        publicID: $page.data.user.publicID, //public\\r\\n        profileImage: $page.data.user.profile,\\r\\n        content: \\"\\",\\r\\n        comments: [], \\r\\n        images: [],\\r\\n        creationTimeStamp: Date.now(),\\r\\n    };\\r\\n    \\r\\n    const updatecomment = async () => {\\r\\n        const res = await fetch(`/api/${$page.data.user.publicID}/compose/comment`, {\\r\\n            method: \\"PUT\\",\\r\\n            body: JSON.stringify(comment),\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n        });\\r\\n        if (!res.ok) {\\r\\n            alert(\\"Failed to create comment\\");\\r\\n            return;\\r\\n        }\\r\\n        // invalidate(`/${$page.data.user.publicID}`);\\r\\n        goto(`/post/${comment.parentID}`);\\r\\n    };\\r\\n    // $: console.log(comment.media)\\r\\n<\/script>\\r\\n\\r\\n<!-- <br /> -->\\r\\n<Card>\\r\\n    <Content class=\\"mdc-typography--body2\\">\\r\\n        <div class=\\"commentcontainer\\">\\r\\n            <div class=\\"image\\">\\r\\n                <img src={$profileImage} alt={comment.name} />\\r\\n            </div>\\r\\n            <div class=\\"body\\">\\r\\n                <div class=\\"header\\">\\r\\n                    <span class=\\"primary\\">{comment.name}</span>\\r\\n                    <span class=\\"secondary\\">\\r\\n                        <span>{comment.publicID}</span>\\r\\n                        <span\\r\\n                            >{new Date(\\r\\n                                comment.creationTimeStamp\\r\\n                            ).toLocaleString()}</span\\r\\n                        >\\r\\n                    </span>\\r\\n                </div>\\r\\n                <div\\r\\n                    class=\\"commentcontent\\"\\r\\n                    contenteditable=\\"true\\"\\r\\n                    placeholder=\\"Type content here...\\"\\r\\n                    bind:textContent={comment.content}\\r\\n                />\\r\\n            </div>\\r\\n        </div>\\r\\n    </Content>\\r\\n    <Actions fullBleed>\\r\\n        <Button on:click={updatecomment}>\\r\\n            <Label>Update Comment</Label>\\r\\n            <i class=\\"material-icons\\" aria-hidden=\\"true\\">arrow_forward</i>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Card>\\r\\n\\r\\n<style>\\r\\n    .commentcontainer {\\r\\n        display: grid;\\r\\n        grid-template-columns: 50px auto;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .image {\\r\\n        border-radius: 50%;\\r\\n        overflow: hidden;\\r\\n        width: 50px;\\r\\n        height: 50px;\\r\\n    }\\r\\n    .image img {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n    }\\r\\n    .header {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .header .primary {\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    .header .secondary {\\r\\n        color: gray;\\r\\n        font-size: 0.9em;\\r\\n    }\\r\\n    .commentcontent {\\r\\n        border: none;\\r\\n        outline: none;\\r\\n    }\\r\\n    [contenteditable]:empty:before {\\r\\n        content: attr(placeholder);\\r\\n        display: block;\\r\\n        color: gray;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkGI,6CAAkB,CACd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAChC,GAAG,CAAE,KACT,CACA,kCAAO,CACH,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,oBAAM,CAAC,iBAAI,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,mCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CACA,qBAAO,CAAC,sBAAS,CACb,WAAW,CAAE,IACjB,CACA,qBAAO,CAAC,wBAAW,CACf,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KACf,CACA,2CAAgB,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IACb,CACA,CAAC,eAAe,6BAAC,MAAM,OAAQ,CAC3B,OAAO,CAAE,KAAK,WAAW,CAAC,CAC1B,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IACX"}'
};
const EditComment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $profileImage, $$unsubscribe_profileImage;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  let { parentID } = $$props;
  let { comment = {
    parentID,
    name: $page.data.user.name,
    publicID: $page.data.user.publicID,
    //public
    profileImage: $page.data.user.profile,
    content: "",
    comments: [],
    images: [],
    creationTimeStamp: Date.now()
  } } = $$props;
  if ($$props.parentID === void 0 && $$bindings.parentID && parentID !== void 0) $$bindings.parentID(parentID);
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0) $$bindings.comment(comment);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_profileImage();
  return `   ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
        default: () => {
          return `<div class="commentcontainer svelte-oaen12"><div class="image svelte-oaen12"><img${add_attribute("src", $profileImage, 0)}${add_attribute("alt", comment.name, 0)} class="svelte-oaen12"></div> <div class="body"><div class="header svelte-oaen12"><span class="primary svelte-oaen12">${escape(comment.name)}</span> <span class="secondary svelte-oaen12"><span>${escape(comment.publicID)}</span> <span>${escape(new Date(comment.creationTimeStamp).toLocaleString())}</span></span></div> <div class="commentcontent svelte-oaen12" contenteditable="true" placeholder="Type content here...">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(comment.content)}</div></div></div>`;
        }
      })} ${validate_component(Actions, "Actions").$$render($$result, { fullBleed: true }, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Update Comment`;
                }
              })} <i class="material-icons" aria-hidden="true" data-svelte-h="svelte-id8hzd">arrow_forward</i>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1o4kl2b_START -->${$$result.title = `<title>Edit comment</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/vectorial/edit/comment"><meta name="description" content="Trending Comment."><!-- HEAD_svelte-1o4kl2b_END -->`, ""} <article>${validate_component(EditComment, "EditComment").$$render($$result, { comment: data.comment }, {}, {})}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BRyByd98.js.map
