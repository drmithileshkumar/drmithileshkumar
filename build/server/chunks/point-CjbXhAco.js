import { r as randInt } from './common-CIVVH1Lv.js';

const text2latex = (math) => {
  let mathoutput = MathJax.tex2svg(math);
  let svg = mathoutput.children[0];
  svg.children[1].removeAttribute("stroke");
  svg.children[1].removeAttribute("fill");
  return svg.innerHTML;
};
class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  random(min, max) {
    this.x = randInt(max, min);
    this.y = randInt(max, min);
  }
  polar(theta, r) {
    this.x = r * Math.cos(theta);
    this.y = r * Math.sin(theta);
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
    let theta = Math.atan2(this.y - origin.y, this.x - origin.x);
    return theta < 0 ? theta + 2 * Math.PI : theta;
  }
  isZero() {
    return this.x == 0 && this.y == 0;
  }
  isEqual(p) {
    return this.x === p.x && this.y === p.y;
  }
  scale(l, m = l) {
    return new Point(this.x * l, this.y * m);
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
    if (q.isZero()) return "Infinity";
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
  reflectX() {
    return new Point(this.x, -this.y);
  }
  reflectY() {
    return new Point(-this.x, this.y);
  }
  reflect(q) {
    let r = this.s(q);
    return q.a(r.scale(-1));
  }
  reflectControl(q, r) {
    let t = this.s(q);
    if (t.isZero()) return r;
    let u = t.scale(-1 / t.length());
    let t1 = r.s(q);
    if (t1.isZero()) return r;
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
  anglePair(p1, p2, withinPI = false) {
    let angle2 = p2.angle(this);
    let angle1 = p1.angle(this);
    let theta = Math.abs(angle2 - angle1);
    if (withinPI) {
      if (theta > Math.PI) {
        theta = 2 * Math.PI - theta;
      }
    }
    return theta;
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
    if (val === 0) return 0;
    return val > 0 ? 1 : 2;
  }
  onSegment(p, q) {
    return this.x <= Math.max(p.x, q.x) && this.x >= Math.min(p.x, q.x) && this.y <= Math.max(p.y, q.y) && this.y >= Math.min(p.y, q.y);
  }
  pointAtLength(d, p) {
    let l = this.length(p);
    return p.scale(d / l).a(this.scale((l - d) / l));
  }
  section(p, l, m, internal = true) {
    if (internal) {
      let p12 = this.scale(m);
      let p22 = p.scale(l);
      return p12.a(p22).scale(1 / (l + m));
    }
    let p1 = this.scale(m);
    let p2 = p.scale(l);
    return p2.s(p1).scale(1 / (l - m));
  }
  area(q, r) {
    return 0.5 * (this.x * (q.y - r.y) + q.x * (r.y - this.y) + r.x * (this.y - q.y));
  }
  inTriangle(p, q, r) {
    let signp, signq, signr;
    let has_neg, has_pos;
    signp = this.orientation(p, q);
    signq = this.orientation(q, r);
    signr = this.orientation(r, p);
    has_neg = signp == 1 || signq == 1 || signr == 1;
    has_pos = signp == 2 || signq == 2 || signr == 2;
    return !(has_neg && has_pos);
  }
  flags(p1, p2) {
    let laf, sf;
    let theta1 = Math.atan2(p1.y - this.y, p1.x - this.x);
    let theta2 = Math.atan2(p2.y - this.y, p2.x - this.x);
    theta1 = theta1 < 0 ? 2 * Math.PI + theta1 : theta1;
    theta1 = theta2 < 0 ? 2 * Math.PI + theta2 : theta2;
    if (Math.abs(theta2 - theta1) <= Math.PI) {
      laf = 0;
    } else {
      laf = 1;
    }
    if (theta2 < theta1) {
      sf = 0;
    } else {
      sf = 1;
    }
    return { laf, sf };
  }
  drawAngle(p1, p2, symbol = "", lines = 1, perturb = 0) {
    let l1 = this.length(p1);
    let l2 = this.length(p2);
    let m = Math.min(l1, l2);
    let r = Math.min(m / 3, 30) + perturb;
    let c1, c2, arc = "";
    for (let i = 0; i < lines; i++) {
      r = r + i * 3;
      c1 = this.pointAtLength(r, p1);
      c2 = this.pointAtLength(r, p2);
      let laf = 0;
      let sf = 1;
      arc += `<path d="M ${c1.x},${c1.y} A ${r},${r} 0 ${laf} ${sf} ${c2.x},${c2.y}" stroke="currentcolor" stroke-width="1" fill="none" />`;
    }
    let s = "";
    if (symbol !== "") {
      let theta1 = Math.atan2(p1.y - this.y, p1.x - this.x);
      let theta2 = Math.atan2(p2.y - this.y, p2.x - this.x);
      if (theta1 < 0 && theta2 < 0) theta1 = 2 * Math.PI + theta1;
      if (theta2 < 0) theta2 = 2 * Math.PI + theta2;
      let t1 = new Point();
      let dt = 0;
      let mid = (theta1 + theta2) / 2;
      if (mid > 0 && mid < Math.PI / 2) dt = 0.15;
      if (mid > Math.PI) dt = -0.15;
      t1.polar(mid + dt, r + 10);
      s = `<g fill="red" transform="translate(${t1.x + this.x}, ${t1.y + this.y}) scale(0.015)">` + text2latex(`${symbol}^\\circ`) + "</g>";
    }
    return arc + s;
  }
  str() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

export { Point as P, text2latex as t };
//# sourceMappingURL=point-CjbXhAco.js.map
