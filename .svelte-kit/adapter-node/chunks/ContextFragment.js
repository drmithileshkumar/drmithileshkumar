import { a as subscribe, b as set_store_value } from "./utils.js";
import { c as create_ssr_component, s as setContext, o as onDestroy } from "./ssr2.js";
import { w as writable } from "./index2.js";
const ContextFragment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeValue, $$unsubscribe_storeValue;
  let { key } = $$props;
  let { value } = $$props;
  const storeValue = writable(value);
  $$unsubscribe_storeValue = subscribe(storeValue, (value2) => $storeValue = value2);
  setContext(key, storeValue);
  onDestroy(() => {
    storeValue.set(void 0);
  });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  set_store_value(storeValue, $storeValue = value, $storeValue);
  $$unsubscribe_storeValue();
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  ContextFragment as C
};
