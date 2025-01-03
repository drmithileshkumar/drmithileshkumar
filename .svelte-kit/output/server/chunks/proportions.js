import { r as randInt } from "./common.js";
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
const proportions = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1) * r1;
      let r3 = randInt(2 * r1, r1 + 1);
      values[0] = `\\(${r2 * r3 / r1}\\)`;
      values[1] = `\\(${r1 * r2}\\)`;
      values[2] = `\\(${r1 * r1}\\)`;
      values[3] = `\\(${r2 * r2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Let \\(x\\) and \\(y\\) be in direct proportion. When \\(x = ${r1}\\), then \\(y = ${r2}\\). If \\(x = ${r3}\\), then what will be the value of \\(y\\)?`;
      break;
    }
    case 1: {
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1) * r1;
      let r3 = randInt(2 * r1, r1 + 1);
      values[0] = `\\(${r2 * r1 / r3}\\)`;
      values[1] = `\\(${2 * r2 * r1 / r3}\\)`;
      values[2] = `\\(${r1 * r3}\\)`;
      values[3] = `\\(${r2 * r2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Let \\(x\\) and \\(y\\) be in inverse proportion. When \\(x = ${r1}\\), then \\(y = ${r2}\\). If \\(x = ${r3}\\), then what will be the value of \\(y\\)?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  proportions
};
