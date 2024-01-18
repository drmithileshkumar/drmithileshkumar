import { c as create_ssr_component, b as subscribe, e as escape, l as add_attribute, v as validate_component } from './ssr-GucKmJ_k.js';
import { p as presentationMode, c as currentSlide, s as slideCounter, a as presentation, o as overlay, b as autoScroll, f as selectedSection, g as selectedChapter } from './stores3-ZnNac0wf.js';
import './client-_MkdHwD5.js';
import { C as CanvasBar, a as Canvas, P as Presenter } from './Presenter-BQTIirDp.js';
import './index2-yB1Itf2W.js';
import './exports-mq_1S73-.js';

const css = {
  code: ".maths.svelte-131twjr{width:100%;margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-131twjr{display:flex;height:1em;margin:0.5em 0;align-items:center;flex-direction:row}.container.svelte-131twjr{display:grid;grid-template-columns:1em 1fr 1em;position:relative}aside.svelte-131twjr{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.overlay.svelte-131twjr{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:90vh;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-131twjr::-webkit-scrollbar{width:0;height:0}.presenter.svelte-131twjr{position:absolute;right:35px;top:0;z-index:10}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presentationMode, $$unsubscribe_presentationMode;
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_presentation;
  let $overlay, $$unsubscribe_overlay;
  let $$unsubscribe_autoScroll;
  let $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => value);
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_autoScroll = subscribe(autoScroll, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  let W;
  $$result.css.add(css);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_presentation();
  $$unsubscribe_overlay();
  $$unsubscribe_autoScroll();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  return `${$$result.head += `<!-- HEAD_svelte-jatvq7_START --><!-- HEAD_svelte-jatvq7_END -->`, ""} <div class="${"maths " + escape($presentationMode ? "noMenu" : "", true) + " svelte-131twjr"}"><div class="presentationMode svelte-131twjr"><label style="display:flex;align-items:center;"><input type="checkbox"${add_attribute("checked", $presentationMode, 1)}> <span class="material-icons" data-svelte-h="svelte-1fkhajr">slideshow</span></label>  ${$presentationMode ? `${validate_component(CanvasBar, "CanvasBar").$$render($$result, {}, {}, {})}` : ``}</div> <div class="${"container " + escape($presentationMode ? "noMenu" : "", true) + " svelte-131twjr"}">${$presentationMode ? ` <aside class="back noMenu svelte-131twjr"></aside>` : ``} ${!$presentationMode ? `<span class="noMenu"${add_attribute("this", $overlay, 0)}></span>` : ``} ${$presentationMode ? `<div class="absolute overlay noMenu svelte-131twjr"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div> <div class="presenter noMenu svelte-131twjr">${validate_component(Presenter, "Presenter").$$render($$result, {}, {}, {})}</div>` : ``} ${slots.default ? slots.default({ class: $presentationMode ? "noMenu" : "" }) : ``} ${$presentationMode ? ` <aside class="next noMenu svelte-131twjr"></aside>` : ``}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-hN_FvtU5.js.map
