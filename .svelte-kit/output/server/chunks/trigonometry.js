import { r as randInt, p as pythagoreanTriplet, g as gcd } from "./common.js";
import { t as trigF, a as trigC, T as TrigExpression } from "./trigonometry3.js";
import { Q, S as Surd } from "./fraction.js";
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
const trigonometry = (problemnumber) => {
  let N = 11;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let theta = randInt(359, 1);
      let g = gcd(theta, 180);
      let t = theta / g;
      let f = randInt(10, 1);
      let l = t * f;
      values[0] = (l * 180 / theta).toFixed(2);
      values[1] = (theta * 180 / l).toFixed(2);
      values[2] = (l / theta).toFixed(2);
      values[3] = l * 180 / theta + `\\(\\pi\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + " m";
      }
      problemset.s = `What is the radius of the circle in which a central angle of \\(${theta}^\\circ\\) intercepts an arc of length \\(${l}\\pi\\) m?`;
      break;
    }
    case 1: {
      let n = randInt(100, 1);
      values[0] = `\\(${2 * n + 1}\\frac{\\pi}{2}\\)`;
      values[1] = `\\(${2 * n + 1}\\frac{\\pi}{3}\\)`;
      values[2] = `\\(${2 * n + 1}\\frac{\\pi}{4}\\)`;
      values[3] = `\\(${n}\\pi\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(\\cos x = 0\\), then which of these is a valid value of \\(x\\)?`;
      break;
    }
    case 2: {
      let t = pythagoreanTriplet();
      values[0] = `\\(\\frac{${t.p}}{${t.h}}\\)`;
      values[1] = `\\(\\frac{${t.b}}{${t.h}}\\)`;
      values[2] = `\\(\\frac{${t.b}}{${t.p}}\\)`;
      values[3] = `\\(\\frac{${t.p}}{${t.p}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(\\tan \\theta = \\frac{${t.p}}{${t.b}}\\), then what is the value of \\(\\sin \\theta\\)?`;
      break;
    }
    case 3: {
      let t = pythagoreanTriplet();
      values[0] = `\\(\\frac{${t.b}}{${t.h}}\\)`;
      values[1] = `\\(\\frac{${t.p}}{${t.h}}\\)`;
      values[2] = `\\(\\frac{${t.b}}{${t.p}}\\)`;
      values[3] = `\\(\\frac{${t.p}}{${t.p}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(\\tan \\theta = \\frac{${t.p}}{${t.b}}\\), then what is the value of \\(\\cos \\theta\\)?`;
      break;
    }
    case 4: {
      let t = pythagoreanTriplet();
      values[0] = `\\(\\frac{${t.b}}{${t.h}}\\)`;
      values[1] = `\\(\\frac{${t.p}}{${t.h}}\\)`;
      values[2] = `\\(\\frac{${t.b}}{${t.p}}\\)`;
      values[3] = `\\(\\frac{${t.p}}{${t.b}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(\\sin \\theta = \\frac{${t.p}}{${t.h}}\\), then what is the value of \\(\\cos \\theta\\)?`;
      break;
    }
    case 5: {
      let t = pythagoreanTriplet();
      values[0] = `\\(\\frac{${t.p}}{${t.h}}\\)`;
      values[1] = `\\(\\frac{${t.b}}{${t.h}}\\)`;
      values[2] = `\\(\\frac{${t.b}}{${t.p}}\\)`;
      values[3] = `\\(\\frac{${t.p}}{${t.b}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(\\cos \\theta = \\frac{${t.p}}{${t.h}}\\), then what is the value of \\(\\sin \\theta\\)?`;
      break;
    }
    case 6: {
      let t = pythagoreanTriplet();
      values[0] = `\\(\\frac{${t.p}}{${t.h}}\\)`;
      values[1] = `\\(\\frac{${t.b}}{${t.h}}\\)`;
      values[2] = `\\(\\frac{${t.b}}{${t.p}}\\)`;
      values[3] = `\\(\\frac{${t.p}}{${t.b}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(b = ${t.b}\\) and \\(h - p = ${t.h - t.p}\\), then what is the value of \\(\\sin \\theta\\)?`;
      break;
    }
    case 7: {
      let texpr = new TrigExpression();
      texpr.randExpr(2, [], 2);
      let val = texpr.surdValue();
      val.reduced();
      let one = new Q(new Surd([{ a: 1, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      let minusone = new Q(new Surd([{ a: -1, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      let two = new Q(new Surd([{ a: 2, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      values[0] = `\\(${val.str()}\\)`;
      values[1] = `\\(${val.add(one).str()}\\)`;
      values[2] = `\\(${val.add(minusone).str()}\\)`;
      values[3] = `\\(${val.add(two).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size:0.7em !important;">\\(${texpr.str()}\\)</span>`;
      break;
    }
    case 8: {
      let texpr = new TrigExpression();
      texpr.randExpr(2, [], 2, 2, -1);
      let val = texpr.surdValue();
      val.reduced();
      let one = new Q(new Surd([{ a: 1, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      let minusone = new Q(new Surd([{ a: -1, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      let two = new Q(new Surd([{ a: 2, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      values[0] = `\\(${val.str()}\\)`;
      values[1] = `\\(${val.add(one).str()}\\)`;
      values[2] = `\\(${val.add(minusone).str()}\\)`;
      values[3] = `\\(${val.add(two).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size:0.7em !important;">\\(${texpr.str()}\\)</span>`;
      break;
    }
    case 9: {
      let texpr = new TrigExpression();
      texpr.randExpr(2, [], 2, 2, -1);
      let texpr1 = new TrigExpression();
      texpr1.randExpr(2, [], 2, 2, -1);
      let val = texpr.surdValue();
      val.reduced();
      let val1 = texpr1.surdValue();
      val1.reduced();
      let result;
      if (val1.isZero()) {
        val1.add(new Q(new Surd([{ a: 1, r: 1 }]), new Surd([{ a: 1, r: 1 }])));
      }
      result = val.div(val1);
      result.reduced();
      let one = new Q(new Surd([{ a: 1, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      let minusone = new Q(new Surd([{ a: -1, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      let two = new Q(new Surd([{ a: 2, r: 1 }]), new Surd([{ a: 1, r: 1 }]));
      values[0] = `\\(${result.str()}\\)`;
      values[1] = `\\(${result.add(one).str()}\\)`;
      values[2] = `\\(${result.add(minusone).str()}\\)`;
      values[3] = `\\(${result.add(two).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size:0.7em !important;">\\(\\dfrac{${texpr.str()}}{${texpr1.str()}}\\)</span>`;
      break;
    }
    case 10: {
      let f1 = trigF[randInt(5, 0)];
      let f2 = trigF[randInt(5, 0)];
      let angles1 = Object.keys(trigC[f1]);
      let angles2 = Object.keys(trigC[f2]);
      let C1 = angles1[randInt(angles1.length - 1, 0)];
      let C2 = angles2[randInt(angles2.length - 1, 0)];
      C1 = Number(C1);
      C2 = Number(C2);
      let A = (C1 + C2) / 2;
      let B = (C1 - C2) / 2;
      let eq1 = `\\` + f1 + "(A + B) = " + trigC[f1][C1].str();
      let eq2 = `\\` + f2 + "(A - B) = " + trigC[f2][C2].str();
      values[0] = `\\(A = ${A}^\\circ, B = ${B}^\\circ\\)`;
      values[1] = `\\(A = ${A + B}^\\circ, B = ${B}^\\circ\\)`;
      values[2] = `\\(A = ${A}^\\circ, B = ${A + B}^\\circ\\)`;
      values[3] = `\\(A = ${A}^\\circ, B = ${-B}^\\circ\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size:0.7em !important;">Solve \\(${eq1}\\) and \\(${eq2}\\)</span>`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  trigonometry
};
