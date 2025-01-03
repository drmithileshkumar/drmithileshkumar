import { s as shuffle, r as randInt } from './common-CIVVH1Lv.js';

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
const integers = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n1 = randInt(0, -10);
      let n2 = randInt(n1 - 1, -20);
      let n3 = randInt(n2 - 1, -30);
      let n4 = randInt(n3 - 1, -40);
      let n = [n1, n2, n3, n4];
      n = shuffle(n);
      let str = n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3];
      values[0] = n1;
      values[1] = n2;
      values[2] = n3;
      values[3] = n4;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which is the greatest number among ${str}?`;
      break;
    }
    case 1: {
      let k = randInt(7, 2);
      let nums = [];
      for (let i = 0; i < k; i++) {
        nums.push(randInt(10, -10));
      }
      let sum = nums.reduce((sum2, a) => sum2 + a, 0);
      let sign = "";
      sign = nums[0] >= 0 ? "+" : "";
      let str = "(" + sign + nums[0] + ")";
      for (let i = 1; i < k; i++) {
        str = str + (nums[i] >= 0 ? " + (+" + nums[i] + ")" : " + (" + nums[i] + ")");
      }
      values[0] = sum;
      values[1] = sum + 1;
      values[2] = sum - 1;
      values[3] = sum + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `${str} = _______`;
      break;
    }
    case 2: {
      let k = 2;
      let nums = [];
      for (let i = 0; i < k; i++) {
        nums.push(randInt(0, -20));
      }
      let sum = nums[0] - nums[1];
      let str = "(" + nums[0] + ") - (" + nums[1] + ")";
      values[0] = sum;
      values[1] = sum + 1;
      values[2] = sum - 1;
      values[3] = sum + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `${str} = _______`;
      break;
    }
    case 3: {
      let k = randInt(7, 2);
      let nums = [];
      let signs = [];
      let sum = 0;
      let str = "";
      for (let i = 0; i < k; i++) {
        nums.push(randInt(10, -10));
        signs.push(Math.random() < 0.5 ? "+" : "-");
        sum += signs[i] === "+" ? nums[i] : -nums[i];
        str += signs[i] + " (" + nums[i] + ") ";
      }
      values[0] = sum;
      values[1] = sum + 1;
      values[2] = sum - 1;
      values[3] = sum + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `${str} = _______`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { integers };
//# sourceMappingURL=integers-PaUvpMNT.js.map
