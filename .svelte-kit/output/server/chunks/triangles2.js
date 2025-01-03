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
const triangles = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let m = randInt(10, 3);
      let l = randInt(m, 1);
      let b = randInt(10, 1);
      let a = new Q(l * b, m);
      a.reduced();
      values[0] = `\\(${a.str()}\\)`;
      values[1] = `\\(${a.add(new Q(1)).str()}\\)`;
      values[2] = `\\(${a.add(new Q(-1)).str()}\\)`;
      values[3] = `\\(${a.add(new Q(2)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `In a triangle ABC, DE || BC such that AD:AB = ${l}:${m}. If AC = ${b}, then what is the length of AE?`;
      break;
    }
    case 1: {
      let m = randInt(10, 3);
      let l = randInt(m, 1);
      let r = new Q(l, m);
      let ar = r.mul(r);
      ar.reduced();
      values[0] = ar.num + " : " + ar.den;
      values[1] = ar.num + 1 + " : " + ar.den;
      values[2] = ar.num + " : " + (ar.den + 1);
      values[3] = ar.num - 1 + " : " + (ar.den - 1);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the corresponding sides of two similar triangles are in the ratio ${l} : ${m}, then the ratio of their areas is `;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  triangles
};
