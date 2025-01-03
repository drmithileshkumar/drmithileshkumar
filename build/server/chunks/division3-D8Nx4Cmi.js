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
const division = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(9999, 0);
      let r2 = randInt(20, 1);
      values[0] = `\\(${r1}\\)`;
      values[1] = `\\(${r1 + 1}\\)`;
      values[2] = `\\(${r1 - 1}\\)`;
      values[3] = `\\(${r1 + 2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 1.5em;">${r1 * r2} ÷ ${r2} = ____</span>`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { division };
//# sourceMappingURL=division3-D8Nx4Cmi.js.map
