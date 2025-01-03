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
const subtraction = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n1 = randInt(99, 0);
      let n2 = randInt(120, 100);
      let n3 = randInt(140, 121);
      let n4 = randInt(160, 141);
      let r1 = randInt(999, 0);
      let r2 = randInt(999, 0);
      let r3 = randInt(999, 0);
      let r4 = randInt(999, 0);
      values[0] = r1 + n1 + ", " + r1;
      values[1] = r2 + n2 + ", " + r2;
      values[2] = r3 + n3 + ", " + r3;
      values[3] = r4 + n4 + ", " + r4;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 1.3em;">Difference of which pair is smallest?</span>`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { subtraction };
//# sourceMappingURL=subtraction4-DK7un-n7.js.map
