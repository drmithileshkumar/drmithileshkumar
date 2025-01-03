import { k as kparts, s as shuffle, r as randInt } from './common-CIVVH1Lv.js';
import { Q } from './fraction-DfHHiAXd.js';
import { S as Sets } from './sets-jGIduNNd.js';
import './nt-DokVuTcK.js';

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
const probability = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let s = new Sets([1, 2, 3, 4, 5, 6]);
      let sub = s.krandomSubset(4);
      sub.e = shuffle(sub.e);
      let ki = randInt(3, 0);
      values[0] = `\\(\\frac{${6 - sub.e[ki]}}{6}\\)`;
      values[1] = `\\(\\frac{${6 - sub.e[(ki + 1) % 4]}}{6}\\)`;
      values[2] = `\\(\\frac{${6 - sub.e[(ki + 2) % 4]}}{6}\\)`;
      values[3] = `\\(\\frac{${6 - sub.e[(ki + 3) % 4]}}{6}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `A die is thrown once. What is the probability of getting a number greater than ${sub.e[ki]} `;
      break;
    }
    case 1: {
      let total = randInt(20, 10);
      let parts = kparts(total, 3);
      let red = parts[0];
      let blue = parts[1];
      let yellow = parts[2];
      let cs = ["red", "blue", "yellow"];
      let drawn = randInt(2, 0);
      let probabilities = {
        "red": new Q(red, total),
        "blue": new Q(blue, total),
        "yellow": new Q(yellow, total)
      };
      probabilities["red"].reduced();
      probabilities["blue"].reduced();
      probabilities["yellow"].reduced();
      values[0] = `\\(${probabilities[cs[drawn]].str()}\\)`;
      values[1] = `\\(${probabilities[cs[(drawn + 1) % 3]].str()}\\)`;
      values[2] = `\\(${probabilities[cs[(drawn + 2) % 3]].str()}\\)`;
      values[3] = `\\(0\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `A bag contains ${red} red balls, ${blue} blue balls and ${yellow} yellow balls. If a ball is drawn, what is the probability that it is ${cs[drawn]}?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { probability };
//# sourceMappingURL=probability2-BbINPJBY.js.map
