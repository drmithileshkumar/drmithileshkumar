import { Q } from "./fraction.js";
class LinearQ {
  //ax + b
  constructor(a = new Q(1), b = new Q(), x = "x") {
    this.a = a;
    this.b = b;
    this.x = x;
  }
  randL(n, d, nonzero = false) {
    this.a = new Q();
    this.a.randF(n, d, true);
    while (nonzero && this.a.isZero()) {
      this.a.randF(n, d, true);
    }
    this.b = new Q();
    this.b.randF(n, d);
  }
  isAZero() {
    return this.a.isZero();
  }
  isBZero() {
    return this.b.isZero();
  }
  isZero() {
    return this.isAZero() && this.isBZero();
  }
  add(l) {
    return new LinearQ(this.a.add(l.a), this.b.add(l.b));
  }
  sub(l) {
    return new LinearQ(this.a.sub(l.a), this.b.sub(l.b));
  }
  scale(k) {
    return new LinearQ(this.a.scale(k), this.b.scale(k));
  }
  str() {
    let eq = "";
    if (this.a.isOne()) {
      eq = this.x;
    } else if (this.a.isMinusOne()) {
      eq = "-" + this.x;
    } else if (this.a.isZero()) {
      return this.b.str();
    } else {
      eq = this.a.str() + this.x;
    }
    if (this.b.isZero()) {
      return eq;
    }
    if (this.b.isGZero()) {
      eq += "+" + this.b.str();
    } else {
      eq += "-" + new Q(-this.b.num, this.b.den).str();
    }
    return eq;
  }
  root() {
    return this.b.scale(-1).div(this.a);
  }
  value(x) {
    if (!(x instanceof Q)) x = new Q(x, 1);
    return this.a.mul(x).add(this.b);
  }
}
export {
  LinearQ as L
};
