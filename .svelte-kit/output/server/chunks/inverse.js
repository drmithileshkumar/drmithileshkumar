import { r as randInt } from "./common.js";
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
const inverse = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let inverseTrig = ["\\sin^{-1}", `\\cos^{-1}`, `\\tan^{-1}`];
      let zero = "0";
      let one = "1";
      let oneby2 = "\\frac{1}{2}";
      let onebysqrt2 = "\\frac{1}{\\sqrt{2}}";
      let onebysqrt3 = "\\frac{1}{\\sqrt{3}}";
      let sqrt3by2 = "\\frac{\\sqrt{3}}{2}";
      let sqrt3 = "\\sqrt{3}";
      let sign = Math.random() < 0.5 ? "" : "-";
      let inval = [
        [[zero, `0`], [oneby2, `\\frac{\\pi}{6}`], [onebysqrt2, `\\frac{\\pi}{4}`], [sqrt3by2, `\\frac{\\pi}{3}`], [one, `\\frac{\\pi}{2}`]],
        [[one, `0`], [sqrt3by2, `\\frac{\\pi}{6}`], [onebysqrt2, `\\frac{\\pi}{4}`], [oneby2, `\\frac{\\pi}{3}`], [zero, `\\frac{\\pi}{2}`]],
        [[zero, `0`], [onebysqrt3, `\\frac{\\pi}{6}`], [one, `\\frac{\\pi}{4}`], [sqrt3, `\\frac{\\pi}{3}`]],
        [[one, `\\pi`], [sqrt3by2, `\\frac{5\\pi}{6}`], [onebysqrt2, `\\frac{3\\pi}{4}`], [oneby2, `\\frac{2\\pi}{3}`], [zero, `\\frac{\\pi}{2}`]]
      ];
      let rfi = randInt(2, 0);
      let r = rfi == 1 && sign == "-" ? 3 : rfi;
      let rinvali = rfi !== 2 ? randInt(4, 0) : randInt(3, 0);
      let f = inverseTrig[rfi] + "(" + sign + inval[r][rinvali][0] + ")";
      let s = rfi == 1 ? "" : sign;
      values[0] = `\\(${s + inval[r][rinvali][1]}\\)`;
      values[1] = `\\(${s + inval[r][(rinvali + 1) % 4][1]}\\)`;
      values[2] = `\\(${s + inval[r][(rinvali + 2) % 4][1]}\\)`;
      values[3] = `\\(${s + inval[r][(rinvali + 3) % 4][1]}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the principle value of \\[${f}\\]`;
      break;
    }
    case 1: {
      let pairs = [["\\sin^{-1}", "\\cosec^{-1}"], ["\\cos^{-1}", "\\sec^{-1}"], ["\\tan^{-1}", "\\cot^{-1}"]];
      let vals = ["\\dfrac{1}{x}", "x"];
      let rpair = randInt(2, 0);
      let rpart = randInt(1, 0);
      let rval = randInt(1, 0);
      values[0] = `\\(${pairs[rpair][(rpart + 1) % 2]}${vals[(rval + 1) % 2]}\\)`;
      values[1] = `\\(${pairs[(rpair + 1) % 3][(rpart + 1) % 2]}${vals[(rval + 1) % 2]}\\)`;
      values[2] = `\\(${pairs[(rpair + 2) % 3][(rpart + 1) % 2]}${vals[(rval + 1) % 2]}\\)`;
      values[3] = `\\(${pairs[(rpair + 1) % 3][rpart]}${vals[(rval + 1) % 2]}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${pairs[rpair][rpart]}${vals[rval]} = \\) `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  inverse
};
