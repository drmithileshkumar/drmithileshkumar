import { Q } from "./fraction2.js";
import { r as randInt } from "./common2.js";
class Polynomial {
  // {a: , r: }
  constructor(c = [], s = "x") {
    this.c = c;
    this.s = s;
  }
  sortPower() {
    this.c.sort((t1, t2) => t1.r - t2.r);
  }
  isZero() {
    for (let term of this.c) {
      if (term.a instanceof Q) {
        if (!term.a.isZero()) return false;
      } else {
        if (term.a !== 0) return false;
      }
    }
    return true;
  }
  term(i) {
    let type = this.c[i].a instanceof Q ? 0 : 1;
    if (this.c[i].r == 0) return this.c[i].a;
    let coef = "";
    if (type == 1) {
      if (i == 0) {
        coef = this.c[i].a == 1 ? "" : this.c[i].a == -1 ? "-" : this.c[i].a;
      } else {
        coef = this.c[i].a == 1 ? "+" : this.c[i].a == -1 ? "-" : this.c[i].a > 0 ? "+" + this.c[i].a : this.c[i].a;
      }
      if (this.c[i].r == 1) return this.c[i].a == 0 ? "" : coef + this.s;
      return this.c[i].a == 0 ? "" : coef + this.s + "^{" + this.c[i].r + "}";
    }
    if (type == 0) {
      let one = new Q(1, 1);
      let mone = new Q(-1, 1);
      if (i == 0) {
        coef = this.c[i].a.equal(one) ? "" : this.c[i].a.equal(mone) ? "-" : this.c[i].a.str();
      } else {
        coef = this.c[i].a.equal(one) ? "+" : this.c[i].a.equal(mone) ? "-" : this.c[i].a.isGZero() ? "+" + this.c[i].a.str() : "-" + this.c[i].a.scale(-1).str();
      }
      if (this.c[i].r == 1) return this.c[i].a.isZero() ? "" : coef + this.s;
      return this.c[i].a.isZero() ? "" : coef + this.s + "^{" + this.c[i].r + "}";
    }
  }
  str() {
    this.sortPower();
    let text = "";
    if (this.c[0].a instanceof Q) {
      if (this.c.length == 1 && this.c[0].a.isZero()) return text + this.c[0].a.str();
      text = this.c[0].r == 0 ? this.c[0].a.isZero() ? "" : this.c[0].a.isZero() : this.term(0);
    } else {
      if (this.c.length == 1 && this.c[0].a == 0) return text + this.c[0].a;
      text = this.c[0].r == 0 ? this.c[0].a == 0 ? "" : this.c[0].a : this.term(0);
    }
    for (let i = 1; i < this.c.length; i++) {
      text += this.term(i);
    }
    return text;
  }
  scale(k) {
    let scaled;
    if (k == 0) return new Polynomial([{ a: 0, r: 0 }]);
    scaled = new Polynomial();
    for (let term of this.c) {
      if (term.a instanceof Q) {
        scaled.c.push({ a: term.a.scale(k), r: term.r });
      } else {
        scaled.c.push({ a: k * term.a, r: term.r });
      }
    }
    return scaled;
  }
  add(p) {
    this.sortPower();
    p.sortPower();
    let sum, i, j;
    if (this.c.length == 0) return p;
    if (p.c.length == 0) return this;
    sum = new Polynomial();
    i = 0;
    j = 0;
    while (i < this.c.length || j < p.c.length) {
      if (j >= p.c.length && i < this.c.length || i < this.c.length && j < p.c.length && this.c[i].r < p.c[j].r) {
        sum.c.push(this.c[i]);
        i++;
      } else if (i >= this.c.length && j < p.c.length || i < this.c.length && j < p.c.length && this.c[i].r > p.c[j].r) {
        sum.c.push(p.c[j]);
        j++;
      } else if (i < this.c.length && j < p.c.length && this.c[i].r == p.c[j].r) {
        if (this.c[i].a instanceof Q) {
          if (p.c[j].a instanceof Q) {
            sum.c.push({ a: this.c[i].a.add(p.c[j].a), r: this.c[i].r });
          } else {
            sum.c.push({ a: this.c[i].a.add(new Q(p.c[j].a)), r: this.c[i].r });
          }
        } else {
          if (p.c[j].a instanceof Q) {
            let temp = new Q(this.c[i].a);
            sum.c.push({ a: temp.add(p.c[j].a), r: this.c[i].r });
          } else {
            sum.c.push({ a: this.c[i].a + p.c[j].a, r: this.c[i].r });
          }
        }
        i++;
        j++;
      }
    }
    return sum;
  }
  sub(p) {
    let q = p.scale(-1);
    return this.add(q);
  }
  multerm(t) {
    let pro = new Polynomial();
    for (let term of this.c) {
      if (term.a instanceof Q) {
        pro.c.push({ a: t.a.mul(term.a), r: term.r + t.r });
      } else {
        pro.c.push({ a: t.a * term.a, r: term.r + t.r });
      }
    }
    return pro;
  }
  mul(p) {
    if (this.c.length == 1 && this.c[0].r == 0) return p.scale(this.c[0].a);
    let product = new Polynomial([{ a: 0, r: 0 }], this.s);
    for (let pterm of p.c) {
      product = product.add(this.multerm(pterm));
    }
    return product;
  }
  //Todo implement division
  value(k) {
    let val = 0;
    let fval = new Q();
    let fr = false;
    for (let term of this.c) {
      if (term.a instanceof Q) {
        fr = true;
        let tk = Math.pow(k, term.r);
        fval = fval.add(term.a.scale(tk));
      } else {
        val += term.a * Math.pow(k, term.r);
      }
    }
    return fr ? fval : val;
  }
  derivative() {
    if (this.c.length == 1 && this.c[0].r == 0) return new Polynomial([{ a: 0, r: 0 }]);
    let pdash = new Polynomial([], this.s);
    for (let term of this.c) {
      if (term.r >= 1) {
        if (term.a instanceof Q) {
          pdash.c.push({ a: term.a.scale(term.r), r: term.r - 1 });
        } else {
          pdash.c.push({ a: term.a * term.r, r: term.r - 1 });
        }
      }
    }
    return pdash;
  }
  integrate() {
    if (this.c.length == 1 && this.c[0].r == 0) return new Polynomial([{ a: 0, r: 0 }]);
    let pint = new Polynomial([], this.s);
    for (let term of this.c) {
      if (term.a instanceof Q) {
        pint.c.push({ a: term.a.mul(new Q(1, term.r + 1)), r: term.r + 1 });
      } else {
        let f = new Q(term.a, term.r + 1);
        f.reduced();
        pint.c.push({ a: f, r: term.r + 1 });
      }
    }
    return pint;
  }
  dintegrate(a, b) {
    let p = this.integrate();
    let v1 = p.value(b);
    let v2 = p.value(a);
    let fv1, fv2;
    fv1 = v1 instanceof Q ? v1 : new Q(v1);
    fv2 = v2 instanceof Q ? v2 : new Q(v2);
    return fv1.sub(fv2);
  }
  pert(t) {
    let p = new Polynomial();
    let changed = false;
    for (let term of this.c) {
      if (term.r == t.r) {
        p.c.push({ a: t.a, r: term.r });
        changed = true;
      } else {
        p.c.push(term);
      }
    }
    if (!changed) {
      p.c.push(t);
      p.sortPower();
    }
    return p;
  }
  randPoly(n = 4, max = 5, min = -5) {
    this.c = [];
    let ri;
    for (let i = 0; i <= n; i++) {
      ri = randInt(max, min);
      this.c.push({ a: ri, r: i });
    }
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
const definite = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = randInt(5, -5);
      let b = randInt(5, -5);
      let n = randInt(5, 2);
      let max = randInt(5, 1);
      let min = -max;
      let p = new Polynomial([], "x");
      p.randPoly(n, max, min);
      let pint = p.dintegrate(a, b);
      pint.reduced();
      values[0] = `\\(${pint.str()}\\)`;
      values[1] = `\\(${pint.add(new Q(1)).str()}\\)`;
      values[2] = `\\(${pint.sub(new Q(1)).str()}\\)`;
      values[3] = `\\(${pint.add(new Q(2)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Integrate \\[\\int_{${a}}^{${b}}(${p.str()})\\,dx\\]`;
      break;
    }
    case 1: {
      let a = randInt(10, 2);
      let b = randInt(10, 2);
      let l1 = randInt(10, 5);
      let l2 = randInt(l1 - 1, 0);
      let v1 = a * l1 + b;
      let v2 = a * l2 + b;
      values[0] = `\\(\\dfrac{1}{${a}}[\\log(${v1}) - \\log(${v2})]\\)`;
      values[1] = `\\(${a}[\\log(${v2}) - \\log(${v1})]\\)`;
      values[2] = `\\(${a}[\\log(${v1}) - \\log(${v2})]\\)`;
      values[3] = `\\(\\dfrac{1}{${a}}[\\log(${v2}) - \\log(${v1})]\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Integrate \\[\\int_{${l2}}^{${l1}}\\frac{1}{${a}x + ${b}}\\,dx\\]`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  definite
};
