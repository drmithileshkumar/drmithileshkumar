import { c as create_ssr_component, a as get_current_component, h as setContext, s as spread, b as escape_attribute_value, d as escape_object, f as add_attribute, k as each, v as validate_component, g as getContext, i as createEventDispatcher, o as onDestroy, e as escape } from "./ssr.js";
import { c as compute_rest_props, s as subscribe, b as set_store_value } from "./utils.js";
import { w as writable } from "./index2.js";
import { f as forwardEventsBuilder, c as classMap } from "./classAdderBuilder.js";
import { C as ContextFragment } from "./ContextFragment.js";
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
import { javascript } from "@codemirror/lang-javascript";
import { xml } from "@codemirror/lang-xml";
import { css as css$2 } from "@codemirror/lang-css";
const SegmentedButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "segments", "key", "singleSelect", "selected", "getElement"]);
  let $singleSelectStore, $$unsubscribe_singleSelectStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { segments = [] } = $$props;
  let { key = (segment) => segment } = $$props;
  let { singleSelect = false } = $$props;
  let { selected = singleSelect ? void 0 : [] } = $$props;
  let element;
  let initialSelected = segments.map((segmentId) => singleSelect && selected === segmentId || !singleSelect && selected.indexOf(segmentId) !== -1);
  setContext("SMUI:icon:context", "segmented-button");
  setContext("SMUI:label:context", "segmented-button");
  const singleSelectStore = writable(singleSelect);
  $$unsubscribe_singleSelectStore = subscribe(singleSelectStore, (value) => $singleSelectStore = value);
  setContext("SMUI:segmented-button:singleSelect", singleSelectStore);
  singleSelect ? selected : new Set(selected);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0)
    $$bindings.segments(segments);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.singleSelect === void 0 && $$bindings.singleSelect && singleSelect !== void 0)
    $$bindings.singleSelect(singleSelect);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  set_store_value(singleSelectStore, $singleSelectStore = singleSelect, $singleSelectStore);
  $$unsubscribe_singleSelectStore();
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-segmented-button": true,
          "mdc-segmented-button--single-select": singleSelect
        }))
      },
      {
        role: escape_attribute_value(singleSelect ? "radiogroup" : "group")
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${each(segments, (segment, i) => {
    return `${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:segmented-button:segment:index",
        value: i
      },
      {},
      {
        default: () => {
          return `${validate_component(ContextFragment, "ContextFragment").$$render(
            $$result,
            {
              key: "SMUI:segmented-button:segment:initialSelected",
              value: initialSelected[i]
            },
            {},
            {
              default: () => {
                return `${slots.default ? slots.default({ segment }) : ``} `;
              }
            }
          )} `;
        }
      }
    )}`;
  })} </div>`;
});
const Segment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "segment", "ripple", "touch", "selected", "getElement"]);
  let $$unsubscribe_index;
  let $$unsubscribe_singleSelect;
  let $initialSelectedStore, $$unsubscribe_initialSelectedStore;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { segment: segmentId } = $$props;
  let { ripple = true } = $$props;
  let { touch = false } = $$props;
  const initialSelectedStore = getContext("SMUI:segmented-button:segment:initialSelected");
  $$unsubscribe_initialSelectedStore = subscribe(initialSelectedStore, (value) => $initialSelectedStore = value);
  let { selected = uninitializedValue } = $$props;
  if (isUninitializedValue(selected)) {
    selected = $initialSelectedStore;
  }
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  const singleSelect = getContext("SMUI:segmented-button:singleSelect");
  $$unsubscribe_singleSelect = subscribe(singleSelect, (value) => value);
  const index = getContext("SMUI:segmented-button:segment:index");
  $$unsubscribe_index = subscribe(index, (value) => value);
  if (!segmentId) {
    throw new Error("The segment property is required! It should be passed down from the SegmentedButton to the Segment.");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.segment === void 0 && $$bindings.segment && segmentId !== void 0)
    $$bindings.segment(segmentId);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  $$unsubscribe_index();
  $$unsubscribe_singleSelect();
  $$unsubscribe_initialSelectedStore();
  return `<button${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-segmented-button__segment": true,
          "mdc-segmented-button__segment--touch": touch,
          "mdc-segmented-button__segment--selected": selected,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      {
        role: escape_attribute_value(singleSelect ? "radio" : void 0)
      },
      {
        "aria-pressed": escape_attribute_value(!singleSelect ? selected ? "true" : "false" : void 0)
      },
      {
        "aria-checked": escape_attribute_value(singleSelect ? selected ? "true" : "false" : void 0)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${ripple ? `<div class="mdc-segmented-button__ripple"></div>` : ``}${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-segmented-button__segment__touch"></div>` : ``}</button>`;
});
const css = {
  code: ".codemirror-wrapper.svelte-kcx0g9 .cm-focused{outline:none}.scm-waiting.svelte-kcx0g9{position:relative}.scm-waiting__loading.svelte-kcx0g9{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(255, 255, 255, 0.5)}.scm-loading.svelte-kcx0g9{display:flex;align-items:center;justify-content:center}.scm-loading__spinner.svelte-kcx0g9{width:1rem;height:1rem;border-radius:100%;border:solid 2px #000;border-top-color:transparent;margin-right:0.75rem;animation:svelte-kcx0g9-spin 1s linear infinite}.scm-loading__text.svelte-kcx0g9{font-family:sans-serif}.scm-pre.svelte-kcx0g9{font-size:0.85rem;font-family:monospace;tab-size:2;-moz-tab-size:2;resize:none;pointer-events:none;user-select:none;overflow:auto}@keyframes svelte-kcx0g9-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
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
    if (basic2)
      extensions2.push(basicSetup);
    if (useTab2)
      extensions2.push(keymap.of([indentWithTab]));
    if (placeholder2)
      extensions2.push(placeholder(placeholder2));
    if (lang2)
      extensions2.push(lang2);
    if (lineWrapping2)
      extensions2.push(EditorView.lineWrapping);
    return extensions2;
  }
  function get_theme(theme2, styles2) {
    const extensions2 = [];
    if (styles2)
      extensions2.push(EditorView.theme(styles2));
    if (theme2)
      extensions2.push(theme2);
    return extensions2;
  }
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.basic === void 0 && $$bindings.basic && basic !== void 0)
    $$bindings.basic(basic);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.useTab === void 0 && $$bindings.useTab && useTab !== void 0)
    $$bindings.useTab(useTab);
  if ($$props.tabSize === void 0 && $$bindings.tabSize && tabSize !== void 0)
    $$bindings.tabSize(tabSize);
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  if ($$props.lineWrapping === void 0 && $$bindings.lineWrapping && lineWrapping !== void 0)
    $$bindings.lineWrapping(lineWrapping);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder$1 !== void 0)
    $$bindings.placeholder(placeholder$1);
  if ($$props.nodebounce === void 0 && $$bindings.nodebounce && nodebounce !== void 0)
    $$bindings.nodebounce(nodebounce);
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
  map: null
};
const WebPractice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let choices = ["HTML", "CSS", "JS"];
  let selected = "HTML";
  let { htmlContent = "" } = $$props;
  let { cssContent = "" } = $$props;
  let { jsContent = "" } = $$props;
  let previewFrame;
  if ($$props.htmlContent === void 0 && $$bindings.htmlContent && htmlContent !== void 0)
    $$bindings.htmlContent(htmlContent);
  if ($$props.cssContent === void 0 && $$bindings.cssContent && cssContent !== void 0)
    $$bindings.cssContent(cssContent);
  if ($$props.jsContent === void 0 && $$bindings.jsContent && jsContent !== void 0)
    $$bindings.jsContent(jsContent);
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
        return `<iframe class="preview svelte-1udcswz" style="width:100%; min-height:200px; max-height:50vh;"${add_attribute("this", previewFrame, 0)} data-svelte-h="svelte-yzavse"></iframe>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  WebPractice as W
};
