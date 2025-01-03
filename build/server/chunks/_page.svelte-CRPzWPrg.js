import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component, e as escape, j as createEventDispatcher, a as add_attribute } from './ssr2-q3O0l93f.js';
import { B as Button } from './Button-DRRmGjqZ.js';
import { C as CommonLabel } from './CommonLabel-BuPx8XxF.js';
import { S as Set_1, C as Chip } from './Set-sNJQHEw8.js';
import { T as Text } from './Text-B4-H59Yc.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-BJ7xikju.js';
import { A as Actions } from './Actions-BZCsUD0f.js';
import { T as Textfield } from './Textfield-7THkMs4-.js';
import './Suffix-CzM54Q0Q.js';
import './client-k3u4ChD_.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { G as Guest, c as currentPath, b as scannedQR } from './stores-Bb_1fHB9.js';
import 'html5-qrcode';
import 'qrcode-generator';
import './SmuiElement-DA9PKsv2.js';
import './Ripple-Zq_D_mxy.js';
import './index2-BZnI6xu7.js';
import './ContextFragment-e-oupRQm.js';
import './classAdderBuilder-B9W9nXDD.js';
import './prefixFilter-B6cFZsw3.js';
import './NotchedOutline-BQdL9cop.js';
import './Input-5dxW-kZS.js';
import './exports-kR70XCWV.js';

/* empty css                                                          */
const css$1 = {
  code: "#reader.svelte-17pu3xa{background:#888;width:200px;height:200px;display:flex;justify-content:center;align-items:center;margin-top:0.5em;margin-bottom:0.5em}",
  map: `{"version":3,"file":"ScanQR.svelte","sources":["ScanQR.svelte"],"sourcesContent":["<script>\\r\\n// @ts-nocheck\\r\\n    import Button from '@smui/button';\\r\\n    import { createEventDispatcher, onMount } from 'svelte';\\r\\n    import {scannedQR, loggedInUser} from '$lib/stores';\\r\\n    import {Html5Qrcode} from 'html5-qrcode';\\r\\n    let filename;\\r\\n    let qrlink;\\r\\n    let qrContainer;\\r\\n    let fileinput;\\r\\n    let html5QrCode;\\r\\n    let hasQRcode = false;\\r\\n    \\r\\n    let dispatch = createEventDispatcher();\\r\\n    \\r\\n    const scanQR = (event) => {\\r\\n            html5QrCode = new Html5Qrcode('reader');\\r\\n            if (event.target.files.length == 0) {\\r\\n                // No file selected, ignore \\r\\n                return;\\r\\n            }\\r\\n            const image = event.target.files[0];\\r\\n            $scannedQR = image;\\r\\n            let imageName = image.name;\\r\\n            filename = imageName.split('.')[0].trim();\\r\\n            html5QrCode.scanFile(image, true)\\r\\n                .then(decodedText => { dispatch('scanned', {filename, data: decodedText}) })\\r\\n                .catch(err => { alert('Failed to scan Code') });\\r\\n    };\\r\\n<\/script>\\r\\n<style>\\r\\n    #reader {\\r\\n        background: #888;\\r\\n        width: 200px;\\r\\n        height: 200px;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        margin-top: 0.5em;\\r\\n        margin-bottom: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<div bind:this={qrContainer} id='reader' width=\\"200px\\" height=\\"200px\\"></div>\\r\\n<Button class=\\"upload\\" on:click={() => fileinput.click()}>\\r\\n    <span class='material-icons'>qr_code_2</span>\\r\\n    <span class=\\"label\\">Upload Secret QR code</span>\\r\\n</Button>\\r\\n<input style=\\"display: none;\\" type=\\"file\\" accept=\\"image/*\\"\\r\\n    id=\\"input-file\\"\\r\\n    name=\\"input-file\\"\\r\\n    on:change={scanQR}\\r\\n    bind:this={fileinput}\\r\\n>\\r\\n\\r\\n"],"names":[],"mappings":"AA+BI,sBAAQ,CACJ,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KACnB"}`
};
const ScanQR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scannedQR;
  $$unsubscribe_scannedQR = subscribe(scannedQR, (value) => value);
  let qrContainer;
  createEventDispatcher();
  $$result.css.add(css$1);
  $$unsubscribe_scannedQR();
  return `<div id="reader" width="200px" height="200px" class="svelte-17pu3xa"${add_attribute("this", qrContainer, 0)}></div> ${validate_component(Button, "Button").$$render($$result, { class: "upload" }, {}, {
    default: () => {
      return `<span class="material-icons" data-svelte-h="svelte-xs0gwh">qr_code_2</span> <span class="label" data-svelte-h="svelte-s7bn6y">Upload Secret QR code</span>`;
    }
  })} <input style="display: none;" type="file" accept="image/*" id="input-file" name="input-file">`;
});
const css = {
  code: "article.svelte-3iqa1b{width:100%}.details.svelte-3iqa1b{display:flex;flex-direction:column;gap:1.5em;justify-content:center;align-items:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import { Label } from \\"@smui/common\\";\\r\\n    import Chip, { Set, Text } from '@smui/chips';\\r\\n    import Card, {Content, Actions} from '@smui/card';\\r\\n    import Textfield from \\"@smui/textfield\\";\\r\\n    import HelperText from \\"@smui/textfield/helper-text\\";\\r\\n    import { enhance } from \\"$app/forms\\";\\r\\n    import { goto, invalidate, invalidateAll } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { loggedInUser, profileImage, isAuth } from \\"$lib/stores\\";\\r\\n    import ScanQR from \\"$lib/qr/ScanQR.svelte\\";\\r\\n    import GenerateQR from \\"$lib/qr/GenerateQR.svelte\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import { currentPath, Guest } from \\"$lib/stores.js\\";\\r\\n    import { isTeacher } from '$lib/stores';\\r\\n    $currentPath = 'Authentication'\\r\\n\\r\\n    let choices = [\\"Log in\\", \\"Sign up\\"];\\r\\n    let selected = \\"Log in\\";\\r\\n    let error;\\r\\n    let phone = null,\\r\\n        name = null;\\r\\n    let generateQR = false,\\r\\n        downloadQR = false;\\r\\n    let ids, privateID, otpID, publicID, profile;\\r\\n    let downloader, filename;\\r\\n    let qrlink, waId;\\r\\n    let loginStatus = \\"Login\\",\\r\\n        scanned = false;\\r\\n    \\r\\n    const readFromScan = (event) => {\\r\\n        publicID = event.detail.filename;\\r\\n        let data = event.detail.data.split(\\" \\");\\r\\n        privateID = data[0];\\r\\n        otpID = data[1];\\r\\n        scanned = true;\\r\\n    };\\r\\n\\r\\n    function logout() {\\r\\n        document.cookie = \\"jwt=; Max-Age=0; Path=/;\\";\\r\\n        $page.data.user = null;\\r\\n        goto(\\"/\\");\\r\\n    }\\r\\n    const login = async () => {\\r\\n        loginStatus = \\"Waiting...\\";\\r\\n        // console.log('publicID', publicID, '')\\r\\n        const res = await fetch(\\"/api/login\\", {\\r\\n            method: \\"POST\\",\\r\\n            body: JSON.stringify({\\r\\n                phone,\\r\\n                publicID,\\r\\n                privateID,\\r\\n                otpID,\\r\\n            }),\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n        });\\r\\n\\r\\n        if (!res.ok) {\\r\\n            error = await res.text();\\r\\n            // console.error(error)\\r\\n            loginStatus = \\"Failed\\";\\r\\n            return;\\r\\n        }\\r\\n        // let user = await res.json();\\r\\n        await setProfileImage();\\r\\n        // invalidateAll();\\r\\n        setTimeout(() => {\\r\\n            invalidateAll();\\r\\n        }, 0)\\r\\n        // $isAuth = $page.data.user;\\r\\n        // setTimeout(() => {\\r\\n        //     goto(\`/\${$page.data.user.publicID}\`)\\r\\n        //     $isAuth = $page.data.user;\\r\\n        // }, 100)\\r\\n        \\r\\n\\r\\n        // if(user)  {\\r\\n\\r\\n        //     await setProfileImage();\\r\\n\\r\\n        //     loginStatus = 'Success';\\r\\n\\r\\n        //     goto(\`/subscription\`)\\r\\n        // }\\r\\n    };\\r\\n    const setProfileImage = async () => {\\r\\n        const res = await fetch(\`/api/profilepic\`);\\r\\n\\r\\n        if (!res.ok) {\\r\\n            alert(\\"Failed to load image\\");\\r\\n            return;\\r\\n        }\\r\\n\\r\\n        let imageData = await res.blob();\\r\\n\\r\\n        // console.log(imageData)\\r\\n\\r\\n        if (imageData.size === 0) {\\r\\n            profileImage.set(\\"/avatar.svg\\");\\r\\n            return;\\r\\n        }\\r\\n        profile = URL.createObjectURL(imageData);\\r\\n        let reader = new FileReader();\\r\\n        reader.readAsDataURL(imageData);\\r\\n        reader.onload = (e) => {\\r\\n            profile = e.target.result;\\r\\n            profileImage.set(profile);\\r\\n        };\\r\\n    };\\r\\n    const sanitizeName = () => {\\r\\n        name = name.trim();\\r\\n        let parts = name.split(\\" \\");\\r\\n        name = parts\\r\\n            .map((part) => part[0].toUpperCase() + part.slice(1))\\r\\n            .join(\\" \\");\\r\\n    };\\r\\n    const signup = async () => {\\r\\n        sanitizeName();\\r\\n        // console.log('posting...')\\r\\n        const res = await fetch(\\"/api/signup\\", {\\r\\n            method: \\"POST\\",\\r\\n            body: JSON.stringify({\\r\\n                name,\\r\\n                phone,\\r\\n            }),\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n        });\\r\\n        // console.log('posted...')\\r\\n        if (!res.ok) {\\r\\n            error = await res.text();\\r\\n            if (error === \\"User already exists!\\") {\\r\\n                alert(\\r\\n                    \\"Account already exists. Contact us on WhatsApp 8235463666 to verify.\\"\\r\\n                );\\r\\n            }\\r\\n            // console.error(error)\\r\\n            goto(\\"/\\");\\r\\n        }\\r\\n        ids = await res.json();\\r\\n        privateID = ids.privateID;\\r\\n        publicID = ids.publicID;\\r\\n        otpID = ids.otpID;\\r\\n        generateQR = true;\\r\\n        profileImage.set(\\"/avatar.svg\\");\\r\\n        invalidateAll();\\r\\n        alert(\\"Please download the QR code. It is needed for authentication later on.\\")\\r\\n    };\\r\\n    const setGuest = () => {\\r\\n        $Guest = true;\\r\\n    }\\r\\n    // $: console.log($page.data)\\r\\n<\/script>\\r\\n<svelte:head>\\r\\n    <title>Authentication</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/auth\\" />\\r\\n    <meta name=\\"description\\" content=\\"Home of Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    {#if !$page.data.user}\\r\\n        <Card>\\r\\n            <Content style=\\"display:flex;flex-direction:column;align-items:center;justify-content:center;gap: 0.5em;\\">\\r\\n                <!-- {#if $Guest}\\r\\n                    <p>Welcome! You are using Guest Access.</p>\\r\\n                {:else}\\r\\n                <Button on:click={setGuest}>Start as Guest User</Button>\\r\\n                <div>OR</div>\\r\\n                {/if} -->\\r\\n                \\r\\n                <div class=\\"choices\\">\\r\\n                    <Set chips={choices} let:chip choice bind:selected>\\r\\n                        <Chip {chip}>\\r\\n                          <Text>{chip}</Text>\\r\\n                        </Chip>\\r\\n                      </Set>\\r\\n                </div>\\r\\n                {#if selected === \\"Log in\\"}\\r\\n                    <div class=\\"details\\">\\r\\n                        <Textfield\\r\\n                            variant=\\"outlined\\"\\r\\n                            bind:value={phone}\\r\\n                            label=\\"Phone\\"\\r\\n                            placeholder=\\"0123456789\\"\\r\\n                            style=\\"width:300px;\\"\\r\\n                        />\\r\\n\\r\\n                        {#if phone}\\r\\n                            <ScanQR on:scanned={readFromScan} />\\r\\n                        {/if}\\r\\n                    </div>\\r\\n                {:else}\\r\\n                    <div class=\\"details\\">\\r\\n                        <Textfield\\r\\n                            variant=\\"outlined\\"\\r\\n                            bind:value={name}\\r\\n                            label=\\"Name\\"\\r\\n                            placeholder=\\"Firstname Surname\\"\\r\\n                            style=\\"width: 300px;\\"\\r\\n                        />\\r\\n                        {#if name}\\r\\n                            <Textfield\\r\\n                                variant=\\"outlined\\"\\r\\n                                bind:value={phone}\\r\\n                                label=\\"Phone\\"\\r\\n                                style=\\"width: 300px;\\"\\r\\n                            />\\r\\n                        {/if}\\r\\n                    </div>\\r\\n                {/if}\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                {#if selected === \\"Log in\\" && scanned}\\r\\n                    <Button style=\\"width:100%\\" on:click={login}>\\r\\n                        <Label>Login</Label>\\r\\n                    </Button>\\r\\n                {:else if selected === \\"Sign up\\" && phone}\\r\\n                    <Button style=\\"width:100%\\" on:click={signup}>\\r\\n                        <Label>Sign up</Label>\\r\\n                    </Button>\\r\\n                {/if}\\r\\n            </Actions>\\r\\n        </Card>\\r\\n<!--         \\r\\n        <br>\\r\\n        {#if selected === \\"Log in\\"}\\r\\n            <div class=\\"details\\">\\r\\n                <Textfield\\r\\n                    variant=\\"filled\\"\\r\\n                    bind:value={phone}\\r\\n                    label=\\"Phone\\"\\r\\n                    placeholder=\\"0123456789\\"\\r\\n                />\\r\\n\\r\\n                {#if phone}\\r\\n                    <ScanQR on:scanned={readFromScan} />\\r\\n                {/if}\\r\\n\\r\\n                {#if scanned}\\r\\n                    <Button on:click={login}>\\r\\n                        <Label>Login</Label>\\r\\n                    </Button>\\r\\n                {/if}\\r\\n            </div>\\r\\n        {:else}\\r\\n            <div class=\\"details\\">\\r\\n                <Textfield\\r\\n                    variant=\\"filled\\"\\r\\n                    bind:value={name}\\r\\n                    label=\\"Name\\"\\r\\n                    placeholder=\\"Firstname Surname\\"\\r\\n                />\\r\\n                {#if name}\\r\\n                    <Textfield\\r\\n                        variant=\\"filled\\"\\r\\n                        bind:value={phone}\\r\\n                        label=\\"Phone\\"\\r\\n                    />\\r\\n                {/if}\\r\\n                {#if phone}\\r\\n                    <Button on:click={signup}>\\r\\n                        <Label>Sign up</Label>\\r\\n                    </Button>\\r\\n                {/if}\\r\\n            </div>\\r\\n        {/if} -->\\r\\n    {/if}\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 100%;\\r\\n        /* display:flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        flex: 1; */\\r\\n    }\\r\\n    \\r\\n    .authQR {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n    }\\r\\n    .details {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1.5em;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkRI,qBAAQ,CACJ,KAAK,CAAE,IAKX,CAQA,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_Guest;
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_Guest = subscribe(Guest, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Authentication", $currentPath);
  let choices = ["Log in", "Sign up"];
  let selected = "Log in";
  let phone = null, name = null;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1eo24a5_START -->${$$result.title = `<title>Authentication</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/auth"><meta name="description" content="Home of Dr Mithilesh Kumar"><!-- HEAD_svelte-1eo24a5_END -->`, ""} <article class="svelte-3iqa1b">${!$page.data.user ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display:flex;flex-direction:column;align-items:center;justify-content:center;gap: 0.5em;"
          },
          {},
          {
            default: () => {
              return ` <div class="choices">${validate_component(Set_1, "Set").$$render(
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
              )}</div> ${selected === "Log in" ? `<div class="details svelte-3iqa1b">${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Phone",
                  placeholder: "0123456789",
                  style: "width:300px;",
                  value: phone
                },
                {
                  value: ($$value) => {
                    phone = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${phone ? `${validate_component(ScanQR, "ScanQR").$$render($$result, {}, {}, {})}` : ``}</div>` : `<div class="details svelte-3iqa1b">${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Name",
                  placeholder: "Firstname Surname",
                  style: "width: 300px;",
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
                  variant: "outlined",
                  label: "Phone",
                  style: "width: 300px;",
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
          }
        )} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${`${selected === "Sign up" && phone ? `${validate_component(Button, "Button").$$render($$result, { style: "width:100%" }, {}, {
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
    })} ` : ``} </article>`;
  } while (!$$settled);
  $$unsubscribe_Guest();
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CRPzWPrg.js.map
