import { c as create_ssr_component, d as subscribe, v as validate_component } from "../../../chunks/index.js";
import { S as Select } from "../../../chunks/Select.js";
import { c as chapters, g as generators, s as selectedGenerator, a as selectedChapter } from "../../../chunks/stores3.js";
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
