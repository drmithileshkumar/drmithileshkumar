import { r as randInt, l as lcm } from './common-CIVVH1Lv.js';

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
const lcms = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(9, 2);
      let m = randInt(9, 1);
      values[0] = n * m;
      values[1] = n * m + 1;
      values[2] = n * m - 1;
      values[3] = Math.floor(n / 2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is a multiple of ${n}?`;
      break;
    }
    case 1: {
      let n = randInt(9, 2);
      let m = randInt(9, 1);
      values[0] = n;
      values[1] = n * m + 1;
      values[2] = n * m - 1;
      values[3] = n * m + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is a factor of ${n * m}?`;
      break;
    }
    case 2: {
      let n = randInt(9, 1);
      let m = randInt(9, 1);
      let l = lcm(n, m);
      values[0] = l;
      values[1] = 2 * l;
      values[2] = l + 1;
      values[3] = l + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the LCM of ${m} and ${n} ?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { lcms };
//# sourceMappingURL=lcms-D17FZRLN.js.map
