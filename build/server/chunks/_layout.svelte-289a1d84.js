import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, v as validate_component } from './index-caf19234.js';
import { S as Select } from './Select-7e061f8e.js';
import { d as chapters, e as sections, b as presentationMode, c as currentSlide, s as slideCounter, p as presentation, o as overlay, a as autoScroll, f as selectedSection, g as selectedChapter } from './stores2-60a97389.js';
import { C as CanvasBar, a as Canvas, P as Presenter } from './Presenter-c8e8ee38.js';
import './index3-3865ea4a.js';

const css = {
  code: "nav.svelte-2gnmam{display:grid;grid-template-columns:auto 1fr;max-width:600px}.maths.svelte-2gnmam{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-2gnmam{display:flex;height:1em;margin:0.5em 0;align-items:center;flex-direction:row}.container.svelte-2gnmam{display:grid;grid-template-columns:1em 1fr 1em;position:relative}aside.svelte-2gnmam{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.overlay.svelte-2gnmam{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-2gnmam::-webkit-scrollbar{width:0;height:0}.presenter.svelte-2gnmam{position:absolute;right:35px;top:0;z-index:10}.noMenu.svelte-2gnmam{touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}",
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
  let W;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-jatvq7_START --><!-- HEAD_svelte-jatvq7_END -->`, ""}
        
    <div class="${"maths " + escape($presentationMode ? "noMenu" : "", true) + " svelte-2gnmam"}"><div class="${"presentationMode svelte-2gnmam"}"><label style="${"display:flex;align-items:center;"}"><input type="${"checkbox"}"${add_attribute("checked", $presentationMode, 1)}> <span class="${"material-icons"}">slideshow</span></label>
            ${!$presentationMode ? `<nav class="${"svelte-2gnmam"}">${validate_component(Select, "Select").$$render(
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
        <div class="${"container svelte-2gnmam"}">${$presentationMode ? `
                <aside class="${"back svelte-2gnmam"}"></aside>` : ``}
            ${!$presentationMode ? `<span${add_attribute("this", $overlay, 0)}></span>` : ``}
            ${$presentationMode ? `<div class="${"absolute overlay svelte-2gnmam"}"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div>
                <div class="${"presenter svelte-2gnmam"}">${validate_component(Presenter, "Presenter").$$render($$result, {}, {}, {})}</div>` : ``}
            ${slots.default ? slots.default({}) : ``}
            ${$presentationMode ? `
                <aside class="${"next svelte-2gnmam"}"></aside>` : ``}</div></div>`;
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

export { Layout as default };
//# sourceMappingURL=_layout.svelte-289a1d84.js.map
