import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape, j as createEventDispatcher, a as add_attribute } from './ssr2-CDgUAJs6.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { S as Set_1, C as Chip } from './Set-DpFt5ER7.js';
import { T as Text } from './Text-B2xpIqtX.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { T as Textfield } from './Textfield-B08XD1S3.js';
import './Suffix-CtI6fDI6.js';
import './client-CAo-6NMJ.js';
import { p as page } from './stores3-kDd52ji6.js';
import { i as isLoggedIn, c as currentPath } from './stores2-BRo56-4P.js';
import { S as ScanQR } from './GenerateQR.svelte_svelte_type_style_lang2-BK8tyomY.js';
import 'html5-qrcode';
import 'qrcode-generator';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './Ripple-N--aPaMn.js';
import './index2-D2s-XE5r.js';
import './ContextFragment-CedcH2TL.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './prefixFilter-B6cFZsw3.js';
import './NotchedOutline-Bg9Ljk79.js';
import './Input-CXqTjpeX.js';
import './exports-DKuYoYKl.js';

const css$1 = {
  code: "#generatedQRCode.svelte-o78zgt img.svelte-o78zgt{width:200px;height:200px}",
  map: `{"version":3,"file":"GenerateQR.svelte","sources":["GenerateQR.svelte"],"sourcesContent":["<script>\\r\\n    // @ts-nocheck\\r\\n    \\r\\n        \\r\\n        import {browser} from '$app/environment'\\r\\n        import { createEventDispatcher, onMount } from 'svelte';\\r\\n        import {scannedQR, loggedInUser} from '$lib/vectorial/stores';\\r\\n        import {Html5Qrcode} from 'html5-qrcode';\\r\\n        import qrcode from 'qrcode-generator';\\r\\n        \\r\\n        export let data;\\r\\n        export let filename;\\r\\n        export let autoDownload = true;\\r\\n        let dispatch = createEventDispatcher();\\r\\n        let qrCodeHolder;\\r\\n        let qrContainer;\\r\\n        let fileinput;\\r\\n        let html5QrCode;\\r\\n        let hasQRcode = false;\\r\\n        let downloader;\\r\\n        let qrlink;\\r\\n        // $: if(hasQRcode) {\\r\\n        //     setTimeout(() => {\\r\\n        //         qrlink = document.querySelector('#generatedQRCode img').getAttribute('src');\\r\\n        //     }, 0);\\r\\n            \\r\\n        // }\\r\\n        $: if(browser && data) generateQR();\\r\\n        const generateQR = () => {\\r\\n            let qr = qrcode(10, 'H');\\r\\n            qr.addData(data);\\r\\n            qr.make();\\r\\n    \\r\\n            qrlink = qr.createDataURL();\\r\\n            // qrlink = document.querySelector('#generatedQRCode img').getAttribute('src');\\r\\n            hasQRcode = true;\\r\\n            if(autoDownload)\\r\\n                setTimeout(() => downloader.click(), 1000)\\r\\n        }\\r\\n    <\/script>\\r\\n    <style>\\r\\n        #generatedQRCode img {\\r\\n            width: 200px;\\r\\n            height: 200px;\\r\\n        }\\r\\n    </style>\\r\\n    \\r\\n    <span id='generatedQRCode'><img src={qrlink} alt=\\"\\"></span>\\r\\n    {#if hasQRcode}\\r\\n        <a bind:this={downloader} href={qrlink} download={filename} on:click={() => dispatch(\\"saved\\", {text:\\"saved\\"})} >\\r\\n            <span class=\\"label\\">Download QR Code</span>\\r\\n        </a>\\r\\n        <p><strong>SECRET: </strong>Save the QR code. DO NOT SHARE or RENAME the file.</p>\\r\\n    {/if}\\r\\n    "],"names":[],"mappings":"AAyCQ,8BAAgB,CAAC,iBAAI,CACjB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACZ"}`
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
  $$result.css.add(css$1);
  return `<span id="generatedQRCode" class="svelte-o78zgt"><img${add_attribute("src", qrlink, 0)} alt="" class="svelte-o78zgt"></span> ${``}`;
});
const css = {
  code: "article.svelte-1vu14hf{width:100%}.authQR.svelte-1vu14hf{display:flex;flex-direction:column}.details.svelte-1vu14hf{display:flex;flex-direction:column;gap:1.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import { Label } from \\"@smui/common\\";\\r\\n    import Chip, { Set, Text } from '@smui/chips';\\r\\n    import Card, {Content, Actions} from '@smui/card';\\r\\n    import Textfield from \\"@smui/textfield\\";\\r\\n    import HelperText from \\"@smui/textfield/helper-text\\";\\r\\n    import { enhance } from \\"$app/forms\\";\\r\\n    import { goto, invalidateAll } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { loggedInUser, profileImage, isLoggedIn } from \\"$lib/vectorial/stores\\";\\r\\n    import ScanQR from \\"$lib/vectorial/qr/ScanQR.svelte\\";\\r\\n    import GenerateQR from \\"$lib/vectorial/qr/GenerateQR.svelte\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import { currentPath } from \\"$lib/vectorial/stores.js\\";\\r\\n    $currentPath = 'Authentication'\\r\\n\\r\\n    let choices = [\\"Log in\\", \\"Sign up\\"];\\r\\n    let selected = \\"Log in\\";\\r\\n    let error;\\r\\n    let phone = null,\\r\\n        name = null;\\r\\n    let generateQR = false,\\r\\n        downloadQR = false;\\r\\n    let ids, privateID, otpID, publicID, profile;\\r\\n    let downloader, filename;\\r\\n    let qrlink, waId;\\r\\n    let loginStatus = \\"Login\\",\\r\\n        scanned = false;\\r\\n    let waName = null,\\r\\n        waNumber = null;\\r\\n    const readFromScan = (event) => {\\r\\n        publicID = event.detail.filename;\\r\\n        let data = event.detail.data.split(\\" \\");\\r\\n        privateID = data[0];\\r\\n        otpID = data[1];\\r\\n        scanned = true;\\r\\n    };\\r\\n\\r\\n    function logout() {\\r\\n        document.cookie = \\"jwt=; Max-Age=0; Path=/;\\";\\r\\n        $page.data.user = null;\\r\\n        goto(\\"/vectorial\\");\\r\\n    }\\r\\n    const login = async () => {\\r\\n        loginStatus = \\"Waiting...\\";\\r\\n        // console.log('publicID', publicID, '')\\r\\n        const res = await fetch(\\"/vectorial/api/login\\", {\\r\\n            method: \\"POST\\",\\r\\n            body: JSON.stringify({\\r\\n                phone,\\r\\n                publicID,\\r\\n                privateID,\\r\\n                otpID,\\r\\n            }),\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n        });\\r\\n\\r\\n        if (!res.ok) {\\r\\n            error = await res.text();\\r\\n            // console.error(error)\\r\\n            loginStatus = \\"Failed\\";\\r\\n            return;\\r\\n        }\\r\\n        // let user = await res.json();\\r\\n        await setProfileImage();\\r\\n        invalidateAll();\\r\\n        $isLoggedIn = true;\\r\\n        // goto(\`/\${$page.data.user.publicID}\`)\\r\\n\\r\\n        // if(user)  {\\r\\n\\r\\n        //     await setProfileImage();\\r\\n\\r\\n        //     loginStatus = 'Success';\\r\\n\\r\\n        //     goto(\`/subscription\`)\\r\\n        // }\\r\\n    };\\r\\n    const setProfileImage = async () => {\\r\\n        const res = await fetch(\`/vectorial/api/profilepic\`);\\r\\n\\r\\n        if (!res.ok) {\\r\\n            alert(\\"Failed to load image\\");\\r\\n            return;\\r\\n        }\\r\\n\\r\\n        let imageData = await res.blob();\\r\\n\\r\\n        // console.log(imageData)\\r\\n\\r\\n        if (imageData.size === 0) {\\r\\n            profileImage.set(\\"/avatar.svg\\");\\r\\n            return;\\r\\n        }\\r\\n        profile = URL.createObjectURL(imageData);\\r\\n        let reader = new FileReader();\\r\\n        reader.readAsDataURL(imageData);\\r\\n        reader.onload = (e) => {\\r\\n            profile = e.target.result;\\r\\n            profileImage.set(profile);\\r\\n        };\\r\\n    };\\r\\n    const sanitizeName = () => {\\r\\n        name = name.trim();\\r\\n        let parts = name.split(\\" \\");\\r\\n        name = parts\\r\\n            .map((part) => part[0].toUpperCase() + part.slice(1))\\r\\n            .join(\\" \\");\\r\\n    };\\r\\n    const signup = async () => {\\r\\n        sanitizeName();\\r\\n        // console.log('posting...')\\r\\n        const res = await fetch(\\"/vectorial/api/signup\\", {\\r\\n            method: \\"POST\\",\\r\\n            body: JSON.stringify({\\r\\n                name,\\r\\n                phone,\\r\\n            }),\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n        });\\r\\n        // console.log('posted...')\\r\\n        if (!res.ok) {\\r\\n            error = await res.text();\\r\\n            if (error === \\"User already exists!\\") {\\r\\n                alert(\\r\\n                    \\"Account already exists. Contact us on WhatsApp 8235463666 to verify.\\"\\r\\n                );\\r\\n            }\\r\\n            // console.error(error)\\r\\n            goto(\\"/vectorial\\");\\r\\n        }\\r\\n        ids = await res.json();\\r\\n        privateID = ids.privateID;\\r\\n        publicID = ids.publicID;\\r\\n        otpID = ids.otpID;\\r\\n        generateQR = true;\\r\\n        profileImage.set(\\"/vectorial/avatar.svg\\");\\r\\n        invalidateAll();\\r\\n        $isLoggedIn = true;\\r\\n        alert(\\"Please download the QR code. It is needed for authentication later on.\\")\\r\\n    };\\r\\n    // $: console.log($page.data)\\r\\n<\/script>\\r\\n<svelte:head>\\r\\n    <title>Authentication</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/vectorial/auth\\" />\\r\\n    <meta name=\\"description\\" content=\\"Vector graphics\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    {#if $page.data.user || generateQR}\\r\\n        <Card style=\\"display:flex;align-items:center;justify-content:center;\\">\\r\\n            <Content>\\r\\n                <div class=\\"authQR\\">\\r\\n                    <GenerateQR\\r\\n                        data={privateID + \\" \\" + otpID}\\r\\n                        filename={publicID}\\r\\n                        autoDownload={false}\\r\\n                    />\\r\\n                </div>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <form use:enhance method=\\"POST\\" action=\\"?/logout\\">\\r\\n                    <!-- <button class=\\"btn btn-outline-danger\\">Or click here to logout.</button> on:click={(e) => (e.preventDefault(), logout())}-->\\r\\n                    <Button class=\\"logout\\">Log out</Button>\\r\\n                </form>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n    {:else}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <div class=\\"choices\\">\\r\\n                    <Set chips={choices} let:chip choice bind:selected>\\r\\n                        <Chip {chip}>\\r\\n                          <Text>{chip}</Text>\\r\\n                        </Chip>\\r\\n                      </Set>\\r\\n                </div>\\r\\n                {#if selected === \\"Log in\\"}\\r\\n                    <div class=\\"details\\">\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            bind:value={phone}\\r\\n                            label=\\"Phone\\"\\r\\n                            placeholder=\\"0123456789\\"\\r\\n                        />\\r\\n\\r\\n                        {#if phone}\\r\\n                            <ScanQR on:scanned={readFromScan} />\\r\\n                        {/if}\\r\\n                    </div>\\r\\n                {:else}\\r\\n                    <div class=\\"details\\">\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            bind:value={name}\\r\\n                            label=\\"Name\\"\\r\\n                            placeholder=\\"Firstname Surname\\"\\r\\n                        />\\r\\n                        {#if name}\\r\\n                            <Textfield\\r\\n                                variant=\\"filled\\"\\r\\n                                bind:value={phone}\\r\\n                                label=\\"Phone\\"\\r\\n                            />\\r\\n                        {/if}\\r\\n                    </div>\\r\\n                {/if}\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                {#if selected === \\"Log in\\" && scanned}\\r\\n                    <Button on:click={login}>\\r\\n                        <Label>Login</Label>\\r\\n                    </Button>\\r\\n                {:else if selected === \\"Sign up\\" && phone}\\r\\n                    <Button on:click={signup}>\\r\\n                        <Label>Sign up</Label>\\r\\n                    </Button>\\r\\n                {/if}\\r\\n            </Actions>\\r\\n        </Card>\\r\\n<!--         \\r\\n        <br>\\r\\n        {#if selected === \\"Log in\\"}\\r\\n            <div class=\\"details\\">\\r\\n                <Textfield\\r\\n                    variant=\\"filled\\"\\r\\n                    bind:value={phone}\\r\\n                    label=\\"Phone\\"\\r\\n                    placeholder=\\"0123456789\\"\\r\\n                />\\r\\n\\r\\n                {#if phone}\\r\\n                    <ScanQR on:scanned={readFromScan} />\\r\\n                {/if}\\r\\n\\r\\n                {#if scanned}\\r\\n                    <Button on:click={login}>\\r\\n                        <Label>Login</Label>\\r\\n                    </Button>\\r\\n                {/if}\\r\\n            </div>\\r\\n        {:else}\\r\\n            <div class=\\"details\\">\\r\\n                <Textfield\\r\\n                    variant=\\"filled\\"\\r\\n                    bind:value={name}\\r\\n                    label=\\"Name\\"\\r\\n                    placeholder=\\"Firstname Surname\\"\\r\\n                />\\r\\n                {#if name}\\r\\n                    <Textfield\\r\\n                        variant=\\"filled\\"\\r\\n                        bind:value={phone}\\r\\n                        label=\\"Phone\\"\\r\\n                    />\\r\\n                {/if}\\r\\n                {#if phone}\\r\\n                    <Button on:click={signup}>\\r\\n                        <Label>Sign up</Label>\\r\\n                    </Button>\\r\\n                {/if}\\r\\n            </div>\\r\\n        {/if} -->\\r\\n    {/if}\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 100%;\\r\\n        /* display:flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        flex: 1; */\\r\\n    }\\r\\n    \\r\\n    .authQR {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .details {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1.5em;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiRI,sBAAQ,CACJ,KAAK,CAAE,IAKX,CAEA,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CACA,uBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Authentication", $currentPath);
  let choices = ["Log in", "Sign up"];
  let selected = "Log in";
  let phone = null, name = null;
  let generateQR = false;
  let privateID, otpID, publicID;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-13smg7m_START -->${$$result.title = `<title>Authentication</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/vectorial/auth"><meta name="description" content="Vector graphics"><!-- HEAD_svelte-13smg7m_END -->`, ""} <article class="svelte-1vu14hf">${$page.data.user || generateQR ? `${validate_component(Card, "Card").$$render(
      $$result,
      {
        style: "display:flex;align-items:center;justify-content:center;"
      },
      {},
      {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="authQR svelte-1vu14hf">${validate_component(GenerateQR, "GenerateQR").$$render(
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
          })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `<form method="POST" action="?/logout"> ${validate_component(Button, "Button").$$render($$result, { class: "logout" }, {}, {
                default: () => {
                  return `Log out`;
                }
              })}</form>`;
            }
          })}`;
        }
      }
    )}` : `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="choices">${validate_component(Set_1, "Set").$$render(
              $$result,
              { chips: choices, choice: true, selected },
              {
                selected: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
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
              }
            )}</div> ${selected === "Log in" ? `<div class="details svelte-1vu14hf">${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Phone",
                placeholder: "0123456789",
                value: phone
              },
              {
                value: ($$value) => {
                  phone = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${phone ? `${validate_component(ScanQR, "ScanQR").$$render($$result, {}, {}, {})}` : ``}</div>` : `<div class="details svelte-1vu14hf">${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Name",
                placeholder: "Firstname Surname",
                value: name
              },
              {
                value: ($$value) => {
                  name = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${name ? `${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Phone",
                value: phone
              },
              {
                value: ($$value) => {
                  phone = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : ``}</div>`}`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${`${selected === "Sign up" && phone ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Sign up`;
                  }
                })}`;
              }
            })}` : ``}`}`;
          }
        })}`;
      }
    })} `} </article>`;
  } while (!$$settled);
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CxOuUYdM.js.map
