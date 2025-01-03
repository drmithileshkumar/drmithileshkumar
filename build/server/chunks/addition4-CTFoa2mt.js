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
const addition = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n1 = randInt(999, 800);
      let n2 = randInt(n1 - 1, 750);
      let n3 = randInt(n2 - 1, 700);
      let n4 = randInt(n3 - 1, 650);
      let r1 = randInt(n1 - 1, 400);
      let r2 = randInt(n2 - 1, 350);
      let r3 = randInt(n3 - 1, 300);
      let r4 = randInt(n4 - 1, 250);
      values[0] = r1 + ", " + (n1 - r1 + 1);
      values[1] = r2 + ", " + (n2 - r2);
      values[2] = r3 + ", " + (n3 - r3);
      values[3] = r4 + ", " + (n4 - r4);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 1.3em;">Sum of which pair is larger than ${n1}?</span>`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { addition };
//# sourceMappingURL=addition4-CTFoa2mt.js.map
