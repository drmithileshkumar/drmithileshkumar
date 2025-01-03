import { r as randInt } from "./common.js";
import { F, Q } from "./fraction.js";
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
const simpleequations = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = new Q();
      a.randF(20, 20, true);
      a.reduced();
      let b = new Q();
      b.randF(20, 20, true);
      b.reduced();
      let c = new Q();
      c.randF(20, 20, true);
      c.reduced();
      let sol = c.sub(b).div(a);
      sol.reduced();
      values[0] = `\\(${sol.str()}\\)`;
      values[1] = `\\(${sol.add(F(1)).str()}\\)`;
      values[2] = `\\(${sol.add(F(-1)).str()}\\)`;
      values[3] = `\\(${sol.add(F(2)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Solve \\(${a.str()}x + ${b.str()} = ${c.str()}\\)`;
      break;
    }
    case 1: {
      let a = randInt(10, 2);
      let b = randInt(10, 1);
      let c = randInt(10, 1);
      let sol = new Q(c - b, a);
      sol.reduced();
      values[0] = `\\(${sol.str()}\\)`;
      values[1] = `\\(${sol.add(F(1)).str()}\\)`;
      values[2] = `\\(${sol.add(F(-1)).str()}\\)`;
      values[3] = `\\(${sol.add(F(2)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The sum of ${a} times a number and ${b} is ${c}. Find the number.`;
      break;
    }
    case 2: {
      let num = randInt(20, 1);
      let a = new Q(num, randInt(20, num + 1));
      a.reduced();
      let b = randInt(10, 1);
      let c = randInt(10, 1);
      let sol = a.reciprocal().scale(b + c);
      sol.reduced();
      values[0] = `\\(${sol.str()}\\)`;
      values[1] = `\\(${sol.add(F(1)).str()}\\)`;
      values[2] = `\\(${sol.add(F(-1)).str()}\\)`;
      values[3] = `\\(${sol.add(F(2)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Find a number, such that \\(${a.str()}\\)th of the number is ${b} more than ${c}.`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  simpleequations
};
