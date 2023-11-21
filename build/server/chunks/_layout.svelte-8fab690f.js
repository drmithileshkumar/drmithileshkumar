import { c as create_ssr_component, b as subscribe, v as validate_component } from './index3-8ac84804.js';
import { S as Select } from './Select-ff3d738b.js';
import { d as chapters12, g as generators, s as selectedGenerator, a as selectedChapter } from './stores3-ae33d5e6.js';
import './index2-51193d15.js';

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
        style: "max-width: 600px; background:black;color:white;",
        label: "Chapter",
        options: chapters12,
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
//# sourceMappingURL=_layout.svelte-8fab690f.js.map
