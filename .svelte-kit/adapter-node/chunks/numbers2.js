import { d as digits, r as randInt } from "./common.js";
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
const numbers = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = randInt(999, 100);
      let b = randInt(999, 100);
      let c = a + b;
      let digitsA = digits(a);
      let digitsB = digits(b);
      let ia = randInt(digitsA.length - 1, 0);
      let ib = randInt(digitsB.length - 1, 0);
      let iad = digitsA[ia];
      let ibd = digitsB[ib];
      digitsA[ia] = "a";
      digitsB[ib] = "b";
      let strA = "";
      for (let i = digitsA.length - 1; i >= 0; i--) {
        strA += digitsA[i];
      }
      let strB = "";
      for (let i = digitsB.length - 1; i >= 0; i--) {
        strB += digitsB[i];
      }
      values[0] = `\\(a = ${iad}, ~b = ${ibd}\\)`;
      values[1] = `\\(a = ${iad + 1}, ~b = ${ibd}\\)`;
      values[2] = `\\(a = ${iad}, ~b = ${ibd + 1}\\)`;
      values[3] = `\\(a = ${iad + 1}, ~b = ${ibd + 1}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(${strA} + ${strB} = ${c}\\), then \\(a\\) and \\(b\\) are`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  numbers
};
