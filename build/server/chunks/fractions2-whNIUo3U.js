import { r as randInt } from './common2-D0jjHEpP.js';
import './complex2-cYSf3gRs.js';
import './fraction2-2uKzQMOI.js';
import './sets3-BfptYGEP.js';

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
const fractions = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(9, 1);
      let m = randInt(9, 1);
      m = m === n ? n + 1 : m;
      values[0] = `\\(${n}\\)`;
      values[1] = `\\(${m}\\)`;
      values[2] = `\\(${m * n}\\)`;
      values[3] = `\\(\\dfrac{${1}}{${n}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is \\(\\dfrac{1}{${m}}\\) of \\(${n * m}\\) ?`;
      break;
    }
    case 1: {
      let n = randInt(9, 1);
      let m = randInt(9, 1);
      m = m === n ? n + 1 : m;
      values[0] = `\\(${n}\\)`;
      values[1] = `\\(${m}\\)`;
      values[2] = `\\(${m * n}\\)`;
      values[3] = `\\(\\dfrac{${1}}{${n}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `${n * m} is divided into ${m} equal parts. What is the size of each part?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { fractions };
//# sourceMappingURL=fractions2-whNIUo3U.js.map
