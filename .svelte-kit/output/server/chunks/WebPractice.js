import { c as create_ssr_component, j as createEventDispatcher, o as onDestroy, e as escape, f as add_attribute, v as validate_component } from "./ssr2.js";
import { S as SegmentedButton, a as Segment } from "./Segment.js";
import { C as CommonLabel } from "./CommonLabel.js";
import "./Suffix.js";
import { C as Card } from "./Card.js";
import { C as Content } from "./ActionIcons.js";
import { B as Button } from "./Button.js";
import { basicSetup } from "codemirror";
import { EditorView, keymap, placeholder } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
/* empty css                                          */
import { javascript } from "@codemirror/lang-javascript";
import { xml } from "@codemirror/lang-xml";
import { css as css$2 } from "@codemirror/lang-css";
const css = {
  code: ".codemirror-wrapper.svelte-kcx0g9 .cm-focused{outline:none}.scm-waiting.svelte-kcx0g9{position:relative}.scm-waiting__loading.svelte-kcx0g9{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(255, 255, 255, 0.5)}.scm-loading.svelte-kcx0g9{display:flex;align-items:center;justify-content:center}.scm-loading__spinner.svelte-kcx0g9{width:1rem;height:1rem;border-radius:100%;border:solid 2px #000;border-top-color:transparent;margin-right:0.75rem;animation:svelte-kcx0g9-spin 1s linear infinite}.scm-loading__text.svelte-kcx0g9{font-family:sans-serif}.scm-pre.svelte-kcx0g9{font-size:0.85rem;font-family:monospace;tab-size:2;-moz-tab-size:2;resize:none;pointer-events:none;user-select:none;overflow:auto}@keyframes svelte-kcx0g9-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"CodeMirror.svelte","sources":["CodeMirror.svelte"],"sourcesContent":["<script context=\\"module\\"><\/script>\\r\\n\\r\\n<script>import { createEventDispatcher, onDestroy, onMount } from \\"svelte\\";\\r\\nimport { basicSetup } from \\"codemirror\\";\\r\\nimport { EditorView, keymap, placeholder as placeholderExt } from \\"@codemirror/view\\";\\r\\nimport { EditorState, StateEffect } from \\"@codemirror/state\\";\\r\\nimport { indentWithTab } from \\"@codemirror/commands\\";\\r\\nimport { indentUnit } from \\"@codemirror/language\\";\\r\\nimport { debounce } from \\"./util\\";\\r\\nlet classes = \\"\\";\\r\\nexport { classes as class };\\r\\nexport let value = \\"\\";\\r\\nexport let basic = true;\\r\\nexport let lang = void 0;\\r\\nexport let theme = void 0;\\r\\nexport let extensions = [];\\r\\nexport let useTab = true;\\r\\nexport let tabSize = 2;\\r\\nexport let styles = void 0;\\r\\nexport let lineWrapping = false;\\r\\nexport let editable = true;\\r\\nexport let readonly = false;\\r\\nexport let placeholder = void 0;\\r\\nexport let nodebounce = false;\\r\\nconst is_browser = typeof window !== \\"undefined\\";\\r\\nconst dispatch = createEventDispatcher();\\r\\nlet element;\\r\\nlet view;\\r\\nlet update_from_prop = false;\\r\\nlet update_from_state = false;\\r\\nlet first_config = true;\\r\\nlet first_update = true;\\r\\n$:\\r\\n  state_extensions = [\\r\\n    ...get_base_extensions(basic, useTab, tabSize, lineWrapping, placeholder, editable, readonly, lang),\\r\\n    ...get_theme(theme, styles),\\r\\n    ...extensions\\r\\n  ];\\r\\n$:\\r\\n  view && update(value);\\r\\n$:\\r\\n  view && state_extensions && reconfigure();\\r\\n$:\\r\\n  on_change = nodebounce ? handle_change : debounce(handle_change, 300);\\r\\nonMount(() => {\\r\\n  view = create_editor_view();\\r\\n  dispatch(\\"ready\\", view);\\r\\n});\\r\\nonDestroy(() => view?.destroy());\\r\\nfunction create_editor_view() {\\r\\n  return new EditorView({\\r\\n    parent: element,\\r\\n    state: create_editor_state(value),\\r\\n    dispatch(transaction) {\\r\\n      view.update([transaction]);\\r\\n      if (!update_from_prop && transaction.docChanged) {\\r\\n        on_change();\\r\\n      }\\r\\n    }\\r\\n  });\\r\\n}\\r\\nfunction reconfigure() {\\r\\n  if (first_config) {\\r\\n    first_config = false;\\r\\n    return;\\r\\n  }\\r\\n  view.dispatch({\\r\\n    effects: StateEffect.reconfigure.of(state_extensions)\\r\\n  });\\r\\n}\\r\\nfunction update(value2) {\\r\\n  if (first_update) {\\r\\n    first_update = false;\\r\\n    return;\\r\\n  }\\r\\n  if (update_from_state) {\\r\\n    update_from_state = false;\\r\\n    return;\\r\\n  }\\r\\n  update_from_prop = true;\\r\\n  view.setState(create_editor_state(value2));\\r\\n  update_from_prop = false;\\r\\n}\\r\\nfunction handle_change() {\\r\\n  const new_value = view.state.doc.toString();\\r\\n  if (new_value === value)\\r\\n    return;\\r\\n  update_from_state = true;\\r\\n  value = new_value;\\r\\n  dispatch(\\"change\\", value);\\r\\n}\\r\\nfunction create_editor_state(value2) {\\r\\n  return EditorState.create({\\r\\n    doc: value2 ?? void 0,\\r\\n    extensions: state_extensions\\r\\n  });\\r\\n}\\r\\nfunction get_base_extensions(basic2, useTab2, tabSize2, lineWrapping2, placeholder2, editable2, readonly2, lang2) {\\r\\n  const extensions2 = [\\r\\n    indentUnit.of(\\" \\".repeat(tabSize2)),\\r\\n    EditorView.editable.of(editable2),\\r\\n    EditorState.readOnly.of(readonly2)\\r\\n  ];\\r\\n  if (basic2)\\r\\n    extensions2.push(basicSetup);\\r\\n  if (useTab2)\\r\\n    extensions2.push(keymap.of([indentWithTab]));\\r\\n  if (placeholder2)\\r\\n    extensions2.push(placeholderExt(placeholder2));\\r\\n  if (lang2)\\r\\n    extensions2.push(lang2);\\r\\n  if (lineWrapping2)\\r\\n    extensions2.push(EditorView.lineWrapping);\\r\\n  return extensions2;\\r\\n}\\r\\nfunction get_theme(theme2, styles2) {\\r\\n  const extensions2 = [];\\r\\n  if (styles2)\\r\\n    extensions2.push(EditorView.theme(styles2));\\r\\n  if (theme2)\\r\\n    extensions2.push(theme2);\\r\\n  return extensions2;\\r\\n}\\r\\n<\/script>\\r\\n\\r\\n{#if is_browser}\\r\\n    <div class=\\"codemirror-wrapper {classes}\\" bind:this={element} />\\r\\n{:else}\\r\\n    <div class=\\"scm-waiting {classes}\\">\\r\\n        <div class=\\"scm-waiting__loading scm-loading\\">\\r\\n            <div class=\\"scm-loading__spinner\\" />\\r\\n            <p class=\\"scm-loading__text\\">Loading editor...</p>\\r\\n        </div>\\r\\n\\r\\n        <pre class=\\"scm-pre cm-editor\\">{value}</pre>\\r\\n    </div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n    .codemirror-wrapper :global(.cm-focused) {\\r\\n        outline: none;\\r\\n    }\\r\\n\\r\\n    .scm-waiting {\\r\\n        position: relative;\\r\\n    }\\r\\n    .scm-waiting__loading {\\r\\n        position: absolute;\\r\\n        top: 0;\\r\\n        left: 0;\\r\\n        bottom: 0;\\r\\n        right: 0;\\r\\n        background-color: rgba(255, 255, 255, 0.5);\\r\\n    }\\r\\n\\r\\n    .scm-loading {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    .scm-loading__spinner {\\r\\n        width: 1rem;\\r\\n        height: 1rem;\\r\\n        border-radius: 100%;\\r\\n        border: solid 2px #000;\\r\\n        border-top-color: transparent;\\r\\n        margin-right: 0.75rem;\\r\\n        animation: spin 1s linear infinite;\\r\\n    }\\r\\n    .scm-loading__text {\\r\\n        font-family: sans-serif;\\r\\n    }\\r\\n    .scm-pre {\\r\\n        font-size: 0.85rem;\\r\\n        font-family: monospace;\\r\\n        tab-size: 2;\\r\\n        -moz-tab-size: 2;\\r\\n        resize: none;\\r\\n        pointer-events: none;\\r\\n        user-select: none;\\r\\n        overflow: auto;\\r\\n    }\\r\\n\\r\\n    @keyframes spin {\\r\\n        0% {\\r\\n            transform: rotate(0deg);\\r\\n        }\\r\\n        100% {\\r\\n            transform: rotate(360deg);\\r\\n        }\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2II,iCAAmB,CAAS,WAAa,CACrC,OAAO,CAAE,IACb,CAEA,0BAAa,CACT,QAAQ,CAAE,QACd,CACA,mCAAsB,CAClB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC7C,CAEA,0BAAa,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CACA,mCAAsB,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,CACtB,gBAAgB,CAAE,WAAW,CAC7B,YAAY,CAAE,OAAO,CACrB,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,MAAM,CAAC,QAC9B,CACA,gCAAmB,CACf,WAAW,CAAE,UACjB,CACA,sBAAS,CACL,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,SAAS,CACtB,QAAQ,CAAE,CAAC,CACX,aAAa,CAAE,CAAC,CAChB,MAAM,CAAE,IAAI,CACZ,cAAc,CAAE,IAAI,CACpB,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,IACd,CAEA,WAAW,kBAAK,CACZ,EAAG,CACC,SAAS,CAAE,OAAO,IAAI,CAC1B,CACA,IAAK,CACD,SAAS,CAAE,OAAO,MAAM,CAC5B,CACJ"}'
};
const CodeMirror = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  let { value = "" } = $$props;
  let { basic = true } = $$props;
  let { lang = void 0 } = $$props;
  let { theme = void 0 } = $$props;
  let { extensions = [] } = $$props;
  let { useTab = true } = $$props;
  let { tabSize = 2 } = $$props;
  let { styles = void 0 } = $$props;
  let { lineWrapping = false } = $$props;
  let { editable = true } = $$props;
  let { readonly = false } = $$props;
  let { placeholder: placeholder$1 = void 0 } = $$props;
  let { nodebounce = false } = $$props;
  const is_browser = typeof window !== "undefined";
  createEventDispatcher();
  let element;
  let view;
  onDestroy(() => view?.destroy());
  function get_base_extensions(basic2, useTab2, tabSize2, lineWrapping2, placeholder2, editable2, readonly2, lang2) {
    const extensions2 = [
      indentUnit.of(" ".repeat(tabSize2)),
      EditorView.editable.of(editable2),
      EditorState.readOnly.of(readonly2)
    ];
    if (basic2) extensions2.push(basicSetup);
    if (useTab2) extensions2.push(keymap.of([indentWithTab]));
    if (placeholder2) extensions2.push(placeholder(placeholder2));
    if (lang2) extensions2.push(lang2);
    if (lineWrapping2) extensions2.push(EditorView.lineWrapping);
    return extensions2;
  }
  function get_theme(theme2, styles2) {
    const extensions2 = [];
    if (styles2) extensions2.push(EditorView.theme(styles2));
    if (theme2) extensions2.push(theme2);
    return extensions2;
  }
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.basic === void 0 && $$bindings.basic && basic !== void 0) $$bindings.basic(basic);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0) $$bindings.extensions(extensions);
  if ($$props.useTab === void 0 && $$bindings.useTab && useTab !== void 0) $$bindings.useTab(useTab);
  if ($$props.tabSize === void 0 && $$bindings.tabSize && tabSize !== void 0) $$bindings.tabSize(tabSize);
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0) $$bindings.styles(styles);
  if ($$props.lineWrapping === void 0 && $$bindings.lineWrapping && lineWrapping !== void 0) $$bindings.lineWrapping(lineWrapping);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0) $$bindings.editable(editable);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0) $$bindings.readonly(readonly);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder$1 !== void 0) $$bindings.placeholder(placeholder$1);
  if ($$props.nodebounce === void 0 && $$bindings.nodebounce && nodebounce !== void 0) $$bindings.nodebounce(nodebounce);
  $$result.css.add(css);
  [
    ...get_base_extensions(basic, useTab, tabSize, lineWrapping, placeholder$1, editable, readonly, lang),
    ...get_theme(theme, styles),
    ...extensions
  ];
  return `${is_browser ? `<div class="${"codemirror-wrapper " + escape(classes, true) + " svelte-kcx0g9"}"${add_attribute("this", element, 0)}></div>` : `<div class="${"scm-waiting " + escape(classes, true) + " svelte-kcx0g9"}"><div class="scm-waiting__loading scm-loading svelte-kcx0g9" data-svelte-h="svelte-1pxusly"><div class="scm-loading__spinner svelte-kcx0g9"></div> <p class="scm-loading__text svelte-kcx0g9">Loading editor...</p></div> <pre class="scm-pre cm-editor svelte-kcx0g9">${escape(value)}</pre></div>`}`;
});
const css$1 = {
  code: ".preview.svelte-1udcswz{border:0}.CodeMirror{border:1px solid #b005ff;height:auto}.preview.svelte-1udcswz{resize:vertical}",
  map: `{"version":3,"file":"WebPractice.svelte","sources":["WebPractice.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import SegmentedButton, { Segment } from '@smui/segmented-button';\\r\\n    import { Label } from '@smui/common';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import Card, {Content} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { browser } from '$app/environment';\\r\\n    import { onMount } from 'svelte';\\r\\n    import CodeMirror from \\"svelte-codemirror-editor\\";\\r\\n    import { javascript } from \\"@codemirror/lang-javascript\\";\\r\\n    import { xml } from \\"@codemirror/lang-xml\\";\\r\\n    import { css } from \\"@codemirror/lang-css\\";\\r\\n\\timport { writable } from \\"svelte/store\\";\\r\\n    import Console from './Console.svelte';\\r\\n\\t\\r\\n\\r\\n    let value = \\"\\";\\r\\n    let choices = ['HTML', 'CSS', 'JS'];\\r\\n    \\r\\n    export let selected = 'HTML';\\r\\n    export let showConsole = false;\\r\\n    let rerun = 1;\\r\\n\\r\\n    export let htmlContent = '';\\r\\n    export let cssContent = '';\\r\\n    export let jsContent = '';\\r\\n    let previewFrame;\\r\\n    let previewDocument;\\r\\n    let previewWindow;\\r\\n    \\r\\n    // Capture console.log messages\\r\\n    \\r\\n    let style, script;\\r\\n    onMount(() => {\\r\\n        updatePreview();\\r\\n    })\\r\\n    const updatePreview = () => {\\r\\n        \\r\\n        if (!browser) return;\\r\\n        previewWindow = previewFrame.contentWindow;\\r\\n        previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;\\r\\n        \\r\\n        \\r\\n        previewDocument.open();\\r\\n        \\r\\n        previewDocument.write(htmlContent);\\r\\n        style = document.createElement('style');\\r\\n        script = document.createElement('script');\\r\\n        script.type = 'text/javascript';\\r\\n        style.innerHTML = cssContent;\\r\\n        \\r\\n        previewDocument.head.appendChild(style);\\r\\n        let newJS = \`function mkPreview() {\` + jsContent + \`} mkPreview()\`\\r\\n        script.innerHTML = newJS;\\r\\n        previewDocument.body.appendChild(script);\\r\\n        \\r\\n        previewDocument.close();\\r\\n        const sandboxAttributes = \\"allow-scripts allow-same-origin\\";\\r\\n        previewFrame.setAttribute(\\"sandbox\\", sandboxAttributes);\\r\\n    };\\r\\n    function handleKeyDown(event) {\\r\\n        if (event.key === 'Tab') {\\r\\n            // Prevent moving to the next focusable element\\r\\n            event.preventDefault();\\r\\n            \\r\\n            // Get the text field\\r\\n            const textarea = event.target;\\r\\n            \\r\\n            // Insert tab character at the current cursor position\\r\\n            const start = textarea.selectionStart;\\r\\n            const end = textarea.selectionEnd;\\r\\n            \\r\\n            // Set the text value to include the tab\\r\\n            textarea.value = textarea.value.substring(0, start) + '\\\\t' + textarea.value.substring(end);\\r\\n            \\r\\n            // Move the cursor to the right of the inserted tab\\r\\n            textarea.selectionStart = textarea.selectionEnd = start + 1;\\r\\n        }\\r\\n    }\\r\\n    const runAgain = () => {\\r\\n        rerun++;\\r\\n        updatePreview();\\r\\n    }\\r\\n<\/script>\\r\\n<Card>\\r\\n    <Content>\\r\\n        <h4 style=\\"padding-left: 0.5em;background: #c9abce; color: white; margin: 0.2em 0; font-size: 1.5em;font-variant:all-petite-caps;\\">Code editor</h4>\\r\\n        <div style=\\"display:flex; gap: 1em;justify-content:space-between;\\">\\r\\n            <SegmentedButton segments={choices} let:segment singleSelect bind:selected>\\r\\n                <!-- Note: the \`segment\` property is required! -->\\r\\n                <Segment {segment}>\\r\\n                    <Label>{segment}</Label>\\r\\n                </Segment>\\r\\n            </SegmentedButton>\\r\\n            <Button variant=\\"raised\\" style=\\"background: green;\\" on:click={runAgain}>Run</Button>\\r\\n        </div>\\r\\n        \\r\\n        <br>\\r\\n        {#if selected === 'HTML'}\\r\\n            <CodeMirror \\r\\n                bind:value={htmlContent} \\r\\n                lang={xml()} \\r\\n                styles={{\\r\\n                    \\"&\\": {\\r\\n                        width: \\"100%\\",\\r\\n                        maxWidth: \\"100%\\",\\r\\n                        minHeight: \\"200px\\",\\r\\n                        maxHeight: \\"50vh\\",\\r\\n                    },\\r\\n                }}\\r\\n                lineWrapping \\r\\n            />\\r\\n        {:else if selected === 'CSS'}\\r\\n            <CodeMirror \\r\\n                bind:value={cssContent} \\r\\n                lang={css()} \\r\\n                styles={{\\r\\n                    \\"&\\": {\\r\\n                        width: \\"100%\\",\\r\\n                        maxWidth: \\"100%\\",\\r\\n                        minHeight: \\"200px\\",\\r\\n                        maxHeight: \\"50vh\\",\\r\\n                    },\\r\\n                }}\\r\\n                lineWrapping \\r\\n            />\\r\\n        {:else}\\r\\n            <CodeMirror \\r\\n                bind:value={jsContent} \\r\\n                lang={javascript()} \\r\\n                styles={{\\r\\n                    \\"&\\": {\\r\\n                        width: \\"100%\\",\\r\\n                        maxWidth: \\"100%\\",\\r\\n                        minHeight: \\"200px\\",\\r\\n                        maxHeight: \\"50vh\\",\\r\\n                    },\\r\\n                }}\\r\\n                lineWrapping \\r\\n            />\\r\\n        {/if}\\r\\n        <br>\\r\\n    </Content>\\r\\n</Card>\\r\\n<Card>\\r\\n    \\r\\n    <iframe class=\\"preview\\" bind:this={previewFrame} title=\\"\\" style=\\"width:100%; min-height:200px; max-height:50vh;\\">\\r\\n    </iframe>\\r\\n    \\r\\n    {#if showConsole && previewWindow}\\r\\n        <Content>\\r\\n            <Console extFrame={previewWindow} />\\r\\n        </Content>\\r\\n    {/if}\\r\\n</Card>\\r\\n\\r\\n\\r\\n<style>\\r\\n    .preview {\\r\\n        border: 0;\\r\\n    }\\r\\n    /* .inputFrame {\\r\\n        display: flex;\\r\\n        flex-wrap: wrap;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        margin-top: 1em;\\r\\n    } */\\r\\n    :global(.CodeMirror) {\\r\\n        border: 1px solid #b005ff;\\r\\n        height: auto;\\r\\n    }\\r\\n    .preview {\\r\\n        resize: vertical;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AA+JI,uBAAS,CACL,MAAM,CAAE,CACZ,CAQQ,WAAa,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,MAAM,CAAE,IACZ,CACA,uBAAS,CACL,MAAM,CAAE,QACZ"}`
};
const WebPractice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let choices = ["HTML", "CSS", "JS"];
  let { selected = "HTML" } = $$props;
  let { showConsole = false } = $$props;
  let { htmlContent = "" } = $$props;
  let { cssContent = "" } = $$props;
  let { jsContent = "" } = $$props;
  let previewFrame;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.showConsole === void 0 && $$bindings.showConsole && showConsole !== void 0) $$bindings.showConsole(showConsole);
  if ($$props.htmlContent === void 0 && $$bindings.htmlContent && htmlContent !== void 0) $$bindings.htmlContent(htmlContent);
  if ($$props.cssContent === void 0 && $$bindings.cssContent && cssContent !== void 0) $$bindings.cssContent(cssContent);
  if ($$props.jsContent === void 0 && $$bindings.jsContent && jsContent !== void 0) $$bindings.jsContent(jsContent);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 style="padding-left: 0.5em;background: #c9abce; color: white; margin: 0.2em 0; font-size: 1.5em;font-variant:all-petite-caps;" data-svelte-h="svelte-1rm9b3j">Code editor</h4> <div style="display:flex; gap: 1em;justify-content:space-between;">${validate_component(SegmentedButton, "SegmentedButton").$$render(
              $$result,
              {
                segments: choices,
                singleSelect: true,
                selected
              },
              {
                selected: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ segment }) => {
                  return ` ${validate_component(Segment, "Segment").$$render($$result, { segment }, {}, {
                    default: () => {
                      return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(segment)}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "raised",
                style: "background: green;"
              },
              {},
              {
                default: () => {
                  return `Run`;
                }
              }
            )}</div> <br> ${selected === "HTML" ? `${validate_component(CodeMirror, "CodeMirror").$$render(
              $$result,
              {
                lang: xml(),
                styles: {
                  "&": {
                    width: "100%",
                    maxWidth: "100%",
                    minHeight: "200px",
                    maxHeight: "50vh"
                  }
                },
                lineWrapping: true,
                value: htmlContent
              },
              {
                value: ($$value) => {
                  htmlContent = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : `${selected === "CSS" ? `${validate_component(CodeMirror, "CodeMirror").$$render(
              $$result,
              {
                lang: css$2(),
                styles: {
                  "&": {
                    width: "100%",
                    maxWidth: "100%",
                    minHeight: "200px",
                    maxHeight: "50vh"
                  }
                },
                lineWrapping: true,
                value: cssContent
              },
              {
                value: ($$value) => {
                  cssContent = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : `${validate_component(CodeMirror, "CodeMirror").$$render(
              $$result,
              {
                lang: javascript(),
                styles: {
                  "&": {
                    width: "100%",
                    maxWidth: "100%",
                    minHeight: "200px",
                    maxHeight: "50vh"
                  }
                },
                lineWrapping: true,
                value: jsContent
              },
              {
                value: ($$value) => {
                  jsContent = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`}`} <br>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<iframe class="preview svelte-1udcswz" title="" style="width:100%; min-height:200px; max-height:50vh;"${add_attribute("this", previewFrame, 0)} data-svelte-h="svelte-rmd5tt"></iframe> ${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  WebPractice as W
};
