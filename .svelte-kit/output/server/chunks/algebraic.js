import { r as randInt } from "./common.js";
import { E as Expr } from "./expression.js";
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
const algebraic = (problemnumber) => {
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let nterms = randInt(6, 3);
      let exp = new Expr();
      exp.randomE(nterms, ["x", "y"]);
      let coefficients = exp.coefficients();
      let c1 = coefficients.map((c) => c);
      c1[randInt(nterms - 1, 0)] += randInt(10, 1);
      let c2 = coefficients.map((c) => c);
      c2[randInt(nterms - 1, 0)] += randInt(10, 1);
      let c3 = coefficients.map((c) => c);
      c3[randInt(nterms - 1, 0)] += randInt(10, 1);
      values[0] = String(coefficients);
      values[1] = String(c1);
      values[2] = String(c2);
      values[3] = String(c3);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What are the coefficients in \\(${exp.str()}\\)`;
      break;
    }
    case 1: {
      let nterms = randInt(3, 1);
      let nterms2 = randInt(2, 1);
      let exp = new Expr();
      exp.randomE(nterms, ["x", "y"], 10, 2);
      let exp1 = new Expr();
      exp1.randomE(nterms2, ["x", "y"], 10, 2);
      let sum = exp.add(exp1);
      sum = sum.simplify();
      values[0] = `\\(${sum.str()}\\)`;
      values[1] = `\\(${exp.str()}\\)`;
      values[2] = `\\(${exp1.str()}\\)`;
      values[3] = `\\(${exp.add(exp).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${exp.str()}) + (${exp1.str()})\\)`;
      break;
    }
    case 2: {
      let nterms = randInt(3, 1);
      let nterms2 = randInt(2, 1);
      let exp = new Expr();
      exp.randomE(nterms, ["x", "y"], 10, 2);
      let exp1 = new Expr();
      exp1.randomE(nterms2, ["x", "y"], 10, 2);
      let sum = exp.sub(exp1);
      sum = sum.simplify();
      values[0] = `\\(${sum.str()}\\)`;
      values[1] = `\\(${exp.str()}\\)`;
      values[2] = `\\(${exp1.str()}\\)`;
      values[3] = `\\(${exp.add(exp).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${exp.str()}) - (${exp1.str()})\\)`;
      break;
    }
    case 3: {
      let nterms = randInt(3, 1);
      let exp = new Expr();
      exp.randomE(nterms, ["x"], 10, 2);
      let k = randInt(5, 0);
      let val = exp.value({ "x": k });
      values[0] = val;
      values[1] = val + 1;
      values[2] = val - 1;
      values[3] = val + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Evalute \\(${exp.str()}\\) at \\(x = ${k}\\)`;
      break;
    }
    case 4: {
      let nterms = randInt(3, 1);
      let exp = new Expr();
      exp.randomE(nterms, ["n"], 10, 2);
      let exp1 = new Expr();
      exp1.randomE(nterms, ["n"], 10, 2);
      let exp2 = new Expr();
      exp2.randomE(nterms, ["n"], 10, 2);
      let exp3 = new Expr();
      exp3.randomE(nterms, ["n"], 10, 2);
      exp = exp.simplify();
      values[0] = `\\(${exp.str()}\\)`;
      values[1] = `\\(${exp1.str()}\\)`;
      values[2] = `\\(${exp2.str()}\\)`;
      values[3] = `\\(${exp3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which expression describes the pattern ${exp.value({ "n": 1 })}, ${exp.value({ "n": 2 })}, ${exp.value({ "n": 3 })}, ${exp.value({ "n": 4 })}`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  algebraic
};
