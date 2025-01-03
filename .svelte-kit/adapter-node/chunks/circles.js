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
const circles = (problemnumber) => {
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
      let d = randInt(r1 + r2 - 1, Math.max(r1, r2));
      let rq = r1 * r1 - r2 * r2;
      let dx = new Q(rq, 2 * d);
      dx.reduced();
      let x1 = dx.add(new Q(d, 2));
      x1.reduced();
      let ch2 = new Q(r1 * r1);
      let sr = ch2.sub(x1.mul(x1));
      sr.reduced();
      values[0] = `\\(2\\sqrt{${sr.str()}}\\)`;
      values[1] = `\\(\\sqrt{${sr.str()}}\\)`;
      values[2] = `\\(\\sqrt{${sr.str()}}/2\\)`;
      values[3] = `\\(4\\sqrt{${sr.str()}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Two circles of radii ${r1} and ${r2} intersect at two points and the distance between their centers is ${d}. Then the length of the common chord will be`;
      break;
    }
    case 1: {
      let m = randInt(20, 1);
      let n = randInt(20, 1);
      let A = new Q(m * 180, m + n);
      A.reduced();
      let A1 = A.add(new Q(1));
      let A2 = A.add(new Q(-1));
      let A3 = A.add(new Q(2));
      A1.reduced();
      A2.reduced();
      A3.reduced();
      values[0] = `\\(${A.str()}\\)`;
      values[1] = `\\(${A1.str()}\\)`;
      values[2] = `\\(${A2.str()}\\)`;
      values[3] = `\\(${A3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Let ABCD be a cyclic quadrilateral. If angles A and B are in the ratio ${m} : ${n}, angle A will be`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  circles
};
