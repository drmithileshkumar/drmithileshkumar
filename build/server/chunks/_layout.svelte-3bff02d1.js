import { c as create_ssr_component, d as subscribe, v as validate_component } from './index-caf19234.js';
import { S as Select } from './Select-4711ce62.js';
import { c as chapters, g as generators, s as selectedGenerator, a as selectedChapter } from './stores3-67e0e9ff.js';
import './index3-3865ea4a.js';

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

export { Layout as default };
//# sourceMappingURL=_layout.svelte-3bff02d1.js.map
