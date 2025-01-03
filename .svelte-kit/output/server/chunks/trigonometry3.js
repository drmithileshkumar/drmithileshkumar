import { Q, S as Surd } from "./fraction.js";
import { r as randInt } from "./common.js";
import { S as Sets } from "./sets.js";
const trigF = ["sin", "cos", "tan", "cosec", "sec", "cot"];
const TV = {
  "0": new Q(new Surd([{ a: 0, r: 1 }]), new Surd([{ a: 1, r: 1 }])),
  "1": new Q(new Surd([{ a: 1, r: 1 }]), new Surd([{ a: 1, r: 1 }])),
  "2": new Q(new Surd([{ a: 2, r: 1 }]), new Surd([{ a: 1, r: 1 }])),
  "1by2": new Q(new Surd([{ a: 1, r: 1 }]), new Surd([{ a: 2, r: 1 }])),
  "1byr2": new Q(new Surd([{ a: 1, r: 1 }]), new Surd([{ a: 1, r: 2 }])),
  "1byr3": new Q(new Surd([{ a: 1, r: 1 }]), new Surd([{ a: 1, r: 3 }])),
  "r2": new Q(new Surd([{ a: 1, r: 2 }]), new Surd([{ a: 1, r: 1 }])),
  "r3": new Q(new Surd([{ a: 1, r: 3 }]), new Surd([{ a: 1, r: 1 }])),
  "r3by2": new Q(new Surd([{ a: 1, r: 3 }]), new Surd([{ a: 2, r: 1 }])),
  "2byr3": new Q(new Surd([{ a: 2, r: 1 }]), new Surd([{ a: 1, r: 3 }]))
};
const trigC = {
  "sin": {
    0: TV["0"],
    30: TV["1by2"],
    45: TV["1byr2"],
    60: TV["r3by2"],
    90: TV["1"]
  },
  "cos": {
    0: TV["1"],
    30: TV["r3by2"],
    45: TV["1byr2"],
    60: TV["1by2"],
    90: TV["0"]
  },
  "tan": {
    0: TV["0"],
    30: TV["1byr3"],
    45: TV["1"],
    60: TV["r3"]
  },
  "cosec": {
    30: TV["2"],
    45: TV["r2"],
    60: TV["2byr3"],
    90: TV["1"]
  },
  "sec": {
    0: TV["1"],
    30: TV["2byr3"],
    45: TV["r2"],
    60: TV["2"]
  },
  "cot": {
    30: TV["r3"],
    45: TV["1"],
    60: TV["1byr3"],
    90: TV["0"]
  }
};
class sin {
  constructor(a = new Q()) {
    this.a = a;
  }
  value() {
    let angle = new Q();
    let negative = false;
    if (this.a.isLZero()) {
      negative = true;
      angle.num = -this.a.num;
      angle.den = this.a.den;
    } else {
      angle.num = this.a.num;
      angle.den = this.a.den;
    }
    angle.reduced();
    let val = new Q();
    if (Math.floor(angle.num / angle.den) >= 2) {
      angle.num = angle.num % angle.den + angle.den * (Math.floor(angle.num / angle.den) % 2);
    }
    if (angle.sum / angle.den > 1) {
      negative = !negative;
      angle.num = angle.num - angle.den;
    }
    if (angle.sub(new Q(1)).isLZero()) {
      if (angle.sub(new Q(1, 2)).isGZero()) {
        angle.num = angle.den - angle.num;
      }
    }
    let ns, ds;
    if (angle.equal(new Q())) {
      val = new Q();
    } else if (angle.equal(new Q(1, 6))) {
      val = new Q(1, 2);
    } else if (angle.equal(new Q(1, 4))) {
      ns = new Surd([{ a: 1, r: 1 }]);
      ds = new Surd([{ a: 1, r: 2 }]);
      val = new Q(ns, ds);
    } else if (angle.equal(new Q(1, 3))) {
      ns = new Surd([{ a: 1, r: 3 }]);
      ds = new Surd([{ a: 2, r: 1 }]);
      val = new Q(ns, ds);
    } else if (angle.equal(new Q(1, 2))) {
      val = new Q(1, 1);
    } else {
      val = new Q(Math.sin(this.a.value() * Math.PI), 1);
    }
    return !negative ? val : val.scale(-1);
  }
  astr() {
    if (this.a.isZero()) return "0";
    if (this.a.equal(new Q(1))) return "\\pi";
    if (this.a.equal(new Q(-1))) return "-\\pi";
    if (this.a.num == 1 && this.a.den !== 1) return `\\frac{\\pi}{${this.a.den}}`;
    if (this.a.num == -1 && this.a.den !== 1) return `-\\frac{\\pi}{${this.a.den}}`;
    return this.a.isLZero() ? Math.abs(this.a.den) === 1 ? `-${Math.abs(this.a.num)}\\pi` : `-\\frac{${Math.abs(this.a.num)}\\pi}{${Math.abs(this.a.den)}}` : Math.abs(this.a.den) === 1 ? `${Math.abs(this.a.num)}\\pi` : `\\frac{${Math.abs(this.a.num)}\\pi}{${Math.abs(this.a.den)}}`;
  }
  str() {
    return `\\sin(${this.astr()})`;
  }
  area(l, u) {
    let lint = Math.ceil(l.num / l.den);
    let uint = Math.floor(u.num / u.den);
    let piPart = 2 * (uint - lint + 1);
    let leftb = new Q(lint).sub(l);
    let rightb = u.sub(new Q(uint));
    let leftL = new cos(leftb).value();
    let rightL = new cos(rightb).value();
    return new Q(piPart, 1).sub(leftL).sub(rightL);
  }
}
class cos {
  constructor(a = new Q()) {
    this.a = a;
  }
  value() {
    let theta = new Q(1, 2);
    let newtheta = theta.sub(this.a);
    let si = new sin(newtheta);
    return si.value();
  }
  astr() {
    if (this.a.isZero()) return "0";
    if (this.a.equal(new Q(1))) return "\\pi";
    if (this.a.equal(new Q(-1))) return "-\\pi";
    if (this.a.num === 1 && this.a.den !== 1) return `\\frac{\\pi}{${this.a.den}}`;
    if (this.a.num === -1 && this.a.den !== 1) return `-\\frac{\\pi}{${this.a.den}}`;
    return this.a.isLZero() ? `-\\frac{${Math.abs(this.a.num)}\\pi}{${Math.abs(this.a.den)}}` : `\\frac{${this.a.num}\\pi}{${this.a.den}}`;
  }
  str() {
    return `\\cos(${this.astr()})`;
  }
  area(l, u) {
    let upper = new Q(1, 2).sub(l);
    let lower = new Q(1, 2).sub(u);
    let temp = new Q(upper.num, upper.den);
    if (upper.sub(lower).isLZero()) {
      upper = lower;
      lower = temp;
    }
    let si = new sin();
    let area = si.area(lower, upper);
    return area.abs();
  }
}
class TrigExpression {
  constructor(terms = []) {
    this.terms = terms;
  }
  randomTerm(k = 1, v = [], p = 1, c = 1, u = "deg") {
    if (v.length === 0) {
      v = trigF;
    }
    let chosenFunctions = v;
    if (k < v.length) {
      let newSet = new Sets(v);
      let subset = newSet.krandomSubset(k);
      chosenFunctions = subset.e;
    }
    let coef = new Q(1, 1);
    let vals = Object.keys(TV);
    if (c !== 1) {
      let r = randInt(vals.length - 1, 0);
      coef = TV[vals[r]];
    }
    coef = Math.random() > 0.5 ? coef.scale(-1) : coef;
    let term = {};
    term.c = coef;
    for (let i = 0; i < k; i++) {
      let keys = Object.keys(trigC[chosenFunctions[i]]);
      let angi = randInt(keys.length - 1, 0);
      term[chosenFunctions[i]] = {
        p: randInt(p, 1),
        a: keys[angi],
        u
      };
    }
    return term;
  }
  randExpr(n = 1, v = [], k = 1, p = 1, c = 1, u = "deg") {
    this.terms = [];
    for (let i = 0; i < n; i++) {
      this.terms.push(this.randomTerm(k, v, p, c, u));
    }
  }
  termStr(term) {
    if (term.c.isZero()) return "0";
    let keys = Object.keys(term);
    let st = "";
    let c = term.c;
    if (term.c.isLZero()) {
      c = term.c.scale(-1);
      st = "-";
    }
    st += c.str();
    if (keys.length > 1) {
      if (st === "1") st = "";
      if (st === "-1") st = "-";
    }
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== "c") {
        st += "\\" + keys[i] + "^{" + (term[keys[i]].p === 1 ? "" : term[keys[i]].p) + "}" + term[keys[i]].a + "^\\circ";
      }
    }
    return st;
  }
  str() {
    let trigStr = "";
    trigStr = this.termStr(this.terms[0]);
    for (let i = 1; i < this.terms.length; i++) {
      let sign = "";
      if (!this.terms[i].c.isLZero()) {
        sign = "+";
      }
      trigStr += sign + this.termStr(this.terms[i]);
    }
    return trigStr;
  }
  termSurdValue(term) {
    let val = term.c;
    let keys = Object.keys(term);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== "c") {
        for (let j = 0; j < term[keys[i]].p; j++) {
          val = val.mul(trigC[keys[i]][term[keys[i]].a]);
        }
      }
    }
    return val;
  }
  surdValue() {
    if (this.terms.length === 0) return new Q();
    let result = this.termSurdValue(this.terms[0]);
    for (let i = 1; i < this.terms.length; i++) {
      result = result.add(this.termSurdValue(this.terms[i]));
    }
    return result;
  }
}
export {
  TrigExpression as T,
  trigC as a,
  cos as c,
  sin as s,
  trigF as t
};
