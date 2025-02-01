import { a as subscribe, e as compute_rest_props, c as null_to_empty } from './utils-DhkojCd_.js';
import { c as create_ssr_component, e as escape, v as validate_component, j as createEventDispatcher, a as add_attribute, i as each, d as spread, h as escape_object } from './ssr2-CDgUAJs6.js';
import './client-k3u4ChD_.js';
import { p as page } from './stores3-DPEAZJnM.js';
import './stores2-f06Es8-t.js';
import { S as ScanQR } from './GenerateQR.svelte_svelte_type_style_lang2-5UGUnn7x.js';
import 'html5-qrcode';
import 'qrcode-generator';
import './exports-kR70XCWV.js';
import './index2-D2s-XE5r.js';
import './Button-DTp4JSRw.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './Ripple-N--aPaMn.js';

/* empty css                                                        */
/* empty css                                                                  */
const css$6 = {
  code: ".segment.svelte-wv09y5{display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}",
  map: `{"version":3,"file":"Segment.svelte","sources":["Segment.svelte"],"sourcesContent":["<script>\\r\\n// @ts-nocheck\\r\\n    import {createEventDispatcher} from 'svelte';\\r\\n    export let segment;\\r\\n    export let title;\\r\\n    let dispatch = createEventDispatcher();\\r\\n    const dispatcher = (event) => {\\r\\n        event.preventDefault();\\r\\n        dispatch('click$preventDefault', {});\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    .segment {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        position: relative;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n</style>\\r\\n<span class=\\"segment\\" {title} on:click={dispatcher}>\\r\\n    <slot>\\r\\n        <span {title}>{segment}</span>\\r\\n    </slot>\\r\\n</span>"],"names":[],"mappings":"AAYI,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MACd"}`
};
const Segment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  let { title } = $$props;
  createEventDispatcher();
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$result.css.add(css$6);
  return `<span class="segment svelte-wv09y5"${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ` <span${add_attribute("title", title, 0)}>${escape(segment)}</span> `}</span>`;
});
const css$5 = {
  code: ".segmentedButton.svelte-dzhtih{display:flex;flex-direction:row;border:1px solid rgb(186, 186, 186);border-radius:6px;align-items:center;justify-content:flex-start;height:2.5em;width:fit-content;flex-wrap:wrap}.segment.svelte-dzhtih{border-left:1px solid rgb(186, 186, 186);padding:0 0.8em;display:flex;align-items:center;justify-content:center;cursor:pointer;height:inherit;min-width:2.5em;position:relative;overflow:hidden}.segment.svelte-dzhtih:hover{background-color:rgba(0, 100, 150, 0.05)}.selected.svelte-dzhtih{background-color:rgba(0, 100, 150, 0.1);color:var(--dark)}.segment.svelte-dzhtih:first-child{border-left:none}.label.svelte-dzhtih{font-size:0.7em;padding:0 0.2em}.container.svelte-dzhtih{display:flex;flex-direction:column;gap:0.3em}",
  map: `{"version":3,"file":"SegmentedButton.svelte","sources":["SegmentedButton.svelte"],"sourcesContent":["<script>\\r\\n// @ts-nocheck\\r\\n    import {ripple} from '$lib/vectorial/ui/ripple';\\r\\n    export let segments;\\r\\n    export let selected;\\r\\n    export let label = '';\\r\\n    export let singleSelect = false;\\r\\n    let selection = new Set();\\r\\n    const handleSelected = (item) => {\\r\\n        if(singleSelect) {\\r\\n            selected = item;\\r\\n        } else {\\r\\n            selection.add(item);\\r\\n            selected = Array.from(selection);\\r\\n        }\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    .segmentedButton {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        border: 1px solid rgb(186, 186, 186);\\r\\n        border-radius: 6px;\\r\\n        align-items: center;\\r\\n        justify-content: flex-start;\\r\\n        height: 2.5em;\\r\\n        width: fit-content;\\r\\n        flex-wrap: wrap;\\r\\n    }\\r\\n    \\r\\n    .segment {\\r\\n        border-left: 1px solid rgb(186, 186, 186);\\r\\n        /* padding: 0.5em 0.9em; */\\r\\n        padding: 0 0.8em;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        cursor: pointer;\\r\\n        height: inherit;\\r\\n        min-width: 2.5em;\\r\\n        position: relative;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .segment:hover {\\r\\n        background-color: rgba(0, 100, 150, 0.05);\\r\\n    }\\r\\n    .selected {\\r\\n        background-color: rgba(0, 100, 150, 0.1);\\r\\n        color: var(--dark);\\r\\n    }\\r\\n    .segment:first-child {\\r\\n        border-left: none;\\r\\n    }\\r\\n    .label {\\r\\n        font-size: 0.7em;\\r\\n        padding: 0 0.2em;\\r\\n    }\\r\\n    .container {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"container\\">\\r\\n    {#if label.length > 0}\\r\\n        <span class=\\"label\\">{label}</span>\\r\\n    {/if}\\r\\n    <div class=\\"segmentedButton\\">\\r\\n        {#each segments as segment}\\r\\n            <span use:ripple class=\\"segment {singleSelect ? selected === segment ? 'selected' : '' : selected && selected.indexOf(segment) !== -1 ? 'selected' : ''}\\" on:click={ () => handleSelected(segment)} >\\r\\n                <slot segment={segment}></slot>\\r\\n            </span>\\r\\n        {/each}\\r\\n    </div>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAkBI,8BAAiB,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,UAAU,CAC3B,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,WAAW,CAClB,SAAS,CAAE,IACf,CAEA,sBAAS,CACL,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAEzC,OAAO,CAAE,CAAC,CAAC,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,KAAK,CAChB,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MACd,CACA,sBAAQ,MAAO,CACX,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAC5C,CACA,uBAAU,CACN,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACxC,KAAK,CAAE,IAAI,MAAM,CACrB,CACA,sBAAQ,YAAa,CACjB,WAAW,CAAE,IACjB,CACA,oBAAO,CACH,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,CAAC,CAAC,KACf,CACA,wBAAW,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const SegmentedButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segments } = $$props;
  let { selected } = $$props;
  let { label = "" } = $$props;
  let { singleSelect = false } = $$props;
  if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.singleSelect === void 0 && $$bindings.singleSelect && singleSelect !== void 0) $$bindings.singleSelect(singleSelect);
  $$result.css.add(css$5);
  return `<div class="container svelte-dzhtih">${label.length > 0 ? `<span class="label svelte-dzhtih">${escape(label)}</span>` : ``} <div class="segmentedButton svelte-dzhtih">${each(segments, (segment) => {
    return `<span class="${"segment " + escape(
      singleSelect ? selected === segment ? "selected" : "" : selected && selected.indexOf(segment) !== -1 ? "selected" : "",
      true
    ) + " svelte-dzhtih"}">${slots.default ? slots.default({ segment }) : ``} </span>`;
  })}</div></div>`;
});
const css$4 = {
  code: "label.svelte-p9rdyt.svelte-p9rdyt{display:flex;flex-direction:column;height:3em;border:0.5px solid var(--medium);border-radius:5px;overflow:hidden}label.svelte-p9rdyt span.svelte-p9rdyt{font-size:0.7em;padding:0.5em}input.svelte-p9rdyt.svelte-p9rdyt{height:2.5em;border:none;outline:none;padding:0 1em;background-color:var(--light)}",
  map: `{"version":3,"file":"Textfield.svelte","sources":["Textfield.svelte"],"sourcesContent":["<script>\\r\\n// @ts-nocheck\\r\\n\\r\\n    export let value;\\r\\n    export let label;\\r\\n    export let placeholder = '';\\r\\n<\/script>\\r\\n<style>\\r\\n    label {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        height: 3em;\\r\\n        border: 0.5px solid var(--medium);\\r\\n        border-radius: 5px;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    label span {\\r\\n        font-size: 0.7em;\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n    input {\\r\\n        height: 2.5em;\\r\\n        border: none;\\r\\n        outline: none;\\r\\n        padding: 0 1em;\\r\\n        background-color: var(--light);\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<label for=\\"\\">\\r\\n    <span>{label}</span>\\r\\n    <input type=\\"text\\" {placeholder} bind:value on:input >\\r\\n</label>"],"names":[],"mappings":"AAQI,iCAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CACjC,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd,CACA,mBAAK,CAAC,kBAAK,CACP,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,KACb,CACA,iCAAM,CACF,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,gBAAgB,CAAE,IAAI,OAAO,CACjC"}`
};
const Textfield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { label } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  $$result.css.add(css$4);
  return `<label for="" class="svelte-p9rdyt"><span class="svelte-p9rdyt">${escape(label)}</span> <input type="text"${add_attribute("placeholder", placeholder, 0)} class="svelte-p9rdyt"${add_attribute("value", value, 0)}></label>`;
});
const css$3 = {
  code: "button.svelte-ggzs2i{height:2.5em;padding:0 0.8em;font-size:0.8em;font-weight:500;font-family:Roboto;border:none;background:var(--light);color:var(--dark);cursor:pointer;border-radius:5px;display:flex;align-items:center;gap:0.5em;position:relative;overflow:hidden;transition:background 400ms;max-width:fit-content}button.svelte-ggzs2i:hover,button.svelte-ggzs2i:focus{background:var(--lightmedium);font-weight:600}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script>\\r\\n// @ts-nocheck\\r\\n    import {ripple} from '$lib/vectorial/ui/ripple';\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n    button {\\r\\n        height: 2.5em;\\r\\n        padding: 0 0.8em;\\r\\n        font-size: 0.8em;\\r\\n        font-weight: 500;\\r\\n        font-family: Roboto;\\r\\n        border: none;\\r\\n        background: var(--light);\\r\\n        color: var(--dark);\\r\\n        cursor: pointer;\\r\\n        border-radius: 5px;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        gap: 0.5em;\\r\\n        position: relative;\\r\\n        overflow: hidden;\\r\\n        transition: background 400ms;\\r\\n        max-width: fit-content;\\r\\n    }\\r\\n    button:hover, button:focus {\\r\\n        background: var(--lightmedium);\\r\\n        font-weight: 600;\\r\\n    }\\r\\n</style>\\r\\n<button {...$$restProps} use:ripple on:click >\\r\\n    <slot />\\r\\n</button>"],"names":[],"mappings":"AAMI,oBAAO,CACH,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,CAAC,CAAC,KAAK,CAChB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KAAK,CACV,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,UAAU,CAAC,KAAK,CAC5B,SAAS,CAAE,WACf,CACA,oBAAM,MAAM,CAAE,oBAAM,MAAO,CACvB,UAAU,CAAE,IAAI,aAAa,CAAC,CAC9B,WAAW,CAAE,GACjB"}`
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$3);
  return `<button${spread([escape_object($$restProps)], { classes: "svelte-ggzs2i" })}>${slots.default ? slots.default({}) : ``}</button>`;
});
const css$2 = {
  code: ".label.svelte-1ya0dro{text-transform:uppercase;letter-spacing:0.07em}",
  map: '{"version":3,"file":"Label.svelte","sources":["Label.svelte"],"sourcesContent":["<span class=\\"label\\" {...$$restProps}>\\r\\n    <slot />\\r\\n</span>\\r\\n\\r\\n<style>\\r\\n    .label {\\r\\n        text-transform: uppercase;\\r\\n        letter-spacing: 0.07em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAKI,qBAAO,CACH,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,MACpB"}'
};
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$2);
  return `<span${spread([{ class: "label" }, escape_object($$restProps)], { classes: "svelte-1ya0dro" })}>${slots.default ? slots.default({}) : ``} </span>`;
});
const css$1 = {
  code: ".top.svelte-1b3c9hc.svelte-1b3c9hc{display:flex;flex-direction:column;height:3em;border:0.5px solid var(--medium);border-radius:5px;overflow:hidden}.left.svelte-1b3c9hc.svelte-1b3c9hc{display:flex;flex-direction:row;border:0.5px solid var(--medium);border-radius:5px;overflow:hidden;align-items:center}label.svelte-1b3c9hc span.svelte-1b3c9hc{font-size:0.7em;padding:0.5em;font-weight:500;min-width:20px}input.svelte-1b3c9hc.svelte-1b3c9hc{height:2.5em;border:none;outline:none;padding:0 1em;background-color:var(--light);width:100%}",
  map: `{"version":3,"file":"Numberfield.svelte","sources":["Numberfield.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    // @ts-nocheck\\r\\n    \\r\\n        export let value;\\r\\n        export let label;\\r\\n        export let background = \\"rgb(246, 253, 255)\\";\\r\\n        export let align = 'top';\\r\\n        export let placeholder = '';\\r\\n    <\/script>\\r\\n    <style>\\r\\n        .top {\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            height: 3em;\\r\\n            border: 0.5px solid var(--medium);\\r\\n            border-radius: 5px;\\r\\n            overflow: hidden;\\r\\n        }\\r\\n        .left {\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            border: 0.5px solid var(--medium);\\r\\n            border-radius: 5px;\\r\\n            overflow: hidden;\\r\\n            align-items: center;\\r\\n        }\\r\\n        label span {\\r\\n            font-size: 0.7em;\\r\\n            padding: 0.5em;\\r\\n            font-weight: 500;\\r\\n            min-width: 20px;\\r\\n        }\\r\\n        input {\\r\\n            height: 2.5em;\\r\\n            border: none;\\r\\n            outline: none;\\r\\n            padding: 0 1em;\\r\\n            background-color: var(--light);\\r\\n            width: 100%;\\r\\n        }\\r\\n    </style>\\r\\n    \\r\\n    <label class={align} for=\\"\\">\\r\\n        <span>{label}</span>\\r\\n        <input style=\\"--light: {background}\\" {placeholder} type=\\"number\\" bind:value >\\r\\n    </label>"],"names":[],"mappings":"AAUQ,kCAAK,CACD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CACjC,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd,CACA,mCAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CACjC,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MACjB,CACA,oBAAK,CAAC,mBAAK,CACP,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IACf,CACA,mCAAM,CACF,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,IACX"}`
};
const Numberfield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { label } = $$props;
  let { background = "rgb(246, 253, 255)" } = $$props;
  let { align = "top" } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  $$result.css.add(css$1);
  return `<label class="${escape(null_to_empty(align), true) + " svelte-1b3c9hc"}" for=""><span class="svelte-1b3c9hc">${escape(label)}</span> <input style="${"--light: " + escape(background, true)}"${add_attribute("placeholder", placeholder, 0)} type="number" class="svelte-1b3c9hc"${add_attribute("value", value, 0)}></label>`;
});
const css = {
  code: ".phone.svelte-fxp3o2,.name.svelte-fxp3o2{width:100%}article.svelte-fxp3o2{width:min(400px, 90vw);margin:auto;margin-top:1em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    // @ts-nocheck\\r\\n        import { enhance } from '$app/forms';\\r\\n        import { goto, invalidateAll } from '$app/navigation'\\r\\n        import { page } from '$app/stores'\\r\\n        import { loggedInUser, profileImage} from '$lib/vectorial/stores';\\r\\n        import { clickOutside } from '$lib/vectorial/utils/clickOutside';\\r\\n        \\r\\n        import ScanQR from '$lib/vectorial/qr/ScanQR.svelte';\\r\\n        import GenerateQR from '$lib/vectorial/qr/GenerateQR.svelte';\\r\\n        import Button from '$lib/vectorial/ui/Button.svelte';\\r\\n        import Label from '$lib/vectorial/ui/Label.svelte';\\r\\n        import Textfield from '$lib/vectorial/ui/Textfield.svelte';\\r\\n        import Numberfield from '$lib/vectorial/ui/Numberfield.svelte';\\r\\n        import SegmentedButton from '$lib/vectorial/ui/SegmentedButton.svelte';\\r\\n        import Segment from '$lib/vectorial/ui/Segment.svelte';\\r\\n        \\r\\n        let isLogin = false;\\r\\n        let authMode = ['Log in', 'Sign up'];\\r\\n        let showProducts = false, isSignup = null;\\r\\n        let error;\\r\\n        let phone, name;\\r\\n        let generateQR = false;\\r\\n        let ids, privateID, otpID, publicID, profile;\\r\\n        let loginStatus = 'Login', scanned = false;\\r\\n        const readFromScan = (event) => {\\r\\n            publicID = event.detail.filename;\\r\\n            let data = event.detail.data.split(' ');\\r\\n            privateID = data[0];\\r\\n            otpID = data[1];\\r\\n            scanned = true;\\r\\n        }\\r\\n        function logout() {\\r\\n            document.cookie = 'jwt=; Max-Age=0; Path=/;'\\r\\n            $page.data.user = null\\r\\n            goto('/')\\r\\n        }\\r\\n        const login = async () => {\\r\\n            loginStatus = 'Waiting...';\\r\\n            // console.log('publicID', publicID, '')\\r\\n            const res = await fetch('/vectorial/api/login', {\\r\\n                method: 'POST',\\r\\n                body: JSON.stringify({\\r\\n                    phone,\\r\\n                    publicID,\\r\\n                    privateID,\\r\\n                    otpID\\r\\n                }),\\r\\n                headers: {\\r\\n                    'content-type': 'application/json',\\r\\n                },\\r\\n            })\\r\\n    \\r\\n            if (!res.ok) {\\r\\n                error = await res.text()\\r\\n                // console.error(error)\\r\\n                loginStatus = 'Failed';\\r\\n                return\\r\\n            }\\r\\n            // let user = await res.json();\\r\\n            await setProfileImage();\\r\\n            invalidateAll();\\r\\n            // goto(\`/\${$page.data.user.publicID}\`)\\r\\n            \\r\\n            // if(user)  {\\r\\n                \\r\\n            //     await setProfileImage();\\r\\n               \\r\\n            //     loginStatus = 'Success';\\r\\n            \\r\\n            //     goto(\`/subscription\`)\\r\\n            // }\\r\\n            \\r\\n            \\r\\n                  \\r\\n        }\\r\\n        const setProfileImage = async () => {\\r\\n            const res = await fetch(\`/vectorial/api/profile\`);\\r\\n            \\r\\n            if(!res.ok) {\\r\\n                alert('Failed to load image');\\r\\n                return\\r\\n            }\\r\\n            \\r\\n            let imageData = await res.blob();\\r\\n            \\r\\n            // console.log(imageData)\\r\\n            \\r\\n            if(imageData.size === 0) {\\r\\n                profileImage.set('/avatar.svg');\\r\\n                return;\\r\\n            }\\r\\n            profile = URL.createObjectURL(imageData);\\r\\n            let reader = new FileReader();\\r\\n            reader.readAsDataURL(imageData);\\r\\n            reader.onload = e => {\\r\\n            \\tprofile = e.target.result;\\r\\n                profileImage.set(profile);\\r\\n            }\\r\\n        }\\r\\n        const sanitizeName = () => {\\r\\n            name = name.trim()\\r\\n            let parts = name.split(' ');\\r\\n            name = parts.map(part => part[0].toUpperCase() + part.slice(1)).join(' ');\\r\\n        }\\r\\n        const signup = async () => {\\r\\n            sanitizeName();\\r\\n            // console.log('posting...')\\r\\n            const res = await fetch('/vectorial/api/signup', {\\r\\n                method: 'POST',\\r\\n                body: JSON.stringify({\\r\\n                    name,\\r\\n                    phone\\r\\n                }),\\r\\n                headers: {\\r\\n                    'content-type': 'application/json'\\r\\n                }\\r\\n            })\\r\\n            // console.log('posted...')\\r\\n            if (!res.ok) {\\r\\n                error = await res.text()\\r\\n                if(error === 'User already exists!') {\\r\\n                    alert('Account already exists. Contact us on WhatsApp 8235463666 to verify.')\\r\\n                }\\r\\n                // console.error(error)\\r\\n                goto('/')\\r\\n            }\\r\\n            ids = await res.json();\\r\\n            privateID = ids.privateID;\\r\\n            publicID = ids.publicID;\\r\\n            otpID = ids.otpID;\\r\\n            generateQR = true;\\r\\n        }\\r\\n        \\r\\n    <\/script>\\r\\n<style>\\r\\n    .phone, .name {\\r\\n        /* display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.2em;\\r\\n        padding: 0.5em 0em;\\r\\n        justify-content: flex-start;\\r\\n        align-items: center; */\\r\\n        width: 100%;\\r\\n    }\\r\\n    /* .phone p {\\r\\n        min-width: 175px;\\r\\n        border: 1px solid rgb(187, 187, 187);\\r\\n        padding: 0.3em 0.5em;\\r\\n    } */\\r\\n    article {\\r\\n        width: min(400px, 90vw);\\r\\n        margin: auto;\\r\\n        margin-top: 1em;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n        <div class=\\"settingscontent menusurface\\" use:clickOutside>\\r\\n                    \\r\\n            {#if $page.data.user && !(isSignup === 'Sign up')}\\r\\n                <div class=\\"signed\\">\\r\\n                    \\r\\n                    <span style=\\"cursor:pointer;\\" on:click={() => goto(\`/\${$page.data.user.publicID}\`)}>{$page.data.user.name}</span>\\r\\n                    <form use:enhance method=\\"POST\\" action=\\"?/logout\\">\\r\\n                        <!-- <button class=\\"btn btn-outline-danger\\">Or click here to logout.</button> on:click={(e) => (e.preventDefault(), logout())}-->\\r\\n                        <Button class=\\"logout\\">Log out</Button>\\r\\n                    </form>\\r\\n                    \\r\\n                </div>\\r\\n                \\r\\n            {:else}\\r\\n                <div class=\\"toggle\\">\\r\\n                    <SegmentedButton segments={authMode} let:segment singleSelect bind:selected={isSignup}>\\r\\n                        <Segment title={segment} segment={segment}>{segment}</Segment>\\r\\n                    </SegmentedButton> \\r\\n                    \\r\\n                </div>\\r\\n            {/if}\\r\\n        </div>\\r\\n        {#if isSignup !== 'Sign up'}\\r\\n            <h3>Login</h3>\\r\\n            <div class=\\"phone\\">\\r\\n                <Numberfield bind:value={phone} placeholder=\\"0000000000\\" label=\\"Phone\\" />\\r\\n            </div>\\r\\n            <br>\\r\\n            {#if phone}\\r\\n                <ScanQR on:scanned={readFromScan} />\\r\\n            {/if}\\r\\n            <br>\\r\\n            {#if scanned}\\r\\n            <Button on:click={login}>\\r\\n                <Label>Login</Label>\\r\\n            </Button>\\r\\n            {/if}\\r\\n        {:else}\\r\\n            <h3>Sign up</h3>\\r\\n            <div class=\\"name\\">\\r\\n                <!-- <span class=\\"material-icons\\">person</span>\\r\\n                <p contenteditable=\\"true\\" bind:textContent={name}></p> -->\\r\\n                <Textfield bind:value={name} placeholder=\\"Firstname Surname\\" label=\\"Name\\" />\\r\\n            </div>\\r\\n            {#if name}\\r\\n                <div class=\\"phone\\">\\r\\n                    <!-- <span class=\\"material-icons\\">phone</span>\\r\\n                    <p contenteditable=\\"true\\" bind:textContent={phone}></p> -->\\r\\n                    <Numberfield bind:value={phone} placeholder=\\"0000000000\\" label=\\"Phone\\" />\\r\\n                </div>\\r\\n            {/if}\\r\\n            {#if phone}\\r\\n            <Button on:click={signup}>\\r\\n                <Label>Sign up</Label>\\r\\n            </Button>\\r\\n            {/if}\\r\\n            {#if generateQR}\\r\\n                <GenerateQR data={privateID + ' ' + otpID} filename={publicID} on:saved={login} />\\r\\n            {/if}\\r\\n        {/if}\\r\\n</article>\\r\\n    "],"names":[],"mappings":"AAwII,oBAAM,CAAE,mBAAM,CAOV,KAAK,CAAE,IACX,CAMA,qBAAQ,CACJ,KAAK,CAAE,IAAI,KAAK,CAAC,CAAC,IAAI,CAAC,CACvB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAChB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let authMode = ["Log in", "Sign up"];
  let isSignup = null;
  let phone, name;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-fxp3o2"><div class="settingscontent menusurface">${$page.data.user && !(isSignup === "Sign up") ? `<div class="signed"><span style="cursor:pointer;">${escape($page.data.user.name)}</span> <form method="POST" action="?/logout"> ${validate_component(Button, "Button").$$render($$result, { class: "logout" }, {}, {
      default: () => {
        return `Log out`;
      }
    })}</form></div>` : `<div class="toggle">${validate_component(SegmentedButton, "SegmentedButton").$$render(
      $$result,
      {
        segments: authMode,
        singleSelect: true,
        selected: isSignup
      },
      {
        selected: ($$value) => {
          isSignup = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ segment }) => {
          return `${validate_component(Segment, "Segment").$$render($$result, { title: segment, segment }, {}, {
            default: () => {
              return `${escape(segment)}`;
            }
          })}`;
        }
      }
    )}</div>`}</div> ${isSignup !== "Sign up" ? `<h3 data-svelte-h="svelte-ircqch">Login</h3> <div class="phone svelte-fxp3o2">${validate_component(Numberfield, "Numberfield").$$render(
      $$result,
      {
        placeholder: "0000000000",
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
    )}</div> <br> ${phone ? `${validate_component(ScanQR, "ScanQR").$$render($$result, {}, {}, {})}` : ``} <br> ${``}` : `<h3 data-svelte-h="svelte-1r4pp8">Sign up</h3> <div class="name svelte-fxp3o2"> ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        placeholder: "Firstname Surname",
        label: "Name",
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${name ? `<div class="phone svelte-fxp3o2"> ${validate_component(Numberfield, "Numberfield").$$render(
      $$result,
      {
        placeholder: "0000000000",
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
    )}</div>` : ``} ${phone ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Sign up`;
          }
        })}`;
      }
    })}` : ``} ${``}`}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DlLSqxNb.js.map
