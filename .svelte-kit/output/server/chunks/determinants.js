import { r as randInt } from "./common.js";
import { Q } from "./fraction.js";
import { M as Matrix } from "./matrix.js";
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
const determinants = (problemnumber) => {
  let N = 8;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let I = randInt(10, 1);
      values[0] = `\\(A_{${I}\\times ${I}}\\)`;
      values[1] = `\\(A_{${I + 1}\\times ${I}}\\)`;
      values[2] = `\\(A_{${I}\\times ${I + 1}}\\)`;
      values[3] = `\\(A_{${I}\\times ${I - 1}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `For which matrix \\(A\\), can the determinant be defined?`;
      break;
    }
    case 1: {
      let A = new Matrix();
      A.randomMatrix(2, 2, 10, true);
      let det = A.det();
      values[0] = det;
      values[1] = det + 1;
      values[2] = det - 1;
      values[3] = det + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The determinant of \\(${A.str()}\\) is `;
      break;
    }
    case 2: {
      let A = new Matrix();
      A.randomMatrix(3, 3, 10, true);
      let i0 = randInt(2, 0);
      let j0 = randInt(2, 0);
      let det = A.minor(i0, j0);
      values[0] = det;
      values[1] = det + 1;
      values[2] = det - 1;
      values[3] = det + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The minor \\(M_{${i0 + 1}${j0 + 1}}\\) of \\(${A.str()}\\) is `;
      break;
    }
    case 3: {
      let A = new Matrix();
      A.randomMatrix(3, 3, 10, true);
      let i0 = randInt(2, 0);
      let j0 = randInt(2, 0);
      let det = A.cofactor(i0, j0);
      values[0] = det;
      values[1] = det + 1;
      values[2] = det - 1;
      values[3] = det + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The cofactor \\(A_{${i0 + 1}${j0 + 1}}\\) of \\(${A.str()}\\) is `;
      break;
    }
    case 4: {
      let A = new Matrix();
      A.randomMatrix(3, 3, 10, true);
      let inverse = A.inverse();
      values[0] = `\\(${inverse.a.str()}\\)`;
      values[1] = `\\(${inverse.a.scale(-1).str()}\\)`;
      values[2] = `\\(${inverse.det}${inverse.a.str()}\\)`;
      values[3] = `\\(${inverse.det}${A.scale(-1).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The adj of \\(${A.str()}\\) is `;
      break;
    }
    case 5: {
      let A = new Matrix();
      A.randomMatrix(3, 3, 10, true);
      let inverse = A.inverse();
      values[0] = `\\(\\dfrac{1}{${inverse.det}}${inverse.a.str()}\\)`;
      values[1] = `\\(\\dfrac{1}{${inverse.det}}${inverse.a.scale(-1).str()}\\)`;
      values[2] = `\\(${inverse.det}${inverse.a.str()}\\)`;
      values[3] = `\\(${inverse.det}${A.scale(-1).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The inverse of \\(${A.str()}\\) is `;
      break;
    }
    case 6: {
      let B = new Matrix();
      B.randomMatrix(3, 1, 10);
      let A = new Matrix();
      A.randomMatrix(3, 3, 10, true);
      let inverse = A.inverse();
      let system = ["Unique solution", "No solution", "May or may not be consistent", "Multiple solutions"];
      let adjAB = inverse.a.mul(B);
      let zero = adjAB.isZero();
      let solIndex = 0;
      if (inverse.det !== 0) solIndex = 0;
      else if (inverse.det === 0 && !zero) solIndex = 1;
      else if (inverse.det === 0 && zero) solIndex = 2;
      else solIndex = 3;
      let X = new Matrix([["x"], ["y"], ["z"]]);
      values[0] = system[solIndex];
      values[1] = system[(solIndex + 1) % 4];
      values[2] = system[(solIndex + 2) % 4];
      values[3] = system[(solIndex + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The system of equations \\(${A.str()}${X.str()} = ${B.str()}\\) has`;
      break;
    }
    case 7: {
      let B = new Matrix();
      B.randomMatrix(3, 1, 10);
      let A = new Matrix();
      A.randomMatrix(3, 3, 10, true);
      let inverse = A.inverse();
      let system = ["Unique solution", "No solution", "May or may not be consistent", "Multiple solutions"];
      let adjAB = inverse.a.mul(B);
      let zero = adjAB.isZero();
      let solIndex = 0;
      if (inverse.det !== 0) {
        solIndex = 0;
        let x = new Q(adjAB.a[0][0], inverse.det);
        let y = new Q(adjAB.a[1][0], inverse.det);
        let z = new Q(adjAB.a[2][0], inverse.det);
        x.reduced();
        y.reduced();
        z.reduced();
        system[0] = `\\(x = ${x.str()}, y = ${y.str()}, z = ${z.str()}\\)`;
        system[1] = `\\(x = ${x.scale(-1).str()}, y = ${y.str()}, z = ${z.str()}\\)`;
        system[2] = `\\(x = ${x.str()}, y = ${y.scale(-1).str()}, z = ${z.str()}\\)`;
        system[3] = `\\(x = ${x.str()}, y = ${y.str()}, z = ${z.scale(-1).str()}\\)`;
      } else if (inverse.det === 0 && !zero) solIndex = 1;
      else if (inverse.det === 0 && zero) solIndex = 2;
      else solIndex = 3;
      let X = new Matrix([["x"], ["y"], ["z"]]);
      values[0] = system[solIndex];
      values[1] = system[(solIndex + 1) % 4];
      values[2] = system[(solIndex + 2) % 4];
      values[3] = system[(solIndex + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The system of equations \\(${A.str()}${X.str()} = ${B.str()}\\) has`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  determinants
};
