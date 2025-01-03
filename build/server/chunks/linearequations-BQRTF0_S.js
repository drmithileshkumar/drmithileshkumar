import { r as randInt } from './common-CIVVH1Lv.js';
import { Q } from './fraction-DfHHiAXd.js';
import { L as LinearQ } from './linearQ-Bd1RUua6.js';
import { S as Sets } from './sets-jGIduNNd.js';
import './nt-DokVuTcK.js';

class Linear {
  //ax + b
  constructor(a = 1, b = 0, x = "x") {
    this.a = a;
    this.b = b;
    this.x = x;
  }
  randL(min, max) {
    this.a = randInt(max, min);
    while (this.a === 0) {
      this.a = randInt(max, min);
    }
    this.b = randInt(max, min);
  }
  add(l) {
    return new Linear(this.a + l.a, this.b + l.b);
  }
  sub(l) {
    return new Linear(this.a - l.a, this.b - l.b);
  }
  scale(k) {
    return new Linear(this.a * k, this.b * k);
  }
  str() {
    let eq = "";
    if (this.a === 1) {
      eq = this.x;
    } else if (this.a === -1) {
      eq = "-" + this.x;
    } else if (this.a === 0) {
      return this.b;
    } else {
      eq = this.a + this.x;
    }
    if (this.b === 0) {
      return eq;
    }
    if (this.b > 0) {
      eq += "+" + this.b;
    } else {
      eq += this.b;
    }
    return eq;
  }
  root() {
    return new Q(-this.b, this.a);
  }
  value(x) {
    return this.a * x + this.b;
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
const linearequations = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let l1 = new LinearQ();
      l1.randL(10, 10, true);
      let c = new Q();
      c.randF(10, 10);
      let sol = c.sub(l1.b).div(l1.a);
      sol.reduced();
      values[0] = `\\(x = ${sol.str()}\\)`;
      values[1] = `\\(x = ${sol.scale(-1).str()}\\)`;
      values[2] = `\\(x = ${sol.add(new Q(-1)).str()}\\)`;
      values[3] = `no solution`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Solve \\(${l1.str()} = ${c.str()}\\)`;
      break;
    }
    case 1: {
      let l1 = new Linear();
      l1.randL(-10, 10);
      let l2 = new Linear();
      l2.randL(-10, 10);
      let l = l1.sub(l2);
      let sol = l.root();
      sol.reduced();
      values[0] = `\\(x = ${sol.str()}\\)`;
      values[1] = `\\(x = ${sol.scale(-1).str()}\\)`;
      values[2] = `\\(x = ${sol.add(new Q(-1)).str()}\\)`;
      values[3] = `no solution`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Solve \\(${l1.str()} = ${l2.str()}\\)`;
      break;
    }
    case 2: {
      let l1 = new Linear();
      l1.randL(-10, 10);
      let l2 = new Linear();
      l2.randL(-10, 10, true);
      let x, p, q = 0;
      while (q === 0) {
        x = randInt(10, 1);
        p = l1.value(x);
        q = l2.value(x);
      }
      values[0] = `\\(x = ${x}\\)`;
      values[1] = `\\(x = ${x + 1}\\)`;
      values[2] = `\\(x = ${x - 1}\\)`;
      values[3] = `\\(x = ${x + 2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Solve \\[\\frac{${l1.str()}}{${l2.str()}} = \\frac{${p}}{${q}}\\]`;
      break;
    }
    case 3: {
      let names = ["Ram", "Seeta", "Shyam", "Anu", "Ray", "Harry", "John", "Hari", "Krishna", "Divit", "Swati", "Akash"];
      let namesSet = new Sets(names);
      let chosenNames = namesSet.krandomSubset(2);
      let q = randInt(10, 3);
      let p = randInt(q - 1, 1);
      let r = new Q(p, q);
      let k = randInt(10, 2);
      let r1 = new Q(k - 1, k).mul(r).add(new Q(1, k));
      r1.reduced();
      let t = new Q(r1.den - r1.num, r1.num * r.den - r.num * r1.den);
      t.reduced();
      let l = randInt(5, 2);
      let year = l * t.den;
      let x = t.num * l;
      let age1 = p * x;
      let age2 = q * x;
      values[0] = `\\(${age1}, ${age2}\\)`;
      values[1] = `\\(${age2}, ${age1}\\)`;
      values[2] = `\\(${age1 - 1}, ${age2 - 1}\\)`;
      values[3] = `\\(${age1 + 1}, ${age2 + 1}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Present ages of ${chosenNames.e[0]} and ${chosenNames.e[1]} are in the ratio \\(${p}:${q}\\). ${year} years from now the ratio of their ages will be \\(${r1.num}:${r1.den}\\). Their present ages will be`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { linearequations };
//# sourceMappingURL=linearequations-BQRTF0_S.js.map
