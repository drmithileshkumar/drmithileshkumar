import { c as create_ssr_component, d as subscribe, f as add_attribute, e as escape, v as validate_component, j as null_to_empty } from "../../../../chunks/index3.js";
import { S as Select } from "../../../../chunks/Select.js";
import { d as chapters, e as sections, b as presentationMode, c as currentSlide, s as slideCounter, p as presentation, o as overlay, a as autoScroll, f as selectedSection, g as selectedChapter } from "../../../../chunks/stores2.js";
import { C as CanvasBar, a as Canvas, P as Presenter } from "../../../../chunks/Presenter.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-6l1wjv{display:grid;grid-template-columns:auto 1fr;max-width:600px}.maths.svelte-6l1wjv{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-6l1wjv{display:flex;height:1em;margin:0.5em 0;align-items:center;flex-direction:row}.container.svelte-6l1wjv{display:grid;grid-template-columns:1em 1fr 1em;position:relative;height:600px}aside.svelte-6l1wjv{background-color:rgba(230, 228, 228, 0.25);cursor:pointer;width:1em}.overlay.svelte-6l1wjv{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-6l1wjv::-webkit-scrollbar{width:0;height:0}.presenter.svelte-6l1wjv{position:absolute;right:35px;top:0;z-index:10}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presentationMode, $$unsubscribe_presentationMode;
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_presentation;
  let $overlay, $$unsubscribe_overlay;
  let $$unsubscribe_autoScroll;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => value);
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_autoScroll = subscribe(autoScroll, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  let checkbox;
  let W;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-jatvq7_START --><!-- HEAD_svelte-jatvq7_END -->`, ""}
    ${!$presentationMode ? `<span class="${"noMenu"}"${add_attribute("this", $overlay, 0)}></span>` : ``}
    <div class="${"maths " + escape($presentationMode ? "noMenu" : "", true) + " svelte-6l1wjv"}"><div class="${"presentationMode svelte-6l1wjv"}"><label style="${"display:flex;align-items:center;"}"><input style="${"display:none;"}" type="${"checkbox"}"${add_attribute("this", checkbox, 0)}${add_attribute("checked", $presentationMode, 1)}> 
                <span class="${"material-icons"}" style="${"color: " + escape($presentationMode ? "teal" : "black", true)}">slideshow</span></label>
            ${!$presentationMode ? `<nav class="${"svelte-6l1wjv"}">${validate_component(Select, "Select").$$render(
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
        <div class="${escape(null_to_empty($presentationMode ? "container noMenu" : ""), true) + " svelte-6l1wjv"}">${$presentationMode ? `<aside class="${"back noMenu svelte-6l1wjv"}"></aside>` : ``}
            
            ${$presentationMode ? `<div class="${"absolute overlay noMenu svelte-6l1wjv"}"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div>
                <div class="${"presenter noMenu svelte-6l1wjv"}">${validate_component(Presenter, "Presenter").$$render($$result, {}, {}, {})}</div>` : ``}
            ${slots.default ? slots.default({ class: $presentationMode ? "noMenu" : "" }) : ``}
            ${$presentationMode ? `<aside class="${"next noMenu svelte-6l1wjv"}"></aside>` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_presentation();
  $$unsubscribe_overlay();
  $$unsubscribe_autoScroll();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  return $$rendered;
});
export {
  Layout as default
};
