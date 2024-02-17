import { c as create_ssr_component, h as add_attribute } from './ssr-HSn4Y_Gl.js';

const css = {
  code: "section.svelte-epvtsn{display:flex;justify-content:space-between;background-color:rgba(0, 0, 0, 0.1)}a.svelte-epvtsn{text-decoration:none;padding:0.3em 0.5em;font-variant:small-caps}",
  map: null
};
const CourseNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentNav } = $$props;
  let { currentUrl } = $$props;
  if ($$props.contentNav === void 0 && $$bindings.contentNav && contentNav !== void 0)
    $$bindings.contentNav(contentNav);
  if ($$props.currentUrl === void 0 && $$bindings.currentUrl && currentUrl !== void 0)
    $$bindings.currentUrl(currentUrl);
  $$result.css.add(css);
  return `<section class="svelte-epvtsn"><a${add_attribute("href", contentNav[currentUrl].previous, 0)} class="svelte-epvtsn">Previous</a> <a${add_attribute("href", contentNav[currentUrl].next, 0)} class="svelte-epvtsn">Next</a></section>`;
});

export { CourseNavigation as C };
//# sourceMappingURL=CourseNavigation-NZQ5ttW5.js.map
