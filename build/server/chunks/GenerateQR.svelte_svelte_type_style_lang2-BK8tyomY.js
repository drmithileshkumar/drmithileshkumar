import { a as subscribe } from './utils-DhkojCd_.js';
import { c as create_ssr_component, j as createEventDispatcher, a as add_attribute, v as validate_component } from './ssr2-CDgUAJs6.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { a as scannedQR } from './stores2-BRo56-4P.js';
import 'html5-qrcode';

const css = {
  code: "#reader.svelte-17pu3xa{background:#888;width:200px;height:200px;display:flex;justify-content:center;align-items:center;margin-top:0.5em;margin-bottom:0.5em}",
  map: `{"version":3,"file":"ScanQR.svelte","sources":["ScanQR.svelte"],"sourcesContent":["<script>\\r\\n// @ts-nocheck\\r\\n    import Button from '@smui/button';\\r\\n    import { createEventDispatcher, onMount } from 'svelte';\\r\\n    import {scannedQR, loggedInUser} from '$lib/vectorial/stores';\\r\\n    import {Html5Qrcode} from 'html5-qrcode';\\r\\n    let filename;\\r\\n    let qrlink;\\r\\n    let qrContainer;\\r\\n    let fileinput;\\r\\n    let html5QrCode;\\r\\n    let hasQRcode = false;\\r\\n    \\r\\n    let dispatch = createEventDispatcher();\\r\\n    \\r\\n    const scanQR = (event) => {\\r\\n            html5QrCode = new Html5Qrcode('reader');\\r\\n            if (event.target.files.length == 0) {\\r\\n                // No file selected, ignore \\r\\n                return;\\r\\n            }\\r\\n            const image = event.target.files[0];\\r\\n            $scannedQR = image;\\r\\n            let imageName = image.name;\\r\\n            filename = imageName.split('.')[0].trim();\\r\\n            html5QrCode.scanFile(image, true)\\r\\n                .then(decodedText => { dispatch('scanned', {filename, data: decodedText}) })\\r\\n                .catch(err => { alert('Failed to scan Code') });\\r\\n    };\\r\\n<\/script>\\r\\n<style>\\r\\n    #reader {\\r\\n        background: #888;\\r\\n        width: 200px;\\r\\n        height: 200px;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        margin-top: 0.5em;\\r\\n        margin-bottom: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<div bind:this={qrContainer} id='reader' width=\\"200px\\" height=\\"200px\\"></div>\\r\\n<Button class=\\"upload\\" on:click={() => fileinput.click()}>\\r\\n    <span class='material-icons'>qr_code_2</span>\\r\\n    <span class=\\"label\\">Upload Secret QR code</span>\\r\\n</Button>\\r\\n<input style=\\"display: none;\\" type=\\"file\\" accept=\\"image/*\\"\\r\\n    id=\\"input-file\\"\\r\\n    name=\\"input-file\\"\\r\\n    on:change={scanQR}\\r\\n    bind:this={fileinput}\\r\\n>\\r\\n\\r\\n"],"names":[],"mappings":"AA+BI,sBAAQ,CACJ,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KACnB"}`
};
const ScanQR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scannedQR;
  $$unsubscribe_scannedQR = subscribe(scannedQR, (value) => value);
  let qrContainer;
  createEventDispatcher();
  $$result.css.add(css);
  $$unsubscribe_scannedQR();
  return `<div id="reader" width="200px" height="200px" class="svelte-17pu3xa"${add_attribute("this", qrContainer, 0)}></div> ${validate_component(Button, "Button").$$render($$result, { class: "upload" }, {}, {
    default: () => {
      return `<span class="material-icons" data-svelte-h="svelte-xs0gwh">qr_code_2</span> <span class="label" data-svelte-h="svelte-s7bn6y">Upload Secret QR code</span>`;
    }
  })} <input style="display: none;" type="file" accept="image/*" id="input-file" name="input-file">`;
});

export { ScanQR as S };
//# sourceMappingURL=GenerateQR.svelte_svelte_type_style_lang2-BK8tyomY.js.map
