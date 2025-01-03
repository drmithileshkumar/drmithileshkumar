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
const times = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let circle = `<circle cx='0' cy='0' r='45' stroke='currentcolor' stroke-width='2' fill='none' />`;
      let texts = "";
      for (let i = 1; i <= 12; i++) {
        texts += `<text text-anchor="middle" x=${38 * Math.cos(Math.PI / 6 * i - Math.PI / 2)} y=${38 * Math.sin(Math.PI / 6 * i - Math.PI / 2)} fill="rgba(0, 175, 255, 1)" font-size="14" transform="translate(0 4)">${i}</text>`;
      }
      let min = randInt(11, 0);
      let minuteHand = `<line x1='0' y1='0' x2='${38 * Math.cos(Math.PI / 6 * min - Math.PI / 2)}' y2='${38 * Math.sin(Math.PI / 6 * min - Math.PI / 2)}' stroke="currentcolor" stroke-width="2" fill="none" />`;
      let hr = randInt(12, 1);
      let hourHand = `<line x1='0' y1='0' x2='${25 * Math.cos(Math.PI / 6 * hr - Math.PI / 2 + min * Math.PI / 72)}' y2='${25 * Math.sin(Math.PI / 6 * hr - Math.PI / 2 + min * Math.PI / 72)}' stroke-linecap="round" stroke="red" stroke-width="4" fill="none" />`;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;"><svg width="100" height="100" viewBox="-50 -50 100 100">` + circle + texts + minuteHand + hourHand + `</svg></div>`;
      hr = hr < 10 ? "0" + hr : hr;
      let min1 = (min + 1) % 12;
      let min2 = (min + 2) % 12;
      let min3 = (min - 1) % 12;
      min1 = 5 * min1 < 10 ? "0" + 5 * min1 : 5 * min1;
      min2 = 5 * min2 < 10 ? "0" + 5 * min2 : 5 * min2;
      min3 = 5 * min3 < 10 ? "0" + 5 * min3 : 5 * min3;
      values[0] = hr + " : " + (5 * min < 10 ? "0" + 5 * min : 5 * min);
      values[1] = hr + " : " + min1;
      values[2] = hr + " : " + min2;
      values[3] = hr + " : " + min3;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = '<span style="color:red">' + values[i] + " </span>";
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { times };
//# sourceMappingURL=times2-CQz2-7UB.js.map
