import { c as create_ssr_component, d as subscribe, f as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { S as Select } from "../../../../chunks/Select.js";
import { d as chapters, e as sections, c as currentSlide, s as slideCounter, p as presentation, o as overlay, a as autoScroll, f as selectedSection, g as selectedChapter, b as presentationMode } from "../../../../chunks/stores2.js";
import { C as CanvasBar, a as Canvas, P as Presenter } from "../../../../chunks/Presenter.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-192imwu{display:grid;grid-template-columns:auto 1fr;max-width:600px}.maths.svelte-192imwu{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-192imwu{display:flex;height:1em;margin:0.5em 0;align-items:center;flex-direction:row}.container.svelte-192imwu{display:grid;grid-template-columns:1em 1fr 1em;position:relative}aside.svelte-192imwu{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.overlay.svelte-192imwu{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-192imwu::-webkit-scrollbar{width:0;height:0}.presenter.svelte-192imwu{position:absolute;right:35px;bottom:0;z-index:10}",
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
        
    <div class="${"maths svelte-192imwu"}"><div class="${"presentationMode svelte-192imwu"}"><label style="${"display:flex;align-items:center;"}"><input type="${"checkbox"}"${add_attribute("checked", $presentationMode, 1)}> <span class="${"material-icons"}">slideshow</span></label>
            ${!$presentationMode ? `<nav class="${"svelte-192imwu"}">${validate_component(Select, "Select").$$render(
      $$result,
      {
        style: "width: 35vw;",
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
        style: "width: 35vw;",
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
            ${$presentationMode ? `${validate_component(CanvasBar, "CanvasBar").$$render($$result, {}, {}, {})}` : ``}</div>
        <div class="${"container svelte-192imwu"}">${$presentationMode ? `
                <aside class="${"back svelte-192imwu"}"></aside>` : ``}
            ${!$presentationMode ? `<span${add_attribute("this", $overlay, 0)}></span>` : ``}
            ${$presentationMode ? `<div class="${"absolute overlay svelte-192imwu"}"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div>
                <div class="${"presenter svelte-192imwu"}">${validate_component(Presenter, "Presenter").$$render($$result, {}, {}, {})}</div>` : ``}
            ${slots.default ? slots.default({}) : ``}
            ${$presentationMode ? `
                <aside class="${"next svelte-192imwu"}"></aside>` : ``}</div></div>`;
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
