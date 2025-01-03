import { r as randInt } from "./common.js";
import { S as Sets } from "./sets.js";
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
const limits = (problemnumber) => {
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(7, 3);
      let c = [];
      let s = new Sets();
      let powers = s.krandomIndices(10, n);
      for (let i = 0; i < n; i++) {
        c.push({ a: randInt(10, -10), r: powers[i] });
      }
      let poly = new Polynomial(c);
      let limit = randInt(2, -2);
      values[0] = poly.value(limit);
      values[1] = poly.value(limit + 1);
      values[2] = poly.value(limit - 1);
      values[3] = poly.value(limit + 2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the limit \\[\\lim_{x \\to ${limit}} ${poly.str()}\\]`;
      break;
    }
    case 1: {
      let num1 = new Polynomial();
      let den1 = new Polynomial();
      let limit = randInt(10, 1);
      num1.randPoly(2, 10, -10);
      den1.randPoly(2, 10, -10);
      let num2 = new Polynomial([{ a: -limit, r: 0 }, { a: 1, r: 1 }]);
      let num = num1.mul(num2);
      let den = den1.mul(num2);
      let numVal = num1.value(limit);
      let denVal = den1.value(limit);
      let val = new Q(numVal, denVal);
      val.reduced();
      let val1 = val.add(new Q(1));
      let val2 = val.add(new Q(-1));
      let val3 = val.add(new Q(2));
      val1.reduced();
      val2.reduced();
      val3.reduced();
      values[0] = `\\(${val.str()}\\)`;
      values[1] = `\\(${val1.str()}\\)`;
      values[2] = `\\(${val2.str()}\\)`;
      values[3] = `\\(${val3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\lim_{x \\to ${limit}}\\dfrac{${num.str()}}{${den.str()}}\\)`;
      break;
    }
    case 2: {
      let n1 = randInt(10, 1);
      let n2 = randInt(10, 1);
      let a = randInt(10, 1);
      let limf = new Q(n1, n2);
      limf.reduced();
      let limf1 = limf.add(new Q(1));
      let limf2 = limf.add(new Q(-1));
      let limf3 = limf.add(new Q(2));
      limf1.reduced();
      limf2.reduced();
      limf3.reduced();
      values[0] = `\\(${a}^{${n1 - n2}}\\times ${limf.str()}\\)`;
      values[1] = `\\(${a}^{${n1 - n2}}\\times ${limf1.str()}\\)`;
      values[2] = `\\(${a}^{${n1 - n2}}\\times ${limf2.str()}\\)`;
      values[3] = `\\(${a}^{${-n1 + n2}}\\times ${limf3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\lim_{x\\to ${a}}\\dfrac{x^{${n1}} - ${a}}{x^{${n2}} - ${a}}\\)`;
      break;
    }
    case 3: {
      let a = randInt(10, 1);
      let b = randInt(10, 1);
      let sol = new Q(a, b);
      sol.reduced();
      let sol1 = sol.reciprocal();
      if (sol1.isOne()) sol1 = sol1.add(new Q(1));
      values[0] = `\\(${sol.str()}\\)`;
      values[1] = `\\(${sol1.str()}\\)`;
      values[2] = `\\(${sol.scale(-1).str()}\\)`;
      values[3] = `\\(${sol1.scale(-1).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\lim_{x\\to 0}\\dfrac{\\sin ${a}x} {\\sin${b}x}\\)`;
      break;
    }
    case 4: {
      let k = randInt(10, 1);
      let alpha = randInt(10, 2);
      let a = new Q(k * (1 - alpha), 1 + alpha * alpha);
      let b = new Q(k * (1 + alpha), 1 + alpha * alpha);
      a.reduced();
      b.reduced();
      values[0] = `\\(a = ${a.str(true)}, b = ${b.str(true)}\\)`;
      values[1] = `\\(a = ${a.scale(-1).str(true)}, b = ${b.str(true)}\\)`;
      values[2] = `\\(a = ${a.str(true)}, b = ${b.scale(-1).str(true)}\\)`;
      values[3] = `\\(a = ${a.scale(-1).str(true)}, b = ${b.scale(-1).str(true)}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Let \\(f(x)=\\begin{cases} a + bx & x < ${alpha} \\\\ k & x = ${alpha} \\\\ b - ax & x > ${alpha} \\end{cases}\\) If \\(\\lim_{x\\to ${alpha}} = f(${alpha})\\), then \\(a\\) and \\(b\\) are`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  limits
};
