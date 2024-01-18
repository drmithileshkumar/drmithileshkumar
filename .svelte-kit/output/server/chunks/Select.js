import { c as create_ssr_component, p as createEventDispatcher, e as escape, d as spread, h as escape_object } from "./ssr.js";
/* empty css                                     */
const css = {
  code: "fieldset.svelte-5yji2q{border-radius:5px;border:1px solid;padding:0.5em 0.2em;position:relative}legend.svelte-5yji2q{font-size:0.7em}.value.svelte-5yji2q{padding:0 0.5em;font-weight:bold;display:flex;cursor:pointer;height:1.5em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}li.svelte-5yji2q{cursor:pointer;padding:0.5em 0;font-weight:300;font-size:0.8em}li.svelte-5yji2q:hover,li.svelte-5yji2q:focus{font-weight:500}ul.svelte-5yji2q{position:absolute;list-style:none;box-shadow:0 0 3px rgb(199, 199, 199);width:100%;margin:0;padding:0.5em 0.5em;z-index:100;background:white;margin-top:0.3em;overflow:auto;max-height:90vh}",
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
  return ` <fieldset class="svelte-5yji2q"><legend class="svelte-5yji2q">${escape(label)}</legend> <span${spread([{ class: "value" }, escape_object($$props)], { classes: "svelte-5yji2q" })}>${escape(value)}</span> ${``} </fieldset>`;
});
export {
  Select as S
};
