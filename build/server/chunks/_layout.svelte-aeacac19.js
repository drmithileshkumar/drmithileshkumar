import { c as create_ssr_component, d as subscribe, v as validate_component } from './index-2bbd6063.js';
import { S as Select } from './Select-5e1a294d.js';
import { c as chapters, s as sections, a as selectedSection, b as selectedChapter } from './stores2-c0701737.js';
import './index3-dd48deaa.js';

const css = {
  code: "nav.svelte-11w5jy4{display:grid;grid-template-columns:1fr 1fr;flex-direction:row;align-items:center;justify-content:center;margin:auto;margin-top:0.5em;max-width:600px}.maths.svelte-11w5jy4{max-width:600px;margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedSection, $$unsubscribe_selectedSection;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-jatvq7_START --><!-- HEAD_svelte-jatvq7_END -->`, ""}
    <nav class="${"svelte-11w5jy4"}">${validate_component(Select, "Select").$$render(
      $$result,
      {
        options: chapters,
        label: "Chapter",
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
        ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options: sections[$selectedChapter],
        label: "Section",
        value: $selectedSection
      },
      {
        value: ($$value) => {
          $selectedSection = $$value;
          $$settled = false;
        }
      },
      {}
    )}</nav>
    <div class="${"maths svelte-11w5jy4"}">${slots.default ? slots.default({}) : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-aeacac19.js.map
