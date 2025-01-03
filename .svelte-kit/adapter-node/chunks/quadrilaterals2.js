import { r as randInt, p as pythagoreanTriplet } from "./common.js";
import { Q } from "./fraction2.js";
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
const quadrilaterals = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let k = randInt(10, 2);
      let f = new Q(180, k + 1);
      f.reduced();
      values[0] = `\\(${f.str()}\\)`;
      values[1] = `\\(${f.scale(k).str()}\\)`;
      values[2] = `\\(${f.add(new Q(1)).str()}\\)`;
      values[3] = `\\(${f.add(new Q(-1)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Let ABCD be a parallelogram. If angle A is \\(${k}\\) times angle B, then what is angle D?`;
      break;
    }
    case 1: {
      let t = pythagoreanTriplet(20);
      let d1 = 2 * t.p;
      let d2 = 2 * t.b;
      values[0] = t.h;
      values[1] = 2 * t.h;
      values[2] = t.h / 2;
      values[3] = t.p;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the diagonals of a rhombus are ${d1} and ${d2}, then its side will be`;
      break;
    }
    case 2: {
      let b = randInt(100, 1);
      values[0] = b / 2;
      values[1] = b;
      values[2] = 2 * b;
      values[3] = b - 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Let EF be the segment such E is mid point of AB and F is mid point of AC of triangle ABC. If BC = ${b}, then EF will be `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  quadrilaterals
};
