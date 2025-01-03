import { r as randInt } from './common-CIVVH1Lv.js';

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
const powers = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(100, 1);
      let r2 = randInt(r1 - 1, 1);
      values[0] = `\\(${r1}^{${r2}}\\)`;
      values[1] = `\\(${r1}^{${-r2}}\\)`;
      values[2] = `\\(${r2}^{${r1}}\\)`;
      values[3] = `\\(${r2}^{${-r1}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The multiplicative inverse of \\(${r1}^{${-r2}}\\) is`;
      break;
    }
    case 1: {
      let n = randInt(100, -100, true);
      let r1 = randInt(100, -100);
      let r2 = randInt(100, -100);
      values[0] = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1 + r2}}\\)`;
      values[1] = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1 + r2 - 1}}\\)`;
      values[2] = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1 + r2 + 1}}\\)`;
      values[3] = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1 + r2 + 2}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1}}\\times ${n < 0 ? "(" + n + ")" : n}^{${r2}}\\) = `;
      break;
    }
    case 2: {
      let n = randInt(100, -100, true);
      let r1 = randInt(100, -100);
      let r2 = randInt(100, -100);
      values[0] = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1 - r2}}\\)`;
      values[1] = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1 - r2 - 1}}\\)`;
      values[2] = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1 - r2 + 1}}\\)`;
      values[3] = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1 - r2 + 2}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${n < 0 ? "(" + n + ")" : n}^{${r1}}\\div ${n < 0 ? "(" + n + ")" : n}^{${r2}}\\) = `;
      break;
    }
    case 3: {
      let n = randInt(100, -100, true);
      let k = randInt(10, 1);
      let r1 = randInt(100, -100);
      let r2 = randInt(100, -100);
      values[0] = r1 - k;
      values[1] = r1 - k - 1;
      values[2] = r1 - k + 1;
      values[3] = r1 - k + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Find \\(m\\) such that \\(${n < 0 ? "(" + n + ")" : n}^{m + ${k}}\\times ${n < 0 ? "(" + n + ")" : n}^{${r2}} = ${n < 0 ? "(" + n + ")" : n}^{${r1 + r2}}\\)`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { powers };
//# sourceMappingURL=powers-CNMYCJI_.js.map
