import { r as randInt } from "./common2.js";
import { p as powerset } from "./sets3.js";
const seive = (N) => {
  if (N <= 1) return [];
  var numbers = new Array(N);
  for (var i = 0; i < N; i++) {
    numbers[i] = true;
  }
  for (var i = 2; i < Math.sqrt(N); i++) {
    for (var j = i * i; j < N; j += i) {
      numbers[j] = false;
    }
  }
  var primes = [];
  for (var i = 2; i < N; i++) {
    if (numbers[i]) {
      primes.push(i);
    }
  }
  return primes;
};
const factor = (N) => {
  if (N <= 1) return [{ prime: N, power: 0 }];
  let primes = seive(N);
  let factors = [];
  for (let k = 0; k < primes.length && N > 1; k++) {
    let p = primes[k];
    if (N % p === 0) {
      let fact = { prime: p, power: 0 };
      while (N % p === 0) {
        fact.power++;
        N /= p;
      }
      factors.push(fact);
    }
  }
  if (N > 1) {
    factors.push({ prime: N, power: 1 });
  }
  return factors;
};
const filterSquare = (N) => {
  let factors = factor(N);
  let squares = [];
  let nonSquares = [];
  for (let i = 0; i < factors.length; i++) {
    if (factors[i].power > 1) {
      squares.push({ prime: factors[i].prime, power: Math.floor(factors[i].power / 2) });
    }
    factors[i].power = factors[i].power % 2;
  }
  nonSquares = factors.filter((factor2) => factor2.power == 1);
  return { a: squares, r: nonSquares };
};
class Surd {
  // natural radicals
  constructor(terms = []) {
    this.terms = terms;
  }
  reduced() {
    for (let i = 0; i < this.terms.length; i++) {
      if (this.terms[i].r !== 1) {
        let { a, r } = filterSquare(this.terms[i].r);
        let an = a.length > 0 ? a.map((item) => Math.pow(item.prime, item.power)).reduce((x, y) => x * y) : 1;
        let rn = r.length > 0 ? r.map((item) => Math.pow(item.prime, item.power)).reduce((x, y) => x * y) : 1;
        this.terms[i].a *= an;
        this.terms[i].r = rn;
      }
    }
    this.removeDuplicates();
  }
  removeDuplicates() {
    if (this.terms.length > 1) {
      let markTerms = new Array(this.terms.length);
      for (let i = 0; i < this.terms.length; i++) {
        markTerms[i] = true;
      }
      for (let i = 0; i < this.terms.length; i++) {
        if (markTerms[i]) {
          for (let j = i + 1; j < this.terms.length; j++) {
            if (this.terms[i].r == this.terms[j].r) {
              this.terms[i].a += this.terms[j].a;
              markTerms[j] = false;
            }
          }
        }
      }
      this.terms = this.terms.filter((index) => markTerms[index]);
      this.terms = this.terms.filter((term) => term.a != 0 || term.r == 1);
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
  randomSurd(max) {
    let n = randInt(4, 2);
    this.terms.push({ a: randInt(max, 2), r: 1 });
    for (let i = 1; i < n; i++) {
      this.terms.push({ a: randInt(max, 2), r: randInt(max, 2) });
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
    this.reduced();
    s.reduced();
    let newSurd = new Surd();
    let matched = new Array(s.terms.length);
    for (let i = 0; i < s.terms.length; i++) {
      matched[i] = false;
    }
    for (let i = 0; i < this.terms.length; i++) {
      newSurd.terms.push(this.terms[i]);
      for (let j = 0; j < s.terms.length; j++) {
        if (this.terms[i].r == s.terms[j].r) {
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
      newSurd.terms.push(this.terms[0]);
      newSurd.terms.push(this.terms[1]);
      newSurd.terms[1].a = -newSurd.terms[1].a;
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
    return new Q(num, den);
  }
  str() {
    let factor2 = "";
    let str = "";
    if (this.terms.length == 0) return "";
    let i = 0;
    if (this.terms[i].a == 0) {
      str = str + "";
    } else if (this.terms[i].a > 0) {
      factor2 = this.terms[i].a == 1 && this.terms[i].r !== 1 ? "" : this.terms[i].a;
    } else {
      factor2 = this.terms[i].a == -1 && this.terms[i].r !== 1 ? "-" : this.terms[i].a;
    }
    str += this.terms[i].r !== 1 ? factor2 + `\\sqrt{${this.terms[i].r}}` : factor2;
    for (i = 1; i < this.terms.length; i++) {
      if (this.terms[i].a == 0) {
        str = str + "";
      } else if (this.terms[i].a > 0) {
        factor2 = this.terms[i].a == 1 ? "" : this.terms[i].a;
        str += this.terms[i].r !== 1 ? "+" + factor2 + `\\sqrt{${this.terms[i].r}}` : "+" + factor2;
      } else {
        factor2 = this.terms[i].a == -1 ? "-" : this.terms[i].a;
        str += this.terms[i].r !== 1 ? factor2 + `\\sqrt{${this.terms[i].r}}` : factor2;
      }
    }
    return str;
  }
}
class Q {
  constructor(num = 0, den = 1) {
    this.num = num;
    this.den = den;
  }
  randF(n, d) {
    this.num = randInt(n, -n);
    this.den = randInt(d, 1);
    this.reduced();
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
  str() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (this.den.equal(new Surd([{ a: 1, r: 1 }]))) {
        return `${this.num.str()}`;
      } else {
        let numstr = this.num.str();
        let denstr = this.den.str();
        return `\\frac{${numstr}}{${denstr}}`;
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
        return `\\frac{${-this.num}}{${-this.den}}`;
      }
      return `\\frac{${this.num}}{${this.den}}`;
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
      if (f.isSurd()) {
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
      if (f.isSurd()) {
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
}
export {
  Q
};
