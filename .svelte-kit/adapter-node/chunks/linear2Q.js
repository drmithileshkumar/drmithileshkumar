import { Q } from "./fraction.js";
import { r as randInt } from "./common.js";
class Linear2Q {
  //ax + by + c
  constructor(a = new Q(1), b = new Q(0), c = new Q(0), x = "x", y = "y") {
    this.a = a;
    this.b = b;
    this.c = c;
    this.x = x;
    this.y = y;
  }
  randL(n, d) {
    this.a = new Q();
    this.a.randF(n, d, true);
    this.b = new Q();
    this.b.randF(n, d);
    this.c = new Q();
    this.c.randF(n, d);
  }
  add(l) {
    return new Linear2Q(this.a.add(l.a), this.b.add(l.b), this.c.add(l.c));
  }
  sub(l) {
    return new Linear2Q(this.a.sub(l.a), this.b.sub(l.b), this.c.sub(l.c));
  }
  scale(k) {
    return new Linear2Q(this.a.scale(k), this.b.scale(k), this.c.scale(k));
  }
  solve(l) {
    let det = this.a.mul(l.b).sub(this.b.mul(l.a));
    if (!det.isZero()) {
      let detx = l.b.mul(this.c).scale(-1).add(this.b.mul(l.c));
      let dety = l.a.mul(this.c).sub(this.a.mul(l.c));
      let x = detx.div(det);
      let y = dety.div(det);
      x.reduced();
      y.reduced();
      return { x, y };
    }
    return { x: NaN, y: NaN };
  }
  str() {
    let eq = "";
    this.a.reduced();
    this.b.reduced();
    this.c.reduced();
    if (this.a.isOne()) {
      eq = this.x;
    } else if (this.a.isMinusOne()) {
      eq = "-" + this.x;
    } else if (this.a.isZero()) {
      eq = "";
    } else {
      eq += this.a.str() + this.x;
    }
    if (this.b.isOne()) {
      eq += "+" + this.y;
    } else if (this.b.isMinusOne()) {
      eq += "-" + this.y;
    } else if (this.b.isZero()) {
      eq = eq;
    } else {
      if (this.b.isGZero()) eq += "+" + this.b.str() + this.y;
      if (this.b.isLZero()) eq += this.b.str() + this.y;
    }
    if (this.c.isGZero()) {
      eq += "+" + this.c.str();
    } else if (this.c.isZero()) {
      eq += "";
    } else {
      eq += this.c.str();
    }
    return eq;
  }
  value(x, y) {
    let newa, newb, newc;
    if (x instanceof Q) {
      if (!(this.a instanceof Q)) {
        newa = new Q(this.a, 1);
        newb = new Q(this.b, 1);
        newc = new Q(this.c, 1);
      }
      return newa.mul(x).add(newb.mul(y)).add(newc);
    }
    return this.a.scale(x).add(this.b.scale(y)).add(this.c);
  }
  perturb() {
    let l = new Linear2Q();
    l.a = this.a;
    l.b = this.b;
    l.c = this.c;
    let r = Math.random();
    if (r < 0.33) {
      l.a = this.a.add(new Q(randInt(10, -10, true)));
    }
    if (r > 0.33 && r < 0.66) {
      l.b = this.b.add(new Q(randInt(10, -10, true)));
    }
    if (r > 0.33) {
      l.c = this.c.add(new Q(randInt(10, -10, true)));
    }
    return l;
  }
}
export {
  Linear2Q as L
};
