import { r as randInt } from "./common.js";
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
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = new Q();
      r1.randF(20, 20, true);
      let r2 = new Q();
      r2.randF(20, 20, true);
      let r1str = r1.str();
      let r2str = r2.str();
      values[0] = `\\(${r1.mul(r2).str()}\\)`;
      values[1] = `\\(${r1.mul(r2.reciprocal()).str()}\\)`;
      values[2] = `\\(${r2str}\\)`;
      values[3] = `\\(${r1.reciprocal().mul(r2).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${r1str}\\times ${r2str} = \\)`;
      break;
    }
    case 1: {
      let r1 = new Q();
      r1.randF(20, 20, true);
      let r2 = new Q();
      r2.randF(20, 20, true);
      let r1str = r1.str();
      let r2str = r2.str();
      values[0] = `\\(${r1.div(r2).str()}\\)`;
      values[1] = `\\(${r1.div(r2.reciprocal()).str()}\\)`;
      values[2] = `\\(${r2str}\\)`;
      values[3] = `\\(${r1.reciprocal().div(r2).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${r1str}\\div ${r2str} = \\)`;
      break;
    }
    case 2: {
      let n1 = randInt(1e3, 1);
      let n2 = randInt(1e3, 1);
      let k1 = Math.pow(10, randInt(2, 1));
      values[0] = n1 * n2 / (k1 * k1);
      values[1] = (n1 + 1) * n2 / (k1 * k1);
      values[2] = (n1 * n2 + 1) / (k1 * k1);
      values[3] = (n1 * n2 - 1) / (k1 * k1);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${n1 / k1}\\times ${n2 / k1} = \\)`;
      break;
    }
    case 3: {
      let n2 = randInt(1e3, 1);
      let n1 = randInt(10, 1) * n2;
      let k1 = Math.pow(10, randInt(2, 1));
      values[0] = n1 / n2;
      values[1] = n1 / n2 + 1;
      values[2] = n1 / n2 + 2;
      values[3] = n1 / n2 - 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${n1 / k1}\\div ${n2 / k1} = \\)`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  fractions
};
