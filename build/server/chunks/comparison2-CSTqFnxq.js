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
const comparison = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let k = randInt(3, 1);
      let p = Math.pow(10, k) * randInt(200, 10);
      let r = 5 * randInt(10, 1);
      let a = p * r / 100;
      values[0] = a;
      values[1] = a + p;
      values[2] = p - a;
      values[3] = p + 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The price of an item was Rs ${p} last year. It has increased by ${r}% this year. By how much has the price increased?`;
      break;
    }
    case 1: {
      let k = randInt(3, 1);
      let p = Math.pow(10, k) * randInt(200, 10);
      let r = 5 * randInt(10, 1);
      let a = p * r / 100;
      values[0] = a + p;
      values[1] = a;
      values[2] = p - a;
      values[3] = p + 2 * a;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The price of an item was Rs ${p} last year. It has increased by ${r}% this year. What is the price now?`;
      break;
    }
    case 2: {
      let dp = randInt(100, 0);
      let k = randInt(3, 1);
      let mf = randInt(200, 10);
      let mp = Math.pow(10, k) * mf;
      let discount = mp * dp / 100;
      let sp = mp - discount;
      values[0] = dp;
      values[1] = dp + 1;
      values[2] = dp - 1;
      values[3] = dp + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `An item marked at Rs ${mp} is sold for Rs ${sp}. What is the discount%?`;
      break;
    }
    case 3: {
      let k = randInt(3, 1);
      let p = Math.pow(10, k) * randInt(200, 10);
      let r = 5 * randInt(10, 1);
      let a = p * Math.pow(100 + r, k) / Math.pow(100, k);
      let ci = a - p;
      values[0] = ci;
      values[1] = a;
      values[2] = p;
      values[3] = "none";
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Find Compound Interest on ${p} for ${k} years at ${r}% per annum compounded annually`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { comparison };
//# sourceMappingURL=comparison2-CSTqFnxq.js.map
