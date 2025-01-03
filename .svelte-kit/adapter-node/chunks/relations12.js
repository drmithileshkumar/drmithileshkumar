import { r as randInt } from "./common.js";
import { S as Sets } from "./sets.js";
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
const relations12 = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let k = randInt(6, 4);
      let A = new Sets();
      A.randomSet(0, 10, k);
      let ref = A.reflexive(k);
      let nref1 = ref.randomReplace([A.e[0], A.e[1]]);
      let nref2 = ref.randomReplace([A.e[1], A.e[2]]);
      let nref3 = A.cartesian(A).krandomSubset(k);
      values[0] = `\\(${ref.str()}\\)`;
      values[1] = `\\(${nref1.str()}\\)`;
      values[2] = `\\(${nref2.str()}\\)`;
      values[3] = `\\(${nref3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given set \\(A = ${A.str()}\\), which relation is reflexive?`;
      break;
    }
    case 1: {
      let k = randInt(6, 4);
      let A = new Sets();
      A.randomSet(0, 10, k);
      let sym = A.symmetric(k);
      let U = A.cartesian(A);
      let symbar = sym.c(U);
      let ref = A.reflexive(k);
      symbar = symbar.diff(ref);
      let rset = symbar.krandomSubset(3);
      let nref1 = sym.add(rset.e[0]);
      let nref2 = sym.add(rset.e[1]);
      let nref3 = sym.add(rset.e[2]);
      values[0] = `\\(${sym.str()}\\)`;
      values[1] = `\\(${nref1.str()}\\)`;
      values[2] = `\\(${nref2.str()}\\)`;
      values[3] = `\\(${nref3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given set \\(A = ${A.str()}\\), which relation is symmetric?`;
      break;
    }
    case 2: {
      let k = randInt(6, 4);
      let A = new Sets();
      A.randomSet(0, 10, k);
      let tran = A.transitive(k);
      let tran1 = A.symmetric(k).deleteIdentity();
      let tran2 = A.randNonTransitive(k);
      let tran3 = A.randNonTransitive(k);
      values[0] = `\\(${tran.str()}\\)`;
      values[1] = `\\(${tran1.str()}\\)`;
      values[2] = `\\(${tran2.str()}\\)`;
      values[3] = `\\(${tran3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given set \\(A = ${A.str()}\\), which relation is transitive?`;
      break;
    }
    case 3: {
      let k = randInt(6, 4);
      let A = new Sets();
      A.randomSet(0, 10, k);
      let f1 = A.randFunction();
      let f2 = f1.add([f1.e[0][0], randInt(10, 0)]);
      let f3 = f1.add([f1.e[1][0], randInt(10, 0)]);
      let f4 = f1.add([f1.e[2][0], randInt(10, 0)]);
      values[0] = `\\(${f1.str()}\\)`;
      values[1] = `\\(${f2.str()}\\)`;
      values[2] = `\\(${f3.str()}\\)`;
      values[3] = `\\(${f4.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which relation is a function?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  relations12
};
