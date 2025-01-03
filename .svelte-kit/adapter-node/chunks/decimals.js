import { r as randInt } from "./common2.js";
import { Q } from "./fraction.js";
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
const decimals = (problemnumber) => {
  let N = 6;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(9, 1);
      let r2 = randInt(9, 1);
      let f = new Q(r1 * 10 + r2, 10);
      f.reduced();
      values[0] = r1 + "." + r2;
      values[1] = r1 + 1 + "." + r2;
      values[2] = r1 + "." + (r2 + 1);
      values[3] = r1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which is a correct decimal representation of \\(\\dfrac{${f.num}}{${f.den}}\\)?`;
      break;
    }
    case 1: {
      let k = randInt(10, 1);
      let p2 = randInt(4, 1);
      let p5 = randInt(4, 1);
      let r1 = Math.pow(2, p2) * Math.pow(5, p5);
      let r2 = randInt(r1 - 1, 1);
      let f = new Q(r2, r1);
      f.reduced();
      let dec = parseFloat(r2 / r1);
      values[0] = k + dec;
      values[1] = k - dec;
      values[2] = k + 1 - dec;
      values[3] = k - 1 + dec;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Write \\(${k}${f.str()}\\) as decimal.`;
      break;
    }
    case 2: {
      let k = randInt(1e3, 10);
      let f1 = new Q(k, 100);
      f1.reduced();
      let f2 = new Q();
      f2.randF(k, 10);
      f2.reduced();
      let f3 = new Q();
      f3.randF(2 * k, 10);
      f3.reduced();
      let f4 = new Q();
      f4.randF(randInt(1e3, 1), 1e3);
      f4.reduced();
      values[0] = `\\(${f1.str()}\\)`;
      values[1] = `\\(${f2.str()}\\)`;
      values[2] = `\\(${f3.str()}\\)`;
      values[3] = `\\(${f4.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Write \\(${f1.value().toFixed(3)}\\) as fraction.`;
      break;
    }
    case 3: {
      let s1 = Math.random();
      let s2 = Math.random();
      let k = Math.pow(10, randInt(3, 1));
      s1 = s1 * k;
      s2 = s2 * k;
      let comps = ["<", ">", "=", "none"];
      let compIndex = s1 < s2 ? 0 : s1 === s2 ? 2 : 1;
      values[0] = comps[compIndex];
      values[1] = comps[(compIndex + 1) % 4];
      values[2] = comps[(compIndex + 2) % 4];
      values[3] = comps[(compIndex + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `${s1.toFixed(3)} ______ ${s2.toFixed(3)}`;
      break;
    }
    case 4: {
      let num1 = randInt(1e3, 1);
      let num2 = randInt(1e3, 1);
      let den = Math.pow(10, randInt(3, 1));
      values[0] = `\\({${(num1 + num2) / den}}\\)`;
      values[1] = `\\({${(num1 + num2 + 1) / den}}\\)`;
      values[2] = `\\({${(num1 + num2 - 1) / den}}\\)`;
      values[3] = `\\({${(num1 + num2 + 2) / den}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = ` ${num1 / den} + ${num2 / den} =?`;
      break;
    }
    case 5: {
      let num1 = randInt(1e3, 1);
      let num2 = randInt(1e3, 1);
      let den = Math.pow(10, randInt(3, 1));
      values[0] = `\\({${(num1 - num2) / den}}\\)`;
      values[1] = `\\({${(num1 - num2 + 1) / den}}\\)`;
      values[2] = `\\({${(num1 - num2 - 1) / den}}\\)`;
      values[3] = `\\({${(num1 - num2 + 2) / den}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = ` ${num1 / den} - ${num2 / den} =?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  decimals
};
