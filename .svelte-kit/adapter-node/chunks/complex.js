import { p as pythagoreanTriplet, r as randInt } from "./common.js";
import { Q } from "./fraction.js";
import { C as Complex } from "./complex3.js";
import { a as Matrix2x2 } from "./matrix.js";
const linearString = (x, y) => {
  if (x == 0 && y == 0) return "";
  if (x == 0) {
    return y == 1 ? "y" : y + "y";
  }
  if (y == 0) {
    return x == 1 ? "x" : x + "x";
  }
  if (y < 0) {
    return (x == 1 ? "x" : x + "x") + " - " + (Math.abs(y) == 1 ? "y" : Math.abs(y) + "y");
  }
  return (x == 1 ? "x" : x + "x") + " + " + (y == 1 ? "y" : y + "y");
};
const randomLinearInt = () => {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  return { x, y, str: linearString(x, y) };
};
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
const complex = (problemnumber) => {
  let N = 7;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let det = 0;
      let realLinear;
      let imLinear;
      let M;
      while (det == 0) {
        realLinear = randomLinearInt();
        imLinear = randomLinearInt();
        M = new Matrix2x2([[realLinear.x, realLinear.y], [imLinear.x, imLinear.y]]);
        det = M.det();
      }
      let rx = randInt(10, 0);
      let ry = randInt(10, 0);
      let z = new Complex(new Q(rx), new Q(ry));
      let eq = (realLinear.str.length > 0 ? realLinear.str : "") + "+" + (imLinear.str.length > 0 ? "(" + imLinear.str + ")i" : "") + "=" + z.str();
      let C = M.adj().op([z.x.num, z.y.num]);
      let x = new Q(C[0], det);
      x.reduced();
      let y = new Q(C[1], det);
      let one = new Q(1);
      y.reduced();
      values[0] = `\\(x = ${x.str()},~y = ${y.str()}\\)`;
      values[1] = `\\(x = ${x.add(one).str()},~y = ${y.str()}\\)`;
      values[2] = `\\(x = ${x.str()},~y = ${y.add(one).str()}\\)`;
      values[3] = `\\(x = ${z.x.num},~y = ${z.y.num + 1}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Solve \\[${eq}\\]`;
      break;
    }
    case 1: {
      let z1 = new Complex();
      z1.rand(-10, 10);
      let z2 = new Complex();
      z2.rand(-10, 10);
      values[0] = `\\(${z1.add(z2).str()}\\)`;
      values[1] = `\\(${z1.add(new Complex(z2.x)).str()}\\)`;
      values[2] = `\\(${z1.sub(z2).str()}\\)`;
      values[3] = `\\(${z1.add(new Complex(new Q(), z2.y)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(z_1 = ${z1.str()}\\) and \\(z_2 = ${z2.str()}\\), then \\(z_1 + z_2\\) will be equal to`;
      break;
    }
    case 2: {
      let a = randInt(10, 1);
      let b = randInt(10, 1);
      let z1 = a + " + " + b + "i";
      let z1_modulus = Math.sqrt(a * a + b * b);
      let z1_modulus_square = a * a + b * b;
      values[0] = `${z1_modulus.toFixed(2)}`;
      values[1] = `${z1_modulus.toFixed(2)}i`;
      values[2] = `${z1_modulus_square}`;
      values[3] = `${z1_modulus_square}i`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Find the modulus square of the complex number ${z1}.`;
      break;
    }
    case 3: {
      let z1 = new Complex();
      z1.rand(-10, 10);
      let z2 = new Complex();
      z2.rand(-10, 10);
      values[0] = `\\(${z1.mul(z2).str()}\\)`;
      values[1] = `\\(${z1.mul(new Complex(z2.x)).str()}\\)`;
      values[2] = `\\(${z1.add(z2).str()}\\)`;
      values[3] = `\\(${z1.mul(new Complex(new Q(), z2.y)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(z_1 = ${z1.str()}\\) and \\(z_2 = ${z2.str()}\\), then \\(z_1 \\times z_2\\) will be equal to`;
      break;
    }
    case 4: {
      let z1 = new Complex();
      z1.rand(-10, 10);
      let z2 = new Complex();
      z2.rand(-10, 10);
      values[0] = `\\(${z1.div(z2).str()}\\)`;
      values[1] = `\\(${z1.mul(new Complex(z2.x)).str()}\\)`;
      values[2] = `\\(${z1.div(z2.bar()).str()}\\)`;
      values[3] = `\\(${z1.div(new Complex(new Q(), z2.y)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(z_1 = ${z1.str()}\\) and \\(z_2 = ${z2.str()}\\), then \\(\\dfrac{z_1}{z_2}\\) will be equal to`;
      break;
    }
    case 5: {
      let n = randInt(2e3, 1);
      let vals = [1, "i", -1, "-i"];
      values[0] = vals[n % 4];
      values[1] = vals[(n + 1) % 4];
      values[2] = vals[(n + 2) % 4];
      values[3] = vals[(n + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = `\\(i^{${n}} = \\)`;
      break;
    }
    case 6: {
      let z = new Complex();
      let t = pythagoreanTriplet(5);
      z.x = Math.random() > 0.5 ? new Q(t.b) : new Q(-t.b);
      z.y = Math.random() > 0.5 ? new Q(t.p) : new Q(-t.p);
      let tan = new Q(z.y.num, z.x.num);
      tan.reduced();
      values[0] = `\\(\\tan^{-1}(${tan.str()})\\)`;
      values[1] = `\\(tan^{-1}\\frac{${t.p}}{${t.h}}\\)`;
      values[2] = `\\(tan^{-1}\\frac{${t.b}}{${t.h}}\\)`;
      values[3] = `\\(tan^{-1}\\frac{${t.b}}{${t.p}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(z = ${z.str()}\\), then \\(arg(z)\\) is `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  complex
};
