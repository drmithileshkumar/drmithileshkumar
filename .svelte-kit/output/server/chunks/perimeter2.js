import { r as randInt } from "./common.js";
import { R as Regular } from "./regular.js";
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
const perimeter = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(10, 3);
      let side = randInt(99, 10);
      let reg = new Regular({ n });
      let poly = `<polygon points="${reg.points}" stroke="white" stroke-width='2' fill="none" />`;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the perimeter if each side is ${side} m?</p><svg width="150" height="150" viewBox="-75 -75 150 150">` + poly + `</svg></div>`;
      values[0] = n * side;
      values[1] = (n + 1) * side;
      values[2] = (n - 1) * side;
      values[3] = n * side + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + " m";
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  perimeter
};
