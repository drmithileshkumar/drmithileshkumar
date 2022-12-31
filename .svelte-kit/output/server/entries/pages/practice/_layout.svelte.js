import { c as create_ssr_component, f as createEventDispatcher, h as spread, i as escape_object, e as escape, d as subscribe, v as validate_component } from "../../../chunks/index.js";
import { c as chapters, g as generators, s as selectedGenerator, a as selectedChapter } from "../../../chunks/stores2.js";
const Select_svelte_svelte_type_style_lang = "";
const css = {
  code: "fieldset.svelte-lbk7l5{border-radius:5px;border:1px solid;padding:0.5em 0.2em;position:relative}legend.svelte-lbk7l5{font-size:0.7em}.value.svelte-lbk7l5{padding:0 0.5em;font-weight:bold;display:flex;cursor:pointer;height:1.5em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}li.svelte-lbk7l5{cursor:pointer;padding:0.5em 0;font-weight:300;font-size:0.8em}li.svelte-lbk7l5:hover,li.svelte-lbk7l5:focus{font-weight:500}ul.svelte-lbk7l5{position:absolute;list-style:none;box-shadow:0 0 3px black;width:100%;margin:0;padding:0.5em 0.5em;z-index:100;background:white;margin-top:0.3em;overflow:auto;max-height:90vh}",
  map: null
};
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { options = [] } = $$props;
  let { label = "" } = $$props;
  let { value } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `
<fieldset${spread([escape_object($$props)], { classes: "svelte-lbk7l5" })}><legend class="${"svelte-lbk7l5"}">${escape(label)}</legend>
    <span class="${"value svelte-lbk7l5"}">${escape(value)}</span>
    ${``}</fieldset>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_generators;
  let $$unsubscribe_selectedGenerator;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  $$unsubscribe_generators = subscribe(generators, (value) => value);
  $$unsubscribe_selectedGenerator = subscribe(selectedGenerator, (value) => value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Select, "Select").$$render(
      $$result,
      {
        style: "max-width: 600px;",
        label: "Chapter",
        options: chapters,
        value: $selectedChapter
      },
      {
        value: ($$value) => {
          $selectedChapter = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${slots.default ? slots.default({}) : ``}`;
  } while (!$$settled);
  $$unsubscribe_generators();
  $$unsubscribe_selectedGenerator();
  $$unsubscribe_selectedChapter();
  return $$rendered;
});
export {
  Layout as default
};
