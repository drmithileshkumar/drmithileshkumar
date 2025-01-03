import { r as randInt } from './common-CIVVH1Lv.js';
import { E as Expr } from './expression-C5JXZeRb.js';
import { L as Linear2Q } from './linear2Q-Dm9dZ92w.js';
import { a as Matrix } from './matrix-DTgmpk1A.js';
import { Q } from './fraction-DfHHiAXd.js';
import './sets-jGIduNNd.js';
import './nt-DokVuTcK.js';

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
const matrices = (problemnumber) => {
  let N = 10;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let I = randInt(10, 1);
      let J = randInt(10, 1);
      values[0] = `\\(${randInt(2 * I, I)}\\times ${randInt(2 * J, J)}\\)`;
      values[1] = `\\(${randInt(I - 1, 0)}\\times ${randInt(J - 1, 0)}\\)`;
      values[2] = `\\(${randInt(I - 1, 0)}\\times ${randInt(10, 0)}\\)`;
      values[3] = `\\(${randInt(10, 0)}\\times ${randInt(J - 1, 0)}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Let \\(a_{ij}\\) be an element of a matrix \\(A\\). If \\(i = ${I}\\) and \\(j = ${J}\\), then what can be the order of \\(A\\)?`;
      break;
    }
    case 1: {
      let expr = new Expr();
      expr.randomE(2, ["i", "j"], 3, 3);
      let i = randInt(3, 1);
      let j = randInt(3, 1);
      let val = expr.value({ "i": i, "j": j });
      values[0] = `\\(${val}\\)`;
      values[1] = `\\(${val + 1}\\)`;
      values[2] = `\\(${val - 1}\\)`;
      values[3] = `\\(${val + 2}\\)`;
      for (let i2 = 0; i2 < 4; i2++) {
        problemset.o[choices[(correctChoiceIndex + i2) % 4]] = values[i2];
      }
      problemset.s = `Let \\(a_{ij}\\) be an element of a matrix \\(A\\) such that \\(a_{ij} = ${expr.str()}\\). Then \\(a_{${i}${j}}\\) is`;
      break;
    }
    case 2: {
      let mat = new Matrix();
      mat.randomMatrix(3, 3, 10);
      let i = randInt(2, 0);
      let j = randInt(2, 0);
      let subMat = mat.submatrix(i, j);
      let subMat1 = mat.submatrix((i + 1) % 3, j);
      let subMat2 = mat.submatrix(i, (j + 1) % 3);
      let subMat3 = mat.submatrix((i + 1) % 3, (j + 1) % 3);
      values[0] = `\\(${subMat.str()}\\)`;
      values[1] = `\\(${subMat1.str()}\\)`;
      values[2] = `\\(${subMat2.str()}\\)`;
      values[3] = `\\(${subMat3.str()}\\)`;
      for (let i2 = 0; i2 < 4; i2++) {
        problemset.o[choices[(correctChoiceIndex + i2) % 4]] = values[i2];
      }
      problemset.s = `Which is the submatrix of \\[A = ${mat.str()}\\] resulting after deleting row ${i + 1} and column ${j + 1}`;
      break;
    }
    case 3: {
      let mat = new Matrix();
      let n = randInt(3, 2);
      mat.randomMatrix(n, n, 10);
      let sym = mat.symmetrize();
      let subMat1 = sym.perturb(2, "off");
      let subMat2 = sym.perturb(3, "off");
      let subMat3 = sym.perturb(4, "off");
      values[0] = `\\(${sym.str()}\\)`;
      values[1] = `\\(${subMat1.str()}\\)`;
      values[2] = `\\(${subMat2.str()}\\)`;
      values[3] = `\\(${subMat3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following is a symmetric matrix?`;
      break;
    }
    case 4: {
      let mat = new Matrix();
      let n = 3;
      mat.randomMatrix(n, n, 10);
      let sym = mat.toUpper();
      let subMat1 = sym.perturb(2, "lower");
      let subMat2 = sym.perturb(3, "lower");
      let subMat3 = sym.perturb(4, "lower");
      values[0] = `\\(${sym.str()}\\)`;
      values[1] = `\\(${subMat1.str()}\\)`;
      values[2] = `\\(${subMat2.str()}\\)`;
      values[3] = `\\(${subMat3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following is an upper triangular matrix?`;
      break;
    }
    case 5: {
      let mat = new Matrix();
      let n = 3;
      mat.randomMatrix(n, n, 10);
      let sym = mat.toLower();
      let subMat1 = sym.perturb(2, "upper");
      let subMat2 = sym.perturb(3, "upper");
      let subMat3 = sym.perturb(4, "upper");
      values[0] = `\\(${sym.str()}\\)`;
      values[1] = `\\(${subMat1.str()}\\)`;
      values[2] = `\\(${subMat2.str()}\\)`;
      values[3] = `\\(${subMat3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following is a lower triangular matrix?`;
      break;
    }
    case 6: {
      let a11 = new Linear2Q(new Q(0), new Q(1), new Q(0), "a", "b");
      let a12 = new Linear2Q(new Q(0), new Q(1), new Q(0), "a", "b");
      let a21 = new Linear2Q(new Q(0), new Q(1), new Q(0), "c", "d");
      let a22 = new Linear2Q(new Q(0), new Q(1), new Q(0), "c", "d");
      a11.randL(5, 1);
      a12.randL(5, 1);
      a21.randL(5, 1);
      a22.randL(5, 1);
      let b11 = new Q(randInt(5, -5));
      let b12 = new Q(randInt(5, -5));
      let b21 = new Q(randInt(5, -5));
      let b22 = new Q(randInt(5, -5));
      let B = new Matrix([[b11.num, b12.num], [b21.num, b22.num]]);
      let eq11 = new Linear2Q(a11.a, a11.b, a11.c.sub(b11));
      let eq12 = new Linear2Q(a12.a, a12.b, a12.c.sub(b12));
      let eq21 = new Linear2Q(a21.a, a21.b, a21.c.sub(b21));
      let eq22 = new Linear2Q(a22.a, a22.b, a22.c.sub(b22));
      let sol1 = eq11.solve(eq12);
      let sol2 = eq21.solve(eq22);
      let wrong = randInt(3, 0);
      let a = sol1.x, b = sol1.y, c = sol2.x, d = sol2.y;
      switch (wrong) {
        case 0: {
          if (a !== NaN) {
            a = a.add(new Q(1));
          } else {
            a = new Q(0);
          }
          break;
        }
        case 1: {
          if (b !== NaN) {
            b = b.add(new Q(1));
          } else {
            b = new Q(0);
          }
          break;
        }
        case 2: {
          if (c !== NaN) {
            c = c.add(new Q(1));
          } else {
            c = new Q(0);
          }
          break;
        }
        case 3: {
          if (d !== NaN) {
            d = d.add(new Q(1));
          } else {
            d = new Q(0);
          }
          break;
        }
      }
      let sols = [a, b, c, d];
      let symbols = ["a", "b", "c", "d"];
      values[0] = `\\(${symbols[wrong]} = ${sols[wrong] === NaN ? "No solution" : sols[wrong].str()}\\)`;
      values[1] = `\\(${symbols[(wrong + 1) % 4]} = ${sols[(wrong + 1) % 4] === NaN ? "No solution" : sols[(wrong + 1) % 4].str()}\\)`;
      values[2] = `\\(${symbols[(wrong + 2) % 4]} = ${sols[(wrong + 2) % 4] === NaN ? "No solution" : sols[(wrong + 2) % 4].str()}\\)`;
      values[3] = `\\(${symbols[(wrong + 3) % 4]} = ${sols[(wrong + 3) % 4] === NaN ? "No solution" : sols[(wrong + 3) % 4].str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = ` If \\(\\begin{bmatrix}${a11.str()} & ${a12.str()}\\\\ ${a21.str()} & ${a22.str()}\\end{bmatrix} = ${B.str()}\\), which value is not correct?`;
      break;
    }
    case 7: {
      let A = new Matrix();
      A.randomMatrix(3, 3, 10);
      let B = A.T();
      let C = A.perturb(10);
      let D = B.perturb(10);
      values[0] = `\\(${B.str()}\\)`;
      values[1] = `\\(${A.str()}\\)`;
      values[2] = `\\(${C.str()}\\)`;
      values[3] = `\\(${D.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The transpose of \\(${A.str()}\\) is`;
      break;
    }
    case 8: {
      let A = new Matrix();
      A.randomMatrix(2, 2, 10);
      let B = new Matrix();
      B.randomMatrix(2, 2, 10);
      let C = A.mul(B);
      values[0] = `\\(${C.str()}\\)`;
      values[1] = `\\(${A.add(B).str()}\\)`;
      values[2] = `\\(${A.sub(B).str()}\\)`;
      values[3] = `\\(${B.sub(A).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${A.str()}\\times ${B.str()} = \\)`;
      break;
    }
    case 9: {
      let A = new Matrix();
      A.randomMatrix(2, 2, 10, true);
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
  }
  problemset = problemset;
  return problemset;
};

export { matrices };
//# sourceMappingURL=matrices-B29c4Irz.js.map
