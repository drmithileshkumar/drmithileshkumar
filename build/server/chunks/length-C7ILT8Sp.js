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
const length = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1);
      values[0] = r1 * r2;
      values[1] = r1 * (r2 + 1);
      values[2] = r1;
      values[3] = Math.floor(r1 / r2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + " cm";
      }
      problemset.s = `If the length of a stick is ${r1} cm, then what is the length of ${r2}  sticks?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { length };
//# sourceMappingURL=length-C7ILT8Sp.js.map
