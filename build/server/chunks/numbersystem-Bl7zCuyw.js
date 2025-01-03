import { r as randInt, d as digits } from './common-CIVVH1Lv.js';
import { Q, S as Surd } from './fraction-DfHHiAXd.js';
import './nt-DokVuTcK.js';
import './sets-jGIduNNd.js';

class NonTerminating {
  constructor(n = 0, d = 0, r = 0) {
    this.n = n;
    this.d = d;
    this.r = r;
  }
  randomNonTerminating(limit = 1e6) {
    let M = randInt(limit, 1);
    let ds = digits(M);
    let d = ds.length;
    let decimalDegits = randInt(d, 1);
    let rDigits = randInt(decimalDegits, 1);
    this.r = M % Math.pow(10, rDigits);
    let t1 = (M - this.r) / Math.pow(10, rDigits);
    this.d = t1 % Math.pow(10, decimalDegits);
    this.n = (t1 - this.d) / Math.pow(10, decimalDegits);
  }
  toRational() {
    let decimalDegi = digits(this.d);
    let decimalDegits = decimalDegi.length;
    let rDi = digits(this.r);
    let rDigits = rDi.length;
    let part1 = new Q(this.n, 1);
    let part2 = new Q(this.d, Math.pow(10, decimalDegits));
    let part3 = new Q(this.r, Math.pow(10, decimalDegits) * (Math.pow(10, rDigits) - 1));
    part2.reduced();
    part3.reduced();
    let rational = part1.add(part2).add(part3);
    rational.reduced();
    return rational;
  }
  str() {
    return this.n + "." + this.d + `\\overline{${this.r}}`;
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
const numbersystem = (problemnumber) => {
  let N = 10;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(20, 15);
      let r2 = randInt(r1 - 1, 7);
      let r3 = randInt(r2 - 1, 1);
      values[0] = `\\(\\sqrt{${r2 * r2 + 1}}\\)`;
      values[1] = `\\(\\sqrt{${r1 * r1}}\\)`;
      values[2] = `\\(\\sqrt{${r2 * r2}}\\)`;
      values[3] = `\\(\\sqrt{${r3 * r3}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following is an irrational number?`;
      break;
    }
    case 1: {
      let nonTerm = new NonTerminating();
      nonTerm.randomNonTerminating(1e4);
      let x = nonTerm.str();
      let rational = nonTerm.toRational();
      let rational1 = rational.add(new Q(1));
      let rational2 = rational.add(new Q(-1));
      let rational3 = rational.add(new Q(2));
      rational1.reduced();
      rational2.reduced();
      rational3.reduced();
      values[0] = `\\(${rational.str()}\\)`;
      values[1] = `\\(${rational1.str()}\\)`;
      values[2] = `\\(${rational2.str()}\\)`;
      values[3] = `\\(${rational3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Represent \\(${x}\\) as a rational number`;
      break;
    }
    case 2: {
      let s1 = new Surd();
      let s2 = new Surd();
      s1.randomSurd(100);
      s1.reduced();
      s1.removeDuplicates();
      for (let i = 0; i < s1.terms.length; i++) {
        s2.terms.push({
          a: randInt(100, 1),
          r: s1.terms[i].r
        });
      }
      let sum = s1.add(s2);
      let sum1 = sum.perturb();
      let sum2 = sum.perturb();
      let sum3 = sum.perturb();
      values[0] = `\\(${sum.str()}\\)`;
      values[1] = `\\(${sum1.str()}\\)`;
      values[2] = `\\(${sum2.str()}\\)`;
      values[3] = `\\(${sum3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${s1.str()} + ${s2.str()} =\\)`;
      break;
    }
    case 3: {
      let s1 = new Surd();
      let s2 = new Surd();
      s1.randomSurd(100);
      s1.reduced();
      s1.removeDuplicates();
      for (let i = 0; i < s1.terms.length; i++) {
        s2.terms.push({
          a: randInt(100, 1),
          r: s1.terms[i].r
        });
      }
      let sum = s1.sub(s2);
      let sum1 = sum.perturb();
      let sum2 = sum.perturb();
      let sum3 = sum.perturb();
      values[0] = `\\(${sum.str()}\\)`;
      values[1] = `\\(${sum1.str()}\\)`;
      values[2] = `\\(${sum2.str()}\\)`;
      values[3] = `\\(${sum3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${s1.str()}) - (${s2.str()}) =\\)`;
      break;
    }
    case 4: {
      let s1 = new Surd();
      let s2 = new Surd();
      s1.randomPureSurd(100);
      s2.randomPureSurd(100);
      let product = s1.mul(s2);
      product.reduced();
      values[0] = `\\(${product.str()}\\)`;
      values[1] = `\\(${product.perturb().str()}\\)`;
      values[2] = `\\(${product.perturb().str()}\\)`;
      values[3] = `\\(${product.perturb().str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${s1.str()}) \\times (${s2.str()}) =\\)`;
      break;
    }
    case 5: {
      let s1 = new Surd();
      let s2 = new Surd();
      s1.randomSurd(10);
      s1.reduced();
      s1.removeDuplicates();
      for (let i = 0; i < s1.terms.length; i++) {
        s2.terms.push({
          a: randInt(10, 1),
          r: s1.terms[i].r
        });
      }
      let sum = s1.mul(s2);
      sum.reduced();
      sum.removeDuplicates();
      let sum1 = sum.perturb();
      let sum2 = sum.perturb();
      let sum3 = sum.perturb();
      values[0] = `\\(${sum.str()}\\)`;
      values[1] = `\\(${sum1.str()}\\)`;
      values[2] = `\\(${sum2.str()}\\)`;
      values[3] = `\\(${sum3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${s1.str()}) \\times (${s2.str()}) =\\)`;
      break;
    }
    case 6: {
      let s = new Surd();
      do {
        s.randomSurd(10, 2);
        s.reduced();
        s.removeDuplicates();
      } while (s.terms[1].r === 1);
      let s1 = s.conjugate();
      let den = s.mul(s1);
      den.reduced();
      den.removeDuplicates();
      values[0] = `\\(\\dfrac{${s1.str()}}{${den.str()}}\\)`;
      values[1] = `\\(\\dfrac{${s1.scale(-1).str()}}{${den.str()}}\\)`;
      values[2] = `\\(\\dfrac{${s1.perturb().str()}}{${den.str()}}\\)`;
      values[3] = `\\(\\dfrac{${s1.perturb().str()}}{${den.perturb().str()}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\dfrac{1}{${s.str()}} =\\)`;
      break;
    }
    case 7: {
      let a = randInt(10, 2);
      let b = randInt(10, 2);
      while (Number.isInteger(Math.sqrt(a))) {
        a = randInt(10, 2);
      }
      while (a == b || Number.isInteger(Math.sqrt(b))) {
        b = randInt(10, 2);
      }
      let s = new Surd();
      s.terms = [{ a: a + b, r: 1 }, { a: -2, r: a * b }];
      s.reduced();
      s.removeDuplicates();
      let den = a - b;
      values[0] = `\\(\\dfrac{${s.str()}}{${den}}\\)`;
      values[1] = `\\(\\dfrac{${s.scale(-1).str()}}{${den}}\\)`;
      values[2] = `\\(\\dfrac{${s.perturb().str()}}{${den}}\\)`;
      values[3] = `\\(\\dfrac{${s.perturb().str()}}{${den}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\dfrac{1}{\\sqrt{${a}} + \\sqrt{${b}}} =\\)`;
      break;
    }
    case 8: {
      let q1 = new Q();
      q1.randF(100, 100, true);
      let q2 = new Q();
      q2.randF(100, 100, true);
      let b = randInt(100, 2);
      let s = q1.add(q2);
      s.reduced();
      values[0] = `\\({${b}}^{${s.str()}}\\)`;
      values[1] = `\\({${b}}^{${s.add(new Q(1)).str()}}\\)`;
      values[2] = `\\({${b}}^{${s.add(new Q(-1)).str()}}\\)`;
      values[3] = `\\({${b}}^{${s.add(new Q(2)).str()}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\( {${b}}^{${q1.str()}}\\times {${b}}^{${q2.str()}}  =\\)`;
      break;
    }
    case 9: {
      let q1 = new Q();
      q1.randF(10, 10, true);
      let q2 = new Q();
      q2.randF(10, 10, true);
      let b = randInt(100, 2);
      let s = q1.sub(q2);
      s.reduced();
      values[0] = `\\({${b}}^{${s.str()}}\\)`;
      values[1] = `\\({${b}}^{${s.add(new Q(1)).str()}}\\)`;
      values[2] = `\\({${b}}^{${s.add(new Q(-1)).str()}}\\)`;
      values[3] = `\\({${b}}^{${s.add(new Q(2)).str()}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\( {${b}}^{${q1.str()}}\\div {${b}}^{${q2.str()}}  =\\)`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { numbersystem };
//# sourceMappingURL=numbersystem-Bl7zCuyw.js.map
