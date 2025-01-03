import { r as randInt } from './common-CIVVH1Lv.js';
import { P as Polynomial } from './polynomial3-BqTvVK7w.js';
import { S as Sets } from './sets-jGIduNNd.js';
import './fraction-DfHHiAXd.js';
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
const polynomial = (problemnumber) => {
  let N = 10;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let degree = randInt(10, 2);
      let poly = new Polynomial();
      poly.randPoly(degree);
      values[0] = degree;
      values[1] = degree - 1;
      values[2] = degree + 1;
      values[3] = degree + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the degree of the polynomial \\(${poly.str()}\\)`;
      break;
    }
    case 1: {
      let u = new Sets([-5, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
      let ch = u.krandomSubset(4).e;
      let roots = [ch[0], ch[1], ch[2]];
      let poly = new Polynomial();
      poly = poly.fromRoots(roots);
      values[0] = ch[3];
      values[1] = roots[0];
      values[2] = roots[1];
      values[3] = roots[2];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which is not a root of \\(${poly.str()}\\)`;
      break;
    }
    case 2: {
      let poly = new Polynomial();
      poly.randPoly(2);
      let poly1 = new Polynomial();
      poly1.randPoly(2);
      let product = poly.mul(poly1);
      values[0] = `\\(${poly.str()}\\)`;
      values[1] = `\\(${poly1.str()}\\)`;
      values[2] = `\\(${product.str()}\\)`;
      values[3] = `\\(${poly.add(poly).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Divide \\(${product.str()}\\) by \\(${poly1.str()}\\)`;
      break;
    }
    case 3: {
      let poly = new Polynomial();
      poly.randPoly(2);
      let poly1 = new Polynomial();
      poly1.randPoly(2);
      let product = poly.mul(poly1);
      let remainder = new Polynomial();
      remainder.randPoly(1);
      product = product.add(remainder);
      values[0] = `\\(${remainder.str()}\\)`;
      values[1] = `\\(${poly.str()}\\)`;
      values[2] = `\\(${product.str()}\\)`;
      values[3] = `\\(${poly1.add(poly).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Remainder when \\(${product.str()}\\) is divided by \\(${poly1.str()}\\)`;
      break;
    }
    case 4: {
      let poly = new Polynomial();
      poly.randPoly(3);
      let a = randInt(10, -10);
      let poly1 = new Polynomial([{ a: 1, r: 1 }, { a: -a, r: 0 }]);
      let r = poly.value(a);
      values[0] = r;
      values[1] = r + 1;
      values[2] = r - 1;
      values[3] = r + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Remainder when \\(${poly.str()}\\) is divided by \\(${poly1.str()}\\)`;
      break;
    }
    case 5: {
      let u = new Sets([-5, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
      let ch = u.krandomSubset(4).e;
      let roots = [ch[0], ch[1], ch[2]];
      let poly = new Polynomial();
      poly = poly.fromRoots(roots);
      values[0] = `\\(x ${ch[3] < 0 ? "+" : "-"} ${Math.abs(ch[3])}\\)`;
      values[1] = `\\(x ${roots[0] < 0 ? "+" : "-"} ${Math.abs(roots[0])}\\)`;
      values[2] = `\\(x ${roots[1] < 0 ? "+" : "-"} ${Math.abs(roots[1])}\\)`;
      values[3] = `\\(x ${roots[2] < 0 ? "+" : "-"} ${Math.abs(roots[2])}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which is not a factor of \\(${poly.str()}\\)`;
      break;
    }
    case 6: {
      let a = randInt(10, -10, true);
      let poly = new Polynomial([{ a: 1, r: 1 }, { a: -a, r: 0 }]);
      let product = poly.mul(poly);
      let poly1 = new Polynomial([{ a: 1, r: 1 }, { a, r: 0 }]);
      let product1 = poly1.mul(poly1);
      let product2 = poly.mul(poly1);
      let poly3 = new Polynomial([{ a: 1, r: 1 }, { a: 2 * a, r: 0 }]);
      let product3 = poly3.mul(poly3);
      values[0] = `\\(${product.str()}\\)`;
      values[1] = `\\(${product1.str()}\\)`;
      values[2] = `\\(${product2.str()}\\)`;
      values[3] = `\\(${product3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${poly.str()})^2 = \\)`;
      break;
    }
    case 7: {
      let a = randInt(10, -10, true);
      let poly = new Polynomial([{ a: 1, r: 1 }, { a: -a, r: 0 }]);
      let poly1 = new Polynomial([{ a: 1, r: 1 }, { a, r: 0 }]);
      let product = poly.mul(poly1);
      let product1 = poly1.mul(poly1);
      let product2 = poly.mul(poly);
      let poly3 = new Polynomial([{ a: 1, r: 1 }, { a: 2 * a, r: 0 }]);
      let product3 = poly3.mul(poly3);
      values[0] = `\\(${product.str()}\\)`;
      values[1] = `\\(${product1.str()}\\)`;
      values[2] = `\\(${product2.str()}\\)`;
      values[3] = `\\(${product3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${poly.str()})(${poly1.str()}) = \\)`;
      break;
    }
    case 8: {
      let a = randInt(10, -10, true);
      let b = randInt(10, -10, true);
      while (a === b) {
        b = randInt(10, -10, true);
      }
      let poly = new Polynomial([{ a: 1, r: 1 }, { a: -a, r: 0 }]);
      let poly1 = new Polynomial([{ a: 1, r: 1 }, { a: -b, r: 0 }]);
      let product = poly.mul(poly1);
      let product1 = poly1.mul(poly1);
      let product2 = poly.mul(poly);
      let poly3 = new Polynomial([{ a: 1, r: 1 }, { a: 2 * a, r: 0 }]);
      let product3 = poly3.mul(poly3);
      values[0] = `\\(${product.str()}\\)`;
      values[1] = `\\(${product1.str()}\\)`;
      values[2] = `\\(${product2.str()}\\)`;
      values[3] = `\\(${product3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${poly.str()})(${poly1.str()}) = \\)`;
      break;
    }
    case 9: {
      let a = randInt(10, -10, true);
      let poly = new Polynomial([{ a: 1, r: 1 }, { a: -a, r: 0 }]);
      let product = poly.mul(poly).mul(poly);
      let poly1 = new Polynomial([{ a: 1, r: 1 }, { a, r: 0 }]);
      let product1 = poly1.mul(poly1).mul(poly);
      let product2 = poly.mul(poly1).mul(poly);
      let poly3 = new Polynomial([{ a: 1, r: 1 }, { a: 2 * a, r: 0 }]);
      let product3 = poly3.mul(poly3).mul(poly);
      values[0] = `\\(${product.str()}\\)`;
      values[1] = `\\(${product1.str()}\\)`;
      values[2] = `\\(${product2.str()}\\)`;
      values[3] = `\\(${product3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\((${poly.str()})^3 = \\)`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { polynomial };
//# sourceMappingURL=polynomial-6eBJNKbe.js.map
