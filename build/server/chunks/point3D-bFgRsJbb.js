import { Q, S as Surd } from './fraction-DfHHiAXd.js';
import { r as randInt } from './common-CIVVH1Lv.js';

class Point3D {
  //input are fractions
  constructor(x = new Q(), y = new Q(), z = new Q()) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  randP3D(n, m, l, integral = false) {
    if (integral) {
      this.x = new Q(randInt(n, -n));
      this.y = new Q(randInt(m, -m));
      this.z = new Q(randInt(l, -l));
    } else {
      this.x.randF(n, n);
      this.y.randF(m, m);
      this.z.randF(l, l);
    }
  }
  isQ() {
    return this.x instanceof Q && this.y instanceof Q && this.z instanceof Q;
  }
  isSurd() {
    return this.x instanceof Surd && this.y instanceof Surd && this.z instanceof Surd;
  }
  isPureSurd() {
    if (this.isSurd()) {
      return this.x.terms.length <= 2 && this.x.terms[0].a == 0 && this.y.terms.length <= 2 && this.y.terms[0].a == 0 && this.z.terms.length <= 2 && this.z.terms[0].a == 0;
    }
    return false;
  }
  isZero() {
    return this.isQ() || this.isSurd() ? this.x.isZero() && this.y.isZero() && this.z.isZero() : this.x == 0 && this.y == 0 && this.z == 0;
  }
  sqlength() {
    if (this.isQ() || this.isSurd()) {
      return this.x.mul(this.x).add(this.y.mul(this.y)).add(this.z.mul(this.z));
    }
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    if (this.isQ()) {
      let numSurd = new Surd();
      let denSurd = new Surd();
      let sqlen = this.x.mul(this.x).add(this.y.mul(this.y)).add(this.z.mul(this.z));
      numSurd.terms.push({ a: 0, r: 1 });
      denSurd.terms.push({ a: 0, r: 1 });
      numSurd.terms.push({ a: 1, r: sqlen.num });
      denSurd.terms.push({ a: 1, r: sqlen.den });
      numSurd.reduced();
      denSurd.reduced();
      numSurd.removeDuplicates();
      denSurd.removeDuplicates();
      return new Q(numSurd, denSurd);
    } else if (this.isPureSurd()) {
      let l = this.x.mul(this.x).add(this.y.mul(this.y)).add(this.z.mul(this.z));
      l.terms.push({ a: 1, r: l.terms[0].a });
      l.terms[0].a = 0;
      l.reduced();
      return l;
    } else if (this.isSurd()) {
      let l = this.x.mul(this.x).add(this.y.mul(this.y)).add(this.z.mul(this.z));
      let v = l.value();
      return Math.sqrt(v);
    }
    return Math.sqrt(this.sqlength());
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
      return new Point3D(this.x.mul(l), this.y.mul(l), this.z.mul(l));
    }
    return new Point3D(this.x.scale(l), this.y.scale(l), this.z.scale(l));
  }
  add(q) {
    return new Point3D(this.x.add(q.x), this.y.add(q.y), this.z.add(q.z));
  }
  sub(q) {
    return new Point3D(this.x.sub(q.x), this.y.sub(q.y), this.z.sub(q.z));
  }
  mul(q) {
    return new Point3D(this.x.mul(q.x).sub(this.y.mul(q.y)), this.x.mul(q.y).add(this.y.mul(q.x)));
  }
  div(q) {
    if (q.isZero()) return "Infinity";
    else {
      let r = new Point3D(this.x.mul(q.x).add(this.y.mul(q.y)), this.y.mul(q.x).sub(this.x.mul(q.y)));
      return r.scale(r.sqlength());
    }
  }
  dot(q) {
    return this.x.mul(q.x).add(this.y.mul(q.y)).add(this.z.mul(q.z));
  }
  reflect(q) {
    let r = this.sub(q);
    return q.add(r.scale(new Q(-1)));
  }
  rotate(theta) {
    let theta0 = this.angle();
    let r = this.length();
    return new Point3D(r * Math.cos(theta + theta0), r * Math.sin(theta + theta0));
  }
  section(p, l, m, internal = true) {
    if (internal) {
      let p12 = this.scale(m);
      let p22 = p.scale(l);
      return p12.add(p22).scale(new Q(1, l + m));
    }
    let p1 = this.scale(m);
    let p2 = p.scale(l);
    return p2.sub(p1).scale(new Q(1, l - m));
  }
  str() {
    if (this.isSurd() || this.isQ()) {
      return `(${this.x.str()}, ${this.y.str()}, ${this.z.str()})`;
    } else {
      return `(${this.x}, ${this.y}, ${this.z})`;
    }
  }
  vterm(a, axis) {
    if (a instanceof Q) {
      return a.isZero() ? "" : a.equal(new Q(1)) ? "+" + axis : a.equal(new Q(-1)) ? "-" + axis : a.isGZero() ? "+" + a.str() + axis : "-" + a.scale(-1).str() + axis;
    } else if (a instanceof Surd) {
      return a.isZero() ? "" : a.equal(new Surd([{ a: 1, r: 1 }])) ? "+" + axis : a.equal(new Surd([{ a: -1, r: 1 }])) ? "-" + axis : a.isGZero() ? "+" + a.str() + axis : a.str() + axis;
    } else {
      return a == 0 ? "" : a == 1 ? "+" + axis : a == -1 ? "-" + axis : a > 0 ? "+" + a + axis : a + axis;
    }
  }
  vstr() {
    return this.vterm(this.x, "\\hat{i}") + this.vterm(this.y, "\\hat{j}") + this.vterm(this.z, "\\hat{k}");
  }
}

export { Point3D as P };
//# sourceMappingURL=point3D-bFgRsJbb.js.map
