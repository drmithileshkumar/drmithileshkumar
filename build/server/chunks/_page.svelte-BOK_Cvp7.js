import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from './ssr2-q3O0l93f.js';
import { a as subscribe } from './utils-iZWwlC2F.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { M as MediaContent, C as Content } from './ActionIcons-Co7bojT-.js';
import { M as Media } from './Media-C8oNwSit.js';
import { A as Actions } from './Actions-BZCsUD0f.js';
import { B as Button } from './Button-DRRmGjqZ.js';
import { C as CommonLabel } from './CommonLabel-BuPx8XxF.js';
import { I as ImageUploader } from './ImageUploader-DI4Pm4dE.js';
import { a as profileImage } from './stores2-B6DyWuAW.js';
import { p as page } from './stores3-BrNJmxTp.js';
import './client-k3u4ChD_.js';
import { S as Set_1, C as Chip } from './Set-sNJQHEw8.js';
import { T as Text } from './Text-B4-H59Yc.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './Ripple-Zq_D_mxy.js';
import './index2-BZnI6xu7.js';
import './exports-kR70XCWV.js';
import './ContextFragment-e-oupRQm.js';

const css = {
  code: ".postcontainer.svelte-qci5pd.svelte-qci5pd{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-qci5pd.svelte-qci5pd{width:50px;height:50px;border-radius:50%;overflow:hidden}.image.svelte-qci5pd img.svelte-qci5pd{width:100%;height:100%}.header.svelte-qci5pd.svelte-qci5pd{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-qci5pd .primary.svelte-qci5pd{font-weight:bold}.header.svelte-qci5pd .secondary.svelte-qci5pd{color:gray;font-size:0.9em}.postcontent.svelte-qci5pd.svelte-qci5pd,.postSummary.svelte-qci5pd.svelte-qci5pd,.title.svelte-qci5pd.svelte-qci5pd,.subtitle.svelte-qci5pd.svelte-qci5pd{border:none;outline:none}[contenteditable].svelte-qci5pd.svelte-qci5pd:empty:before{content:attr(placeholder);display:block;color:gray}.addphoto.svelte-qci5pd.svelte-qci5pd{cursor:pointer}",
  map: `{"version":3,"file":"EditPost.svelte","sources":["EditPost.svelte"],"sourcesContent":["<!-- src/lib/components/post.svelte -->\\r\\n<script>\\r\\n    //@ts-nocheck\\r\\n    import Card, {\\r\\n        Content,\\r\\n        PrimaryAction,\\r\\n        Media,\\r\\n        MediaContent,\\r\\n        Actions,\\r\\n        ActionButtons,\\r\\n        ActionIcons,\\r\\n    } from \\"@smui/card\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import IconButton, { Icon } from \\"@smui/icon-button\\";\\r\\n    import ImageUploader from \\"./ImageUploader.svelte\\";\\r\\n    import { profileImage } from \\"$lib/vectorial/stores\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { goto, invalidate } from \\"$app/navigation\\";\\r\\n    import Chip, { Set, Text } from \\"@smui/chips\\";\\r\\n    import {onMount} from 'svelte';\\r\\n\\r\\n    let choices = [\\r\\n        'Mathematics',\\r\\n        \\"Physics\\",\\r\\n        \\"Politics\\",\\r\\n        \\"Technology\\",\\r\\n        \\"Sports\\",\\r\\n        \\"Health\\",\\r\\n        \\"Science\\",\\r\\n        \\"Economics\\",\\r\\n        \\"Arts\\",\\r\\n    ];\\r\\n    let selected = [];\\r\\n    export let post = {\\r\\n        url: '',\\r\\n        name: $page.data.user.name,\\r\\n        publicID: $page.data.user.publicID, //public\\r\\n        media: \\"\\",\\r\\n        profileImage: $page.data.user.profile,\\r\\n        title: \\"\\",\\r\\n        subtitle: \\"\\",\\r\\n        summary: '',\\r\\n        content: \\"\\",\\r\\n        comments: [], //count\\r\\n        shares: [], //count\\r\\n        likes: [], //count\\r\\n        tags: [],\\r\\n        images: [],\\r\\n        creationTimeStamp: Date.now(),\\r\\n    };\\r\\n    let isClicked = false;\\r\\n    let media;\\r\\n    onMount(async () => {\\r\\n        // console.log(\`/vectorial/api/\${post.publicID}/media?media=\${post.media}\`);\\r\\n        if (post.media) {\\r\\n\\r\\n            let res = await fetch(\\r\\n                \`/vectorial/api/\${post.publicID}/media?media=\${post.media}\`\\r\\n            );\\r\\n            if(!res.ok) {\\r\\n                alert('Failed to load data...')\\r\\n            }\\r\\n            let reader = new FileReader();\\r\\n            let mediaData;\\r\\n            \\r\\n            if(post.media.split('.')[1] === 'svg'){\\r\\n                mediaData = await res.text();\\r\\n                media = 'data:image/svg+xml,' + encodeURIComponent(mediaData);\\r\\n            } else {\\r\\n                mediaData = await res.blob();\\r\\n                reader.readAsDataURL(mediaData);\\r\\n                reader.onload = (e) => {\\r\\n                    media = e.target.result; \\r\\n                };\\r\\n            }\\r\\n        }\\r\\n    });\\r\\n    const uploadPhoto = () => {\\r\\n        isClicked = true;\\r\\n    };\\r\\n    const setMedia = (e) => {\\r\\n        // console.log(\\"mediapath...\\", e.detail.mediaPath);\\r\\n        post.media = e.detail.mediaPath;\\r\\n        post = post;\\r\\n    };\\r\\n    const uploadpost = async () => {\\r\\n        if(post.title.length === 0) {\\r\\n            alert('Title is required')\\r\\n            return\\r\\n        }\\r\\n        post.tags = selected;\\r\\n        post = post;\\r\\n        const res = await fetch(\`/vectorial/api/\${$page.data.user.publicID}/compose\`, {\\r\\n            method: \\"PUT\\",\\r\\n            body: JSON.stringify(post),\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n        });\\r\\n        if (!res.ok) {\\r\\n            alert(\\"Failed to create post\\");\\r\\n            return;\\r\\n        }\\r\\n        // invalidate(\`/\${$page.data.user.publicID}\`);\\r\\n        goto(\`/\${$page.data.user.publicID}\`);\\r\\n    };\\r\\n    // $: console.log(post.media)\\r\\n<\/script>\\r\\n\\r\\n<!-- <br /> -->\\r\\n<Card>\\r\\n    <!-- <PrimaryAction on:click={() => console.log(\\"clicked...\\")}> -->\\r\\n    <ImageUploader\\r\\n        bind:media\\r\\n        url=\\"/vectorial/api/{post.publicID}/media\\"\\r\\n        bind:isClicked\\r\\n        on:onUpload={setMedia}\\r\\n    />\\r\\n    <Media style='display:flex; align-items:center; justify-content:center; max-height: 300px;background:white;'>\\r\\n        <img style='max-height:300px;' src={media} alt='img'>\\r\\n        <MediaContent>\\r\\n            <div\\r\\n                style=\\"color: gray; position: absolute; bottom: 16px; left: 16px;\\"\\r\\n            >\\r\\n                <span on:click={uploadPhoto} class=\\"addphoto material-icons\\"\\r\\n                    >add_a_photo</span\\r\\n                >\\r\\n            </div>\\r\\n        </MediaContent>\\r\\n    </Media>\\r\\n    <!-- </PrimaryAction> -->\\r\\n    <Content class=\\"mdc-typography--body2\\">\\r\\n        <div class=\\"tagsInput\\">\\r\\n            <Set chips={choices} let:chip filter bind:selected>\\r\\n                <Chip {chip} touch>\\r\\n                    <Text>{chip}</Text>\\r\\n                </Chip>\\r\\n            </Set>\\r\\n        </div>\\r\\n        <h2\\r\\n            class=\\"title mdc-typography--headline6\\"\\r\\n            style=\\"margin: 0;\\"\\r\\n            contenteditable=\\"true\\"\\r\\n            placeholder=\\"Title here...\\"\\r\\n            bind:textContent={post.title}\\r\\n        />\\r\\n        <h3\\r\\n            class=\\"subtitle mdc-typography--subtitle2\\"\\r\\n            style=\\"margin: 0.5em 0\\"\\r\\n            contenteditable=\\"true\\"\\r\\n            placeholder=\\"Subtitle here...\\"\\r\\n            bind:textContent={post.subtitle}\\r\\n        />\\r\\n        <div class=\\"postcontainer\\">\\r\\n            <div class=\\"image\\">\\r\\n                <img src={$profileImage} alt={post.name} />\\r\\n            </div>\\r\\n            <div class=\\"body\\">\\r\\n                <div class=\\"header\\">\\r\\n                    <span class=\\"primary\\">{post.name}</span>\\r\\n                    <span class=\\"secondary\\">\\r\\n                        <span>{post.publicID}</span>\\r\\n                        <span\\r\\n                            >{new Date(\\r\\n                                post.creationTimeStamp\\r\\n                            ).toLocaleString()}</span\\r\\n                        >\\r\\n                    </span>\\r\\n                </div>\\r\\n                <div\\r\\n                    class=\\"postSummary\\"\\r\\n                    contenteditable=\\"true\\"\\r\\n                    placeholder=\\"Type summary here...\\"\\r\\n                    bind:textContent={post.summary}\\r\\n                />\\r\\n                <div\\r\\n                    class=\\"postcontent\\"\\r\\n                    contenteditable=\\"true\\"\\r\\n                    placeholder=\\"Type here...\\"\\r\\n                    bind:textContent={post.content}\\r\\n                />\\r\\n            </div>\\r\\n        </div>\\r\\n    </Content>\\r\\n    <Actions fullBleed>\\r\\n        <Button on:click={uploadpost}>\\r\\n            <Label>Update Post</Label>\\r\\n            <i class=\\"material-icons\\" aria-hidden=\\"true\\">arrow_forward</i>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Card>\\r\\n\\r\\n<style>\\r\\n    .postcontainer {\\r\\n        display: grid;\\r\\n        grid-template-columns: 50px auto;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .image {\\r\\n        width: 50px;\\r\\n        height: 50px;\\r\\n        border-radius: 50%;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .image img {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n    }\\r\\n    .header {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .header .primary {\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    .header .secondary {\\r\\n        color: gray;\\r\\n        font-size: 0.9em;\\r\\n    }\\r\\n    .postcontent, .postSummary,\\r\\n    .title,\\r\\n    .subtitle {\\r\\n        border: none;\\r\\n        outline: none;\\r\\n    }\\r\\n    [contenteditable]:empty:before {\\r\\n        content: attr(placeholder);\\r\\n        display: block;\\r\\n        color: gray;\\r\\n    }\\r\\n    .addphoto {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiMI,0CAAe,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAChC,GAAG,CAAE,KACT,CACA,kCAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd,CACA,oBAAM,CAAC,iBAAI,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,mCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CACA,qBAAO,CAAC,sBAAS,CACb,WAAW,CAAE,IACjB,CACA,qBAAO,CAAC,wBAAW,CACf,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KACf,CACA,wCAAY,CAAE,wCAAY,CAC1B,kCAAM,CACN,qCAAU,CACN,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IACb,CACA,CAAC,eAAe,6BAAC,MAAM,OAAQ,CAC3B,OAAO,CAAE,KAAK,WAAW,CAAC,CAC1B,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IACX,CACA,qCAAU,CACN,MAAM,CAAE,OACZ"}`
};
const EditPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $profileImage, $$unsubscribe_profileImage;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  let choices = [
    "Mathematics",
    "Physics",
    "Politics",
    "Technology",
    "Sports",
    "Health",
    "Science",
    "Economics",
    "Arts"
  ];
  let selected = [];
  let { post = {
    url: "",
    name: $page.data.user.name,
    publicID: $page.data.user.publicID,
    //public
    media: "",
    profileImage: $page.data.user.profile,
    title: "",
    subtitle: "",
    summary: "",
    content: "",
    comments: [],
    //count
    shares: [],
    //count
    likes: [],
    //count
    tags: [],
    images: [],
    creationTimeStamp: Date.now()
  } } = $$props;
  let isClicked = false;
  let media;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `   ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return ` ${validate_component(ImageUploader, "ImageUploader").$$render(
          $$result,
          {
            url: "/vectorial/api/" + post.publicID + "/media",
            media,
            isClicked
          },
          {
            media: ($$value) => {
              media = $$value;
              $$settled = false;
            },
            isClicked: ($$value) => {
              isClicked = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Media, "Media").$$render(
          $$result,
          {
            style: "display:flex; align-items:center; justify-content:center; max-height: 300px;background:white;"
          },
          {},
          {
            default: () => {
              return `<img style="max-height:300px;"${add_attribute("src", media, 0)} alt="img"> ${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {
                default: () => {
                  return `<div style="color: gray; position: absolute; bottom: 16px; left: 16px;"><span class="addphoto material-icons svelte-qci5pd" data-svelte-h="svelte-1vhhfxv">add_a_photo</span></div>`;
                }
              })}`;
            }
          }
        )}  ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
          default: () => {
            return `<div class="tagsInput">${validate_component(Set_1, "Set").$$render(
              $$result,
              { chips: choices, filter: true, selected },
              {
                selected: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ chip }) => {
                  return `${validate_component(Chip, "Chip").$$render($$result, { chip, touch: true }, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(chip)}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> <h2 class="title mdc-typography--headline6 svelte-qci5pd" style="margin: 0;" contenteditable="true" placeholder="Title here...">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(post.title)}</h2> <h3 class="subtitle mdc-typography--subtitle2 svelte-qci5pd" style="margin: 0.5em 0" contenteditable="true" placeholder="Subtitle here...">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(post.subtitle)}</h3> <div class="postcontainer svelte-qci5pd"><div class="image svelte-qci5pd"><img${add_attribute("src", $profileImage, 0)}${add_attribute("alt", post.name, 0)} class="svelte-qci5pd"></div> <div class="body"><div class="header svelte-qci5pd"><span class="primary svelte-qci5pd">${escape(post.name)}</span> <span class="secondary svelte-qci5pd"><span>${escape(post.publicID)}</span> <span>${escape(new Date(post.creationTimeStamp).toLocaleString())}</span></span></div> <div class="postSummary svelte-qci5pd" contenteditable="true" placeholder="Type summary here...">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(post.summary)}</div> <div class="postcontent svelte-qci5pd" contenteditable="true" placeholder="Type here...">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(post.content)}</div></div></div>`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, { fullBleed: true }, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Update Post`;
                  }
                })} <i class="material-icons" aria-hidden="true" data-svelte-h="svelte-id8hzd">arrow_forward</i>`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_profileImage();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-ioe5cj_START -->${$$result.title = `<title>Edit post</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/vectorial/edit"><meta name="description" content="Trending Post."><!-- HEAD_svelte-ioe5cj_END -->`, ""} <article>${validate_component(EditPost, "EditPost").$$render($$result, { post: data.post }, {}, {})}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BOK_Cvp7.js.map
