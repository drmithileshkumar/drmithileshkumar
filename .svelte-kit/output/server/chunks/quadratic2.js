import { r as randInt } from "./common.js";
import { Q } from "./fraction.js";
import { C as Complex } from "./complex3.js";
import { Q as Quadratic } from "./quadratic3.js";
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
const quadratic = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1);
      r1 = Math.random() < 0.5 ? -r1 : r1;
      r2 = Math.random() < 0.5 ? -r2 : r2;
      let b = -r1 - r2;
      let c = r1 * r2;
      let qeq = new Quadratic(1, b, c);
      let eq = qeq.str();
      values[0] = `\\(${r1}, ${r2}\\)`;
      values[1] = `\\(${r1}, ${r2 + 1}\\)`;
      values[2] = `\\(${r1 + 1}, ${r2}\\)`;
      values[3] = `\\(${r1 + 1}, ${r2 + 1}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The roots of quadratic equation \\(${eq}=0\\) are`;
      break;
    }
    case 1: {
      let alpha = randInt(10, -10);
      let beta = randInt(10, -10);
      let b = 2 * alpha;
      let c = alpha * alpha + beta * beta;
      let qeq = new Quadratic(1, b, c);
      let eq = qeq.str();
      let r1 = new Complex(new Q(alpha), new Q(beta));
      let r2 = r1.bar();
      values[0] = `\\(${r1.str()}, ${r2.str()}\\)`;
      values[1] = `\\(${r1.str()}, ${r2.add(new Complex(new Q(1))).str()}\\)`;
      values[2] = `\\(${r1.add(new Complex(new Q(1))).str()}, ${r2.add(new Complex(new Q(1))).str()}\\)`;
      values[3] = `\\(${r1.add(new Complex(new Q(1))).str()}, ${r2.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The roots of quadratic equation \\(${eq}=0\\) are`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  quadratic
};
