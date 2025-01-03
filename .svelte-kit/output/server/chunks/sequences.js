import { r as randInt } from "./common.js";
import { Q } from "./fraction.js";
import { P as Polynomial } from "./polynomial3.js";
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
const sequences = (problemnumber) => {
  let N = 10;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = randInt(10, 2);
      let b = randInt(10, 1);
      let c = randInt(10, 2);
      let d = randInt(10, 1);
      let t = randInt(5, 2);
      let terms = [];
      let f;
      for (let i = 0; i < t + 3; i++) {
        f = new Q(a * (i + 1) + b, c * (i + 1) + d);
        f.reduced();
        terms.push(f.str());
      }
      let output = "";
      for (let i = 0; i < t - 1; i++) {
        output += terms[i] + ", ";
      }
      values[0] = `\\(${output + terms[t - 1]}\\)`;
      values[1] = `\\(${output + terms[t]}\\)`;
      values[2] = `\\(${output + terms[t + 1]}\\)`;
      values[3] = `\\(${output + terms[t + 2]}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The first ${t} terms of the sequence \\(a_n = \\frac{${a}n + ${b}}{${c}n + ${d}}\\) are`;
      break;
    }
    case 1: {
      let a = randInt(10, 1);
      let b = randInt(10, 1);
      let Sn = `n(${a}n + ${b})`;
      let n = randInt(10, 1);
      let sol = (2 * n - 1) * a + b;
      let ender = n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
      values[0] = sol;
      values[1] = sol - 1;
      values[2] = sol + 1;
      values[3] = sol + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the sum of \\(n\\) terms of an AP is \\(S_n = ${Sn}\\), then the \\(${n}\\)${ender} term will be`;
      break;
    }
    case 2: {
      let m = randInt(50, 3);
      let d = randInt(10, -10, true);
      let k = randInt(m - 1, 1);
      let start = randInt(10, 1);
      let end = start + (m + 1) * d;
      let ratio = new Q(start + k * d, start + (m - 1) * d);
      ratio.reduced();
      let r1 = ratio.num;
      let r2 = ratio.den;
      values[0] = m;
      values[1] = m - 1;
      values[2] = m + 1;
      values[3] = m + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      let ender = k === 1 ? "st" : k === 2 ? "nd" : k === 3 ? "rd" : "th";
      problemset.s = `Between ${start} and ${end}, \\(m\\) numbers have been inserted in such a way that the resulting sequence is an AP and the ratio of ${k}${ender} and \\((m - 1)\\)th numbers is ${r1} : ${r2}. What is the value of \\(m\\)?`;
      break;
    }
    case 3: {
      let a = randInt(10, -10, true);
      let r = randInt(5, -5, true);
      let terms = [];
      for (let i = 0; i < 3; i++) {
        terms.push(a * Math.pow(r, i));
      }
      let termStr = terms.join(", ");
      let k = randInt(10, 4);
      values[0] = a * Math.pow(r, k - 1);
      values[1] = a * Math.pow(r, k);
      values[2] = a * Math.pow(r, k + 1);
      values[3] = a * Math.pow(r, k - 2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      let ender = k === 1 ? "st" : k === 2 ? "nd" : k === 3 ? "rd" : "th";
      problemset.s = `What is the ${k}${ender} term of the GP \\(${termStr}\\)`;
      break;
    }
    case 4: {
      let a = randInt(10, -10, true);
      let r = randInt(10, -10, true);
      let sum = a + a * r + a * r * r;
      let product = Math.pow(a, 3) * Math.pow(r, 3);
      values[0] = r;
      values[1] = r - 1;
      values[2] = r + 1;
      values[3] = r + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The sum of first three terms of a GP is \\(${sum}\\) and their product is \\(${product}\\). The common ratio of GP is`;
      break;
    }
    case 5: {
      let a = randInt(10, 1);
      let b = randInt(10, 1);
      let A = 4 * a * a;
      let B = 4 * b * b;
      let am = (A + B) / 2;
      let gm = 4 * a * b;
      values[0] = A + ", " + B;
      values[1] = A + 1 + ", " + B;
      values[2] = A + ", " + (B + 1);
      values[3] = A - 1 + ", " + (B - 1);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If AM and GM of two positive numbers \\(a\\) and \\(b\\) are ${am} and ${gm}, respectively, then the numbers are`;
      break;
    }
    case 6: {
      let k = randInt(10, -10);
      let n = randInt(100, 3);
      let series = "";
      for (let i = 1; i < 4; i++) {
        series += i + k + (i + 1 + k >= 0 ? " + " : " ");
      }
      series += "\\cdots + " + (n + k);
      let sum = n * (n + 1) / 2 + n * k;
      values[0] = sum;
      values[1] = sum - 1;
      values[2] = sum + 1;
      values[3] = sum + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the sum of the series \\(${series}\\)`;
      break;
    }
    case 7: {
      let k = randInt(10, -10, true);
      let n = randInt(20, 3);
      let series = "";
      for (let i = 1; i < 4; i++) {
        series += i * i + k + ((i + 1) * (i + 1) + k >= 0 ? " + " : " ");
      }
      series += "\\cdots + " + (n + k) * (n + k);
      let sum = n * (n + 1) * (2 * n + 1) / 6 + n * k;
      values[0] = sum;
      values[1] = sum - 1;
      values[2] = sum + 1;
      values[3] = sum + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the sum of the series \\(${series}\\)`;
      break;
    }
    case 8: {
      let k = randInt(10, -10, true);
      let n = randInt(20, 3);
      let series = "";
      for (let i = 1; i < 4; i++) {
        series += i * i * i + k + ((i + 1) * (i + 1) * (i + 1) + k >= 0 ? " + " : " ");
      }
      series += "\\cdots + " + (n + k) * (n + k);
      let sum = n * n * (n + 1) * (n + 1) / 4 + n * k;
      values[0] = sum;
      values[1] = sum - 1;
      values[2] = sum + 1;
      values[3] = sum + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the sum of the series \\(${series}\\)`;
      break;
    }
    case 9: {
      let a = randInt(10, -10);
      let b = randInt(10, -10);
      let c = randInt(10, -10);
      let d = randInt(10, -10);
      let an = new Polynomial([{ a, r: 3 }, { a: b, r: 2 }, { a: c, r: 1 }, { a: c, r: 0 }], "n");
      an.randPoly(3);
      let c3 = 3 * a;
      let c2 = 6 * a + 4 * b;
      let c1 = 3 * a + 6 * b + 6 * c;
      let c0 = 2 * b + 6 * c + 12 * d;
      let sumpoly = new Polynomial([{ a: c3, r: 3 }, { a: c2, r: 2 }, { a: c1, r: 1 }, { a: c0, r: 0 }], "n");
      let sumpoly1 = sumpoly.randomPerturb();
      let sumpoly2 = sumpoly.randomPerturb();
      let sumpoly3 = sumpoly.randomPerturb();
      let sum = `\\dfrac{n}{12}(${sumpoly.str()})`;
      let sum1 = `\\dfrac{n}{12}(${sumpoly1.str()})`;
      let sum2 = `\\dfrac{n}{12}(${sumpoly2.str()})`;
      let sum3 = `\\dfrac{n}{12}(${sumpoly3.str()})`;
      values[0] = `\\(${sum}\\)`;
      values[1] = `\\(${sum1}\\)`;
      values[2] = `\\(${sum2}\\)`;
      values[3] = `\\(${sum3}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The sum of \\(n\\) terms of the series whose \\(n\\)th term is \\(${an.str()}\\) is`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  sequences
};
