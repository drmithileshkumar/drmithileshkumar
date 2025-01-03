import { r as randInt } from "./common.js";
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
const appDerivatives = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(5, 2);
      let max = randInt(5, 1);
      let min = -max;
      let p = new Polynomial([], "t");
      p.randPoly(n, max, min);
      let pdash = p.derivative();
      let t = randInt(3, 0);
      let s = p.str();
      if (s.length == 0) s = 0;
      values[0] = `\\(${pdash.value(t)}\\)`;
      values[1] = `\\(${pdash.value(t - 1)}\\)`;
      values[2] = `\\(${pdash.value(t + 1)}\\)`;
      values[3] = `\\(${pdash.value(t - 2)}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `At any point of time \\(t\\), the area of a region covered by trees is given by \\(f(t) = ${s}\\). What is the rate of change of the area at time \\(t = ${t}\\) ?`;
      break;
    }
    case 1: {
      let poly = new Polynomial();
      let r1 = randInt(10, -10);
      let r2 = randInt(10, -10);
      let roots = [r1, r2];
      roots = roots.sort();
      poly = poly.fromRoots(roots);
      let deri = poly.derivative();
      let rs = deri.roots();
      let left = deri.value(rs[0].value() - 1);
      deri.value(rs[0].value() + 1);
      let intervals = [`(-\\infty, ${rs[0].str()})`, `(${rs[0].str()}, \\infty)`];
      let increasing = left > 0 ? intervals[0] : intervals[1];
      let decreasing = left < 0 ? intervals[0] : intervals[1];
      let type = ["increasing", "decreasing"];
      let sols = [increasing, decreasing];
      let query = randInt(1, 0);
      values[0] = `\\(${sols[query]}\\)`;
      values[1] = `\\(${sols[(query + 1) % 2]}\\)`;
      values[2] = `\\((-\\infty, ${r1})\\)`;
      values[3] = `\\((${r2}, \\infty)\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The interval in which the function \\(f(x) = ${poly.str()}\\) is strictly ${type[query]} is`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  appDerivatives
};
