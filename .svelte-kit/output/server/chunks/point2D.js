import { Q, S as Surd } from "./fraction.js";
import { r as randInt } from "./common.js";
class Point2D {
  //input are fractions
  constructor(x = new Q(), y = new Q()) {
    this.x = x;
    this.y = y;
  }
  randomPoint(n, m) {
    this.x = new Q(randInt(n, -n));
    this.y = new Q(randInt(m, -m));
  }
  isQ() {
    return this.x instanceof Q && this.y instanceof Q;
  }
  isSurd() {
    return this.x instanceof Surd && this.y instanceof Surd;
  }
  isPureSurd() {
    if (this.isSurd()) {
      return this.x.terms.length <= 2 && this.x.terms[0].a == 0 && this.y.terms.length <= 2 && this.y.terms[0].a == 0;
    }
    return false;
  }
  isZero() {
    return this.isQ() || this.isSurd() ? this.x.isZero() && this.y.isZero() : this.x == 0 && this.y == 0;
  }
  sqlength() {
    if (this.isQ() || this.isSurd()) {
      return this.x.mul(this.x).add(this.y.mul(this.y));
    }
    return this.x * this.x + this.y * this.y;
  }
  length() {
    if (this.isQ()) {
      let numSurd = new Surd();
      let denSurd = new Surd();
      let sqlen = this.x.mul(this.x).add(this.y.mul(this.y));
      numSurd.terms.push({ a: 0, r: 1 });
      denSurd.terms.push({ a: 0, r: 1 });
      numSurd.terms.push({ a: 1, r: sqlen.num });
      denSurd.terms.push({ a: 1, r: sqlen.den });
      numSurd.reduced();
      denSurd.reduced();
      return new Q(numSurd, denSurd);
    } else if (this.isPureSurd()) {
      let l = this.x.mul(this.x).add(this.y.mul(this.y));
      l.terms.push({ a: 1, r: l.terms[0].a });
      l.terms[0].a = 0;
      l.reduced();
      return l;
    } else if (this.isSurd()) {
      let l = this.x.mul(this.x).add(this.y.mul(this.y));
      let v = l.value();
      return Math.sqrt(v);
    }
    return Math.sqrt(this.sqlength());
  }
  value() {
    let xval = this.x;
    let yval = this.y;
    if (this.isQ() || this.isSurd()) {
      xval = this.x.value();
      yval = this.y.value();
    }
    return new Point2D(xval, yval);
  }
  angle() {
    if (this.x.isZero()) {
      if (this.y.isZero()) return 0;
      if (this.y.isGZero()) return Math.PI / 2;
      if (this.y.isLZero()) return -Math.PI / 2;
    } else {
      return Math.atan(this.y.value() / this.x.value());
    }
  }
  scale(l) {
    if (l instanceof Q) {
      return new Point2D(this.x.mul(l), this.y.mul(l));
    }
    return new Point2D(this.x.scale(l), this.y.scale(l));
  }
  add(q) {
    if (this.isQ() || this.isSurd() || q.isQ() || q.isSurd())
      return new Point2D(this.x.add(q.x), this.y.add(q.y));
    else return new Point2D(this.x + q.x, this.y + q.y);
  }
  sub(q) {
    return new Point2D(this.x.sub(q.x), this.y.sub(q.y));
  }
  mul(q) {
    return new Point2D(this.x.mul(q.x).sub(this.y.mul(q.y)), this.x.mul(q.y).add(this.y.mul(q.x)));
  }
  div(q) {
    if (q.isZero()) return "Infinity";
    else {
      let r = new Point2D(this.x.mul(q.x).add(this.y.mul(q.y)), this.y.mul(q.x).sub(this.x.mul(q.y)));
      return r.scale(r.sqlength());
    }
  }
  dot(q) {
    return this.x.mul(q.x).add(this.y.mul(q.y));
  }
  reflect(q) {
    let r = this.sub(q);
    return q.add(r.scale(new Q(-1)));
  }
  rotate(theta) {
    let theta0 = this.angle();
    let r = this.length();
    return new Point2D(r * Math.cos(theta + theta0), r * Math.sin(theta + theta0));
  }
  str() {
    if (this.isSurd() || this.isQ()) {
      return `(${this.x.str()}, ${this.y.str()})`;
    } else {
      return `(${this.x}, ${this.y})`;
    }
  }
  vector(b, strokewidth = 1) {
    let P = this.value();
    let Q2 = b.value();
    return `<line x1="${P.x}" y1="${P.y}" x2="${Q2.x}" y2="${Q2.y}" stroke="black" stroke-width="${strokewidth}" fill="none" marker-end="url(#arrow)" />`;
  }
}
export {
  Point2D as P
};
