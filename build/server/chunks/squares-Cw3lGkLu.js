import { r as randInt, b as pythagoreanTriplet } from './common-CIVVH1Lv.js';

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
const squares = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(30, 3);
      let r2 = randInt(r1 - 1, 2);
      values[0] = `\\(${r1 * r1}\\)`;
      values[1] = `\\(${r1 * r2}\\)`;
      values[2] = `\\(${r1 * r1 + 1}\\)`;
      values[3] = `\\(${r2 * r2 + 1}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following is a square number?`;
      break;
    }
    case 1: {
      let t = pythagoreanTriplet(20);
      values[0] = t.b + ", " + t.h;
      values[1] = t.p + ", " + t.h;
      values[2] = t.b - 1 + ", " + t.h;
      values[3] = t.b + ", " + (t.h - 1);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the numbers for a Pythagorean triplet one of whose member is ${t.p}`;
      break;
    }
    case 2: {
      let a = randInt(1e3, 1);
      let s = a * a;
      values[0] = a;
      values[1] = a - 1;
      values[2] = a + 2;
      values[3] = a + 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Square root of ${s} is `;
      break;
    }
    case 3: {
      let a = randInt(1e3, 1);
      let p = randInt(2, 1);
      a = a / Math.pow(10, p);
      let s = a * a;
      values[0] = a;
      values[1] = a - 1;
      values[2] = a + 2;
      values[3] = a + 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Square root of ${s.toFixed(p * p)} is `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { squares };
//# sourceMappingURL=squares-Cw3lGkLu.js.map
