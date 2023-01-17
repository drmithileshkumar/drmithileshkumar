import { c as create_ssr_component, k as createEventDispatcher, e as escape, o as spread, p as escape_object } from './index3-f5b946c7.js';

/* empty css                                      */const css = {
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
<fieldset class="${"svelte-lbk7l5"}"><legend class="${"svelte-lbk7l5"}">${escape(label)}</legend>
    <span${spread([{ class: "value" }, escape_object($$props)], { classes: "svelte-lbk7l5" })}>${escape(value)}</span>
    ${``}</fieldset>`;
});

export { Select as S };
//# sourceMappingURL=Select-35c821c1.js.map
