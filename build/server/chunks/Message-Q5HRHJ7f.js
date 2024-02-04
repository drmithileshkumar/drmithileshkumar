import { c as create_ssr_component } from './ssr-QYhyCQFk.js';

/* empty css                                      */
const css = {
  code: ".message.svelte-5cmsvs{display:flex;padding:0.5em 1em;align-items:center;flex-direction:row;gap:0.5em;justify-content:space-between;background:rgb(255, 255, 225);font-weight:400;font-size:0.9em;bottom:2em;margin-top:1em;margin-bottom:1em}span.svelte-5cmsvs{cursor:pointer}span.svelte-5cmsvs:hover{font-weight:600}",
  map: null
};
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = true } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  return `${open ? `<div class="message svelte-5cmsvs"><div class="body">${slots.default ? slots.default({}) : ``}</div> <span class="material-icons svelte-5cmsvs" style="color:red;" data-svelte-h="svelte-17s285c">close</span></div>` : ``}`;
});

export { Message as M };
//# sourceMappingURL=Message-Q5HRHJ7f.js.map
