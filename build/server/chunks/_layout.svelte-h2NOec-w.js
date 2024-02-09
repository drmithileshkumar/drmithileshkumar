import { c as create_ssr_component, b as subscribe, l as add_attribute, e as escape, v as validate_component, d as null_to_empty } from './ssr-QYhyCQFk.js';
import { S as Select } from './Select-zy2r9Cey.js';
import { d as chapters, e as sections, c as currentSlide, p as presentationMode, s as slideCounter, a as presentation, o as overlay, b as autoScroll, f as selectedSection, g as selectedChapter } from './stores3-N3vs8YOS.js';
import './client-_MkdHwD5.js';
import { C as CanvasBar, a as Canvas, P as Presenter } from './Presenter-3mc-O8u0.js';
import './index2-2iq6SjbL.js';
import './exports-mq_1S73-.js';

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  duplicate() {
    return new Point(this.x, this.y);
  }
  length(origin = new Point()) {
    return Math.sqrt((this.x - origin.x) * (this.x - origin.x) + (this.y - origin.y) * (this.y - origin.y));
  }
  sqlength() {
    return this.x * this.x + this.y * this.y;
  }
  angle(origin = new Point()) {
    let theta = Math.atan(Math.abs((this.y - origin.y) / (this.x - origin.x)));
    if (this.x >= origin.x && this.y >= origin.y) {
      theta = theta;
    }
    if (this.x < origin.x && this.y >= origin.y) {
      theta = Math.PI - theta;
    }
    if (this.x < origin.x && this.y < origin.y) {
      theta = Math.PI + theta;
    }
    if (this.x >= origin.x && this.y < origin.y) {
      theta = 2 * Math.PI - theta;
    }
    return theta;
  }
  isZero() {
    return this.x == 0 && this.y == 0;
  }
  scale(l) {
    return new Point(this.x * l, this.y * l);
  }
  a(q) {
    return new Point(this.x + q.x, this.y + q.y);
  }
  s(q) {
    return new Point(this.x - q.x, this.y - q.y);
  }
  m(q) {
    return new Point(this.x * q.x - this.y * q.y, this.x * q.y + this.y * q.x);
  }
  d(q) {
    if (q.isZero())
      return "Infinity";
    else {
      let r = new Point(this.x * q.x + this.y * q.y, -this.x * q.y + this.y * q.x);
      return r.scale(r.sqlength());
    }
  }
  dot(q) {
    return this.x * q.x + this.y * q.y;
  }
  adot(q) {
    return this.x * q.x - this.y * q.y;
  }
  onLine(p1, p2) {
    return (p2.y - p1.y) * (this.x - p1.x) - (p2.x - p1.x) * (this.y - p1.y);
  }
  reflect(q) {
    let r = this.s(q);
    return q.a(r.scale(-1));
  }
  reflectControl(q, r) {
    let t = this.s(q);
    if (t.isZero())
      return r;
    let u = t.scale(-1 / t.length());
    let t1 = r.s(q);
    if (t1.isZero())
      return r;
    return q.a(u.scale(t1.length()));
  }
  rotate(theta, origin = new Point()) {
    let theta0 = this.angle(origin);
    let r = this.length(origin);
    let np = origin.a(new Point(r * Math.cos(theta + theta0), r * Math.sin(theta + theta0)));
    return np;
  }
  translate(dx, dy) {
    return new Point(this.x + dx, this.y + dy);
  }
  scalet(lx = 1, ly = 1) {
    return new Point(lx * this.x, ly * this.y);
  }
  transform(tm) {
    let x = this.x * tm.a + this.y * tm.b + tm.e;
    let y = this.x * tm.c + this.y * tm.d + tm.f;
    return new Point(x, y);
  }
  project(target) {
    let sql = target.sqlength();
    let dotp = this.dot(target);
    return target.scale(dotp / sql);
  }
  anglePair(p1, p2) {
    let angle2 = p2.angle(this);
    let angle1 = p1.angle(this);
    return angle2 - angle1;
  }
  signLine(p1, p2) {
    return (this.x - p1.x) * (p2.y - p1.y) - (this.y - p1.y) * (p2.x - p1.x);
  }
  perpendicularDistance(p1, p2) {
    let area = 0.5 * (p1.x * (this.y - p2.y) + this.x * (p2.y - p1.y) + p2.x * (p1.y - this.y));
    let d = p1.length(p2);
    return 2 * Math.abs(area) / d;
  }
  orientation(q, r) {
    let val = (q.y - this.y) * (r.x - q.x) - (q.x - this.x) * (r.y - q.y);
    if (val === 0)
      return 0;
    return val > 0 ? 1 : 2;
  }
  onSegment(p, q) {
    return this.x <= Math.max(p.x, q.x) && this.x >= Math.min(p.x, q.x) && this.y <= Math.max(p.y, q.y) && this.y >= Math.min(p.y, q.y);
  }
}
const css$1 = {
  code: ".teacher.svelte-e6uf7i{background:transparent;width:40px;height:40px;border-radius:50%;position:absolute;top:50%;left:50%;z-index:10}img.svelte-e6uf7i{width:40px;height:40px;border-radius:50%}",
  map: null
};
const Teacher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teacher;
  function makeDraggable(node) {
    node.addEventListener(
      "touchstart",
      function(e) {
        e.preventDefault();
      },
      false
    );
    node.addEventListener("pointerdown", startDrag, false);
    node.addEventListener("pointerup", endDrag, false);
    node.addEventListener("pointercancel", endDrag, false);
    node.addEventListener("pointermove", drag, false);
    let dragOffset;
    let isDragging = false;
    function getPointerPosition(evt) {
      let clientx = evt.clientX;
      let clienty = evt.clientY;
      return { x: clientx, y: clienty };
    }
    function startDrag(evt) {
      let coord = getPointerPosition(evt);
      dragOffset = {
        x: coord.x - parseInt(window.getComputedStyle(node).left),
        y: coord.y - parseInt(window.getComputedStyle(node).top)
      };
      isDragging = true;
    }
    function drag(evt) {
      if (isDragging) {
        let coord = getPointerPosition(evt);
        let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
        updatePosition(change);
      }
    }
    function endDrag(evt) {
      isDragging = false;
    }
  }
  const updatePosition = (change) => {
    teacher.style.left = change.x + "px";
    teacher.style.top = change.y + "px";
  };
  if ($$props.makeDraggable === void 0 && $$bindings.makeDraggable && makeDraggable !== void 0)
    $$bindings.makeDraggable(makeDraggable);
  $$result.css.add(css$1);
  return `<div class="teacher noMenu svelte-e6uf7i"${add_attribute("this", teacher, 0)} data-svelte-h="svelte-1g2d600"><img class="noMenu svelte-e6uf7i" src="/favicon.png" alt=""> </div>`;
});
const css = {
  code: "nav.svelte-v6pok5{display:grid;grid-template-columns:auto 1fr;max-width:600px}.maths.svelte-v6pok5{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-v6pok5{display:flex;height:1em;margin:0.5em 0;align-items:center;flex-direction:row}.container.svelte-v6pok5{display:grid;grid-template-columns:1em 1fr 1em;position:relative;height:600px}aside.svelte-v6pok5{background-color:rgba(230, 228, 228, 0.25);cursor:pointer;width:1em}.overlay.svelte-v6pok5{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-v6pok5::-webkit-scrollbar{width:0;height:0}.presenter.svelte-v6pok5{position:absolute;right:35px;top:0;z-index:10}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_presentation;
  let $overlay, $$unsubscribe_overlay;
  let $$unsubscribe_autoScroll;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
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
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-pzt9nu_START --><!-- HEAD_svelte-pzt9nu_END -->`, ""} ${!$presentationMode ? `<span class="noMenu"${add_attribute("this", $overlay, 0)}></span>` : ``} <div class="${"maths " + escape($presentationMode ? "noMenu" : "", true) + " svelte-v6pok5"}"><div class="presentationMode svelte-v6pok5"><label style="display:flex;align-items:center;"><input style="display:none;" type="checkbox"${add_attribute("this", checkbox, 0)}${add_attribute("checked", $presentationMode, 1)}> <span class="material-icons" style="${"color: " + escape($presentationMode ? "teal" : "white", true)}">slideshow</span></label> ${!$presentationMode ? `<nav class="svelte-v6pok5">${validate_component(Select, "Select").$$render(
      $$result,
      {
        style: "width: 35vw; background:black; color:white;",
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
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        style: "width: 35vw; background:black; color:white;",
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
    )}</nav>` : ``} ${$presentationMode ? `${validate_component(CanvasBar, "CanvasBar").$$render($$result, {}, {}, {})}` : ``}</div> <div class="${escape(null_to_empty($presentationMode ? "container noMenu" : ""), true) + " svelte-v6pok5"}">${$presentationMode ? `<aside class="back noMenu svelte-v6pok5"></aside>` : ``} ${$presentationMode ? `<div class="absolute overlay noMenu svelte-v6pok5"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div> <div class="presenter noMenu svelte-v6pok5">${validate_component(Presenter, "Presenter").$$render($$result, {}, {}, {})}</div> ${validate_component(Teacher, "Teacher").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({
      class: $presentationMode ? "noMenu gridBackground" : ""
    }) : ``} ${$presentationMode ? `<aside class="next noMenu svelte-v6pok5"></aside>` : ``}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_currentSlide();
  $$unsubscribe_presentationMode();
  $$unsubscribe_slideCounter();
  $$unsubscribe_presentation();
  $$unsubscribe_overlay();
  $$unsubscribe_autoScroll();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-h2NOec-w.js.map
