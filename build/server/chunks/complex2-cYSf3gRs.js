import { Q } from './fraction2-2uKzQMOI.js';

class Complex {
  constructor(x = new Q(), y = new Q()) {
    this.x = x;
    this.y = y;
    this.sqlength = this.x.mul(this.x).add(this.y.mul(this.y));
    this.length = this.sqlength.sqrt();
    this.arg = Math.atan(this.y.div(this.x).value());
    this.re = this.x;
    this.im = this.y;
  }
  scale(k) {
    return new Complex(this.x.scale(k), this.y.scale(k));
  }
  bar() {
    return new Complex(this.x, this.y.scale(-1));
  }
  equal(z) {
    return this.x.equal(z.x) && this.y.equal(z.y);
  }
  rand(min = 0, max = 10) {
    this.x = new Q(min + Math.floor(Math.random() * (max - min)));
    this.y = new Q(min + Math.floor(Math.random() * (max - min)));
  }
  unit() {
    let uc = new Complex();
    uc.x = this.x.div(this.length);
    uc.y = this.y.div(this.length);
    return uc;
  }
  add(z) {
    return new Complex(this.x.add(z.x), this.y.add(z.y));
  }
  sub(z) {
    return new Complex(this.x.sub(z.x), this.y.sub(z.y));
  }
  mul(z) {
    return new Complex(this.x.mul(z.x).sub(this.y.mul(z.y)), this.x.mul(z.y).add(this.y.add(z.x)));
  }
  div(z) {
    let d = this.mul(z.bar());
    d.x = d.x.div(z.sqlength);
    d.y = d.y.div(z.sqlength);
    return d;
  }
  str() {
    if (this.y.isZero()) {
      return this.x.str();
    }
    if (this.x.isZero()) {
      return this.y.str() + "i";
    }
    if (this.y.isLZero()) {
      return this.x.str() + " - " + this.y.abs().str() + "i";
    }
    if (this.y.isOne()) {
      return this.x.str() + "+i";
    }
    if (this.y.isMinusOne()) {
      return this.x.str() + "-i";
    }
    return this.x.str() + " + " + this.y.str() + "i";
  }
}
new Complex();
//# sourceMappingURL=complex2-cYSf3gRs.js.map
