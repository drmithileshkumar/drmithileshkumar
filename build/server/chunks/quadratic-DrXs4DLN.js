import { r as randInt } from './common2-D0jjHEpP.js';
import './complex2-cYSf3gRs.js';
import './fraction2-2uKzQMOI.js';
import './sets3-BfptYGEP.js';

class Quadratic {
  //ax^2 + bx + c
  constructor(a2 = 0, b2 = 0, c = 0, x = "x") {
    this.a = a2;
    this.b = b2;
    this.c = c;
    this.x = x;
  }
  rand(min, max) {
    while (this.a === 0 && this.b === 0) {
      this.a = randInt(max, min);
      this.b = randInt(max, min);
    }
    this.c = randInt(max, min);
  }
  real(min, max) {
    let r1 = randInt(max, min);
    let r2 = randInt(max, min);
    this.a = 1;
    this.b = -(r1 + r2);
    this.c = r1 * r2;
  }
  complex(min, max) {
    let r = randInt(max, min);
    let i = randInt(max, min);
    this.a = 1;
    this.b = -2 * r;
    this.c = r * r + i * i;
  }
  str() {
    let eq = "";
    if (this.a != 0 || this.b != 0 || this.c != 0) {
      if (this.a != 0) {
        eq += this.a == 1 ? `${this.x}^2` : this.a == -1 ? `-${this.x}^2` : `${this.a}${this.x}^2`;
      }
      if (this.b != 0) {
        if (eq.length > 0)
          eq += this.b == 1 ? `+${this.x}` : this.b == -1 ? `-${this.x}` : this.b < 0 ? `${this.b}${this.x}` : `+${this.b}${this.x}`;
        if (eq.length == 0)
          eq += this.b == 1 ? `${this.x}` : this.b == -1 ? `-${this.x}` : `${this.b}${this.x}`;
      }
      if (this.c != 0) {
        if (eq.length > 0)
          eq += this.c > 0 ? `+${this.c}` : `${this.c}`;
        if (eq.length == 0)
          eq += this.c;
      }
      return eq;
    } else {
      return 0;
    }
  }
  d() {
    return this.b * this.b - 4 * this.a * this.c;
  }
  hasRealRoots() {
    return this.d() >= 0;
  }
  hasEqualRoots() {
    return this.d() === 0;
  }
  value(x) {
    return this.a * x * x + this.b * x + this.c;
  }
  realRoots() {
    if (a === 0) {
      if (b === 0) return [];
      return [-this.c / this.b];
    }
    if (!this.hasRealRoots()) return [];
    else {
      if (this.hasEqualRoots()) {
        return [-this.b / (2 * this.a)];
      } else {
        let sd = Math.sqrt(this.d());
        return [(-this.b + sd) / (2 * this.a), (-this.b - sd) / (2 * this.a)];
      }
    }
  }
}
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
const quadratic = (problemnumber) => {
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
      r1 = Math.random() < 0.5 ? -r1 : r1;
      r2 = Math.random() < 0.5 ? -r2 : r2;
      let b2 = -r1 - r2;
      let c = r1 * r2;
      let qeq = new Quadratic(1, b2, c);
      let eq = qeq.str();
      values[0] = `\\(${r1}, ${r2}\\)`;
      values[1] = `\\(${r1}, ${r2 + 1}\\)`;
      values[2] = `\\(${r1 + 1}, ${r2}\\)`;
      values[3] = `\\(${r1 + 1}, ${r2 + 1}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The roots of quadratic equation \\(${eq}=0\\) are`;
      break;
    }
    case 1: {
      let r1 = randInt(10, 1);
      r1 = Math.random() < 0.5 ? -r1 : r1;
      let r2 = r1;
      let a2 = 1;
      let b2 = -r1 - r2;
      let c = r1 * r2;
      let qeq = new Quadratic(1, "k", c);
      let eq = qeq.str();
      values[0] = `\\(${b2}\\)`;
      values[1] = `\\(${a2 + b2}\\)`;
      values[2] = `\\(${a2 - b2}\\)`;
      values[3] = `\\(${b2 - a2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Find the values of \\(k\\) such that the roots of quadratic equation \\(${eq}=0\\) are equal.`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { quadratic };
//# sourceMappingURL=quadratic-DrXs4DLN.js.map
