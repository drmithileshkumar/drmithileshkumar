import { r as randInt } from "./common.js";
import { b as filterSquare } from "./nt.js";
import { p as powerset } from "./sets.js";
class Surd {
  // natural radicals
  constructor(terms = []) {
    this.terms = terms;
  }
  reduced() {
    for (let i = 0; i < this.terms.length; i++) {
      if (this.terms[i].r !== 1) {
        let { a, r } = filterSquare(this.terms[i].r);
        let an = a.length > 0 ? a.map((item) => Math.pow(item.prime, item.power)).reduce((x, y) => x * y, 1) : 1;
        let rn = r.length > 0 ? r.map((item) => Math.pow(item.prime, item.power)).reduce((x, y) => x * y, 1) : 1;
        this.terms[i].a *= an;
        this.terms[i].r = rn;
      }
    }
  }
  surdFrom(k) {
    this.terms.push({ a: 1, r: k });
    this.reduced();
  }
  removeDuplicates() {
    let newTerms = [];
    if (this.terms.length > 1) {
      let markTerms = new Array(this.terms.length);
      for (let i = 0; i < this.terms.length; i++) {
        markTerms[i] = true;
      }
      for (let i = 0; i < this.terms.length; i++) {
        if (markTerms[i]) {
          for (let j = i + 1; j < this.terms.length; j++) {
            if (this.terms[i].r === this.terms[j].r) {
              this.terms[i].a += this.terms[j].a;
              markTerms[j] = false;
            }
          }
        }
      }
      for (let i = 0; i < this.terms.length; i++) {
        if (markTerms[i]) {
          newTerms.push(this.terms[i]);
        }
      }
      this.terms = newTerms;
      this.terms = this.terms.filter((term) => term.a != 0 || term.r == 1);
      if (this.terms.length === 0) this.terms = [{ a: 0, r: 1 }];
      this.sortR();
    }
  }
  sortR() {
    this.terms.sort((a, b) => a.r - b.r);
  }
  value() {
    let val = 0;
    for (let term of this.terms) {
      val += term.a * Math.sqrt(term.r);
    }
    return val;
  }
  randomPureSurd(max) {
    this.terms.push({ a: randInt(max, 2), r: randInt(max, 2) });
  }
  randomSurd(max, n = 3) {
    this.terms.push({ a: randInt(max, 2), r: 1 });
    for (let i = 1; i < n; i++) {
      this.terms.push({ a: randInt(max, 2), r: randInt(max, 2) });
    }
    if (n === 2) {
      this.terms[1].r = randInt(max, 2);
    }
  }
  equal(s) {
    this.reduced();
    s.reduced();
    if (this.terms.length != s.terms.length) return false;
    for (let i = 0; i < this.terms.length; i++) {
      if (this.terms[i].a != s.terms[i].a || this.terms[i].r != s.terms[i].r)
        return false;
    }
    return true;
  }
  isNum() {
    return this.terms.length == 1 && this.terms[0].r == 1;
  }
  isOne() {
    return this.isNum() && this.terms[0].a == 1;
  }
  isMinusOne() {
    return this.isNum() && this.terms[0].a == -1;
  }
  isZero() {
    return this.value() == 0;
  }
  isGZero() {
    return this.value() > 0;
  }
  isLZero() {
    return this.value() < 0;
  }
  scale(k) {
    let newSurd = new Surd();
    for (let term of this.terms) {
      newSurd.terms.push({ a: k * term.a, r: term.r });
    }
    return newSurd;
  }
  add(s) {
    if (this.isZero()) return s;
    if (s.isZero()) return this;
    this.reduced();
    s.reduced();
    let newSurd = new Surd();
    let matched = new Array(s.terms.length);
    for (let i = 0; i < s.terms.length; i++) {
      matched[i] = false;
    }
    for (let i = 0; i < this.terms.length; i++) {
      newSurd.terms.push({
        a: this.terms[i].a,
        r: this.terms[i].r
      });
      for (let j = 0; j < s.terms.length; j++) {
        if (this.terms[i].r === s.terms[j].r) {
          matched[j] = true;
          newSurd.terms[i].a += s.terms[j].a;
        }
      }
    }
    for (let i = 0; i < s.terms.length; i++) {
      if (!matched[i]) {
        newSurd.terms.push(s.terms[i]);
      }
    }
    newSurd.terms = newSurd.terms.filter((term) => term.a != 0 || term.r == 1);
    return newSurd;
  }
  sub(s) {
    this.reduced();
    s.reduced();
    let newS = s.scale(-1);
    return this.add(newS);
  }
  termMul(s) {
    let newSurd = new Surd();
    for (let term of this.terms) {
      newSurd.push({ a: term.a * s.a, r: term.r * s.r });
    }
  }
  mul(s) {
    if (this.isZero() || s.isZero()) return new Surd([{ a: 0, r: 1 }]);
    this.reduced();
    s.reduced();
    let newSurd = new Surd();
    let newTerm;
    for (let i = 0; i < this.terms.length; i++) {
      for (let j = 0; j < s.terms.length; j++) {
        newTerm = { a: this.terms[i].a * s.terms[j].a, r: this.terms[i].r * s.terms[j].r };
        newSurd.terms.push(newTerm);
      }
    }
    newSurd.reduced();
    return newSurd;
  }
  flipSign(sign) {
    let newSurd = new Surd();
    newSurd.terms.push(this.terms[0]);
    let term;
    for (let i = 1; i < this.terms.length; i++) {
      term = sign[i - 1] == "0" ? { a: -Math.abs(this.terms[i].a), r: this.terms[i].r } : { a: Math.abs(this.terms[i].a), r: this.terms[i].r };
      newSurd.terms.push(term);
    }
    return newSurd;
  }
  conjugate() {
    if (this.terms.length == 1) return this;
    if (this.terms.length == 2) {
      let newSurd = new Surd();
      newSurd.terms.push({
        a: this.terms[0].a,
        r: this.terms[0].r
      });
      newSurd.terms.push({
        a: -this.terms[1].a,
        r: this.terms[1].r
      });
      return newSurd;
    }
    let signs = powerset(this.terms.length - 1);
    let conj = new Surd();
    conj.terms.push({ a: 1, r: 1 });
    let thisSign = "";
    for (let i = 1; i < this.terms.length; i++) {
      if (this.terms[i].a < 0) {
        thisSign += 0;
      } else {
        thisSign += 1;
      }
    }
    for (let sign of signs) {
      if (sign != thisSign) {
        conj = conj.mul(this.flipSign(sign));
      }
    }
    return conj;
  }
  gcd(a, b) {
    if (b > a) {
      var temp = a;
      a = b;
      b = temp;
    }
    while (true) {
      if (b == 0) return a;
      a %= b;
      if (a == 0) return b;
      b %= a;
    }
  }
  gcda() {
    let g = this.terms[0].a;
    for (let i = 1; i < this.terms.length; i++) {
      if (this.terms[i].a !== 0)
        g = this.gcd(g, this.terms[i].a);
    }
    return g;
  }
  div(s) {
    let conj = s.conjugate();
    let den = s.mul(conj);
    let num = this.mul(conj);
    let g = num.gcda();
    let g1 = this.gcd(g, den.terms[0].a);
    if (g1 !== 0) {
      for (let i = 0; i < num.terms.length; i++) {
        num.terms[i].a = num.terms[i].a / g1;
      }
      den.terms[0].a = den.terms[0].a / g1;
    }
    return den.isLZero() ? new Q(num.scale(-1), den.scale(-1)) : new Q(num, den);
  }
  str() {
    this.reduced();
    if (this.isZero()) return "0";
    let factor = "";
    let str = "";
    if (this.terms.length == 0) return "";
    let i = 0;
    if (this.terms[i].a == 0) {
      str = str + "";
    } else if (this.terms[i].a > 0) {
      factor = this.terms[i].a == 1 && this.terms[i].r !== 1 ? "" : this.terms[i].a;
    } else {
      factor = this.terms[i].a == -1 && this.terms[i].r !== 1 ? "-" : this.terms[i].a;
    }
    str += this.terms[i].r !== 1 ? factor + `\\sqrt{${this.terms[i].r}}` : factor;
    for (i = 1; i < this.terms.length; i++) {
      if (this.terms[i].a == 0) {
        str = str + "";
      } else if (this.terms[i].a > 0) {
        factor = this.terms[i].a == 1 ? "" : this.terms[i].a;
        str += this.terms[i].r !== 1 ? (str.length > 0 ? "+" : "") + factor + `\\sqrt{${this.terms[i].r}}` : (str.length > 0 ? "+" : "") + factor;
      } else {
        factor = this.terms[i].a == -1 ? "-" : this.terms[i].a;
        str += this.terms[i].r !== 1 ? factor + `\\sqrt{${this.terms[i].r}}` : factor;
      }
      if (this.terms[i].r == 1) {
        if (this.terms[i].a == 1) str += "1";
        if (this.terms[i].a == -1) str += "1";
      }
    }
    return str;
  }
  perturb() {
    let ns = new Surd();
    for (let i = 0; i < this.terms.length; i++) {
      ns.terms.push({
        a: randInt(this.terms[i].a, this.terms[i].a - 10),
        r: this.terms[i].r
      });
    }
    return ns;
  }
}
class Q {
  constructor(num = 0, den = 1) {
    this.num = num;
    this.den = den;
  }
  randF(n, d, nonzero = false) {
    this.num = randInt(n, -n);
    while (nonzero && this.num === 0) {
      this.num = randInt(n, -n);
    }
    this.den = randInt(d, 1);
    this.reduced();
  }
  reciprocal() {
    return new Q(this.den, this.num);
  }
  isSurd() {
    return this.num instanceof Surd && this.den instanceof Surd;
  }
  sqrt() {
    let sq = new Q();
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (this.num.isNum()) {
        sq.num = new Surd([{ a: 1, r: this.num.terms[0].a }]);
      } else {
        sq.num = new Surd([{ a: 1, r: this.num.value() }]);
      }
      if (this.den.isNum()) {
        sq.den = new Surd([{ a: 1, r: this.den.terms[0].a }]);
      } else {
        sq.den = new Surd([{ a: 1, r: this.den.value() }]);
      }
    } else {
      sq.num = new Surd([{ a: 1, r: this.num }]);
      sq.den = new Surd([{ a: 1, r: this.den }]);
    }
    return sq;
  }
  isZero() {
    return this.num instanceof Surd && this.den instanceof Surd ? this.num.value() == 0 : this.num == 0;
  }
  isOne() {
    return this.num instanceof Surd && this.den instanceof Surd ? this.num.isOne() && this.den.isOne() : this.num == 1 && this.den == 1;
  }
  isMinusOne() {
    return this.num instanceof Surd && this.den instanceof Surd ? this.num.isMinusOne() && this.den.isOne() : this.num == -1 && this.den == 1;
  }
  isGZero() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      return this.num.value() > 0 && this.den.value() > 0 || this.num.value() < 0 && this.den.value() < 0;
    } else {
      return this.num > 0;
    }
  }
  isLZero() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      return this.num.value() < 0 && this.den.value() > 0 || this.num.value() > 0 && this.den.value() < 0;
    } else {
      return this.num < 0;
    }
  }
  isUndefined() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      return this.den.terms.length == 1 && this.den.terms[0].a == 0;
    } else {
      return this.den == 0;
    }
  }
  str(display = false) {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (this.den.equal(new Surd([{ a: 1, r: 1 }]))) {
        return `${this.num.str()}`;
      } else {
        let numstr = this.num.str();
        let denstr = this.den.str();
        return display ? `\\dfrac{${numstr}}{${denstr}}` : `\\frac{${numstr}}{${denstr}}`;
      }
    } else {
      if (this.num == 0) {
        return 0;
      }
      if (this.den == 1) {
        return this.num;
      }
      if (this.den == -1) {
        return -this.num;
      }
      if (this.den < 0) {
        return display ? `\\dfrac{${-this.num}}{${-this.den}}` : `\\frac{${-this.num}}{${-this.den}}`;
      }
      return display ? `\\dfrac{${this.num}}{${this.den}}` : `\\frac{${this.num}}{${this.den}}`;
    }
  }
  gcd() {
    let a = Math.abs(this.num);
    let b = Math.abs(this.den);
    if (b > a) {
      var temp = a;
      a = b;
      b = temp;
    }
    while (true) {
      if (b == 0) return a;
      a %= b;
      if (a == 0) return b;
      b %= a;
    }
  }
  lcm() {
    let g = this.gcd();
    return this.num * this.den / g;
  }
  reduced() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      let newQ = this.num.div(this.den);
      this.num = newQ.num;
      this.den = newQ.den;
    } else {
      if (this.den < 0) {
        this.den = -this.den;
        this.num = -this.num;
      }
      if (this.num == this.den) {
        this.num = 1;
        this.den = 1;
      } else if (this.num % this.den == 0) {
        this.num = this.num / this.den;
        this.den = 1;
      } else if (this.num % 1 == 0 && this.den % 1 == 0) {
        let g = this.gcd();
        this.num = this.num / g;
        this.den = this.den / g;
      } else {
        this.num = this.num / this.den;
        this.den = 1;
      }
    }
  }
  equal(f) {
    this.reduced();
    f.reduced();
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (this.isUndefined()) return false;
      if (f.isSurd()) {
        if (f.den.value() == 0) return false;
        return this.num.value() / this.den.value() == f.num.value() / f.den.value();
      } else {
        return this.num.value() / this.den.value() == f.num / f.den;
      }
    } else {
      if (f.isSurd()) {
        if (f.den.value() == 0) return false;
        return this.num / this.den == f.num.value() / f.den.value();
      } else {
        return this.num / this.den == f.num / f.den;
      }
    }
  }
  scale(k) {
    return this.num instanceof Surd && this.den instanceof Surd ? new Q(this.num.scale(k), this.den) : new Q(this.num * k, this.den);
  }
  abs() {
    return this.isLZero() ? this.scale(-1) : this;
  }
  add(f) {
    let newNum, newDen;
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (f.isSurd()) {
        newNum = this.num.mul(f.den).add(this.den.mul(f.num));
        newDen = this.den.mul(f.den);
      } else {
        newNum = this.num.scale(f.den).add(this.den.scale(f.num));
        newDen = this.den.scale(f.den);
      }
    } else {
      if (f instanceof Q && f.isSurd()) {
        newNum = f.den.scale(this.num).add(f.num.scale(this.den));
        newDen = f.den.scale(this.den);
      } else {
        newNum = this.num * f.den + this.den * f.num;
        newDen = this.den * f.den;
      }
    }
    return new Q(newNum, newDen);
  }
  sub(f) {
    let nf = f.scale(-1);
    return this.add(nf);
  }
  mul(f) {
    let newNum, newDen;
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (f.isSurd()) {
        newNum = this.num.mul(f.num);
        newDen = this.den.mul(f.den);
      } else {
        newNum = this.num.scale(f.num);
        newDen = this.den.scale(f.den);
      }
    } else {
      if (f.isSurd()) {
        newNum = f.num.scale(this.num);
        newDen = f.den.scale(this.den);
      } else {
        newNum = this.num * f.num;
        newDen = this.den * f.den;
      }
    }
    return new Q(newNum, newDen);
  }
  div(f) {
    let newNum, newDen;
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (f.isSurd()) {
        newNum = this.num.mul(f.den);
        newDen = this.den.mul(f.num);
      } else {
        newNum = this.num.scale(f.den);
        newDen = this.den.scale(f.num);
      }
    } else {
      if (f instanceof Surd && f.isSurd()) {
        newNum = f.den.scale(this.num);
        newDen = f.num.scale(this.den);
      } else {
        newNum = this.num * f.den;
        newDen = this.den * f.num;
      }
    }
    return new Q(newNum, newDen);
  }
  value() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      return this.num.value() / this.num.value();
    } else {
      return this.num / this.den;
    }
  }
  mixed() {
    if (this.num < this.den) return [this];
    let q = Math.floor(this.num / this.den);
    let r = this.num % this.den;
    return [q, new Q(r, this.den)];
  }
  between(f, k) {
    if (k === 0) return [];
    if (this.sub(f).isZero()) return [];
    if (this.sub(f).isLZero()) ;
  }
}
const F = (k) => {
  return new Q(k, 1);
};
export {
  F,
  Q,
  Surd as S
};
