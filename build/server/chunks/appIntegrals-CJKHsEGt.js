import { r as randInt } from './common-CIVVH1Lv.js';
import { Q, S as Surd } from './fraction-DfHHiAXd.js';
import { P as Polynomial } from './polynomial3-BqTvVK7w.js';
import { s as sin } from './trigonometry3-DnLNc8XS.js';
import './nt-DokVuTcK.js';
import './sets-jGIduNNd.js';

class FactPoly {
  constructor(k = 1, f = [], s = "x") {
    this.k = k;
    this.f = f;
    this.s = s;
  }
  termstr(i) {
    if (this.f[i] instanceof Q || this.f[i] instanceof Surd) {
      return this.f[i].isZero() ? this.s : this.f[i].isGZero() ? "(" + this.s + "+ " + this.f[i].str() + ")" : "(" + this.s + this.f[i].str() + ")";
    }
    return this.f[i] == 0 ? this.s : this.f[i] > 0 ? "(" + this.s + "+" + this.f[i] + ")" : "(" + this.s + this.f[i] + ")";
  }
  str() {
    let tex;
    if (this.k instanceof Q || this.k instanceof Surd) {
      if (this.k.isZero()) return "0";
      if (this.f.length == 0) return this.k.str();
      tex = this.k.equal(new Q(1)) || this.k.equal(new Surd([{ a: 1, r: 1 }])) ? "" : this.k.equal(new Q(-1)) || this.k.equal(new Surd([{ a: -1, r: 1 }])) ? "-" : this.k.str();
    } else {
      if (this.k == 0) return 0;
      if (this.f.length == 0) return this.k;
      tex = this.k == 1 ? "" : this.k == -1 ? "-" : this.k;
    }
    for (let i = 0; i < this.f.length; i++) {
      tex += this.termstr(i);
    }
    return tex;
  }
  sortF() {
    this.f.sort((a, b) => a - b);
  }
  randFactPoly(n, min, max) {
    this.f = [];
    let r;
    for (let i = 0; i < n; i++) {
      r = randInt(max, min);
      this.f.push(r);
    }
    this.sortF();
  }
  expand() {
    if (this.k == 0) return new Polynomial([{ a: 0, r: 0 }], this.s);
    if (this.f.length == 0) return new Polynomial([{ a: this.k, r: 0 }], this.s);
    let p = new Polynomial([{ a: this.k, r: 0 }], this.s);
    let temp = new Polynomial([], this.s);
    for (let i = 0; i < this.f.length; i++) {
      temp.c = [{ a: this.f[i], r: 0 }, { a: 1, r: 1 }];
      p = p.mul(temp);
      temp.c = [];
    }
    return p;
  }
  value(l) {
    let v = this.k;
    for (let i = 0; i < this.f.length; i++) {
      v *= l + this.f[i];
    }
    return v;
  }
  integrate() {
    let p = this.expand();
    return p.integrate();
  }
  dintegrate(a, b) {
    if (a == b) return new Q();
    let p = this.expand();
    return p.dintegrate(a, b);
  }
  area(a, b) {
    this.sortF();
    let limits = [];
    limits.push(a);
    for (let i = 0; i < this.f.length; i++) {
      if (-this.f[i] > a && -this.f[i] <= b) limits.push(-this.f[i]);
    }
    limits.push(b);
    let ar = new Q();
    let sum = new Q();
    let p = this.expand();
    for (let i = 1; i < limits.length; i++) {
      ar = p.dintegrate(limits[i - 1], limits[i]);
      sum = sum.add(ar.abs());
    }
    return sum;
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
const appIntegrals = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = randInt(5, -5);
      let b = randInt(2 * Math.abs(a) + 1, Math.abs(a));
      let n = 2;
      let max = randInt(10, 5);
      let min = -max;
      let p = new FactPoly();
      p.randFactPoly(n, min, max);
      let pint = p.area(a, b);
      pint.reduced();
      values[0] = `\\(${pint.str()}\\)`;
      values[1] = `\\(${pint.add(new Q(1)).str()}\\)`;
      values[2] = `\\(${pint.sub(new Q(1)).str()}\\)`;
      values[3] = `\\(${pint.add(new Q(2)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The area under the curve \\[\\int_{${a}}^{${b}}${p.str()}\\,dx\\]`;
      break;
    }
    case 1: {
      let commonAngles = [new Q(), new Q(1, 6), new Q(1, 4), new Q(1, 3), new Q(1, 2)];
      let aint = randInt(10, 1);
      let bint = randInt(2 * aint, aint);
      let acommon = commonAngles[randInt(4, 0)];
      let bcommon = commonAngles[randInt(4, 0)];
      let a = acommon.add(new Q(aint));
      let b = bcommon.add(new Q(bint));
      let sia = new sin(a);
      let sib = new sin(b);
      let area = sia.area(a, b);
      area.reduced();
      values[0] = `\\[${area.str()}\\]`;
      values[1] = `\\[${area.add(new Q(1)).str()}\\]`;
      values[2] = `\\[${area.sub(new Q(1)).str()}\\]`;
      values[3] = `\\[${area.add(new Q(2)).str()}\\]`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The area under the curve \\[\\int_{${sia.astr()}}^{${sib.astr()}}\\sin x\\,dx\\]`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { appIntegrals };
//# sourceMappingURL=appIntegrals-CJKHsEGt.js.map
