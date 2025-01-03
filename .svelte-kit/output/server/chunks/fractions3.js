import { a as randSubset, r as randInt } from "./common.js";
import { Q } from "./fraction.js";
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
const fractions = (problemnumber) => {
  let N = 11;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(10, 3);
      let r2 = randInt(r1 - 1, 1);
      values[0] = `\\(\\dfrac{${r2}}{${r1}}\\)`;
      values[1] = `\\(\\dfrac{${r1}}{${r2}}\\)`;
      values[2] = `\\(\\dfrac{${r1 + r2}}{${r1}}\\)`;
      values[3] = `\\(\\dfrac{${r1 + r2}}{${r2}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which is a proper fraction?`;
      break;
    }
    case 1: {
      let r1 = randInt(10, 3);
      let r2 = randInt(r1 - 1, 1);
      let q = new Q(r1, r2);
      let mixd = q.mixed();
      let fstr = mixd[1].isZero() ? "" : mixd[1].str();
      values[0] = `\\(${mixd[0]}${fstr}\\)`;
      values[1] = `\\(${mixd[0] - 1}${fstr}\\)`;
      values[2] = `\\(${mixd[0] + 1}${fstr}\\)`;
      values[3] = `\\(${mixd[0] + 2}${fstr}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Write \\(\\frac{${r1}}{${r2}}\\) as mixed fraction.`;
      break;
    }
    case 2: {
      let q = randInt(10, 1);
      let r = randInt(10, 1);
      let n = randInt(20, r + 1);
      let impQ = new Q(q * n + r, n);
      let impQ1 = impQ.add(new Q(1));
      let impQ2 = impQ.sub(new Q(1));
      let impQ3 = impQ.add(new Q(2));
      values[0] = `\\(${impQ.str()}\\)`;
      values[1] = `\\(${impQ1.str()}\\)`;
      values[2] = `\\(${impQ2.str()}\\)`;
      values[3] = `\\(${impQ3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Write \\(${q}\\frac{${r}}{${n}}\\) as improper fraction.`;
      break;
    }
    case 3: {
      let num = randInt(10, 1);
      let den = randInt(10, 1);
      let ks = randSubset(20, 4);
      values[0] = `\\(\\frac{${ks[0] * num}}{${ks[1] * den}}\\)`;
      values[1] = `\\(\\frac{${ks[1] * num}}{${ks[1] * den}}\\)`;
      values[2] = `\\(\\frac{${ks[2] * num}}{${ks[2] * den}}\\)`;
      values[3] = `\\(\\frac{${ks[3] * num}}{${ks[3] * den}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which is not equivalent to \\(\\frac{${num}}{${den}}\\)?`;
      break;
    }
    case 4: {
      let num = randInt(10, 1);
      let den = randInt(10, 1);
      let ks = randSubset(20, 4);
      let denTarget = ks[3] * den;
      values[0] = `\\(\\frac{${ks[3] * num}}{${ks[3] * den}}\\)`;
      values[1] = `\\(\\frac{${ks[3] * num + 1}}{${ks[3] * den}}\\)`;
      values[2] = `\\(\\frac{${ks[2] * num - 1}}{${ks[2] * den}}\\)`;
      values[3] = `\\(\\frac{${ks[3] * num - 1}}{${ks[3] * den}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Find the equivalent fraction of \\(\\frac{${num}}{${den}}\\) with denominator ${denTarget}?`;
      break;
    }
    case 5: {
      let num1 = randInt(100, 1);
      let num2 = randInt(100, 1);
      let den = randInt(100, 1);
      let comps = ["<", ">", "=", "none"];
      let compIndex = num1 < num2 ? 0 : num1 === num2 ? 2 : 1;
      values[0] = comps[compIndex];
      values[1] = comps[(compIndex + 1) % 4];
      values[2] = comps[(compIndex + 2) % 4];
      values[3] = comps[(compIndex + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\dfrac{${num1}}{${den}}\\) _____ \\(\\dfrac{${num2}}{${den}}\\)?`;
      break;
    }
    case 6: {
      let num1 = randInt(100, 1);
      let num2 = randInt(100, 1);
      let den1 = randInt(10, 1);
      let den2 = randInt(10, 1);
      let comps = ["<", ">", "=", "none"];
      let compIndex = num1 / den1 < num2 / den2 ? 0 : num1 / den1 === num2 / den2 ? 2 : 1;
      values[0] = comps[compIndex];
      values[1] = comps[(compIndex + 1) % 4];
      values[2] = comps[(compIndex + 2) % 4];
      values[3] = comps[(compIndex + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\dfrac{${num1}}{${den1}}\\) _____ \\(\\dfrac{${num2}}{${den2}}\\)?`;
      break;
    }
    case 7: {
      let num1 = randInt(100, 1);
      let num2 = randInt(100, 1);
      let den = randInt(100, 1);
      values[0] = `\\(\\dfrac{${num1 + num2}}{${den}}\\)`;
      values[1] = `\\(\\dfrac{${num1 + num2}}{${den + den}}\\)`;
      values[2] = `\\(\\dfrac{${num1}}{${den + den}}\\)`;
      values[3] = `\\(\\dfrac{${num2}}{${den + den}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\dfrac{${num1}}{${den}}+\\dfrac{${num2}}{${den}} =\\)?`;
      break;
    }
    case 8: {
      let num1 = randInt(100, 1);
      let num2 = randInt(100, 1);
      let den = randInt(100, 1);
      values[0] = `\\(\\dfrac{${num1 - num2}}{${den}}\\)`;
      values[1] = `\\(\\dfrac{${-num1 + num2}}{${den}}\\)`;
      values[2] = `\\(\\dfrac{${num1}}{${den + den}}\\)`;
      values[3] = `\\(\\dfrac{${num2}}{${den + den}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\dfrac{${num1}}{${den}} - \\dfrac{${num2}}{${den}} =\\)?`;
      break;
    }
    case 9: {
      let num1 = randInt(100, 1);
      let num2 = randInt(100, 1);
      let den1 = randInt(10, 1);
      let den2 = randInt(10, 1);
      let q1 = new Q(num1, den1);
      let q2 = new Q(num2, den2);
      values[0] = `\\(${q1.add(q2).str()}\\)`;
      values[1] = `\\(${q1.sub(q2).str()}\\)`;
      values[2] = `\\(${q2.sub(q1).str()}\\)`;
      values[3] = `\\(\\dfrac{${num1 + num2}}{${den1 + den2}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\dfrac{${num1}}{${den1}}+\\dfrac{${num2}}{${den2}} =\\)?`;
      break;
    }
    case 10: {
      let num1 = randInt(100, 1);
      let num2 = randInt(100, 1);
      let den1 = randInt(10, 1);
      let den2 = randInt(10, 1);
      let q1 = new Q(num1, den1);
      let q2 = new Q(num2, den2);
      values[0] = `\\(${q1.sub(q2).str()}\\)`;
      values[1] = `\\(${q1.add(q2).str()}\\)`;
      values[2] = `\\(${q2.add(q1).str()}\\)`;
      values[3] = `\\(\\dfrac{${num1 + num2}}{${den1 + den2}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\dfrac{${num1}}{${den1}} - \\dfrac{${num2}}{${den2}} =\\)?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  fractions
};
