import { r as randInt } from "./common.js";
import { Q } from "./fraction.js";
import { Q as Quadratic } from "./quadratic3.js";
import { P as Polynomial } from "./polynomial3.js";
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
  let N = 4;
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
      let b = -r1 - r2;
      let c = r1 * r2;
      let qeq = new Quadratic(1, b, c);
      let eq = qeq.str();
      values[0] = -b;
      values[1] = b;
      values[2] = c;
      values[3] = -c;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The sum of roots of quadratic equation \\(${eq}=0\\) are`;
      break;
    }
    case 1: {
      let qeq = new Polynomial();
      qeq.randPoly(3);
      qeq.sortReverse();
      let eq = qeq.str();
      let rels = qeq.rootRelations();
      rels[1].reduced();
      values[0] = `\\(${rels[1].str()}\\)`;
      values[1] = `\\(${rels[1].add(new Q(1, 1)).str()}\\)`;
      values[2] = `\\(${rels[1].add(new Q(-1, 1)).str()}\\)`;
      values[3] = `\\(${rels[1].add(new Q(2, 1)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The sum of roots of equation \\(${eq}=0\\) are`;
      break;
    }
    case 2: {
      let p = new Polynomial();
      p.randPoly(3);
      for (let i = 0; i < p.c.length; i++) {
        p.c[i].a = new Q(p.c[i].a, 1);
      }
      let q = new Polynomial();
      q.randPoly(1);
      for (let i = 0; i < q.c.length; i++) {
        q.c[i].a = new Q(q.c[i].a, 1);
      }
      let division = p.div(new Polynomial([{ a: 0, r: 0 }]), p, q);
      p.sortReverse();
      values[0] = `\\(${division.r.str()}\\)`;
      values[1] = `\\(${q.str()}\\)`;
      values[2] = `\\(${p.str()}\\)`;
      values[3] = `\\(${division.q.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Remainder of \\(${p.str()}\\) divided by \\(${q.str()}\\)`;
    }
    case 3: {
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1);
      let r3 = randInt(10, 1);
      let r4 = randInt(10, 1);
      r1 = Math.random() < 0.5 ? -r1 : r1;
      r2 = Math.random() < 0.5 ? -r2 : r2;
      r3 = Math.random() < 0.5 ? -r3 : r3;
      r4 = Math.random() < 0.5 ? -r4 : r4;
      let roots = [r1, r2, r3, r4];
      let p = new Polynomial();
      p = p.fromRoots(roots);
      p.sortReverse();
      values[0] = r3 + ", " + r4;
      values[1] = r3 + 1 + ", " + (r4 + 1);
      values[2] = r3 - 1 + ", " + (r4 - 1);
      values[3] = r3 + 2 + ", " + (r4 + 2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If two roots of the polynomial \\(${p.str()}\\) are ${r1} and ${r2}, then other roots are`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  polynomial
};
