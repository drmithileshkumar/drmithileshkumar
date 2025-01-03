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
const comparison = (problemnumber) => {
  let N = 9;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1);
      let k = randInt(10, 2);
      values[0] = k * r1 + " : " + k * r2;
      values[1] = r1 + " : " + k * r2;
      values[2] = r1 + r2 + " : " + k * r2;
      values[3] = k * r1 + " : " + r2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which ratio is equivalent to ${r1}:${r2} ?`;
      break;
    }
    case 1: {
      let num = randInt(99, 1);
      let den = randInt(99, num + 1);
      let fr = new Q(num, den);
      fr.reduced();
      let p = fr.scale(100);
      p.reduced();
      let p1 = p.add(new Q(1));
      let p2 = p.add(new Q(-1));
      let p3 = p.add(new Q(2));
      p1.reduced();
      p2.reduced();
      p3.reduced();
      let mixed0 = p.mixed();
      let mixed1 = p1.mixed();
      let mixed2 = p2.mixed();
      let mixed3 = p3.mixed();
      let mixed0Str = mixed0.length > 1 ? `\\(${mixed0[0]}${mixed0[1].isZero() ? "" : mixed0[1].str()}\\) %` : `\\(${mixed0[0].str()}\\) %`;
      let mixed1Str = mixed1.length > 1 ? `\\(${mixed1[0]}${mixed1[1].isZero() ? "" : mixed1[1].str()}\\) %` : `\\(${mixed1[0].str()}\\) %`;
      let mixed2Str = mixed2.length > 1 ? `\\(${mixed2[0]}${mixed2[1].isZero() ? "" : mixed2[1].str()}\\) %` : `\\(${mixed2[0].str()}\\) %`;
      let mixed3Str = mixed3.length > 1 ? `\\(${mixed3[0]}${mixed3[1].isZero() ? "" : mixed3[1].str()}\\) %` : `\\(${mixed3[0].str()}\\) %`;
      values[0] = mixed0Str;
      values[1] = mixed1Str;
      values[2] = mixed2Str;
      values[3] = mixed3Str;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Write \\(${fr.str()}\\) as per cent.`;
      break;
    }
    case 2: {
      let num = randInt(99, 1);
      let fr = num / 100;
      let p = new Q(num, 100);
      p.reduced();
      let p1 = p.add(new Q(1));
      let p2 = p.add(new Q(-1));
      let p3 = p.add(new Q(2));
      p1.reduced();
      p2.reduced();
      p3.reduced();
      let mixed0 = p.mixed();
      let mixed1 = p1.mixed();
      let mixed2 = p2.mixed();
      let mixed3 = p3.mixed();
      let mixed0Str = mixed0.length > 1 ? `\\(${mixed0[0]}${mixed0[1].isZero() ? "" : mixed0[1].str()}\\) %` : `\\(${mixed0[0].str()}\\) %`;
      let mixed1Str = mixed1.length > 1 ? `\\(${mixed1[0]}${mixed1[1].isZero() ? "" : mixed1[1].str()}\\) %` : `\\(${mixed1[0].str()}\\) %`;
      let mixed2Str = mixed2.length > 1 ? `\\(${mixed2[0]}${mixed2[1].isZero() ? "" : mixed2[1].str()}\\) %` : `\\(${mixed2[0].str()}\\) %`;
      let mixed3Str = mixed3.length > 1 ? `\\(${mixed3[0]}${mixed3[1].isZero() ? "" : mixed3[1].str()}\\) %` : `\\(${mixed3[0].str()}\\) %`;
      values[0] = mixed0Str;
      values[1] = mixed1Str;
      values[2] = mixed2Str;
      values[3] = mixed3Str;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Write \\(${fr}\\) as per cent.`;
      break;
    }
    case 3: {
      let p = randInt(100, 0);
      let fr = new Q(p, 100);
      fr.reduced();
      let fr1 = fr.add(new Q(1, 2));
      fr1.reduced();
      let fr2 = fr.add(new Q(-1, 2));
      fr2.reduced();
      let fr3 = fr.add(new Q(1, 1));
      fr3.reduced();
      values[0] = `\\(${fr.str()}\\)`;
      values[1] = `\\(${fr1.str()}\\)`;
      values[2] = `\\(${fr2.str()}\\)`;
      values[3] = `\\(${fr3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Write ${p}% as fraction.`;
      break;
    }
    case 4: {
      let p = randInt(100, 0);
      let fr = p / 100;
      values[0] = `\\(${fr}\\)`;
      values[1] = `\\(${fr + 1}\\)`;
      values[2] = `\\(${fr - 1}\\)`;
      values[3] = `\\(${fr + 2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Write ${p}% as decimal.`;
      break;
    }
    case 5: {
      let p = randInt(99, 1);
      let q = randInt(100, p + 1);
      let fr = new Q(p, p + q).scale(100);
      fr.reduced();
      let fr1 = new Q(q, p + q).scale(100);
      fr1.reduced();
      let fr2 = new Q(p, q).scale(100);
      fr2.reduced();
      let fr3 = new Q(q, p).scale(100);
      fr3.reduced();
      values[0] = `\\(${fr.str()}\\)%`;
      values[1] = `\\(${fr1.str()}\\)%`;
      values[2] = `\\(${fr2.str()}\\)%`;
      values[3] = `\\(${fr3.str()}\\)%`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `A quantity is divided into two parts A and B in the ratio ${p} : ${q}. What is the percentage of A?`;
      break;
    }
    case 6: {
      let p = randInt(100, 0);
      let q = randInt(1e3, 1);
      values[0] = q * (100 + p) / 100;
      values[1] = q * (p / 100);
      values[2] = q * (100 - p) / 100;
      values[3] = q * (200 + p) / 100;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `An item that costs ${q} is sold at a profit of ${p}%. Then the selling price is ?`;
      break;
    }
    case 7: {
      let p = randInt(100, 0);
      let q = randInt(1e3, 1);
      values[0] = q * p / 100;
      values[1] = q * (1 + p / 100);
      values[2] = q * (100 - p) / 100;
      values[3] = q * (200 + p) / 100;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Rs ${q} is borrowed at interest rate ${p}% per year. What is the interest after 1 year?`;
      break;
    }
    case 8: {
      let p = randInt(100, 0);
      let q = randInt(1e3, 1);
      let t = randInt(10, 1);
      values[0] = q * t * (p / 100);
      values[1] = q * t * (100 + p) / 100;
      values[2] = q * t * (100 - p) / 100;
      values[3] = q * t * (200 + p) / 100;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Rs ${q} is borrowed at interest rate ${p}% per year. What is the interest after ${t} year?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  comparison
};
