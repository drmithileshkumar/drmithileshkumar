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
const cubes = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(30, 3);
      let r2 = randInt(r1 - 1, 2);
      values[0] = `\\(${r1 * r1 * r1}\\)`;
      values[1] = `\\(${r1 * r2 * r1}\\)`;
      values[2] = `\\(${r1 * r2 * r2 + 1}\\)`;
      values[3] = `\\(${r2 * r2 * r2 + 1}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following is a cube number?`;
      break;
    }
    case 1: {
      let r1 = randInt(200, 1);
      let c = r1 * r1 * r1;
      values[0] = r1;
      values[1] = r1 - 1;
      values[2] = r1 + 1;
      values[3] = r1 + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(\\sqrt[3]{${c}}\\) = `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { cubes };
//# sourceMappingURL=cubes-CBhxj6hO.js.map
