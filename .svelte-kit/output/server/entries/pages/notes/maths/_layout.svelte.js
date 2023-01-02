import { c as create_ssr_component, d as subscribe, v as validate_component, f as add_attribute } from "../../../../chunks/index.js";
import { S as Select } from "../../../../chunks/Select.js";
import { d as chapters, e as sections, c as currentSlide, s as slideCounter, p as presentation, o as overlay, a as autoScroll, f as selectedSection, g as selectedChapter, b as presentationMode } from "../../../../chunks/stores2.js";
import { C as CanvasBar, a as Canvas } from "../../../../chunks/Canvas.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1yl14qm{display:grid;grid-template-columns:1fr 1fr;flex-direction:row;align-items:center;justify-content:center;margin:auto;margin-top:0.5em;max-width:600px}.maths.svelte-1yl14qm{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-1yl14qm{display:flex;height:1em;margin-bottom:0.5em}.container.svelte-1yl14qm{display:grid;grid-template-columns:1em 1fr 1em;position:relative}aside.svelte-1yl14qm{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.overlay.svelte-1yl14qm{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-1yl14qm::-webkit-scrollbar{width:0;height:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_presentation;
  let $overlay, $$unsubscribe_overlay;
  let $$unsubscribe_autoScroll;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $presentationMode, $$unsubscribe_presentationMode;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => value);
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_autoScroll = subscribe(autoScroll, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  let W;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-jatvq7_START --><!-- HEAD_svelte-jatvq7_END -->`, ""}
    ${!$presentationMode ? `<nav class="${"svelte-1yl14qm"}">${validate_component(Select, "Select").$$render(
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
    )}</nav>` : ``}
        
    <div class="${"maths svelte-1yl14qm"}"><div class="${"presentationMode svelte-1yl14qm"}"><label style="${"display:flex;align-items:center;"}"><input type="${"checkbox"}"${add_attribute("checked", $presentationMode, 1)}> <span class="${"material-icons"}">slideshow</span></label>
            ${$presentationMode ? `${validate_component(CanvasBar, "CanvasBar").$$render($$result, {}, {}, {})}` : ``}</div>
        <div class="${"container svelte-1yl14qm"}">${$presentationMode ? `<aside class="${"back svelte-1yl14qm"}"></aside>` : ``}
            ${!$presentationMode ? `<span${add_attribute("this", $overlay, 0)}></span>` : ``}
            ${$presentationMode ? `<div class="${"absolute overlay svelte-1yl14qm"}"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div>` : ``}
            ${slots.default ? slots.default({}) : ``}
            ${$presentationMode ? `<aside class="${"next svelte-1yl14qm"}"></aside>` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_presentation();
  $$unsubscribe_overlay();
  $$unsubscribe_autoScroll();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_presentationMode();
  return $$rendered;
});
export {
  Layout as default
};
