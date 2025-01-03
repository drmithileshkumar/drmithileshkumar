import { s as shuffle, r as randInt } from './common2-D0jjHEpP.js';
import './complex2-cYSf3gRs.js';
import './fraction2-2uKzQMOI.js';
import './sets3-BfptYGEP.js';

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  random(min, max) {
    this.x = randInt(max, min);
    this.y = randInt(max, min);
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
    if (val === 0) return 0;
    return val > 0 ? 1 : 2;
  }
  onSegment(p, q) {
    return this.x <= Math.max(p.x, q.x) && this.x >= Math.min(p.x, q.x) && this.y <= Math.max(p.y, q.y) && this.y >= Math.min(p.y, q.y);
  }
}
let problemset = {
  s: "",
  o: {
    "A": "",
    "B": "",
    "C": "",
    "D": ""
  },
  c: ""
};
const lines = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let p1 = new Point();
      p1.random(-50, -40);
      let p2 = new Point();
      p2.random(-50, -40);
      p2 = p2.a(new Point(70, 0));
      let p3 = new Point();
      p3.random(-50, -40);
      p3 = p3.a(new Point(0, 70));
      let p4 = new Point();
      p4.random(-50, -40);
      p4 = p4.a(new Point(70, 70));
      let points = [p1, p2, p3, p4];
      let s = shuffle([0, 1, 2, 3]);
      values[0] = `M ${points[s[0]].x},${points[s[0]].y} L ${points[s[3]].x},${points[s[3]].y}`;
      values[1] = `M ${points[s[0]].x},${points[s[0]].y} C ${points[s[1]].x},${points[s[1]].y} ${points[s[2]].x},${points[s[2]].y} ${points[s[3]].x},${points[s[3]].y}`;
      s = shuffle([0, 1, 2, 3]);
      values[2] = `M ${points[s[0]].x},${points[s[0]].y} C ${points[s[1]].x},${points[s[1]].y} ${points[s[2]].x},${points[s[2]].y} ${points[s[3]].x},${points[s[3]].y}`;
      s = shuffle([0, 1, 2, 3]);
      values[3] = `M ${points[s[0]].x},${points[s[0]].y} C ${points[s[1]].x},${points[s[1]].y} ${points[s[2]].x},${points[s[2]].y} ${points[s[3]].x},${points[s[3]].y}`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;"><svg width="100" height="100" viewBox="-50 -50 100 100"><path d='${values[i]}' stroke="currentcolor" stroke-width="2" fill="none" /></svg></div>`;
      }
      problemset.s = "Which is a straight line?";
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { lines };
//# sourceMappingURL=lines-CNZeK7Jv.js.map
