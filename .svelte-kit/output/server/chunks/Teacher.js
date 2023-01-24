import { c as create_ssr_component, f as add_attribute } from "./index3.js";
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
const Teacher_svelte_svelte_type_style_lang = "";
const css = {
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
  $$result.css.add(css);
  return `<div class="${"teacher noMenu svelte-e6uf7i"}"${add_attribute("this", teacher, 0)}><img class="${"noMenu svelte-e6uf7i"}" src="${"/favicon.png"}" alt="${""}">
</div>`;
});
export {
  Teacher as T
};
