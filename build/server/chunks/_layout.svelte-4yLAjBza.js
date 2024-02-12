import { a as subscribe } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, d as add_attribute, v as validate_component } from './ssr-APL1hDOv.js';
import './client-_MkdHwD5.js';
import { c as currentSlide, s as slideCounter, p as presentation, o as overlay, a as autoScroll, b as presentationMode } from './stores4-oqF8qUAY.js';
import { C as CanvasBar, a as Canvas, P as Presenter } from './Presenter-XNfzxPE7.js';
import './exports-mq_1S73-.js';
import './index2-NBMbjtFx.js';

const css = {
  code: ".container.svelte-ys2ybb{display:grid;grid-template-columns:1em 1fr 1em;position:relative}aside.svelte-ys2ybb{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.overlay.svelte-ys2ybb{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-ys2ybb::-webkit-scrollbar{width:0;height:0}.questions.svelte-ys2ybb{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-ys2ybb{display:flex;height:1em;margin-bottom:0.5em}.presenter.svelte-ys2ybb{position:absolute;right:35px;bottom:0;z-index:10}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_presentation;
  let $overlay, $$unsubscribe_overlay;
  let $$unsubscribe_autoScroll;
  let $presentationMode, $$unsubscribe_presentationMode;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => value);
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_autoScroll = subscribe(autoScroll, (value) => value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  let W;
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_presentation();
  $$unsubscribe_overlay();
  $$unsubscribe_autoScroll();
  $$unsubscribe_presentationMode();
  return `${$$result.head += `<!-- HEAD_svelte-jatvq7_START --><!-- HEAD_svelte-jatvq7_END -->`, ""} <div class="questions svelte-ys2ybb"><div class="presentationMode svelte-ys2ybb"><label style="display:flex;align-items:center;"><input type="checkbox"${add_attribute("checked", $presentationMode, 1)}> <span class="material-icons" data-svelte-h="svelte-1fkhajr">slideshow</span></label> ${$presentationMode ? `${validate_component(CanvasBar, "CanvasBar").$$render($$result, {}, {}, {})}` : ``}</div> <div class="container svelte-ys2ybb">${$presentationMode ? ` <aside class="back svelte-ys2ybb"></aside>` : ``} ${!$presentationMode ? `<span${add_attribute("this", $overlay, 0)}></span>` : ``} ${$presentationMode ? `<div class="absolute overlay svelte-ys2ybb"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div> <div class="presenter svelte-ys2ybb">${validate_component(Presenter, "Presenter").$$render($$result, {}, {}, {})}</div>` : ``} ${slots.default ? slots.default({}) : ``} ${$presentationMode ? ` <aside class="next svelte-ys2ybb"></aside>` : ``}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-4yLAjBza.js.map
